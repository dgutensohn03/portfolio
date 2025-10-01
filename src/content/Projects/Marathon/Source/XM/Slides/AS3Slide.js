/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />

var Slide = kendo.observable({
	//-- State

    isPaused: false,
    currentFrame: 0,
    totalFrames: 1,
	
	//-- Statup code.
	
	Initialize: function () {
	    Shell.BindSlide(this);

		// Subscribe to shell events.
	    Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
	    Shell.bind(XMEvent.Paused, this.Pause);
	    Shell.bind(XMEvent.Resumed, this.Resume);
	    Shell.bind(XMEvent.Seeking, this.OnShellSeeking);
	    Shell.bind(XMEvent.Seek, this.OnShellSeek);
	},

	Destroy: function () {
		Shell.unbind(XMEvent.VolumeChanged, this.OnVolumeChanged);
		Shell.unbind(XMEvent.Paused, this.Pause);
		Shell.unbind(XMEvent.Resumed, this.Resume);
		Shell.unbind(XMEvent.Seeking, this.OnShellSeeking);
		Shell.unbind(XMEvent.Seek, this.OnShellSeek);
	},
	
	/// Tell the shell that this slide has been loaded. Called from Actionscript.
	Loaded: function () {
		this.trigger(XMEvent.Loaded);
	},

	/// Tell the shell that this slide has been completed.
	Complete: function() {
		this.trigger(XMEvent.Completed);
	},
	
	Pause: function() {
		AS3Callback('Pause');
	},
	
	Resume: function() {
		AS3Callback('Resume');
	},
	
    //-- Shell Events
	OnVolumeChanged: function() {
		AS3Callback('OnVolumeChanged');
	},
	
	GetVolume: function() {
		return Shell.volume;
	},

	SetCurrentFrame: function (currentFrame) {
		this.currentFrame = currentFrame;
		this.trigger(XMEvent.Seeking, { sender: this, value: this.currentFrame / this.totalFrames * 100 });
	},

	SetTotalFrames: function(totalFrames) {
		this.totalFrames = totalFrames;
	},

	GetProgress: function () {
		return Shell.playbackProgress;
	},

	OnShellSeeking: function (e) {
		// Send out a pause so playback doesn't cause scrubbers to bounce.
		Shell.Pause();

		// Notify the slide that the progress has changed.
		AS3Callback('OnShellSeeking');
	},

	OnShellSeek: function (e) {
		Shell.Resume();
	}
});

function GetFlashMovie() {
	var isIE = navigator.appName.indexOf('Microsoft') != -1;
	return (isIE) ? window['player'] : document['player'];
}

function AS3Callback(command) {
	GetFlashMovie().AS3Callback(command);
}

Slide.Initialize();