(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"activity_1_atlas_", frames: [[0,1226,404,94],[1030,1309,402,92],[1434,1309,402,92],[1743,1082,200,45],[0,0,1920,1080],[0,1082,674,142],[676,1082,674,139],[1994,53,49,49],[1994,0,51,51],[1922,0,70,113],[1706,1196,327,111],[1352,1082,389,112],[0,1322,323,113],[1352,1196,352,111],[676,1223,352,111]]}
];


// symbols:



(lib.CachedBmp_18 = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.InfoIcon_DWN = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.InfoIcon_UP = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Match_4_hand = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Match_5_blank = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Match_5_correct = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Match_5_dashed = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Match_5_down = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Match_5_incorrect = function() {
	this.initialize(ss["activity_1_atlas_"]);
	this.gotoAndStop(14);
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


(lib.Symbol5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{up:0,down:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		var self = this;
		self.cursor = 'pointer';
		
		if (self.parent.name == 'drag5') {
			self.visible = false;
		}
		if (self.parent.name == 'drag2') {
			self.visible = false;
		}
		if (self.parent.name == 'drag3') {
			self.visible = false;
		}
		
		self.addEventListener('mouseover', function () {
			if (self.currentLabel == 'up')
				self.gotoAndStop('down')
		})
		
		self.addEventListener('mouseout', function () {
			if (self.currentLabel == 'down')
				self.gotoAndStop('up')
		})
		
		self.addEventListener('click', function () {
			if (self.currentLabel == 'down'){
				if (self.parent.name == 'drag1') {
					window.parent.quizPopup1()
				}
		
				if (self.parent.name == 'drag4') {
					window.parent.quizPopup2()
				}
				self.gotoAndStop('up')
		}
			
		})
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Info_Icon_DWN_png
	this.instance = new lib.InfoIcon_DWN();
	this.instance.setTransform(0,0,0.6222,0.6225);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Info_Icon_UP_png
	this.instance_1 = new lib.InfoIcon_UP();
	this.instance_1.setTransform(0,0,0.5979,0.5982);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.5,30.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box = new cjs.Text("Remediation", "20px 'Roboto Medium'", "#717171");
	this.box.name = "box";
	this.box.textAlign = "center";
	this.box.lineHeight = 26;
	this.box.lineWidth = 1846;
	this.box.parent = this;
	this.box.setTransform(925.2,2);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1850.5,28), null);


(lib.submitBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{disabled:0,"up":1,"down":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		self.cursor = 'auto';
		
		self.addEventListener('mouseover', function() {
			if (self.currentLabel == 'up')
			self.gotoAndStop('down')
		})
			
		self.addEventListener('mouseout', function() {
				if (self.currentLabel == 'down')
				self.gotoAndStop('up')
		})
		
		self.addEventListener('click', function() {
				if (self.currentLabel == 'down'){
				self.parent.activity.Submit();
				//self.parent.activity.ResetAll();
				}
		})
	}
	this.frame_1 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_5
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Submit
	this.text = new cjs.Text("Submit", "20px 'Roboto Medium'", "#979797");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(100.05,15.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(1).to({color:"#E1261C"},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_17();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,47.8);


(lib.resetBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"disabled":0,"up":1,"down":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		self.cursor = 'auto';
		
		self.addEventListener('mouseover', function() {
			if (self.currentLabel == 'up')
			self.gotoAndStop('down')
		})
			
		self.addEventListener('mouseout', function() {
				if (self.currentLabel == 'down')
				self.gotoAndStop('up')
		})
		
		self.addEventListener('click', function() {
				if (self.currentLabel == 'down'){
					self.gotoAndStop('disabled')
				//self.parent.activity.Submit();
				self.parent.activity.resetAll();
				}
		})
	}
	this.frame_1 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_5
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Submit
	this.text = new cjs.Text("Reset", "20px 'Roboto Medium'", "#979797");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(100.05,15.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(1).to({color:"#E1261C"},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_17();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,47.8);


(lib.an_Label = function(options) {
	this.initialize();
	this._element = new $.an.Label(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_Image = function(options) {
	this.initialize();
	this._element = new $.an.Image(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.dragImgMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Match_5_down();
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragImgMC, new cjs.Rectangle(1,0,352,111), null);


(lib.continueBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"disabled":0,"up":1,"down":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var self = this;
		self.cursor = 'auto';
		
		
		self.addEventListener('mouseover', function() {
			if (self.currentLabel == 'up')
			self.gotoAndStop('down')
		})
			
		self.addEventListener('mouseout', function() {
				if (self.currentLabel == 'down')
				self.gotoAndStop('up')
		})
		
		self.addEventListener('click', function() {
				if (self.currentLabel == 'down'){
				
				}
		
				window.parent.activityCheck()
				console.log("continueBtn Clicked")
		})
	}
	this.frame_1 = function() {
		this.stop();
		this.cursor = 'pointer';
		this.className = "next";
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_5
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Submit
	this.text = new cjs.Text("Continue", "20px 'Roboto Medium'", "#979797");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 196;
	this.text.parent = this;
	this.text.setTransform(100.05,15.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(1).to({color:"#E1261C"},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_17();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(-1,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,202,47.8);


(lib.blocker = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		var self = this;
		
		self.addEventListener("click", function() {
		//makes blocker work.	
			console.log('blocker clicked')
			})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(12,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blocker, new cjs.Rectangle(12,10,1920,1080), null);


(lib.upState = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.an_Image({'id': '', 'src':'images/Match_5_hover.png', 'alt':'image', 'border':'0', 'visible':true, 'class':'ui-image on-top'});

	this.instance.setTransform(337,56.5,6.74,1.13,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.upState, new cjs.Rectangle(-3.3,-0.5,680.6999999999999,114.1), null);


(lib.textMC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Text = new lib.an_Label({'id': 'Text', 'label':'Label', 'disabled':false, 'visible':true, 'class':'dragText'});

	this.Text.name = "Text";
	this.Text.setTransform(215,37.5,4.3003,3.4091,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.textMC, new cjs.Rectangle(-2.1,-1.7,434.3,78.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.an_Label({'id': '', 'label':'Label', 'disabled':false, 'visible':true, 'class':'dragId'});

	this.instance.setTransform(25,25,0.4999,2.2726,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.2,-1.1,50.5,52.300000000000004), null);


(lib.Remediation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer_1
	this.textMC = new lib.Symbol3();
	this.textMC.name = "textMC";
	this.textMC.setTransform(925.2,53,1,1,0,0,0,925.2,14);
	this.textMC.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.textMC).wait(1).to({y:16.6,alpha:1},5,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.6,1850.5,64.4);


(lib.drop = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"up":0,dropped:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//this.redLine.opacity = 1;
	}
	this.frame_6 = function() {
		this.stop();
		//this.redLine.opacity = .01;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(6));

	// Text
	this.Text = new lib.an_Label({'id': 'Text', 'label':'Label', 'disabled':false, 'visible':true, 'class':'dropText'});

	this.Text.name = "Text";
	this.Text.setTransform(522.65,56.95,2.7498,3.4091,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(12));

	// Layer_4
	this.instance = new lib.Match_5_dashed();
	this.instance.setTransform(360,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Layer_3
	this.instance_1 = new lib.Match_5_blank();
	this.instance_1.setTransform(26,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

	// Layer_5
	this.instance_2 = new lib.Bitmap3();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,683,142);


(lib.dorppedState = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.an_Image({'id': '', 'src':'images/Match_5_down.png', 'alt':'image', 'border':'0', 'visible':true, 'class':'ui-image dropState'});

	this.instance.setTransform(176,56.5,3.52,1.13,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dorppedState, new cjs.Rectangle(-1.7,-0.5,355.5,114.1), null);


(lib.drag = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,upPlay:1,"up":7,hover:8,"dropped":9,incorrect:10,correct:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		$('.dragText-' + dragId).css({
			'color': "#FFFFFF",
			"z-index": "1"
			
			});
	}
	this.frame_1 = function() {
		$('.dragText-' + dragId).css({
			'color': "#FFFFFF",
			"z-index": "1"
			}); 
			stage.update();
	}
	this.frame_7 = function() {
		this.stop();
		$('.dragText-' + dragId).css({
			'color': "#FFFFFF",
			"z-index": "1"
			});
	}
	this.frame_8 = function() {
		this.stop();
		
		$('.dragText-' + dragId).css({
			'color': "#941009",
			"z-index": "1002"
			
			}); 
		$('.on-top').css(
			"z-index", "1001"
		)
			stage.update()
	}
	this.frame_9 = function() {
		this.stop();
		$('.dragText-' + dragId).css({
			'color': "#FFFFFF",
			"z-index": "1000"
			}); 
		$('.dropState').css(
			"z-index", ""
		)
			stage.update()
	}
	this.frame_10 = function() {
		this.stop();
		$('.dragText-' + dragId).css({
			'color': "#FFFFFF",
			"z-index": "1000"
			});
	}
	this.frame_11 = function() {
		this.stop();
		$('.dragText-' + dragId).css({
			'color': "#FFFFFF",
			"z-index": "1000"
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// Info_Icon_DWN_png
	this.instance = new lib.Symbol5();
	this.instance.setTransform(305,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(1));

	// fakeImg
	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(0,-328,0.5223,0.8129);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({y:0},0).wait(5));

	// Layer_5
	this.dragId = new lib.Symbol2();
	this.dragId.name = "dragId";
	this.dragId.setTransform(23.5,-270.55,1,1,0,0,0,24.5,25.7);

	this.timeline.addTween(cjs.Tween.get(this.dragId).wait(1).to({y:57.4},0).wait(6).to({_off:true},3).wait(2));

	// text
	this.textBox = new lib.textMC();
	this.textBox.name = "textBox";
	this.textBox.setTransform(197.5,-258.35,0.6162,1,0,0,0,215,50);

	this.timeline.addTween(cjs.Tween.get(this.textBox).wait(1).to({y:69.5,alpha:0.0117},0).to({regY:50.1,alpha:1},6).wait(1).to({regY:50},0).wait(4));

	// redUpState
	this.instance_2 = new lib.dragImgMC();
	this.instance_2.setTransform(337,-258.5,1,1,0,0,0,337,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:69.5,alpha:0.0117},0).to({alpha:1},6,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// pickedUp
	this.instance_3 = new lib.upState();
	this.instance_3.setTransform(0.5,-327.5,0.0015,0.0072,0,0,0,337.8,69.5);
	this.instance_3.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({regX:337,scaleX:0.5222,scaleY:1,x:176,y:69.5,alpha:1},0).wait(1).to({regX:337.8,scaleX:0.0015,scaleY:0.0072,x:0.5,y:-327.5,alpha:0.0117},0).wait(3));

	// incorrect
	this.instance_4 = new lib.Match_5_incorrect();
	this.instance_4.setTransform(1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({_off:true},1).wait(1));

	// correct
	this.instance_5 = new lib.Match_5_correct();
	this.instance_5.setTransform(-39,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).wait(1));

	// dropped
	this.instance_6 = new lib.dorppedState();
	this.instance_6.setTransform(0.5,-1004.45,0.0028,0.0072,0,0,0,176.2,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({regX:176,scaleX:1,scaleY:1,x:176,y:69.5},0).wait(1).to({regX:176.2,scaleX:0.0028,scaleY:0.0072,x:0.5,y:-1004.45},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-1004.9,392.8,1118.5);


// stage content:
(lib.DragNDrop_C5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{complete:2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		//$('.activity-continue', window.parent.document).fadeIn();
		var stageInstance = this;
		stage.mouseMoveOutside = true;
		stage.enableMouseOver();
				var orderedArray = [];
				var randomArray = [];
				var stageArray = [1,2,3];
				
				stageInstance.rem.textMC.text = "That’s not correct. The best match is shown. You will not receive any points for this pair.";
		$("label").css({
			"font-family": "Roboto Medium",
			"font-size":"calc(3px + 0.7vw)",
			"vertical-align": "middle"
		})
		
		$('.dragText').css({
			"color": "#FFFFFF",
			"display": "flex",
			"align-items": "center",
			"pointer-events": "none",
			"webkit-touch-callout": "none",
			"webkit-user-select": "none",
			"khtml-user-select": "none",
			"moz-user-select": "none",
			"-ms-user-selec": "none",
			"user-select": "none"
		})
		
		$('.dragId').css({
			"color": "#FFFFFF",
			"display": "flex",
			"align-items": "center",
			"pointer-events": "none",
			"webkit-touch-callout": "none",
			"webkit-user-select": "none",
			"khtml-user-select": "none",
			"moz-user-select": "none",
			"-ms-user-selec": "none",
			"user-select": "none",
			"font-size":"calc(3px + 0.7vw)",
			"justify-content": "center"
		})
		
		$('.ui-image').css({
			"pointer-events": "none",
			"webkit-touch-callout": "none",
			"webkit-user-select": "none",
			"khtml-user-select": "none",
			"moz-user-select": "none",
			"-ms-user-selec": "none",
			"user-select": "none"
		})
		
		$('.dropText').css({
			"color": "#717171",
			"display": "flex",
			"align-items": "center",
			"z-index": "-1"
		})
		
		$('.dragdropedText').css(
			"z-index", "1001"
		)
		//$('.pickedUp').css({
			//"z-index": "999"
		//})
		
		
		
		var dnd = [{
			// Q1
			dragger: [
				'ZEREX™ has more OEM approvals',
				'It is critical to use a product that meets the ',
				'The high number of OEM approvals gives ZEREX™',
				'ZEREX™ has more factory-fills',
				'ZEREX™ has a product that can help'
			],
			drop: [
				'than any other manufacturer in the world.',
				'requirements of the OEM so that the warranty can be maintained.',
				'a huge competitive advantage.',
				'than any other brand in the market today.',
				'consolidate multiple skus down to one.'
			],
			redLineHieght: [1, 2, 1, 2],
			answer: [2]
		}]
		
		activityNumber = questionNum;
		var dndData = function () {
			return dnd[0];
		}
		
			function loadActivityData() {
				////console.log('loadActivityData ...')
				var topDropPosition = 315;
				var padding = 10;
				var dragLength = dndData(activityNumber).dragger.length;
				var dropLength = dndData(activityNumber).drop.length;
		
				////console.log(dndData(activityNumber).dragger.length)
				for (var i = 0; i < dndData(activityNumber).dragger.length; i++) {
					
					orderedArray.push(i + 1);
				}
				////console.log(orderedArray)
		
		
				//console.log(randomArray)
				//		for (var i = 0; 4 > i; i++) {
				//			
				//	////console.log("random index: " + (Math.floor(Math.random() * orderedArray.length)))
				//			var iString = i+1;
				//			console.log(iString)
				//			var indexOfDrag = randomArray.indexOf(String(iString));
				//			
		
				//}
				
				////console.log(randomArray)
		
				$('.dragText').html(dndData().dragger)
				
				for (var i = 0; dndData(activityNumber).dragger.length > i; i++) {
					$('.dragText').eq(i).addClass('dragText-' + (dndData(activityNumber).dragger.length - i)).html(dndData().dragger[dragLength - 1])
					$('.dragId').eq(i).addClass('dragId-' + (dndData(activityNumber).dragger.length - i));
					dragLength--
				}
		
				for (var i = 0; dndData(activityNumber).drop.length > i; i++) {
					////////console.log("drop" + (i + 1))
					$('.dropText').eq(i).html(dndData().drop[dropLength - 1])
					//////console.log($(".dropText").eq(i))
					//stageInstance["drop" + (i + 1)].redLine.gotoAndStop([dndData().redLineHieght[i] + "_line"]);
					dropLength--
				}
				
				for (var i = 0; dndData(activityNumber).dragger.length > i; i++) {
					console.log("I Ran")
					var randomElement = orderedArray.splice(Math.floor(Math.random() * orderedArray.length), 1);
					//var iString = i+1;
					//console.log(iString)
					console.log(randomElement)
					//$('.dragId').eq(i).html(i+1);
					randomArray.push(randomElement[0]);
				}
				
				console.log(randomArray)
								for (var i = 0; dndData(activityNumber).dragger.length > i; i++) {
							
					////console.log("random index: " + (Math.floor(Math.random() * orderedArray.length)))
							var iString = Number(i+1);
							console.log(typeof(iString))
							var indexOfDrag = randomArray.indexOf(iString);
									console.log(indexOfDrag)
							$('.dragId-'+iString).html(indexOfDrag+1);
		
				}
				
				stage.update();
		
		
			}
		
		loadActivityData()
		
		this.activity = new DnDActivity(stageInstance, randomArray);
		this.activity.Start();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// continueBtn
	this.continueBtn = new lib.continueBtn();
	this.continueBtn.name = "continueBtn";
	this.continueBtn.setTransform(1054.75,738.25,0.9022,0.9022,0,0,0,100,22.6);
	this.continueBtn.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.continueBtn).wait(3));

	// blocker
	this.blocker = new lib.blocker();
	this.blocker.name = "blocker";
	this.blocker.setTransform(959.8,428.6,0.9022,0.9022,0,0,0,960,540);
	this.blocker.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.blocker).wait(3));

	// drag2
	this.rem = new lib.Remediation();
	this.rem.name = "rem";
	this.rem.setTransform(960,787.05,1,1,0,0,0,925.2,14);

	this.instance = new lib.Match_4_hand();
	this.instance.setTransform(556,43,0.9022,0.9022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.rem}]}).wait(3));

	// drag1
	this.drag5 = new lib.drag();
	this.drag5.name = "drag5";
	this.drag5.setTransform(943.3,93.4,0.9022,0.9022,0,0,0,337,69.5);

	this.drag4 = new lib.drag();
	this.drag4.name = "drag4";
	this.drag4.setTransform(943.3,93.4,0.9022,0.9022,0,0,0,337,69.5);

	this.drag3 = new lib.drag();
	this.drag3.name = "drag3";
	this.drag3.setTransform(943.3,93.4,0.9022,0.9022,0,0,0,337,69.5);

	this.drag2 = new lib.drag();
	this.drag2.name = "drag2";
	this.drag2.setTransform(943.3,93.4,0.9022,0.9022,0,0,0,337,69.5);

	this.drag1 = new lib.drag();
	this.drag1.name = "drag1";
	this.drag1.setTransform(943.3,93.4,0.9022,0.9022,0,0,0,337,69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.drag1},{t:this.drag2},{t:this.drag3},{t:this.drag4},{t:this.drag5}]}).wait(3));

	// drop1
	this.drop5 = new lib.drop();
	this.drop5.name = "drop5";
	this.drop5.setTransform(941.7,666.85,0.9022,0.9022,0,0,0,337,71);

	this.timeline.addTween(cjs.Tween.get(this.drop5).wait(3));

	// drop4
	this.drop4 = new lib.drop();
	this.drop4.name = "drop4";
	this.drop4.setTransform(941.7,552.6,0.9022,0.9022,0,0,0,337,71);

	this.timeline.addTween(cjs.Tween.get(this.drop4).wait(3));

	// drop3
	this.drop3 = new lib.drop();
	this.drop3.name = "drop3";
	this.drop3.setTransform(941.7,438.35,0.9022,0.9022,0,0,0,337,71);

	this.timeline.addTween(cjs.Tween.get(this.drop3).wait(3));

	// drop2
	this.drop2 = new lib.drop();
	this.drop2.name = "drop2";
	this.drop2.setTransform(941.7,324.1,0.9022,0.9022,0,0,0,337,71);

	this.timeline.addTween(cjs.Tween.get(this.drop2).wait(3));

	// drop1
	this.drop1 = new lib.drop();
	this.drop1.name = "drop1";
	this.drop1.setTransform(941.7,209.85,0.9022,0.9022,0,0,0,337,71);

	this.timeline.addTween(cjs.Tween.get(this.drop1).wait(3));

	// submitBtn
	this.resetBtn = new lib.resetBtn();
	this.resetBtn.name = "resetBtn";
	this.resetBtn.setTransform(865.2,738.25,0.9022,0.9022,0,0,0,100,22.6);

	this.submitBtn = new lib.submitBtn();
	this.submitBtn.name = "submitBtn";
	this.submitBtn.setTransform(1054.75,738.25,0.9022,0.9022,0,0,0,100,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.submitBtn},{t:this.resetBtn}]}).wait(3));

	// dragHolder
	this.instance_1 = new lib.Match_5_blank();
	this.instance_1.setTransform(661,32,0.9022,0.9022);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(994.8,-469.9,890.5,1394.6999999999998);
// library properties:
lib.properties = {
	id: '93AC54736F13AA4F8979954A51D003E0',
	width: 1920,
	height: 812,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/activity_1_atlas_.png", id:"activity_1_atlas_"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/label.js", id:"an.Label"},
		{src:"components/ui/src/image.js", id:"an.Image"}
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
an.compositions['93AC54736F13AA4F8979954A51D003E0'] = {
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
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;