(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"boss1/Bitmap1.png", id:"Bitmap1"},
		{src:"boss1/Bitmap10.png", id:"Bitmap10"},
		{src:"boss1/Bitmap11.png", id:"Bitmap11"},
		{src:"boss1/Bitmap12.png", id:"Bitmap12"},
		{src:"boss1/Bitmap13.png", id:"Bitmap13"},
		{src:"boss1/Bitmap14.png", id:"Bitmap14"},
		{src:"boss1/Bitmap15.png", id:"Bitmap15"},
		{src:"boss1/Bitmap16.png", id:"Bitmap16"},
		{src:"boss1/Bitmap2.png", id:"Bitmap2"},
		{src:"boss1/Bitmap3.png", id:"Bitmap3"},
		{src:"boss1/Bitmap4.png", id:"Bitmap4"},
		{src:"boss1/Bitmap5.png", id:"Bitmap5"},
		{src:"boss1/Bitmap6.png", id:"Bitmap6"},
		{src:"boss1/Bitmap7.png", id:"Bitmap7"},
		{src:"boss1/Bitmap8.png", id:"Bitmap8"},
		{src:"boss1/Bitmap9.png", id:"Bitmap9"},
		{src:"boss1/_8bitarcadevideogamestartsoundeffectgunreloadandjump.mp3", id:"_8bitarcadevideogamestartsoundeffectgunreloadandjump"},
		{src:"boss1/conclusion.mp3", id:"conclusion"},
		{src:"boss1/intro1.mp3", id:"intro1"},
		{src:"boss1/intro2.mp3", id:"intro2"},
		{src:"boss1/Videogamearpeggioascendinghigh_BLASTWAVEFX_30404_kpLower.mp3", id:"Videogamearpeggioascendinghigh_BLASTWAVEFX_30404_kpLower"},
		{src:"boss1/Videogamearpeggiodescend_BLASTWAVEFX_30405_kpLower.mp3", id:"Videogamearpeggiodescend_BLASTWAVEFX_30405_kpLower"},
		{src:"boss1/Videogameascendsfasthigh_BLASTWAVEFX_30414_kpLowerFade.mp3", id:"Videogameascendsfasthigh_BLASTWAVEFX_30414_kpLowerFade"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1285,728);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,722);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,488);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,140);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,634,134);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,190);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,488);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,31);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,679);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,43);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1281,540);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,488);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,726);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,725);


(lib.wrongDude = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,24,1280,488);


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8A9IAAh5IB5AAIAAB5g");
	this.shape.setTransform(637.7,245.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABvD6IAAkfQABgugRgbQgQgbgtAAQgqAAggAZQgfAXgRAnQgRAnAAApIAACBIBHAAIAABbIkHAAIAAhbIBHAAIAAkcQAAgKgGgFQgFgGgLAAIg2AAIAAhbICBAAQAfAAAQAOQAQAOAAAbIAAAVIgBAPIgBAHIACAAQACgHALgRQALgRAWgUQAWgUAhgOQAfgOAugBQBPAAArAsQAqAuAABgIAADeIBHAAIAABbg");
	this.shape_1.setTransform(592.3,226.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/FUIAAhbIBHAAIAAkxIhMAAIAAhbIDDAAIAAGMIBGAAIAABbgAg5jnIAAhsIB4AAIAABsg");
	this.shape_2.setTransform(541.7,217.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AijDwQgkgRgXghQgXghAAgyQAAgtAVgeQAVgeAggQQAhgSAmgJQAlgJAjgDQAggDAYAAIAgAAIAAgQQgCgugZgUQgZgTglAAQglABggALQgfAMgTALIgUAMIgthUQAAgBAYgPQAYgOAsgPQArgPA7gBQBhABA0AxQAyAxABBeIAADCQAAALAGAFQAFAFALAAIAsAAIAABbIhzAAQgjgBgOgOQgOgPAAgWIAAgFQAAgMABgHIACgGIgCAAIgJAOQgIAOgSATQgTASgbAOQgeAOgqABQgqAAgmgQgAgEASQgbADgbAIQgcAIgRAQQgTARgBAcQAAAcAUATQARATAjABQAhgBAYgUQAZgUAOgeQAPgeAAggIAAgQIgUAAQgSAAgaACg");
	this.shape_3.setTransform(497.5,226.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiQFTQgugMglgSIAmhaIATAIQARAIAfAIQAfAIAmAAQAlAAAdgMQAggMATgbQATgbAAgtIAAgfIABgSIABgIIgCAAQgWAgghASQgfASgwAAQhHgBgxghQgygigZg4Qgag1AAhEQAAhEAZg3QAag3AvghQAxggBHgBQAdAAAcAHQAeAIAYARQAYAQAOAaIADAAIgBgFIgCgLQAAgUAOgNQAOgNAcAAIB5AAIAABbIguAAQgJAAgHAEQgFAGAAAJIAAFbQAABAgXAsQgWAsgkAbQglAbgvANQgrANgwAAQgwgBgtgLgAghj3Qg4ABgeAkQgdAlgBA/QAAArAPAiQAOAhAbARQAcATAoABQAbAAAagNQAZgOARgdQAPggAAg2QAAg4gQgfQgQgegcgNQgZgMgeAAIgDAAg");
	this.shape_4.setTransform(439.9,236.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABRFUIAAheIBEAAIgqh/IjWAAIgqB/IBDAAIAABeIj/AAIAAheIA+AAIDNpJICNAAIDNJJIA+AAIAABegABOAVIhAjAQgJgZgCgRIgDgRIAAAAIgDARQgDARgHAZIhBDAICcAAg");
	this.shape_5.setTransform(374.1,217.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiTFZQgkAAgbgJQgagIgPgIIgPgIIAnhaIAJAHQAJAFARAFQAQAGAXAAQAeAAAWgPQAWgPAMgaIAOgfIiombIg7AAIAAhbIDxAAIAABbIg6AAIBZD4QAHARABAPIABARIADAAIADgRQADgPAIgRIBYj4Ig5AAIAAhbIDoAAIAABbIg4AAIi1HMQgdBIgwAhQgyAhg+AAIgCAAg");
	this.shape_6.setTransform(286,236.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AizD4IAAhcIBHAAIAAkbQAAgKgGgGQgFgFgKAAIg3AAIAAhcICAAAQAgAAARAPQAOAOAAAfIAAAdIgBAWIgBAIIACAAQAMgjAWgdQAWgcAfgRQAfgQAlgBIAQABIAHABIAAB4IgJgBIgVgBQgxABggAZQggAZgPApQgPAmAAAvIAABqIBGAAIAABcg");
	this.shape_7.setTransform(236.6,226.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiPFUIAAheIBRAAIAAnlIiBAAIAABnIhqAAIAAjLIJTAAIAADLIhrAAIAAhnIiBAAIAAHlIBSAAIAABeg");
	this.shape_8.setTransform(181.7,217.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,159,781.8,119.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7A9IAAh5IB3AAIAAB5g");
	this.shape.setTransform(580.4,245.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7E0QgigGgegTQghgTgVglQgWglgBg9IAAjYIhLAAIAAhcIBPAAIAAiFIB0AAIAACFIBvAAIAABcIhvAAIAADMQABApARAUQARAVAWAHQAXAGASAAIAQgBIAGAAIAABkIgKABIgcABIgEAAQgZAAgggFg");
	this.shape_1.setTransform(548.7,220.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhjDhQg8gfgmg5Qgkg5gChPQAChIAhg6QAig6A7giQA8ghBJgBQAgAAAiAGQAjAGAeAOQAfAOATAXQATAWABAgIAABDIhpAAIAAggQgBgQgOgLQgOgLgVgFQgVgFgVAAQhBABgnAoQgmAqAABEQAAAwAVAjQAVAjAjASQAiARApAAQAjAAAdgKQAegLAWgNQAWgOAOgLIAsBWQgSAQgdASQgeARgnAMQgoANgvAAQhGAAg+gfg");
	this.shape_2.setTransform(504.3,226.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhtDcQg7gigfg6Qghg6AAhGQABhKAfg6QAgg5A3ghQA4ggBIgBQBGABAxAfQAwAfAZA0QAaA0AABCIgBARIgBAOIgBAIIlRAAQAEAtAVAeQAVAfAgAPQAeAPAlAAQAogBAggMQAggMATgNQASgNAAgBIAwBXIgNAKQgOALgaANQgZANglAKQglALguAAQhPgBg7gjgABrg1QgDgzgZgcQgbgcgogBQguABgeAdQggAdgIAxIDTAAIAAAAg");
	this.shape_3.setTransform(450.6,226.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AizD4IAAhcIBHAAIAAkbQAAgKgGgGQgFgFgKAAIg3AAIAAhcICAAAQAgAAARAPQAOAOAAAfIAAAdIgBAWIgBAIIACAAQAMgjAWgdQAWgcAfgRQAfgQAlgBIAQABIAHABIAAB4IgJgBIgVgBQgxABggAZQggAZgPApQgPAmAAAvIAABqIBGAAIAABcg");
	this.shape_4.setTransform(403.6,226.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AizD4IAAhcIBHAAIAAkbQAAgKgGgGQgFgFgKAAIg3AAIAAhcICAAAQAgAAARAPQAOAOAAAfIAAAdIgBAWIgBAIIACAAQAMgjAWgdQAWgcAfgRQAfgQAlgBIAQABIAHABIAAB4IgJgBIgVgBQgxABggAZQggAZgPApQgPAmAAAvIAABqIBGAAIAABcg");
	this.shape_5.setTransform(360.9,226.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiGDfQg9gggkg6Qgkg5gBhMQABhKAkg6QAjg5A9ghQA9ggBKgBQBLABA8AgQA9AhAkA5QAkA6ABBKQgBBMgkA5QgjA6g9AgQg9AhhLAAQhKAAg8ghgAhHiEQghAUgUAiQgUAiAAAsQAAAuAUAiQAUAiAhATQAgATAnAAQAnAAAhgTQAhgTAUgiQATgiAAguQAAgsgTgiQgUgighgUQghgTgnAAQgnAAggATg");
	this.shape_6.setTransform(308.3,226.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiMExQhQgwguhPQgthRgBhiQABhmAuhPQAvhOBOgtQBQgtBhgBQAgAAAtAGQAsAHArAPQAsAPAcAaQAdAbACAoIAABcIhzAAIAAg0QgBgagYgPQgYgPgigGQghgHgdABQhBAAgzAdQg0AcgcA2QgeA0gBBKQABBLAfA5QAeA4A0AgQA1AfBCAAQAQAAAZgDQAYgDAYgHQAZgIARgOQAQgNABgTIAAg1IBzAAIAABdQgBAmgdAaQgbAagrAPQgrAQgtAGQgvAHgjAAQhngBhQgug");
	this.shape_7.setTransform(242,217.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,159,781.8,119.2);


(lib.SubmitButton = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Up:1,Over:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.cursor = "pointer";
		/*this.addEventListener(MouseEvent.MOUSE_OVER, function(e) {
			if(this.buttonMode)
				e.currentTarget.gotoAndStop('Over');
		});
		
		this.addEventListener(MouseEvent.MOUSE_OUT, function(e) {
			if(this.buttonMode)
				e.currentTarget.gotoAndStop('Up');
		});*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKA9QgIgHgBgRIAAg2IgMAAIAAgVIAMAAIAAgdIAXAAIAAAdIAcAAIAAAVIgcAAIAAAyQAAAHADADQAEADAGAAIAHgBIAIgDIAAAUIgKAEQgFACgHAAQgMAAgIgHg");
	this.shape.setTransform(125.1,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBIIAAhoIAXAAIAABogAgLgwIAAgXIAYAAIAAAXg");
	this.shape_1.setTransform(118.2,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4A2IAAg6QgBgNgFgGQgGgHgKgBQgKABgGAHQgGAGgBANIAAA6IgWAAIAAg6QAAgNgFgGQgGgHgKgBQgKABgHAHQgFAHgBAMIAAA6IgYAAIAAhoIAYAAIAAAQIAIgJQAEgEAGgCQAGgDAIAAQAMAAAIAFQAGAEAEAKQAGgKAJgEQAJgFAMAAQARAAAKAKQAKAKAAAUIAABCg");
	this.shape_2.setTransform(105.9,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBEQgIgGgGgHIAAARIgYAAIAAiRIAYAAIAAA7QAGgJAJgGQAIgFALAAQANAAALAGQALAGAHANQAHAKAAASQAAARgHAMQgHANgLAGQgLAHgNAAQgLgBgJgFgAgOgJQgHAEgEAGQgEAHAAALQAAAKAEAIQAEAHAHAEQAHAEAHAAQAIAAAHgEQAGgDAEgIQAEgIABgKQgBgLgEgHQgEgGgGgEQgHgEgIAAQgHAAgHAEg");
	this.shape_3.setTransform(89.9,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAqQgKgKAAgTIAAhBIAYAAIAAA6QAAAMAGAHQAGAGAKAAQAJAAAHgHQAGgGABgNIAAg5IAYAAIAABnIgYAAIAAgQQgGAIgIAFQgHAFgLAAQgSAAgJgLg");
	this.shape_4.setTransform(76.7,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZBCQgPgGgNgLIAPgSQAKAJALAFQAKAFALgBQAMABAGgFQAHgFAAgIQAAgFgCgEQgDgDgHgDQgHgEgKgDQgPgDgLgFQgKgDgGgIQgFgIAAgNQAAgMAGgJQAGgJALgGQALgEANAAQAOgBAMAFQANAFALAIIgOATQgJgIgKgDQgJgDgIgBQgLABgFAEQgGAFAAAHQgBAGADADQADAEAHADQAHADAMAEQAPADAKAFQAKADAFAIQAFAIAAALQAAANgHAKQgGAKgLAEQgLAGgPAAQgOgBgPgFg");
	this.shape_5.setTransform(64,21.9);

	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,193,43);


(lib.sign3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(72,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,64,650,722);


(lib.sign2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(116,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116,102,653,726);


(lib.sign1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653,725);


(lib.rightDude = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,24,1280,488);


(lib.Question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.field = new cjs.Text("I am a question, \nwhat is my answer?", "26px 'Museo Slab 700'", "#FFFFFF");
	this.field.name = "field";
	this.field.lineHeight = 28;
	this.field.lineWidth = 590;
	this.field.parent = this;
	this.field.setTransform(2,2,1,1.005);

	this.timeline.addTween(cjs.Tween.get(this.field).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-18,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-23,640,190);


(lib.prompt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTBTQgFgHAAgKQAAgLAFgGQAHgHAKAAQAIAAAGAHQAHAGAAALQAAAKgHAHQgGAHgIAAQgKAAgHgHgAgTAbQgBgOAFgKQAEgIAHgHIAKgPQAGgHAAgHQAAgIgFgEQgFgFgFAAQgHABgGADQgGADgFAFIgVgTQAJgLAMgGQAMgGAOgBQANAAAMAFQALAFAHAKQAHAKAAAPQAAAMgGAJIgNAQQgHAHgFAHQgGAIABAMg");
	this.shape.setTransform(428.9,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBUIAAinIAwAAQAXAAAUAJQATAJALASQAJATABAcQgBAcgJATQgLATgSAJQgTAJgXAAgAgaA1IAGAAQAPAAAJgFQAKgFAGgMQAGgMABgTQgBgTgGgMQgGgMgKgFQgJgEgPAAIgGAAg");
	this.shape_1.setTransform(415.1,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBUIgrhUIgQgjIgBAAIADAeQACAOAAAPIAAA8IglAAIAAinIAnAAIAqBTIARAkIABAAIgDgeIgCgdIAAg8IAlAAIAACng");
	this.shape_2.setTransform(397.8,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBNQgSgLgJgUQgKgUgBgaQABgbAKgTQAJgUASgKQARgKAVAAQAXAAARAKQARAKAKAUQAKATAAAbQAAAagKAUQgKAUgRALQgRAKgXAAQgVAAgRgKgAgagnQgKAOAAAZQAAAZAKAOQAKAPAQAAQARAAAKgPQAKgOAAgZQAAgZgKgOQgKgOgRAAQgQAAgKAOg");
	this.shape_3.setTransform(380.3,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BUIAAinIA9AAQARAAAOAFQAQAFAIAMQAJAMAAAUQAAAUgJALQgJANgPAGQgOAGgRAAIgXAAIAAA5gAgYgCIAVAAQANAAAIgGQAIgHAAgOQAAgNgIgFQgIgGgNAAIgVAAg");
	this.shape_4.setTransform(364.1,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBRQgRgGgNgMIAWgaQAJAIALAEQALAFAJAAQAMAAAGgEQAFgEAAgIQAAgIgGgEQgHgEgKgEIgVgKQgJgDgIgFQgHgFgFgKQgFgJAAgMQAAgOAIgLQAHgMAOgGQAOgHAPAAQAPAAAOAFQAPAGALALIgTAYQgJgGgIgEQgJgDgKAAQgIAAgFAEQgGAEAAAHQAAAIAHAEIARAIIAVAJQAQAGAJAJQAJALAAASQAAAOgIAMQgHAMgPAHQgOAHgTAAQgQAAgQgGg");
	this.shape_5.setTransform(348.5,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BUIAAinIBoAAIAAAgIhBAAIAAAiIA3AAIAAAeIg3AAIAAAnIBEAAIAAAgg");
	this.shape_6.setTransform(334.5,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBUIgfg9IgUAAIAAA9IgnAAIAAinIA9AAQAQAAAPAEQAPAFAJAMQAIAMABAUQgBASgIAMQgIAKgOAGIAnBEgAgbgFIATAAQANAAAIgHQAIgGAAgMQAAgNgIgFQgIgFgNAAIgTAAg");
	this.shape_7.setTransform(319.8,19.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBNQgSgLgJgUQgKgUAAgaQAAgbAKgTQAJgUASgKQARgKAVAAQAXAAARAKQARAKAKAUQAKATAAAbQAAAagKAUQgKAUgRALQgRAKgXAAQgVAAgRgKgAgagnQgKAOAAAZQAAAZAKAOQAKAPAQAAQARAAAKgPQAKgOAAgZQAAgZgKgOQgKgOgRAAQgQAAgKAOg");
	this.shape_8.setTransform(296.8,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBUIAAiHIgvAAIAAggICDAAIAAAgIgvAAIAACHg");
	this.shape_9.setTransform(280.7,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgSBUIAAg8IgzhrIApAAIAPAnIAHASIAGATIAAAAIAHgTIAHgSIAQgnIAoAAIg0BrIAAA8g");
	this.shape_10.setTransform(261.3,19.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjBUIgKgoIgyAAIgLAoIgnAAIA2inIArAAIA2CngAARAOIgEgOIgHgbIgGgbIAAAAIgGAcIgHAaIgEAOIAiAAg");
	this.shape_11.setTransform(247,19.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYBUIgRhNIgEgRIgDgUIAAAAIgCAUIgEARIgQBNIgvAAIgfinIAmAAIAMBPIAEAZIADAbIABAAIAFgbIAFgZIAShPIAfAAIASBPIAGAYIAEAcIABAAIAEgbIADgZIAMhPIAkAAIgeCng");
	this.shape_12.setTransform(229.1,19.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBUIAAiHIguAAIAAggICCAAIAAAgIgvAAIAACHg");
	this.shape_13.setTransform(205.9,19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggBRQgRgGgNgMIAWgaQAJAIALAEQALAFAJAAQAMAAAGgEQAFgEAAgIQAAgIgGgEQgHgEgKgEIgVgKQgJgDgIgFQgHgFgFgKQgFgJAAgMQAAgOAIgLQAHgMAOgGQAOgHAPAAQAPAAAOAFQAPAGALALIgTAYQgJgGgIgEQgJgDgKAAQgIAAgFAEQgGAEAAAHQAAAIAHAEIARAIIAVAJQAQAGAJAJQAJALAAASQAAAOgIAMQgHAMgPAHQgOAHgTAAQgQAAgQgGg");
	this.shape_14.setTransform(191.5,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag1BUIAAinIBoAAIAAAgIhBAAIAAAiIA3AAIAAAeIg3AAIAAAnIBEAAIAAAgg");
	this.shape_15.setTransform(177.5,19.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag/BUIAAinIA5AAQAQAAAPADQAOAEAIAKQAIAJAAAQQAAAIgCAHQgDAHgHAGQgGAGgKACIAAABQASAEAKAIQAJAJAAARQAAASgJALQgJALgPAFQgOAFgRAAgAgZA3IAVAAQAOAAAIgGQAJgGAAgMQAAgLgJgFQgHgFgPAAIgVAAgAgZgPIASAAQAMAAAGgGQAHgFAAgKQAAgJgHgEQgGgFgMAAIgSAAg");
	this.shape_16.setTransform(162.8,19.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1BUIAAinIBoAAIAAAgIhBAAIAAAiIA3AAIAAAeIg3AAIAAAnIBEAAIAAAgg");
	this.shape_17.setTransform(142.2,19.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdBUIAAhGIg5AAIAABGIgmAAIAAinIAmAAIAABBIA5AAIAAhBIAmAAIAACng");
	this.shape_18.setTransform(126.1,19.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBUIAAiHIgwAAIAAggICCAAIAAAgIguAAIAACHg");
	this.shape_19.setTransform(110.1,19.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggBRQgRgGgNgMIAWgaQAJAIALAEQALAFAJAAQAMAAAGgEQAFgEAAgIQAAgIgGgEQgHgEgKgEIgVgKQgJgDgIgFQgHgFgFgKQgFgJAAgMQAAgOAIgLQAHgMAOgGQAOgHAPAAQAPAAAOAFQAPAGALALIgTAYQgJgGgIgEQgJgDgKAAQgIAAgFAEQgGAEAAAHQAAAIAHAEIARAIIAVAJQAQAGAJAJQAJALAAASQAAAOgIAMQgHAMgPAHQgOAHgTAAQgQAAgQgGg");
	this.shape_20.setTransform(90.3,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_21.setTransform(79.2,19.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSBUIAAiHIgvAAIAAggICDAAIAAAgIgvAAIAACHg");
	this.shape_22.setTransform(62.6,19.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAjBUIgKgoIgyAAIgLAoIgnAAIA2inIArAAIA2CngAARAOIgEgOIgHgbIgGgbIAAAAIgGAcIgHAaIgEAOIAiAAg");
	this.shape_23.setTransform(48,19.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdBUIAAhGIg4AAIAABGIgnAAIAAinIAnAAIAABBIA4AAIAAhBIAmAAIAACng");
	this.shape_24.setTransform(31.9,19.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAXBUIgRhNIgDgRIgDgUIAAAAIgCAUIgDARIgRBNIgvAAIgginIAnAAIANBPIADAZIAEAbIABAAIAEgbIAFgZIAThPIAeAAIASBPIAFAYIAGAcIABAAIADgbIADgZIAMhPIAlAAIgfCng");
	this.shape_25.setTransform(12.6,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,478.8,36.7);


(lib.obstructor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751,679);


(lib.invisiBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		
		this.alpha = 0.01;
		this.addEventListener(MouseEvent.CLICK, function() {
			self.parent.gotoAndPlay('xClicked');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AxbGaIAAs0MAi3AAAIAAM0g");
	this.shape.setTransform(86.7,41.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,0,223.3,82.2);


(lib.introTxtcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.field = new cjs.Text("Sorry, You did not meet the minimum requirements to pass this assessment. Please review the sections answered incorrectly, and try again in order to recieve completion credit for this training.", "18px 'Gotham'", "#FFFFFF");
	this.field.name = "field";
	this.field.textAlign = "center";
	this.field.lineHeight = 22;
	this.field.lineWidth = 495;
	this.field.parent = this;
	this.field.setTransform(249.7,2);

	this.timeline.addTween(cjs.Tween.get(this.field).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,499.4,90.4);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ego6AOEIAA8HMBR1AAAIAAcHg");
	mask.setTransform(262,90);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ego6AOEQABizB1iVQBziRC+hGIgBgQQAAj4DSitQDSivEoAAQBMAABKANQAwkYEBi8QECi9FZAAQE1AAD0CdQDxCaBUDyQCUApBzBaQByBYA7B4QAzgGA8gBQD+AADECDQDCCDA2DKQBogcBxAAQECAADGCIQDDCIAyDOg");
	this.shape.setTransform(262,90);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,524,180);


(lib.fade2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.addEventListener('click', function() {
				XMLog('blocker');
			})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1285,728);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.endtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// goldBootGroup
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(0,323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,323,1281,540);


(lib.defeat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,488);


(lib.Answer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"Up":1,"Over":6,Selected:12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.cursor = 'pointer';
		
		/*this.addEventListener('mouseOver', function(e) {
			// Only change if button is active and not selected.
			if(buttonMode && currentFrameLabel != 'Selected')
				e.currentTarget.gotoAndStop('Over');
		});
		
		this.addEventListener('mouseOut', function(e) {
			// Only change if button is active and not selected.
			if(buttonMode && currentFrameLabel != 'Selected')
				e.currentTarget.gotoAndStop('Up');
		});*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Text
	this.field = new cjs.Text("I am an answer, but am I the right one?", "bold 20px 'Source Sans Pro'");
	this.field.name = "field";
	this.field.lineHeight = 27;
	this.field.lineWidth = 598;
	this.field.parent = this;
	this.field.setTransform(17,10);

	this.timeline.addTween(cjs.Tween.get(this.field).wait(12).to({color:"#FFFFFF"},0).wait(8));

	// Layer 4
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(8));

	// Background
	this.instance_1 = new lib.Bitmap12();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Hit
	this.instance_2 = new lib.Bitmap12();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,140);


(lib.IntroScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape.setTransform(774.8,218.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKAAQgHAAgGAGQgGAGAAALIAAA0IgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAASIAAA6g");
	this.shape_1.setTransform(766.8,215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAGQALAHAGALQAHAMAAAMQAAANgHAMQgGAKgMAIQgLAGgOAAQgOAAgLgGgAgOgZQgGAEgEAHQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQADgHAAgIQAAgGgDgIQgEgHgHgEQgGgEgIAAQgIAAgGAEg");
	this.shape_2.setTransform(755.3,215.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_3.setTransform(746.8,213.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_4.setTransform(740.4,213.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_5.setTransform(732.4,215.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVArQgKgGgHgLQgGgMAAgOQAAgMAFgMQAHgLAKgHQAKgGAMAAQAPAAAKAHQALAHAEALQAGAMAAAMIAAADIgBADIhEAAQADAMAGAGQAIAHAIAAQAIgBAHgDQAGgDAFgFIANAMQgHAIgJAEQgKAFgNAAQgLAAgMgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgIAAgHAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_6.setTransform(722.6,215.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAmQgJgKAAgRIAAg6IAWAAIAAA0QAAALAFAGQAFAGAJAAQAJAAAFgGQAGgGAAgLIAAg0IAWAAIAABdIgWAAIAAgPQgEAHgHAFQgHAFgJAAQgRAAgIgKg");
	this.shape_7.setTransform(711.5,215.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbA/IAAgtQgFAHgIAFQgIAFgKABQgLAAgKgHQgKgFgGgLQgHgLABgOQAAgQAFgLQAHgLAKgFQAKgHALAAQAKAAAIAGQAIAEAFAIIAAgQIAVAAIAAB7gAgMgnQgGADgEAIQgDAGgBAKQABAJADAFQAEAHAGAEQAGADAGABQAHgBAGgDQAGgEAEgHQAEgFAAgJQAAgJgEgHQgEgHgGgEQgGgDgHgBQgGABgGADg");
	this.shape_8.setTransform(699.8,216.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_9.setTransform(683,213.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTArQgLgHgGgLQgHgLABgOQgBgMAHgLQAGgMALgGQALgHAMAAQAOAAAJAEQAJAFAHAHIgNAPQgGgGgFgDQgHgDgIAAQgGAAgFAEQgHAEgDAHQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAFAAQAIAAAHgDQAGgEAFgFIAMAOQgHAHgIAFQgKAFgOAAQgMAAgLgGg");
	this.shape_10.setTransform(672.4,215.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_11.setTransform(661.6,215.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUArQgLgGgHgLQgGgMAAgOQgBgMAHgMQAFgLALgHQAKgGAMAAQAPAAAKAHQAKAHAGALQAEAMAAAMIAAADIAAADIhEAAQADAMAGAGQAIAHAIAAQAIgBAHgDQAGgDAFgFIANAMQgGAIgKAEQgJAFgOAAQgMAAgKgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_12.setTransform(651.2,215.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHAEgCAIQgEAHAAAMIAAAkg");
	this.shape_13.setTransform(637,215);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAGQALAHAGALQAHAMAAAMQAAANgHAMQgGAKgMAIQgLAGgOAAQgOAAgLgGgAgOgZQgGAEgEAHQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQADgHAAgIQAAgGgDgIQgEgHgHgEQgGgEgIAAQgIAAgGAEg");
	this.shape_14.setTransform(626.9,215.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQBCIAAhLIgMAAIAAgSIAMAAIAAgHQAAgPAHgIQAIgIAMAAIAKABIAIACIAAASIgGgCIgHAAQgGAAgDADQgDAEAAAHIAAAFIAYAAIAAASIgYAAIAABLg");
	this.shape_15.setTransform(618.1,213.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHAEgCAIQgEAHAAAMIAAAkg");
	this.shape_16.setTransform(605.7,215);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVArQgLgGgGgLQgHgMAAgOQABgMAGgMQAFgLALgHQAKgGAMAAQAPAAAKAHQALAHAEALQAFAMABAMIAAADIgBADIhEAAQACAMAIAGQAHAHAJAAQAHgBAGgDQAHgDAGgFIAMAMQgHAIgJAEQgKAFgNAAQgLAAgMgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgIAAgHAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_17.setTransform(596.2,215.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUAvIgUg+IgUA+IgUAAIgehdIAWAAIATA/IAVg/IARAAIAVA/IATg/IAWAAIgfBdg");
	this.shape_18.setTransform(583.5,215.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_19.setTransform(571.3,215.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKAAQgHAAgGAGQgGAGAAALIAAA0IgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAASIAAA6g");
	this.shape_20.setTransform(561.4,215);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_21.setTransform(550.3,215.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_22.setTransform(536,213.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSArQgLgHgHgLQgGgLgBgOQABgMAGgLQAHgMALgGQALgHAMAAQANAAAJAEQAJAFAHAHIgOAPQgEgGgHgDQgFgDgIAAQgHAAgFAEQgGAEgEAHQgEAHAAAHQAAAIAEAHQAEAHAGAEQAGAEAHAAQAHAAAGgDQAHgEAEgFIAOAOQgIAHgJAFQgJAFgNAAQgMAAgLgGg");
	this.shape_23.setTransform(527.4,215.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVArQgLgGgGgLQgHgMABgOQAAgMAFgMQAHgLAKgHQAKgGAMAAQAPAAAKAHQALAHAEALQAGAMAAAMIAAADIgBADIhEAAQADAMAGAGQAIAHAIAAQAJgBAGgDQAGgDAGgFIAMAMQgHAIgJAEQgKAFgNAAQgMAAgLgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgJAAgGAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_24.setTransform(516.8,215.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHAEgCAIQgEAHAAAMIAAAkg");
	this.shape_25.setTransform(508.3,215);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHAEgCAIQgEAHAAAMIAAAkg");
	this.shape_26.setTransform(500.8,215);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgZArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAGQALAHAGALQAHAMAAAMQAAANgHAMQgGAKgMAIQgLAGgOAAQgOAAgLgGgAgOgZQgGAEgEAHQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQADgHAAgIQAAgGgDgIQgEgHgHgEQgGgEgIAAQgIAAgGAEg");
	this.shape_27.setTransform(490.8,215.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSArQgLgHgHgLQgGgLgBgOQABgMAGgLQAHgMALgGQAKgHAMAAQAOAAAJAEQAKAFAGAHIgOAPQgFgGgGgDQgFgDgJAAQgGAAgFAEQgGAEgEAHQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAGAAQAIAAAFgDQAHgEAEgFIAOAOQgIAHgIAFQgKAFgOAAQgMAAgKgGg");
	this.shape_28.setTransform(480.1,215.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVArQgLgGgGgLQgHgMAAgOQABgMAFgMQAHgLAKgHQAKgGAMAAQAPAAAKAHQALAHAEALQAFAMABAMIAAADIgBADIhEAAQADAMAHAGQAHAHAJAAQAHgBAGgDQAHgDAGgFIAMAMQgGAIgKAEQgKAFgNAAQgMAAgLgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgIAAgHAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_29.setTransform(464,215.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_30.setTransform(453,213.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_31.setTransform(443.6,213.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_32.setTransform(430.8,213.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgTArQgLgHgGgLQgHgLABgOQgBgMAHgLQAGgMALgGQALgHAMAAQAOAAAJAEQAJAFAHAHIgNAPQgFgGgGgDQgHgDgIAAQgFAAgGAEQgHAEgDAHQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAFAAQAIAAAHgDQAGgEAFgFIAMAOQgHAHgIAFQgKAFgOAAQgMAAgLgGg");
	this.shape_33.setTransform(422.2,215.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUArQgLgGgHgLQgGgMgBgOQAAgMAHgMQAFgLALgHQAKgGAMAAQAPAAAKAHQAKAHAGALQAEAMAAAMIAAADIAAADIhEAAQACAMAIAGQAHAHAJAAQAIgBAFgDQAHgDAFgFIANAMQgHAIgJAEQgJAFgOAAQgLAAgLgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_34.setTransform(411.5,215.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgJBBIAAiBIATAAIAACBg");
	this.shape_35.setTransform(403.5,213.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVArQgLgGgGgLQgHgMAAgOQABgMAFgMQAHgLAKgHQAKgGAMAAQAPAAAKAHQALAHAFALQAEAMABAMIAAADIgBADIhEAAQACAMAIAGQAHAHAJAAQAHgBAGgDQAHgDAGgFIAMAMQgHAIgJAEQgKAFgNAAQgLAAgMgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgIAAgHAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_36.setTransform(395.5,215.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_37.setTransform(385.4,215.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKAAQgHAAgGAGQgGAGAAALIAAA0IgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAASIAAA6g");
	this.shape_38.setTransform(370.1,215);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUArQgLgGgHgLQgGgMAAgOQgBgMAHgMQAFgLALgHQAKgGAMAAQAPAAAKAHQAKAHAGALQAEAMAAAMIAAADIAAADIhEAAQADAMAGAGQAIAHAIAAQAIgBAHgDQAGgDAFgFIANAMQgGAIgKAEQgJAFgOAAQgMAAgKgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_39.setTransform(359.1,215.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_40.setTransform(348.1,213.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_41.setTransform(338.7,213.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgZA8QgKgFgGgLQgHgLAAgQQABgQAFgJQAHgLAKgGQAKgGALAAQAKAAAIAFQAIAFAFAHIAAgzIAVAAIAACBIgVAAIAAgQQgFAIgIAFQgIAFgKAAQgLAAgKgGgAgMgIQgHADgDAFQgDAHAAAKQAAAJADAHQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgHQAEgHAAgJQAAgKgEgGQgEgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_42.setTransform(323.5,213.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKAAQgHAAgGAGQgGAGAAALIAAA0IgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAASIAAA6g");
	this.shape_43.setTransform(312.1,215);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_44.setTransform(301,215.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAQQAJgCADgEQADgEgBgGIgHAAIAAgYIAVAAIAAAVQAAANgGAHQgIAHgLABg");
	this.shape_45.setTransform(287.8,219.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgZA8QgKgFgGgLQgHgLABgQQAAgQAFgJQAHgLAKgGQAKgGALAAQAKAAAIAFQAIAFAFAHIAAgzIAVAAIAACBIgVAAIAAgQQgFAIgIAFQgIAFgKAAQgLAAgKgGgAgMgIQgHADgDAFQgDAHgBAKQABAJADAHQAEAHAGAEQAGADAGAAQAHAAAGgDQAGgEAEgHQAEgHAAgJQAAgKgEgGQgEgFgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_46.setTransform(279.5,213.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVArQgLgGgGgLQgHgMAAgOQABgMAFgMQAHgLAKgHQAKgGAMAAQAPAAAKAHQALAHAEALQAFAMABAMIAAADIgBADIhEAAQADAMAHAGQAHAHAJAAQAHgBAGgDQAHgDAGgFIAMAMQgGAIgKAEQgKAFgNAAQgMAAgLgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgIAAgHAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_47.setTransform(268.3,215.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKAAQgHAAgGAGQgGAGAAALIAAA0IgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAASIAAA6g");
	this.shape_48.setTransform(257.3,215);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHAEgCAIQgEAHAAAMIAAAkg");
	this.shape_49.setTransform(248.3,215);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_50.setTransform(238.7,215.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUArQgLgGgHgLQgGgMgBgOQAAgMAHgMQAFgLALgHQAKgGAMAAQAPAAAKAHQAKAHAGALQAEAMAAAMIAAADIAAADIhEAAQADAMAGAGQAIAHAIAAQAJgBAFgDQAHgDAFgFIANAMQgGAIgKAEQgJAFgOAAQgMAAgKgGgAAYgFQgBgHgDgGQgDgFgFgEQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_51.setTransform(228.3,215.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgJBBIAAiBIATAAIAACBg");
	this.shape_52.setTransform(220.2,213.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgUArQgLgHgHgLQgGgKAAgPQgBgMAHgLQAFgMALgGQAKgHAMAAQAPAAAKAHQAKAHAGAMQAEAMAAAMIAAACIAAADIhEAAQADAMAGAGQAIAGAIAAQAJAAAGgCQAGgDAFgGIANALQgGAIgKAGQgJAEgOAAQgMAAgKgGgAAYgFQgBgIgDgFQgDgGgFgDQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_53.setTransform(772.3,193.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgIAvIgnhdIAXAAIAYBEIAahEIAWAAIgmBdg");
	this.shape_54.setTransform(762,193.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_55.setTransform(751.5,193.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_56.setTransform(741,191.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AggAmQgJgKAAgRIAAg6IAWAAIAAA0QAAALAFAGQAFAGAJAAQAJAAAFgGQAGgGAAgMIAAgzIAWAAIAABdIgWAAIAAgPQgEAHgHAFQgHAFgJAAQgRAAgIgKg");
	this.shape_57.setTransform(724.3,193.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgZAqQgLgGgHgMQgGgKAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAHQALAGAGAMQAHALAAAMQAAAOgHAKQgGAMgMAGQgLAHgOAAQgOAAgLgHgAgOgYQgGAEgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQADgHAAgIQAAgHgDgGQgEgIgHgDQgGgFgIAAQgIAAgGAFg");
	this.shape_58.setTransform(712.9,193.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgfA8QgFgBgFgDIAHgQIAGACIAHABQAFAAADgCQADgDADgGIgohdIAXAAIAZBFIAZhFIAWAAIglBgQgGAOgFAHQgHAGgMAAQgGAAgGgCg");
	this.shape_59.setTransform(702.1,195);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_60.setTransform(687.5,192.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_61.setTransform(678.5,193.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_62.setTransform(668,191.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAVAwIgVg/IgUA/IgTAAIgfheIAWAAIATA/IAVhAIAQAAIAWBAIAUg/IAVAAIgfBeg");
	this.shape_63.setTransform(654.6,193.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKgBQgHABgGAGQgGAGAAAMIAAAzIgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAARIAAA7g");
	this.shape_64.setTransform(635.9,193.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgZAqQgLgGgHgMQgGgKAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAHQALAGAGAMQAHALAAAMQAAAOgHAKQgGAMgMAGQgLAHgOAAQgOAAgLgHgAgOgYQgGAEgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQADgHAAgIQAAgHgDgGQgEgIgHgDQgGgFgIAAQgIAAgGAFg");
	this.shape_65.setTransform(624.4,193.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_66.setTransform(609.2,192.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgTAqQgLgGgGgMQgHgKAAgOQAAgMAHgLQAGgMALgGQAMgHAMAAQANAAAJAFQAKAEAGAIIgNAOQgGgFgGgDQgGgEgHAAQgHAAgGAFQgFAEgEAGQgEAHAAAHQAAAIAEAHQADAHAHAEQAGAEAHAAQAIAAAGgDQAFgDAGgFIAMAMQgGAJgKAEQgIAFgOAAQgMAAgMgHg");
	this.shape_67.setTransform(600.6,193.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUArQgLgHgHgLQgGgKAAgPQgBgMAHgLQAFgMALgGQAKgHAMAAQAPAAAKAHQAKAHAGAMQAEAMAAAMIAAACIAAADIhEAAQADAMAGAGQAIAGAIAAQAIAAAHgCQAGgDAFgGIANALQgGAIgKAGQgJAEgOAAQgMAAgKgGgAAYgFQgBgIgDgFQgDgGgFgDQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_68.setTransform(590,193.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgJBBIAAiBIATAAIAACBg");
	this.shape_69.setTransform(581.9,191.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQBCIAAhLIgMAAIAAgSIAMAAIAAgHQAAgPAHgIQAIgIAMAAIAKABIAIACIAAASIgGgCIgHAAQgGAAgEADQgCAEAAAHIAAAFIAYAAIAAASIgYAAIAABLg");
	this.shape_70.setTransform(576.2,191.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgUArQgLgHgHgLQgGgKgBgPQAAgMAHgLQAFgMALgGQAKgHAMAAQAPAAAKAHQAKAHAGAMQAEAMAAAMIAAACIAAADIhEAAQACAMAIAGQAHAGAJAAQAIAAAFgCQAHgDAFgGIANALQgHAIgJAGQgKAEgNAAQgLAAgLgGgAAYgFQgBgIgDgFQgDgGgFgDQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_71.setTransform(567.2,193.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAbA+IgdgsIgcAAIAAAsIgWAAIAAh8IA3AAQAWAAAMAMQAMAKAAATQAAAKgDAIQgFAFgGAFQgHAFgJADIAiAvgAgeAAIAfAAQAMAAAHgFQAGgFABgKQgBgLgGgFQgHgGgMABIgfAAg");
	this.shape_72.setTransform(555.9,192);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgKAMIAAgXIAWAAIAAAXg");
	this.shape_73.setTransform(541.1,197.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAWQAEgLAHgHQAIgGAMAAIAAAXIgBAAQgJAAgIAEQgHAEgCAJQgEAHAAAMIAAAkg");
	this.shape_74.setTransform(537,193.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgUArQgLgHgHgLQgGgKgBgPQAAgMAHgLQAFgMALgGQAKgHAMAAQAPAAAKAHQAKAHAGAMQAEAMAAAMIAAACIAAADIhEAAQADAMAGAGQAIAGAIAAQAJAAAGgCQAGgDAFgGIANALQgGAIgKAGQgJAEgOAAQgMAAgKgGgAAYgFQgBgIgDgFQgDgGgFgDQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_75.setTransform(527.5,193.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_76.setTransform(518.5,192.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_77.setTransform(511.1,192.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgVArQgKgHgHgLQgGgKAAgPQAAgMAFgLQAHgMAKgGQAKgHAMAAQAPAAAKAHQALAHAEAMQAGAMAAAMIAAACIgBADIhEAAQADAMAGAGQAIAGAIAAQAIAAAHgCQAGgDAFgGIANALQgGAIgKAGQgJAEgOAAQgLAAgMgGgAAYgFQgBgIgDgFQgDgGgFgDQgFgDgHAAQgIAAgHAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_78.setTransform(502.1,193.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgNA9QgIgFgFgHIAAAPIgWAAIAAiBIAWAAIAAA0QAFgIAIgFQAIgFAJAAQAMAAAKAGQAKAGAGALQAHAJAAAQQAAAQgHALQgGALgKAFQgKAGgMAAQgJAAgIgFgAgMgIQgHAEgDAFQgEAGAAAKQAAAJAEAHQADAHAHAEQAGADAGAAQAHAAAGgDQAGgEAEgHQADgHABgJQgBgKgDgHQgEgEgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_79.setTransform(490.9,191.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAWQAEgLAHgHQAIgGAMAAIAAAXIgBAAQgJAAgIAEQgHAEgCAJQgEAHAAAMIAAAkg");
	this.shape_80.setTransform(475.9,193.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgZAqQgLgGgHgMQgGgKAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAHQALAGAGAMQAHALAAAMQAAAOgHAKQgGAMgMAGQgLAHgOAAQgOAAgLgHgAgOgYQgGAEgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQADgHAAgIQAAgHgDgGQgEgIgHgDQgGgFgIAAQgIAAgGAFg");
	this.shape_81.setTransform(465.8,193.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAWA8QgHgFgDgHQgEgHAAgJQAAgJAEgIQAEgGAGgFQAHgEAJAAQAJAAAGAEQAHAFAEAGQADAIAAAJQAAAJgDAHQgEAHgHAFQgGAEgJAAQgJAAgHgEgAAcASQgEAGAAAIQAAAHAEAFQAEAGAGAAQAGAAAEgGQADgEAAgIQAAgIgDgGQgEgEgGAAQgHAAgDAEgAg1A+IBah8IASAAIhbB8gAg0gDQgHgEgDgHQgEgIAAgIQAAgKAEgHQADgHAHgEQAHgFAJAAQAJAAAGAFQAHAEAEAHQADAIAAAIQAAAJgEAIQgDAGgHAFQgHADgJAAQgIAAgHgDgAgvgsQgDAGAAAHQAAAIAEAFQAEAGAGAAQAGAAAEgGQADgFAAgHQAAgIgEgGQgDgFgHAAQgGAAgEAFg");
	this.shape_82.setTransform(446.8,192);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgcA4QgMgJgHgOQgGgPAAgSQAAgQAGgPQAHgPANgJQAMgJAPAAQAQAAAMAJQANAJAGAPQAHAOAAARQAAASgHAPQgGAOgNAJQgMAIgQABQgPAAgNgJgAgQgmQgHAGgEALQgEAKAAALQAAAMAEAKQAEAKAIAHQAHAFAIAAQAJAAAIgFQAHgHAEgJQADgLAAgMQAAgLgEgKQgDgKgIgHQgHgFgJgBQgJABgHAFg");
	this.shape_83.setTransform(432.7,192);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgXA8QgLgFgGgIQgGgIgBgLQAAgMAGgHQAGgIALgCQgIgEgFgGQgFgIAAgKQAAgKAFgIQAGgIAKgDQAKgFALgBQAMABAKAFQAKADAFAIQAGAIAAAKQAAAKgFAIQgFAGgIAEQAKADAGAHQAGAIABAKQgBAMgGAIQgGAIgLAFQgLAFgNAAQgMAAgLgFgAgMAKQgGACgDAEQgEAFAAAFQAAAJAHAFQAHAGALAAQAMAAAHgGQAHgFAAgJQAAgFgEgFQgDgEgGgCQgGgCgHgBQgGABgGACgAgPgnQgGAEAAAIQAAAIAGAGQAHAFAIAAQAJAAAHgFQAGgGAAgIQAAgIgGgEQgGgGgKAAQgJAAgGAGg");
	this.shape_84.setTransform(420.5,192);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_85.setTransform(403.9,191.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_86.setTransform(394.4,192.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_87.setTransform(388.3,191.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAVAwIgVg/IgUA/IgTAAIgfheIAWAAIATA/IAVhAIAQAAIAWBAIATg/IAWAAIgfBeg");
	this.shape_88.setTransform(378,193.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_89.setTransform(361,192.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKgBQgHABgGAGQgGAGAAAMIAAAzIgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAARIAAA7g");
	this.shape_90.setTransform(351.9,193.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgUArQgLgHgHgLQgGgKgBgPQAAgMAHgLQAFgMALgGQAKgHAMAAQAPAAAKAHQAKAHAGAMQAEAMAAAMIAAACIAAADIhEAAQACAMAIAGQAHAGAJAAQAIAAAFgCQAHgDAFgGIANALQgHAIgJAGQgKAEgNAAQgLAAgLgGgAAYgFQgBgIgDgFQgDgGgFgDQgFgDgHAAQgJAAgGAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_91.setTransform(340.9,193.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAyAwIAAg0QAAgMgFgFQgFgGgJgBQgJABgGAGQgFAGAAAMIAAAzIgUAAIAAg0QAAgMgFgFQgFgGgJgBQgKABgFAGQgGAHAAALIAAAzIgWAAIAAhdIAWAAIAAAPIAHgJQAEgEAGgCQAFgCAHAAQAKAAAIAFQAFAEADAIQAGgIAIgEQAIgFALAAQAPAAAJAJQAJAKAAARIAAA7g");
	this.shape_92.setTransform(326.9,193.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_93.setTransform(313.7,193.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_94.setTransform(304.9,193.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgVArQgKgHgHgLQgGgKAAgPQAAgMAFgLQAHgMAKgGQAKgHAMAAQAPAAAKAHQALAHAEAMQAGAMgBAMIAAACIAAADIhEAAQADAMAGAGQAIAGAIAAQAIAAAHgCQAGgDAFgGIANALQgGAIgKAGQgJAEgOAAQgLAAgMgGgAAYgFQgBgIgDgFQgDgGgFgDQgFgDgHAAQgIAAgHAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_95.setTransform(295.1,193.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_96.setTransform(285,193.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_97.setTransform(276.2,193.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_98.setTransform(266.3,193.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgJBBIAAiBIATAAIAACBg");
	this.shape_99.setTransform(253.3,191.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_100.setTransform(245.2,193.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKgBQgHABgGAGQgGAGAAAMIAAAzIgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAARIAAA7g");
	this.shape_101.setTransform(234.7,193.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_102.setTransform(226.5,191.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgQBCIAAhLIgMAAIAAgSIAMAAIAAgHQAAgPAIgIQAHgIAMAAIAKABIAIACIAAASIgHgCIgGAAQgGAAgDADQgEAEAAAHIAAAFIAZAAIAAASIgYAAIAABLg");
	this.shape_103.setTransform(220.8,191.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_104.setTransform(761.4,172);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_105.setTransform(754.5,170.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_106.setTransform(746.4,170.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_107.setTransform(736.9,170.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_108.setTransform(723.3,172);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_109.setTransform(714.5,172);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_110.setTransform(704.6,172);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgwA+IAAh6IAWAAIAAAQQAFgHAIgFQAIgGAJAAQAMAAAKAHQAKAFAGALQAHALAAAQQAAAOgHALQgGALgKAFQgKAHgMgBQgJAAgIgEQgIgFgFgIIAAAsgAgMgnQgHAEgDAHQgEAGAAAKQAAAJAEAFQADAHAHAEQAGADAGABQAHgBAGgDQAGgEAEgHQADgEABgKQgBgKgDgGQgEgHgGgEQgGgDgHgBQgGABgGADg");
	this.shape_111.setTransform(693.8,173.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_112.setTransform(678.3,170.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_113.setTransform(670.3,172);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AggAmQgJgKAAgQIAAg7IAWAAIAAA0QAAALAFAGQAFAGAJAAQAJAAAFgGQAGgGAAgLIAAg0IAWAAIAABdIgWAAIAAgPQgEAHgHAFQgHAFgJAAQgRAAgIgKg");
	this.shape_114.setTransform(660.3,172.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAyAwIAAg0QAAgLgFgHQgFgFgJAAQgJAAgGAGQgFAGAAALIAAA0IgUAAIAAg0QAAgMgFgFQgFgGgJAAQgKAAgFAGQgGAHAAAKIAAA0IgWAAIAAhdIAWAAIAAAOIAHgHQAEgFAGgBQAFgDAHAAQAKAAAIAEQAFAFADAIQAGgIAIgFQAIgEALAAQAPAAAJAKQAJAJAAASIAAA6g");
	this.shape_115.setTransform(646.3,171.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AggAmQgJgKAAgQIAAg7IAWAAIAAA0QAAALAFAGQAFAGAJAAQAJAAAFgGQAGgGAAgLIAAg0IAWAAIAABdIgWAAIAAgPQgEAHgHAFQgHAFgJAAQgRAAgIgKg");
	this.shape_116.setTransform(626.7,172.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgZArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAGQALAIAGAKQAHALAAANQAAANgHAMQgGAKgMAIQgLAGgOAAQgOAAgLgGgAgOgZQgGAFgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHABQAIgBAHgEQAGgEAEgHQADgHAAgIQAAgGgDgIQgEgGgHgFQgGgEgIAAQgIAAgGAEg");
	this.shape_117.setTransform(615.2,172);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgfA8QgFgBgFgDIAHgQIAGACIAHABQAFAAADgCQADgDADgGIgohdIAXAAIAZBFIAZhFIAWAAIglBgQgGAOgFAHQgHAGgMAAQgGAAgGgCg");
	this.shape_118.setTransform(604.4,173.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgOAQQAJgCAEgEQABgEAAgGIgIAAIAAgYIAXAAIAAAVQAAANgIAHQgHAHgLABg");
	this.shape_119.setTransform(591,176.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgVArQgLgGgGgMQgHgLAAgOQABgMAFgMQAHgKAKgIQAKgGAMAAQAPAAAKAHQALAHAEALQAFAMABAMIAAADIgBADIhEAAQADAMAHAGQAHAHAJAAQAHAAAGgEQAHgDAGgFIAMAMQgGAHgKAFQgKAFgNAAQgMAAgLgGgAAYgFQgBgIgDgFQgDgFgFgEQgFgDgHAAQgIAAgHAHQgHAGgBAMIAvAAIAAAAg");
	this.shape_120.setTransform(583.7,172);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_121.setTransform(573.6,172);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHADgCAJQgEAHAAAMIAAAkg");
	this.shape_122.setTransform(565.9,171.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AggAmQgJgKAAgQIAAg7IAWAAIAAA0QAAALAFAGQAFAGAJAAQAJAAAFgGQAGgGAAgLIAAg0IAWAAIAABdIgWAAIAAgPQgEAHgHAFQgHAFgJAAQgRAAgIgKg");
	this.shape_123.setTransform(556.2,172.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgZArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAGQALAIAGAKQAHALAAANQAAANgHAMQgGAKgMAIQgLAGgOAAQgOAAgLgGgAgOgZQgGAFgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHABQAIgBAHgEQAGgEAEgHQADgHAAgIQAAgGgDgIQgEgGgHgFQgGgEgIAAQgIAAgGAEg");
	this.shape_124.setTransform(544.7,172);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgTArQgLgHgGgLQgHgLAAgOQAAgMAHgLQAGgMALgGQAMgHAMAAQANAAAJAEQAKAFAGAHIgNAPQgGgGgGgDQgGgDgHAAQgHAAgGAEQgFAFgEAGQgDAHgBAHQABAIADAHQADAHAHAEQAGAEAGABQAJgBAGgDQAFgEAGgFIAMAOQgGAHgKAFQgIAFgOAAQgMAAgMgGg");
	this.shape_125.setTransform(534,172);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgBA+QgMAAgKgCQgLgDgJgGIAIgQQAIAEAIADQAIADAKAAQAMAAAJgIQAHgHAAgOIAAgIQgGAIgIAFQgIAFgJAAQgMAAgJgGQgLgFgFgKQgHgIAAgOQAAgOAHgKQAFgKALgFQAJgGAMAAQAKAAAHAFQAJAFAFAGIAAgOIAVAAIAABKQAAAZgMAMQgNAMgXAAIgBgBgAgMgoQgGADgEAGQgDAGAAAIQAAAIADAGQAEAEAGADQAFADAHAAQAHAAAGgDQAGgDAEgEQAEgGAAgIQAAgIgEgGQgEgGgGgDQgGgDgHAAQgHAAgFADg");
	this.shape_126.setTransform(517.1,173.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKAAQgHAAgGAGQgGAGAAALIAAA0IgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAASIAAA6g");
	this.shape_127.setTransform(505.8,171.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_128.setTransform(497.6,170.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAVAwIAAg0QgBgLgFgGQgFgGgKAAQgHAAgGAGQgGAGAAALIAAA0IgWAAIAAhdIAWAAIAAAPQAEgIAHgEQAHgFAJAAQARAAAIAKQAJAJAAASIAAA6g");
	this.shape_129.setTransform(489.5,171.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_130.setTransform(481.3,170.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgYAtQgIgDgFgGQgEgHgBgKQABgKAFgHQAEgFAJgDQAJgEALAAQAGAAAHACIALACIAAgCQAAgKgGgFQgGgFgJAAQgIAAgGABIgNAFIgGgSIAQgGQAJgCAJAAQAVAAAKALQALAKAAATIAAA3IgWAAIAAgMQgFAGgHAEQgIAEgJAAQgJAAgHgEgAgOAHQgGAEAAAHIAAAAQAAAHAFAEQAGADAHAAQAGAAAFgCQAGgDADgEQAEgFAAgGIAAgGIgKgCIgMgBQgIAAgGAEg");
	this.shape_131.setTransform(473.2,172);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHADgCAJQgEAHAAAMIAAAkg");
	this.shape_132.setTransform(465.3,171.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_133.setTransform(457.3,170.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgRAtQgKgEgJgHIAJgOQAIAFAIADQAIADAGAAQAHAAADgDQAEgCAAgFQAAgEgDgCQgDgDgEgBIgJgEIgOgFQgHgCgEgEQgEgGgBgJQAAgJAFgGQAEgHAIgDQAIgEAHAAQAJAAAJADQAJADAIAFIgIAPIgOgGQgHgDgGAAQgFAAgDADQgEADAAAEIAAAAQAAAEADACIAIAEIAJAEIAOAFQAGACAFAEQAEAGAAAIIAAABQAAAKgEAGQgFAHgIADQgIAEgKAAQgIAAgLgEg");
	this.shape_134.setTransform(443.7,172);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_135.setTransform(436.8,170.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAVBBIAAg2QgBgLgFgEQgFgGgKAAQgHAAgGAGQgGAEAAAMIAAA1IgWAAIAAiBIAWAAIAAAzQAEgHAHgFQAHgFAJAAQARAAAIAKQAJAKAAAPIAAA8g");
	this.shape_136.setTransform(428.7,170.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_137.setTransform(419.2,170.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHADgCAJQgEAHAAAMIAAAkg");
	this.shape_138.setTransform(406.9,171.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgZArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAGQALAIAGAKQAHALAAANQAAANgHAMQgGAKgMAIQgLAGgOAAQgOAAgLgGgAgOgZQgGAFgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHABQAIgBAHgEQAGgEAEgHQADgHAAgIQAAgGgDgIQgEgGgHgFQgGgEgIAAQgIAAgGAEg");
	this.shape_139.setTransform(396.9,172);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgQBCIAAhLIgMAAIAAgSIAMAAIAAgHQAAgPAHgIQAIgIAMAAIAKABIAIACIAAASIgGgCIgHAAQgGAAgDADQgDAEAAAHIAAAFIAYAAIAAASIgYAAIAABLg");
	this.shape_140.setTransform(388,170.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgIA3QgIgHAAgPIAAgwIgMAAIAAgTIAMAAIAAgaIAUAAIAAAaIAZAAIAAATIgZAAIAAAtQAAAGADADQADACAFAAIAHAAIAHgDIAAASIgJAEIgLABIgBAAQgJAAgHgGg");
	this.shape_141.setTransform(375.2,170.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_142.setTransform(369,170.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgZA8QgKgFgGgLQgGgLAAgQQAAgQAFgJQAHgLAKgGQAKgGAMAAQAJAAAIAFQAHAFAGAHIAAgzIAWAAIAACBIgWAAIAAgQQgGAIgHAFQgIAFgJAAQgMAAgKgGgAgMgIQgGADgEAFQgDAHgBAKQABAJADAHQAEAHAGAEQAGADAGAAQAHAAAGgDQAHgEADgHQAEgHAAgJQAAgKgEgGQgDgFgHgEQgGgEgHAAQgGAAgGAEg");
	this.shape_143.setTransform(360.2,170.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgVArQgKgGgHgMQgHgLABgOQAAgMAFgMQAHgKAKgIQAKgGAMAAQAPAAAKAHQALAHAEALQAGAMAAAMIAAADIgBADIhEAAQADAMAGAGQAIAHAIAAQAIAAAHgEQAGgDAFgFIANAMQgHAHgJAFQgKAFgNAAQgLAAgMgGgAAYgFQgBgIgDgFQgDgFgFgEQgFgDgHAAQgIAAgHAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_144.setTransform(349,172);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHADgCAJQgEAHAAAMIAAAkg");
	this.shape_145.setTransform(340.5,171.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgTArQgKgHgHgLQgHgLABgOQgBgMAHgLQAHgMAKgGQALgHAMAAQAOAAAJAEQAKAFAGAHIgNAPQgFgGgGgDQgHgDgIAAQgFAAgGAEQgHAFgDAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAFABQAIgBAHgDQAFgEAFgFIAOAOQgIAHgIAFQgKAFgOAAQgMAAgLgGg");
	this.shape_146.setTransform(331.4,172);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgUArQgLgGgHgMQgGgLgBgOQAAgMAHgMQAFgKALgIQAKgGAMAAQAPAAAKAHQAKAHAGALQAEAMAAAMIAAADIAAADIhEAAQACAMAIAGQAHAHAJAAQAHAAAGgEQAHgDAGgFIAMAMQgHAHgJAFQgKAFgNAAQgLAAgLgGgAAYgFQgBgIgDgFQgDgFgFgEQgFgDgHAAQgJAAgGAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_147.setTransform(315.3,172);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgIAvIgnhdIAXAAIAYBEIAahEIAWAAIgmBdg");
	this.shape_148.setTransform(305,172);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgJBBIAAhdIATAAIAABdgAgKgrIAAgVIAVAAIAAAVg");
	this.shape_149.setTransform(297.1,170.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgVArQgKgGgHgMQgHgLABgOQAAgMAFgMQAHgKAKgIQAKgGAMAAQAPAAAKAHQALAHAEALQAGAMAAAMIAAADIgBADIhEAAQADAMAGAGQAIAHAIAAQAIAAAHgEQAGgDAFgFIANAMQgHAHgJAFQgKAFgNAAQgLAAgMgGgAAYgFQgBgIgDgFQgDgFgFgEQgFgDgHAAQgIAAgHAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_150.setTransform(289.2,172);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgSArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAKgHAMAAQAOAAAJAEQAKAFAGAHIgOAPQgFgGgGgDQgFgDgJAAQgGAAgFAEQgGAFgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAGABQAIgBAFgDQAHgEAEgFIAOAOQgIAHgJAFQgJAFgOAAQgMAAgKgGg");
	this.shape_151.setTransform(278.9,172);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgVArQgLgGgGgMQgHgLAAgOQABgMAFgMQAHgKAKgIQAKgGAMAAQAPAAAKAHQALAHAEALQAFAMABAMIAAADIgBADIhEAAQADAMAHAGQAHAHAJAAQAHAAAGgEQAHgDAGgFIAMAMQgGAHgKAFQgKAFgNAAQgMAAgLgGgAAYgFQgBgIgDgFQgDgFgFgEQgFgDgHAAQgIAAgHAHQgGAGgCAMIAvAAIAAAAg");
	this.shape_152.setTransform(268.3,172);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgaAwIAAhdIAWAAIAAAVQAEgLAHgGQAIgGAMAAIAAAXIgBAAQgJAAgIAFQgHADgCAJQgEAHAAAMIAAAkg");
	this.shape_153.setTransform(259.8,171.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgZArQgLgHgHgLQgGgLAAgOQAAgMAGgLQAHgMALgGQAMgHANAAQAOAAAMAGQALAIAGAKQAHALAAANQAAANgHAMQgGAKgMAIQgLAGgOAAQgOAAgLgGgAgOgZQgGAFgEAGQgDAHgBAHQABAIADAHQAEAHAGAEQAHAEAHABQAIgBAHgEQAGgEAEgHQADgHAAgIQAAgGgDgIQgEgGgHgFQgGgEgIAAQgIAAgGAEg");
	this.shape_154.setTransform(244.3,172);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgKA/IAAhoIgoAAIAAgUIBlAAIAAAUIgoAAIAABog");
	this.shape_155.setTransform(234.6,170.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#7E1511","#E92D1E"],[0,1],0,55,0,-54.9).s().p("EhK/AIlIAAxJMCV/AAAIAARJg");
	this.shape_156.setTransform(480,193);

	this.timeline.addTween(cjs.Tween.get(this.shape_156).wait(1));

	// Layer 1
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape_157.setTransform(480,210);

	this.timeline.addTween(cjs.Tween.get(this.shape_157).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,420);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066CC").ss(2,0,0,4).p("AXc+xMgu3AAAQgyAAAAAyMAAAA7/QAAAyAyAAMAu3AAAQAyAAAAgyMAAAg7/QAAgygyAAg");
	this.shape.setTransform(155.1,197.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3beyQgyAAAAgyMAAAg7/QAAgyAyAAMAu3AAAQAyAAAAAyMAAAA7/QAAAygyAAg");
	this.shape_1.setTransform(155.1,197.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,312.1,396.1);


(lib.LocalAudioPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.FinishScreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(573.2,211.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAwQgNgHgGgMQgIgNABgQQgBgOAHgMQAGgNAMgHQAMgHANgBQARABALAHQAMAIAFANQAFANAAANIAAAEIAAADIhMAAQADANAIAHQAIAHAKAAQAJAAAHgDQAHgEAFgGIAPANQgHAJgLAFQgLAFgOABQgOgBgMgGgAAagGQAAgIgEgGQgDgGgGgEQgFgEgIAAQgKAAgHAIQgHAIgCAMIA0AAIAAAAg");
	this.shape_1.setTransform(564.7,207.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAqQgKgKAAgTIAAhBIAYAAIAAA6QABAMAFAHQAGAGAKAAQAKAAAGgHQAHgGgBgNIAAg5IAZAAIAABnIgZAAIAAgQQgFAIgHAFQgIAFgKAAQgTAAgJgLg");
	this.shape_2.setTransform(552.4,208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA2IAAg7QgBgMgFgHQgGgGgLgBQgJABgGAGQgHAIABAMIAAA6IgZAAIAAhoIAZAAIAAARQAEgJAIgEQAJgGAJAAQATAAAJALQAKAKAAATIAABCg");
	this.shape_3.setTransform(540.1,207.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBIIAAhnIAWAAIAABngAgLgwIAAgXIAXAAIAAAXg");
	this.shape_4.setTransform(531,206);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA9QgIgHgBgRIAAg2IgNAAIAAgVIANAAIAAgdIAXAAIAAAdIAcAAIAAAVIgcAAIAAAyQAAAHAEADQADADAGAAIAHgBIAIgDIAAAUIgKAEQgFACgHAAQgMAAgIgHg");
	this.shape_5.setTransform(524,206.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXA2IAAg7QAAgMgGgHQgGgGgLgBQgIABgHAGQgHAIAAAMIAAA6IgYAAIAAhoIAYAAIAAARQAGgJAIgEQAHgGAKAAQASAAAKALQAKAKAAATIAABCg");
	this.shape_6.setTransform(513.8,207.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAvQgMgHgHgNQgIgMAAgPQAAgOAIgMQAHgNANgHQAMgHAPgBQAQABAMAHQANAHAHANQAIAMAAAOQAAAPgIAMQgHANgNAHQgMAHgQABQgPgBgNgHgAgQgcQgHAFgEAHQgEAIAAAIQAAAJAFAIQAEAHAHAFQAHAFAIAAQAJAAAIgFQAHgEAEgIQAEgIAAgJQAAgIgFgHQgEgIgHgFQgHgEgJAAQgJAAgHAEg");
	this.shape_7.setTransform(501,207.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAvQgMgHgHgNQgHgMAAgPQAAgNAHgNQAHgMAMgIQAMgHAOgBQAPABAKAFQAKAEAIAJIgPAQQgGgGgGgEQgHgDgJAAQgHAAgGAEQgHAFgEAHQgEAIAAAIQAAAJAEAIQAEAHAHAFQAHAFAHAAQAJAAAHgEQAGgEAGgGIAOAPQgHAJgKAFQgLAFgPABQgOgBgMgHg");
	this.shape_8.setTransform(489.1,207.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAvQgMgHgHgNQgIgMAAgPQAAgOAIgMQAHgNANgHQAMgHAPgBQAQABAMAHQANAHAHANQAIAMAAAOQAAAPgIAMQgHANgNAHQgMAHgQABQgPgBgNgHgAgQgcQgHAFgEAHQgEAIAAAIQAAAJAFAIQAEAHAHAFQAHAFAIAAQAJAAAIgFQAHgEAEgIQAEgIAAgJQAAgIgFgHQgEgIgHgFQgHgEgJAAQgJAAgHAEg");
	this.shape_9.setTransform(470.7,207.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKA9QgIgHAAgRIAAg2IgOAAIAAgVIAOAAIAAgdIAWAAIAAAdIAdAAIAAAVIgdAAIAAAyQAAAHAEADQADADAGAAIAIgBIAHgDIAAAUIgKAEQgFACgHAAQgLAAgJgHg");
	this.shape_10.setTransform(460.3,206.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKA9QgIgHAAgRIAAg2IgOAAIAAgVIAOAAIAAgdIAWAAIAAAdIAdAAIAAAVIgdAAIAAAyQAAAHAEADQACADAHAAIAIgBIAHgDIAAAUIgKAEQgFACgHAAQgLAAgJgHg");
	this.shape_11.setTransform(446.1,206.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAZA0IgZglIgZAlIgaAAIAog0IgmgzIAbAAIAWAiIAYgiIAaAAIglAzIAmA0g");
	this.shape_12.setTransform(436.3,207.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAwQgMgHgIgMQgGgNAAgQQgBgOAHgMQAGgNAMgHQAMgHANgBQARABALAHQALAIAGANQAFANABANIAAAEIgBADIhMAAQADANAIAHQAIAHAKAAQAJAAAGgDQAHgEAHgGIAOANQgIAJgKAFQgLAFgOABQgOgBgMgGgAAagGQAAgIgDgGQgEgGgFgEQgGgEgIAAQgJAAgIAIQgHAIgCAMIA0AAIAAAAg");
	this.shape_13.setTransform(425,207.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAoBGIhMhiIAABiIgYAAIAAiLIAYAAIBIBfIAAhfIAYAAIAACLg");
	this.shape_14.setTransform(411.1,206.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVBJIgeguIgPAQIAAAeIgYAAIAAiQIAYAAIAABUIAqgsIAdAAIgpApIArA/g");
	this.shape_15.setTransform(392,205.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAvQgMgHgHgNQgHgMAAgPQAAgNAHgNQAHgMAMgIQAMgHAOgBQAPABAKAFQAKAEAIAJIgPAQQgGgGgGgEQgHgDgJAAQgHAAgGAEQgHAFgEAHQgEAIAAAIQAAAJAEAIQAEAHAHAFQAHAFAHAAQAJAAAHgEQAGgEAGgGIAOAPQgHAJgKAFQgLAFgPABQgOgBgMgHg");
	this.shape_16.setTransform(379.9,207.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKBIIAAhnIAWAAIAABngAgLgwIAAgXIAXAAIAAAXg");
	this.shape_17.setTransform(371.3,206);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgLBJIAAiQIAXAAIAACQg");
	this.shape_18.setTransform(365.6,205.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcA+QgQgKgKgQQgIgQgBgUQABgSAIgRQAKgRAQgJQAQgJATgBQAOAAAJADQAKADAIAEIAPAMIgQASQgJgIgJgFQgKgEgMAAQgLAAgKAGQgLAHgGALQgGAMAAAMQAAANAGAMQAGALALAHQAKAGALABQANgBAKgFQAJgEAJgJIAQAQQgIAIgIAGQgIAFgKADQgLADgNAAQgSgBgQgJg");
	this.shape_19.setTransform(355.6,206.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgSBpIAAgqIAmAAIAAAqgAgIAmIgMiDIAAgLIApAAIAAALIgLCDg");
	this.shape_20.setTransform(544.4,177.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAgBtIguhEIgXAWIAAAuIgjAAIAAjZIAjAAIAACBIBAhEIAsAAIg/A+IBBBeg");
	this.shape_21.setTransform(532.1,176.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgtBQIAAicIAkAAIAAAjQAIgSAMgKQAOgLAUABIAAAmIgCAAQgPAAgNAHQgMAHgFAOQgHANAAAUIAAA8g");
	this.shape_22.setTransform(516.9,179.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqBHQgTgLgLgSQgLgTAAgXQAAgVALgTQALgTATgLQATgLAXAAQAYAAATALQATALALASQALAUAAAVQAAAXgLASQgLASgTAMQgTALgYAAQgYAAgSgLgAgYgrQgLAIgFALQgHALABANQgBANAHAMQAGAMAKAHQALAGANABQAOgBALgGQALgHAGgLQAGgMAAgOQgBgNgFgLQgHgLgLgIQgLgHgNAAQgNAAgLAHg");
	this.shape_23.setTransform(500.2,179.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAjBQIgjhqIgiBqIggAAIg0ieIAlAAIAgBqIAjhrIAdAAIAkBrIAghqIAkAAIg0Ceg");
	this.shape_24.setTransform(478.1,179.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPBcQgNgLAAgaIAAhRIgUAAIAAgfIAUAAIAAgsIAiAAIAAAsIArAAIAAAfIgrAAIAABMQAAAKAGAFQAFAFAJAAQAGAAAFgCIALgEIAAAeQgGAEgIACQgIACgKAAIgCAAQgRAAgMgKg");
	this.shape_25.setTransform(449.9,177.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgqBMQgNgGgHgKQgIgLAAgQIAAgBQAAgRAIgLQAIgKAPgFQAOgGATAAIAWACIAUAFIAAgEQAAgRgKgIQgKgJgRAAQgNAAgLADQgLACgLAFIgJgdQAMgGAOgEQAPgDARgBQAjABARARQARARAAAgIAABcIgkAAIAAgTQgIAKgMAGQgNAGgQABQgPgBgNgFgAgZALQgJAHAAAMIAAABQAAALAJAGQAIAGANAAQAKAAAKgEQAJgEAGgIQAFgHAAgKIAAgKQgHgDgJgBQgJgCgLAAQgPAAgKAGg");
	this.shape_26.setTransform(434.8,179.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjBIQgTgKgKgTQgLgSAAgZQAAgWAKgSQAKgTARgLQARgLAVAAQAZAAARAMQARALAJATQAIAUAAAVIAAAFIAAAFIhzAAQAEATAMALQAMALAQAAQANAAAKgGQAKgEAKgJIAVATQgLANgQAIQgQAIgWAAQgVAAgSgKgAAogJQgBgNgFgJQgFgJgIgGQgJgFgMgBQgPABgLALQgLALgCAUIBPAAIAAAAg");
	this.shape_27.setTransform(417.4,179.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgtBQIAAicIAkAAIAAAjQAIgSAMgKQAOgLAUABIAAAmIgCAAQgPAAgMAHQgNAHgEAOQgIANAAAUIAAA8g");
	this.shape_28.setTransform(403.4,179.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgtBdQgYgOgOgYQgNgYgBgfQABgVAIgTQAHgUAPgPQAOgPAUgIQAUgJAWAAQASAAAOADQAOAEAMAGQAMAGAKAJIgXAcQgMgKgNgGQgOgGgUAAQgRAAgQAKQgPAKgJARQgJARAAATQAAAVAJARQAJARAQAJQAQAKATAAQAQABAMgFQAOgEAJgHIAAgoIg1AAIAAgeIBZAAIAABWQgKAJgOAIQgNAHgQAFQgQAEgTAAQgfAAgYgPg");
	this.shape_29.setTransform(384.6,177.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#7E1511","#E92D1E"],[0,1],0,55,0,-54.9).s().p("EhK/AIlIAAxJMCV/AAAIAARJg");
	this.shape_30.setTransform(480,193);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(1));

	// Layer 3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.749)").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape_31.setTransform(480,210);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,420);


(lib.daarrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#194E92").s().p("Ah8g9ID5AAIh9B7g");
	this.shape.setTransform(12.5,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F6CA4").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_1.setTransform(12.5,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6689B6").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_2.setTransform(12.5,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CA7C9").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_3.setTransform(12.5,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2C4DB").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_4.setTransform(12.5,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9E1ED").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_5.setTransform(12.5,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_6.setTransform(12.5,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1DCE9").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_7.setTransform(12.5,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A3B8D3").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_8.setTransform(12.5,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7595BE").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_9.setTransform(12.5,6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4771A8").s().p("Ah8g9ID5AAIh9B7g");
	this.shape_10.setTransform(12.5,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},48).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,12.5);


(lib.SubmitButton_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKA9QgIgHgBgRIAAg2IgMAAIAAgVIAMAAIAAgdIAXAAIAAAdIAcAAIAAAVIgcAAIAAAyQAAAHADADQAEADAGAAIAHgBIAIgDIAAAUIgKAEQgFACgHAAQgMAAgIgHg");
	this.shape.setTransform(125.1,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLBIIAAhoIAXAAIAABogAgLgwIAAgXIAYAAIAAAXg");
	this.shape_1.setTransform(118.2,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4A2IAAg6QgBgNgFgGQgGgHgKgBQgKABgGAHQgGAGgBANIAAA6IgWAAIAAg6QAAgNgFgGQgGgHgKgBQgKABgHAHQgFAHgBAMIAAA6IgYAAIAAhoIAYAAIAAAQIAIgJQAEgEAGgCQAGgDAIAAQAMAAAIAFQAGAEAEAKQAGgKAJgEQAJgFAMAAQARAAAKAKQAKAKAAAUIAABCg");
	this.shape_2.setTransform(105.9,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBEQgIgGgGgHIAAARIgYAAIAAiRIAYAAIAAA7QAGgJAJgGQAIgFALAAQANAAALAGQALAGAHANQAHAKAAASQAAARgHAMQgHANgLAGQgLAHgNAAQgLgBgJgFgAgOgJQgHAEgEAGQgEAHAAALQAAAKAEAIQAEAHAHAEQAHAEAHAAQAIAAAHgEQAGgDAEgIQAEgIABgKQgBgLgEgHQgEgGgGgEQgHgEgIAAQgHAAgHAEg");
	this.shape_3.setTransform(89.9,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkAqQgKgKAAgTIAAhBIAYAAIAAA6QAAAMAGAHQAGAGAKAAQAJAAAHgHQAGgGABgNIAAg5IAYAAIAABnIgYAAIAAgQQgGAIgIAFQgHAFgLAAQgSAAgJgLg");
	this.shape_4.setTransform(76.7,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZBCQgPgGgNgLIAPgSQAKAJALAFQAKAFALgBQAMABAGgFQAHgFAAgIQAAgFgCgEQgDgDgHgDQgHgEgKgDQgPgDgLgFQgKgDgGgIQgFgIAAgNQAAgMAGgJQAGgJALgGQALgEANAAQAOgBAMAFQANAFALAIIgOATQgJgIgKgDQgJgDgIgBQgLABgFAEQgGAFAAAHQgBAGADADQADAEAHADQAHADAMAEQAPADAKAFQAKADAFAIQAFAIAAALQAAANgHAKQgGAKgLAEQgLAGgPAAQgOgBgPgFg");
	this.shape_5.setTransform(64,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.2)").s().p("AuMB2QgjAAgNgOQgJgKAAgYIAAiLQAAgXAKgKQAOgPAkAAIcVAAQAkAAANAPQAJAKAAAXIAACLQAAAYgJAKQgNAOgkAAg");
	this.shape_6.setTransform(95.7,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E62D21").s().p("AuMDVQgjAAgNgOQgJgKAAgYIAAlJQAAgXAJgKQANgPAjAAIcYAAQAkAAANAPQAJAKAAAXIAAFJQAAAYgJAKQgNAOgkAAg");
	this.shape_7.setTransform(95.7,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,0.1,193.3,42.7);


(lib.continueButton = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.cursor = "pointer";
		
		this.addEventListener('click', function() {
				root.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAwQgMgHgHgMQgIgNABgQQAAgOAGgMQAHgNALgHQAMgHANgBQARABALAHQAMAIAFANQAGANgBANIAAAEIAAADIhLAAQACANAIAHQAIAHAKAAQAJAAAHgDQAGgEAGgGIAPANQgHAJgLAFQgLAFgPABQgNgBgMgGgAAbgGQgBgIgEgGQgDgGgGgEQgFgEgIAAQgKAAgGAIQgIAIgBAMIA0AAIAAAAg");
	this.shape.setTransform(132.9,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAqQgKgKAAgTIAAhBIAYAAIAAA6QAAAMAGAHQAGAGAKAAQAKAAAGgHQAHgGAAgNIAAg5IAYAAIAABnIgYAAIAAgQQgGAIgIAFQgHAFgKAAQgSAAgKgLg");
	this.shape_1.setTransform(120.6,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA2IAAg6QgBgNgFgGQgGgHgLgBQgJABgGAHQgGAHAAAMIAAA6IgZAAIAAhoIAZAAIAAARQAFgIAHgGQAJgFAJAAQATAAAJALQAKALAAASIAABCg");
	this.shape_2.setTransform(108.3,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBIIAAhoIAWAAIAABogAgLgwIAAgXIAYAAIAAAXg");
	this.shape_3.setTransform(99.2,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA9QgIgHAAgRIAAg2IgOAAIAAgVIAOAAIAAgdIAWAAIAAAdIAdAAIAAAVIgdAAIAAAyQAAAHAEADQADADAGAAIAIgBIAHgDIAAAUIgKAEQgFACgHAAQgLAAgJgHg");
	this.shape_4.setTransform(92.2,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXA2IAAg6QgBgNgFgGQgGgHgLgBQgJABgGAHQgHAHABAMIAAA6IgZAAIAAhoIAZAAIAAARQAEgIAIgGQAJgFAJAAQATAAAJALQAKALAAASIAABCg");
	this.shape_5.setTransform(82,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAvQgMgHgHgNQgIgMAAgPQAAgOAIgMQAHgNANgHQAMgHAPgBQAQABAMAHQANAHAHANQAIAMAAAOQAAAPgIAMQgHANgNAHQgMAHgQABQgPgBgNgHgAgQgcQgHAFgEAHQgEAIAAAIQAAAJAFAIQAEAHAHAFQAHAFAIAAQAJAAAIgFQAHgEAEgIQAEgIAAgJQAAgIgFgHQgEgIgHgFQgHgEgJAAQgJAAgHAEg");
	this.shape_6.setTransform(69.2,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcA+QgQgJgKgQQgIgRgBgUQABgTAIgQQAKgQAQgKQAQgJATgBQAOAAAJADQAKADAIAFQAIAEAGAHIgPASQgJgIgJgEQgKgFgMgBQgLABgKAGQgLAHgGALQgGAMAAAMQAAAOAGALQAGALALAHQAKAGALAAQANAAAKgEQAIgGAKgIIAPAQQgHAIgIAGQgJAFgJADQgLADgNAAQgSgBgQgJg");
	this.shape_7.setTransform(55.7,21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,193,43);


(lib.AnswerButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"default":0,over:1,selected:2});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().de(-4.5,-4.5,9,9);
	this.shape.setTransform(17.9,22.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// Text
	this.answerLetter = new cjs.Text("", "18px 'Gotham'", "#FFFFFF");
	this.answerLetter.name = "answerLetter";
	this.answerLetter.lineHeight = 24;
	this.answerLetter.lineWidth = 21;
	this.answerLetter.parent = this;
	this.answerLetter.setTransform(10.5,6.3,0.766,0.766);

	this.buttonText = new cjs.Text("Risk Identification", "18px 'Gotham'", "#FFFFFF");
	this.buttonText.name = "buttonText";
	this.buttonText.lineHeight = 24;
	this.buttonText.lineWidth = 774;
	this.buttonText.parent = this;
	this.buttonText.setTransform(30.5,6.3,0.766,0.766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buttonText},{t:this.answerLetter}]}).wait(3));

	// Highlight
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.122)","rgba(255,255,255,0.369)"],[0,1],0.1,-14.6,0,14.6).s().p("Egv+AB7QgkAAgOgOQgLgKAAgXIAAiWQAAgXAKgLQAOgOAkAAMBgDAAAQAkAAAMAOQAIAKAAAYIAACWQAAAYgIAJQgMAOgkAAg");
	this.shape_1.setTransform(318,14.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(2));

	// Background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E62D21").s().p("EgwEADLQgjAAgMgOQgIgJAAgYIAAk2QAAgYAIgKQANgOAiAAMBgIAAAQAkAAALAOQAJAKAAAYIAAE2QAAAYgJAJQgLAOgkAAg");
	this.shape_2.setTransform(318,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,2,626.5,40.8);


(lib.sign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(19).call(this.frame_28).wait(18).call(this.frame_46).wait(1));

	// Layer 6
	this.instance = new lib.sign2();
	this.instance.parent = this;
	this.instance.setTransform(326,916.8,1,1,0,0,0,442.2,465.4);

	this.instance_1 = new lib.sign1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(326.4,916.9,1,1,0,0,0,326.6,362.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.sign3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(326.5,940.7,1,1,0,0,0,397.3,425.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:232.8},9,cjs.Ease.get(1)).wait(1).to({y:940.8},8,cjs.Ease.get(1)).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({y:232.9},9,cjs.Ease.get(1)).wait(1).to({y:916.9},8,cjs.Ease.get(1)).to({_off:true},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({y:232.7},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,553.4,653,726);


(lib.retryBtn = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{xUp:0,xOver:9,xClicked:19});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = "pointer";
	}
	this.frame_20 = function() {
		Shell.UpdateSlide();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// Layer 6
	this.invisiBtn = new lib.invisiBtn();
	this.invisiBtn.parent = this;
	this.invisiBtn.setTransform(75.2,35.1,0.898,0.608,0,0,0,83.7,57.6);
	this.invisiBtn.alpha = 0.5;
	this.invisiBtn.cache(-27,-2,227,86);

	this.timeline.addTween(cjs.Tween.get(this.invisiBtn).to({_off:true},19).wait(2));

	// TextBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBEQgIAAgGgBIgLgFIAIgSIAHADIAHABQAGAAADgDQAEgCACgHIgshoIAaAAIAcBNIAchNIAZAAIgqBrQgGAQgGAHQgIAHgLAAIgCgBg");
	this.shape.setTransform(96.4,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdA1IAAhnIAYAAIAAAXQAFgMAHgHQAJgHAOABIAAAZIgBAAQgLAAgIAFQgIAEgCAKQgFAIAAANIAAAog");
	this.shape_1.setTransform(86.9,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKA9QgIgHgBgRIAAg2IgMAAIAAgVIAMAAIAAgdIAXAAIAAAdIAdAAIAAAVIgdAAIAAAyQAAAHADADQADADAHAAIAHgBIAIgDIAAAUIgKAEQgFACgHAAQgLAAgJgHg");
	this.shape_2.setTransform(78.1,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAwQgNgHgGgMQgIgNABgQQAAgOAGgMQAHgNALgHQAMgHANgBQARABALAHQAMAIAFANQAGANgBANIAAAEIAAADIhLAAQACANAIAHQAIAHAKAAQAJAAAHgDQAHgEAFgGIAPANQgHAJgLAFQgLAFgOABQgOgBgMgGgAAbgGQgBgIgEgGQgDgGgGgEQgFgEgIAAQgKAAgGAIQgIAIgBAMIA0AAIAAAAg");
	this.shape_3.setTransform(68,27);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBGIgggyIggAAIAAAyIgYAAIAAiLIA8AAQAZABAOAMQANALAAAVQABALgFAJQgEAHgIAFQgHAGgKADIAmA1gAgiAAIAiAAQAOAAAIgGQAHgGAAgLQAAgLgHgGQgIgGgOAAIgiAAg");
	this.shape_4.setTransform(55.5,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.2)").s().p("AuMB2QgjAAgNgOQgIgKgBgVIAAiOIABgLIAAgBIABgHQADgJAFgFIACgCQAJgIAQgDIAFgBIAPgBIcYAAQAkAAANAPQAJAKAAAXIAACOQgBAVgIAKQgNAOgkAAg");
	this.shape_5.setTransform(77.3,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E62D21").s().p("AuMDVQgjAAgNgOQgJgKAAgYIAAi5QABAUAIAJQANAOAjAAIcYAAQAkAAANgOQAIgJABgUIAAC5QAAAYgJAKQgNAOgkAAgAvCi7IAAAAIADgFIABgCIAAAAIACgDIABgBIAAAAIACgBIgCACQgFAFgDAJgAufjSQAJgCAKAAIgPABIgFABg");
	this.shape_6.setTransform(77.3,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(21));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E62D21").s().p("AuMDVQgjAAgNgOQgJgKAAgYIAAlJQAAgXAJgKQANgPAjAAIcYAAQAkAAANAPQAJAKAAAXIAAFJQAAAYgJAKQgNAOgkAAg");
	this.shape_7.setTransform(77.3,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,0,200.5,50);


(lib.Remediation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Right:2,Wrong:38});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		playSound("Videogamearpeggioascendinghigh_BLASTWAVEFX_30404_kpLower");
	}
	this.frame_37 = function() {
		this.stop();
		this.parent.play();
		//this.gotoAndStop(0);
		//root['star' + (root.activity.qIndex + 1)].gotoAndStop(1);
		//root.activity.OnRemediationComplete();
	}
	this.frame_39 = function() {
		playSound("Videogamearpeggiodescend_BLASTWAVEFX_30405_kpLower");
	}
	this.frame_74 = function() {
		this.stop();
		this.gotoAndStop(0);
		//root.activity.OnRemediationComplete();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(34).call(this.frame_37).wait(2).call(this.frame_39).wait(35).call(this.frame_74).wait(1));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(532.8,429.6,1,1,0,0,0,480,210);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Symbol1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(532.8,429.6,1,1,0,0,0,480,210);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:361.2,alpha:1},5,cjs.Ease.get(1)).to({y:369.6},2,cjs.Ease.get(1)).wait(21).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({y:361.2,alpha:1},5,cjs.Ease.get(1)).to({y:369.6},2,cjs.Ease.get(1)).wait(21).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.wrongDude();
	this.instance_2.parent = this;
	this.instance_2.setTransform(641.6,449.5,1,1,0,0,0,640,244.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.rightDude();
	this.instance_3.parent = this;
	this.instance_3.setTransform(641.6,449.5,1,1,0,0,0,640,244.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:381.1,alpha:1},5,cjs.Ease.get(1)).to({y:389.5},2,cjs.Ease.get(1)).wait(21).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).to({y:381.1,alpha:1},5,cjs.Ease.get(1)).to({y:389.5},2,cjs.Ease.get(1)).wait(21).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Block
	this.instance_4 = new lib.fade2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(639.1,360.4,1,1,0,0,0,642.6,363.9);
	this.instance_4.alpha = 0.648;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(28).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(1).to({_off:false,alpha:0.648},0).wait(28).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Handle
	this.instance_5 = new lib.Bitmap16();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-136,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,0,123,31);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF0B4E").s().p("AgQBVQgGgHgBgLQABgLAGgHQAHgHAJAAQAKAAAHAHQAHAHAAALQAAALgHAHQgHAHgKAAQgJAAgHgHgAgLAaIgGhRIgCgkIAnAAIgCAkIgFBRg");
	this.shape.setTransform(264.4,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF0B4E").s().p("AAZBYIgghAIgWAAIAABAIgoAAIAAivIBAAAQARgBAPAGQAQAFAJAMQAJAMABAVQgBAUgIAMQgJALgOAGIAoBHgAgdgGIAVAAQAOAAAHgGQAJgHAAgNQAAgNgJgFQgHgGgOABIgVAAg");
	this.shape_1.setTransform(252.2,125.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF0B4E").s().p("Ag3BYIAAivIBsAAIAAAhIhFAAIAAAkIA7AAIAAAgIg7AAIAAAoIBIAAIAAAig");
	this.shape_2.setTransform(235.9,125.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF0B4E").s().p("AgTBYIAAiOIgwAAIAAghICHAAIAAAhIgwAAIAACOg");
	this.shape_3.setTransform(220.6,125.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF0B4E").s().p("AgbBRQgTgKgLgUQgLgUgBgeQABgcALgUQAMgVATgMQATgKAVAAQARAAANAHQAOAGAJAKIgWAYQgHgFgHgEQgHgEgJAAQgNAAgIAHQgKAHgFANQgGANAAAQQAAAbALAPQAMAPASAAQALAAAIgEQAIgFAGgGIAXAXQgMAOgOAGQgOAGgRAAQgVABgTgLg");
	this.shape_4.setTransform(205.4,125.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DF0B4E").s().p("AAABaQghAAgSgUQgSgVAAgtIAAhdIAoAAIAABhQAAASAEAKQADAKAHAFQAHAEAIAAQAJAAAIgEQAHgFAEgKQADgKAAgSIAAhhIAnAAIAABdQAAAtgSAVQgRAUghAAIgCAAg");
	this.shape_5.setTransform(188.2,125.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DF0B4E").s().p("AAZBYIgghAIgWAAIAABAIgoAAIAAivIBAAAQARgBAPAGQAQAFAJAMQAJAMABAVQgBAUgIAMQgJALgOAGIAoBHgAgdgGIAVAAQANAAAJgGQAIgHAAgNQAAgNgIgFQgJgGgNABIgVAAg");
	this.shape_6.setTransform(171.5,125.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF0B4E").s().p("AgTBYIAAiOIgwAAIAAghICHAAIAAAhIgwAAIAACOg");
	this.shape_7.setTransform(154.8,125.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DF0B4E").s().p("AgiBVQgRgGgOgNIAXgcQAKAJALAFQAMAFAJAAQAMAAAHgEQAGgFAAgIQgBgIgGgFQgHgDgLgFIgWgKQgJgEgJgFQgIgGgFgJQgFgJAAgNQAAgPAIgMQAIgMAPgHQAOgHAQAAQAQAAAPAFQAPAHAMALIgVAZQgIgGgJgEQgJgEgLAAQgIAAgGAEQgGAEAAAIQAAAIAIAFQAHAEAKAEIAXAKQAQAGAJAKQAKALAAASQAAAPgIANQgIAMgPAIQgPAHgUAAQgRAAgRgGg");
	this.shape_8.setTransform(139.7,125.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DF0B4E").s().p("AhCBYIAAivIA9AAQAQgBAPAEQAPAEAJAKQAIAKAAARQAAAIgDAHQgDAIgHAGQgHAGgKADIAAABQAUAEAJAIQAKAKAAASQgBASgIAMQgKALgPAGQgQAFgRAAgAgaA5IAXAAQAOAAAJgGQAHgGAAgMQAAgMgHgFQgJgGgOABIgXAAgAgagQIASAAQANAAAHgGQAHgGAAgKQAAgJgHgFQgHgFgMABIgTAAg");
	this.shape_9.setTransform(124.5,125.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DF0B4E").s().p("AgoBQQgTgLgKgVQgKgUAAgcQAAgcAKgVQAKgUATgLQASgKAWAAQAYAAASAKQASALAKAUQAKAVAAAcQAAAcgKAUQgKAVgSALQgSAMgYgBQgWABgSgMgAgbgpQgLAPAAAaQAAAaALAQQAKAPARAAQASAAALgPQAKgQAAgaQAAgagKgPQgLgPgSAAQgRAAgKAPg");
	this.shape_10.setTransform(106.3,125.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DF0B4E").s().p("AAcBYIgthYIgRglIgBAAIADAgIACAeIAAA/IgmAAIAAivIApAAIAsBXIASAmIABAAIgDgfIgCggIAAg+IAmAAIAACvg");
	this.shape_11.setTransform(82.4,125.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DF0B4E").s().p("AAlBYIgLgqIg0AAIgMAqIgoAAIA3ivIAuAAIA5CvgAASAPIgFgPIgHgcIgGgdIAAAAIgHAdIgHAcIgEAPIAkAAg");
	this.shape_12.setTransform(65.5,125.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DF0B4E").s().p("AgbAcQAPgFAIgJQAGgJAAgIIgCAAIAAAAQgJAAgHgGQgGgGgBgKQABgLAGgHQAIgFAIgBQAOABAHAJQAHAKAAATQAAAUgMAQQgNAQgWAHg");
	this.shape_13.setTransform(200.4,101.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DF0B4E").s().p("AgoBRQgTgLgKgWQgKgUAAgcQAAgcAKgVQAKgUATgKQASgLAWgBQAYABASALQASAKAKAUQAKAVAAAcQAAAcgKAUQgKAWgSALQgSAKgYABQgWgBgSgKgAgbgpQgLAPAAAaQAAAaALAPQAKAQARAAQASAAALgQQAKgPAAgaQAAgagKgPQgLgOgSgBQgRABgKAOg");
	this.shape_14.setTransform(186.9,92.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DF0B4E").s().p("AAcBYIgthYIgRglIgBAAIAEAgIABAeIAAA/IgmAAIAAivIApAAIAsBXIASAmIABAAIgEgfIgBggIAAg+IAmAAIAACvg");
	this.shape_15.setTransform(168.6,92.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DF0B4E").s().p("AAeBYIAAhKIg7AAIAABKIgoAAIAAivIAoAAIAABEIA7AAIAAhEIAoAAIAACvg");
	this.shape_16.setTransform(144.8,92.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DF0B4E").s().p("AgoBRQgTgLgKgWQgKgUAAgcQAAgcAKgVQAKgUATgKQASgLAWgBQAYABASALQASAKAKAUQAKAVAAAcQAAAcgKAUQgKAWgSALQgSAKgYABQgWgBgSgKgAgbgpQgLAPAAAaQAAAaALAPQAKAQARAAQASAAALgQQAKgPAAgaQAAgagKgPQgLgOgSgBQgRABgKAOg");
	this.shape_17.setTransform(126.2,92.4);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(201.9,90,0.909,0.909,0,0,0,261.9,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,8.3,476.1,163.6);


(lib.LocalVideoPlayer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Player
	this.text = new cjs.Text("Watch this video.\n\nWhen the video is complete, click the Continue button to answer a question that may, or may not, be remotely related to this video.", "28px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 36;
	this.text.lineWidth = 300;
	this.text.parent = this;
	this.text.setTransform(16,14.4);

	this.continueButton = new lib.continueButton();
	this.continueButton.parent = this;
	this.continueButton.setTransform(821.4,363.1,1,1,0,0,0,92.8,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.continueButton},{t:this.text}]}).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape.setTransform(480,210);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,420);


(lib.LocalImageBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.background = new lib.Background();
	this.background.parent = this;
	this.background.setTransform(155.1,197.1,1,1,0,0,0,155.1,197.1);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,312.1,396.1);


(lib.Remediation_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.remText = new cjs.Text("Incorrect.", "20px 'Arial'", "#FFFFFF");
	this.remText.name = "remText";
	this.remText.textAlign = "center";
	this.remText.lineHeight = 24;
	this.remText.lineWidth = 937;
	this.remText.parent = this;
	this.remText.setTransform(479.5,197);

	this.timeline.addTween(cjs.Tween.get(this.remText).wait(1));

	// Button
	this.remContinueButton = new lib.continueButton();
	this.remContinueButton.parent = this;
	this.remContinueButton.setTransform(843.4,385.1,1,1,0,0,0,92.8,27.3);

	this.timeline.addTween(cjs.Tween.get(this.remContinueButton).wait(1));

	// Background 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E1511","#E92D1E"],[0,1],0,69,0.1,-68.9).s().p("EhK/ALFIAA2JMCV/AAAIAAWJg");
	this.shape.setTransform(480,211);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EhK+AKyIAA1jMCV9AAAIAAVjg");
	this.shape_1.setTransform(480,351);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EhK+AK8IAA13MCV9AAAIAAV3g");
	this.shape_2.setTransform(480,70);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.749)").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape_3.setTransform(480,210);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,420);


(lib.arrowanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_19 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.daarrow();
	this.instance.parent = this;
	this.instance.setTransform(-87.5,6.3,1,1,0,0,0,12.5,6.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-56.8,alpha:1},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,0,25,12.5);


(lib.ScoreCard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Next Arrow
	this.nextArrow = new lib.arrowanimation();
	this.nextArrow.parent = this;
	this.nextArrow.setTransform(14.3,411.4,1,1,0,0,0,-87.5,6.3);

	this.timeline.addTween(cjs.Tween.get(this.nextArrow).wait(1));

	// Text
	this.scoreText = new cjs.Text("Score Card Text is displayed here.", "24px 'Myriad Pro'", "#FFFFFF");
	this.scoreText.name = "scoreText";
	this.scoreText.textAlign = "center";
	this.scoreText.lineHeight = 31;
	this.scoreText.lineWidth = 575;
	this.scoreText.parent = this;
	this.scoreText.setTransform(503.5,160);

	this.timeline.addTween(cjs.Tween.get(this.scoreText).wait(1));

	// Background 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E1511").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape.setTransform(480,210);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape_1.setTransform(480,210);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,420);


// stage content:
(lib.level1Boss = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Start:165,MultipleChoiceIn:172,MultipleChoiceOut:181,MultipleSelectIn:194,MultipleSelectOut:211,Fail:231,Outro:244});

	// timeline functions:
	this.frame_1 = function() {
		var debug = false;
				
		this.stop();
		
		this.activity = null;
		
		$.getScript('../../../Source/XM/Activities/CreateJS/QuizActivity.js', function() {
			if(debug)
				root.gotoAndPlay('Start');
			else
				root.play();
		}.bind(this));
	}
	this.frame_2 = function() {
		// Stop until boss is triggered.
		this.stop();
		
		stage.enableMouseOver()
		
		this.questionData = [
			//Question 1
			{ question: '"The fossil fuel industry doesn’t care about the environment!"',
				instructions: '',
				type: QuestionType.MultipleChoice,
				answers: [
					'Well, that’s just not true at all!',
					'It’s not that we don’t care, but if you want to keep living like you do, carbon emissions are just part of doing business.',
					'Our industry has invested hundreds of billions of dollars to reduce emissions and improve its environmental performance, so we definitely care about making progress.'
				],
				remediation: {
					right: "YOU GOT IT!",
					wrong: "TRY AGAIN!"
				},
				correct: [3]
			},
			//Question 2
			{ question: '"We don’t need oil and gas! Let’s shift all of our focus to making renewable energies. They can supply all of our needs."',
				instructions: '',
				type: QuestionType.MultipleChoice,
				answers: [
					'Nearly half of the people worldwide are still living in poverty because they do not have access to energy. There is still a huge need for this basic energy, and renewable energy alone cannot meet this need.',
					'Renewable energy will be our primary source of energy before you know it.',
					'Renewable energy doesn’t create as many jobs as the fossil fuel industry, so we shouldn’t shift focus just yet.'
				],
				remediation: {
					right: "AWESOME!",
					wrong: "TRY AGAIN!"
				},
				correct: [1]
			},
			//Question 3
			{ question: '"We can shift to renewable energy as our primary source within the next 20 years!"',
				instructions: '',
				type: QuestionType.MultipleChoice,
				answers: [
					'Renewable energy already IS our primary source of energy!',
					'Studies show that oil and gas will be the primary source of energy for decades to come because not only are they necessary to produce renewable energy, but they’re also the most affordable, reliable energy sources.',
				    'The fossil fuel industry produces 98% of the world’s energy. There is no way we can make that shift in 20 years.'
				],
				remediation: {
					right: "THAT'S RIGHT!",
					wrong: "TRY AGAIN!"
				},
				correct: [2]
			}
			/*,	//Question 4
			{ question: 'While reviewing your Totals page, you notice that the revised trend is 6% less than the actual trend. What is one step you could take to correct this?',
				instructions: '',
				type: QuestionType.MultipleChoice,
				answers: [
					'Review Totals page',
					'Review brand totals page',
					'Revise PDCN-level forecasts',
					'All of the above'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [3]
			},
			//Question 5
			{ question: 'Where can you go to review new product STR date information?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'Order Log',
					'Totals Page',
					'Worksheet',
					'Splash Page'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [4]
			},
			//Question 6
			{ question: 'What factor should NOT be considered when adjusting forecasts?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'Sales Trend Versus Last Year',
					'Promotions',
					'Current Inventory',
					'Upcoming Holidays'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [3]
			},
			//Question 7
			{ question: 'You submitted an accurate forecast change that was deferred and ultimately rejected. What should you do to discuss this deferral?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'Contact Field Sales',
					'Contact the Demand Planning Team',
					'Contact the Wholesaler Support Group',
					'Do nothing; all changes are final'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [2]
			},
			//Question 8
			{ question: "A PDCN's forecast is highlighted in yellow for next week (Week 1), indicating a Special Packaging deferral. Can you make any changes to forecasts for that week?",
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'Yes, all changes are allowed',
					'Yes, but only by increasing the forecast amount',
					'Yes, but only by decreasing the forecast amount',
					'No, Special Packaging Deferrals do not allow forecast changes'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [3]
			},
			//Question 9
			{ question: 'AB is rolling out a new product that your location will not carry. After confirming with your DM and NRS KAM that there are no chain commitments for the item, how should you proceed?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'Zero out the forecast',
					'Submit a death request',
					'Refuse orders containing that item',
					'Add Comments to the Worksheet'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [2]
			},
			//Question 10
			{ question: 'Days of Inventory (DOI) are calculated using what information?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					"Last year's sales for the same period",
					'Average Sales Past Six Weeks',
					'Future Forecasted Sales',
					'Brewery Inventory'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [3]
			},
			//Question 11
			{ question: 'True or false – Days of inventory are calculated in calendar days.',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'True',
					'False'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [2]
			},
			//Question 12
			{ question: 'You have 10,000 cases of Bud Light 30-pack cans on the floor. Your historical average sales rate is 1,000 cases/week. Your future forecasted sales are 5,000 cases/week. What is your current days of inventory?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'5 days',
					'10 days',
					'28 days',
					'50 days'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [2]
			},
			//Question 13
			{ question: 'What factors are taken into account when AB plans the Min/Max range for a particular PDCN?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'Brewery Production Schedule',
					'Shelf Life',
					'Supply Constraints',
					'All of the Above'
				],
				remediation: {
					right: "",
					wrong: ""
				},
				correct: [4]
			}
			/*,
			{ question: 'Just like fire compartments, flood compartments are identified by numbers, but they follow a different convention.',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'True',
					'False'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1]
			},
			{ question: 'How are fire compartments identified?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'Deck, Zone, Protection, Consecutive Number',
					'Zone, Deck, Protection, Consecutive Number',
					'Consecutive Number, Protection, Zone, Deck',
					'Deck, Protection, Zone, Consecutive Number'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1]
			},
			{ question: 'The Casualty Threshold for flooding is defined as "flooding of any single watertight compartment"?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'True',
					'False'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1]
			},
			{ question: 'What are considered essential systems that need to remain operational? (Check all that apply)',
				instructions: '',
				capSelections: false,
				type: QuestionType.MultipleSelect,
				answers: [
					'Propulsion',
					'Steering',
					'Navigation',
					'Fuel oil',
					'Galley'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1, 2, 3, 4]
			},
			{ question: 'The A/C compressor is considered a critical system?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'True',
					'False'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1]
			},
			{ question: 'Safe areas include regulations on the following (check all that apply):',
				instructions: '',
				capSelections: false,
				type: QuestionType.MultipleSelect,
				answers: [
					'Space',
					'Toilets',
					'Water and Food',
					'Medical Treatment',
					'Routes to Life-Saving Appliances'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1, 2, 3, 4, 5]
			},
			{ question: 'Systems will support an orderly evacuation for how long?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'At least 3 hours',
					'12 hours',
					'At least 2 hours',
					'At least 6 hours'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1]
			},
			{ question: 'Safe Return to Port changes Princess’ existing emergency response procedures.',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'True',
					'False'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [2]
			},
			{ question: 'How much water is each person onboard entitled to during Safe Return to Port?',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'5 liters',
					'2 gallons',
					'3 liters',
					'2 liters'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [3]
			},
			{ question: 'In a fire compartment identification number, the letter "P" indicates that the space is fitted with a Water Mist system.',
				instructions: '',
				type: QuestionType.MultipleSelect,
				answers: [
					'True',
					'False'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [2]
			},
			{ question: 'If a fire compartment identification number contains the letter "A" it means: (Check all that apply)',
				instructions: '',
				type: QuestionType.MultipleSelect,
				capSelections: false,
				answers: [
					'The space contains fire detectors',
					'The space will be considered lost up to the first A Class Bulkhead',
					'The space will be considered lost up to the second A Class Bulkhead'
				],
				remediation: {
					right: "That's Right!",
					wrong: "Sorry, Try Again!"
				},
				correct: [1, 3]
			}*/
		];
			
		this.options = {
			capSelections: true,
			htmlText: false,
			hasRemediation: true,
			/*questionWidth: 776,
			questionHeight: 47,
			answerWidth: 750,
			answerHeight: 20,*/
			/*onWrongAction: QuizAction.Continue,*/
			questions: this.questionData,
			//minScore: 80,
			finishWrongAction: function() {
				root.gotoAndPlay('Fail');
			}
		}
		this.correctAnswers = 0;
	}
	this.frame_3 = function() {
		/*playSoundThenResume('L2S10_01');*/
	}
	this.frame_7 = function() {
		playSound("Videogameascendsfasthigh_BLASTWAVEFX_30414_kpLowerFade");
	}
	this.frame_8 = function() {
		playSound("intro1");
	}
	this.frame_94 = function() {
		playSound("intro2");
	}
	this.frame_165 = function() {
		this.activity = new QuizActivity(this.options);
		 this.activity.Start();
	}
	this.frame_172 = function() {
		var q = this.activity.Question();
		
		this.activity.LoadQuestion();
	}
	this.frame_180 = function() {
		this.stop();
		this.activity.ActivateQuestion();
	}
	this.frame_189 = function() {
		this.stop();
		this.sign.play();
		this.activity.NextQuestion();
	}
	this.frame_194 = function() {
		var q = this.activity.Question();
		
		this.activity.LoadQuestion();
	}
	this.frame_210 = function() {
		this.stop();
		this.activity.ActivateQuestion();
	}
	this.frame_228 = function() {
		this.stop();
		this.activity.NextQuestion();
	}
	this.frame_243 = function() {
		this.stop();
	}
	this.frame_244 = function() {
		/*if(parent.AppSettings.hasCertificate) {
			playSound('OutroCert');
			this.certText.field.text = "Congratulations!\nYou have successfully completed the Safe Return to Port eLearning course.\nPlease select this link (Certificate) to record then select this link to exit."
		} else {
			playSound('Outro');
			this.certText.field.text = "Congratulations!\nYou have successfully completed the Safe Return to Port eLearning course.\nPlease click this link to exit."
		}*/
	}
	this.frame_251 = function() {
		playSound("_8bitarcadevideogamestartsoundeffectgunreloadandjump");
		playSound("conclusion");
	}
	this.frame_457 = function() {
		this.stop();
		
		/*LMS.SaveToSuspendData('i_1', true);
		Shell.UpdateIcons();
		Slide.Complete();*/
		
		window.game.state.getCurrentState().OnBossComplete()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(4).call(this.frame_7).wait(1).call(this.frame_8).wait(86).call(this.frame_94).wait(71).call(this.frame_165).wait(7).call(this.frame_172).wait(8).call(this.frame_180).wait(9).call(this.frame_189).wait(5).call(this.frame_194).wait(16).call(this.frame_210).wait(18).call(this.frame_228).wait(15).call(this.frame_243).wait(1).call(this.frame_244).wait(7).call(this.frame_251).wait(206).call(this.frame_457).wait(1));

	// Remediation
	this.remediation = new lib.Remediation();
	this.remediation.parent = this;
	this.remediation.setTransform(483,208,1,1,0,0,0,483,208);
	this.remediation._off = true;

	this.timeline.addTween(cjs.Tween.get(this.remediation).wait(180).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(247));

	// prompt
	this.instance = new lib.prompt();
	this.instance.parent = this;
	this.instance.setTransform(291.4,241.3,1,1,0,0,0,239.4,18.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(172).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(2).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(269));

	// sign
	this.sign = new lib.sign();
	this.sign.parent = this;
	this.sign.setTransform(834.8,396.4,1,1,0,0,0,206.2,232.8);
	this.sign._off = true;

	this.timeline.addTween(cjs.Tween.get(this.sign).wait(172).to({_off:false},0).to({_off:true},18).wait(268));

	// Question
	this.question = new lib.Question();
	this.question.parent = this;
	this.question.setTransform(520.7,-142.6,1,1,0,0,0,468,25.4);
	this.question._off = true;

	this.timeline.addTween(cjs.Tween.get(this.question).wait(172).to({_off:false},0).to({y:67.4},7,cjs.Ease.get(1)).wait(2).to({x:-159.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(5).to({_off:false,x:808.7,y:-52.6},0).wait(2).to({y:67.4},12,cjs.Ease.get(1)).wait(5).to({y:-52.6},12).to({_off:true},3).wait(230));

	// Submit
	this.btnSubmit = new lib.SubmitButton();
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(1387.4,284.8,1,1,0,0,0,60,13.2);
	this.btnSubmit._off = true;
	this.btnSubmit.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(180).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false,x:802.8,y:368.1},0).to({_off:true},1).wait(247));

	// Answer A
	this.btn1 = new lib.Answer();
	this.btn1.parent = this;
	this.btn1.setTransform(-178,289.3,1,1,0,0,0,462,13.2);
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(172).to({_off:false},0).to({x:496.7},7,cjs.Ease.get(1)).wait(2).to({x:-183.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(5).to({_off:false,x:1438.7,y:145.8},0).wait(2).to({x:790.7},4,cjs.Ease.get(1)).wait(21).to({x:1438.7},4,cjs.Ease.get(1)).to({_off:true},3).wait(230));

	// Answer B
	this.btn2 = new lib.Answer();
	this.btn2.parent = this;
	this.btn2.setTransform(-178,432.6,1,1,0,0,0,462,13.2);
	this.btn2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(172).to({_off:false},0).to({x:496.7},7,cjs.Ease.get(1)).wait(2).to({x:-183.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(5).to({_off:false,x:1438.7,y:190.7},0).wait(4).to({x:790.7},4,cjs.Ease.get(1)).wait(17).to({x:1438.7},4,cjs.Ease.get(1)).to({_off:true},5).wait(230));

	// Answer C
	this.btn3 = new lib.Answer();
	this.btn3.parent = this;
	this.btn3.setTransform(-178,575.9,1,1,0,0,0,462,13.2);
	this.btn3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(172).to({_off:false},0).to({x:496.7},7,cjs.Ease.get(1)).wait(2).to({x:-183.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(5).to({_off:false,x:1438.7,y:235.6},0).wait(6).to({x:790.7},4,cjs.Ease.get(1)).wait(13).to({x:1438.7},4,cjs.Ease.get(1)).to({_off:true},7).wait(230));

	// Layer 4
	this.instance_1 = new lib.fade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(644,361.2,1,1,0,0,0,644,361.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165).to({_off:false},0).to({alpha:0.75},7,cjs.Ease.get(1)).wait(72).to({alpha:0},7).to({_off:true},1).wait(206));

	// Background
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(480,210,1,1,0,0,0,480,210);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(231).to({_off:false},0).to({alpha:0},4).to({_off:true},1).wait(222));

	// Layer 10
	this.retryBtn = new lib.retryBtn();
	this.retryBtn.parent = this;
	this.retryBtn.setTransform(616.1,325.6,1,1,0,0,0,211,100.6);

	this.introTxt = new lib.introTxtcopy();
	this.introTxt.parent = this;
	this.introTxt.setTransform(475.7,159.1,1,1,0,0,0,245.3,23.8);

	this.instance_3 = new lib.endtext();
	this.instance_3.parent = this;
	this.instance_3.setTransform(639.3,875.8,1,1,0,0,0,640,473.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.introTxt},{t:this.retryBtn}]},231).to({state:[]},13).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},2).wait(202));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(248).to({_off:false},0).to({y:230.9},6,cjs.Ease.get(1)).to({y:240.3},2,cjs.Ease.get(1)).wait(202));

	// Outro Stuff
	this.instance_4 = new lib.white();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640,239.8,1,1,0,0,0,640,240.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(245).to({_off:false},0).to({alpha:1},7,cjs.Ease.get(1)).wait(206));

	// Layer 8
	this.instance_5 = new lib.obstructor();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1666.6,359.4,1,1,0,0,0,375.4,339.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.defeat();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1036,414.9,1,1,0,0,0,163.6,206.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},228).wait(214));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({x:874.6},7,cjs.Ease.get(1)).to({x:886.6},2,cjs.Ease.get(1)).to({_off:true},228).wait(214));

	// Layer 6
	this.instance_7 = new lib.cloud();
	this.instance_7.parent = this;
	this.instance_7.setTransform(280.5,179.8,0.084,0.084,0,0,0,203.5,97.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({regX:203.3,regY:97.2,scaleX:1.03,scaleY:1.03},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:280.4},2,cjs.Ease.get(1)).wait(151).to({regX:261.9,regY:90,x:339,y:172.6},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280.4,720);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;