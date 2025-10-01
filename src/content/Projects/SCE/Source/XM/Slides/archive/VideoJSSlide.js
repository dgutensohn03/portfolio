var Slide = kendo.observable({
	//-- Statup code.

	Initialize: function () {
		this.player = videojs('player', { controls: true, autoplay: true });

		Shell.BindSlide(this);

		// Subscribe to shell events.
		Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
		Shell.bind(XMEvent.Paused, this.Pause);
		Shell.bind(XMEvent.Resumed, this.Resume);
		Shell.bind(XMEvent.Seeking, this.OnShellSeeking);
		Shell.bind(XMEvent.Seek, this.OnShellSeek);

		this.trigger(XMEvent.Loaded);

		//this.player.on('timeupdate', this.TimeUpdate);
	},

	Destroy: function () {
		Shell.unbind(XMEvent.VolumeChanged, this.OnVolumeChanged);
		Shell.unbind(XMEvent.Paused, this.Pause);
		Shell.unbind(XMEvent.Resumed, this.Resume);
		Shell.unbind(XMEvent.Seeking, this.OnShellSeeking);
		Shell.unbind(XMEvent.Seek, this.OnShellSeek);

		//this.player.off('timeupdate', this.TimeUpdate);
	},

	/// Tell the shell that this slide has been completed.
	Complete: function () {
		this.trigger(XMEvent.Completed);

	},

	Pause: function () {
		Slide.player.pause();

	},

	Resume: function () {
		if (Slide.player.currentTime != Slide.player.duration) {
			Slide.player.play();
		}
	},

	TimeUpdate: function (e) {
		Slide.trigger(XMEvent.Seeking, { sender: Slide, value: Slide.player.currentTime / Slide.player.duration * 100 });
	},

	//-- Shell Events
	OnVolumeChanged: function () {
		Slide.player.volume = Shell.volume / 100;
	},

	OnShellSeeking: function (e) {
		Slide.Pause();
		Slide.player.currentTime = Slide.player.duration * (e.value / 100);
	},

	OnShellSeek: function (e) {
		Slide.Resume();
	}
});