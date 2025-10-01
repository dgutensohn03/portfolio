(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,440,530);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1909,134);


(lib.BttnMain_DWN = function() {
	this.initialize(img.BttnMain_DWN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,175);


(lib.BttnMain_UP = function() {
	this.initialize(img.BttnMain_UP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,629,174);


(lib.CardFlipped = function() {
	this.initialize(img.CardFlipped);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.CardMat = function() {
	this.initialize(img.CardMat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1921,898);


(lib.Card_UP = function() {
	this.initialize(img.Card_UP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.Dealer_10C = function() {
	this.initialize(img.Dealer_10C);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,136);


(lib.Dealer_10H = function() {
	this.initialize(img.Dealer_10H);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,136);


(lib.Dealer_8H = function() {
	this.initialize(img.Dealer_8H);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,136);


(lib.LD_8_10H_Big = function() {
	this.initialize(img.LD_8_10H_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_2H_Big = function() {
	this.initialize(img.LD_8_2H_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_2S_Big = function() {
	this.initialize(img.LD_8_2S_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_5D_Big_Lose = function() {
	this.initialize(img.LD_8_5D_Big_Lose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_6C_Big = function() {
	this.initialize(img.LD_8_6C_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_6D_Big = function() {
	this.initialize(img.LD_8_6D_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_6H_Big = function() {
	this.initialize(img.LD_8_6H_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_9H_Win = function() {
	this.initialize(img.LD_8_9H_Win);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,296);


(lib.LD_8_JH_Big = function() {
	this.initialize(img.LD_8_JH_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.LD_8_KC_Big = function() {
	this.initialize(img.LD_8_KC_Big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.Loser_4 = function() {
	this.initialize(img.Loser_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,267);


(lib.Loser_J = function() {
	this.initialize(img.Loser_J);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,267);


(lib.Loser_Q = function() {
	this.initialize(img.Loser_Q);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,268);


(lib.Player_Loser_7 = function() {
	this.initialize(img.Player_Loser_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,267);


(lib.Player_Winner_J = function() {
	this.initialize(img.Player_Winner_J);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,267);


(lib.Player_Winner_Q1 = function() {
	this.initialize(img.Player_Winner_Q1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,268);


(lib.VPS_8_5HBig = function() {
	this.initialize(img.VPS_8_5HBig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.Winner_Q = function() {
	this.initialize(img.Winner_Q);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,267);// helper functions:

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


(lib.Symbol22 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARQgHgGAAgLQAAgJAGgHQAHgHALAAQAMAAAGAHQAHAHAAAJQAAALgHAGQgGAHgMgBQgLABgGgHg");
	this.shape.setTransform(387.6,34.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFCCIAAghIAIABQAQAAAJgHQAIgFAFgOIAGgRIhDi8IAuAAIAnCBIAniBIAtAAIhLDaQgRAxgpAAQgKgBgLgDg");
	this.shape_1.setTransform(373.925,30.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag+BSQgSgQAAgYQgBgeAXgQQAWgQAqAAIAZAAIAAgNQAAgPgHgIQgJgJgPAAQgPAAgKAHQgJAIAAALIgrAAQABgQAJgOQALgNASgIQASgIAVAAQAhAAAUARQAUARAAAeIAABVQAAAaAIAPIAAADIgsAAQgDgFgCgNQgUAWgdgBQgdAAgRgQgAgaAOQgMAIAAAPQAAAMAJAIQAHAHAOAAQAMAAALgGQALgGAFgKIAAgkIgWAAQgXAAgMAIg");
	this.shape_2.setTransform(355.45,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVCHIAAkNIArAAIAAENg");
	this.shape_3.setTransform(341.1,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSCFIAAkGIAnAAIACATQASgWAgAAQAjAAAUAaQATAZAAAuIAAADQAAArgUAbQgUAagiAAQgeAAgTgVIAABagAgohMIAABUQAMAWAaAAQAUAAALgRQAMgPAAgiQAAgcgMgRQgLgQgUAAQgaAAgMAVg");
	this.shape_4.setTransform(326.775,30.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BIQgYgbAAgtIAAgBQAAgcALgWQALgXAUgLQAUgMAZgBQAmABAYAYQAYAZACApIAAAJQAAAcgKAWQgLAXgUAMQgUAMgbgBQgnABgYgbgAggguQgNAQAAAgQAAAdAMARQANAQAUAAQAWABAMgSQAMgQAAggQAAgdgMgQQgNgRgVgBQgUABgMARg");
	this.shape_5.setTransform(297.075,26.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBCIAAhrIgfAAIAAggIAfAAIAAguIAqAAIAAAuIAhAAIAAAgIghAAIAABpQAAALAEAFQAEAFALAAIAPgCIAAAhQgOAEgOAAQgwAAAAg2g");
	this.shape_6.setTransform(280.475,24.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBaQgSgJgKgOQgLgPAAgRIAqAAQABAPAKAJQALAHAQABQARAAAJgHQAJgGAAgLQAAgLgKgGQgJgGgVgEQgWgFgOgHQgggPAAgdQAAgZAVgQQAUgRAfAAQAiAAAVARQAVARAAAbIgqAAQAAgMgKgIQgJgJgPABQgNAAgJAGQgJAGAAALQAAAKAJAFQAIAGAYAFQAZAGAPAIQAOAHAHAKQAHALAAAPQAAAZgWAQQgVARgigBQgXAAgSgIg");
	this.shape_7.setTransform(256.525,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BuQgUgbAAguQAAgrAUgbQAUgaAjAAQAdAAATAVIAAhiIAqAAIAAENIgmAAIgDgTQgTAXgfAAQghAAgVgbgAgcgIQgMAPAAAhQAAAdAMARQALAQATAAQAaAAANgXIAAhRQgMgWgaAAQgUAAgLAQg");
	this.shape_8.setTransform(236.775,22.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxBhIAAi9IApAAIABAVQAOgZAcAAQAJAAAGADIAAAoQgJgCgJAAQgdAAgJAXIAACBg");
	this.shape_9.setTransform(221.575,26.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BSQgSgQAAgYQABgeAWgQQAXgQAoAAIAbAAIAAgNQAAgPgJgIQgIgJgQAAQgPAAgIAHQgKAIAAALIgqAAQgBgQALgOQAKgNASgIQASgIAVAAQAhAAAUARQAUARABAeIAABVQAAAaAGAPIAAADIgrAAQgDgFgCgNQgVAWgcgBQgcAAgTgQgAgaAOQgMAIAAAPQAAAMAIAIQAJAHANAAQAMAAALgGQALgGAGgKIAAgkIgYAAQgWAAgMAIg");
	this.shape_10.setTransform(204.65,26.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag5BIQgYgZAAguIAAgDQAAgsAXgaQAYgaAnAAQAhAAAWAUQAVAUABAgIgoAAQgBgRgKgKQgLgLgQAAQgTABgMAPQgLAPAAAeIAAAGQAAAfALAQQALAOAUAAQAQAAALgJQAKgJABgOIAoAAQgBASgKAPQgLAQgRAIQgSAKgUgBQgoAAgWgag");
	this.shape_11.setTransform(185.65,26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag5BJQgagaAAgqIAAgFQAAgcALgWQALgXAUgMQAUgNAXAAQAnABAWAYQAVAZAAAtIAAARIh8AAQACAXAOAOQAOANAUAAQAdAAATgXIAXAVQgMARgTAKQgTAJgYAAQgnABgZgagAgZgzQgLAMgDAWIBQAAIAAgDQgBgVgKgMQgKgLgSAAQgQABgLAMg");
	this.shape_12.setTransform(157.625,26.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkCHIAAh7QAAgSgIgJQgJgIgQAAQgaAAgMAXIAACHIgqAAIAAkNIAqAAIAABlQAVgZAfAAQA8ABABBEIAAB8g");
	this.shape_13.setTransform(137.8,22.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWBCIAAhrIgfAAIAAggIAfAAIAAguIAqAAIAAAuIAhAAIAAAgIghAAIAABpQAAALAEAFQAEAFALAAIAPgCIAAAhQgOAEgOAAQgwAAAAg2g");
	this.shape_14.setTransform(121.425,24.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBCIAAhrIgfAAIAAggIAfAAIAAguIAqAAIAAAuIAhAAIAAAgIghAAIAABpQAAALAEAFQAEAFALAAIAPgCIAAAhQgOAEgOAAQgwAAAAg2g");
	this.shape_15.setTransform(100.525,24.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag6BIQgXgZAAguIAAgDQAAgsAXgaQAXgaAnAAQAjAAAUAUQAWAUABAgIgoAAQgBgRgLgKQgKgLgQAAQgUABgLAPQgLAPgBAeIAAAGQAAAfAMAQQALAOAUAAQAQAAAKgJQALgJABgOIAoAAQgBASgKAPQgLAQgRAIQgSAKgVgBQgnAAgXgag");
	this.shape_16.setTransform(85.7,26.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5BJQgagaAAgqIAAgFQAAgcALgWQALgXAUgMQAUgNAXAAQAnABAWAYQAVAZAAAtIAAARIh8AAQACAXAOAOQAOANAUAAQAdAAATgXIAXAVQgMARgTAKQgTAJgYAAQgnABgZgagAgZgzQgLAMgDAWIBQAAIAAgDQgBgVgKgMQgKgLgSAAQgQABgLAMg");
	this.shape_17.setTransform(66.625,26.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVCHIAAkNIArAAIAAENg");
	this.shape_18.setTransform(52.2,22.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BJQgagaAAgqIAAgFQAAgcALgWQALgXAUgMQAUgNAXAAQAnABAWAYQAVAZAAAtIAAARIh8AAQACAXAOAOQAOANAUAAQAdAAATgXIAXAVQgMARgTAKQgTAJgYAAQgnABgZgagAgZgzQgLAMgDAWIBQAAIAAgDQgBgVgKgMQgKgLgSAAQgQABgLAMg");
	this.shape_19.setTransform(38.125,26.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AguB5QgXgKgNgSQgNgSAAgZIAtAAQAAAXAOAMQAPAMAZgBQAYAAALgJQAMgKAAgPQAAgRgMgJQgMgJgegKQgfgIgSgLQgjgWAAgjQAAggAZgUQAagTAnAAQAbgBAVALQAUAJAMASQAMASAAAXIgsAAQAAgUgMgMQgNgLgXABQgVgBgMAKQgMAJAAARQAAANANAKQANAKAdAIQAdAJATALQASAKAIAQQAJAOAAATQAAAhgZASQgZATgqAAQgaABgYgLg");
	this.shape_20.setTransform(17.425,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(4.5,0,390.4,47.2), null);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape.setTransform(1277.375,99.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiXFTQg1g7gFh8ICJgYQABBJATAlQASAkAlAAQAcAAANgSQAMgSAAgcQAAgugUgfQgUgfgrgmIhThIQgggbgUgYQgTgYgNgmQgOglAAgtQAAhfA4gzQA4g0BggBQAhAAAbAHQAbAGAUAMQATALAPARQAPARAKASQAJASAHAXQAGAWADAVQADAUABAYIiIAVIgCgnQgCgQgDgRQgFgSgGgJQgHgKgLgGQgLgGgPABQgaABgOATQgOATAAAbQAAAVAFARQAEARAMAPQALAQAJAJIAaAaIBSBHQAaAXATAVQAUAWARAcQARAdAKAhQAJAiAAAmQAABVg3A2Qg3A3haAAQhrAAg2g8g");
	this.shape_1.setTransform(1242.575,67.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABmGFIiumtIAAGtIiHAAIAAsIIBvAAICsGSIAAmSICEAAIAAMIg");
	this.shape_2.setTransform(1191.15,67.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNGFIAAsIICbAAIAAMIg");
	this.shape_3.setTransform(1150.85,67.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABMGFIhMnrIhJHrIiHAAIhmsIICGAAIA2HYIBGnYIBoAAIBJHXIA2nXICEAAIhmMIg");
	this.shape_4.setTransform(1103.025,67.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AipGFIAAsIIFRAAIAABtIizAAIAADOICLAAIAABtIiLAAIAADzIC1AAIAABtg");
	this.shape_5.setTransform(1025.675,67.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiXFTQg1g7gFh8ICJgYQABBJATAlQASAkAlAAQAcAAANgSQAMgSAAgcQAAgugUgfQgUgfgrgmIhThIQgggbgUgYQgTgYgNgmQgOglAAgtQAAhfA4gzQA4g0BggBQAhAAAbAHQAbAGAUAMQATALAPARQAPARAKASQAJASAHAXQAGAWADAVQADAUABAYIiIAVIgCgnQgCgQgDgRQgFgSgGgJQgHgKgLgGQgLgGgPABQgaABgOATQgOATAAAbQAAAVAFARQAEARAMAPQALAQAJAJIAaAaIBSBHQAaAXATAVQAUAWARAcQARAdAKAhQAJAiAAAmQAABVg3A2Qg3A3haAAQhrAAg2g8g");
	this.shape_6.setTransform(979.425,67.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhsF5QgsgSgZgiQgagjgKguQgKgvAAhBIAAoNICaAAIAAIhQABAWABAQQABAPAFASQADASAHALQAIALAMAHQAOAHARAAQATAAANgHQANgHAHgLQAHgLAFgSQADgSABgPIACgmIAAohICbAAIAAINQgBBBgJAvQgLAugZAjQgZAigsASQgtARhBAAQhAAAgsgRg");
	this.shape_7.setTransform(926.85,68.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhsF+QgsgSgaghQgbgjgMguQgMgtAAg/IAAkeQAAg+AMguQAMgtAbgiQAaghAsgRQAtgRA/AAQB6AAA2BAQA2BBAAB9IAAEeQAAB+g2BBQg2BCh6AAQg/AAgtgRgAgekXQgNAGgHAJQgHAIgEAPQgEAOgBANQgCANABATIAAFrQgBASACAOQABANAEAPQAEAOAHAJQAHAJANAGQANAGARAAQARAAANgGQANgGAHgJQAIgJADgOQAFgPABgNIABggIAAlrIgBggQgBgOgFgOQgDgOgIgIQgHgJgNgGQgNgFgRAAQgRAAgNAFg");
	this.shape_8.setTransform(871.65,67.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABFGFIAAlaIiJAAIAAFaIieAAIAAsIICeAAIAAE+ICJAAIAAk+ICeAAIAAMIg");
	this.shape_9.setTransform(815.35,67.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AipGFIAAsIIFRAAIAABtIizAAIAADOICLAAIAABtIiLAAIAADzIC1AAIAABtg");
	this.shape_10.setTransform(743.275,67.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABFGFIAAlaIiIAAIAAFaIifAAIAAsIICfAAIAAE+ICIAAIAAk+ICeAAIAAMIg");
	this.shape_11.setTransform(691.8,67.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhNGFIAAqUIh8AAIAAh0IGTAAIAAB0Ih6AAIAAKUg");
	this.shape_12.setTransform(642.225,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21copy, new cjs.Rectangle(0,0,1909.4,134.4), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,1909,134), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,440,530), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.749)").s().p("EiV/A/cMAAAh+4MEr/AAAMAAAB+4g");
	this.shape.setTransform(960,406.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,1920,812.1), null);


(lib.Symbol6copy2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{stop_1:0,stop_2:1,stop_3:2,stop_4:3,stop_5:4,stop_6:5,dealer_1:6,dealer_2:7,dealer_3:8,dealer_4:9,dealer_5:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(2).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// letter
	this.instance = new lib.Loser_J();
	this.instance.setTransform(11,16,1.1082,1.1082);

	this.instance_1 = new lib.Loser_4();
	this.instance_1.setTransform(11,16,1.1082,1.1082);

	this.instance_2 = new lib.Player_Winner_Q1();
	this.instance_2.setTransform(11,16,1.1082,1.1082);

	this.instance_3 = new lib.Loser_Q();
	this.instance_3.setTransform(11,16,1.1082,1.1082);

	this.instance_4 = new lib.Winner_Q();
	this.instance_4.setTransform(11,16,1.1082,1.1082);

	this.instance_5 = new lib.Player_Loser_7();
	this.instance_5.setTransform(11,16,1.1082,1.1082);

	this.instance_6 = new lib.Dealer_10C();
	this.instance_6.setTransform(11,16,2.1826,2.1826);

	this.instance_7 = new lib.Dealer_10H();
	this.instance_7.setTransform(11,16,2.1826,2.1826);

	this.instance_8 = new lib.Player_Winner_J();
	this.instance_8.setTransform(11,16,1.1082,1.1083);

	this.instance_9 = new lib.Dealer_8H();
	this.instance_9.setTransform(11,16,2.2053,2.2047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// Symbol_5
	this.instance_10 = new lib.CardFlipped();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.Symbol6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"stop_1":0,"stop_2":1,"stop_3":2,"stop_4":3,"stop_5":4,"stop_6":5,"dealer_1":6,"dealer_2":7,"dealer_3":8,"dealer_4":9,"dealer_5":10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// letter
	this.instance = new lib.LD_8_JH_Big();
	this.instance.setTransform(11,16,0.9034,0.9034);

	this.instance_1 = new lib.LD_8_2H_Big();
	this.instance_1.setTransform(11,16,0.9071,0.907);

	this.instance_2 = new lib.LD_8_10H_Big();
	this.instance_2.setTransform(11,16,0.9072,0.9072);

	this.instance_3 = new lib.VPS_8_5HBig();
	this.instance_3.setTransform(11,16,0.9072,0.9072);

	this.instance_4 = new lib.LD_8_9H_Win();
	this.instance_4.setTransform(11,16,1.0001,0.9998);

	this.instance_5 = new lib.LD_8_5D_Big_Lose();
	this.instance_5.setTransform(11,16,0.9072,0.9071);

	this.instance_6 = new lib.LD_8_6C_Big();
	this.instance_6.setTransform(11,16,0.9071,0.9073);

	this.instance_7 = new lib.LD_8_6D_Big();
	this.instance_7.setTransform(11,16,0.9071,0.9072);

	this.instance_8 = new lib.LD_8_KC_Big();
	this.instance_8.setTransform(11,16,0.9072,0.8984);

	this.instance_9 = new lib.LD_8_2S_Big();
	this.instance_9.setTransform(11,16,0.9072,0.9072);

	this.instance_10 = new lib.LD_8_6H_Big();
	this.instance_10.setTransform(11,16,0.9072,0.9069);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

	// Symbol_5
	this.instance_11 = new lib.CardFlipped();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,237,327);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Card_UP();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,237,327), null);


(lib._continue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// CONTINUE
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRDSIAAmjICjAAIAAAtIhoAAIAACHIBLAAIAAAsIhLAAIAACWIBoAAIAAAtg");
	this.shape.setTransform(317.65,87.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvDNQgVgHgOgNQgNgNgIgUQgJgUgDgWQgEgXAAgdIAAkNIA8AAIAAENIABAgQABANAEAPQADAPAGAJQAHAJALAGQALAGAPAAQAQAAAMgGQALgGAHgJQAFgJAEgPQADgPABgNIABggIAAkNIA8AAIAAENQAAAdgDAXQgEAWgIAUQgJAUgNANQgNANgWAHQgVAHgbAAQgaAAgVgHg");
	this.shape_1.setTransform(291.7,87.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/DSIhrkWIAAEWIg8AAIAAmjIAtAAIBoEDIAAkDIA8AAIAAGjg");
	this.shape_2.setTransform(263.55,87.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdDSIAAmjIA7AAIAAGjg");
	this.shape_3.setTransform(243.7,87.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdDSIAAltIhLAAIAAg2IDRAAIAAA2IhLAAIAAFtg");
	this.shape_4.setTransform(226.95,87.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA+DSIhqkWIAAEWIg8AAIAAmjIAtAAIBoEDIAAkDIA8AAIAAGjg");
	this.shape_5.setTransform(202.95,87.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1DMQgXgJgNgSQgOgTgGgZQgGgZAAghIAAiXQAAgiAGgYQAGgZAOgRQANgTAXgJQAWgJAfAAQA9AAAcAjQAbAjAABDIAACXQAAAhgGAYQgHAZgNAUQgNASgXAJQgXAKgfAAQgfAAgWgKgAgriSQgMASAAAkIAAC2QAAAlAMATQAMATAfAAQAgAAAMgTQAMgTAAglIAAi2QAAgkgMgSQgMgSggAAQgfAAgMASg");
	this.shape_6.setTransform(175.625,87.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgsDOQgUgHgNgNQgNgOgIgTQgIgUgDgWQgEgXAAgcIAAh3QAAgcAEgXQADgWAIgUQAIgUANgNQANgNAUgIQAUgHAaAAQAdAAAWAIQAVAJANARQANARAGAWQAGAXACAdIAAAOIg8AAIAAgOIgBgVIgDgSQgCgJgEgGQgDgHgFgFQgGgFgJgDQgIgCgLAAQgNAAgLAEQgLAGgFAHQgHAHgCAMQgEANgBAMIgBAdIAACVQABAPABAMQABAMAEAMQAEAMAGAJQAFAIALAFQAJAFANAAQANAAAKgFQAKgGAFgHQAFgIADgNQAEgMABgMIABgbIAAgPIA8AAIAAAPQAAAhgGAYQgGAZgNATQgNATgVAJQgWAKgfAAQgaAAgUgIg");
	this.shape_7.setTransform(149.45,87.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1261C").s().p("AhRDSIAAmjICjAAIAAAtIhoAAIAACHIBLAAIAAAsIhLAAIAACWIBoAAIAAAtg");
	this.shape_8.setTransform(317.65,87.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1261C").s().p("AgvDNQgVgHgOgNQgNgNgIgUQgJgUgDgWQgEgXAAgdIAAkNIA8AAIAAENIABAgQABANAEAPQADAPAGAJQAHAJALAGQALAGAPAAQAQAAAMgGQALgGAHgJQAFgJAEgPQADgPABgNIABggIAAkNIA8AAIAAENQAAAdgDAXQgEAWgIAUQgJAUgNANQgNANgWAHQgVAHgbAAQgaAAgVgHg");
	this.shape_9.setTransform(291.7,87.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E1261C").s().p("AA/DSIhrkWIAAEWIg8AAIAAmjIAtAAIBoEDIAAkDIA8AAIAAGjg");
	this.shape_10.setTransform(263.55,87.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E1261C").s().p("AgdDSIAAmjIA7AAIAAGjg");
	this.shape_11.setTransform(243.7,87.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1261C").s().p("AgdDSIAAltIhLAAIAAg2IDRAAIAAA2IhLAAIAAFtg");
	this.shape_12.setTransform(226.95,87.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E1261C").s().p("AA+DSIhqkWIAAEWIg8AAIAAmjIAtAAIBoEDIAAkDIA8AAIAAGjg");
	this.shape_13.setTransform(202.95,87.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E1261C").s().p("Ag1DMQgXgJgNgSQgOgTgGgZQgGgZAAghIAAiXQAAgiAGgYQAGgZAOgRQANgTAXgJQAWgJAfAAQA9AAAcAjQAbAjAABDIAACXQAAAhgGAYQgHAZgNAUQgNASgXAJQgXAKgfAAQgfAAgWgKgAgriSQgMASAAAkIAAC2QAAAlAMATQAMATAfAAQAgAAAMgTQAMgTAAglIAAi2QAAgkgMgSQgMgSggAAQgfAAgMASg");
	this.shape_14.setTransform(175.625,87.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E1261C").s().p("AgsDOQgUgHgNgNQgNgOgIgTQgIgUgDgWQgEgXAAgcIAAh3QAAgcAEgXQADgWAIgUQAIgUANgNQANgNAUgIQAUgHAaAAQAdAAAWAIQAVAJANARQANARAGAWQAGAXACAdIAAAOIg8AAIAAgOIgBgVIgDgSQgCgJgEgGQgDgHgFgFQgGgFgJgDQgIgCgLAAQgNAAgLAEQgLAGgFAHQgHAHgCAMQgEANgBAMIgBAdIAACVQABAPABAMQABAMAEAMQAEAMAGAJQAFAIALAFQAJAFANAAQANAAAKgFQAKgGAFgHQAFgIADgNQAEgMABgMIABgbIAAgPIA8AAIAAAPQAAAhgGAYQgGAZgNATQgNATgVAJQgWAKgfAAQgaAAgUgIg");
	this.shape_15.setTransform(149.45,87.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Bttn_Main_DWN_png
	this.instance = new lib.BttnMain_DWN();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Bttn_Main_UP_png
	this.instance_1 = new lib.BttnMain_UP();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,629,175);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blocker, new cjs.Rectangle(0,0,1920,1080), null);


(lib.card_5lose = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{playLose:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.card5.visible = false;
	}
	this.frame_38 = function() {
		this.stop();
		exportRoot.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(37).call(this.frame_38).wait(1));

	// Layer_5
	this.instance = new lib.Symbol21copy();
	this.instance.setTransform(1554.6,5.75,1,1,0,0,0,954.7,67.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-378.95,y:8.25},0).wait(15).to({y:-59.25,alpha:1},8,cjs.Ease.get(1)).wait(15));

	// Layer_4_copy
	this.cardContainer2 = new lib.Symbol6();
	this.cardContainer2.name = "cardContainer2";
	this.cardContainer2.setTransform(1220.6,163.6,1,1,0,0,0,118.6,163.6);

	this.timeline.addTween(cjs.Tween.get(this.cardContainer2).wait(1).to({x:118.5,y:163.5},0).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1333.6,-126.4,3842.9,453.4);


(lib.card_5copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:0,checking:14,flipBack:15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		this.cardBack.addEventListener('click', function () {
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		
		this.cardBack.addEventListener('click', function () {
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
		
			exportRoot.cardFlipCount++;	
			exportRoot.checkDeck();
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_4copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		this.cardBack.addEventListener('click', function () {
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		
		this.cardBack.addEventListener('click', function () {
			exportRoot.instructions.visible = false;
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
		
		function runCheck() {
			exportRoot.cardFlipCount++;	
			if (exportRoot.cardFlipCount == 4){$('.earn-point', window.parent.document).delay(1000).fadeIn();}
			
			}
			
			runCheck();
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_3copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		
		this.cardBack.addEventListener('click', function () {
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		
		this.cardBack.addEventListener('click', function () {
			exportRoot.instructions.visible = false;
			card.play();
		
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
		
		function runCheck() {
			exportRoot.cardFlipCount++;	
			if (exportRoot.cardFlipCount == 4){$('.earn-point', window.parent.document).delay(1000).fadeIn();}
			
			}
			
			runCheck();
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_2copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		this.cardBack.addEventListener('click', function () {
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		
		this.cardBack.addEventListener('click', function () {
			exportRoot.instructions.visible = false;
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
		
		
		function runCheck() {
			exportRoot.cardFlipCount++;	
			if (exportRoot.cardFlipCount == 4){$('.earn-point', window.parent.document).delay(1000).fadeIn();}
			
			}
			
			runCheck();
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_1copy = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		this.cardBack.addEventListener('click', function () {
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.card_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"start":0,"checking":14,"flipBack":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		stage.update();
		
		var card = this;
		card.cardBack.cursor = "pointer";
		
		this.cardBack.addEventListener('click', function () {
			exportRoot.instructions.visible = false;
			card.play();
			stage.update();
		})
	}
	this.frame_1 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_14 = function() {
		this.stop();
		var self = this;
		
		function runCheck() {
			exportRoot.cardFlipCount++;	
			if (exportRoot.cardFlipCount == 4){$('.earn-point', window.parent.document).delay(1000).fadeIn();}
			
			}
			
			runCheck();
	}
	this.frame_15 = function() {
		playSound("Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906");
	}
	this.frame_28 = function() {
		this.stop();
		this.gotoAndStop('start');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(13).call(this.frame_28).wait(1));

	// Layer_1
	this.cardBack = new lib.Symbol1();
	this.cardBack.name = "cardBack";
	this.cardBack.setTransform(118.5,163.5,1,1,0,0,0,118.5,163.5);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(62.5,93.4,1,1,0,0,0,62.5,93.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cardBack).to({_off:true,regX:62.5,regY:93.4,x:62.5,y:93.4},1,cjs.Ease.get(-1)).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:false},1,cjs.Ease.get(-1)).to({regX:63.8,regY:95.8,scaleX:0.999,scaleY:0.55,skewY:-85.0007,x:116.3,y:161.75},7).to({_off:true},1).wait(12).to({_off:false},0).to({regX:62.5,regY:93.4,scaleX:1,scaleY:1,skewY:0,x:62.5,y:93.4},7).wait(1));

	// Layer_4
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(8).to({regX:117.5,regY:161.8,scaleY:0.5499,skewY:87.0007,x:118.5,y:163.5,alpha:1},0).to({regX:118.6,regY:163.6,scaleY:1,skewY:0},6).wait(1).to({regX:118.4,regY:160.2,scaleX:0.9898,scaleY:0.5499,skewY:87.1874},6).wait(1).to({alpha:0.0117},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-73.7,240.9,454.3);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol19();
	this.instance.setTransform(960,406.1,1,1,0,0,0,960,406.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol, new cjs.Rectangle(0,0,1920,812.1), null);


(lib.card_5win = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{playWin:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		exportRoot.card5.visible = false;
	}
	this.frame_39 = function() {
		this.stop();
				
		window.parent.points[3] = 10;
		window.parent.updateProgressTracker();
		exportRoot.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(38).call(this.frame_39).wait(1));

	// Layer_5
	this.instance = new lib.Symbol21();
	this.instance.setTransform(-378.95,-89.25,1,1,0,0,0,954.7,67.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({y:-156.75,alpha:1},8,cjs.Ease.get(1)).wait(15));

	// Layer_4_copy
	this.cardContainer2 = new lib.Symbol6copy2();
	this.cardContainer2.name = "cardContainer2";
	this.cardContainer2.setTransform(1216.65,163.6,1,1,0,0,0,118.6,163.6);

	this.timeline.addTween(cjs.Tween.get(this.cardContainer2).wait(40));

	// Layer_4_copy
	this.cardContainer = new lib.Symbol6();
	this.cardContainer.name = "cardContainer";
	this.cardContainer.setTransform(928.15,163.6,1,1,0,0,0,118.6,163.6);

	this.timeline.addTween(cjs.Tween.get(this.cardContainer).wait(1).to({x:118.5,y:163.5},0).wait(16).to({y:113.5},8,cjs.Ease.get(1)).wait(15));

	// Layer_4
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(710,-100);

	this.instance_2 = new lib.Symbol20();
	this.instance_2.setTransform(120,165,1,1,0,0,0,220,265);
	this.instance_2.alpha = 0.0117;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_2}]},8).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({y:115,alpha:1},8,cjs.Ease.get(1)).wait(15));

	// Layer_2
	this.instance_3 = new lib.Symbol();
	this.instance_3.setTransform(-379.75,65.95,1,1,0,0,0,960,406.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({alpha:1},8,cjs.Ease.get(1)).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1339.7,-340.1,2674.8,812.1);


// stage content:
(lib.CardFlipActivity_C_8_LD = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		//stage.mouseMoveOutside = true;
		
		this.stop();
		stage.enableMouseOver();
		
		//this.stop();
		var root = this;
		this.cardFlipCount = 0;
		this.totalEarned;
		this.bonusEarned = 0;
		this.win;
		
		//console.log('cardCount in activity: ' + window.parent.cardCount)
		createjs.DisplayObject.prototype.getName = function () {
			if (!this.nameCache) {
				var parent = this.parent;
				var keys = Object.keys(parent);
				var len = keys.length;
				while (--len) {
					if (parent[keys[len]] === this) {
						this.nameCache = keys[len];
						break;
					}
				}
			}
			return this.nameCache;
		}
		
		this.continueBtn.cursor = "pointer"
		this.continueBtn.addEventListener('click', function() {
				window.parent.nextBox(12);
		})
		
		this.unlockCard = function () {
			console.log("unlockCard")
			$('.earn-point', window.parent.document).fadeOut();
			this.bonusCardBlocker.visible = false;
			this.card5win.cardContainer.gotoAndStop('stop_5');
			this.card5.alpha = 1;
			this.win = true;
		}
		
		this.gameOver = function () {
			console.log("gameOver")
			$('.earn-point', window.parent.document).fadeOut();
			this.card5.cardContainer.gotoAndStop('stop_6');
			this.card5lose.cardContainer2.gotoAndStop('stop_6');
			this.bonusCardBlocker.visible = false;
			this.card5.alpha = 1;
			this.win = false;
		}
		
		this.checkDeck = function () {
			console.log("checkDeck")
			if (exportRoot.cardFlipCount == 4){$('.earn-point', window.parent.document).fadeIn();}
			if (exportRoot.cardFlipCount == 5){
					//console.log(exportRoot.card5.cardContainer.currentLabel)
				if(this.win == true){
					setTimeout(function() {exportRoot.card5win.gotoAndPlay('playWin')}, 500);
				} else {
					setTimeout(function() {exportRoot.card5lose.gotoAndPlay('playLose')}, 500);
				}
			}
			stage.update();
		}
		this.bonusCard = function () {
			exportRoot.bonusEarned++;
			//this.pickContainer.picksLeft.text = exportRoot.bonusEarned;
		/*	for (var i = 0; i < exportRoot.cards.length; i++) {
				exportRoot.cards[i].cardBack.cursor = "pointer"
			}*/
			stage.update();
		}
		
		////this.dealDeck()
	}
	this.frame_63 = function() {
		playSound("flip_1");
	}
	this.frame_71 = function() {
		playSound("flip_2");
	}
	this.frame_83 = function() {
		playSound("flip_3");
	}
	this.frame_93 = function() {
		playSound("flip_4");
	}
	this.frame_103 = function() {
		playSound("flip_5");
	}
	this.frame_126 = function() {
		playSound("flip_1");
	}
	this.frame_134 = function() {
		playSound("flip_2");
	}
	this.frame_146 = function() {
		playSound("flip_3");
	}
	this.frame_156 = function() {
		playSound("flip_4");
	}
	this.frame_166 = function() {
		playSound("flip_5");
	}
	this.frame_194 = function() {
		this.stop();
		var self = this;
		this.card1.cardContainer.gotoAndStop('stop_1')
		this.card2.cardContainer.gotoAndStop('stop_2')
		this.card3.cardContainer.gotoAndStop('stop_3')
		this.card4.cardContainer.gotoAndStop('stop_4')
		this.card5.cardContainer.gotoAndStop('stop_5')
		this.card5win.cardContainer.gotoAndStop('stop_5')
		
		this.dealer1.cardContainer.gotoAndStop("dealer_1");
		this.dealer2.cardContainer.gotoAndStop("dealer_2");
		this.dealer3.cardContainer.gotoAndStop("dealer_3");
		this.dealer4.cardContainer.gotoAndStop("dealer_4");
		this.dealer5.cardContainer.gotoAndStop("dealer_5");
		
		stage.update();
		
		setTimeout(function() {self.dealer1.gotoAndPlay('start')}, 500);
		setTimeout(function() {self.dealer2.gotoAndPlay('start')}, 1000);
		setTimeout(function() {self.dealer3.gotoAndPlay('start')}, 1500);
		setTimeout(function() {self.dealer4.gotoAndPlay('start')}, 2000);
		setTimeout(function() {self.dealer5.gotoAndPlay('start'); self.cardBlocker.visible = false; self.play();}, 2500);
	}
	this.frame_203 = function() {
		this.stop();
	}
	this.frame_220 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(44).call(this.frame_63).wait(8).call(this.frame_71).wait(12).call(this.frame_83).wait(10).call(this.frame_93).wait(10).call(this.frame_103).wait(23).call(this.frame_126).wait(8).call(this.frame_134).wait(12).call(this.frame_146).wait(10).call(this.frame_156).wait(10).call(this.frame_166).wait(28).call(this.frame_194).wait(9).call(this.frame_203).wait(17).call(this.frame_220).wait(1));

	// Bttn_Main_DWN_png
	this.continueBtn = new lib._continue();
	this.continueBtn.name = "continueBtn";
	this.continueBtn.setTransform(960.5,1262.35,1,1,0,0,0,314.5,87.5);
	this.continueBtn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.continueBtn).wait(210).to({y:821.5},0).to({y:699,alpha:1},10,cjs.Ease.get(1)).wait(1));

	// Layer_6_copy
	this.card5lose = new lib.card_5lose();
	this.card5lose.name = "card5lose";
	this.card5lose.setTransform(1401.4,434.6,1,1,0,0,0,60.9,93.5);

	this.timeline.addTween(cjs.Tween.get(this.card5lose).wait(221));

	// Layer_6
	this.card5win = new lib.card_5win();
	this.card5win.name = "card5win";
	this.card5win.setTransform(1401.4,434.6,1,1,0,0,0,60.9,93.5);

	this.timeline.addTween(cjs.Tween.get(this.card5win).wait(221));

	// card
	this.instance = new lib.blocker();
	this.instance.setTransform(960.5,137.45,1,0.2546,0,0,0,960.5,539.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(221));

	// Symbol_15
	this.bonusCardBlocker = new lib.blocker();
	this.bonusCardBlocker.name = "bonusCardBlocker";
	this.bonusCardBlocker.setTransform(1478.75,500.05,0.1535,0.3897,0,0,0,960.3,540);

	this.timeline.addTween(cjs.Tween.get(this.bonusCardBlocker).wait(221));

	// Symbol_15
	this.cardBlocker = new lib.blocker();
	this.cardBlocker.name = "cardBlocker";
	this.cardBlocker.setTransform(960.3,535.7,1,0.5326,0,0,0,960.3,540.4);

	this.timeline.addTween(cjs.Tween.get(this.cardBlocker).wait(221));

	// card5
	this.dealer5 = new lib.card_5copy();
	this.dealer5.name = "dealer5";
	this.dealer5.setTransform(1831.95,-142.3,0.5,0.5,0,0,0,60.9,93.5);
	this.dealer5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dealer5).wait(120).to({_off:false},0).wait(46).to({rotation:-44.9988,y:-142.35},0).to({rotation:0,x:1180.7,y:109.25},7).wait(48));

	// card4
	this.dealer4 = new lib.card_4copy();
	this.dealer4.name = "dealer4";
	this.dealer4.setTransform(1831.95,-142.3,0.5,0.5,0,0,0,60.9,93.5);
	this.dealer4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dealer4).wait(120).to({_off:false},0).wait(36).to({rotation:-44.9988,y:-142.35},0).to({rotation:0,x:1055.95,y:109.25},7).wait(58));

	// card3
	this.dealer3 = new lib.card_3copy();
	this.dealer3.name = "dealer3";
	this.dealer3.setTransform(1831.95,-142.3,0.5,0.5,0,0,0,60.9,93.5);
	this.dealer3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dealer3).wait(120).to({_off:false},0).wait(26).to({rotation:-44.9988,y:-142.35},0).to({rotation:0,x:931.2,y:109.25},7).wait(68));

	// card2
	this.dealer2 = new lib.card_2copy();
	this.dealer2.name = "dealer2";
	this.dealer2.setTransform(1831.95,-142.3,0.5,0.5,0,0,0,60.9,93.5);
	this.dealer2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dealer2).wait(120).to({_off:false},0).wait(16).to({rotation:-44.9988,y:-142.35},0).to({rotation:0,x:806.45,y:109.25},7).wait(78));

	// card1
	this.dealer1 = new lib.card_1copy();
	this.dealer1.name = "dealer1";
	this.dealer1.setTransform(1831.95,-142.3,0.5,0.5,0,0,0,60.9,93.5);
	this.dealer1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dealer1).wait(120).to({_off:false},0).wait(6).to({rotation:-44.9988,y:-142.35},0).to({rotation:0,x:681.7,y:109.25},7).wait(88));

	// Layer_2_copy_copy_copy_copy
	this.card = new lib.card_1();
	this.card.name = "card";
	this.card.setTransform(2140.55,752.45,1,1,0,0,0,60.9,93.5);
	this.card.alpha = 0.3984;

	this.card5 = new lib.card_5();
	this.card5.name = "card5";
	this.card5.setTransform(1401.4,434.6,1,1,0,0,0,60.9,93.5);
	this.card5.alpha = 0.3984;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card}]}).to({state:[{t:this.card}]},104).to({state:[{t:this.card}]},7).to({state:[{t:this.card5}]},73).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.card).wait(104).to({regX:61,rotation:45,x:2140.6,y:752.5},0).to({regX:60.9,rotation:0,x:1401.4,y:434.6},7,cjs.Ease.get(1)).to({_off:true},73).wait(37));

	// Layer_2_copy_copy_copy
	this.card_1 = new lib.card_1();
	this.card_1.name = "card_1";
	this.card_1.setTransform(2140.55,752.45,1,1,0,0,0,60.9,93.5);

	this.card4 = new lib.card_4();
	this.card4.name = "card4";
	this.card4.setTransform(1151.9,434.6,1,1,0,0,0,60.9,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card_1}]}).to({state:[{t:this.card_1}]},94).to({state:[{t:this.card_1}]},7).to({state:[{t:this.card4}]},83).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.card_1).wait(94).to({regX:61,rotation:45,x:2140.6,y:752.5},0).to({regX:60.9,rotation:0,x:1151.9,y:434.6},7,cjs.Ease.get(1)).to({_off:true},83).wait(37));

	// Layer_2_copy_copy
	this.card_2 = new lib.card_1();
	this.card_2.name = "card_2";
	this.card_2.setTransform(2140.55,752.45,1,1,0,0,0,60.9,93.5);

	this.card3 = new lib.card_3();
	this.card3.name = "card3";
	this.card3.setTransform(902.4,434.6,1,1,0,0,0,60.9,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card_2}]}).to({state:[{t:this.card_2}]},84).to({state:[{t:this.card_2}]},7).to({state:[{t:this.card3}]},93).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.card_2).wait(84).to({regX:61,rotation:45,x:2140.6,y:752.5},0).to({regX:60.9,rotation:0,x:902.4,y:434.6},7,cjs.Ease.get(1)).to({_off:true},93).wait(37));

	// Layer_2_copy
	this.card_3 = new lib.card_1();
	this.card_3.name = "card_3";
	this.card_3.setTransform(2140.55,752.45,1,1,0,0,0,60.9,93.5);

	this.card2 = new lib.card_2();
	this.card2.name = "card2";
	this.card2.setTransform(652.9,434.6,1,1,0,0,0,60.9,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card_3}]}).to({state:[{t:this.card_3}]},74).to({state:[{t:this.card_3}]},7).to({state:[{t:this.card2}]},103).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.card_3).wait(74).to({regX:61,rotation:45,x:2140.6,y:752.5},0).to({regX:60.9,rotation:0,x:652.9,y:434.6},7,cjs.Ease.get(1)).to({_off:true},103).wait(37));

	// Layer_2
	this.card_4 = new lib.card_1();
	this.card_4.name = "card_4";
	this.card_4.setTransform(2140.55,752.45,1,1,0,0,0,60.9,93.5);

	this.card1 = new lib.card_1();
	this.card1.name = "card1";
	this.card1.setTransform(403.4,434.6,1,1,0,0,0,60.9,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card_4}]}).to({state:[{t:this.card_4}]},64).to({state:[{t:this.card_4}]},7).to({state:[{t:this.card1}]},113).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.card_4).wait(64).to({regX:61,scaleX:0.9999,scaleY:0.9999,rotation:45,x:2140.6,y:752.5},0).to({regX:60.9,scaleX:1,scaleY:1,rotation:0,x:403.4,y:434.6},7,cjs.Ease.get(1)).to({_off:true},113).wait(37));

	// Layer_7
	this.instructions = new lib.Symbol22();
	this.instructions.name = "instructions";
	this.instructions.setTransform(960,879.6,1,1,0,0,0,199.7,23.6);
	this.instructions.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.instructions).wait(194).to({y:767.1,alpha:1},9,cjs.Ease.get(1)).wait(18));

	// background
	this.instance_1 = new lib.CardMat();
	this.instance_1.setTransform(0,95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(221));

	// Layer_5
	this.instance_2 = new lib.Symbol();
	this.instance_2.setTransform(960,406.1,1,1,0,0,0,960,406.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(221));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,168.4,2889.8,1180.5);
// library properties:
lib.properties = {
	id: '93AC54736F13AA4F8979954A51D003E0',
	width: 1920,
	height: 812,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"./images/Bitmap2.png", id:"Bitmap2"},
		{src:"./images/Bitmap7.png", id:"Bitmap7"},
		{src:"./images/Bitmap8.png", id:"Bitmap8"},
		{src:"./images/BttnMain_DWN.png", id:"BttnMain_DWN"},
		{src:"./images/BttnMain_UP.png", id:"BttnMain_UP"},
		{src:"./images/CardFlipped.png", id:"CardFlipped"},
		{src:"./images/CardMat.png", id:"CardMat"},
		{src:"./images/Card_UP.png", id:"Card_UP"},
		{src:"./images/Dealer_10C.png", id:"Dealer_10C"},
		{src:"./images/Dealer_10H.png", id:"Dealer_10H"},
		{src:"./images/Dealer_8H.png", id:"Dealer_8H"},
		{src:"./images/LD_8_10H_Big.png", id:"LD_8_10H_Big"},
		{src:"./images/LD_8_2H_Big.png", id:"LD_8_2H_Big"},
		{src:"./images/LD_8_2S_Big.png", id:"LD_8_2S_Big"},
		{src:"./images/LD_8_5D_Big_Lose.png", id:"LD_8_5D_Big_Lose"},
		{src:"./images/LD_8_6C_Big.png", id:"LD_8_6C_Big"},
		{src:"./images/LD_8_6D_Big.png", id:"LD_8_6D_Big"},
		{src:"./images/LD_8_6H_Big.png", id:"LD_8_6H_Big"},
		{src:"./images/LD_8_9H_Win.png", id:"LD_8_9H_Win"},
		{src:"./images/LD_8_JH_Big.png", id:"LD_8_JH_Big"},
		{src:"./images/LD_8_KC_Big.png", id:"LD_8_KC_Big"},
		{src:"./images/Loser_4.png", id:"Loser_4"},
		{src:"./images/Loser_J.png", id:"Loser_J"},
		{src:"./images/Loser_Q.png", id:"Loser_Q"},
		{src:"./images/Player_Loser_7.png", id:"Player_Loser_7"},
		{src:"./images/Player_Winner_J.png", id:"Player_Winner_J"},
		{src:"./images/Player_Winner_Q1.png", id:"Player_Winner_Q1"},
		{src:"./images/VPS_8_5HBig.png", id:"VPS_8_5HBig"},
		{src:"./images/Winner_Q.png", id:"Winner_Q"},
		{src:"./sounds/Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906.mp3", id:"Cardsflipovertopcardfromdeckslow_BLASTWAVEFX_15906"},
		{src:"./sounds/flip_1.mp3", id:"flip_1"},
		{src:"./sounds/flip_2.mp3", id:"flip_2"},
		{src:"./sounds/flip_3.mp3", id:"flip_3"},
		{src:"./sounds/flip_4.mp3", id:"flip_4"},
		{src:"./sounds/flip_5.mp3", id:"flip_5"}
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;