/// <reference path="../../Assets/Strings/ShellStrings.js" />
/// <reference path="Assets/AppSettings.js" />
/// <reference path="/Source/XM/Events/XMEvent.js" />
/// <reference path="SlideStatus.js" />
/// <reference path="/Source/JS/FlashDetect/flash_detect_min.js" />

/**
 * The shell is the container for a course. Manages everything about the course.
 */
var Shell = kendo.observable({
    //-- Startup Code

    Initialize: function () {
        // Grab the progress from the LMS, if none create it.
        if (AppSettings.LMS.enabled) {
            CourseData.progress = LMS.GetFromSuspendData('course_progress');
        }

        if (CourseData.progress == undefined) {
            XMLog('No progress data received from LMS, starting from scratch.');
            CourseData.progress = new Array();
            for (var l = 0; l < CourseData.lessons.length; l++) {
                CourseData.progress[l] = new Array();
                for (var s = 0; s < CourseData.lessons[l].slides.length; s++) {
                    CourseData.progress[l].push(CourseData.lessons[l].slides[s].defaultStatus);
                    if (CourseData.progress[l][s] === undefined)
                        CourseData.progress[l][s] = AppSettings.NextButton.locked ? SlideStatus.Locked : SlideStatus.Unlocked;
                }
            }

            if (AppSettings.LMS.enabled) LMS.SaveToSuspendData('course_progress', CourseData.progress, false);
        }

        // Bind Event Handlers
        this.bind(XMEvent.LessonChanged, this.UpdateSlide);
        this.bind(XMEvent.SlideChanged, this.UpdateSlide);

        // Start loading extensions, and start the course when we're done.
        ExtensionManager.bind(XMEvent.Loaded, this.Start);
        ExtensionManager.LoadExtensions();
    },

    Start: function () {
        var useBookmark = false;

        // If a bookmark exists, ask the user if they want to resume from where they left off.
        if (AppSettings.LMS.enabled && LMS.Bookmark() !== undefined && LMS.Bookmark() !== "" && LMS.Bookmark() !== "disconnected") {
            if (confirm(LMSStrings.BookmarkPrompt)) {
                useBookmark = true;

                var bookmark = LMS.Bookmark().split(',');

                Shell.currentLessonNumber = parseInt(bookmark[0]);
                Shell.currentSlideNumber = parseInt(bookmark[1]);
            }
        }

        // If we are not resuming from a bookmark, use the launch action specified in AppSettings or Url Vars, otherwise display the current slide.
        if (!useBookmark) {
            if (AppSettings.canConsumeUrlVars && ($.getUrlVar('lesson') != undefined || $.getUrlVar('slide') != undefined)) {
                Shell.currentLessonNumber = parseInt($.getUrlVar('lesson')) || Shell.currentLessonNumber;
                Shell.currentSlideNumber = parseInt($.getUrlVar('slide')) || Shell.currentSlideNumber;

                Shell.UpdateSlide();
                return;
            }

            AppSettings.launchAction();
        } else {
            Shell.UpdateSlide();
        }
    },

    Destroy: function () {
        // Anything that needs to happen when the Shell is destroyed.
    },

    ExitCourse: function () {
        setTimeout(function () {
            alert(ShellStrings.ExitFail);
        }, 300);
        window.open('', '_self');
        window.close();
    },

    //-- Navigation & State Functions

    /// Checks to see if the course is complete.
    IsCourseComplete: function () {
        for (var lesson = 1; lesson <= CourseData.progress.length; lesson++) {
            if (!this.IsLessonComplete(lesson))
                return false;
        }
        return true;
    },

    /// Complete the course early.
    CompleteCourse: function () {
        for (var l = 0; l < CourseData.lessons.length; l++) {
            for (var s = 0; s < CourseData.lessons[l].slides.length; s++) {
                this.SetSlideProgress(l, s, SlideStatus.Complete);
            }
        }
    },

    /// Unlock all slides.
    UnlockCourse: function () {
        for (var l = 0; l < CourseData.lessons.length; l++) {
            for (var s = 0; s < CourseData.lessons[l].slides.length; s++) {
                if (CourseData.progress[l][s] == SlideStatus.Locked)
                    this.SetSlideProgress(l, s, SlideStatus.Unlocked);
            }
        }
    },

    /// Go to the previous lesson.
    PreviousLesson: function () {
        this.currentLessonNumber--;
        this.currentSlideNumber = 0;

        this.trigger(XMEvent.LessonChanged);
    },

    /// Go to the next lesson.
    NextLesson: function () {
        this.currentLessonNumber++;
        this.currentSlideNumber = 0;

        this.trigger(XMEvent.LessonChanged);
    },

    /// Go to the specified lesson.
    GoToLesson: function (lessonNumber) {
        this.GoToSlide(1, lessonNumber);
    },

    /// Gets the current lesson object from the CourseData.
    CurrentLessonData: function () {
        return CourseData.lessons[this.currentLessonNumber - 1];
    },

    /// Gets the progress array for the current lesson.
    CurrentLessonProgress: function () {
        return CourseData.progress[this.currentLessonNumber - 1];
    },

    /// Checks to see if the specified lesson is complete, defaults to current lesson.
    IsLessonComplete: function (lesson) {
        if (lesson === undefined)
            lesson = this.currentLessonNumber;
        for (var slide = 0; slide < CourseData.progress[lesson - 1].length; slide++) {
            if (CourseData.progress[lesson - 1][slide] != SlideStatus.Complete)
                return false;
        }
        return true;
    },

    IsSlideComplete: function (slide, lesson) {
        if (lesson === undefined)
            lesson = this.currentLessonNumber;

        return CourseData.progress[lesson - 1][slide - 1] == SlideStatus.Complete;
    },

    isSlideUnlocked: function (slide, lesson) {
        if (lesson === undefined)
            lesson = this.currentLessonNumber;

        return CourseData.progress[lesson - 1][slide - 1] >= SlideStatus.Unlocked;
    },

    /// Check if there is a previous slide to go back to.
    PreviousSlideExists: function () {
        if ('previousSlide' in this.CurrentSlideData())
            return this.CurrentSlideData().previousSlide > 0;
        return this.currentSlideNumber !== 1;
    },

    /// Go to the previous slide.
    PreviousSlide: function () {
        if (!this.PreviousSlideExists())
            return;

        var data = this.CurrentSlideData();

        if ('previousSlide' in data) {
            if (typeof data.previousSlide == 'number')
                this.currentSlideNumber = data.previousSlide;
            else
                this.currentSlideNumber = data.previousSlide();
        } else
            this.currentSlideNumber--;

        this.trigger(XMEvent.SlideChanged);
    },

    /// Check if there is a next slide to advance to.
    NextSlideExists: function () {
        // TODO : last slide action
        if ('nextSlide' in this.CurrentSlideData())
            return this.CurrentSlideData().nextSlide <= this.CurrentLessonData().slides.length;
        return this.currentSlideNumber !== this.CurrentLessonData().slides.length;
    },

    /// Go to the next slide.
    NextSlide: function () {
        if (!this.NextSlideExists()) {
            if ('lastSlideAction' in AppSettings) {
                AppSettings.lastSlideAction();
            }

            return;
        }

        var data = this.CurrentSlideData();

        if ('nextSlide' in data) {
            if (typeof data.nextSlide == 'number')
                this.currentSlideNumber = this.CurrentSlideData().nextSlide;
            else
                this.currentSlideNumber = this.CurrentSlideData().nextSlide();
        } else
            this.currentSlideNumber++;

        this.trigger(XMEvent.SlideChanged);
    },

    UpdateIcons: function () {
        var icon1 = LMS.GetFromSuspendData('i_1');
        var icon2 = LMS.GetFromSuspendData('i_2');
        var icon3 = LMS.GetFromSuspendData('i_3');
        var icon4 = LMS.GetFromSuspendData('i_4');

        if (icon1 == true)
            $('#icon_1').fadeIn();

        if (icon2 == true)
            $('#icon_2').fadeIn();

        if (icon3 == true)
            $('#icon_3').fadeIn();

        if (icon4 == true)
            $('#icon_4').fadeIn();
    },

    /// Get or set the progress status of the following slide.
    NextSlideProgress: function (value) {
        if (!this.NextSlideExists())
            return;

        var data = this.CurrentSlideData();

        if ('nextSlide' in this.CurrentSlideData()) {
            if (typeof data.nextSlide == 'number') {
                if (value != undefined)
                    this.SetSlideProgress(this.currentLessonNumber - 1, this.CurrentSlideData().nextSlide - 1, value);
                return CourseData.progress[this.currentLessonNumber - 1][this.CurrentSlideData().nextSlide - 1];
            } else {
                if (value != undefined)
                    this.SetSlideProgress(this.currentLessonNumber - 1, this.CurrentSlideData().nextSlide() - 1, value);
                return CourseData.progress[this.currentLessonNumber - 1][this.CurrentSlideData().nextSlide() - 1];
            }
        } else {
            if (value != undefined)
                this.SetSlideProgress(this.currentLessonNumber - 1, this.currentSlideNumber, value);
            return CourseData.progress[this.currentLessonNumber - 1][this.currentSlideNumber];
        }
    },

    /// Go to the specified slide. If lesson is not specified, the current lesson will be used.
    GoToSlide: function (slideNumber, lessonNumber) {
        if (lessonNumber !== undefined)
            this.currentLessonNumber = lessonNumber;
        this.currentSlideNumber = slideNumber;

        this.trigger(XMEvent.SlideChanged);
    },

    /// Binds the shell to a new slide.
    BindSlide: function (slide) {
        this.contentStatus = LoadingStatus.Loading;
        this.set('currentSlideObject', slide);

        // Subscribe to slide events
        slide.one(XMEvent.Loaded, this.OnSlideLoaded.bind(this));
        slide.one(XMEvent.Completed, this.OnSlideComplete.bind(this));
        slide.bind(XMEvent.Seeking, this.OnSeeking.bind(this));
    },

    /// Gets the current slide object from the CourseData
    CurrentSlideData: function () {
        return CourseData.lessons[this.currentLessonNumber - 1].slides[this.currentSlideNumber - 1];
    },

    /// Gets a reference to the current slide object.
    CurrentSlide: function () {
        return this.get('currentSlideObject');
    },

    /// Gets the progress of the current slide from the courseProgress array.
    CurrentSlideProgress: function (value) {
        if (value != undefined)
            this.SetSlideProgress(this.currentLessonNumber - 1, this.currentSlideNumber - 1, value);

        return CourseData.progress[this.currentLessonNumber - 1][this.currentSlideNumber - 1];
    },

	/**
	 * Sets the progress of a slide only if it is more complete than the previous status.
	 * @param {type} lessonNumber The number of the lesson target slide is in.
	 * @param {type} slideNumber The target slide number.
	 * @param {type} progress The progress to set.
	 */
    SetSlideProgress: function (lessonNumber, slideNumber, progress) {
        if (CourseData.progress[lessonNumber][slideNumber] < progress) {
            CourseData.progress[lessonNumber][slideNumber] = progress;
            CourseData.trigger('change', { field: 'progress' });

            // Are we done with the course?
            if (this.IsCourseComplete()) {
                this.trigger(XMEvent.Completed);
            }
        }
    },

    /// Toggles the pause state of the current slide.
    TogglePause: function () {
        if (this.contentStatus == LoadingStatus.Complete) {
            if (!this.isPaused)
                this.Pause();
            else
                this.Resume();
        }
    },

    Pause: function () {
        if (this.contentStatus == LoadingStatus.Complete && !this.isPaused) {
            this.trigger(XMEvent.Paused);
            this.isPaused = true;
            $('#pause-button').html(ShellStrings.Play);
        }
    },

    Resume: function () {
        if (this.contentStatus == LoadingStatus.Complete && this.isPaused) {
            this.trigger(XMEvent.Resumed);
            this.isPaused = false;
            $('#pause-button').html(ShellStrings.Pause);
        }
    },

    /// Remove focus from the Shell by pausing the slide and disabling Pause and Replay buttons.
    Blur: function () {
        if (this.contentStatus == LoadingStatus.Complete) {
            this.Pause();
        }
        $('#pause-button').attr('disabled', true);
        $('#replay-button').attr('disabled', true);
    },

    /// Restore focus to the Shell.
    Unblur: function () {
        if (this.contentStatus == LoadingStatus.Complete) {
            this.Resume();
        }
        $('#pause-button').removeAttr('disabled');
        $('#replay-button').removeAttr('disabled');
    },

    /// Change slides in the iframe to match the current numbers.
    UpdateSlide: function () {
        ExtensionManager.AutoHide();

        $('.loader').show();

        $('#contents').replaceWith($('<iframe id="contents" onblur="OnBlurIFrame();" onclick="OnBlurIFrame();"></iframe>'));

        this.contentStatus = LoadingStatus.Requested;
        if (AppSettings.hasFlashDefault && FlashDetect.installed == 1 && this.CurrentSlideData().hasFlashDefault != false) {
            $('#contents').attr('src', 'Content/Templates/Flash.html?lesson=' + this.currentLessonNumber + '&slide=' + this.currentSlideNumber);
        } else {
            switch (this.CurrentSlideData().type) {
                case 'Edge':
                    $('#contents').attr('src', 'Content/Lesson' + this.currentLessonNumber + '/Slide' + this.currentSlideNumber + '/index.html');
                    break;
                case 'HTML':
                    $('#contents').attr('src', 'Content/Lesson' + this.currentLessonNumber + '/Slide' + this.currentSlideNumber + '.html');
                    break;
                case 'Game':
                    $('#contents').attr('src', 'Content/Lesson' + this.currentLessonNumber + '/Game/index.html?State=' + this.CurrentSlideData().gameState);
                    break;
                case 'External':
                    this.CurrentSlideProgress(SlideStatus.Complete);
                // No break so we filter down to default.
                default:
                    $('#contents').attr('src', 'Content/Templates/' + this.CurrentSlideData().type + '.html?lesson=' + this.currentLessonNumber + '&slide=' + this.currentSlideNumber);
                    break;
            }
        }



        this.playbackMax = 0;

        this.trigger(XMEvent.Navigated);

        this.UpdateBreadcrumbs();
        this.UpdateButtonStates();
        CCText.Update();

                Shell.bind(XMEvent.VolumeChanged, function () {
            Howler.volume(Shell.volume / 100);
        });

        Shell.bind(XMEvent.Navigated, function () {
            backgroundMusic.pause();
            backgroundMusicPlaying = false;
        });

        Shell.bind(XMEvent.Paused, function () {
            backgroundMusic.volume(0);
            backgroundMusicPlaying = false;
        })

        Shell.bind(XMEvent.Resumed, function () {
            backgroundMusic.volume(1);
            backgroundMusicPlaying = false;
        })

        function CheckAudio() {
            if (Shell.currentSlideNumber == 1 && !backgroundMusicPlaying || Shell.currentSlideNumber == 2 && !backgroundMusicPlaying || Shell.currentSlideNumber == 3 && !backgroundMusicPlaying || Shell.currentSlideNumber == 5 && !backgroundMusicPlaying) {
                backgroundMusic.play();
                backgroundMusic.volume(Shell.volume / 100);
                backgroundMusicPlaying = true;
            } else {
                backgroundMusic.pause();
                backgroundMusicPlaying = false;
            }
        }

        CheckAudio();
    },

    /// Update the status bar information at the top of the shell.
    UpdateBreadcrumbs: function () {
        $('#breadcrumbs').html(
            CourseData.name + " > " +
            this.CurrentLessonData().name + ' > ' +
            this.CurrentSlideData().name
        );

        $('#lesson-progress').html(this.currentSlideNumber + " of " + this.CurrentLessonData().slides.length);
    },

    /// Updates shell buttons to their proper states.
    UpdateButtonStates: function () {
        var data = this.CurrentSlideData();

        // Locks the next button if any of the following conditions are met:
        //	1. There is no next slide.
        //	2. The current slide is not complete, and the course is set to lock the next button.
        if (!this.NextSlideExists() && 'lastSlideAction' in AppSettings && (this.CurrentSlideProgress() == SlideStatus.Complete || !AppSettings.NextButton.locked))
            $('#next-button').removeAttr('disabled');
        else if (!this.NextSlideExists() || (this.NextSlideProgress() < SlideStatus.Unlocked && AppSettings.NextButton.locked))
            $('#next-button').attr('disabled', true);
        else if ('nextSlide' in data && data.nextSlide < this.currentSlideNumber && this.CurrentSlideProgress() != SlideStatus.Complete && AppSettings.NextButton.locked)
            $('#next-button').attr('disabled', true);
        else
            $('#next-button').removeAttr('disabled');

        // Checks if there is a slide to go back to and disables the button if there is not.
        if (!this.PreviousSlideExists())
            $('#back-button').attr('disabled', true);
        else
            $('#back-button').removeAttr('disabled');

        // Shell has user focus again.
        this.Unblur();

        // Changing slides breaks pause state.
        $('#pause-button').html(ShellStrings.Pause);
        this.isPaused = false;

        this.StopBlinking();

        // Unselect selected buttons.
        $('.nav-button').blur();
    },

    //-- Events

    /// Called by the slide when it is viewed.
    OnSlideLoaded: function () {
        $('.loader').hide();

        this.contentStatus = LoadingStatus.Complete;
        if (this.CurrentSlideProgress() != SlideStatus.Complete) {
            this.CurrentSlideProgress(SlideStatus.Viewed);
        }

        this.trigger(XMEvent.VolumeChanged);
    },

    /// Called by the slide when it is compelte.
    OnSlideComplete: function () {
        // TODO: Slide Complete Action option.
        this.CurrentSlideProgress(SlideStatus.Complete);
        this.NextSlideProgress(SlideStatus.Unlocked);

        this.UpdateButtonStates();

        if (this.NextSlideExists() || AppSettings.lastSlideAction != undefined)
            this.Blink('next-button', AppSettings.DefaultBlinkColor);
    },

    /// Called when something is causing the content to seek.
    OnSeeking: function (e) {
        Shell.set('playbackProgress', e.value);

        if (e.sender && e.sender != Shell.currentSlideObject) {
            Shell.trigger(XMEvent.Seeking, e);
        } else {
            if (e.value > this.playbackMax)
                this.playbackMax = e.value;
            // TODO : Update slide status template somehow? (currentFrame / totalFrames for Flash, etc).
        }
    },

    /// Called when something is causing the content to seek.
    OnSeekingLocked: function (e) {
        // If we are scrubbing from the Shell, check if we've gone past the boundary.
        if (e.value > Shell.playbackMax) {
            return;
        }

        Shell.set('playbackProgress', e.value);
        Shell.trigger(XMEvent.Seeking, e);

        return true;
    },

    /// Called when the content has finalized seeking.
    OnSeek: function (e) {
        Shell.trigger(XMEvent.Seek, e);
    },

    //-- Animation

    blinking: false,
    buttonsBlinking: new Array(),

	/**
	 * Make the specified button shift between it's original color and the
	 *	color specified in AppSettings.
	 * @param {type} buttonName The HTML id of the button.
	 */
    Blink: function (buttonName) {
        var BlinkIn = function () {
            if (Shell.blinking) {
                $('#' + buttonName).addClass('blink', 500);
                setTimeout(BlinkOut, 500);
            }
        };

        var BlinkOut = function () {
            $('#' + buttonName).removeClass('blink', 500);
            setTimeout(BlinkIn, 500);
        };

        this.blinking = true;
        this.buttonsBlinking.push(buttonName);
        BlinkIn();
    },

    /// Stop all blinking buttons.
    StopBlinking: function () {
        this.blinking = false;
        for (var i = 0; i < this.buttonsBlinking.length; i++)
            $('#' + this.buttonsBlinking[i]).removeClass('blink');
        this.buttonsBlinking = new Array();
    },

    // Custom functions for non-kendo slides:

    BindCustomSlide: function (slide) {
        this.contentStatus = LoadingStatus.Loading;
    },

    OnCustomSlideLoaded: function () {
        this.OnSlideLoaded();
    },

    OnCustomSlideComplete: function () {
        this.OnSlideComplete();
    },

    //-- Sounds

    audio: {},
    activeSounds: [],

    PlaySound: function (soundId, loop) {
        var sound = this.audio[soundId];

        sound.loop(loop || false)
            .once('end', function () {
                Shell.activeSounds.splice(Shell.activeSounds.indexOf(sound), 1);
            })
            .play();

        this.activeSounds.push(sound);
        return sound;
    },

    PlaySoundThen: function (soundId, callback) {
        var sound = this.audio[soundId];

        sound.once('end', function () {
            callback();
            console.log(Shell.activeSounds.indexOf(sound))
            Shell.activeSounds.splice(Shell.activeSounds.indexOf(sound), 1);
        })
            .play();

        this.activeSounds.push(sound);
        return sound;
    },

    // Game Calls

    ShowContentBox: function (name, callback) {
        $('#content-box').attr('src', 'Assets/Images/Game/' + name + '.png');
        $('#whiteOut').show();
        $('#content-box').show();

        this.PlaySoundThen(name, function () {
            setTimeout(function () {
                $('#whiteOut').hide();
                $('#content-box').hide();
                $('#content-box').attr('src', '');
                callback();
            }, 1500);
        });
    }
});

//-- Connect to LMS

if (AppSettings.LMS.enabled) {
    // Save bookmark and supporting data whenever the slide changes.
    Shell.bind(XMEvent.Navigated, function (e) {
        LMS.Bookmark(Shell.currentLessonNumber + ',' + Shell.currentSlideNumber)
        LMS.WriteSuspendData();
    });

    // Mark the course complete when the Shell is satisfied.
    Shell.bind(XMEvent.Completed, function (e) {
        LMS.Complete();
    });
}