/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />

var Slide = kendo.observable({
	//-- State
	isPaused: false,

	//-- Statup code.

	Initialize: function () {
		Shell.BindSlide(this);
		this.trigger(XMEvent.Loaded);
	},

	Destroy: function () {

	},

	/// Tell the shell that this slide has been completed.
	Complete: function () {
	    this.trigger(XMEvent.Completed);
	},

	Pause: function () {

	},

	Resume: function () {

	},

	//-- Shell Events
	OnVolumeChanged: function () {

	},

	OnShellSeeking: function (e) {

	},

	OnShellSeek: function (e) {

	}
});

var Shell = parent.Shell;
var LMS = parent.LMS;

Slide.Initialize();