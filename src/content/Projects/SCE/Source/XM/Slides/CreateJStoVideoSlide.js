/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />
///script src="../../Source/JS/CreateJS/easeljs-0.8.1.min.js"></script>
///<script src="../../Source/JS/CreateJS/tweenjs-0.6.1.min.js"></script>
///<script src="../../Source/JS/CreateJS/movieclip-0.8.1.min.js"></script>
///<script src="../../Source/JS/CreateJS/preloadjs-0.4.1.min.js"></script>
///<script src="../../Source/JS/CreateJS/soundjs-0.5.2.min.js"></script>

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
	    // Subscribe to shell events.
	    Shell.bind(XMEvent.VolumeChanged, this.OnVolumeChanged);
	    Shell.bind(XMEvent.Paused, this.Pause);
	    Shell.bind(XMEvent.Resumed, this.Resume);
	    Shell.bind(XMEvent.Seeking, this.OnShellSeeking);
	    Shell.bind(XMEvent.Seek, this.OnShellSeek);
        // Initialize CreateJS
		
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

	    if (IsInMobileSafari() && this.hasSound) {
	        $('#soundFix').show();
	        $('#soundFix').click(function () {
	            createjs.WebAudioPlugin.playEmptySound();
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
	        Slide.sounds[i].paused = true;
	    }
	},

	Resume: function () {
	    createjs.Ticker.addEventListener('tick', stage);
	    createjs.Ticker.addEventListener('tick', Slide.Tick);

	    for (var i = 0; i < Slide.sounds.length; i++) {
	        Slide.sounds[i].paused = false;
	    }
	},

	Tick: function (e) {
	    Slide.trigger(XMEvent.Seeking, { sender: Slide, value: root.currentFrame / root.timeline.duration * 100 });
	},

    //-- Shell Events

	OnVolumeChanged: function () {
	    createjs.Sound.setVolume(Shell.volume / 100);
	    $('#player')[0].volume = Shell.volume / 100;
	    Slide.trigger(XMEvent.VolumeChanged);
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
	    var sound = createjs.Sound.createInstance(soundId);
	    sound.play({ interrupt: createjs.Sound.INTERRUPT_EARLY, loop: loop });		
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

	    var sound = createjs.Sound.createInstance(soundId);
	    sound.play({ interrupt: createjs.Sound.INTERRUPT_EARLY });
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

	function ChangeCCText(newText) {
	    parent.$('#slide-text').html(newText);
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
    root.play();
}