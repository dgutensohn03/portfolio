(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"0.1_atlas_", frames: [[0,15,63,4],[0,8,256,5],[0,0,256,6],[65,15,13,14]]}
];


// symbols:



(lib.Bitmap3 = function() {
	this.initialize(ss["0.1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pod_progressbarempty = function() {
	this.initialize(ss["0.1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pod_progress10 = function() {
	this.initialize(ss["0.1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pod_progressslider = function() {
	this.initialize(ss["0.1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pod_progressslider();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,13,14), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pod_progress10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,256,6), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.bar = new lib.Symbol10();
	this.bar.name = "bar";
	this.bar.setTransform(0,2.45,1,1,0,0,0,0,3);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	// Layer_3
	this.dot = new lib.Symbol11();
	this.dot.name = "dot";
	this.dot.setTransform(0,2.5,1,1,0,0,0,7,7.5);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.pod_progressbarempty();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-7,-5,263,14), null);


// stage content:
(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var currBar;
		var currDot;
		var playbar = exportRoot.playbar
		playbar.bar.scaleX = 0;
		
		
		
		this.adjustPlaybar = function (podcastLocation,podcastPages){
		
		
		var podcastPosition = (playbar.getBounds().width / podcastPages) * podcastLocation - 6.5
			//override width of dot for location 0
		if (podcastPosition <= .5) {
			podcastPosition = .5;
			}
		
		createjs.Tween.get(playbar.bar).wait(250).to({
			scaleX: podcastLocation/podcastPages
		}, 1500);
		createjs.Tween.get(playbar.dot).wait(250).to({
			x: podcastPosition
		}, 1500);
		
		}
		
		
		this.nextSpot = function (podcastLocation,podcastPages){
		
			console.log(playbar.bar.scaleX)
			var playbarNewPosition = playbar.bar.scaleX + (1/podcastPages)
			
			var podcastPosition = (playbar.getBounds().width / podcastPages) * podcastLocation - 6.5;
		if (podcastPosition <= .5) {
			podcastPosition = .5;
			}
			createjs.Tween.get(playbar.bar).wait(250).to({
			scaleX: podcastLocation/podcastPages
		}, 1500);
		createjs.Tween.get(playbar.dot).wait(250).to({
			x: podcastPosition
		}, 1500);
		
		console.log(playbar.scaleX)
			}
		
			
			
			this.playPodCast = function (){
		var podcastPages = parseInt(window.parent.Var_podCastPages.value);
		var podcastLocation = window.parent.Var_podCastPosition.value
				console.log(podcastPages)
				if (podcastLocation < podcastPages) {
					podcastLocation++;
					window.parent.Var_podCastPosition.set(podcastLocation)
				
			console.log(podcastLocation)
			var playbarNewPosition = playbar.bar.scaleX + (1/podcastPages)
			
			var podcastPosition = (playbar.getBounds().width / podcastPages) * podcastLocation - 6.5;
		if (podcastPosition <= .5) {
			podcastPosition = .5;
			}
			createjs.Tween.get(playbar.bar).wait(250).to({
			scaleX: podcastLocation/podcastPages
		}, 1500);
		createjs.Tween.get(playbar.dot).wait(250).to({
			x: podcastPosition
		}, 1500);
		
		}
			}
			this.prevPodCast = function (){
		var podcastPages = parseInt(window.parent.Var_podCastPages.value);
		var podcastLocation = window.parent.Var_podCastPosition.value
				if (podcastLocation > 0) {
					podcastLocation--;
				window.parent.Var_podCastPosition.set(podcastLocation)
				
			console.log(podcastLocation)
			var playbarNewPosition = playbar.bar.scaleX + (1/podcastPages)
			
			var podcastPosition = (playbar.getBounds().width / podcastPages) * podcastLocation - 6.5;
		if (podcastPosition <= .5) {
			podcastPosition = .5;
			}
			createjs.Tween.get(playbar.bar).wait(250).to({
			scaleX: podcastLocation/podcastPages
		}, 1500);
		createjs.Tween.get(playbar.dot).wait(250).to({
			x: podcastPosition
		}, 1500);
		
		console.log(playbar.scaleX)
		}
			}
		//this.setProgress = .9;
		
		//var clip = this.levelBar.bar;
		//clip.scaleX = 0;
		////console.log(this.levelBar.bar)
		////console.log(this.levelBar)
		////console.log(clip.getBounds())
		////Scale level bar to users score
		//createjs.Tween.get(clip).wait(1000).to({
		//	scaleX: this.setProgress
		//}, 1500);
		
		
		
		//createjs.DisplayObject.prototype.getName = function () {
		//	if (!this.nameCache) {
		//		var parent = this.parent;
		//		var keys = Object.keys(parent);
		//		var len = keys.length;
		//		while (--len) {
		//			if (parent[keys[len]] === this) {
		//				this.nameCache = keys[len];
		//				break;
		//			}
		//		}
		//	}
		//	return this.nameCache;
		//}
		
		//stage.enableMouseOver();
		//this.btn.cursor = "pointer";
		
		//console.log(window.parent)
		//var shell = window.parent;
		
		//shell.user.character = "choice_1"; // "name" is a property set on "me", but not on "person"
		//shell.user.items = ['tickets', 'ipad', 'backpack']; // inherited properties can be overwritten
		
		
		//console.log(shell.user)
		//this.itemCheck = function (frame) {
		//	this.item_mc.item.gotoAndStop(frame)
		//	stage.update();
		//	console.log('item updated');
		//}
		
		
		window.parent.activityInit();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
		window.parent.runGroup_og1104()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(20).call(this.frame_30).wait(1));

	// Layer_5
	this.playbar = new lib.Symbol9();
	this.playbar.name = "playbar";
	this.playbar.setTransform(348,486.5,1,1,0,0,0,128,2.5);

	this.timeline.addTween(cjs.Tween.get(this.playbar).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(703,800,-227,-307);
// library properties:
lib.properties = {
	id: 'C960608F3276A748A49D871590917A99',
	width: 980,
	height: 642,
	fps: 24,
	color: "#66FF00",
	opacity: 0.00,
	manifest: [
		{src:"images/0.1_atlas_.png", id:"0.1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C960608F3276A748A49D871590917A99'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;