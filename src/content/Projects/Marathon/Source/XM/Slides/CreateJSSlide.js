/// <reference path="../../XM/Helpers.js" />
/// <reference path="../../XM/Shell.js />
/// <reference path="../../XM/Events/XMEvent.js" />
/// <reference path="../../JS/CreateJS/easeljs-0.7.0.min.js" />
/// <reference path="../../JS/CreateJS/movieclip-0.7.0.min.js" />
/// <reference path="../../JS/CreateJS/preloadjs-0.4.0.min.js" />
/// <reference path="../../JS/Howler/howler.core.min.js" />
/// <reference path="../../JS/CreateJS/tweenjs-0.5.0.min.js" />

// CreateJS Toolkit required variables
var canvas, stage, root;

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
		canvas = document.getElementById("canvas");
		images = images || {};

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
		else if (e.item.type == createjs.LoadQueue.SOUND) {
			Slide.hasSound = true;

			Slide.audio[e.item.id] = new Howl({
				src: [e.item.src],
				preload: true
			})
		}
	},

	LoadComplete: function (e) {
		Slide.trigger(XMEvent.Loaded);

		root = new lib['Slide' + $.getUrlVar('slide')]();

		stage = new createjs.Stage(canvas);
		stage.addChild(root);
		stage.update();

		createjs.Ticker.setFPS(lib.properties.fps);
		XMLog(Slide.hasSound);
		if (IsInMobileSafari() && Slide.hasSound) {
			$('#soundFix').show();
			$('#soundFix').click(function () {
				// Howler should play an empty sound automatically with the first touchend event.
				$('#soundFix').hide();
				createjs.Ticker.addEventListener('tick', stage);
				createjs.Ticker.addEventListener('tick', Slide.Tick);
			});
		} else {
			createjs.Ticker.addEventListener('tick', stage);
			createjs.Ticker.addEventListener('tick', Slide.Tick);
		}
	},

	Destroy: function () {
		createjs.Ticker.removeEventListener('tick', stage);
		createjs.Ticker.removeEventListener('tick', this.Tick);

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
		createjs.Ticker.addEventListener('tick', Slide.Tick);

		for (var i = 0; i < Slide.activeSounds.length; i++) {
			Slide.activeSounds[i].play();
		}
	},

	Tick: function (e) {
		Slide.trigger(XMEvent.Seeking, { sender: Slide, value: root.currentFrame / root.timeline.duration * 100 });
	},

	//-- Shell Events

	OnVolumeChanged: function () {
		Howler.volume(Shell.volume / 100);
	},

	OnShellSeeking: function (e) {
		root.gotoAndStop(Math.floor(root.timeline.duration * (e.value / 100)));
	},

	OnShellSeek: function (e) {
		root.play();
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