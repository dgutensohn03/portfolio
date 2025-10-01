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
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap1.png", id:"Bitmap1"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap2.png", id:"Bitmap2"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap3.png", id:"Bitmap3"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap4.png", id:"Bitmap4"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap5.png", id:"Bitmap5"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap6.png", id:"Bitmap6"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap7.png", id:"Bitmap7"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap8.png", id:"Bitmap8"},
		{src:"../../Assets/Images/Lesson1/Slide4/Bitmap9.png", id:"Bitmap9"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_barrels_1.png", id:"bonusRound1_barrels_1"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_barrels_2.png", id:"bonusRound1_barrels_2"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_barrels_3.png", id:"bonusRound1_barrels_3"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_barrels_4.png", id:"bonusRound1_barrels_4"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_barrels_5.png", id:"bonusRound1_barrels_5"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_bkgd.png", id:"bonusRound1_bkgd"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_higherArrow.png", id:"bonusRound1_higherArrow"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_lowerArrow.png", id:"bonusRound1_lowerArrow"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_ppb.png", id:"bonusRound1_ppb"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_priceTag.png", id:"bonusRound1_priceTag"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound1_priceTag_small.png", id:"bonusRound1_priceTag_small"},
		{src:"../../Assets/Images/Lesson1/Slide4/bonusRound_introTxt.png", id:"bonusRound_introTxt"},
		{src:"../../Assets/Sounds/Lesson1/Slide4/_368691__fartbiscuit1700__8bitarcadevideogamestartsoundeffectgunreloadandjump_kpLowered.mp3", id:"_368691__fartbiscuit1700__8bitarcadevideogamestartsoundeffectgunreloadandjump_kpLowered"},
		{src:"../../Assets/Sounds/Lesson1/Slide4/conclusion.mp3", id:"conclusion"},
		{src:"../../Assets/Sounds/Lesson1/Slide4/intro1.mp3", id:"intro1"},
		{src:"../../Assets/Sounds/Lesson1/Slide4/intro2.mp3", id:"intro2"},
		{src:"../../Assets/Sounds/Lesson1/Slide4/Videogamearpeggioascendinghigh_BLASTWAVEFX_30404_kpLower.mp3", id:"Videogamearpeggioascendinghigh_BLASTWAVEFX_30404_kpLower"},
		{src:"../../Assets/Sounds/Lesson1/Slide4/Videogamearpeggiodescend_BLASTWAVEFX_30405_kpLower.mp3", id:"Videogamearpeggiodescend_BLASTWAVEFX_30405_kpLower"}
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
p.nominalBounds = new cjs.Rectangle(0,0,1008,32);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,43);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bonusRound1_barrels_1 = function() {
	this.initialize(img.bonusRound1_barrels_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,520);


(lib.bonusRound1_barrels_2 = function() {
	this.initialize(img.bonusRound1_barrels_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,435,520);


(lib.bonusRound1_barrels_3 = function() {
	this.initialize(img.bonusRound1_barrels_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,433,520);


(lib.bonusRound1_barrels_4 = function() {
	this.initialize(img.bonusRound1_barrels_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,435,520);


(lib.bonusRound1_barrels_5 = function() {
	this.initialize(img.bonusRound1_barrels_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,520);


(lib.bonusRound1_bkgd = function() {
	this.initialize(img.bonusRound1_bkgd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bonusRound1_higherArrow = function() {
	this.initialize(img.bonusRound1_higherArrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.bonusRound1_lowerArrow = function() {
	this.initialize(img.bonusRound1_lowerArrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.bonusRound1_ppb = function() {
	this.initialize(img.bonusRound1_ppb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,611,100);


(lib.bonusRound1_priceTag = function() {
	this.initialize(img.bonusRound1_priceTag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,557,314);


(lib.bonusRound1_priceTag_small = function() {
	this.initialize(img.bonusRound1_priceTag_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,78);


(lib.bonusRound_introTxt = function() {
	this.initialize(img.bonusRound_introTxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1180,145);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bonusRound1_ppb();
	this.instance.parent = this;
	this.instance.setTransform(-305.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.5,-50,611,100);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bonusRound1_ppb();
	this.instance.parent = this;
	this.instance.setTransform(-305.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.5,-50,611,100);


(lib.Symbol2copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgvuATiMAAAgnDMBfdAAAMAAAAnDg");
	this.shape.setTransform(305.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgvuATiMAAAgnDMBfdAAAMAAAAnDg");
	this.shape.setTransform(305.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgvuATiMAAAgnDMBfdAAAMAAAAnDg");
	this.shape.setTransform(305.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.remText = new cjs.Text("Correct.", "bold 40px 'Source Sans Pro'", "#FFFFFF");
	this.remText.name = "remText";
	this.remText.textAlign = "center";
	this.remText.lineHeight = 52;
	this.remText.lineWidth = 566;
	this.remText.parent = this;
	this.remText.setTransform(285,2);

	this.timeline.addTween(cjs.Tween.get(this.remText).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,570,200);


(lib.smallTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiOjKIBegHIAYFNIChgLIAGBPIkAASg");
	this.shape.setTransform(126.5,54.3,0.25,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiSjFIECgSIAFBPIijALIAFBUICMgKIAFBMIiLAKIAGBgICrgNIAFBPIkIATg");
	this.shape_1.setTransform(117.9,54.7,0.25,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiyjIICWgKQBHgGAqAZQAxAdAFBFQAGBXhHAkIBpCfIhpAIIhYiQIgzAEIAKCVIheAGgAgfiIIgvAEIAIB0IAwgDQBJgGgEg9QgCgegVgLQgPgJgaAAIgOAAg");
	this.shape_2.setTransform(108.9,55.5,0.25,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiyjIICWgLQCegLAJCBQADAsgSAhQgRAcghASIBpCfIhpAIIhYiQIgzADIAKCWIheAGgAgfiIIgvAEIAIB0IAvgDQAjgDATgRQASgRgCgeQgCgegVgMQgPgIgaAAIgOAAg");
	this.shape_3.setTransform(99.2,56.2,0.25,0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhUjOIBugIICgGTIhkAHIgghgIh9AIIgTBlIhfAGgAgygDIgHAlIBXgGIgNgkIgpiDIgCAAQgKBFgOBDg");
	this.shape_4.setTransform(89.7,56.8,0.25,0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AinjIICOgKQBGgFAnATQAuAWAEA4QACAegPAZQgSAcghALIAAADQBbAKAGBPQAFA9gtAjQgpAghIAFIiYALgAgEAVIg0ADIAHBtIAygEQBOgFgEg5QgDgvhAAAIgMABgAgXiKIgtADIAHBfIArgDQBBgFgEgyQgCgXgRgKQgNgHgVAAIgNAAg");
	this.shape_5.setTransform(80.2,57.5,0.25,0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AixjIICUgLQCfgLAJCBQAFBWhGAlIBpCfIhpAHIhYiPIgzADIAKCWIheAGgAgfiIIgvADIAIB1IAwgEQAjgCARgRQATgRgCgfQgCgdgVgMQgPgIgaAAIgOAAg");
	this.shape_6.setTransform(67.4,58.4,0.25,0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiSjFIECgSIAFBPIikAMIAGBTICLgKIAGBMIiLAKIAGBgICrgNIAFBPIkIATg");
	this.shape_7.setTransform(57.9,58.9,0.25,0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AigjIICYgLQBIgFAqAaQAyAeAFBHQAEBGgtAnQgpAkhGAFIg4AEIAKCNIheAGgAgJiIIg0AEIAJB9IA0gEQBJgFgEhCQgCgggUgMQgRgKgdAAIgKAAg");
	this.shape_8.setTransform(48.7,59.7,0.25,0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjqD1ICjgLIgemuIiNAJIgHhrQA6gPAsgVQAogRAngcIB+gJIAqJeICMgKIAKCNInaAhg");
	this.shape_9.setTransform(121.4,29.7,0.25,0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AixFYQhOg0gGhbQgIh0B6hNIAAgEQgygfgbglQgfgtgEg3QgHheBAg+QA9g8BqgHQBlgHBCAzQBDA0AGBdQAEAzgbAvQgXAqgoAfIAAAFQCHA6AIB+QAHBahFA/QhGBBh2AIIgcABQheAAhDgtgAhmBoQgOAiACAhQAEAwAkAbQAiAZAvgDQAtgDAZgZQAbgbgDgtQgEgtgtgbQgbgRhZgfQgZAagNAegAgekLQgkADgVAXQgXAZADApQADArAlAbQAdAVBBAVQAqg4gDg5QgDgsgagZQgYgWgjAAIgIAAg");
	this.shape_10.setTransform(105.6,30.7,0.25,0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhEBTQgggdgDguQgEgtAcgiQAcghAtgDQArgEAgAeQAgAdADAvQAEAsgcAhQgcAhgtAEIgHAAQgnAAgdgag");
	this.shape_11.setTransform(93.6,38.5,0.25,0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjyEjQCkiyA1hKQBShwgFhIQgEg2gegcQgdgbgxADQglADgiAaQgZATgfAmIhlhWQA2hCA1gfQA6giBOgGQBsgIBJA9QBJA9AHBrQAHBVhDBwQguBOhpCAQBKgPAxgEICXgKIAKCSIoMAlg");
	this.shape_12.setTransform(80.8,32.5,0.25,0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAqDIIlCAXIgIh3IDynUIDRgPIAfG0IBWgGIAJCEIhVAGIAMCzIiiAMgAAPjbQgNAjglBgIhZCoICdgMIgJh3QgBgXgEiRg");
	this.shape_13.setTransform(65.5,33.3,0.25,0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfGFQg3gCg4gTQg8gUgrgiIBEh6QAwAgApANQAqAPAqgDQAvgDAWgWQAWgWgDgpQgDgngzgfQgMgHhhgsQhLghglghQg1gxgFhHQgGhWAsg+QAsg8BSgXIgIh5IBwgIIAJB3QBiAHBUBNIhQBpQgkgcgdgMQgggMgiACQhXAGAFBMQADAkAyAbQAeAQBPAfQBLAgAlAjQA1AyAFBNQAGBWgqA/QgsBAhYAaIAJB6IhxAIg");
	this.shape_14.setTransform(49.8,34.6,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnEE9IgZkiIgZkgQAAgBHcgbIHagbIAcEbIAbEZIneAiIndAjIAAAAg");
	this.shape_15.setTransform(86.7,44.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 1
	this.instance = new lib.bonusRound1_priceTag_small();
	this.instance.parent = this;
	this.instance.setTransform(0,9.7,1.007,1.006,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144,88);


(lib.oilPriceTag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiOjKIBegHIAYFNIChgLIAGBPIkAASg");
	this.shape.setTransform(500.4,215.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiSjFIECgSIAFBPIijALIAFBUICMgKIAFBMIiLAKIAGBgICrgNIAFBPIkIATg");
	this.shape_1.setTransform(466.1,217.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiyjIICWgKQBHgGAqAZQAxAdAFBFQAGBXhHAkIBpCfIhpAIIhYiQIgzAEIAKCVIheAGgAgfiIIgvAEIAIB0IAwgDQBJgGgEg9QgCgegVgLQgPgJgaAAIgOAAg");
	this.shape_2.setTransform(430.2,220.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiyjIICWgLQCegLAJCBQADAsgSAhQgRAcghASIBpCfIhpAIIhYiQIgzADIAKCWIheAGgAgfiIIgvAEIAIB0IAvgDQAjgDATgRQASgRgCgeQgCgegVgMQgPgIgaAAIgOAAg");
	this.shape_3.setTransform(391.1,223.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhUjOIBugIICgGTIhkAHIgghgIh9AIIgTBlIhfAGgAgygDIgHAlIBXgGIgNgkIgpiDIgCAAQgKBFgOBDg");
	this.shape_4.setTransform(353.1,225.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AinjIICOgKQBGgFAnATQAuAWAEA4QACAegPAZQgSAcghALIAAADQBbAKAGBPQAFA9gtAjQgpAghIAFIiYALgAgEAVIg0ADIAHBtIAygEQBOgFgEg5QgDgvhAAAIgMABgAgXiKIgtADIAHBfIArgDQBBgFgEgyQgCgXgRgKQgNgHgVAAIgNAAg");
	this.shape_5.setTransform(315.3,228.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AixjIICUgLQCfgLAJCBQAFBWhGAlIBpCfIhpAHIhYiPIgzADIAKCWIheAGgAgfiIIgvADIAIB1IAwgEQAjgCARgRQATgRgCgfQgCgdgVgMQgPgIgaAAIgOAAg");
	this.shape_6.setTransform(264.1,232.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiSjFIECgSIAFBPIikAMIAGBTICLgKIAGBMIiLAKIAGBgICrgNIAFBPIkIATg");
	this.shape_7.setTransform(226.2,234.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AigjIICYgLQBIgFAqAaQAyAeAFBHQAEBGgtAnQgpAkhGAFIg4AEIAKCNIheAGgAgJiIIg0AEIAJB9IA0gEQBJgFgEhCQgCgggUgMQgRgKgdAAIgKAAg");
	this.shape_8.setTransform(189.1,237.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjqD1ICjgLIgemuIiNAJIgHhrQA6gPAsgVQAogRAngcIB+gJIAqJeICMgKIAKCNInaAhg");
	this.shape_9.setTransform(480,117.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AixFYQhOg0gGhbQgIh0B6hNIAAgEQgygfgbglQgfgtgEg3QgHheBAg+QA9g8BqgHQBlgHBCAzQBDA0AGBdQAEAzgbAvQgXAqgoAfIAAAFQCHA6AIB+QAHBahFA/QhGBBh2AIIgcABQheAAhDgtgAhmBoQgOAiACAhQAEAwAkAbQAiAZAvgDQAtgDAZgZQAbgbgDgtQgEgtgtgbQgbgRhZgfQgZAagNAegAgekLQgkADgVAXQgXAZADApQADArAlAbQAdAVBBAVQAqg4gDg5QgDgsgagZQgYgWgjAAIgIAAg");
	this.shape_10.setTransform(416.9,121.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhEBTQgggdgDguQgEgtAcgiQAcghAtgDQArgEAgAeQAgAdADAvQAEAsgcAhQgcAhgtAEIgHAAQgnAAgdgag");
	this.shape_11.setTransform(368.7,152.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjyEjQCkiyA1hKQBShwgFhIQgEg2gegcQgdgbgxADQglADgiAaQgZATgfAmIhlhWQA2hCA1gfQA6giBOgGQBsgIBJA9QBJA9AHBrQAHBVhDBwQguBOhpCAQBKgPAxgEICXgKIAKCSIoMAlg");
	this.shape_12.setTransform(317.5,128.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAqDIIlCAXIgIh3IDynUIDRgPIAfG0IBWgGIAJCEIhVAGIAMCzIiiAMgAAPjbQgNAjglBgIhZCoICdgMIgJh3QgBgXgEiRg");
	this.shape_13.setTransform(256.4,131.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfGFQg3gCg4gTQg8gUgrgiIBEh6QAwAgApANQAqAPAqgDQAvgDAWgWQAWgWgDgpQgDgngzgfQgMgHhhgsQhLghglghQg1gxgFhHQgGhWAsg+QAsg8BSgXIgIh5IBwgIIAJB3QBiAHBUBNIhQBpQgkgcgdgMQgggMgiACQhXAGAFBMQADAkAyAbQAeAQBPAfQBLAgAlAjQA1AyAFBNQAGBWgqA/QgsBAhYAaIAJB6IhxAIg");
	this.shape_14.setTransform(193.6,136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 17
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A8VT1QgBgBhjyGQhjyFgBgBQgCgEdyhsIduhsQgBAABvRrQBwRqgBgBI96CLQ9pCLgPAAIgBgBgAcBz0IAAAAIAAAAg");
	this.shape_15.setTransform(341.3,175.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer 16
	this.instance = new lib.bonusRound1_priceTag();
	this.instance.parent = this;
	this.instance.setTransform(-5.5,37.4,1,1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.5,577.6,352.1);


(lib.instructions2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(243,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5CA8").s().p("Ehj/AGQIAAsfMDH+AAAIAAMfg");
	this.shape.setTransform(640,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,80);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtNYHQjCgchNhCIhng5Qhqg5gsgfQhIgxgvg7QgzhCgihdQghhdgXiSQgmjnjRklQiRjNjRjPQhGhGgch1Qh/h6hQh4QhvingBiKIAAgfQgChAABgmQADhDALg2QAiimB3hJQBehHChgkQDRguEYgZQEZgZE+AAQI9AAI1BQQJtBYH3CvIAGAAQBIAABmAQQDGAgDJAwQDKAwCqA3QDeBJCFBLQCGBKAzBQQAuBJgPBNQgEBOAABqIAAAUQABBTADBbQADB5AABEIAAAIQgBBpgGBIIAAABIAAADIAAACQgFA0gJAzIgDATQgKA1gNAsIgBAFIAAAAIAAABQgNArgXA3IgJAVQgbA5gYAnQhcCRieB0Qg+AuhEAmQinBhiDAAQgjAAghgHIgDAAIgYgHIgDAAIgDgCIgDAAQiCglhZgpQhZgpg+g0QiUh8gPjJQglDthNDBQh2Eoi6BqQggATgpAQQgPAGgJACIgUAHIgjAMIgGACQgiAKgzAMIgRAEQg7ANg7ALQkeA0lfANQhnAEhWAAQjyAAirgagA7G2jQkPAYjHAtQiPAghNA7QheA3gXCSQgHAyABCgQABB7B7CnQBNBoBuBnQATBtA6A6QDBDBCPC/QD5FSArEMQAZCZAkBaQAiBWA4A3QAtAuBYAyQA1AfCJBLQAyAyCxAbQChAYDtAAQBVAABlgEQFWgNEYgyQBEgNAugKIAQgFQAsgKAlgLIAFgBIAogOIAegKQAigNAagPQCfhcBrkRQBOjKAgjuQAKhVAAguQAAguAugvQAqgrBDgfIANA3QAMBaAACpQAAC3CBBsQBoBXDpBBIADABIAXAGQAUAFAbAAQBoAACQhTQBEgoA0gmQCRhqBQiAQAXgkAWgxIAIgSQAVgxALgnIABgDQAKgjALg2IADgRQAHgsAFg1IAAgBQAHhOAAheIAAgIQAAg6gDiAQgDhfgBhRIAAgUQgBhqAFheQApiQm7ijQl2iKnihMQhhgPg9AAIgWAAQnyivpwhZQoqhPo6AAQk8AAkYAZgAuEhbQoDg+mBkRQhPg4iRh8QhbhPgfAAQgHAAgGADQgygmg7g7Qh1h1gphmQBGgzCUgjQF1hYI5AAQKHAAL5BsQKOBcE8BlQBFAxBrAsQDLBTEJCyQhVAfhsAiQncCXo+BrQqGB5nDAAQilAAiXgSgEgiJgPbQg+APgqAQQA+BWBlBXQApAFAuAgQAdAUBJA+QDGCsCqBcQEuCkF7AtQCQASCgAAQGzAAJ1h0QI5hqHciWQiZhbh6gxQhqgshMgzQk8hhp4hZQruhqp8AAQouAAlpBVg");
	this.shape.setTransform(265,156.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,530,313.9);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Am6KyQi4i4AAkEQAAioBUiPIGoreQAUgjAfgTQAggUAjAAQAkAAAfAUQAgATAUAjIGoLeQBUCPAACoQAAEEi4C4Qi4C4kDAAQkCAAi4i4gAggrtImnLeQhHB4AACNQAADaCbCbQCaCbDZAAQDZAACbibQCbibAAjaQAAiNhHh4ImoreQgNgYgTAAQgSAAgOAYg");
	this.shape.setTransform(62.7,87.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.5,174.9);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AkKJZIAA04IIVAAIAAW/Qk9gxjYhWg");
	this.shape.setTransform(26.7,73.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.5,147.3);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AkKJZIAA04IIVAAIAAW/Qk9gxjYhWg");
	this.shape.setTransform(26.7,73.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.5,147.3);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AkKJYIAA03IIVAAIAAW/Qk+gyjXhWg");
	this.shape.setTransform(26.7,73.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.5,147.3);


(lib.fade2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.addEventListener('click', function() {
				XMLog('BLOCKER');
			})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehj/A4QMAAAhwfMDH+AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bonusRoundIntroTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bonusRound_introTxt();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1180,145);


(lib.blueRem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AFAEdQhKgsgrhLQgrhMgBhdQABhcArhKQArhJBKgrQBLgrBfgBQBgABBKArQBLArAqBJQArBKABBcQgBBdgrBMQgqBLhLAsQhKAshgABQhfgBhLgsgAGAjEQgvAdgcAyQgcAzgBA/QABBBAcA0QAcAzAvAfQAwAeA6AAQA6AAAwgeQAvgfAcgzQAdg0AAhBQAAg/gdgzQgcgygvgdQgwgdg6AAQg6AAgwAdgAlvEeQhMgrgqhLQgrhLgBheQABhgAqhKQArhJBMgqQBLgpBkgBQAsgBAsAJQAsAIAlAPQAiARAXAXQAWAYABAeIAABYIhpAAIAAguQgBgWgUgPQgUgPgfgHQgfgIgjAAQhEAAgyAcQgxAbgbAxQgaAyAABEQAABDAbA1QAbA2AyAeQAyAfBHABQAUAAAZgEQAYgDAYgIQAXgGAPgOQAPgMABgVIAAhEIh0AAIAAhYIDdAAIAADAQgBAlgbAZQgbAZgoAQQgqAPgtAHQgtAHgkAAQhjgBhMgrgA0AEyQg3gWgigsQgYgggMgoQgLgoAAgyIAAkzIhNAAIAAhZIEQAAIAABZIhNAAIAAEzQAAAcAFAXQAGAYAKAQQARAcAfAPQAgAOApAAQAoAAAfgOQAegPATgdQAKgRAGgXQAFgXAAgbIAAkzIhMAAIAAhZIEOAAIAABZIhMAAIAAEzQAAAvgMAqQgMApgXAfQgkAug3AWQg4AXhBAAQhFgBg3gXgEggMAEdQhKgsgrhLQgrhMgBhdQABhcArhKQArhJBKgrQBLgrBfgBQBgABBKArQBLArAqBJQArBKABBcQgBBdgrBMQgqBLhLAsQhKAshgABQhfgBhLgsgA/MjEQgvAdgcAyQgcAzgBA/QABBBAcA0QAcAzAvAfQAwAeA6AAQA6AAAwgeQAvgfAcgzQAdg0AAhBQAAg/gdgzQgcgygvgdQgwgdg6AAQg6AAgwAdgEAqoAE/IAAhrIBvAAIAABrgEAiwAE/IAAhYIBMAAIAAnHIh5AAIAABhIhkAAIAAi/IIwAAIAAC/IhjAAIAAhhIh6AAIAAHHIBNAAIAABYgAbKE/IAAhYIBMAAIAAnMIhMAAIAAhZIEQAAIAABZIhOAAIAAHMIBOAAIAABYgAQEE/IAAhYIBMAAIAAnHIh5AAIAABhIhkAAIAAi/IIwAAIAAC/IhjAAIAAhhIh6AAIAAHHIBNAAIAABYgEgqCAE/IAAhYIBNAAIAAizIiqkZIg7AAIAAhZIDuAAIAABZIg+AAIBhCnIAGALIAEAJIACAFIACAEIABAAIACgEIACgFIAFgJIAGgLIBhinIg9AAIAAhZIDrAAIAABZIg5AAIiqEZIAACzIBMAAIAABYgEAqtACGIgJnEIB3AAIgKHEg");
	this.shape.setTransform(917.8,83.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C5CA8").s().p("Ehj/AXbMAAAgu2MDH+AAAMAAAAu2g");
	this.shape_1.setTransform(640,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,300);


(lib.blackRem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("ACULdQgdgPgRgeQgRgeAAgrQAAgrASgfQARgeAdgQQAcgRAkAAQAcAAAUAKQAVALAMANIgfAlQgKgKgLgFQgMgFgQAAQgUAAgQAKQgPAKgIATQgJASAAAbQgBAoATAWQASAWAlAAQAIAAAHgCQAIgBAFgFIAAgtIgsAAIAAgwIBgAAIAAB4QgOANgXAKQgXAJgbAAQgkAAgcgPgANMLnIhDiBIgag5IgBAAIAEAvQADAYAAAXIAABcIg5AAIAAkEIA9AAIBECCIAaA5IACAAIgGgvQgCgYAAgYIAAhcIA4AAIAAEEgAJFLnIAAkEIA6AAIAAEEgAHrLnIgQg+IhRAAIgQA+Ig7AAIBSkEIBGAAIBSEEgAHPJ7IgHgXIgKgqIgLgrIgBAAIgKArIgLAqIgGAXIA4AAgAAILnIgOg+IhQAAIgQA+Ig8AAIBSkEIBGAAIBQEEgAgTJ7IgGgXIgLgqIgKgrIgBAAIgKArIgLAqIgGAXIA3AAgAl5LnIAAhdIhOinIA/AAIAXA8IAKAcIAMAdIABAAIALgdIALgcIAXg8IA+AAIhPCnIAABdgAoOLnIgzhdIgfAAIAABdIg8AAIAAkEIBeAAQAcgBAXAIQAXAHANASQAOASAAAfQAAAcgNAUQgMASgWAJIA8BogApgJbIAeAAQAXAAAMgKQAMgKAAgTQAAgTgMgIQgMgHgXAAIgeAAgAtHLnIAAjSIhHAAIAAgyIDKAAIAAAyIhHAAIAADSgABuiWQgpAggwAPQgvARg4AAQhhgChKgrQhKgsgrhMQgrhLgBhdQABhdArhKQAqhKBLgrQBKgrBhgBQBdABBLApQBKAoAsBJQArBIABBdQAAA+gTA0QgTAzgjArIBJBCIhCBKgAi+pmQguAdgcAyQgcAzAABBQAABCAcAzQAcA0AuAdQAwAfA8AAQAeAAAegJQAagIAZgTIhYhWIA/hIIBaBZQAQgaAKghQAKgfAAgkQgBg/gcgzQgcgygwgdQgugdg9AAQg8AAgwAdgAIRhuQg3gWgigsQgYgggMgoQgMgoABgyIAAk1IhNAAIAAhZIEQAAIAABZIhOAAIAAE1QABAcAFAXQAGAYAKAQQARAcAfAPQAgAOApAAQAoAAAfgOQAegPASgdQALgRAFgXQAGgXAAgbIAAk1IhNAAIAAhZIEPAAIAABZIhMAAIAAE1QAAAvgNAqQgLApgXAfQgkAug4AWQg3AXhBAAQhFgBg3gXgA8hiDQhLgsgrhLQgrhMAAhfQAAhcArhKQArhJBLgrQBKgrBggBQBfABBLArQBLArAqBJQArBKABBcQgBBfgrBMQgrBLhKAsQhLAshfABQhggBhKgsgA7hpmQgvAdgdAyQgcAzAAA/QAABDAcA0QAdAzAvAfQAvAeA7AAQA6AAAvgeQAwgfAcgzQAcg0ABhDQgBg/gcgzQgcgygwgdQgvgdg6AAQg7AAgvAdgEApDgBhIAAhrIBwAAIAABrgAfwhhIAAhYIBNAAIAAnOIhNAAIAAhZIHbAAIAAClIhlAAIAAhHIizAAIAACwIDSAAIAABeIjSAAIAAC0IDAAAIAAhIIBkAAIAACngAYLhhIAAhYIBNAAIAAnJIh6AAIAABhIhkAAIAAi/IIwAAIAAC/IhjAAIAAhhIh6AAIAAHJIBNAAIAABYgAQlhhIAAhYIBNAAIAAnOIhNAAIAAhZIEQAAIAABZIhNAAIAAHOIBNAAIAABYgAxehhIAAhYIBNAAIAAnJIh5AAIAABhIhkAAIAAi/IIwAAIAAC/IhkAAIAAhhIh5AAIAAHJIBNAAIAABYgEgjPgBhIkNmaIgJgRIgIgSIgHgTIgDAAIACAVIABAUIABATIAAE8IBPAAIAABYIkRAAIAAhYIBMAAIAAnOIhMAAIAAhZIDCAAIENGbQAFAIADAJIAIASIAHATIADAAIgCgWIgBgTIAAgTIAAk8IhPAAIAAhZIEQAAIAABZIhMAAIAAImgEApIgEaIgJnGIB3AAIgKHGg");
	this.shape.setTransform(919.7,125.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ehj/ATiMAAAgnDMDH+AAAMAAAAnDg");
	this.shape_1.setTransform(640,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,250);


(lib.barrelGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{coffee:0,toothpaste:1,sunscreen:2,chocolate:3,orangeJuice:4});

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// bonusRound1_barrels_1.png
	this.instance = new lib.bonusRound1_barrels_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// bonusRound1_barrels_2.png
	this.instance_1 = new lib.bonusRound1_barrels_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// bonusRound1_barrels_3.png
	this.instance_2 = new lib.bonusRound1_barrels_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// bonusRound1_barrels_4.png
	this.instance_3 = new lib.bonusRound1_barrels_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// bonusRound1_barrels_5.png
	this.instance_4 = new lib.bonusRound1_barrels_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458,520);


(lib.Answercopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*this.stop();
		
		this.cursor = 'pointer';*/
		
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.bonusRound1_lowerArrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


(lib.Answer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*this.stop();
		
		this.cursor = 'pointer';*/
		
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.bonusRound1_higherArrow();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,611,250);


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


(lib.SubmitButton = function(mode,startPosition,loop) {
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


(lib.Remediation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Right:2,Wrong:99});

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
	this.frame_98 = function() {
		this.stop();
		this.parent.play();
		//this.gotoAndStop(0);
		//root['star' + (root.activity.qIndex + 1)].gotoAndStop(1);
		//root.activity.OnRemediationComplete();
	}
	this.frame_100 = function() {
		playSound("Videogamearpeggiodescend_BLASTWAVEFX_30405_kpLower");
	}
	this.frame_135 = function() {
		this.stop();
		
		//this.gotoAndStop(0);
		//root.activity.OnRemediationComplete();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(95).call(this.frame_98).wait(2).call(this.frame_100).wait(35).call(this.frame_135).wait(1));

	// Layer 2
	this.correctText = new lib.Symbol1();
	this.correctText.parent = this;
	this.correctText.setTransform(1113.5,1088.3,1,1,0,0,0,480,210);

	this.timeline.addTween(cjs.Tween.get(this.correctText).wait(1).to({y:568.3},5,cjs.Ease.get(1)).to({y:578.3},2,cjs.Ease.get(1)).wait(82).to({y:1088.3},7,cjs.Ease.get(1)).to({_off:true},1).wait(38));

	// bonus1
	this.blueRem = new lib.blueRem();
	this.blueRem.parent = this;
	this.blueRem.setTransform(640,870,1,1,0,0,0,640,150);
	this.blueRem._off = true;

	this.blackRem = new lib.blackRem();
	this.blackRem.parent = this;
	this.blackRem.setTransform(640,850,1,1,0,0,0,640,125);
	this.blackRem._off = true;

	this.timeline.addTween(cjs.Tween.get(this.blueRem).wait(1).to({_off:false},0).to({y:350},5,cjs.Ease.get(1)).to({y:360},2,cjs.Ease.get(1)).wait(82).to({y:870},7,cjs.Ease.get(1)).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.blackRem).wait(99).to({_off:false},0).to({y:350},5,cjs.Ease.get(1)).to({y:360},2,cjs.Ease.get(1)).wait(21).to({y:850},7,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Block
	this.instance = new lib.fade2();
	this.instance.parent = this;
	this.instance.setTransform(642.6,363.9,1,1,0,0,0,642.6,363.9);
	this.instance.alpha = 0.648;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.75},7,cjs.Ease.get(1)).wait(82).to({alpha:0.648},7).to({_off:true},1).wait(1).to({_off:false},0).to({alpha:0.75},7,cjs.Ease.get(1)).wait(21).to({alpha:0.648},7).to({_off:true},1).wait(1));

	// Handle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAEAtIAAgDIACAAQAGAAADgCQACgCACgDIAAgKIAAgiQAAgMgEgGQgDgGgHAAQgJAAgMANIAAAtQAAAKABABQABADACACQADABAHAAIAAADIgsAAIAAgDIACAAQAHAAACgEQADgDAAgKIAAgfIgBgUIgCgEIgEgCIgHACIgCgEIAbgLIAFAAIAAATQAPgSANgBQAHABAFADQAFAEAEAIQACAGAAAMIAAAkQAAAJACADQAAABAAAAQAAABABAAQAAABABAAQAAAAABABQACABAHAAIAAADg");
	this.shape.setTransform(-28.4,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfAfQgLgOAAgRQAAgKAHgMQAGgMAKgGQAKgGAJAAQAUAAAMAQQALANAAARQAAAKgGAMQgGAMgKAHQgKAGgLAAQgUAAgLgQgAgMgkQgFADgDAHQgDAIAAAMQAAASAHAOQAIAOALAAQAJAAAHgIQAGgIAAgTQAAgVgLgOQgHgJgIAAQgFAAgGADg");
	this.shape_1.setTransform(-38.4,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUBFIAAgEQAHAAACgBQADgBABgDQABgDAAgIIAAgiQAAgPgBgCQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgBIgHABIgBgDIAZgLIAEAAIAABGQAAAIACADQABADACABQADABAGAAIAAAEgAgFgzQgDgDAAgEQAAgEADgDQADgDACAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgCAAgDgDg");
	this.shape_2.setTransform(-46.1,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDA5QgEgCgDgFQgCgFAAgJIAAg6IgNAAIAAgEQAFgCAGgFQAFgFAEgHIAFgOIACAAIAAAeIAVAAIAAAHIgVAAIAAA4QAAAIADADQACADAEAAQAEAAADgCQADgCABgEIAFAAQgEAKgGAFQgHAFgGAAQgEAAgDgDg");
	this.shape_3.setTransform(-51.6,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAMArQgDgEAAgHQgMALgEABQgFACgGAAQgJABgGgHQgGgGAAgKQAAgHADgFQAEgGAKgGQAKgEAVgJIAAgEQAAgMgFgGQgEgEgGAAQgGAAgEACQgDAEAAAFIAAAFQAAAEgCADQgDADgDAAQgEAAgCgDQgDgDAAgEQAAgJAJgGQAIgIAQABQAKgBAIAEQAFAEADAGQACAEAAANIAAAdIAAAPIACAEIACABIADAAIAIgIIAAAGQgLAOgKAAQgFAAgCgDgAgIAAQgIAEgDAEQgEAFAAAFQAAAIAEAFQAFAEAFAAQAIAAAKgKIAAggIgRAHg");
	this.shape_4.setTransform(-58.6,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUBFIAAgEQAHAAACgBQADgBABgDQABgDAAgIIAAgiQAAgPgBgCQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgBIgHABIgBgDIAZgLIAEAAIAABGQAAAIACADQABADACABQADABAGAAIAAAEgAgFgzQgDgDAAgEQAAgEADgDQADgDACAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgCAAgDgDg");
	this.shape_5.setTransform(-66.1,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPBGIAAgMQgGAHgGADQgFACgHAAQgPAAgLgMQgLgMAAgTQAAgUANgNQAMgQATAAQAJAAAIAHIAAgQIAAgTIgCgFIgFgBIgGABIgCgDIAbgLIAFAAIAABlQAAAQABAEQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAQABABAAAAQABAAABAAIAGgCIABADIgaALgAgTgJQgJAJAAATQABAUAIAKQAJALAKAAQAHAAAIgJIAAguQAAgFgDgFQgDgGgFgDQgEgCgDAAQgJAAgHAHg");
	this.shape_6.setTransform(-73.6,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAiQgLgMAAgVQAAgVALgNQAMgNAQAAQAPAAAKAKQAJAKAAAQIg7AAQgBASAKAMQAKALALAAQAJAAAGgFQAHgFAEgLIADACQgCANgKALQgJALgPAAQgOAAgMgNgAgPghQgGAHgBALIAnAAQgBgJgBgDQgDgGgEgDQgFgDgDAAQgJAAgGAGg");
	this.shape_7.setTransform(-83.3,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAgAtIAAgDIACAAQAGAAADgCQACgCABgDIAAgKIAAgkQAAgLgCgEQgEgHgJAAQgEAAgGADQgFACgHAIIAAABIAAADIAAApQAAAKABABQAAADADACQAEABAGAAIAAADIgrAAIAAgDQAHAAADgCQADgBABgEIAAgKIAAgkQAAgLgCgFQgFgGgIAAQgFAAgFADQgJAEgDAGIAAAtQAAAJABACQABADACACQACABAIAAIAAADIgtAAIAAgDQAHAAACgBQACgCACgDIABgLIAAggIAAgTIgDgEIgEgCIgHACIgBgEIAbgLIAFAAIAAATIALgLQAEgEAFgCQAFgCAFAAQAJAAAEAGQAGAEACAJQAKgMAHgDQAHgDAHgBQAHABAGADQAGAEADAIQACAGAAAMIAAAkQgBAJACADIADAEQADABAGAAIAAADg");
	this.shape_8.setTransform(-95.6,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAiQgLgMAAgVQAAgVALgNQAMgNAQAAQAPAAAKAKQAJAKAAAQIg7AAQgBASAKAMQAKALALAAQAJAAAGgFQAHgFAEgLIADACQgCANgKALQgJALgPAAQgOAAgMgNgAgPghQgGAHgBALIAnAAQgBgJgBgDQgDgGgEgDQgFgDgDAAQgJAAgGAGg");
	this.shape_9.setTransform(-107.8,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeBCIgrg+IgIAAIgDAAIgDAAIAAAmQAAANADADQAEAEAHAAIAFAAIAAAEIg4AAIAAgEIAFAAQAIAAAEgFQACgDAAgMIAAhTQAAgNgDgDQgEgEgHAAIgFAAIAAgEIAwAAQATAAAKADQAKADAHAJQAHAIAAALQAAANgIAJQgIAJgRABIAcAmQAJANAHAFQAHAEAKABIAAAEgAgbg3IAAA3IAEAAIACAAQATAAAHgIQAKgJAAgMQAAgNgIgHQgHgIgLAAIgQACg");
	this.shape_10.setTransform(-118.7,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AplCaIAAk0ITMAAIAAE0g");
	this.shape_11.setTransform(-74.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,0,1339.5,1078.3);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgROAiPQjYg9h3hRQh6hSAAhbIAAheQAAgoAYgmIAAvKQgYgmAAgnIAAhfQAAgoAYgmIAAvHQgYgmAAgpIAAhdQAAgoAYgnIAAvJQgYgmAAgoIAAhfQAAhaB6hTQB3hQDYg9QHJiDKFAAQKGAAHJCDQDYA9B3BQQB6BTAABaIAABfQAAAogYAmIAAPJQAYAnAAAoIAABdQAAApgYAmIAAPHQAYAmAAAoIAABfQAAAngYAmIAAPKQAYAmAAAoIAABeQAABbh6BSQh3BRjYA9QnJCDqGAAQqFAAnJiDg");
	mask.setTransform(156.1,232.3);

	// Layer 3
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(274.9,402.6,1,1,0,0,0,62.7,87.4);
	this.instance.alpha = 0.102;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(212.2,315.2,100,149.4);


(lib.endtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// <Clip Group>
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4EFF8").s().p("AngAmQkPlvislzIAYAMQBSArBzAdQC2AuD/AEQBwABB4gGQDoEAEfFdQDjEWDTEVQhZAah/AYQkZAylYANQlGlWjtlCg");
	this.shape.setTransform(253,669.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4EFF8").s().p("Ap1lQQC+gyCVgsQDPg+C2hAQETDkEAEAQgKBwgbBcQgfBog3BXQhQCAiQBqQmxm7nfnCg");
	this.shape_1.setTransform(477.4,617.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBF7FD").s().p("AmLBiQkFk8i/k2QEPAEFagpQE3gmFlhJQDbDeC/DhQggDthODKQhrERifBcQhiA4j4AuQknkwjikTg");
	this.shape_2.setTransform(311.2,665.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBF7FD").s().p("AnPitQFbhnDzhhQDzhgA5g5QAagaAIgbQgHCBAFDIQAGDrgBBCQgDCigaBzQgeCNhHBvQl8mOmhljg");
	this.shape_3.setTransform(494.7,591.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CDE5F7").s().p("AkAAjQjChNg+hYQg9hXBNhNQgLAMAZATQAaAWA+AZQA6AZCGAdID8A3QFSBQCMBxQAnAfhZA5QhTA1i6BEQkHiyjKhSg");
	this.shape_4.setTransform(440.8,511.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CDE5F7").s().p("AGUOHQhYgygtguQg4g3gihWQgkhagZiZQgrkMj3lQQiPjBjBjBQhUhUgCiqQgBhCANg2QAMg1ARgNQACgBAEAAQgmBMDgCtQDWCmGoDpQAAAdAZC2QAeDbAlDPQBwJtBvBvQiJhLg1gfg");
	this.shape_5.setTransform(120.9,628.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAEBF8").s().p("A1EP2QjsgZg9g9QhvhuhwpuQgljMgejeQgZi1AAgdICOBMQBRArBzAdQC3AtD+AEQBwACB5gGQHKgVJSh6QEkg7EuhOQC9gyCWgtQDOg9C5hAQDGhFCEg8QCDg8AognQAagaAHgbQgHCHAHELQAHD0gLB2QgKBygbBcQgeBmg3BXQhQCAiRBqQg3AphBAlQizBoh0gZIgXgGIgDgBQiag3gllHQgHg4gKixQgHh2gOgYQgZgshQADQhKADhTAnQhDAggqAqQguAvAAAvQAAAugKBSQggDvhODJQhrESifBcQgvAbhTAZQhWAaiAAXQkYAzlYAMQhkAEhaAAQi1AAiPgPg");
	this.shape_6.setTransform(345,636.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D5E9F7").s().p("Ay2JjQhzgdhSgrIiNhMQmrjqjWilQjgirAmhMQAKgUAdgNQAegOBVBIQCxCVAsAdQGKEhIRA/QCXATCmAAQHCAAKGh5QI+hsHdiWQBsggBUggQC6hEBTg1QBZg5gngfQiMhzlShQIj+g3QiGgeg6gYQg+gagagVQgZgTALgNIABgBQAOgOA+gBQBBAABiAPQHhBNF3CKQG7CigpCRQgIAbgaAaQhRBQmoCTQm7CbobB/QppCSn6AzQj2AZjLAAQkfAAjIgyg");
	this.shape_7.setTransform(303.4,546.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CDE5F7").s().p("AhaD3QiBhsAAi1QAAipgNhaIgMg3QBTgnBJgDQBRgDAXArQAOAZAGB1QALC0AGA2QAmFHCaA2QjphBhmhXg");
	this.shape_8.setTransform(437.1,648.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C6D70").s().p("A4/E9Qhshwg2hmQhLiMArhkQA2h+Dtg0QEKg7GAgXQGTgXG3AXQQLA3MREUIg8AQQjEhBlvhFQmbhOm0gtQxuh3qYCdQmUBfCiEbQBRCPChB7IgsAiQgrgkg2g4g");
	this.shape_9.setTransform(216,487);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#58595B").s().p("A55F2QirjNgBiSQgChAABgqQABhNAMg5QAmikCNgfQD2hRGSghQGTgiHbAVQHwAWHkBOQILBWGzCNIAGDsQjGg9mChFQmthMnJgtQykh1qYCdQi3Arg+BBQBfCRBtB1QA2A6AkAdIgtEXQhVhJhWhmg");
	this.shape_10.setTransform(214.4,503.2);

	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(286.2,592.9,1,1,0,0,0,265,156.9);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// NICE WORK!
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AOZE8QhTgxgvhTQgwhUgBhnQABhnAwhSQAvhRBTgwQBTgvBqgCQBqACBTAvQBTAwAvBRQAwBSABBnQgBBngwBUQgvBThTAxQhTAyhqAAQhqAAhTgygAPhjZQg1AfgfA4QggA4AABHQAABIAgA5QAfA6A1AiQA0AhBBAAQBBAAA1ghQA0giAgg6QAfg5AAhIQAAhHgfg4Qggg4g0gfQg1ghhBgBQhBABg0AhgA7AE9QhTgwgvhUQgvhTgBhnQABhqAwhSQAwhSBSguQBSgvBpgBQAhAAAvAGQAtAHAuAQQAtAPAeAdQAeAbABAqIAABgIh3AAIAAg3QgBgbgZgQQgagPgigGQgjgIgfABQhFAAg1AeQg2AfgeA3QgfA3gBBKQABBPAgA7QAfA7A3AhQA3AgBHABQARAAAZgDQAZgEAagHQAagIARgOQARgNABgVIAAg3IB3AAIAABhQgBAogdAbQgdAagsARQgtAPgvAIQgwAGgmAAQhtAAhUgxgEAvPAFjIAAh4IB7AAIAAB4gEAsJAFjQgdAAgSgGQgSgGgMgMQgNgLgJgSIh8jqQgJgPgMgFQgMgHgVABIgtAAIAADXIBSAAIAABiIkpAAIAAhiIBVAAIAAn/IhVAAIAAhjIEbAAIAABjIhEAAIAADAIBPAAICHjAIg9AAIAAhjIEEAAIAABjIhAAAIirDrIAAABIAIAGIAHAFQAHAHAIAIQAIAKAIAQIBtDFQAHANALAGQAMAHARAAIAhAAIAABigEAhIAFjQgcgBgTgFQgRgEgMgMQgMgLgLgUIhli4QgKgTgOgJQgPgIgeAAIhBAAIAACvIBSAAIAABiIkpAAIAAhiIBVAAIAAn/IhVAAIAAhjIE5AAQAmAAAhACQAiAEAdAIQA9AVAjAvQAjAvAABMQAABLgjAyQgkAxg/AUIAAADIAMAJIAMALQAGAGAFALIBSCTQAIAOALAFQALAFASAAIAXAAIAABigAb6gUIB3AAQA0gBAegdQAfgeAAg5QAAgkgNgZQgOgZgdgMQgOgHgUgDQgUgDgZgBIhhAAgAFEFjIh3m+IgFgXIgDgVIgDgVIgDAAIgBALIgBAKIgEAXIgFAVIh3G+IiRAAIiXphIhBAAIAAhjIEVAAIAABjIhTAAIBcGTIADAVIADAUIACAVIAEAAIACgVIADgUIAEgVICFn2IBpAAICFH2IAEAVIAFAUIABALIABAKIAEAAIACgVIACgUIAEgVIBcmTIhTAAIAAhjIEVAAIAABjIhBAAIiXJhgAyCFjIAAhiIBVAAIAAn/IhVAAIAAhjIIPAAIAAC2IhwAAIAAhOIjHAAIAADDIDqAAIAABoIjqAAIAADHIDWAAIAAhQIBwAAIAAC6gEgj+AFjIAAhiIBVAAIAAn/IhVAAIAAhjIEuAAIAABjIhWAAIAAH/IBWAAIAABigEgoxAFjIkrnGQgGgJgEgKIgIgTIgIgWIgEAAIADAXIABAWIABAWIAAFdIBYAAIAABiIkwAAIAAhiIBVAAIAAn/IhVAAIAAhjIDYAAIErHHQAFAIAEALIAJAUIAIAUIADAAIgCgYIgCgWIAAgVIAAlcIhYAAIAAhjIEvAAIAABjIhVAAIAAJhgEAvUACWIgKn3ICEAAIgLH3g");
	this.shape_11.setTransform(913.9,579.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer 6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D52A9").s().p("EhkFANRIAA6iMDIKAAAIAAaig");
	this.shape_12.setTransform(640.6,580.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,436,1281.2,313.8);


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
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#7E1511","#E92D1E"],[0,1],0,69,0.1,-68.9).s().p("EhK/ALFIAA2JMCV/AAAIAAWJg");
	this.shape_12.setTransform(480,211);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer 3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("EhK+AKyIAA1jMCV9AAAIAAVjg");
	this.shape_13.setTransform(480,351);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("EhK+AK8IAA13MCV9AAAIAAV3g");
	this.shape_14.setTransform(480,70);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	// Background
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.749)").s().p("EhK/Ag0MAAAhBnMCV/AAAMAAABBng");
	this.shape_15.setTransform(480,210);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

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


(lib.oilBarrel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AgeGAQg3gKgpgvQgogtgEg2QgFg2AMgsQAHgbARgjQAohNBvi7IBqirQANgYAJAFQAIAFgHAaQgVBTgEBcQgFBqASBjQAGAiAdBiQAUBcgbA0QgYAugzAYQgkARgnAAQgSAAgTgEg");
	this.shape.setTransform(256.3,391.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282425").s().p("AgNJDQiIgFhhhkQhghkgEiIQgEhzA3hhQATgmCjkVICdkNQANgXAOACQAOACAEAZQgIAdBlDyQBrEFAFAYQBDCngRBnQgXCGhhBXQhgBVh+AAIgPgBg");
	this.shape_1.setTransform(265.4,396.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlzJrQibibAAjaQAAiNBHh4IGnreQAOgYASAAQATAAANAYIGoLeQBHB4AACNQAADaibCbQibCbjZAAQjZAAiaibg");
	this.shape_2.setTransform(274.9,402.6);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(168.8,245,1,1,0,0,0,168.8,245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFE").s().p("AkiEtIBdgJIAAonIhdAKIAAhyQCggPCngdIAAByQguAJguAGIAAIfQBzgSBvgXIAAh3IB4gbIAADqQkjBFkiAbg");
	this.shape_3.setTransform(224.1,271.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFE").s().p("AikGGIAAhrQAvABAugBIAAosQguABgvgBIAAhsQCnACCigKIAABrIheAFIAAItIBegFIAABqQiCAJiIAAIg/AAg");
	this.shape_4.setTransform(167.3,275.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEFEFE").s().p("AgBGQQiogXh0iQQhyiMAAirQABilBxhaQBwhYCsAYQCsAYBxB3QB0B6AACjQAACth0BsQhhBciEAAQgcAAgcgEgAizjgQhKBBAABxQAAB2BKBeQBKBeBoAPQBnAOBLhJQBLhKAAh4QAAhvhLhVQhJhThpgPQgUgDgSAAQhRAAg7Azg");
	this.shape_5.setTransform(100.6,271.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjDA0QgggWAAgYQAAgkBEgaQBDgbBfAAQBRAABAAUQA+AUASAeQg4gNg8AAQhhAAhCAaQhEAaABAlQAAAKAGALQg1gMgegUg");
	this.shape_6.setTransform(66.8,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#282425").s().p("AiiBAQhEgbAAglQAAgkBEgbQBDgaBfAAQBgAABDAaQBEAbAAAkQAAAlhEAbQhEAahfAAQhfAAhDgag");
	this.shape_7.setTransform(67.1,44.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#434244").s().p("Au6ERQi7g2hnhFQhqhIAAhOQAAhNBqhIQBnhFC7g2QGMhxIuAAQIvAAGMBxQC7A2BnBFQBqBIAABNQAABOhqBIQhnBFi7A2QmMBxovAAQouAAmMhxg");
	this.shape_8.setTransform(156.1,44.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#282425").s().p("AxOE7QjYg+h3hQQh6hTAAhaQAAhZB6hTQB3hQDYg+QHJiCKFAAQKGAAHJCCQDYA+B3BQQB6BTAABZQAABah6BTQh3BQjYA+QnJCCqGAAQqFAAnJiCg");
	this.shape_9.setTransform(156.1,44.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AxOE7QjYg+h3hQQh6hSAAhbIAAhdQDLhYEphYQJQiwHTAAQHUAAJRCwQEoBYDLBYIAABdQAABbh6BSQh3BRjYA9QnJCCqGABQqFgBnJiCg");
	this.shape_10.setTransform(156.1,54);

	this.instance_1 = new lib.Group_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(57.1,127.7,1,1,0,0,0,26.7,73.7);
	this.instance_1.alpha = 0.25;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#434244").s().p("Aw9J3QjTg8h2hMQh5hOAAhSIAAxJMAv/AAAIAARJQAABSh5BOQh1BMjUA8QnLCEpzAAQpyAAnLiEg");
	this.shape_11.setTransform(156.1,130.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#282425").s().p("AxOE7QjYg+h3hQQh6hTAAhaQAAhZB6hTQB3hQDYg+QHJiCKFAAQKGAAHJCCQDYA+B3BQQB6BTAABZQAABah6BTQh3BQjYA+QnJCCqGAAQqFAAnJiCg");
	this.shape_12.setTransform(156.1,166.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AxOE7QjYg+h3hQQh6hTAAhaIAAhdQDLhYEphXQJQiwHTAAQHUAAJRCwQEoBXDLBYIAABdQAABah6BTQh3BQjYA+QnJCCqGAAQqFAAnJiCg");
	this.shape_13.setTransform(156.1,176);

	this.instance_2 = new lib.Group_9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57.1,249.1,1,1,0,0,0,26.7,73.6);
	this.instance_2.alpha = 0.25;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#434244").s().p("Aw9J3QjTg8h2hMQh5hOAAhTIAAxIMAv/AAAIAARIQAABTh5BOQh1BMjUA8QnLCDpzAAQpyAAnLiDg");
	this.shape_14.setTransform(156.1,251.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#282425").s().p("AxOE7QjYg+h3hQQh6hTAAhaQAAhZB6hTQB3hQDYg+QHJiDKFAAQKGAAHJCDQDYA+B3BQQB6BTAABZQAABah6BTQh3BQjYA+QnJCDqGgBQqFABnJiDg");
	this.shape_15.setTransform(156.1,288.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AxOE7QjYg+h3hQQh6hTAAhaIAAhdQDLhYEphXQJQiwHTAAQHUAAJRCwQEoBXDLBYIAABdQAABah6BTQh3BQjYA+QnJCDqGgBQqFABnJiDg");
	this.shape_16.setTransform(156.1,298);

	this.instance_3 = new lib.Group_13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.1,370.7,1,1,0,0,0,26.7,73.6);
	this.instance_3.alpha = 0.25;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#434244").s().p("Aw9J4QjTg9h2hMQh5hOAAhSIAAxIMAv/AAAIAARIQAABSh5BOQh1BMjUA9QnLCCpzAAQpyAAnLiCg");
	this.shape_17.setTransform(156.1,373.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#282425").s().p("AxOE7QjYg+h3hQQh6hTAAhaQAAhZB6hTQB3hQDYg9QHJiEKFABQKGgBHJCEQDYA9B3BQQB6BTAABZQAABah6BTQh3BRjYA9QnJCDqGgBQqFABnJiDg");
	this.shape_18.setTransform(156.1,410.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AxOE7QjYg+h3hQQh6hTAAhaIAAhdQDLhYEphXQJQixHTAAQHUAAJRCxQEoBXDLBYIAABdQAABah6BTQh3BRjYA9QnJCDqGgBQqFABnJiDg");
	this.shape_19.setTransform(156.1,419.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_3},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_2},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,337.6,490);


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
(lib.Slide4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{Start:340,Outro:452});

	// timeline functions:
	this.frame_1 = function() {
		/*var debug = false;
				
		this.stop();
		
		this.activity = null;
		
		$.getScript('../../Source/XM/Activities/CreateJS/QuizActivity.js', function() {
			if(debug)
				root.gotoAndPlay('Start');
			else
				root.play();
		}.bind(this));*/
		/*playSoundThenResume('L2S10_01');*/
	}
	this.frame_2 = function() {
		stage.enableMouseOver()
		
		//this.questionData = [
		//	//Question 1
		//	{ question: '" "',
		//		instructions: '',
		//		type: QuestionType.MultipleChoice,
		//		answers: [
		//			' ',
		//			' ',
		//			' '
		//		],
		//		remediation: {
		//			right: "Coffee would be nearly $1,500 a barrel!",
		//			wrong: " "
		//		},
		//		correct: [1]
		//	},
		//	//Question 2
		//	{ question: '" "',
		//		instructions: '',
		//		type: QuestionType.MultipleChoice,
		//		answers: [
		//			' ',
		//			' ',
		//			' '
		//		],
		//		remediation: {
		//			right: "Toothpaste would be over $1,600 a barrel!",
		//			wrong: " "
		//		},
		//		correct: [1]
		//	},
		//	//Question 3
		//	{ question: '" "',
		//		instructions: '',
		//		type: QuestionType.MultipleChoice,
		//		answers: [
		//			' ',
		//			' ',
		//			' '
		//		],
		//		remediation: {
		//			right: "Sunscreen would be over $3,000 a barrel!",
		//			wrong: " "
		//		},
		//		correct: [1]
		//	},
		//	,	//Question 4
		//	{ question: '" "',
		//		instructions: '',
		//		type: QuestionType.MultipleChoice,
		//		answers: [
		//			' ',
		//			' ',
		//			' '
		//		],
		//		remediation: {
		//			right: "Chocolate syrup would be over $500 a barrel!",
		//			wrong: " "
		//		},
		//		correct: [1]
		//	},
		//	//Question 5
		//	{ question: '" "',
		//		instructions: '',
		//		type: QuestionType.MultipleChoice,
		//		answers: [
		//			' ',
		//			' ',
		//			' '
		//		],
		//		remediation: {
		//			right: "Orange juice would be over $350 a barrel!",
		//			wrong: " "
		//		},
		//		correct: [1]
		//	}
		//	/*,
		//	{ question: 'Just like fire compartments, flood compartments are identified by numbers, but they follow a different convention.',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'True',
		//			'False'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1]
		//	},
		//	{ question: 'How are fire compartments identified?',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'Deck, Zone, Protection, Consecutive Number',
		//			'Zone, Deck, Protection, Consecutive Number',
		//			'Consecutive Number, Protection, Zone, Deck',
		//			'Deck, Protection, Zone, Consecutive Number'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1]
		//	},
		//	{ question: 'The Casualty Threshold for flooding is defined as "flooding of any single watertight compartment"?',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'True',
		//			'False'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1]
		//	},
		//	{ question: 'What are considered essential systems that need to remain operational? (Check all that apply)',
		//		instructions: '',
		//		capSelections: false,
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'Propulsion',
		//			'Steering',
		//			'Navigation',
		//			'Fuel oil',
		//			'Galley'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1, 2, 3, 4]
		//	},
		//	{ question: 'The A/C compressor is considered a critical system?',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'True',
		//			'False'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1]
		//	},
		//	{ question: 'Safe areas include regulations on the following (check all that apply):',
		//		instructions: '',
		//		capSelections: false,
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'Space',
		//			'Toilets',
		//			'Water and Food',
		//			'Medical Treatment',
		//			'Routes to Life-Saving Appliances'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1, 2, 3, 4, 5]
		//	},
		//	{ question: 'Systems will support an orderly evacuation for how long?',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'At least 3 hours',
		//			'12 hours',
		//			'At least 2 hours',
		//			'At least 6 hours'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1]
		//	},
		//	{ question: 'Safe Return to Port changes Princess’ existing emergency response procedures.',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'True',
		//			'False'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [2]
		//	},
		//	{ question: 'How much water is each person onboard entitled to during Safe Return to Port?',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'5 liters',
		//			'2 gallons',
		//			'3 liters',
		//			'2 liters'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [3]
		//	},
		//	{ question: 'In a fire compartment identification number, the letter "P" indicates that the space is fitted with a Water Mist system.',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		answers: [
		//			'True',
		//			'False'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [2]
		//	},
		//	{ question: 'If a fire compartment identification number contains the letter "A" it means: (Check all that apply)',
		//		instructions: '',
		//		type: QuestionType.MultipleSelect,
		//		capSelections: false,
		//		answers: [
		//			'The space contains fire detectors',
		//			'The space will be considered lost up to the first A Class Bulkhead',
		//			'The space will be considered lost up to the second A Class Bulkhead'
		//		],
		//		remediation: {
		//			right: "That's Right!",
		//			wrong: "Sorry, Try Again!"
		//		},
		//		correct: [1, 3]
		//	}
		//];
		//	
		//this.options = {
		//	capSelections: true,
		//	htmlText: false,
		//	hasRemediation: true,
		//	/*questionWidth: 776,
		//	questionHeight: 47,
		//	answerWidth: 750,
		//	answerHeight: 20,*/
		//	/*onWrongAction: QuizAction.Continue,*/
		//	questions: this.questionData,
		//	//minScore: 80,
		//	finishWrongAction: function() {
		//		root.gotoAndPlay('Fail');
		//	}
		//}
		//this.correctAnswers = 0;
	}
	this.frame_14 = function() {
		playSound("intro1");
	}
	this.frame_215 = function() {
		playSound("intro2");
	}
	this.frame_360 = function() {
		this.stop();
		
		root.remediation.correctText.remText.text = 'You got it! Coffee would be nearly $1,500 a barrel!'
		
		this.highQ1.addEventListener('click', function(){
				root.remediation.gotoAndPlay('Right');
			
			});
			
		this.lowQ1.addEventListener('click', function(){
			root.remediation.gotoAndPlay('Wrong');
		});
	}
	this.frame_371 = function() {
		root.barrelGroup.gotoAndStop('toothpaste');
	}
	this.frame_382 = function() {
		this.stop();
		
		root.remediation.correctText.remText.text = 'You got it! Toothpaste would be over $1,600 a barrel!'
		
		this.highQ2.addEventListener('click', function(){
				root.remediation.gotoAndPlay('Right');
			
			});
			
		this.lowQ2.addEventListener('click', function(){
			root.remediation.gotoAndPlay('Wrong');
		});
	}
	this.frame_393 = function() {
		root.barrelGroup.gotoAndStop('sunscreen');
	}
	this.frame_404 = function() {
		this.stop();
		
		root.remediation.correctText.remText.text = 'You got it! Sunscreen would be over $3,000 a barrel!'
		
		this.highQ3.addEventListener('click', function(){
				root.remediation.gotoAndPlay('Right');
			
			});
			
		this.lowQ3.addEventListener('click', function(){
			root.remediation.gotoAndPlay('Wrong');
		});
	}
	this.frame_415 = function() {
		root.barrelGroup.gotoAndStop('chocolate');
	}
	this.frame_426 = function() {
		this.stop();
		
		root.remediation.correctText.remText.text = 'You got it! Chocolate syrup would be over $500 a barrel!'
		
		this.highQ4.addEventListener('click', function(){
				root.remediation.gotoAndPlay('Right');
			
			});
			
		this.lowQ4.addEventListener('click', function(){
			root.remediation.gotoAndPlay('Wrong');
		});
	}
	this.frame_437 = function() {
		root.barrelGroup.gotoAndStop('orangeJuice');
	}
	this.frame_448 = function() {
		this.stop();
		
		root.remediation.correctText.remText.text = 'You got it! Orange juice would be over $350 a barrel!'
		
		this.highQ5.addEventListener('click', function(){
				root.remediation.gotoAndPlay('Right');
			
			});
			
		this.lowQ5.addEventListener('click', function(){
			root.remediation.gotoAndPlay('Wrong');
		});
	}
	this.frame_459 = function() {
		playSound("_368691__fartbiscuit1700__8bitarcadevideogamestartsoundeffectgunreloadandjump_kpLowered");
		playSound("conclusion");
	}
	this.frame_612 = function() {
		this.stop();
		
		LMS.SaveToSuspendData('i_2', true);
		Shell.UpdateIcons();
		Slide.Complete();
		
		Shell.GoToSlide(2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(12).call(this.frame_14).wait(201).call(this.frame_215).wait(145).call(this.frame_360).wait(11).call(this.frame_371).wait(11).call(this.frame_382).wait(11).call(this.frame_393).wait(11).call(this.frame_404).wait(11).call(this.frame_415).wait(11).call(this.frame_426).wait(11).call(this.frame_437).wait(11).call(this.frame_448).wait(11).call(this.frame_459).wait(153).call(this.frame_612).wait(1));

	// Layer 10
	this.instance = new lib.endtext();
	this.instance.parent = this;
	this.instance.setTransform(639.3,875.8,1,1,0,0,0,640,473.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(455).to({_off:false},0).to({y:230.9},6,cjs.Ease.get(1)).to({y:240.3},2,cjs.Ease.get(1)).wait(150));

	// Layer 4
	this.instance_1 = new lib.fade();
	this.instance_1.parent = this;
	this.instance_1.setTransform(644,361.2,1,1,0,0,0,644,361.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(452).to({_off:false},0).to({alpha:0.75},7,cjs.Ease.get(1)).wait(154));

	// bonusRound1_barrels_4.png
	this.barrelGroup = new lib.barrelGroup();
	this.barrelGroup.parent = this;
	this.barrelGroup.setTransform(-238,400,1,1,0,0,0,229,260);
	this.barrelGroup._off = true;

	this.timeline.addTween(cjs.Tween.get(this.barrelGroup).wait(350).to({_off:false},0).to({x:320},10,cjs.Ease.get(1)).wait(1).to({x:-238},10,cjs.Ease.get(1)).wait(1).to({x:320},10,cjs.Ease.get(1)).wait(1).to({x:-238},10,cjs.Ease.get(1)).wait(1).to({x:320},10,cjs.Ease.get(1)).wait(1).to({x:-238},10,cjs.Ease.get(1)).wait(1).to({x:320},10,cjs.Ease.get(1)).wait(1).to({x:-238},10,cjs.Ease.get(1)).wait(1).to({x:320},10,cjs.Ease.get(1)).wait(165));

	// Remediation
	this.remediation = new lib.Remediation();
	this.remediation.parent = this;
	this.remediation.setTransform(483,208,1,1,0,0,0,483,208);
	this.remediation._off = true;

	this.timeline.addTween(cjs.Tween.get(this.remediation).wait(340).to({_off:false},0).wait(273));

	// Layer 1
	this.lowQ1 = new lib.Symbol2();
	this.lowQ1.parent = this;
	this.lowQ1.setTransform(945.5,575,1,1,0,0,0,305.5,125);

	this.highQ1 = new lib.Symbol2();
	this.highQ1.parent = this;
	this.highQ1.setTransform(945.5,215,1,1,0,0,0,305.5,125);

	this.lowQ2 = new lib.Symbol2copy2();
	this.lowQ2.parent = this;
	this.lowQ2.setTransform(945.5,585,1,1,0,0,0,305.5,125);

	this.highQ2 = new lib.Symbol2copy();
	this.highQ2.parent = this;
	this.highQ2.setTransform(945.5,215,1,1,0,0,0,305.5,125);

	this.lowQ3 = new lib.Symbol2copy4();
	this.lowQ3.parent = this;
	this.lowQ3.setTransform(945.5,585,1,1,0,0,0,305.5,125);

	this.highQ3 = new lib.Symbol2copy3();
	this.highQ3.parent = this;
	this.highQ3.setTransform(945.5,215,1,1,0,0,0,305.5,125);

	this.lowQ4 = new lib.Symbol2copy6();
	this.lowQ4.parent = this;
	this.lowQ4.setTransform(945.5,585,1,1,0,0,0,305.5,125);

	this.highQ4 = new lib.Symbol2copy5();
	this.highQ4.parent = this;
	this.highQ4.setTransform(945.5,215,1,1,0,0,0,305.5,125);

	this.lowQ5 = new lib.Symbol2copy8();
	this.lowQ5.parent = this;
	this.lowQ5.setTransform(945.5,585,1,1,0,0,0,305.5,125);

	this.highQ5 = new lib.Symbol2copy7();
	this.highQ5.parent = this;
	this.highQ5.setTransform(945.5,215,1,1,0,0,0,305.5,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.highQ1},{t:this.lowQ1}]},360).to({state:[]},1).to({state:[{t:this.highQ2},{t:this.lowQ2}]},21).to({state:[]},1).to({state:[{t:this.highQ3},{t:this.lowQ3}]},21).to({state:[]},1).to({state:[{t:this.highQ4},{t:this.lowQ4}]},21).to({state:[]},1).to({state:[{t:this.highQ5},{t:this.lowQ5}]},21).to({state:[]},1).wait(164));

	// Answer A
	this.btn1 = new lib.Answer();
	this.btn1.parent = this;
	this.btn1.setTransform(1742,103.2,1,1,0,0,0,462,13.2);
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(340).to({_off:false},0).to({x:1102},10,cjs.Ease.get(1)).wait(263));

	// Answer B
	this.btn2 = new lib.Answercopy();
	this.btn2.parent = this;
	this.btn2.setTransform(1742,473.2,1,1,0,0,0,462,13.2);
	this.btn2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(340).to({_off:false},0).to({x:1102},10,cjs.Ease.get(1)).wait(263));

	// bonus1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1585.5,400);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(945.5,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},340).to({state:[{t:this.instance_3}]},10).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(340).to({_off:false},0).to({_off:true,x:945.5},10,cjs.Ease.get(1)).wait(263));

	// Layer 11
	this.instance_4 = new lib.fade();
	this.instance_4.parent = this;
	this.instance_4.setTransform(644,361.2,1,1,0,0,0,644,361.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(604));

	// bonus1
	this.bonusRoundIntroTxt = new lib.bonusRoundIntroTxt();
	this.bonusRoundIntroTxt.parent = this;
	this.bonusRoundIntroTxt.setTransform(640,792.5,1,1,0,0,0,590,72.5);
	this.bonusRoundIntroTxt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bonusRoundIntroTxt).wait(4).to({_off:false},0).to({y:102.5},10,cjs.Ease.get(1)).wait(186).to({y:-77.5},10,cjs.Ease.get(1)).to({_off:true},1).wait(402));

	// oilBarrel
	this.oilBarrel = new lib.oilBarrel();
	this.oilBarrel.parent = this;
	this.oilBarrel.setTransform(-163.5,450,1,1,0,0,0,168.8,245);
	this.oilBarrel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.oilBarrel).wait(9).to({_off:false},0).to({x:406.5},10,cjs.Ease.get(1)).wait(186).to({scaleX:0.25,scaleY:0.25,x:62.2,y:71.3},10,cjs.Ease.get(1)).wait(398));

	// oilPriceTag
	this.oilPriceTag = new lib.oilPriceTag();
	this.oilPriceTag.parent = this;
	this.oilPriceTag.setTransform(1457.4,445.2,1,1,90,0,0,285.1,170.6);
	this.oilPriceTag._off = true;

	this.smallTag = new lib.smallTag();
	this.smallTag.parent = this;
	this.smallTag.setTransform(149.5,71,1,1,0,0,0,72.2,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.oilPriceTag}]},14).to({state:[{t:this.oilPriceTag}]},10).to({state:[{t:this.oilPriceTag}]},181).to({state:[{t:this.oilPriceTag}]},10).to({state:[{t:this.smallTag}]},1).wait(397));
	this.timeline.addTween(cjs.Tween.get(this.oilPriceTag).wait(14).to({_off:false},0).to({rotation:0,x:757.5,y:445.3},10,cjs.Ease.get(1)).wait(181).to({regX:285.4,scaleX:0.25,scaleY:0.25,x:150,y:70.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(397));

	// instructions2
	this.instructions2 = new lib.instructions2();
	this.instructions2.parent = this;
	this.instructions2.setTransform(640,-40,1,1,0,0,0,640,40);
	this.instructions2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instructions2).wait(210).to({_off:false},0).to({y:40},10,cjs.Ease.get(1)).wait(393));

	// Background
	this.instance_5 = new lib.bonusRound1_bkgd();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(613));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;