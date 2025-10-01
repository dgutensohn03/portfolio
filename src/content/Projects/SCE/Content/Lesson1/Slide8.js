(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,100);


(lib.mainMenu_checkmark = function() {
	this.initialize(img.mainMenu_checkmark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.mainMenu_cloudsBkgd = function() {
	this.initialize(img.mainMenu_cloudsBkgd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3416,500);


(lib.mainMenu_electricLinesMountainsShrubs04 = function() {
	this.initialize(img.mainMenu_electricLinesMountainsShrubs04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,500);


(lib.mainMenu_m1 = function() {
	this.initialize(img.mainMenu_m1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.mainMenu_m2 = function() {
	this.initialize(img.mainMenu_m2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.mainMenu_m3 = function() {
	this.initialize(img.mainMenu_m3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.mainMenu_m4 = function() {
	this.initialize(img.mainMenu_m4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.mainMenu_m5 = function() {
	this.initialize(img.mainMenu_m5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.mainMenu_sunshine04 = function() {
	this.initialize(img.mainMenu_sunshine04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,500);// helper functions:

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


(lib.whitecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape.setTransform(480,270,1,1.286);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitecopy, new cjs.Rectangle(0,0,960,540), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,264,100), null);


(lib.sunshine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_sunshine04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sunshine, new cjs.Rectangle(0,0,960,500), null);


(lib.instructionTxt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AgfAlQgNgNAAgYQAAgXAMgOQANgNAUAAQAVAAAMAMQALAMAAAUIAAANIg+AAQAAALAHAHQAGAGALAAQAIAAAIgCQAIgCAJgEIAAAVQgHAEgIABQgIACgMAAQgWAAgOgOgAgLgaQgFAGAAAKIAkAAQAAgKgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape.setTransform(286.6,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("AgfAyIAAhhIAUAAIAFARIABAAQAEgJAHgFQAIgFAJAAIAJABIgCAZIgIgBQgNAAgHAGQgGAHAAALIAAAyg");
	this.shape_1.setTransform(278.1,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEFEFE").s().p("AgYAsQgLgFgGgMQgGgMAAgPQAAgYANgNQAMgNAWAAQAOAAALAGQALAGAGALQAGAMAAAPQAAAYgNANQgNAOgWAAQgNAAgLgHgAgPgVQgEAHAAAOQAAAPAFAHQAEAHAKAAQALAAAFgHQAEgHAAgPQAAgOgFgHQgEgHgLAAQgKAAgFAHg");
	this.shape_2.setTransform(267.9,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AAwAyIAAg5QAAgKgEgGQgDgEgIAAQgKgBgFAIQgFAGAAAOIAAAyIgaAAIAAg5QAAgKgDgGQgEgEgHAAQgLAAgEAHQgFAIAAAQIAAAuIgbAAIAAhhIAVAAIADAMIACAAQAEgGAHgEQAIgEAJAAQAWAAAHAOIADAAQAEgGAHgEQAIgEAKAAQAQAAAJAIQAJAJAAATIAAA/g");
	this.shape_3.setTransform(253.6,16.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AATAyIAAg5QAAgKgFgGQgDgEgIAAQgLAAgFAHQgEAIAAAQIAAAuIgbAAIAAhhIAUAAIADAMIACAAQAEgHAJgDQAGgEALAAQAQAAAKAJQAIAKABARIAAA/g");
	this.shape_4.setTransform(234.1,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgfAyIAAhhIAVAAIADARIABAAQAFgJAHgFQAIgFAJAAIAJABIgCAZIgIgBQgNAAgHAGQgGAHAAALIAAAyg");
	this.shape_5.setTransform(224.6,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgjArQgIgIAAgPQAAgQALgGQALgIAVAAIARgBIAAgEQAAgPgPAAQgLAAgQAHIgJgSQARgJAUAAQAUAAAKAJQALAIAAASIAABAIgTAAIgFgNIgBAAQgGAIgIAEQgGADgLAAQgOAAgJgIgAAHAEQgLAAgFAEQgGAEAAAIQAAALANAAQAIAAAGgFQAFgFAAgJIAAgIg");
	this.shape_6.setTransform(214.3,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AgfAlQgNgNAAgYQAAgXAMgOQANgNAUAAQAVAAAMAMQALAMAAAUIAAANIg+AAQAAALAHAHQAGAGALAAQAIAAAIgCQAIgCAJgEIAAAVQgHAEgIABQgIACgMAAQgWAAgOgOgAgLgaQgFAGAAAKIAkAAQAAgKgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_7.setTransform(203.9,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FEFEFE").s().p("AgMBEIAAiHIAaAAIAACHg");
	this.shape_8.setTransform(195.8,14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEFEFE").s().p("AgYAsQgLgFgGgMQgGgMAAgPQAAgYANgNQAMgNAWAAQAOAAALAGQALAGAGALQAGAMAAAPQAAAYgNANQgNAOgWAAQgNAAgLgHgAgPgVQgEAHAAAOQAAAPAFAHQAEAHAKAAQALAAAFgHQAEgHAAgPQAAgOgFgHQgEgHgLAAQgKAAgFAHg");
	this.shape_9.setTransform(182.8,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEFEFE").s().p("AgNA0QgHgIAAgQIAAgvIgNAAIAAgLIAPgJIAHgUIARAAIAAAUIAbAAIAAAUIgbAAIAAAvQAAAFADADQADADAFAAQAHAAAKgDIAAAUQgKAFgPgBQgPABgHgJg");
	this.shape_10.setTransform(173.2,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEFEFE").s().p("AASAyIAAg5QAAgKgDgGQgEgEgJAAQgKAAgFAHQgEAIAAAQIAAAuIgbAAIAAhhIAUAAIAEAMIABAAQAFgHAHgDQAIgEAJAAQARAAAJAJQAKAKgBARIAAA/g");
	this.shape_11.setTransform(158.8,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEFEFE").s().p("AgYAsQgLgFgGgMQgGgMAAgPQAAgYANgNQAMgNAWAAQAOAAALAGQALAGAGALQAGAMAAAPQAAAYgNANQgNAOgWAAQgNAAgLgHgAgPgVQgEAHAAAOQAAAPAFAHQAEAHAKAAQALAAAFgHQAEgHAAgPQAAgOgFgHQgEgHgLAAQgKAAgFAHg");
	this.shape_12.setTransform(147.3,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgWAyQgHgCgHgDIAAgWQAHADAKADQAJACAHAAQAOAAAAgIQAAgEgCgCQgCgCgFgCIgLgFQgMgFgFgEQgFgDgDgGQgCgFAAgHQAAgOAKgHQAKgHASAAQASAAAQAHIgIAUIgOgFQgGgCgHAAQgLAAAAAGQAAAEAEACIAQAIQAMAFAFAEQAFADADAGQACAEAAAIQAAAPgKAIQgLAIgUAAQgKAAgIgBg");
	this.shape_13.setTransform(137.3,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEFEFE").s().p("AgWAyQgHgCgHgDIAAgWQAHADAKADQAJACAHAAQAOAAAAgIQAAgEgCgCQgCgCgFgCIgLgFQgMgFgFgEQgFgDgDgGQgCgFAAgHQAAgOAKgHQAKgHASAAQASAAAQAHIgIAUIgOgFQgGgCgHAAQgLAAAAAGQAAAEAEACIAQAIQAMAFAFAEQAFADADAGQACAEAAAIQAAAPgKAIQgLAIgUAAQgKAAgIgBg");
	this.shape_14.setTransform(128.3,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FEFEFE").s().p("AgfAlQgNgNAAgYQAAgXAMgOQANgNAUAAQAVAAAMAMQALAMAAAUIAAANIg+AAQAAALAHAHQAGAGALAAQAIAAAIgCQAIgCAJgEIAAAVQgHAEgIABQgIACgMAAQgWAAgOgOgAgLgaQgFAGAAAKIAkAAQAAgKgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_15.setTransform(118.5,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FEFEFE").s().p("AgNBEIAAiHIAaAAIAACHg");
	this.shape_16.setTransform(110.5,14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FEFEFE").s().p("AASBEIAAg5QAAgUgPAAQgLAAgEAHQgFAHgBARIAAAuIgbAAIAAiHIAbAAIAAAbIAAAQIgBAIIABAAQAKgOASgBQASAAAIAJQAJAKAAAQIAABAg");
	this.shape_17.setTransform(97.1,14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFEFE").s().p("AgmAAQAAgYAMgNQANgNAWAAQARAAAOAGIgIAWIgNgFQgFgCgFABQgUgBAAAdQAAAdAUAAQAHAAAHgCQAHgCAGgFIAAAXQgGAEgGACQgIACgKAAQgsAAAAgzg");
	this.shape_18.setTransform(86.7,16.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEFEFE").s().p("AgjArQgIgIAAgPQAAgQALgGQALgIAVAAIARgBIAAgEQAAgPgPAAQgLAAgQAHIgJgSQARgJAUAAQAUAAAKAJQALAIAAASIAABAIgTAAIgFgNIgBAAQgGAIgIAEQgGADgLAAQgOAAgJgIgAAHAEQgLAAgFAEQgGAEAAAIQAAALANAAQAIAAAGgFQAFgFAAgJIAAgIg");
	this.shape_19.setTransform(76.2,16.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEFEFE").s().p("AgfAlQgNgNAAgYQAAgXAMgOQANgNAUAAQAVAAAMAMQALAMAAAUIAAANIg+AAQAAALAHAHQAGAGALAAQAIAAAIgCQAIgCAJgEIAAAVQgHAEgIABQgIACgMAAQgWAAgOgOgAgLgaQgFAGAAAKIAkAAQAAgKgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_20.setTransform(65.8,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FEFEFE").s().p("AgNA0QgHgIAAgQIAAgvIgNAAIAAgLIAPgJIAHgUIARAAIAAAUIAbAAIAAAUIgbAAIAAAvQAAAFADADQADADAFAAQAHAAAKgDIAAAUQgKAFgPgBQgPABgHgJg");
	this.shape_21.setTransform(51.8,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFEFE").s().p("AgmAAQAAgYAMgNQANgNAWAAQARAAAOAGIgIAWIgNgFQgFgCgFABQgUgBAAAdQAAAdAUAAQAHAAAHgCQAHgCAGgFIAAAXQgGAEgGACQgIACgKAAQgsAAAAgzg");
	this.shape_22.setTransform(43.5,16.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FEFEFE").s().p("AgfAlQgNgNAAgYQAAgXAMgOQANgNAUAAQAVAAAMAMQALAMAAAUIAAANIg+AAQAAALAHAHQAGAGALAAQAIAAAIgCQAIgCAJgEIAAAVQgHAEgIABQgIACgMAAQgWAAgOgOgAgLgaQgFAGAAAKIAkAAQAAgKgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_23.setTransform(33.4,16.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEFEFE").s().p("AgMBEIAAiHIAaAAIAACHg");
	this.shape_24.setTransform(25.4,14.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FEFEFE").s().p("AgfAlQgNgNAAgYQAAgXAMgOQANgNAUAAQAVAAAMAMQALAMAAAUIAAANIg+AAQAAALAHAHQAGAGALAAQAIAAAIgCQAIgCAJgEIAAAVQgHAEgIABQgIACgMAAQgWAAgOgOgAgLgaQgFAGAAAKIAkAAQAAgKgFgGQgFgFgIAAQgIAAgFAFg");
	this.shape_25.setTransform(17.3,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FEFEFE").s().p("AgpA6IAAgZQANAGAJACQAJADAIAAQAHAAAFgEQAFgDAAgHQAAgEgCgDIgGgGIgQgIQgMgGgGgEQgFgFgEgHQgDgGAAgKQAAgRALgJQAMgKATAAQAKAAAJACIATAHIgJAVQgKgEgHgCIgNgBQgHAAgEADQgEAEAAAGQAAADACADQABADAEACIAQAJQASAJAHAHQAHAJAAANQAAARgNAKQgMAKgWAAQgUAAgQgIg");
	this.shape_26.setTransform(7.1,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.instructionTxt2, new cjs.Rectangle(0,0,294,28.5), null);


(lib.gray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#767779").s().p("EhK/ADIIAAmPMCV/AAAIAAGPg");
	this.shape.setTransform(480,20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gray, new cjs.Rectangle(0,0,960,40), null);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_cloudsBkgd();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clouds, new cjs.Rectangle(0,0,3416,500), null);


(lib.checkmark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_checkmark();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.checkmark, new cjs.Rectangle(0,0,40,40), null);


(lib.btn5Art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_m5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn5Art, new cjs.Rectangle(0,0,176,176), null);


(lib.btn4Art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_m4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn4Art, new cjs.Rectangle(0,0,176,176), null);


(lib.btn3Art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_m3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn3Art, new cjs.Rectangle(0,0,176,176), null);


(lib.btn2Art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_m2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn2Art, new cjs.Rectangle(0,0,176,176), null);


(lib.btn1Art = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mainMenu_m1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn1Art, new cjs.Rectangle(0,0,176,176), null);


(lib.blocker = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		this.addEventListener('click', function() {
			XMLog('blocker clicked');
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhKNApBMAAAhSBMCUbAAAMAAABSBg");
	this.shape.setTransform(475,262.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blocker, new cjs.Rectangle(0,0,950.1,525.1), null);


(lib.cloudsAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.clouds = new lib.clouds();
	this.clouds.name = "clouds";
	this.clouds.parent = this;
	this.clouds.setTransform(0,250,1,1,0,0,0,1708,250);

	this.timeline.addTween(cjs.Tween.get(this.clouds).to({x:1708},719).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1708,0,3416,500);


(lib.btn5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{locked:0,unlocked:1,complete:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*this.buttonMode = true;
		this.useHandCursor = true;
		
		checkCircle.visible = false;
		
		this.addEventListener(MouseEvent.ROLL_OVER, this.btnOver1);
		function this.btnOver1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(2);
		}
		
		this.addEventListener(MouseEvent.ROLL_OUT, this.btnOut1);
		function this.btnOut1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(1);
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_8
	this.checkmark = new lib.checkmark();
	this.checkmark.name = "checkmark";
	this.checkmark.parent = this;
	this.checkmark.setTransform(88,178.5,1,1,0,0,0,20,20);
	this.checkmark._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkmark).wait(2).to({_off:false},0).wait(1));

	// Layer_7
	this.btn1Art = new lib.btn5Art();
	this.btn1Art.name = "btn1Art";
	this.btn1Art.parent = this;
	this.btn1Art.setTransform(88,88,1,1,0,0,0,88,88);
	this.btn1Art.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.btn1Art).wait(1).to({alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.btn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"locked":0,"unlocked":1,"complete":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*this.buttonMode = true;
		this.useHandCursor = true;
		
		checkCircle.visible = false;
		
		this.addEventListener(MouseEvent.ROLL_OVER, this.btnOver1);
		function this.btnOver1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(2);
		}
		
		this.addEventListener(MouseEvent.ROLL_OUT, this.btnOut1);
		function this.btnOut1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(1);
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_8
	this.checkmark = new lib.checkmark();
	this.checkmark.name = "checkmark";
	this.checkmark.parent = this;
	this.checkmark.setTransform(88,178.5,1,1,0,0,0,20,20);
	this.checkmark._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkmark).wait(2).to({_off:false},0).wait(1));

	// Layer_7
	this.btn1Art = new lib.btn4Art();
	this.btn1Art.name = "btn1Art";
	this.btn1Art.parent = this;
	this.btn1Art.setTransform(88,88,1,1,0,0,0,88,88);
	this.btn1Art.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.btn1Art).wait(1).to({alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"locked":0,"unlocked":1,"complete":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*this.buttonMode = true;
		this.useHandCursor = true;
		
		checkCircle.visible = false;
		
		this.addEventListener(MouseEvent.ROLL_OVER, this.btnOver1);
		function this.btnOver1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(2);
		}
		
		this.addEventListener(MouseEvent.ROLL_OUT, this.btnOut1);
		function this.btnOut1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(1);
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_8
	this.checkmark = new lib.checkmark();
	this.checkmark.name = "checkmark";
	this.checkmark.parent = this;
	this.checkmark.setTransform(88,178.5,1,1,0,0,0,20,20);
	this.checkmark._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkmark).wait(2).to({_off:false},0).wait(1));

	// Layer_7
	this.btn1Art = new lib.btn3Art();
	this.btn1Art.name = "btn1Art";
	this.btn1Art.parent = this;
	this.btn1Art.setTransform(88,88,1,1,0,0,0,88,88);
	this.btn1Art.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.btn1Art).wait(1).to({alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"locked":0,"unlocked":1,"complete":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*this.buttonMode = true;
		this.useHandCursor = true;
		
		checkCircle.visible = false;
		
		this.addEventListener(MouseEvent.ROLL_OVER, this.btnOver1);
		function this.btnOver1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(2);
		}
		
		this.addEventListener(MouseEvent.ROLL_OUT, this.btnOut1);
		function this.btnOut1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(1);
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_8
	this.checkmark = new lib.checkmark();
	this.checkmark.name = "checkmark";
	this.checkmark.parent = this;
	this.checkmark.setTransform(88,178.5,1,1,0,0,0,20,20);
	this.checkmark._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkmark).wait(2).to({_off:false},0).wait(1));

	// Layer_7
	this.btn1Art = new lib.btn2Art();
	this.btn1Art.name = "btn1Art";
	this.btn1Art.parent = this;
	this.btn1Art.setTransform(88,88,1,1,0,0,0,88,88);
	this.btn1Art.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.btn1Art).wait(1).to({alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"locked":0,"unlocked":1,"complete":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*this.buttonMode = true;
		this.useHandCursor = true;
		
		checkCircle.visible = false;
		
		this.addEventListener(MouseEvent.ROLL_OVER, this.btnOver1);
		function this.btnOver1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(2);
		}
		
		this.addEventListener(MouseEvent.ROLL_OUT, this.btnOut1);
		function this.btnOut1(event:MouseEvent):void{
			this.btnBkgd.gotoAndStop(1);
		}*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_8
	this.checkmark = new lib.checkmark();
	this.checkmark.name = "checkmark";
	this.checkmark.parent = this;
	this.checkmark.setTransform(88,178.5,1,1,0,0,0,20,20);
	this.checkmark._off = true;

	this.timeline.addTween(cjs.Tween.get(this.checkmark).wait(2).to({_off:false},0).wait(1));

	// Layer_7
	this.btn1Art = new lib.btn1Art();
	this.btn1Art.name = "btn1Art";
	this.btn1Art.parent = this;
	this.btn1Art.setTransform(88,88,1,1,0,0,0,88,88);
	this.btn1Art.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.btn1Art).wait(1).to({alpha:1},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176,176);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.mainMenu_electricLinesMountainsShrubs04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.sunshine = new lib.sunshine();
	this.sunshine.name = "sunshine";
	this.sunshine.parent = this;
	this.sunshine.setTransform(480,250,1,1,0,0,0,480,250);
	this.sunshine.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.sunshine).wait(1));

	// Layer_2
	this.cloudsAni = new lib.cloudsAni();
	this.cloudsAni.name = "cloudsAni";
	this.cloudsAni.parent = this;
	this.cloudsAni.setTransform(1708,250,1,1,0,0,0,1708,250);

	this.timeline.addTween(cjs.Tween.get(this.cloudsAni).wait(1));

	// Layer_1
	this.white = new lib.whitecopy();
	this.white.name = "white";
	this.white.parent = this;
	this.white.setTransform(480,210,1,1,0,0,0,480,210);

	this.timeline.addTween(cjs.Tween.get(this.white).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-1708,0,3416,540), null);


// stage content:
(lib.Slide8_mainMenu = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{menu:12,menuComplete:30,done:41});

	// timeline functions:
	this.frame_12 = function() {
		parent.$('#next-button').attr('disabled', true)
		stage.enableMouseOver();
		
		this.L1Done = Shell.IsLessonComplete(1);
		this.L2Done = Shell.IsLessonComplete(2);
		this.L3Done = Shell.IsLessonComplete(3);
		this.L4Done = Shell.IsLessonComplete(4);
		this.L5Done = Shell.IsLessonComplete(5);
		this.L6Done = Shell.IsLessonComplete(6);
		
		
		
		XMLog('this.L2Done: ' + this.L2Done)
		XMLog('this.L3Done: ' + this.L3Done)
		XMLog('this.L4Done: ' + this.L4Done)
		XMLog('this.L5Done: ' + this.L5Done)
		XMLog('this.L6Done: ' + this.L6Done)
		
		if (this.L2Done) {
			this.btn1.gotoAndStop('complete');
			this.btn2.gotoAndStop('unlocked');
		};
		
		if (this.L3Done) {
			this.btn2.gotoAndStop('complete');
			this.btn3.gotoAndStop('unlocked');
		};
		
		if (this.L4Done) {
			this.btn3.gotoAndStop('complete');
			this.btn4.gotoAndStop('unlocked');
		};
		if (this.L5Done) {
			this.btn4.gotoAndStop('complete');
			this.btn5.gotoAndStop('unlocked');
		};
		if (this.L6Done) {
			this.btn5.gotoAndStop('complete');
		};
		
		
		if (this.L2Done && this.L3Done && this.L4Done && this.L5Done && this.L6Done) {
			Slide.Complete();
			//this.txtInstructions.visible = false;
			//this.intructionTxtBkgd.visible = false;
		}
	}
	this.frame_28 = function() {
		var played = parent.LMS.GetFromSuspendData('playedOnce_selection');
		
		if (this.L1Done) {
			this.btn1.gotoAndStop('complete');
		} else {
			this.btn1.gotoAndStop('unlocked');
		}
		
		if (played == undefined) {
			parent.LMS.SaveToSuspendData('playedOnce_selection', true);
			//this.play();
		
			this.stop();
			playSoundThenResume('audio_1', this);
		
		} else {
		
			/*	if (this.L2Done) {
				this.btn1.gotoAndStop('complete');
			} else {
				this.btn1.gotoAndStop('unlocked');
			}
			this.gotoAndPlay('menuComplete');*/
		}
	}
	this.frame_29 = function() {
		
	}
	this.frame_31 = function() {
		this.stop();
		
		//lesson2
		this.btn1.cursor = 'pointer';
		this.btn1.addEventListener('click', btn1Click);
		function btn1Click(e){
			Shell.GoToSlide(1,2);
		}
		
		//lesson3
		if(this.L2Done){
		this.btn2.cursor = 'pointer';
		this.btn2.addEventListener('click', btn2Click);
		}
		function btn2Click(e){
			Shell.GoToSlide(1,3);
		}
		
		//lesson4
		if(this.L3Done){
		this.btn3.cursor = 'pointer';
		this.btn3.addEventListener('click', btn3Click);
		}
		function btn3Click(e){
			Shell.GoToSlide(1,4);
		}
		
		//lesson5
		if(this.L4Done){
		this.btn4.cursor = 'pointer';
		this.btn4.addEventListener('click', btn4Click);
		}
		function btn4Click(e){
			Shell.GoToSlide(1,5);
		}
		
		//lesson6
		if(this.L5Done){
		this.btn5.cursor = 'pointer';
		this.btn5.addEventListener('click', btn5Click);
		}
		function btn5Click(e){
			Shell.GoToSlide(1,6);
		}
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		/* this.stop();
		//trace("done");
		//this.Complete();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(16).call(this.frame_28).wait(1).call(this.frame_29).wait(2).call(this.frame_31).wait(11).call(this.frame_42).wait(4).call(this.frame_46).wait(1));

	// txt1
	this.txt1 = new lib.txt1();
	this.txt1.name = "txt1";
	this.txt1.parent = this;
	this.txt1.setTransform(480.5,-50,1,1,0,0,0,131.9,50);

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(13).to({y:50},10,cjs.Ease.get(1)).wait(24));

	// white
	this.white = new lib.whitecopy();
	this.white.name = "white";
	this.white.parent = this;
	this.white.setTransform(480,210,1,1,0,0,0,480,210);

	this.timeline.addTween(cjs.Tween.get(this.white).to({alpha:0},10).to({_off:true},1).wait(36));

	// blocker
	this.blocker = new lib.blocker();
	this.blocker.name = "blocker";
	this.blocker.parent = this;
	this.blocker.setTransform(480,210,1.01,0.8,0,0,0,475,262.5);
	this.blocker.alpha = 0.199;
	this.blocker.cache(-2,-2,954,529);

	this.timeline.addTween(cjs.Tween.get(this.blocker).to({_off:true},30).wait(17));

	// txtInstructions
	this.txtInstructions = new lib.instructionTxt2();
	this.txtInstructions.name = "txtInstructions";
	this.txtInstructions.parent = this;
	this.txtInstructions.setTransform(480.3,519.2,1,1,0,0,0,147,14.3);
	this.txtInstructions.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.txtInstructions).wait(13).to({alpha:1},14).wait(20));

	// gray
	this.gray = new lib.gray();
	this.gray.name = "gray";
	this.gray.parent = this;
	this.gray.setTransform(480.5,520,1,1,0,0,0,480,20);

	this.timeline.addTween(cjs.Tween.get(this.gray).wait(47));

	// btn5
	this.btn5 = new lib.btn5();
	this.btn5.name = "btn5";
	this.btn5.parent = this;
	this.btn5.setTransform(919.5,533,1,1,0,0,0,157.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.btn5).wait(17).to({y:220.5},10,cjs.Ease.get(1)).wait(20));

	// btn4
	this.btn4 = new lib.btn4();
	this.btn4.name = "btn4";
	this.btn4.parent = this;
	this.btn4.setTransform(734.5,533,1,1,0,0,0,157.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.btn4).wait(16).to({y:220.5},10,cjs.Ease.get(1)).wait(21));

	// btn3
	this.btn3 = new lib.btn3();
	this.btn3.name = "btn3";
	this.btn3.parent = this;
	this.btn3.setTransform(549.5,533,1,1,0,0,0,157.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(15).to({y:220.5},10,cjs.Ease.get(1)).wait(22));

	// btn2
	this.btn2 = new lib.btn2();
	this.btn2.name = "btn2";
	this.btn2.parent = this;
	this.btn2.setTransform(364.5,533,1,1,0,0,0,157.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(14).to({y:220.5},10,cjs.Ease.get(1)).wait(23));

	// btn1
	this.btn1 = new lib.btn1();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(179.5,533,1,1,0,0,0,157.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(13).to({y:220.5},10,cjs.Ease.get(1)).wait(24));

	// background
	this.background = new lib.background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(480,270,1,1,0,0,0,480,270);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(47));

	// white
	this.white_1 = new lib.whitecopy();
	this.white_1.name = "white_1";
	this.white_1.parent = this;
	this.white_1.setTransform(480,210,1,1,0,0,0,480,210);

	this.timeline.addTween(cjs.Tween.get(this.white_1).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1228,170,3416,786.5);
// library properties:
lib.properties = {
	id: '55E227A4B9B9DF4AB834360A9459DC69',
	width: 960,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../../Assets/Images/Lesson1/Slide8/Bitmap8.png", id:"Bitmap8"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_checkmark.png", id:"mainMenu_checkmark"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_cloudsBkgd.png", id:"mainMenu_cloudsBkgd"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_electricLinesMountainsShrubs04.png", id:"mainMenu_electricLinesMountainsShrubs04"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_m1.png", id:"mainMenu_m1"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_m2.png", id:"mainMenu_m2"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_m3.png", id:"mainMenu_m3"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_m4.png", id:"mainMenu_m4"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_m5.png", id:"mainMenu_m5"},
		{src:"../../Assets/Images/Lesson1/Slide8/mainMenu_sunshine04.png", id:"mainMenu_sunshine04"},
		{src:"../../Assets/Sounds/Lesson1/Slide8/audio_1.mp3", id:"audio_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['55E227A4B9B9DF4AB834360A9459DC69'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;