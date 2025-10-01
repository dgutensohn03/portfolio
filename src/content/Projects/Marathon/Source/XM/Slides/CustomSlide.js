/// <reference path="../Shell.js" />
/// <reference path="../Events/XMEvent.js" />

var Slide = kendo.observable({
	Initialize: function () {
		Shell.BindSlide(this);

		// Subscribe to Shell events.
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

		this.trigger(XMEvent.Closing);
	},

	Dispatch: function (event) {
		Slide.trigger(event);
	},

	Complete: function () {
		Slide.trigger(XMEvent.Completed);
	},

	Pause: function () {
		Slide.trigger(XMEvent.Paused);
	},

	Resume: function () {
		Slide.trigger(XMEvent.Resumed);
	},

	OnVolumeChanged: function () {
		Slide.trigger(XMEvent.VolumeChanged);
	},

	OnShellSeeking: function (e) {
		Slide.trigger(XMEvent.Seeking);
	},

	OnShellSeek: function (e) {
		Slide.trigger(XMEvent.Seek);
	}
});