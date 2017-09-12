(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib.Artbig = function() {
	this.initialize(img.Artbig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,800);


(lib.BIGUncleSAMsig = function() {
	this.initialize(img.BIGUncleSAMsig);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,620);


(lib.BorealBog_Mural_SAMPLEkg = function() {
	this.initialize(img.BorealBog_Mural_SAMPLEkg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1100,407);


(lib.hudson01 = function() {
	this.initialize(img.hudson01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,400);


(lib.hudson02 = function() {
	this.initialize(img.hudson02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,400);


(lib.hudson03 = function() {
	this.initialize(img.hudson03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,400);


(lib.hudsonS = function() {
	this.initialize(img.hudsonS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,50);


(lib.hudsonTITLESQ = function() {
	this.initialize(img.hudsonTITLESQ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,370,253);


(lib.iceagestitle = function() {
	this.initialize(img.iceagestitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,300);


(lib.nys = function() {
	this.initialize(img.nys);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,471,112);


(lib.peoples = function() {
	this.initialize(img.peoples);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,77);


(lib.plaza_art_bg = function() {
	this.initialize(img.plaza_art_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,400);


(lib.selections = function() {
	this.initialize(img.selections);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,44);


(lib.spiritofsacrifice = function() {
	this.initialize(img.spiritofsacrifice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,493,201);


(lib.stars = function() {
	this.initialize(img.stars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,21);// helper functions:

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


(lib.Tween44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spiritofsacrifice();
	this.instance.parent = this;
	this.instance.setTransform(-179.1,-73,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.1,-73,358.3,146.1);


(lib.Tween43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spiritofsacrifice();
	this.instance.parent = this;
	this.instance.setTransform(-179.1,-73,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.1,-73,358.3,146.1);


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nys();
	this.instance.parent = this;
	this.instance.setTransform(-171.1,-40.7,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.1,-40.7,342.3,81.4);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nys();
	this.instance.parent = this;
	this.instance.setTransform(-171.1,-40.7,0.727,0.727);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.1,-40.7,342.3,81.4);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D2232A").ss(8,2,1).p("EBOIAAAMicPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504,-4,1008,8);


(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D2232A").ss(8,2,1).p("EBOIAAAMicPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504,-4,1008,8);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,2,1).p("EBOIAAAMicPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504,-4,1008,8);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(8,2,1).p("EBOIAAAMicPAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504,-4,1008,8);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BIGUncleSAMsig();
	this.instance.parent = this;
	this.instance.setTransform(-250,-310);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-310,500,620);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.iceagestitle();
	this.instance.parent = this;
	this.instance.setTransform(-160.5,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5,-150,321,300);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BorealBog_Mural_SAMPLEkg();
	this.instance.parent = this;
	this.instance.setTransform(-550,-203.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550,-203.5,1100,407);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBlIAAgMIAGAAQALgBAGgEQAEgDAFgMIALgeIgziMIAQAAIApB6IAqh6IAQAAIhACxQgEAMgFAFQgFAEgHADQgHABgIAAg");
	this.shape.setTransform(148.6,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBHIAAiLIAPAAIAAATQAGgKALgFQALgGAMAAQAKAAAIADQAJADAHAIIgLAKQgGgGgGgCQgGgDgIAAQgIAAgHAEQgHADgFAGQgFAGgCAIQgDAHAAAJIAABVg");
	this.shape_1.setTransform(134.8,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBDQgLgFgIgIQgHgJgEgOQgEgNAAgSQAAgPAEgOQADgNAIgJQAHgKALgFQAKgEAMAAQANgBAKAFQALAEAHAKQAIAIADANQAEANAAAPIAAAGIhgAAQAAANADALQADAKAFAHQAHAHAIAEQAIADAKAAQANAAAIgDQAJgFAJgJIALAJQgMAMgKAEQgMAFgQABQgOAAgLgFgAApgHQAAgQgEgLQgGgLgJgGQgKgGgMgBQgLABgKAGQgKAGgEALQgFALAAAQIBRAAIAAAAg");
	this.shape_2.setTransform(117,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKBnQgIAAgFgCQgHgDgEgFQgEgEgCgHQgCgHAAgIIAAipIAPAAIAACpQAAAMAEAFQAEAGAMAAIAKAAIAAANg");
	this.shape_3.setTransform(103.2,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKBnQgIAAgFgCQgHgDgEgFQgEgEgCgHQgCgHAAgIIAAipIAPAAIAACpQAAAMAEAFQAEAGAMAAIAKAAIAAANg");
	this.shape_4.setTransform(91.9,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBFQgKgDgGgHQgFgFgDgHQgCgIAAgHQAAgJADgJQADgGAGgGQAHgEAJgDQAJgDALABIAsAAIAAgRQAAgIgCgGQgCgHgFgEQgEgEgIgDQgHgCgLAAQgOAAgIAFQgJADgHAKIgKgJIAJgLQAFgDAGgDQALgFARABQAOAAAKACQAKAEAHAFQAHAGADAJQADAIAAAMIAABeIgPAAIAAgOQgIAJgKADQgJAEgOAAQgQAAgJgDgAgTAFQgGACgFAEQgEADgCAFQgDAGAAAGQAAAIACAFQADAFAEADQAFADAHACQAGACAKgBQAKABAHgCQAKgDAHgGQAEgEABgGQACgHAAgKIAAgSIgqAAQgJABgHABg");
	this.shape_5.setTransform(75.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBkQgOgGgKgKQgHgHgEgIQgEgHgBgKQgDgMAAgoQAAgWADgdQABgKAEgHQAEgIAHgHQAKgKAOgGQANgFAOAAQANAAAMAEQAMAEAJAJQAJAHAHALQAGAMACANIgPAAQgDgKgFgJQgFgIgHgHQgHgGgJgDQgJgDgKAAQgKAAgKAEQgLAEgHAIQgGAFgDAHQgDAGgCAIQgCAbAAAVQAAAlACAMQACAIADAGQADAHAGAFQAHAIALAEQAKAEAKAAQAMAAALgFQAMgFAIgKQAGgIADgKQADgJAAgOIAAgSIg3AAIAAgNIBHAAIAAAgQAAARgEALQgEANgJAJQgKALgOAHQgPAGgPAAQgOAAgNgFg");
	this.shape_6.setTransform(56.3,-2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBlIAAgMIAGAAQALgBAGgEQAEgDAFgMIALgeIgziMIAQAAIApB6IAqh6IAQAAIhACxQgEAMgFAFQgFAEgHADQgHABgIAAg");
	this.shape_7.setTransform(27.2,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBnIAAhWQAAgLgCgGQgDgIgFgFQgFgGgHgCQgHgDgJAAQgJAAgHADQgHACgGAGQgFAFgCAIQgDAHAAAKIAABWIgPAAIAAjNIAPAAIAABTQAIgJAKgFQALgEALAAQAMAAAKADQAJAEAHAHQAHAHADAJQAEAJAAAMIAABZg");
	this.shape_8.setTransform(10,-2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BoIAAjOIAPAAIAAASQAIgKALgFQAJgEAMAAQALAAAJAEQAJADAFAFQAGAGADAGQAEAHACAIQADAOAAASQAAAUgDANQgCAHgEAHQgDAHgGAFQgFAGgJADQgJADgLAAQgMAAgJgDQgLgFgIgMIAABVgAgUhVQgHAEgEAKQgEAHgCALQgBAJAAAMQABAdAGALQAEAIAHAFQAJAFALAAQAMAAAJgFQAHgFAFgIQAFgLACgdQAAgMgCgJQgBgLgEgHQgFgKgHgEQgJgFgMAAQgLAAgJAFg");
	this.shape_9.setTransform(-8.6,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBFQgKgDgGgHQgFgFgDgHQgCgIAAgHQAAgJADgJQADgGAGgGQAHgEAJgDQAJgDALABIAsAAIAAgRQAAgIgCgGQgCgHgFgEQgEgEgIgDQgHgCgLAAQgOAAgIAFQgJADgHAKIgKgJIAJgLQAFgDAGgDQALgFARABQAOAAAKACQAKAEAHAFQAHAGADAJQADAIAAAMIAABeIgPAAIAAgOQgIAJgKADQgJAEgOAAQgQAAgJgDgAgTAFQgGACgFAEQgEADgCAFQgDAGAAAGQAAAIACAFQADAFAEADQAFADAHACQAGACAKgBQAKABAHgCQAKgDAHgGQAEgEABgGQACgHAAgKIAAgSIgqAAQgJABgHABg");
	this.shape_10.setTransform(-27.9,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsBHIAAiLIAPAAIAAATQAGgKALgFQALgGAMAAQAKAAAIADQAJADAHAIIgLAKQgGgGgGgCQgGgDgIAAQgIAAgHAEQgHADgFAGQgFAGgCAIQgDAHAAAJIAABVg");
	this.shape_11.setTransform(-42.6,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBkQgJgEgMgJIAKgLQAJAJAGADQAJAEAMAAQAKAAAIgEQAIgDAFgHQAFgGADgJQACgJAAgKIAAgaQgIAMgLAFQgJADgMAAQgLAAgJgDQgJgDgFgGQgFgFgEgHIgGgOQgDgNAAgUQAAgSADgOIAGgPQAEgGAFgGQAFgFAJgDQAJgEALAAQAMAAAJAEQALAFAIAKIAAgSIAPAAIAACUQAAANgEALQgDAKgIAJQgHAIgLAEQgLAFgMAAQgPAAgKgFgAgUhWQgHAEgFAKQgDAHgCALIgBAVQABAdAFALQAFAIAHAFQAJAFALAAQAMAAAJgFQAHgFAFgIQAFgLABgdIgBgVQgCgLgDgHQgFgKgHgEQgJgFgMAAQgLAAgJAFg");
	this.shape_12.setTransform(-61.1,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBDQgJgDgIgIQgFgFgEgHQgDgGgCgIQgDgMAAgSQAAgRADgMQACgIADgGQAEgHAFgFQAIgHAJgFQAKgDALAAQAMAAAKADQAJAFAIAHQAFAFAEAHQADAGACAIQADAMAAARQAAASgDAMQgCAIgDAGQgEAHgFAFQgIAIgJADQgKAFgMAAQgLAAgKgFgAgPg2QgHACgGAHQgIAHgDAOQgBAJAAAPQAAAQABAKQADANAIAIQAGAGAHADQAIACAHAAQAIAAAIgCQAHgDAGgGQAIgIADgNQABgKAAgQQAAgPgBgJQgDgOgIgHQgGgHgHgCQgIgEgIAAQgHAAgIAEg");
	this.shape_13.setTransform(-79.1,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUBcQgIAAgHgCQgFgDgEgFQgEgFgDgHQgCgGAAgIIAAhbIgTAAIAAgMIATAAIAAgsIAOAAIAAAsIAgAAIAAAMIggAAIAABbQAAALAFAGQAGAGALAAIAKAAIAAANg");
	this.shape_14.setTransform(-94.6,-1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVBDQgJgDgIgIQgFgFgEgHQgDgGgCgIQgDgMAAgSQAAgRADgMQACgIADgGQAEgHAFgFQAIgHAJgFQAKgDALAAQAMAAAKADQAJAFAIAHQAFAFAEAHQADAGACAIQADAMAAARQAAASgDAMQgCAIgDAGQgEAHgFAFQgIAIgJADQgKAFgMAAQgLAAgKgFgAgPg2QgHACgGAHQgIAHgDAOQgBAJAAAPQAAAQABAKQADANAIAIQAGAGAHADQAIACAHAAQAIAAAIgCQAHgDAGgGQAIgIADgNQABgKAAgQQAAgPgBgJQgDgOgIgHQgGgHgHgCQgIgEgIAAQgHAAgIAEg");
	this.shape_15.setTransform(-109.8,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnBnIAAhWQAAgLgCgGQgDgIgFgFQgFgGgHgCQgHgDgJAAQgJAAgHADQgHACgGAGQgFAFgCAIQgDAHAAAKIAABWIgPAAIAAjNIAPAAIAABTQAIgJAKgFQALgEALAAQAMAAAKADQAJAEAHAHQAHAHADAJQAEAJAAAMIAABZg");
	this.shape_16.setTransform(-128.4,-2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhEBnIAAjNIBLAAQANAAALAEQAMAEAIAHQAJAIAEALQAFALAAAOQAAAOgFALQgEALgJAHQgIAIgMAEQgLAEgNAAIg7AAIAABXgAg0ACIA5AAQALAAAJgCQAIgDAHgFQAGgGADgJQAFgIAAgMQAAgLgFgJQgDgIgGgGQgHgGgIgCQgJgDgLAAIg5AAg");
	this.shape_17.setTransform(-147.7,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-16.5,340.8,33);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBlIAAgMIAGAAQALgBAGgEQAEgDAFgMIALgeIgziMIAQAAIApB6IAqh6IAQAAIhACxQgEAMgFAFQgFAEgHADQgHABgIAAg");
	this.shape.setTransform(148.6,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBHIAAiLIAPAAIAAATQAGgKALgFQALgGAMAAQAKAAAIADQAJADAHAIIgLAKQgGgGgGgCQgGgDgIAAQgIAAgHAEQgHADgFAGQgFAGgCAIQgDAHAAAJIAABVg");
	this.shape_1.setTransform(134.8,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBDQgLgFgIgIQgHgJgEgOQgEgNAAgSQAAgPAEgOQADgNAIgJQAHgKALgFQAKgEAMAAQANgBAKAFQALAEAHAKQAIAIADANQAEANAAAPIAAAGIhgAAQAAANADALQADAKAFAHQAHAHAIAEQAIADAKAAQANAAAIgDQAJgFAJgJIALAJQgMAMgKAEQgMAFgQABQgOAAgLgFgAApgHQAAgQgEgLQgGgLgJgGQgKgGgMgBQgLABgKAGQgKAGgEALQgFALAAAQIBRAAIAAAAg");
	this.shape_2.setTransform(117,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKBnQgIAAgFgCQgHgDgEgFQgEgEgCgHQgCgHAAgIIAAipIAPAAIAACpQAAAMAEAFQAEAGAMAAIAKAAIAAANg");
	this.shape_3.setTransform(103.2,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKBnQgIAAgFgCQgHgDgEgFQgEgEgCgHQgCgHAAgIIAAipIAPAAIAACpQAAAMAEAFQAEAGAMAAIAKAAIAAANg");
	this.shape_4.setTransform(91.9,-2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBFQgKgDgGgHQgFgFgDgHQgCgIAAgHQAAgJADgJQADgGAGgGQAHgEAJgDQAJgDALABIAsAAIAAgRQAAgIgCgGQgCgHgFgEQgEgEgIgDQgHgCgLAAQgOAAgIAFQgJADgHAKIgKgJIAJgLQAFgDAGgDQALgFARABQAOAAAKACQAKAEAHAFQAHAGADAJQADAIAAAMIAABeIgPAAIAAgOQgIAJgKADQgJAEgOAAQgQAAgJgDgAgTAFQgGACgFAEQgEADgCAFQgDAGAAAGQAAAIACAFQADAFAEADQAFADAHACQAGACAKgBQAKABAHgCQAKgDAHgGQAEgEABgGQACgHAAgKIAAgSIgqAAQgJABgHABg");
	this.shape_5.setTransform(75.7,0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBkQgOgGgKgKQgHgHgEgIQgEgHgBgKQgDgMAAgoQAAgWADgdQABgKAEgHQAEgIAHgHQAKgKAOgGQANgFAOAAQANAAAMAEQAMAEAJAJQAJAHAHALQAGAMACANIgPAAQgDgKgFgJQgFgIgHgHQgHgGgJgDQgJgDgKAAQgKAAgKAEQgLAEgHAIQgGAFgDAHQgDAGgCAIQgCAbAAAVQAAAlACAMQACAIADAGQADAHAGAFQAHAIALAEQAKAEAKAAQAMAAALgFQAMgFAIgKQAGgIADgKQADgJAAgOIAAgSIg3AAIAAgNIBHAAIAAAgQAAARgEALQgEANgJAJQgKALgOAHQgPAGgPAAQgOAAgNgFg");
	this.shape_6.setTransform(56.3,-2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBlIAAgMIAGAAQALgBAGgEQAEgDAFgMIALgeIgziMIAQAAIApB6IAqh6IAQAAIhACxQgEAMgFAFQgFAEgHADQgHABgIAAg");
	this.shape_7.setTransform(27.2,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBnIAAhWQAAgLgCgGQgDgIgFgFQgFgGgHgCQgHgDgJAAQgJAAgHADQgHACgGAGQgFAFgCAIQgDAHAAAKIAABWIgPAAIAAjNIAPAAIAABTQAIgJAKgFQALgEALAAQAMAAAKADQAJAEAHAHQAHAHADAJQAEAJAAAMIAABZg");
	this.shape_8.setTransform(10,-2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag1BoIAAjOIAPAAIAAASQAIgKALgFQAJgEAMAAQALAAAJAEQAJADAFAFQAGAGADAGQAEAHACAIQADAOAAASQAAAUgDANQgCAHgEAHQgDAHgGAFQgFAGgJADQgJADgLAAQgMAAgJgDQgLgFgIgMIAABVgAgUhVQgHAEgEAKQgEAHgCALQgBAJAAAMQABAdAGALQAEAIAHAFQAJAFALAAQAMAAAJgFQAHgFAFgIQAFgLACgdQAAgMgCgJQgBgLgEgHQgFgKgHgEQgJgFgMAAQgLAAgJAFg");
	this.shape_9.setTransform(-8.6,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbBFQgKgDgGgHQgFgFgDgHQgCgIAAgHQAAgJADgJQADgGAGgGQAHgEAJgDQAJgDALABIAsAAIAAgRQAAgIgCgGQgCgHgFgEQgEgEgIgDQgHgCgLAAQgOAAgIAFQgJADgHAKIgKgJIAJgLQAFgDAGgDQALgFARABQAOAAAKACQAKAEAHAFQAHAGADAJQADAIAAAMIAABeIgPAAIAAgOQgIAJgKADQgJAEgOAAQgQAAgJgDgAgTAFQgGACgFAEQgEADgCAFQgDAGAAAGQAAAIACAFQADAFAEADQAFADAHACQAGACAKgBQAKABAHgCQAKgDAHgGQAEgEABgGQACgHAAgKIAAgSIgqAAQgJABgHABg");
	this.shape_10.setTransform(-27.9,0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsBHIAAiLIAPAAIAAATQAGgKALgFQALgGAMAAQAKAAAIADQAJADAHAIIgLAKQgGgGgGgCQgGgDgIAAQgIAAgHAEQgHADgFAGQgFAGgCAIQgDAHAAAJIAABVg");
	this.shape_11.setTransform(-42.6,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBkQgJgEgMgJIAKgLQAJAJAGADQAJAEAMAAQAKAAAIgEQAIgDAFgHQAFgGADgJQACgJAAgKIAAgaQgIAMgLAFQgJADgMAAQgLAAgJgDQgJgDgFgGQgFgFgEgHIgGgOQgDgNAAgUQAAgSADgOIAGgPQAEgGAFgGQAFgFAJgDQAJgEALAAQAMAAAJAEQALAFAIAKIAAgSIAPAAIAACUQAAANgEALQgDAKgIAJQgHAIgLAEQgLAFgMAAQgPAAgKgFgAgUhWQgHAEgFAKQgDAHgCALIgBAVQABAdAFALQAFAIAHAFQAJAFALAAQAMAAAJgFQAHgFAFgIQAFgLABgdIgBgVQgCgLgDgHQgFgKgHgEQgJgFgMAAQgLAAgJAFg");
	this.shape_12.setTransform(-61.1,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBDQgJgDgIgIQgFgFgEgHQgDgGgCgIQgDgMAAgSQAAgRADgMQACgIADgGQAEgHAFgFQAIgHAJgFQAKgDALAAQAMAAAKADQAJAFAIAHQAFAFAEAHQADAGACAIQADAMAAARQAAASgDAMQgCAIgDAGQgEAHgFAFQgIAIgJADQgKAFgMAAQgLAAgKgFgAgPg2QgHACgGAHQgIAHgDAOQgBAJAAAPQAAAQABAKQADANAIAIQAGAGAHADQAIACAHAAQAIAAAIgCQAHgDAGgGQAIgIADgNQABgKAAgQQAAgPgBgJQgDgOgIgHQgGgHgHgCQgIgEgIAAQgHAAgIAEg");
	this.shape_13.setTransform(-79.1,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAUBcQgIAAgHgCQgFgDgEgFQgEgFgDgHQgCgGAAgIIAAhbIgTAAIAAgMIATAAIAAgsIAOAAIAAAsIAgAAIAAAMIggAAIAABbQAAALAFAGQAGAGALAAIAKAAIAAANg");
	this.shape_14.setTransform(-94.6,-1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVBDQgJgDgIgIQgFgFgEgHQgDgGgCgIQgDgMAAgSQAAgRADgMQACgIADgGQAEgHAFgFQAIgHAJgFQAKgDALAAQAMAAAKADQAJAFAIAHQAFAFAEAHQADAGACAIQADAMAAARQAAASgDAMQgCAIgDAGQgEAHgFAFQgIAIgJADQgKAFgMAAQgLAAgKgFgAgPg2QgHACgGAHQgIAHgDAOQgBAJAAAPQAAAQABAKQADANAIAIQAGAGAHADQAIACAHAAQAIAAAIgCQAHgDAGgGQAIgIADgNQABgKAAgQQAAgPgBgJQgDgOgIgHQgGgHgHgCQgIgEgIAAQgHAAgIAEg");
	this.shape_15.setTransform(-109.8,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAnBnIAAhWQAAgLgCgGQgDgIgFgFQgFgGgHgCQgHgDgJAAQgJAAgHADQgHACgGAGQgFAFgCAIQgDAHAAAKIAABWIgPAAIAAjNIAPAAIAABTQAIgJAKgFQALgEALAAQAMAAAKADQAJAEAHAHQAHAHADAJQAEAJAAAMIAABZg");
	this.shape_16.setTransform(-128.4,-2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhEBnIAAjNIBLAAQANAAALAEQAMAEAIAHQAJAIAEALQAFALAAAOQAAAOgFALQgEALgJAHQgIAIgMAEQgLAEgNAAIg7AAIAABXgAg0ACIA5AAQALAAAJgCQAIgDAHgFQAGgGADgJQAFgIAAgMQAAgLgFgJQgDgIgGgGQgHgGgIgCQgJgDgLAAIg5AAg");
	this.shape_17.setTransform(-147.7,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-16.5,340.8,33);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hudsonTITLESQ();
	this.instance.parent = this;
	this.instance.setTransform(-185,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-156,370,253);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hudsonTITLESQ();
	this.instance.parent = this;
	this.instance.setTransform(-185,-156);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-156,370,253);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hudson03();
	this.instance.parent = this;
	this.instance.setTransform(-270,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-200,540,400);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hudson03();
	this.instance.parent = this;
	this.instance.setTransform(-270,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-200,540,400);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hudson02();
	this.instance.parent = this;
	this.instance.setTransform(-270,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-200,540,400);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hudson02();
	this.instance.parent = this;
	this.instance.setTransform(-270,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270,-200,540,400);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artbig();
	this.instance.parent = this;
	this.instance.setTransform(-1000,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,-400,2000,800);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Artbig();
	this.instance.parent = this;
	this.instance.setTransform(-1000,-400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1000,-400,2000,800);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hudsonS();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,50);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plaza_art_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,2000,400), null);


(lib.wwi = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_192 = function() {
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(192).call(this.frame_192).wait(18));

	// Layer 2
	this.instance = new lib.Tween31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(769,208,0.823,0.823);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:0.1,scaleX:0.85,scaleY:0.85,x:769.1,y:208.1,alpha:1},16).to({regY:0,scaleX:1,scaleY:1,y:208},193).wait(1));

	// Layer 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhRFAC5IAAlxMCiLAAAIAAFxg");
	var mask_graphics_1 = new cjs.Graphics().p("AlqGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_2 = new cjs.Graphics().p("ApKGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_3 = new cjs.Graphics().p("AsqGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_4 = new cjs.Graphics().p("AwKGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_5 = new cjs.Graphics().p("AzqGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_6 = new cjs.Graphics().p("A3KGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_7 = new cjs.Graphics().p("A6qGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_8 = new cjs.Graphics().p("A+KGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_9 = new cjs.Graphics().p("EghqAGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_10 = new cjs.Graphics().p("EglKAGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_11 = new cjs.Graphics().p("EgopAGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_12 = new cjs.Graphics().p("EgsJAGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_13 = new cjs.Graphics().p("EgvpAGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_14 = new cjs.Graphics().p("EgzJAGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_15 = new cjs.Graphics().p("Eg2pAGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_16 = new cjs.Graphics().p("Eg6JAGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_17 = new cjs.Graphics().p("Eg9pAGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_18 = new cjs.Graphics().p("EhBJAGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_19 = new cjs.Graphics().p("EhEpAGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_20 = new cjs.Graphics().p("EhIJAGpIAAlyMCiLAAAIAAFyg");
	var mask_graphics_21 = new cjs.Graphics().p("EhLoAGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_22 = new cjs.Graphics().p("EhPIAGpIAAlyMCiKAAAIAAFyg");
	var mask_graphics_23 = new cjs.Graphics().p("EhRFAGpIAAlyMCiLAAAIAAFyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1529,y:66.5}).wait(1).to({graphics:mask_graphics_1,x:1001.6,y:42.5}).wait(1).to({graphics:mask_graphics_2,x:979.2,y:42.5}).wait(1).to({graphics:mask_graphics_3,x:956.8,y:42.5}).wait(1).to({graphics:mask_graphics_4,x:934.4,y:42.5}).wait(1).to({graphics:mask_graphics_5,x:912,y:42.5}).wait(1).to({graphics:mask_graphics_6,x:889.7,y:42.5}).wait(1).to({graphics:mask_graphics_7,x:867.3,y:42.5}).wait(1).to({graphics:mask_graphics_8,x:844.9,y:42.5}).wait(1).to({graphics:mask_graphics_9,x:822.5,y:42.5}).wait(1).to({graphics:mask_graphics_10,x:800.1,y:42.5}).wait(1).to({graphics:mask_graphics_11,x:777.7,y:42.5}).wait(1).to({graphics:mask_graphics_12,x:755.3,y:42.5}).wait(1).to({graphics:mask_graphics_13,x:732.9,y:42.5}).wait(1).to({graphics:mask_graphics_14,x:710.5,y:42.5}).wait(1).to({graphics:mask_graphics_15,x:688.1,y:42.5}).wait(1).to({graphics:mask_graphics_16,x:665.8,y:42.5}).wait(1).to({graphics:mask_graphics_17,x:643.4,y:42.5}).wait(1).to({graphics:mask_graphics_18,x:621,y:42.5}).wait(1).to({graphics:mask_graphics_19,x:598.6,y:42.5}).wait(1).to({graphics:mask_graphics_20,x:576.2,y:42.5}).wait(1).to({graphics:mask_graphics_21,x:553.8,y:42.5}).wait(1).to({graphics:mask_graphics_22,x:531.4,y:42.5}).wait(1).to({graphics:mask_graphics_23,x:499.1,y:42.5}).wait(187));

	// Layer 7
	this.instance_1 = new lib.stars();
	this.instance_1.parent = this;
	this.instance_1.setTransform(608,56);

	this.instance_2 = new lib.stars();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4,56);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(210));

	// Layer 6
	this.instance_3 = new lib.Tween32("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1520,29.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween33("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(500,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},18).to({state:[{t:this.instance_4}]},15).wait(177));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({_off:true,x:500},15).wait(177));

	// Layer 5
	this.instance_5 = new lib.Tween34("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-520,45.6);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween35("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(500,45.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_6}]},16).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true,x:500},16).wait(182));

	// Layer 4
	this.instance_7 = new lib.Tween43("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(290.1,158);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween44("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(290.1,158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},39).to({state:[{t:this.instance_8}]},18).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({_off:true,alpha:1},18).wait(153));

	// Layer 3
	this.instance_9 = new lib.Tween41("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(292.2,278.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween42("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(292.2,278.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},49).to({state:[{t:this.instance_10}]},15).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).to({_off:true,alpha:1},15).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(563.2,-47.1,642.8,510.4);


(lib.IceAges = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_188 = function() {
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(188).call(this.frame_188).wait(22));

	// Layer 5
	this.instance = new lib.Tween22("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(792.5,209);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({alpha:1},33).wait(121));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhOHAfQMAAAg+fMCcPAAAMAAAA+fg");
	var mask_graphics_209 = new cjs.Graphics().p("EhOHAfQMAAAg+fMCcPAAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:500,y:200}).wait(209).to({graphics:mask_graphics_209,x:500,y:200}).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(455,196.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:548.4,y:203.7},209,cjs.Ease.get(0.09)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.hudsonvalleyruins = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_209 = function() {
		//this.getChildAt(index);
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(209).call(this.frame_209).wait(20));

	// Layer 5
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(270,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(270,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},132).to({state:[{t:this.instance_1}]},21).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).to({_off:true,alpha:1},21).wait(76));

	// Layer 4
	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(270,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(270,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},63).to({state:[{t:this.instance_3}]},19).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).to({_off:true,alpha:1},19).wait(147));

	// Layer 3
	this.instance_4 = new lib.hudson01();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(229));

	// Layer 6
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(880,232);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(1).to({regX:16.5,regY:25,x:896.5,y:257,alpha:0.045},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.227},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.318},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.682},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.773},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.864},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.955},0).wait(1).to({alpha:1},0).wait(1).to({regX:0,regY:0,x:880,y:232},0).wait(29).to({startPosition:0},0).wait(1).to({regX:16.5,regY:25,rotation:0.6,x:896.8,y:257.3},0).wait(1).to({rotation:1.2,x:897,y:257.6},0).wait(1).to({rotation:1.9,x:897.3,y:258},0).wait(1).to({rotation:2.5,x:897.5,y:258.3},0).wait(1).to({rotation:3.1,x:897.8,y:258.5},0).wait(1).to({rotation:3.7,x:897.9,y:258.9},0).wait(1).to({rotation:4.4,x:898.2,y:259.2},0).wait(1).to({rotation:5,x:898.4,y:259.5},0).wait(1).to({rotation:5.6,x:898.6,y:259.8},0).wait(1).to({rotation:6.2,x:898.9,y:260},0).wait(1).to({rotation:6.9,x:899.1,y:260.3},0).wait(1).to({rotation:7.5,x:899.4,y:260.6},0).wait(1).to({rotation:8.1,x:899.6,y:260.9},0).wait(1).to({rotation:8.7,x:899.8,y:261.2},0).wait(1).to({rotation:9.4,x:900.1,y:261.4},0).wait(1).to({rotation:10,x:900.2,y:261.7},0).wait(1).to({rotation:10.6,x:900.5,y:262},0).wait(1).to({rotation:11.2,x:900.7,y:262.2},0).wait(1).to({rotation:11.9,x:900.9,y:262.5},0).wait(1).to({rotation:12.5,x:901.1,y:262.7},0).wait(1).to({rotation:13.1,x:901.3,y:263},0).wait(1).to({rotation:13.7,x:901.6,y:263.3},0).wait(1).to({rotation:14.4,x:901.8,y:263.5},0).wait(1).to({rotation:15,x:902,y:263.8},0).wait(1).to({rotation:15.6,x:902.2,y:264},0).wait(1).to({rotation:16.2,x:902.4,y:264.2},0).wait(1).to({rotation:16.9,x:902.6,y:264.5},0).wait(1).to({rotation:17.5,x:902.8,y:264.7},0).wait(1).to({rotation:18.1,x:903,y:264.9},0).wait(1).to({rotation:18.7,x:903.2,y:265.1},0).wait(1).to({rotation:19.4,x:903.4,y:265.4},0).wait(1).to({rotation:20,x:903.6,y:265.6},0).wait(1).to({rotation:20.6,x:903.8,y:265.8},0).wait(1).to({rotation:21.2,x:904.1,y:266},0).wait(1).to({rotation:21.9,x:904.2,y:266.2},0).wait(1).to({rotation:22.5,x:904.5,y:266.4},0).wait(1).to({rotation:23.1,x:904.6,y:266.7},0).wait(1).to({rotation:23.7,x:904.8,y:266.9},0).wait(1).to({rotation:24.4,x:905.1,y:267},0).wait(1).to({rotation:25,x:905.2,y:267.2},0).wait(1).to({rotation:25.6,x:905.5,y:267.4},0).wait(1).to({rotation:26.2,x:905.6,y:267.6},0).wait(1).to({rotation:26.9,x:905.8,y:267.8},0).wait(1).to({rotation:27.5,x:906,y:267.9},0).wait(1).to({rotation:28.1,x:906.2,y:268.1},0).wait(1).to({rotation:28.7,x:906.4,y:268.3},0).wait(1).to({rotation:29.4,x:906.6,y:268.5},0).wait(1).to({rotation:30,x:906.8,y:268.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 7
	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(765.5,338);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween16("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(765.5,338);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},49).to({state:[{t:this.instance_7}]},20).wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({_off:true,alpha:1},20).wait(160));

	// Layer 2
	this.instance_8 = new lib.Tween13("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(765,208);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween14("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(765,208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},20).to({state:[{t:this.instance_9}]},23).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({_off:true,alpha:1},23).wait(186));

	// Gray Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444244").s().p("EhOHAfQMAAAg+fMCcPAAAMAAAA+fg");
	this.shape.setTransform(500,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.artforthepeople = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The Flash timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		this.stop();
		
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
	}
	this.frame_185 = function() {
		//var curSlide = this.getStage()
		//var instanceName = curSlide[curSlide.length -1];
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(185).call(this.frame_185).wait(49));

	// other words
	this.instance = new lib.peoples();
	this.instance.parent = this;
	this.instance.setTransform(446,32);

	this.instance_1 = new lib.selections();
	this.instance_1.parent = this;
	this.instance_1.setTransform(347,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},68).to({state:[{t:this.instance_1},{t:this.instance}]},156).to({state:[]},1).wait(9));

	// Art Stencil
	this.instance_2 = new lib.Artbig();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-501,-196);

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(499,204);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(500.5,200.7,0.5,0.5,0,0,0,1,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_4}]},26).to({state:[{t:this.instance_4}]},174).to({state:[]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({_off:true,regX:1,regY:1.3,scaleX:0.5,scaleY:0.5,x:500.5,y:200.7},26).wait(184));

	// background
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(981,200,1,1,0,0,0,1000,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:976.8},0).wait(1).to({x:972.6},0).wait(1).to({x:968.4},0).wait(1).to({x:964.2},0).wait(1).to({x:960},0).wait(1).to({x:955.8},0).wait(1).to({x:951.6},0).wait(1).to({x:947.4},0).wait(1).to({x:943.2},0).wait(1).to({x:939},0).wait(1).to({x:934.8},0).wait(1).to({x:930.6},0).wait(1).to({x:926.4},0).wait(1).to({x:922.2},0).wait(1).to({x:918},0).wait(1).to({x:913.8},0).wait(1).to({x:909.5},0).wait(1).to({x:905.3},0).wait(1).to({x:901.1},0).wait(1).to({x:896.9},0).wait(1).to({x:892.7},0).wait(1).to({x:888.5},0).wait(1).to({x:884.3},0).wait(1).to({x:880.1},0).wait(1).to({x:875.9},0).wait(1).to({x:871.7},0).wait(1).to({x:867.5},0).wait(1).to({x:863.3},0).wait(1).to({x:859.1},0).wait(1).to({x:854.9},0).wait(1).to({x:850.7},0).wait(1).to({x:846.5},0).wait(1).to({x:842.3},0).wait(1).to({x:838},0).wait(1).to({x:833.8},0).wait(1).to({x:829.6},0).wait(1).to({x:825.4},0).wait(1).to({x:821.2},0).wait(1).to({x:817},0).wait(1).to({x:812.8},0).wait(1).to({x:808.6},0).wait(1).to({x:804.4},0).wait(1).to({x:800.2},0).wait(1).to({x:796},0).wait(1).to({x:791.8},0).wait(1).to({x:787.6},0).wait(1).to({x:783.4},0).wait(1).to({x:779.2},0).wait(1).to({x:775},0).wait(1).to({x:770.7},0).wait(1).to({x:766.5},0).wait(1).to({x:762.3},0).wait(1).to({x:758.1},0).wait(1).to({x:753.9},0).wait(1).to({x:749.7},0).wait(1).to({x:745.5},0).wait(1).to({x:741.3},0).wait(1).to({x:737.1},0).wait(1).to({x:732.9},0).wait(1).to({x:728.7},0).wait(1).to({x:724.5},0).wait(1).to({x:720.3},0).wait(1).to({x:716.1},0).wait(1).to({x:711.9},0).wait(1).to({x:707.7},0).wait(1).to({x:703.5},0).wait(1).to({x:699.2},0).wait(1).to({x:695},0).wait(1).to({x:690.8},0).wait(1).to({x:686.6},0).wait(1).to({x:682.4},0).wait(1).to({x:678.2},0).wait(1).to({x:674},0).wait(1).to({x:669.8},0).wait(1).to({x:665.6},0).wait(1).to({x:661.4},0).wait(1).to({x:657.2},0).wait(1).to({x:653},0).wait(1).to({x:648.8},0).wait(1).to({x:644.6},0).wait(1).to({x:640.4},0).wait(1).to({x:636.2},0).wait(1).to({x:632},0).wait(1).to({x:627.7},0).wait(1).to({x:623.5},0).wait(1).to({x:619.3},0).wait(1).to({x:615.1},0).wait(1).to({x:610.9},0).wait(1).to({x:606.7},0).wait(1).to({x:602.5},0).wait(1).to({x:598.3},0).wait(1).to({x:594.1},0).wait(1).to({x:589.9},0).wait(1).to({x:585.7},0).wait(1).to({x:581.5},0).wait(1).to({x:577.3},0).wait(1).to({x:573.1},0).wait(1).to({x:568.9},0).wait(1).to({x:564.7},0).wait(1).to({x:560.4},0).wait(1).to({x:556.2},0).wait(1).to({x:552},0).wait(1).to({x:547.8},0).wait(1).to({x:543.6},0).wait(1).to({x:539.4},0).wait(1).to({x:535.2},0).wait(1).to({x:531},0).wait(1).to({x:526.8},0).wait(1).to({x:522.6},0).wait(1).to({x:518.4},0).wait(1).to({x:514.2},0).wait(1).to({x:510},0).wait(1).to({x:505.8},0).wait(1).to({x:501.6},0).wait(1).to({x:497.4},0).wait(1).to({x:493.2},0).wait(1).to({x:488.9},0).wait(1).to({x:484.7},0).wait(1).to({x:480.5},0).wait(1).to({x:476.3},0).wait(1).to({x:472.1},0).wait(1).to({x:467.9},0).wait(1).to({x:463.7},0).wait(1).to({x:459.5},0).wait(1).to({x:455.3},0).wait(1).to({x:451.1},0).wait(1).to({x:446.9},0).wait(1).to({x:442.7},0).wait(1).to({x:438.5},0).wait(1).to({x:434.3},0).wait(1).to({x:430.1},0).wait(1).to({x:425.9},0).wait(1).to({x:421.7},0).wait(1).to({x:417.4},0).wait(1).to({x:413.2},0).wait(1).to({x:409},0).wait(1).to({x:404.8},0).wait(1).to({x:400.6},0).wait(1).to({x:396.4},0).wait(1).to({x:392.2},0).wait(1).to({x:388},0).wait(1).to({x:383.8},0).wait(1).to({x:379.6},0).wait(1).to({x:375.4},0).wait(1).to({x:371.2},0).wait(1).to({x:367},0).wait(1).to({x:362.8},0).wait(1).to({x:358.6},0).wait(1).to({x:354.4},0).wait(1).to({x:350.1},0).wait(1).to({x:345.9},0).wait(1).to({x:341.7},0).wait(1).to({x:337.5},0).wait(1).to({x:333.3},0).wait(1).to({x:329.1},0).wait(1).to({x:324.9},0).wait(1).to({x:320.7},0).wait(1).to({x:316.5},0).wait(1).to({x:312.3},0).wait(1).to({x:308.1},0).wait(1).to({x:303.9},0).wait(1).to({x:299.7},0).wait(1).to({x:295.5},0).wait(1).to({x:291.3},0).wait(1).to({x:287.1},0).wait(1).to({x:282.9},0).wait(1).to({x:278.6},0).wait(1).to({x:274.4},0).wait(1).to({x:270.2},0).wait(1).to({x:266},0).wait(1).to({x:261.8},0).wait(1).to({x:257.6},0).wait(1).to({x:253.4},0).wait(1).to({x:249.2},0).wait(1).to({x:245},0).wait(1).to({x:240.8},0).wait(1).to({x:236.6},0).wait(1).to({x:232.4},0).wait(1).to({x:228.2},0).wait(1).to({x:224},0).wait(1).to({x:219.8},0).wait(1).to({x:215.6},0).wait(1).to({x:211.4},0).wait(1).to({x:207.1},0).wait(1).to({x:202.9},0).wait(1).to({x:198.7},0).wait(1).to({x:194.5},0).wait(1).to({x:190.3},0).wait(1).to({x:186.1},0).wait(1).to({x:181.9},0).wait(1).to({x:177.7},0).wait(1).to({x:173.5},0).wait(1).to({x:169.3},0).wait(1).to({x:165.1},0).wait(1).to({x:160.9,alpha:0.917},0).wait(1).to({x:156.7,alpha:0.833},0).wait(1).to({x:152.5,alpha:0.75},0).wait(1).to({x:148.3,alpha:0.667},0).wait(1).to({x:144.1,alpha:0.583},0).wait(1).to({x:139.8,alpha:0.5},0).wait(1).to({x:135.6,alpha:0.417},0).wait(1).to({x:131.4,alpha:0.333},0).wait(1).to({x:127.2,alpha:0.25},0).wait(1).to({x:123,alpha:0.167},0).wait(1).to({x:118.8,alpha:0.083},0).wait(1).to({x:114.6,alpha:0},0).wait(1).to({x:110.4},0).wait(1).to({x:106.2},0).wait(1).to({x:102},0).wait(1).to({x:97.8},0).wait(1).to({x:93.6},0).wait(1).to({x:89.4},0).wait(1).to({x:85.2},0).wait(1).to({x:81},0).wait(1).to({x:76.8},0).wait(1).to({x:72.6},0).wait(1).to({x:68.3},0).wait(1).to({x:64.1},0).wait(1).to({x:59.9},0).wait(1).to({x:55.7},0).wait(1).to({x:51.5},0).wait(1).to({x:47.3},0).wait(1).to({x:43.1},0).wait(1).to({x:38.9},0).wait(1).to({x:34.7},0).wait(1).to({x:30.5},0).wait(1).to({x:26.3},0).wait(1).to({x:22.1},0).wait(1).to({x:17.9},0).wait(1).to({x:13.7},0).wait(1).to({x:9.5},0).wait(1).to({x:5.3},0).wait(1).to({x:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-501,-196,2482,800);


// stage content:
(lib.nysm_slider = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.firstSlide = 4;
		window.numSlides = 4;
		var self = this;
		window.slideNum = firstSlide;
		//var curSlide = "self.symbol1";
		
		this.changeSlide = function () {
			
			var nextSlide;
			var self = this;
			var curSlide = self["symbol" + slideNum];
			console.log(curSlide);
			if (slideNum == numSlides) {
				var nextSlide = self["symbol1"];
				window.slideNum = 1;
				console.log(slideNum);
			} else {
				window.slideNum++;
				console.log(slideNum);
				var nextSlide = self["symbol" + slideNum];
			}
			//	createjs.Tween.get(curSlide).to({alpha: 0}, 750);
				nextSlide.alpha = 0;
				nextSlide.visible = true;
				createjs.Tween.get(nextSlide).to({alpha: 1}, 750);
				nextSlide.gotoAndPlay(1);
				curSlide.visible = false;
			
		}
	}
	this.frame_1 = function() {
		var self = this;
		self["symbol" + firstSlide].alpha = 0;
		self["symbol" + firstSlide].visible = true;
		createjs.Tween.get(self["symbol" + firstSlide]).to({alpha: 1}, 500);
		var frequency = 3;
		stage.enableMouseOver(frequency);
		self["symbol" + firstSlide].gotoAndPlay(1);
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		
		
		this.symbol2.addEventListener("click", fl_ClickToGoToWebPage2);
		
		function fl_ClickToGoToWebPage2() {
			window.open("exhibitions/people’s-art-selections-empire-state-plaza-art-collection", "_self");
		}
		
		this.symbol3.addEventListener("click", fl_ClickToGoToWebPage3);
		
		function fl_ClickToGoToWebPage3() {
			window.open("exhibitions/hudson-valley-ruins", "_self");
		}
		
		this.symbol1.addEventListener("click", fl_ClickToGoToWebPage1);
		
		function fl_ClickToGoToWebPage1() {
			window.open("exhibitions/ice-ages", "_self");
		}
		
		this.symbol4.addEventListener("click", fl_ClickToGoToWebPage4);
		
		function fl_ClickToGoToWebPage4() {
			window.open("exhibitions/spirit-sacrifice-new-york-state-first-world-war", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// wwi
	this.symbol4 = new lib.wwi();
	this.symbol4.parent = this;
	this.symbol4.setTransform(500,200,1,1,0,0,0,500,200);
	this.symbol4.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol4).wait(2));

	// hudsonvalleyruins
	this.symbol3 = new lib.hudsonvalleyruins();
	this.symbol3.parent = this;
	this.symbol3.setTransform(199.5,130,1,1,0,0,0,199.5,130);
	this.symbol3._off = true;
	this.symbol3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol3).wait(1).to({_off:false},0).wait(1));

	// artforthepeople
	this.symbol2 = new lib.artforthepeople();
	this.symbol2.parent = this;
	this.symbol2.setTransform(500,200,1,1,0,0,0,500,200);
	this.symbol2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol2).wait(2));

	// iceages
	this.symbol1 = new lib.IceAges();
	this.symbol1.parent = this;
	this.symbol1.setTransform(500,200,1,1,0,0,0,500,200);
	this.symbol1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,4,2549,800);
// library properties:
lib.properties = {
	width: 1000,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/sites/all/themes/nysm/homepageanimation/images/Artbig.png", id:"Artbig"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/BIGUncleSAMsig.png", id:"BIGUncleSAMsig"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/BorealBog_Mural_SAMPLEkg.jpg", id:"BorealBog_Mural_SAMPLEkg"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/hudson01.jpg", id:"hudson01"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/hudson02.jpg", id:"hudson02"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/hudson03.jpg", id:"hudson03"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/hudsonS.png", id:"hudsonS"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/hudsonTITLESQ.png", id:"hudsonTITLESQ"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/iceagestitle.png", id:"iceagestitle"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/nys.png", id:"nys"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/peoples.jpg", id:"peoples"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/plaza_art_bg.jpg", id:"plaza_art_bg"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/selections.jpg", id:"selections"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/spiritofsacrifice.png", id:"spiritofsacrifice"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/stars.png", id:"stars"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;