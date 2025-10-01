/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />
/// <reference path="/Source/JS/CreateJS/easeljs-0.7.0.min.js" />
/// <reference path="/Source/JS/CreateJS/movieclip-0.7.0.min.js" />
/// <reference path="/Source/JS/CreateJS/preloadjs-0.4.0.min.js" />
/// <reference path="/Source/JS/CreateJS/soundjs-0.5.0.min.js" />
/// <reference path="/Source/JS/CreateJS/tweenjs-0.5.0.min.js" />

var Slide = kendo.observable({
    //-- State

    isPaused: false,
    progress: 0,
    progressChanged: false,

	//-- Howler

    audio: {},
    activeSounds: [],
    hasSound: false,

    //-- Lifecycle code.

    Initialize: function () {
        // Bind this slide to the shell.
        Shell.BindSlide(this);

        // Subscribe to shell events.
        Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
        Shell.bind(XMEvent.Paused, this.Pause);
        Shell.bind(XMEvent.Resumed, this.Resume);

        // Initialize CreateJS
        init();
    },

    Destroy: function () {
        createjs.Ticker.removeEventListener('tick', stage);

        Shell.unbind(XMEvent.VolumeChanged, this.OnVolumeChanged);
        Shell.unbind(XMEvent.Paused, this.Pause);
        Shell.unbind(XMEvent.Resumed, this.Resume);
    },

    //-- Slide Functions

    /// Tell the shell that this slide has been completed.
    Complete: function () {
        this.trigger(XMEvent.Completed);
    },

    Pause: function () {
        createjs.Ticker.removeAllEventListeners('tick');

        for (var i = 0; i < Slide.activeSounds.length; i++) {
        	Slide.activeSounds[i].pause();
        }
    },

    Resume: function () {
        createjs.Ticker.addEventListener('tick', stage);

        for (var i = 0; i < Slide.activeSounds.length; i++) {
        	Slide.activeSounds[i].play();
        }
    },

    //-- Shell Events

    OnVolumeChanged: function () {
    	Howler.volume(Shell.volume / 100);
    },

    //-- Sounds

    sounds: new Array(),
    hasSound: false,

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
    },

    Continue: function (target) {
        target.play();
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