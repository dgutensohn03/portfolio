/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />
/// <reference path="/Source/JS/CreateJS/easeljs-0.7.1.min.js" />
/// <reference path="/Source/JS/CreateJS/movieclip-0.7.1.min.js" />
/// <reference path="/Source/JS/CreateJS/preloadjs-0.4.1.min.js" />
/// <reference path="/Source/JS/CreateJS/soundjs-0.5.2.min.js" />
/// <reference path="/Source/JS/CreateJS/tweenjs-0.5.1.min.js" />

// CreateJS Toolkit required variables
var canvas, stage, root;

var Slide = kendo.observable({
    //-- State

    isPaused: false,
    progress: 0,
    progressChanged: false,

    //-- Lifecycle code.

    Initialize: function () {
        // Bind this slide to the shell.
        Shell.BindSlide(this);

        // Subscribe to shell events.
        Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
        Shell.bind(XMEvent.Paused, this.Pause);
        Shell.bind(XMEvent.Resumed, this.Resume);
        Shell.bind(XMEvent.Seeking, this.OnShellSeeking);
        Shell.bind(XMEvent.Seek, this.OnShellSeek);


        // Initialize CreateJS
        canvas = document.getElementById("canvas");
        images = images || {};

        // Register SoundJS for common platforms.
        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin]);

        if ('manifest' in lib.properties && lib.properties.manifest.length > 0) {
            var loader = new createjs.LoadQueue(false);
            loader.installPlugin(createjs.Sound);
            loader.addEventListener("fileload", this.HandleFileLoad);
            loader.addEventListener("complete", this.LoadComplete);
            loader.loadManifest(lib.properties.manifest);
        } else {
            this.LoadComplete(null);
        }
    },

    HandleFileLoad: function (e) {
        if (e.item.type == createjs.LoadQueue.IMAGE)
            images[e.item.id] = e.result;
        else if (e.item.type == createjs.LoadQueue.SOUND)
            this.hasSound = true;
    },

    LoadComplete: function (e) {
        Slide.trigger(XMEvent.Loaded);

        root = new lib['Slide' + $.getUrlVar('slide')]();

        stage = new createjs.Stage(canvas);
        stage.addChild(root);
        stage.update();

        createjs.Ticker.setFPS(lib.properties.fps);

	    
    },

    Destroy: function () {
        createjs.Ticker.removeEventListener('tick', stage);
        createjs.Ticker.removeEventListener('tick', this.Tick);

        Shell.unbind(XMEvent.VolumeChanged, this.OnVolumeChanged);
        Shell.unbind(XMEvent.Paused, this.Pause);
        Shell.unbind(XMEvent.Resumed, this.Resume);
        Shell.unbind(XMEvent.Seeking, this.OnShellSeeking);
        Shell.unbind(XMEvent.Seek, this.OnShellSeek);
    },
    //-- Slide Functions

	/// Tell the shell that this slide has been completed.
    Complete: function () {
        this.trigger(XMEvent.Completed);
	},
	
    Pause: function () {
        createjs.Ticker.removeAllEventListeners('tick');
        for (var i = 0; i < Slide.sounds.length; i++) {
            Slide.sounds[i].pause();
        }
    },

    Resume: function () {
        createjs.Ticker.addEventListener('tick', stage);
        createjs.Ticker.addEventListener('tick', Slide.Tick);

        for (var i = 0; i < Slide.sounds.length; i++) {
            Slide.sounds[i].resume();
        }
    },
    

        Tick: function (e) {
            Slide.trigger(XMEvent.Seeking, { sender: Slide, value: root.currentFrame / root.timeline.duration * 100 });
        },

//-- Shell Events

        OnVolumeChanged: function () {
		createjs.Sound.setVolume(Shell.volume / 100);
        $('#player')[0].volume = Shell.volume / 100;
        },

        OnShellSeeking: function (e) {
            if (Slide.sounds.length != 0) {
                for (var i = 0; i < Slide.sounds.length; i++) {
                    Slide.sounds[i].stop();
                }

                Slide.sounds = [];
            }

            root.gotoAndStop(Math.floor(root.timeline.duration * (e.value / 100)));
        },

        OnShellSeek: function (e) {
            root.play();
        },
    //-- Sounds

        sounds: new Array(),
        hasSound: false,

        PlaySound: function (soundId, loop) {
            var sound = createjs.Sound.play(soundId, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
            sound.addEventListener('complete', function () {
                Slide.sounds.splice(Slide.sounds.indexOf(sound), 1);
                sound.removeAllEventListeners('complete');
            });
            this.sounds.push(sound);
            return sound;
        },

    /// Plays a sound then plays the target clip when complete, defaults to the stage.
        PlaySoundThenResume: function (soundId, target) {
            target = target || root;
            var sound = createjs.Sound.play(soundId, createjs.Sound.INTERRUPT_EARLY, 0, 0, false);
            sound.addEventListener('complete', function () {
                Slide.sounds.splice(Slide.sounds.indexOf(sound), 1);
                sound.removeAllEventListeners('complete');
                target.play();
            });
            this.sounds.push(sound);
        }
});

var Shell = parent.Shell;
var LMS = parent.LMS;

function playSound(soundId, loop) {
    return Slide.PlaySound(soundId, loop);
}

function playSoundThenResume(soundId, target) {
    Slide.PlaySoundThenResume(soundId, target);
}

var videoStarted = false;

function ShowVideo() {
    videoStarted = true;
    $('#player').show();
    $('#canvas').hide();
}

function ShowCanvas() {
    videoStarted = false;
    $('#player').hide();
    $('#canvas').show();
    if (IsInMobileSafari()) {
        $('#soundFix').show();
        $('#soundFix').click(function () {
            createjs.WebAudioPlugin.playEmptySound();
            $('#soundFix').hide();
            createjs.Ticker.addEventListener("tick", stage);
        });
    } else {
        $('#soundFix').hide();
        createjs.Ticker.addEventListener("tick", stage);
        root.play();
    }
}