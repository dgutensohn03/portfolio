/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />
/// <reference path="/Source/JS/CreateJS/easeljs-0.7.0.min.js" />
/// <reference path="/Source/JS/CreateJS/movieclip-0.7.0.min.js" />
/// <reference path="/Source/JS/CreateJS/preloadjs-0.4.0.min.js" />
/// <reference path="/Source/JS/CreateJS/soundjs-0.5.0.min.js" />
/// <reference path="/Source/JS/CreateJS/tweenjs-0.5.0.min.js" />

// CreateJS Toolkit required variables
var canvas, stage, root;

var Slide = kendo.observable({	
	//-- State

    isPaused: false,
    progress: 0,
    progressChanged: false,
    videoActive: true,
	
    //-- Lifecycle code.

	Initialize: function () {
		this.player = $('#player').get(0);

        // Bind this slide to the shell.
		Shell.BindSlide(this);		

	    // Subscribe to shell events.
	    Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
	    Shell.bind(XMEvent.Paused, this.Pause);
	    Shell.bind(XMEvent.Resumed, this.Resume);

        // Initialize CreateJS
		canvas = document.getElementById("canvas");
		images = images || {};

		if ('manifest' in lib.properties && lib.properties.manifest.length > 0) {
			var loader = new createjs.LoadQueue(false);
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
		else if (e.item.type == createjs.LoadQueue.SOUND) {
			Slide.hasSound = true;

			Slide.audio[e.item.id] = new Howl({
				src: [e.item.src],
				preload: true
			})
		}
	},

	LoadComplete: function(e) {
		Slide.trigger(XMEvent.Loaded);

	    root = new lib['Slide' + Shell.currentSlideNumber]();

	    stage = new createjs.Stage(canvas);
	    stage.addChild(root);
	    stage.update();

	    createjs.Ticker.setFPS(lib.properties.fps);

	    createjs.Ticker.addEventListener('tick', stage);

		// CreateJS is ready, play our video if we can.
	    Slide.player.addEventListener('timeupdate', Slide.Tick);
	    if (!IsInMobileSafari()) {
	        Slide.player.play();
	    }
	},

	Destroy: function () {
		createjs.Ticker.removeEventListener('tick', stage);

		Shell.unbind(XMEvent.VolumeChanged, this.OnVolumeChanged);
		Shell.unbind(XMEvent.Paused, this.Pause);
		Shell.unbind(XMEvent.Resumed, this.Resume);
	},

    //-- Slide Functions

	ContinueVideo: function () {
		this.videoActive = true;
		this.player.play();
	},

	ContinueCreateJS: function () {
		this.videoActive = false;
		root.play();
	},

	/// Tell the shell that this slide has been completed.
	Complete: function() {
	    this.trigger(XMEvent.Completed);
	},
	
	Pause: function () {
		createjs.Ticker.removeAllEventListeners('tick');
		for (var i = 0; i < Slide.activeSounds.length; i++) {
			Slide.activeSounds[i].pause();
		}

		Slide.player.pause();
	},
	
	Resume: function () {
		createjs.Ticker.addEventListener('tick', stage);

		for (var i = 0; i < Slide.activeSounds.length; i++) {
			Slide.activeSounds[i].play();
		}

		if (Slide.player.currentTime != Slide.player.duration && Slide.videoActive)
			Slide.player.play();
	},

	Tick: function (e) {
		if (Slide.player.currentTime == Slide.player.duration ) {
		    $(Slide.player).trigger('ended');
		    Slide.Complete();
		    Shell.NextSlide();
		}
		Slide.trigger(XMEvent.Seeking, { sender: Slide, value: Slide.player.currentTime / Slide.player.duration * 100 });
	},
    
    //-- Shell Events

	OnVolumeChanged: function() {
		Howler.volume(Shell.volume / 100);
		Slide.player.volume = Shell.volume / 100;
	},

	OnShellSeeking: function (e) {
		XMWarn('Scrubbing this slide is not supported.');
	},

	OnShellSeek: function (e) {
		XMWarn('Scrubbing this slide is not supported.');
	},

	//-- Sounds

	PlaySound: function (soundId, loop) {
		var sound = this.audio[soundId];

		sound.loop(loop || false)
			.once('end', function () {
				Slide.activeSounds.splice(Slide.activeSounds.indexOf(sound), 1);
			})
			.play();

		this.activeSounds.push(sound);
		return sound;
	},

	PlaySoundThenResume: function (soundId, target) {
		target = target || root;
		var sound = this.audio[soundId];

		sound.loop(false)
			.once('end', function () {
				Slide.activeSounds.splice(Slide.activeSounds.indexOf(sound), 1);
				target.play();
			})
			.play();

		this.activeSounds.push(sound);
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

//-- Aliases for Flash enums
var MouseEvent = {
	CLICK: 'click',
	MOUSE_DOWN: 'mousedown',
	MOUSE_UP: 'mouseup',
	MOUSE_OVER: 'mouseover',
	MOUSE_OUT: 'mouseout',
	MOUSE_MOVE: 'mousemove'
}