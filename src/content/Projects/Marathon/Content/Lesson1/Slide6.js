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
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap10.png", id:"Bitmap10"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap11.png", id:"Bitmap11"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap12.png", id:"Bitmap12"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap14.png", id:"Bitmap14"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap15.png", id:"Bitmap15"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap16.png", id:"Bitmap16"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap17.png", id:"Bitmap17"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap18.png", id:"Bitmap18"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap19.png", id:"Bitmap19"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap2.png", id:"Bitmap2"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap20.png", id:"Bitmap20"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap21.png", id:"Bitmap21"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap22.png", id:"Bitmap22"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap23.png", id:"Bitmap23"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap24.png", id:"Bitmap24"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap25.png", id:"Bitmap25"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap26.png", id:"Bitmap26"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap27.png", id:"Bitmap27"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap3.png", id:"Bitmap3"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap4.png", id:"Bitmap4"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap5.png", id:"Bitmap5"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap6.png", id:"Bitmap6"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap7.png", id:"Bitmap7"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap8.png", id:"Bitmap8"},
		{src:"../../Assets/Images/Lesson1/Slide6/Bitmap9.png", id:"Bitmap9"},
		{src:"../../Assets/Images/Lesson1/Slide6/bonusRound1_bkgd.png", id:"bonusRound1_bkgd"},
		{src:"../../Assets/Images/Lesson1/Slide6/bonusRound_introTxt.png", id:"bonusRound_introTxt"},
		{src:"../../Assets/Sounds/Lesson1/Slide6/_368691__fartbiscuit1700__8bitarcadevideogamestartsoundeffectgunreloadandjump_kpLowered.mp3", id:"_368691__fartbiscuit1700__8bitarcadevideogamestartsoundeffectgunreloadandjump_kpLowered"},
		{src:"../../Assets/Sounds/Lesson1/Slide6/conclusion.mp3", id:"conclusion"},
		{src:"../../Assets/Sounds/Lesson1/Slide6/intro.mp3", id:"intro"},
		{src:"../../Assets/Sounds/Lesson1/Slide6/tickSnd.mp3", id:"tickSnd"}
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



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,190);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,197);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,282);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,198);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,176);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,203);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,132);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,203);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1282,736);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,143);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,203);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,87);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,203);


(lib.Bitmap24 = function() {
	this.initialize(img.Bitmap24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap25 = function() {
	this.initialize(img.Bitmap25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,215);


(lib.Bitmap26 = function() {
	this.initialize(img.Bitmap26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,204);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,43);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,32);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,26);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,187);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,203);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,203);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,203);


(lib.bonusRound1_bkgd = function() {
	this.initialize(img.bonusRound1_bkgd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bonusRound_introTxt = function() {
	this.initialize(img.bonusRound_introTxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1180,145);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.instructions2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap4();
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


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0LTVMAAAgmpMAoXAAAMAAAAmpg");
	mask.setTransform(129.3,123.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D051F").s().p("AthTMQgeiyhEjCQiImFi/hSQGIBZEbgFQFkgFEoiRQFRilEqllQFEmGEnp/QgNAcgLAiIh9F5QhPDuhBCqQi4HljME/QkGGYlLDKQlODMmhAAQhAAAhDgFg");
	this.shape.setTransform(129.1,124.1);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.8,258.2,246.7);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgoCAfRMAAAg+hMBQFAAAMAAAA+hg");
	mask.setTransform(256.3,200.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D051F").s().p("A3FfHQiKgehjh3Qg3hDhii5QhfiyhJhTQkZk9iKjhQjBk5CXgsQBcgaBRAjQC/BSCIGFQBEDCAeCyQHwAlGEjsQFLjKEGmYQDMk/C4nlQA+iqBQjuIB9l5QANgnAOgfIAYg1IAEgKQCVknFJjFQEsi0F1g5QFrg3EvBRQE+BVCLDQIAAABQqKhsnuCZQmRB8kbEiQjRDXiAEdQhLCpgaCGQgpCjgBDsQAACJAKETQADDxgiCfQgtDRh5CbQiYDuh7CkQitDmioCkQhhhAh0gLQiEgLipA3QivA5iFAAQg6AAgxgKg");
	this.shape.setTransform(256.3,200.1);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,512.6,400.3);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgL+AmqMAAAhNTIX9AAMAAABNTg");
	mask.setTransform(76.7,247.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D051F").s().p("EAIZAmiIgBAAIgBgCIiPjQQgog1glguIgCgDQgogyg0g9IhHhQIgBAAIgCgCQhJmUh4mhQhLkAjjqtQgSg3h+kxQh1kdg8jIQjBqFDBlsQCDj1B5iUQCEiiCdhdQCehfDagoQDUgnEyAEIAAABQjABXiGCxQg/BTgFDlQgDCbAcFYQAhGhAGCkQAMFNgjDeQhFG1BAFQQAXB6AuCEQAaBMA0CFQARAvAWBHIAHAXQATA/ALAwIAEASQAMAxAJAzIADAOQAIAsAIA8IADAUQAIBEACAhIAAACQADAhACBAIAAAOQABA0gBAnIAAALQgCAzgDAmQgvDZg3DOQgbBngSA8g");
	this.shape.setTransform(76.8,247.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,153.4,494.9);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgrKArxMAAAhXhMBWUAAAMAAABXhg");
	mask.setTransform(276.3,280.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAi3AqPIgigvQh3iqiii3QiTioiwiYIAAAAQg6gyhYgMQgkgDgcAAQg/AAhSANQhOANhiAXIizAvQhBASg7APQiLAjh7ATQhzAShaAAQgrAAgsgEQhRgHhNgYIgagIIgIgDIgCAAIglgQQgigPgkgVIAAAAIgBAAQh0hDhmh1Qg8hEhbiBQhTh2gug0QhHhOhIggIAAgBQg+gbhPAAIgoACIgBAAQgpADg1ANQgdAHhFATIgeAJIAAAAIgCAAQidAph8AAIgBAAQhUAAhPgXQhOgWg+gqQhshIhViDQgmg8g2hgQgthQgVgjQgmg9gkgsIhEhLIh7iJQhFhOgzhAIAAAAIAAgBQhfh5gwhLQhUiBgkheIAAAAIgBgBQgghXgBhEIAAgBIABgCQABhDAhg2QAUgiAjgZQAhgZAngMQA+gTA7ABQAmAAAoAIQBSAPBMA1QEeA4DbAAQBmAABbgLQDZgYDDhbQC1hTCpiPIABAAQCNh3CCiaQCCiZCDjMQCjj9CilWQBAizBuiOQB5ieCvh9QCwh9DahTQCuhCC4giQC4gjC1ABQBQAABCAFQD1ATDBBVQB5A0BIA3QBVBABKBtQA7BYAiBoQAVA7APBVIAjCYImVAAIADhoQACgcgUg8QgaAZgbAgIgbAiIAAAAQhABUAWGLQAFBUATD3IAAAEIAXEmQAJCEACBVIACBOQAEBygFBpIgDBIQgHB2gPBaIgQB3QgGAsgGBAQgHBmAABfQABDRAvC6QAaBwBECyIAeBOQAWA7ASA/IABACIABADQAoCBAZCEIAAAAIACALQAfCwAFCtIAAAGQAAA0gBAqIAAAQIAAABQgHDUgxDHQghCHgvBuIAeA1IhIAhIhDCAgEAjsAomIABgCIADgCIgBgCQAqhVAjh6QBAjcAHjxIAAgLQABgoAAg0IAAgEQgFiogdimIgCgHQgYh/gmh/IgCgFQgWhHgRguQhjkNgQg8Qg+jcgBj3QgBhjAJhrQAFhCAHguQAFgsAMhPQANhWAIhwIAChFQAEhggDh2IgChNQgDhjgIhyIgWkmQgUj3gFhaQgMjSAMh6QANiVAyg/IAegnQAgglAlgkIABgBQAtgqA1glQAmBHAWBFQAVBFgCAsICxAAQgOhNgRg6Qgghtg7hYQhChhhMg5Qg8gshrgvQiwhMjmgTQhBgFhJAAQivgBiwAiQisAgilA+QjGBMijByQiqB3hzCWQhmCDg6CnQinFcinEHQh8DBh9CXQiRCwieCEQizCYjCBZQjQBhjqAbQhiALhrAAQjvAAk1g+IgFgFQhBgvhAgMQgdgGgeAAQguAAguAOQgVAGgTAOQgUAOgLASQgSAegCAqQABAzAaBFQAhBVBOB4QAuBHBcB2QA8BMBcBnICcCsQA4BEBFB5QBcChAYAkQBJBzBbA8QAzAiBCATQA/ARBDAAIACAAQBtAACTglQBigcAWgGQBDgQA2gEQAbgDAVAAQBnAABOAkQBdApBUBfQAyA3BYB9QBZB+A2A9QBbBoBnA8QAhATAZALIAhANIAfALQA9ATBMAHQAlAEAqAAQBQAABugQQBsgRCSglID0g/QCMgkBlgSQBagOBIAAQAnAAAkAEQB4APBRBHQC5ChCSCoQClC5B8CwIAEgBg");
	this.shape.setTransform(276.3,280.1);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,552.6,560.2);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkrEsIAApXIJXAAIAAJXg");
	mask.setTransform(30,30);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D52A9").s().p("AhNByIhOhPQgEgDAAgEQAAgFAEgDQADgDAEAAQAFAAADADIBHBHIDSjMQAIgHAIAIQADADAAAEQAAAFgEADIjaDTQgDADgEAAQgEAAgEgDg");
	this.shape.setTransform(30,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D52A9").s().p("Ai0C1QhMhLAAhqQAAhpBMhLQBLhMBpAAQBqAABLBMQBMBLAABpQAABqhMBLQhLBMhqAAQhpAAhLhMgAililQhFBFAABgQAABhBFBFQBFBFBgAAQBhAABFhFQBFhFAAhhQAAhghFhFQhFhFhhAAQhgAAhFBFg");
	this.shape_1.setTransform(30,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjSDUQhZhYAAh8QAAh7BZhXQBXhZB7AAQB8AABYBZQBXBXABB7QgBB8hXBYQhYBXh8ABQh7gBhXhXg");
	this.shape_2.setTransform(30,30);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,26);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj/A4QMAAAhwfMDH+AAAMAAABwfg");
	mask.setTransform(640,360);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DF0B4E").ss(5).p("AImEsQAAApgeAdQgdAegpAAIuDAAQgoAAgegeQgegdAAgpIAApXQAAgpAegdQAegeAoAAIODAAQApAAAdAeQAeAdAAApg");
	this.shape.setTransform(156.1,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnBGQQgpgBgdgdQgegdAAgpIAApXQAAgpAegdQAdgdApgBIOCAAQAqABAdAdQAeAdAAApIAAJXQAAApgeAdQgdAdgqABg");
	this.shape_1.setTransform(156.1,50);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.6,7.5,115,85);


(lib.fadeWhite = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.addEventListener('click', function(){
				XMLog('BLOCKER');
			})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap24();
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


(lib.bonusbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,440);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,440,1282,736);


(lib.black = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.addEventListener('click', function(){
				XMLog('BLOCKER');
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.beginbtn2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.cursor = 'pointer';
		
		this.addEventListener('click', function (e) {
				root.play();
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2 copy
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,660,282);


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


(lib.tv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,89.9,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap16();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,176);


(lib.timer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.fieldTimer = new cjs.Text("10", "bold 70px 'Source Sans Pro'");
	this.fieldTimer.name = "fieldTimer";
	this.fieldTimer.textAlign = "center";
	this.fieldTimer.lineHeight = 102;
	this.fieldTimer.parent = this;
	this.fieldTimer.setTransform(55.1,2);

	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(538.9,358.3,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.fieldTimer}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.1,-1.7,1280,720);


(lib.spray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(56.4,111.4,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107,203);


(lib.speakers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(123.5,81.5,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap10();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248,190);


(lib.shoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,52.7,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap18();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,132);


(lib.rug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,106.7,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap19();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,203);


(lib.purse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(88.7,98.3,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap21();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,203);


(lib.pillow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,95.9,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap11();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,197);


(lib.pillbottle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(77.9,100.7,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap17();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,203);


(lib.phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(51.5,89.9,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap23();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,203);


(lib.laptop = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,89.9,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253,187);


(lib.glasses = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,47.9,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap22();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,87);


(lib.flipflops = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,95.9,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap15();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,198);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(276.3,280.1,1,1,0,0,0,276.3,280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,552.6,560.3);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(76.7,247.5,1,1,0,0,0,76.7,247.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.5,494.9);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(256.3,200.1,1,1,0,0,0,256.3,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,-0.1,512.7,400.4);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(129.3,123.8,1,1,0,0,0,129.3,123.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.6,247.5);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgrKArxMAAAhXhMBWUAAAMAAABXhg");
	mask.setTransform(276.3,280.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF0B4E").s().p("EAiBAREQiSioi5ihQhRhHh4gOQhkgNiJAXQhlARiMAkIj0BAQiSAkhsARQhJALg7AEQhIAEhBgGQhMgIg9gTIgfgKIghgNQgbgMghgTQhlg6hbhpQg2g9hZh/QhYh8gyg4QhUhehdgpQhjgtiCALQg2AEhDARQgWAFhiAcQiTAlhuAAQhEAAg/gRQhCgSgzgjQhbg8hJhwQgYgkhciiQhFh4g4hEIicitQhchmg8hNQhch1guhIQhOh4ghhWQgahFAAg0QAAgoATgfQALgSAUgPQATgNAVgGQBMgYBLAPQBAAMBBAvQAxAmApA0QAfApAhA7QAyBZArB5QAfBZAcB/QAbB6ALBhIgLACQg6jnhQi/Qgyh0g0hSQhEhshOg3QgrgggzgJQg1gJgvARQgRAGgIAMQgIAMAAAXQABAlAXA5QAlBYBDBpQArBEBXB3QBUBzA2BEIBIBaIAlAtQAXAbAOAUQAzBIBACBQBJCSAhA1QAjA2AgAjQApAuAuAdQAwAfA8AQQA6AOA/gBQBvAACDgqIB4gnQBHgUA5gHQCVgUB4AvQBtAqBlBoQA8A/BbB4QBgB/AtAzQBUBbBYAxQAhARASAHIA1ATQAzAPA9AEQBqAHCEgVQBcgOCWgkQBSgTCkgqQCSgjBsgPQCagUB0ASQBFAKBAAeQBBAeAuAsQFSFDDoGdIgJAEQh8iwili6g");
	this.shape.setTransform(257.6,394.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF0B4E").s().p("AuEN6Qjxg2jUhZIAEgNQEJA+DDAWQD+AeDVgZQDpgbDPhhQDDhZCyiYQCeiECRiwQB9iWB9jAQDLk+DAmlIAPAFQheGVjQF8QhWChiXDMQiLC0ivCXQjKCmjUBbQj8BpjwAMQgzADg0AAQi3AAjRgqg");
	this.shape_1.setTransform(165.2,178.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DF0B4E").s().p("Egj2AZnIABgOQDbAQDFgmQDLgmC1hgQE/ioD/ldQBpiQBeiuQBSiVBQi5QB2kQCLmhIB0ldQA7i5BziUQBwiWCrh4QCjhxDGhMQDFhLDPgfQDWghDQAQQDlATCxBNQBrAuA7AtQBNA5BCBhQA7BYAgBsQARA7ANBMIiwAAQACg1gdhTQgfhXgzhQQiAjJiUgGQikgOi6AEQjiAEh1AgQhqAdBDA5QAnAiB+BLQBzBUA2BnQAiBAAAAmIjXAAQAAgug5hLQg/hShdg9Qh+hQiIgJQikgLidBgQhRAyg/BDQgrAug+BVQg3BOghBBQgUApgMAjQgNAigPAvIhxFeQhKDXgzCHQhJC+hHCcQhdDFhTCPQhoC1hzCPQkWFjllCmQjMBdjUAaQhVAKhZAAQh8AAiCgUg");
	this.shape_2.setTransform(310.4,176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF0B4E").s().p("EABOAkhIgBgBIAAAAQAihqAPhPQAWhdALhdIAUidQAHhTgFiHQgJj7i8nTQhgjlgmhfQg/iegHhCQggkxBCnlQAslGAEglQAWjFgFiJIgOlNQgHjIAFiJQAMlvBliJQg7BUgFDeQgDCbAcFZQAhGhAGCjQAMFOgjDeQhFG1BAFPQAXB6AsCFQAaBLA0CGQARAvAWBGIAHAYQATA+ALAwIAEATQAMAwAJAzIADAOQAIAqAIA+IADAUQAIBEACAhIAAADQADAgACBAIAAAOQABA0gBAoIAAALQgCAzgDAlQhJFNhJD8g");
	this.shape_3.setTransform(496.7,306);

	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(167.8,216.3,1,1,0,0,0,129.3,123.8);
	this.instance.alpha = 0.352;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF0B4E").s().p("AthTMQgdiyhEjCQiJmFi/hSQGIBZEbgFQFkgFEoiRQFRilEqllQFEmGEmp/QgMAcgLAiIh9F5QhQDuhACqQi3HljNE/QkFGYlMDKQlODMmhAAQhAAAhDgFg");
	this.shape_4.setTransform(167.6,216.6);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.9,211.2,1,1,0,0,0,256.3,200.1);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(450.5,292.6,1,1,0,0,0,76.7,247.5);
	this.instance_2.alpha = 0.398;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A50740").s().p("EAh/AloQjRkVjijKQh7hujYAGQiTAFkYBHQlUBWhvARQj4Alieg5QiVg4iIieQgpgxhEhdQhJhkghgoQh/iciEgxQithAj3BRQj7BTikgkQiKgdhjh4Qg3hDhii5QhfiyhJhSQkZk+iKjgQjBk4CXgsQBcgaBRAkQC/BRCIGDQBEDDAeCyQHwAkGEjsQFLjJEGmXQDMk/C4nmQA+iqBQjvIB9l5QANgmAOgfIAYg2IAEgJQCVkoFJjFQEsi0F1g4QFrg3EvBQQE+BVCLDRIAAAAQjBBYiFCxQg/BSgFDlQgDCbAbFZQAiGhAGCjQAMFOgjDeQhGG1BAFPQAYB6AuCFQAaBLAzCGQDJIlhXIRQgbCmg1CQQgaBHgVAnQg7hihoiKg");
	this.shape_5.setTransform(270.9,275.5);

	this.instance_3 = new lib.Group_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(276.3,280.1,1,1,0,0,0,276.3,280.1);
	this.instance_3.alpha = 0.25;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.instance.mask = this.shape_4.mask = this.instance_1.mask = this.instance_2.mask = this.shape_5.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_5},{t:this.instance_2},{t:this.instance_1},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,552.6,560.3);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgrKArxMAAAhXhMBWUAAAMAAABXhg");
	mask_1.setTransform(276.3,280.1);

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(276.3,280.1,1,1,0,0,0,276.3,280.1);

	this.instance.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,552.6,560.3);


(lib.endtext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(304.3,603.8,1,1,0,0,0,276.3,280.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// NICE WORK!
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOZE8QhTgxgvhTQgwhUgBhnQABhnAwhSQAvhRBTgwQBTgvBqgCQBqACBTAvQBTAwAvBRQAwBSABBnQgBBngwBUQgvBThTAxQhTAyhqAAQhqAAhTgygAPhjZQg1AfgfA4QggA4AABHQAABIAgA5QAfA6A1AiQA0AhBBAAQBBAAA1ghQA0giAgg6QAfg5AAhIQAAhHgfg4Qggg4g0gfQg1ghhBgBQhBABg0AhgA7AE9QhTgwgvhUQgvhTgBhnQABhqAwhSQAwhSBSguQBSgvBpgBQAhAAAvAGQAtAHAuAQQAtAPAeAdQAeAbABAqIAABgIh3AAIAAg3QgBgbgZgQQgagPgigGQgjgIgfABQhFAAg1AeQg2AfgeA3QgfA3gBBKQABBPAgA7QAfA7A3AhQA3AgBHABQARAAAZgDQAZgEAagHQAagIARgOQARgNABgVIAAg3IB3AAIAABhQgBAogdAbQgdAagsARQgtAPgvAIQgwAGgmAAQhtAAhUgxgEAvPAFjIAAh4IB7AAIAAB4gEAsJAFjQgdAAgSgGQgSgGgMgMQgNgLgJgSIh8jqQgJgPgMgFQgMgHgVABIgtAAIAADXIBSAAIAABiIkpAAIAAhiIBVAAIAAn/IhVAAIAAhjIEbAAIAABjIhEAAIAADAIBPAAICHjAIg9AAIAAhjIEEAAIAABjIhAAAIirDrIAAABIAIAGIAHAFQAHAHAIAIQAIAKAIAQIBtDFQAHANALAGQAMAHARAAIAhAAIAABigEAhIAFjQgcgBgTgFQgRgEgMgMQgMgLgLgUIhli4QgKgTgOgJQgPgIgeAAIhBAAIAACvIBSAAIAABiIkpAAIAAhiIBVAAIAAn/IhVAAIAAhjIE5AAQAmAAAhACQAiAEAdAIQA9AVAjAvQAjAvAABMQAABLgjAyQgkAxg/AUIAAADIAMAJIAMALQAGAGAFALIBSCTQAIAOALAFQALAFASAAIAXAAIAABigAb6gUIB3AAQA0gBAegdQAfgeAAg5QAAgkgNgZQgOgZgdgMQgOgHgUgDQgUgDgZgBIhhAAgAFEFjIh3m+IgFgXIgDgVIgDgVIgDAAIgBALIgBAKIgEAXIgFAVIh3G+IiRAAIiXphIhBAAIAAhjIEVAAIAABjIhTAAIBcGTIADAVIADAUIACAVIAEAAIACgVIADgUIAEgVICFn2IBpAAICFH2IAEAVIAFAUIABALIABAKIAEAAIACgVIACgUIAEgVIBcmTIhTAAIAAhjIEVAAIAABjIhBAAIiXJhgAyCFjIAAhiIBVAAIAAn/IhVAAIAAhjIIPAAIAAC2IhwAAIAAhOIjHAAIAADDIDqAAIAABoIjqAAIAADHIDWAAIAAhQIBwAAIAAC6gEgj+AFjIAAhiIBVAAIAAn/IhVAAIAAhjIEuAAIAABjIhWAAIAAH/IBWAAIAABigEgoxAFjIkrnGQgGgJgEgKIgIgTIgIgWIgEAAIADAXIABAWIABAWIAAFdIBYAAIAABiIkwAAIAAhiIBVAAIAAn/IhVAAIAAhjIDYAAIErHHQAFAIAEALIAJAUIAIAUIADAAIgCgYIgCgWIAAgVIAAlcIhYAAIAAhjIEvAAIAABjIhVAAIAAJhgEAvUACWIgKn3ICEAAIgLH3g");
	this.shape.setTransform(913.9,579.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D52A9").s().p("EhkFANRIAA6iMDIKAAAIAAaig");
	this.shape_1.setTransform(640.6,580.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,323.7,1281.2,560.3);


(lib.curtains = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(106.7,89.9,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer 4
	this.instance_2 = new lib.Bitmap25();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-11,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,229,215);


(lib.crayons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(113.9,104.3,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap9();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer 4
	this.instance_2 = new lib.Bitmap27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-2,246,205);


(lib.couch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.cursor = 'pointer';
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(125.9,68.3,1,1,0,0,0,30,30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.Bitmap20();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,143);


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


(lib.Remediation = function(mode,startPosition,loop) {
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
(lib.Slide6 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		playSound("intro");
	}
	this.frame_152 = function() {
		this.stop();
		
		stage.enableMouseOver()
	}
	this.frame_163 = function() {
		this.stop()
		
		XMLog("starting");
		
		//var correctCount = 3;
		var activityDone = false;
		this.time = 10;
		this.IamPaused = false;
		XMLog('IamPaused: ' + this.IamPaused);
		this.CorrectlyAnswered = false;
		
		
		var myTimer = setInterval(function (time, IamPaused, CorrectlyAnswered) {
		
			XMLog('IamPaused: ' + root.IamPaused);
		
			//root.blockerNEW.visible = false;	
		
			if (root.IamPaused) return;
		
			//this.stop();
		
			XMLog('tick')
			root.time--;
			//XMLog('root.time: ' + root.time);
			//root.time.toString();
			root.timerMC.fieldTimer.text = root.time.toString();
		
			//XMLog('root.timerMC.fieldTimer.text: ' + this.timerMC.fieldTimer.text);
		
			if (root.time == 0) {
				clearInterval(myTimer);
				root.play();
		
			} else if (root.time <= 9) {
				playSound('tickSnd', false);
			};
		
		
			if (root.CorrectlyAnswered == true) {
				clearInterval(myTimer);
				root.CorrectlyAnswered = false;
			}
		
		}, 1000);
		
		function clearIntervalCorrect() {
			clearInterval(myTimer);
		}
		
		function setupTimer() {
			XMLog("setupTimer Fired");
		}
		
		function timerTick(e) {
		
			root.time--;
			XMLog("time: " + time);
		
			if (this.time <= 9) {
				this.timerMC.fieldTimer.text = time.toString();
				this.tickTock();
				var myTick = new Audio(tickSnd());
				this.myTick.play();
			} else {
				this.timerMC.fieldTimer.text = time.toString();
			}
			if (this.time == 0) {
				this.myTimer.stop();
				this.timerMC.fieldTimer.text = "0";
		
				XMLog("Timer Complete");
				//this.remediation.gotoAndPlay("OutOfTime");
			}
		}
		
		this.addEventListener("IamPausing", function (e) {
			XMLog("hello pause");
		
			if (this.myTimer.running) {
				this.myTimer.stop();
				this.IamPaused = true;
			}
		
		});
		
		this.addEventListener("IamUnpausing", function (e) {
			XMLog("hello unpause");
		
			if (this.IamPaused) {
				this.myTimer.start();
				this.IamPaused = false;
			}
		
		});
		
		this.item_1.addEventListener('click', function () {
			if (root.item_1.getCurrentLabel() == 'off') {
				root.item_1.gotoAndStop('on');
			} else {
				root.item_1.gotoAndStop('off');
			}
		});
		
		this.item_2.addEventListener('click', function () {
			if (root.item_2.getCurrentLabel() == 'off') {
				root.item_2.gotoAndStop('on');
			} else {
				root.item_2.gotoAndStop('off');
			}
		});
		
		this.item_3.addEventListener('click', function () {
			if (root.item_3.getCurrentLabel() == 'off') {
				root.item_3.gotoAndStop('on');
			} else {
				root.item_3.gotoAndStop('off');
			}
		});
		
		this.item_4.addEventListener('click', function () {
			if (root.item_4.getCurrentLabel() == 'off') {
				root.item_4.gotoAndStop('on');
			} else {
				root.item_4.gotoAndStop('off');
			}
		});
		
		this.item_5.addEventListener('click', function () {
			if (root.item_5.getCurrentLabel() == 'off') {
				root.item_5.gotoAndStop('on');
			} else {
				root.item_5.gotoAndStop('off');
			}
		});
		
		this.item_6.addEventListener('click', function () {
			if (root.item_6.getCurrentLabel() == 'off') {
				root.item_6.gotoAndStop('on');
			} else {
				root.item_6.gotoAndStop('off');
			}
		});
		
		this.item_7.addEventListener('click', function () {
			if (root.item_7.getCurrentLabel() == 'off') {
				root.item_7.gotoAndStop('on');
			} else {
				root.item_7.gotoAndStop('off');
			}
		});
		
		this.item_8.addEventListener('click', function () {
			if (root.item_8.getCurrentLabel() == 'off') {
				root.item_8.gotoAndStop('on');
			} else {
				root.item_8.gotoAndStop('off');
			}
		});
		
		this.item_9.addEventListener('click', function () {
			if (root.item_9.getCurrentLabel() == 'off') {
				root.item_9.gotoAndStop('on');
			} else {
				root.item_9.gotoAndStop('off');
			}
		});
		
		this.item_10.addEventListener('click', function () {
			if (root.item_10.getCurrentLabel() == 'off') {
				root.item_10.gotoAndStop('on');
			} else {
				root.item_10.gotoAndStop('off');
			}
		});
		
		this.item_11.addEventListener('click', function () {
			if (root.item_11.getCurrentLabel() == 'off') {
				root.item_11.gotoAndStop('on');
			} else {
				root.item_11.gotoAndStop('off');
			}
		});
		
		this.item_12.addEventListener('click', function () {
			if (root.item_12.getCurrentLabel() == 'off') {
				root.item_12.gotoAndStop('on');
			} else {
				root.item_12.gotoAndStop('off');
			}
		});
		
		this.item_13.addEventListener('click', function () {
			if (root.item_13.getCurrentLabel() == 'off') {
				root.item_13.gotoAndStop('on');
			} else {
				root.item_13.gotoAndStop('off');
			}
		});
		
		this.item_14.addEventListener('click', function () {
			if (root.item_14.getCurrentLabel() == 'off') {
				root.item_14.gotoAndStop('on');
			} else {
				root.item_14.gotoAndStop('off');
			}
		});
		
		this.item_15.addEventListener('click', function () {
			if (root.item_15.getCurrentLabel() == 'off') {
				root.item_15.gotoAndStop('on');
			} else {
				root.item_15.gotoAndStop('off');
			}
		});
	}
	this.frame_166 = function() {
		root.item_1.gotoAndStop('on');
		root.item_2.gotoAndStop('on');
		root.item_3.gotoAndStop('on');
		root.item_4.gotoAndStop('on');
		root.item_5.gotoAndStop('on');
		root.item_6.gotoAndStop('on');
		root.item_7.gotoAndStop('on');
		root.item_8.gotoAndStop('on');
		root.item_9.gotoAndStop('on');
		root.item_10.gotoAndStop('on');
		root.item_11.gotoAndStop('on');
		root.item_12.gotoAndStop('on');
		root.item_13.gotoAndStop('on');
		root.item_14.gotoAndStop('on');
		root.item_15.gotoAndStop('on');
	}
	this.frame_167 = function() {
		playSound("conclusion");
	}
	this.frame_324 = function() {
		playSound("_368691__fartbiscuit1700__8bitarcadevideogamestartsoundeffectgunreloadandjump_kpLowered");
	}
	this.frame_419 = function() {
		this.stop();
		Slide.Complete();
		this.stop();
		Slide.Complete();
		
		LMS.SaveToSuspendData('i_4', true);
		Shell.UpdateIcons();
		Slide.Complete();
		
		Shell.GoToSlide(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(96).call(this.frame_152).wait(11).call(this.frame_163).wait(3).call(this.frame_166).wait(1).call(this.frame_167).wait(157).call(this.frame_324).wait(95).call(this.frame_419).wait(1));

	// blocker
	this.instance = new lib.fadeWhite();
	this.instance.parent = this;
	this.instance.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},152).wait(12).to({_off:false},0).wait(256));

	// Layer 10
	this.instance_1 = new lib.endtext();
	this.instance_1.parent = this;
	this.instance_1.setTransform(639.3,875.8,1,1,0,0,0,640,473.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(320).to({_off:false},0).to({y:230.9},6,cjs.Ease.get(1)).to({y:240.3},2,cjs.Ease.get(1)).wait(92));

	// Layer 4
	this.instance_2 = new lib.fade();
	this.instance_2.parent = this;
	this.instance_2.setTransform(644,361.2,1,1,0,0,0,644,361.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(317).to({_off:false},0).to({alpha:0.75},7,cjs.Ease.get(1)).wait(96));

	// Layer 11
	this.instance_3 = new lib.fade();
	this.instance_3.parent = this;
	this.instance_3.setTransform(644,361.2,1,1,0,0,0,644,361.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(411));

	// bonus1
	this.bonusRoundIntroTxt = new lib.bonusRoundIntroTxt();
	this.bonusRoundIntroTxt.parent = this;
	this.bonusRoundIntroTxt.setTransform(640,792.5,1,1,0,0,0,590,72.5);
	this.bonusRoundIntroTxt._off = true;

	this.instance_4 = new lib.beginbtn2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640.3,829.6,0.706,0.706,0,0,0,329.9,141);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bonusRoundIntroTxt).wait(4).to({_off:false},0).to({y:102.5},10,cjs.Ease.get(1)).wait(27).to({y:-77.5},10,cjs.Ease.get(1)).to({_off:true},1).wait(368));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(142).to({_off:false},0).to({y:348.7},6,cjs.Ease.get(1)).to({y:360.2},3,cjs.Ease.get(1)).wait(2).to({y:348.7},3).to({y:829.6},6).to({_off:true},1).wait(257));

	// bonus1
	this.instance_5 = new lib.black();
	this.instance_5.parent = this;
	this.instance_5.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(142).to({_off:false},0).to({alpha:0.75},9,cjs.Ease.get(1)).wait(2).to({alpha:0},9).to({_off:true},1).wait(257));

	// timer
	this.timerMC = new lib.timer();
	this.timerMC.parent = this;
	this.timerMC.setTransform(156.7,-63.1,1,1,0,0,0,53.6,49.2);

	this.timeline.addTween(cjs.Tween.get(this.timerMC).wait(61).to({y:66.9},6,cjs.Ease.get(1)).to({y:56.9},2,cjs.Ease.get(1)).wait(351));

	// timer
	this.instance_6 = new lib.Group_5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(50.7,-69.7,1,1,0,0,0,30.7,10.7);
	this.instance_6.alpha = 0.5;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(61).to({_off:false},0).to({y:47.9},6,cjs.Ease.get(1)).to({y:38.3},2,cjs.Ease.get(1)).wait(351));

	// instructions2
	this.instructions2 = new lib.instructions2();
	this.instructions2.parent = this;
	this.instructions2.setTransform(640,-40,1,1,0,0,0,640,40);
	this.instructions2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instructions2).wait(51).to({_off:false},0).to({y:40},10,cjs.Ease.get(1)).wait(359));

	// purse
	this.item_5 = new lib.purse();
	this.item_5.parent = this;
	this.item_5.setTransform(1141.8,286.7,1,1,0,0,0,89.5,101.7);
	this.item_5.alpha = 0;
	this.item_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_5).wait(89).to({_off:false},0).to({y:194.3,alpha:1},7,cjs.Ease.get(1)).to({y:202.7},2,cjs.Ease.get(1)).wait(322));

	// couch
	this.item_4 = new lib.couch();
	this.item_4.parent = this;
	this.item_4.setTransform(892.1,286.7,1,1,0,0,0,125,71.6);
	this.item_4.alpha = 0;
	this.item_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_4).wait(87).to({_off:false},0).to({y:194.3,alpha:1},7,cjs.Ease.get(1)).to({y:202.7},2,cjs.Ease.get(1)).wait(324));

	// rug
	this.item_9 = new lib.rug();
	this.item_9.parent = this;
	this.item_9.setTransform(892,490,1,1,0,0,0,122.7,101.7);
	this.item_9.alpha = 0;
	this.item_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_9).wait(85).to({_off:false},0).to({y:397.6,alpha:1},7,cjs.Ease.get(1)).to({y:406},2,cjs.Ease.get(1)).wait(326));

	// glasses
	this.item_10 = new lib.glasses();
	this.item_10.parent = this;
	this.item_10.setTransform(1142.1,490,1,1,0,0,0,125,43.3);
	this.item_10.alpha = 0;
	this.item_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_10).wait(83).to({_off:false},0).to({y:397.6,alpha:1},7,cjs.Ease.get(1)).to({y:406},2,cjs.Ease.get(1)).wait(328));

	// phone
	this.item_15 = new lib.phone();
	this.item_15.parent = this;
	this.item_15.setTransform(1142,693.4,1,1,0,0,0,51,101.7);
	this.item_15.alpha = 0;
	this.item_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_15).wait(81).to({_off:false},0).to({y:601,alpha:1},7,cjs.Ease.get(1)).to({y:609.4},2,cjs.Ease.get(1)).wait(330));

	// shoe
	this.item_14 = new lib.shoe();
	this.item_14.parent = this;
	this.item_14.setTransform(892,693.3,1,1,0,0,0,125,66.2);
	this.item_14.alpha = 0;
	this.item_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_14).wait(79).to({_off:false},0).to({y:600.9,alpha:1},7,cjs.Ease.get(1)).to({y:609.3},2,cjs.Ease.get(1)).wait(332));

	// crayons
	this.item_7 = new lib.crayons();
	this.item_7.parent = this;
	this.item_7.setTransform(392.6,490.3,1,1,0,0,0,118.6,101.4);
	this.item_7.alpha = 0;
	this.item_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_7).wait(77).to({_off:false},0).to({y:397.9,alpha:1},7,cjs.Ease.get(1)).to({y:406.3},2,cjs.Ease.get(1)).wait(334));

	// speakers
	this.item_12 = new lib.speakers();
	this.item_12.parent = this;
	this.item_12.setTransform(392,693.3,1,1,0,0,0,124,95);
	this.item_12.alpha = 0;
	this.item_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_12).wait(75).to({_off:false},0).to({y:600.9,alpha:1},7,cjs.Ease.get(1)).to({y:609.3},2,cjs.Ease.get(1)).wait(336));

	// tv
	this.item_8 = new lib.tv();
	this.item_8.parent = this;
	this.item_8.setTransform(642,490,1,1,0,0,0,125,88.1);
	this.item_8.alpha = 0;
	this.item_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_8).wait(73).to({_off:false},0).to({y:397.6,alpha:1},7,cjs.Ease.get(1)).to({y:406},2,cjs.Ease.get(1)).wait(338));

	// pillbottle
	this.item_13 = new lib.pillbottle();
	this.item_13.parent = this;
	this.item_13.setTransform(642.1,681.4,1,1,0,0,0,71.5,101.7);
	this.item_13.alpha = 0;
	this.item_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_13).wait(71).to({_off:false},0).to({y:589,alpha:1},7,cjs.Ease.get(1)).to({y:597.4},2,cjs.Ease.get(1)).wait(340));

	// flipflops
	this.item_3 = new lib.flipflops();
	this.item_3.parent = this;
	this.item_3.setTransform(642,286.6,1,1,0,0,0,115.4,99.1);
	this.item_3.alpha = 0;
	this.item_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_3).wait(69).to({_off:false},0).to({y:194.2,alpha:1},7,cjs.Ease.get(1)).to({y:202.6},2,cjs.Ease.get(1)).wait(342));

	// pillow
	this.item_2 = new lib.pillow();
	this.item_2.parent = this;
	this.item_2.setTransform(393.7,276.2,1,1,0,0,0,126.6,88);
	this.item_2.alpha = 0;
	this.item_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_2).wait(67).to({_off:false},0).to({y:183.8,alpha:1},7,cjs.Ease.get(1)).to({y:192.2},2,cjs.Ease.get(1)).wait(344));

	// curtains
	this.item_11 = new lib.curtains();
	this.item_11.parent = this;
	this.item_11.setTransform(142,693.4,1,1,0,0,0,108.4,101.7);
	this.item_11.alpha = 0;
	this.item_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_11).wait(65).to({_off:false},0).to({y:601,alpha:1},7,cjs.Ease.get(1)).to({y:609.4},2,cjs.Ease.get(1)).wait(346));

	// spray
	this.item_6 = new lib.spray();
	this.item_6.parent = this;
	this.item_6.setTransform(136.8,490,1,1,0,0,0,53.3,101.7);
	this.item_6.alpha = 0;
	this.item_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_6).wait(63).to({_off:false},0).to({y:397.6,alpha:1},7,cjs.Ease.get(1)).to({y:406},2,cjs.Ease.get(1)).wait(348));

	// laptop
	this.item_1 = new lib.laptop();
	this.item_1.parent = this;
	this.item_1.setTransform(142.1,286.7,1,1,0,0,0,126.6,93.7);
	this.item_1.alpha = 0;
	this.item_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.item_1).wait(61).to({_off:false},0).to({y:194.3,alpha:1},7,cjs.Ease.get(1)).to({y:202.7},2,cjs.Ease.get(1)).wait(350));

	// layer
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(61).to({_off:false},0).to({alpha:0.789},9,cjs.Ease.get(1)).wait(350));

	// Layer 6
	this.instance_8 = new lib.fadeWhite();
	this.instance_8.parent = this;
	this.instance_8.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(41).to({_off:false},0).to({alpha:0.852},20,cjs.Ease.get(1)).wait(359));

	// room
	this.instance_9 = new lib.bonusbg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(4316,650.5,1,1,0,0,0,4316,1100.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(420));

	// Background
	this.instance_10 = new lib.bonusRound1_bkgd();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(420));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,246,1282,840);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;