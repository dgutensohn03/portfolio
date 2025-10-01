/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />

var Slide = kendo.observable({
	//-- State
	isPaused: false,

	//-- Statup code.

	Initialize: function () {
		Shell.BindSlide(this);

		// Subscribe to shell events.
		Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
		Shell.bind(XMEvent.Paused, this.Pause);
		Shell.bind(XMEvent.Resumed, this.Resume);
		Shell.bind(XMEvent.Seeking, this.OnShellSeeking);
		Shell.bind(XMEvent.Seek, this.OnShellSeek);

		this.trigger(XMEvent.Loaded);
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

	Pause: function () {
		// TODO : Pause the content.
	},

	Resume: function () {
		// TODO : Resume the content.
	},

	//-- Shell Events
	OnVolumeChanged: function () {
		// TODO : Alter volume.
	},

	OnShellSeeking: function (e) {
		// TODO : Seek the content.
	},

	OnShellSeek: function (e) {
		// TODO : Finalize seeking.
	}
});

var Shell = parent.Shell;
var LMS = parent.LMS;

Slide.Initialize();