var Slide = kendo.observable({
    //-- Statup code.

    Initialize: function () {
    	this.videos = $('video');
    	this.currentVideo = 0;
    	
        Shell.BindSlide(this);

        // Subscribe to shell events.
        Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
        Shell.bind(XMEvent.Paused, this.Pause);
        Shell.bind(XMEvent.Resumed, this.Resume);
        Shell.bind(XMEvent.Seeking, this.OnShellSeeking);
        Shell.bind(XMEvent.Seek, this.OnShellSeek);

        $(this.videos).on('timeupdate', this.TimeUpdate);

        this.trigger(XMEvent.Loaded);

        if (!IsInMobileSafari()) {
        	this.videos[0].play();
        	$(this.videos[0]).removeAttr('controls');
        }
        
    },

    Destroy: function () {
        Shell.unbind(XMEvent.VolumeChanged, this.OnVolumeChanged);
        Shell.unbind(XMEvent.Paused, this.Pause);
        Shell.unbind(XMEvent.Resumed, this.Resume);
        Shell.unbind(XMEvent.Seeking, this.OnShellSeeking);
        Shell.unbind(XMEvent.Seek, this.OnShellSeek);
    },

    /// Tell the shell that this slide has been completed.
    Complete: function () {
        this.trigger(XMEvent.Completed);
       
    },

    NextVideo: function () {
    	$(this.videos[this.currentVideo]).hide();
    	this.currentVideo++;
    	$(this.videos[this.currentVideo]).show();
    	;
    	this.videos[this.currentVideo].currentTime = 0;
    	this.videos[this.currentVideo].play();
    	$(this.videos[this.currentVideo]).removeAttr('controls');
    },

    NextVideo1: function () {
    	$(this.videos[this.currentVideo]).hide();
    	this.currentVideo = 1;
    	$(this.videos[this.currentVideo]).show();
    	
    	this.videos[this.currentVideo].currentTime = 0;
    	this.videos[this.currentVideo].play();
    	$(this.videos[this.currentVideo]).removeAttr('controls');
    },

    NextVideo2: function () {
        XMLog("this.currentVideo: " + this.currentVideo);
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 2;
        XMLog("this.currentVideo: " + this.currentVideo);
        $(this.videos[this.currentVideo]).show();

        //this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo3: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 3;
        
        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo4: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 4;
        
        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo5: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 5;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo6: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 6;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo7: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 7;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo8: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 8;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo9: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 9;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo10: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 10;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo11: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 11;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    NextVideo12: function () {
        $(this.videos[this.currentVideo]).hide();
        this.currentVideo = 12;

        $(this.videos[this.currentVideo]).show();

        this.videos[this.currentVideo].currentTime = 0;
        this.videos[this.currentVideo].play();
        $(this.videos[this.currentVideo]).removeAttr('controls');
    },
    ReviewVideo: function () {
    	this.Pause();
    	$(this.videos[this.currentVideo]).hide();
    	this.currentVideo--;
    	$(this.videos[this.currentVideo]).show();
    },

    Pause: function () {
    	Slide.videos[Slide.currentVideo].pause();
    },

    Resume: function () {
        if (Slide.videos[Slide.currentVideo].currentTime != Slide.videos[Slide.currentVideo].duration) {
            Slide.videos[Slide.currentVideo].play();
        }
    },

    TimeUpdate: function (e) {
    	if (Slide.videos[Slide.currentVideo].currentTime == Slide.videos[Slide.currentVideo].duration && IsInChrome()) {
    		$(Slide.videos[Slide.currentVideo]).trigger('ended');
    	}
    	Slide.trigger(XMEvent.Seeking, { sender: Slide, value: (Slide.videos[Slide.currentVideo].currentTime / Slide.videos[Slide.currentVideo].duration * (100 / Slide.videos.length)) + (100 / Slide.videos.length * Slide.currentVideo) });
    },

    //-- Shell Events
    OnVolumeChanged: function () {
    	for (var i = 0; i < Slide.videos.length; i++) {
    		Slide.videos[i].volume = Shell.volume / 100;
    	}    	
    },

    OnShellSeeking: function (e) {
        
    },

    OnShellSeek: function (e) {
    	XMWarn('VideoSeries slides cannot be scrubbed.');
    }
});

var Shell = parent.Shell;
var LMS = parent.LMS