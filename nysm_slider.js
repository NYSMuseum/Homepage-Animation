(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Each = function() {
	this.initialize(img.Each);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,78);


(lib.FORTOframesize = function() {
	this.initialize(img.FORTOframesize);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,401);


(lib.fortorangealbanymap = function() {
	this.initialize(img.fortorangealbanymap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,401);


(lib.fortorange = function() {
	this.initialize(img.fortorange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,401);


(lib.H202341_obverse = function() {
	this.initialize(img.H202341_obverse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,281,400);


(lib.H202341_reverse = function() {
	this.initialize(img.H202341_reverse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,400);


(lib.Image_1_1000x400 = function() {
	this.initialize(img.Image_1_1000x400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,360);


(lib.Image_2_1000x400 = function() {
	this.initialize(img.Image_2_1000x400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,360);


(lib.Image_3_1000x400 = function() {
	this.initialize(img.Image_3_1000x400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,360);


(lib.Image_4_1000x400 = function() {
	this.initialize(img.Image_4_1000x400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,360);


(lib.Inspired = function() {
	this.initialize(img.Inspired);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,475,80);


(lib.linedrawing_expand = function() {
	this.initialize(img.linedrawing_expand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,139);


(lib.Lineoftext = function() {
	this.initialize(img.Lineoftext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,18);


(lib.one = function() {
	this.initialize(img.one);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,79);


(lib.title01 = function() {
	this.initialize(img.title01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,797,115);


(lib.title02 = function() {
	this.initialize(img.title02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,131);


(lib.WHM_background = function() {
	this.initialize(img.WHM_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.WHM_Image1 = function() {
	this.initialize(img.WHM_Image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.WHM_Image2 = function() {
	this.initialize(img.WHM_Image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.WHM_Image3 = function() {
	this.initialize(img.WHM_Image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.WHM_Image4 = function() {
	this.initialize(img.WHM_Image4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.WHM_Image5 = function() {
	this.initialize(img.WHM_Image5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.WPmapA = function() {
	this.initialize(img.WPmapA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1037);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Tween72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.title01();
	this.instance.setTransform(-398.5,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398.5,-57.5,797,115);


(lib.Tween71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.title01();
	this.instance.setTransform(-398.5,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398.5,-57.5,797,115);


(lib.Forttitle02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.title02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,489,131);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A9Hb5MAAAg3xMA6PAAAMAAAA3xg");
	mask.setTransform(186.4,178.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFDNQgigJgZgQQgDgJAAgfQAAghADgFQBFAsA1AAQAfAAASgOQARgOAAgXQAAgXgUgOQgPgJgzgQQg1gRgZgVQgmggAAgzQAAg1AlgjQAoglBBAAQBAAAAzAiQAEAJABAfQAAAggFAGQhEgsgtAAQgcAAgRAOQgQANAAAWQAAAXAUAMQAQAKAvAPQA3ASAaAUQAmAgAAA3QAAA7gqAiQgpAgg/AAQghAAghgJg");
	this.shape.setTransform(324.35,70.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBFIAfiKQAagEAeAEIAEAAIgqCKQgRADgHAAg");
	this.shape_1.setTransform(299.7,56.3809);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai0DNIAAmZQAhgGAfAGIDXEPIAAkPQASgDAXAAQAXAAARADIAAGZQgfAGghgGIjWkPIAAEPQgRADgXAAQgYAAgSgDg");
	this.shape_2.setTransform(269,70.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiNDNIAAmZIEYAAQAHAigHAiIjHAAIAABkICzAAQAGAigGAhIizAAIAABqIDHAAQAHAigHAig");
	this.shape_3.setTransform(225.6375,70.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AC7DMIg7kGIhgEGQgfAHghgHIhfkGIg6EGQgSAEgXAAQgWAAgRgEIBgmYQAigGAiAGIBlEYIBmkYQAigGAiAGIBgGYQgTAEgUAAQgUAAgUgEg");
	this.shape_4.setTransform(174.15,70.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AibCXQg8g9gBhaQABhZA8g9QA+g/BdAAQBfAAA+A/QA7A9AABZQAABag7A9Qg+A/hfAAQhdAAg+g/gAhdhpQgnApAABAQAABBAnApQAmAoA3AAQA4AAAngoQAngpgBhBQABhAgngpQgngog4AAQg3AAgmAog");
	this.shape_5.setTransform(119.6,70.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABbDNIhbkRIhaERQgiAGghgGIiOmZQASgDAZAAQAZAAAQADIBcEfIBakfQAigGAhAGIBbEfIBakfQASgDAZAAQAZAAARADIiNGZQgRADgRAAQgRAAgRgDg");
	this.shape_6.setTransform(64.25,70.7125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABkDNIAAiuIjGAAIAACuQgRADgYAAQgXAAgSgDIAAmZQASgDAXAAQAYAAARADIAACoIDGAAIAAioQARgDAXAAQAYAAARADIAAGZQgRADgYAAQgXAAgRgDg");
	this.shape_7.setTransform(318.725,199.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnDLIAAlVIh4AAQgHghAHgiIFAAAQAGAigGAhIh4AAIAAFVQgRAEgYAAQgWAAgRgEg");
	this.shape_8.setTransform(258.7875,199.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai0DNIAAmZQAhgGAgAGIDWEPIAAkPQASgDAXAAQAYAAAQADIAAGZQgfAGghgGIjWkPIAAEPQgRADgXAAQgYAAgSgDg");
	this.shape_9.setTransform(199.05,199.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AicCXQg7g9AAhaQAAhZA7g9QA+g/BeAAQBfAAA9A/QA9A9AABZQAABag9A9Qg9A/hfAAQheAAg+g/gAhehpQgnApABBAQgBBBAnApQAmAoA4AAQA4AAAmgoQAngpAAhBQAAhAgngpQgmgog4AAQg4AAgmAog");
	this.shape_10.setTransform(133.05,199.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AC7DNIg7kIIhfEIQghAGgfgGIhgkIIg6EIQgRADgYAAQgWAAgRgDIBgmZQAjgHAhAHIBlEYIBmkYQAigHAiAHIBgGZQgTADgUAAQgUAAgUgDg");
	this.shape_11.setTransform(61.3,199.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnDNIAAiTIiYkFQARgEAbAAQAZAAASAEIBoC7IBpi7QASgEAaAAQAaAAARAEIiXEFIAACTQgRADgYAAQgWAAgRgDg");
	this.shape_12.setTransform(317.3,134.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AikDLIAAmYICfAAQBFAAAqAlQApAlAAA7QAAArgWAfQgYAggpAOIBpCbQgRADgcAAQgbAAgSgDIhgiPIg9AAIAACPQgVADgUAAQgVAAgUgDgAhSgHIBNAAQAfAAATgRQASgSABgeQgBgfgSgRQgTgRgfgBIhNAAg");
	this.shape_13.setTransform(272.65,134.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AicCXQg7g9AAhaQAAhZA7g9QA+g/BeAAQBfAAA9A/QA9A9AABZQAABag9A9Qg9A/hfAAQheAAg+g/gAhehpQgmApAABAQAABBAmApQAnAoA3AAQA4AAAmgoQAngpAAhBQAAhAgngpQgmgog4AAQg3AAgnAog");
	this.shape_14.setTransform(219.45,134.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoDLIAAlUIh3AAQgHgjAHghIE/AAQAHAhgHAjIh3AAIAAFUQgRADgYAAQgWAAgSgDg");
	this.shape_15.setTransform(169.475,134.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhGDNQghgKgYgPQgEgJgBggQAAggAFgFQBEAsA1AAQAfAAASgOQARgOAAgXQgBgYgUgNQgPgJgygQQg1gSgagUQglggAAgzQAAg0AlgjQAogmBBAAQBBAAAyAiQAEAKAAAeQABAggFAGQhDgsgvAAQgbAAgRAOQgRANAAAWQAAAXAVANQAPAJAxAQQA1AQAaAVQAnAgAAA3QAAA7grAiQgoAgg/AAQghAAgigJg");
	this.shape_16.setTransform(126.5,134.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoDNIAAmYQASgEAWAAQAYAAARAEIAAGYQgRADgYAAQgWAAgSgDg");
	this.shape_17.setTransform(93.05,134.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABjDNIAAiuIjFAAIAACuQgRADgYAAQgXAAgSgDIAAmZQASgDAXAAQAYAAARADIAACoIDFAAIAAioQASgDAXAAQAXAAASADIAAGZQgVADgUAAQgUAAgVgDg");
	this.shape_18.setTransform(54.225,134.225);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(34.3,49.2,304.4,172), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A62FWIAAqrMA1tAAAIAAKrg");
	mask_1.setTransform(171.9,34.175);

	// Layer_3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZFUQgcAAgWgKQgXgKgSgSQgSgRgKgXQgKgXAAgcIAAmlQAAgbAKgXQAKgYASgRQASgSAXgKQAWgLAcABIAZAAQAcgBAXALQAYALAQARQARAQAKAZQALAWAAAcIAAAaQgBALAFAMQAEALAFAJIANAUIiJAAQAIgHAFgIQAGgGADgJQAFgJgBgLIAAgnQAAgTgNgMQgNgNgSgBIgZAAQgSABgNANQgMAMAAATIAAGlQAAATAMANQANANASAAIAZAAQARAAAOgNQAMgOAAgSIAAiVQgMgBgJAEIgRAHQgHAEgDADQgEACgBADIAAhoICLAAIAADnQAAAdgLAWQgLAZgRAPQgPARgZALQgXAKgbAAg");
	this.shape_19.setTransform(328.3,34.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAkFMQAHgGAIgLQAEgIADgMQAEgLgGgPIh5laIAAFlQAAANAEAJQADAIAFAHQAGAJAHAGIiGAAQAIgGAFgKQAFgFAEgLQAFgKgBgKIgBo1QAAgGgDgHIgWghICUAAQgIAHgHAKQgFAKgDAIQgDAJACAKIB1FiIAAlqQAAgHgEgIIgJgPQgFgIgJgIICHAAIgNAQIgJAPQgEAIAAAHIAAI1QAAAKAEAJIAJARQAGAJAHAHg");
	this.shape_20.setTransform(291.1,35.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhDFMQAGgGAGgKIAJgRQAFgJAAgKIAAowQAAgIgFgKIgJgQQgGgLgGgGICHAAQgGAGgHAIQgEAGgEAJQgFAKAAALIAAIvQAAALAFAKQAEANAEAEQAHAMAGAEg");
	this.shape_21.setTransform(263.35,35.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhGFLQAHgGAGgJQAEgGAFgIQAEgIAAgIIAAoZIg5AAQgIAAgNAHQgOAJgIAHQgQAOgHAJIAWh9IEjAAIAWB9QgIgKgPgNQgJgHgOgJQgNgHgIAAIg9AAIAAIaQAAAHAFAIIAJAPQAGAJAHAFg");
	this.shape_22.setTransform(237.25,35.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAnFOQAIgIAHgKQAFgKADgIQAEgLgCgMIgKhCIhsAAIgJBEQgCAKAEAKQAEAKAFAJQAFAHAIALIiGAAQAGgFAGgJIAIgNIAFgOIAMheIALhaIAulnQACgXABgFQABgKgDgIQgEgJgFgJIgNgTIDJAAIgNATQgFAJgEAJQgDAIABAIIAwF+IALBaIAMBhQACAGAEAJIAJAOQAEAKAHAGgAgqB/IBVAAIgrlwg");
	this.shape_23.setTransform(205.95,34.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWFQIAMgRQAFgIAEgKQAEgIAAgLIAAh6QAAgTgNgMQgMgMgTAAIgyAAIAACkQAAAKAEAKQACAIAGAJQAFAIAIAKIiFAAIAMgTIAJgTQAEgKAAgJIAAotQAAgLgEgKQgEgJgFgJIgMgSICiAAQAaAAAYAKQAYALARARQASARAKAYQAKAYAAAbIAACtQAAAdgNAaQgNAbgXARQAUASAMAYQAMAZAAAdIAAB5QAAALADAJQADAIAGAIQAGALAHAFgAgvAOIA2AAQASAAANgNQANgMAAgSIAAiwQAAgTgNgNQgNgNgSAAIg2AAg");
	this.shape_24.setTransform(171.825,34.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AiSFRQAIgKAFgLQAFgIAEgOQAEgLAAgPIAAohQAAgMgEgKQgDgKgGgJQgEgIgJgKICeAAQAaAAAYAKQAYAKARARQARARALAYQAKAYAAAaIAABgQAAAagKAYQgLAZgRARQAUASAMAXQAMAaAAAcIAACFQAAAagKAYQgLAYgRARQgSASgXAKQgWAKgdAAgAglD8IA2AAQASAAAOgMQANgNAAgTIAAiFQAAgSgNgNQgNgMgTAAIg2AAgAglhDIAxAAQATAAAMgOQANgMAAgTIAAhgQAAgSgNgMQgNgNgSAAIgxAAg");
	this.shape_25.setTransform(137.075,34.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AiHFNIANgUIAJgTQAEgLAAgJIAAorQAAgIgEgJIgJgRIgNgRID9AAIAQBsIgQgLIgQgIQgHgEgNgCIhtAAIAADGIBQAAQAKAAAHgDIAPgJIAOgNIAACFQgGgIgGgFIgOgJQgJgEgLAAIhQAAIAADbIBvAAQALAAAKgFIARgJQAIgFAGgGIgRBsg");
	this.shape_26.setTransform(104.575,35.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AiAFNQAIgKAEgJQAFgJAEgKQAFgKAAgKIAAorQAAgNgFgJQgDgKgGgHQgFgHgGgHICHAAQgLAIgHAPQgHAOAAANIAAIXIBMAAQAJAAANgFQALgFAKgGIARgOQAHgGADgEIgbB5g");
	this.shape_27.setTransform(75.65,35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AiHFNIANgUIAJgTQAEgLAAgJIAAorQAAgIgEgJIgJgRIgNgRID9AAIAQBsIgQgLIgQgIQgGgDgOgDIhtAAIAADGIBQAAQAKAAAHgDIAPgJIAOgNIAACFQgGgIgGgFIgOgJQgJgEgLAAIhQAAIAADbIBvAAQALAAAKgFIARgJQAIgFAGgGIgRBsg");
	this.shape_28.setTransform(44.875,35.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYFWQgdAAgWgKQgYgLgRgRQgRgQgLgYQgKgWAAgdIAAmoQAAgdAKgWQALgXARgSQAQgQAZgMQAYgKAbAAIAYAAQAaAAAYAKQAaAMAPAQQASATAJAWQALAYAAAbIAAAaQAAALAEAKIAJARQAGAJAHAHIiJAAQAIgHAFgIIAJgPQAEgKAAgLIAAgdQAAgTgNgNQgNgNgSAAIgYAAQgTAAgNANQgNAOAAASIAAGoQAAASANANQANANATAAIAYAAQARAAAOgNQAMgMAAgUIAAgfQAAgMgEgJQgDgJgGgIIgMgRICIAAQgIAIgFAIQgFAIgEAJQgDAJAAAJIAAAjQAAAcgLAXQgJAXgSASQgSARgXALQgWAKgcAAg");
	this.shape_29.setTransform(15.475,34.175);

	var maskedShapeInstanceList = [this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,343.8,68.4), null);


(lib.Tween44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_1_1000x400();
	this.instance.setTransform(-44,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-180,88,360);


(lib.Tween43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_1_1000x400();
	this.instance.setTransform(-44,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-180,88,360);


(lib.Tween42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_2_1000x400();
	this.instance.setTransform(-44.5,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-180,89,360);


(lib.Tween41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_2_1000x400();
	this.instance.setTransform(-44.5,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-180,89,360);


(lib.Tween40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_3_1000x400();
	this.instance.setTransform(-45,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-180,90,360);


(lib.Tween39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_3_1000x400();
	this.instance.setTransform(-45,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-180,90,360);


(lib.Tween38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_4_1000x400();
	this.instance.setTransform(-44,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-180,88,360);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_4_1000x400();
	this.instance.setTransform(-44,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-180,88,360);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Lineoftext();
	this.instance.setTransform(-140,-8.3,0.9211,0.9219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-8.3,280,16.6);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Lineoftext();
	this.instance.setTransform(-140,-8.3,0.9211,0.9219);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-8.3,280,16.6);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.one();
	this.instance.setTransform(-8.5,-31.95,0.8094,0.8094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-31.9,17,63.9);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.one();
	this.instance.setTransform(-8.5,-32,0.8094,0.8094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-32,17,64);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Inspired();
	this.instance.setTransform(-203.95,-34.35,0.8589,0.8588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-34.3,407.9,68.69999999999999);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Inspired();
	this.instance.setTransform(-203.95,-34.35,0.8589,0.8588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-34.3,407.9,68.69999999999999);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Each();
	this.instance.setTransform(-114.5,-33.3,0.8545,0.8539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-33.3,229,66.6);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Each();
	this.instance.setTransform(-114.5,-33.3,0.8545,0.8539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-33.3,229,66.6);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WPmapA();
	this.instance.setTransform(-500,-518.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-518.5,1000,1037);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.H202341_obverse();
	this.instance.setTransform(-140.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-200,281,400);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.H202341_obverse();
	this.instance.setTransform(-140.5,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-200,281,400);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2C1C2").s().p("AgaB1QgMgLAAgSQAAgLAFgJQAKgSAXAAQAQAAALALQAMALAAARIgDAQQgJAWgbAAQgPAAgLgKgAgag7QgMgLAAgSQAAgLAFgJQAKgSAXAAQAQAAALALQAMALAAAQIgDARQgJAWgbAAQgPAAgLgKg");
	this.shape.setTransform(247.475,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2C1C2").s().p("AAnDPIgzAAIhCABIgsgBQgIABAAgDQAAgDAGgGQARgUADgXIACg0IABgzIgBhCIAAgWIAAgpIgBhGQAAgbgZgaQgDgDAGgCIAGAAIAnAAIAMAAIAAAAIAkAAIAXAAQALAAAAADIgFAJQgJAKgEAKQgFAJgBAMIgBAYIAAAaIABBEIAABBIgBApIABAvIAAAYQAAAEAFAAIAUAAIAUAAIA0gBQAYgDAUgRQAGgGADAAQACAAAAAIIABAhIgBAZIAAACIAAAQQAAAEgCABIgHAAIgpABg");
	this.shape_1.setTransform(226.1,-8.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2C1C2").s().p("ACBDQIg0AAIgRAAIgYAAIgEAAIgHgBQgGgBAEgDQARgTAEgIIADgQQAAgFgFgcIgFgVQgBgFgFAAIgmAAIgxAAIgDAAQgFAAgCAFIgEAVIgHAhQAAAIAEAIQADAIARATQAEADgGABIgLABIgnAAIgwAAIgEAAIgHgBQgFgBADgDIAYgaQAHgJAEgNIAMgrIANgvIALgvIAUhCIANgwIALgsIAFgZQAAgIgEgHIgMgPQgGgGAAgDQAAgDAIAAIAiAAIARAAIARAAIAjAAIAYAAQAMAAAAADIgGAJQgJALgDAGIgDAMIAFAaIAWBbIAPBDIAMAvIAMAvQAMA0AGAKQADAFAWAYQAEADgGABIgHABgAgMhuIgJAlIgKAqIgQBAIgDAMIAAABQAAAEADAAIAbAAIAnAAQAGAAgBgFIgDgMIgHggIgGghIgIgoIgJgnIgBgDIgCAEg");
	this.shape_2.setTransform(192.8401,-8.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2C1C2").s().p("AhRDPIgxABIgEAAIgHgBQgFgBADgDQAYgaABgbIABhBIAAgsIAAgZIAAgQIAAgyIAAgyIgDg0QgCgXgRgUQgGgGAAgDQAAgDAIAAIAYAAIAmAAIArAAIAPAAQAxAAAUAGQA9ARAWBNQAGAVACAaIADA6QAAA7gNAxQgUBOg9ASQgUAGg0AAgAgliRIAAAJIAAAUIAAAeIAAAwIAAAXIABBFIgBAUIAAAuIAAAHQAAANACAEQADAEAHABIARABQAcAAAPgQQAUgWAFgpQAFgiAAgiQAAgkgGgjQgHgsgTgVQgLgNgRgDQgGgBgaAAIgCAAQgIAAAAAFg");
	this.shape_3.setTransform(158.375,-8.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2C1C2").s().p("AAnDPIguAAIgUABIAAAAIgJAAIgKAAIgkAAIgHAAIgdAAQgMAAAAgEIAGgIQARgUACgXIADg0IAAgVIAAg6IABglIAAgXIgBgpIgBhGQgBgbgYgaQgDgDAFgCIAIAAIAmAAIAMAAIAeAAIBMABIBHgBIAKAAIABAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAAGIAAAZIAAAnIAAAEIAAAHQgCAFgDgDQgZgXgaAAIgygBIgTAAIgRAAQgFAAAAAFIgBALIAAAZIABBEQAAAGAFAAIAPAAIAfAAIAiAAIAEAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAKIAAAUIAAANIAAAEIABACQAAADgFAAIgJAAIgwAAIgZAAQgEAAAAAFIgCAoIABAvIAAAXQAAAGAFAAIAvAAIAtgDQAYgCATgRQAHgGACAAQADAAABAHIAAAlIAAAWIAAAEIAAAOQgBAEgCABIgGABIgqAAg");
	this.shape_4.setTransform(127.4,-8.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C2C1C2").s().p("AB5DPIgsABIgWgBQgMAAAAgDIAGgIQARgUACgXIADg0IAAg6IAAg7IAAgOIAAAAIgBgGIgDAHIgDALIgFANIgSA5IgLAlIgLAmIgLAlIgFARIgEATQgCAIgHgBIgFAAQgHAAgDgGIgHgUIgVhDIgPgtIgPgvIgMghIgGgSIgDgGIgBAIIAAANIAAAfIAAAWIAAApIABBGQABAbAYAaQAEADgGABIgHABIgpgBIgoAAIgBAAQgIAAAAgCQAAgDAGgGQARgUADgXIACg0IAAgVIAAg6IABgmIAAgWIgBgqIgBhFQAAgbgYgaQgEgDAGgCIAHAAIAzAAIAYAAIAJAAQAHAAACAHIALAkIALAjIASA2IAOAmIAHAUIAFAQQAGAPABAAQACAAACgHIAGgQIANgtIAUhCIARg5IACgGIAFgRQACgHAIAAIAPAAIANAAIAoAAIAWAAQAMAAAAADIgGAJQgRAUgDAXIgCA0IAAAUIAAA7IAAAmIgBAWIABApIABBGQABAbAYAaQADADgFABIgHABg");
	this.shape_5.setTransform(92.025,-8.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C2C1C2").s().p("AAPDPIgtABIgWgBQgMAAAAgCIAGgJQARgUADgXIACg0IAAgSIgBgKIgKgaIgMgiIgOglIgPgpIgVg3IgRgvQgGgNgMgLIgKgLQgDgDAFgCIAIAAIArAAIAhAAIATAAIAaAAIAEAAIAIAAQAFACgDADQgTASgEAJIgCAIIADAPIAHAaIAMAiIANAoIANAiQADAIADAAQACAAACgHIAEgLIAKgfIAPgwQAEgKAJgjIACgNQAAgRgYgTQgHgFAGgBIAGAAIAlAAIAfAAIAgAAQAHAAAAAEIgDAFQgQALgJARQgGALgLAiIgVA/IgJAdIgTA5IgJAbIgHAUIgBAKIABBFQABAbAZAaQADADgGABIgHABg");
	this.shape_6.setTransform(42.8221,-8.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2C1C2").s().p("AALDPIgsABIgXgBQgLAAAAgCIAGgJQARgUADgXIACg0IAAg6IAAg7IAAgWIAAgqIAAgoIAAgYQAAgFgGAAIgcAAQgbABgbAZQgDADgBgGIAAgHIAAgmIAAgLIAAgSQAAgHAJAAIAoAAIA/AAIA9AAIAiAAIAvAAQAJAAAAAIIAAAsIAAAVQABAMgEAAIgJgFQgVgTgWgCIgfgBQgFAAAAAFIAAAsIgBAUIABA7IgBAmIAAAWIABApIAABGQABAbAYAaQAEADgGABIgHABg");
	this.shape_7.setTransform(11.7,-8.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2C1C2").s().p("AAKDQIgrAAIgWAAQgMAAAAgDIAGgJQARgUADgXIACg0IAAgVIAAg6IAAglIABgXIgBgpIgBhGQgBgbgYgaQgEgDAGgCIAHAAIAmAAIANAAIAnAAIAWAAQAMAAAAADIgGAJQgRAUgDAXIgCA0IAAA0IAABAIAAAXIAAApIABBGQABAbAYAaQADADgFABIgHABg");
	this.shape_8.setTransform(-11.9,-8.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C2C1C2").s().p("AAnDPIgzAAIhCABIgsgBQgIABAAgDQAAgDAGgGQARgUACgXIADg0IABgzIgBhCIAAgWIAAgpIgBhGQAAgbgZgaQgDgDAGgCIAGAAIAnAAIAMAAIAAAAIAkAAIAXAAQALAAAAADIgFAJQgJAKgEAKQgFAJgBAMIgBAYIAAAaIABBEIAABBIgBApIABAvIAAAYQAAAEAFAAIAUAAIAUAAIA0gBQAYgDAUgRQAGgGADAAQACAAAAAIIABAhIgBAZIAAACIAAAQQAAAEgCABIgHAAIgpABg");
	this.shape_9.setTransform(-35.35,-8.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2C1C2").s().p("AAnDPIguAAIgUABIAAAAIgJAAIgKAAIgkAAIgHAAIgdAAQgMAAAAgEIAGgIQARgUACgXIADg0IAAgVIAAg6IABglIAAgXIgBgpIgBhGQgBgbgYgaQgDgDAGgCIAHAAIAmAAIAMAAIAeAAIBMABIBHgBIAKAAIABAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAAGIAAAZIAAAnIAAAEIAAAHQgCAFgDgDQgZgXgaAAIgygBIgTAAIgQAAQgGAAAAAFIgBALIAAAZIABBEQAAAGAFAAIAPAAIAfAAIAiAAIAEAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAAKIAAAUIAAANIAAAEIABACQAAADgFAAIgJAAIgvAAIgZAAQgFAAgBAFIgBAoIABAvIAAAXQAAAGAFAAIAvAAIAtgDQAYgCATgRQAHgGACAAQADAAAAAHIAAAlIABAWIAAAEIgBAOQAAAEgCABIgHABIgpAAg");
	this.shape_10.setTransform(-64.85,-8.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C2C1C2").s().p("AhRDPIgxABIgEAAIgHgBQgFgBADgDQAYgaABgbIABhBIAAgsIAAgZIAAgQIAAgyIAAgyIgDg0QgCgXgRgUQgGgGAAgDQAAgDAIAAIAYAAIAmAAIArAAIAPAAQAxAAAUAGQA9ARAWBNQAGAVACAaIADA6QAAA7gNAxQgUBOg9ASQgUAGg0AAgAgliRIAAAJIAAAUIAAAeIAAAwIAAAXIABBFIgBAUIAAAuIAAAHQAAANACAEQADAEAHABIARABQAcAAAPgQQAUgWAFgpQAFgiAAgiQAAgkgGgjQgHgsgTgVQgLgNgRgDQgGgBgaAAIgCAAQgIAAAAAFg");
	this.shape_11.setTransform(-96.675,-8.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C2C1C2").s().p("AAKDQIgrAAIgWAAQgMAAAAgDIAGgJQARgUADgXIACg0IAAgVIgBg6IABglIAAgXIAAgpIgBhGQgBgbgYgaQgDgDAFgCIAHAAIAnAAIAMAAIAnAAIAWAAQAMAAAAADIgGAJQgRAUgDAXIgCA0IgBA0IABBAIgBAXIABApIABBGQABAbAYAaQADADgFABIgHABg");
	this.shape_12.setTransform(-122.75,-8.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C2C1C2").s().p("AgrDQIguAAIgaAAQgMAAAAgEQAAgCAGgGQARgQACgbIADg0IABg9IgBg3IABgXIgBgpIgBhGQgBgbgYgaQgDgDAFgCIAIAAIAmAAIAMAAIAdAAIBNABIBHgBIAKAAIABAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAAGIAAAZIAAAnIAAAEIAAAHQgCAFgEgDQgYgXgaAAIgygBIgUAAIgQAAQgFAAAAAFIAAALIAAAZIAABEQAAAGAFAAIAOAAIAgAAIAhAAQAHAAAAAEIAAAKIAAAUIAAANIAAAEQAAAFgFAAIgIAAIgwAAIgZAAQgFAAAAAFIAAAoIAAAvIAAAVQAAAXAFANQAGANAMAPIABACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgJABIgkAAg");
	this.shape_13.setTransform(-145.95,-8.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C2C1C2").s().p("AAnDPIguAAIgUABIAAAAIgJAAIgKAAIgkAAIgHAAIgdAAQgMAAAAgEIAGgIQARgUACgXIADg0IAAgVIAAg6IABglIAAgXIgBgpIgBhGQgBgbgYgaQgDgDAFgCIAIAAIAmAAIAMAAIAeAAIBMABIBHgBIAKAAIABAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIAAAGIAAAZIAAAnIAAAEIAAAHQgCAFgDgDQgZgXgaAAIgygBIgTAAIgRAAQgFAAAAAFIgBALIAAAZIABBEQAAAGAFAAIAPAAIAfAAIAhAAIAFAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAKIAAAUIAAANIAAAEIABACQAAADgFAAIgJAAIgwAAIgZAAQgEAAAAAFIgCAoIABAvIAAAXQAAAGAFAAIAvAAIAtgDQAYgCATgRQAHgGACAAQADAAABAHIAAAlIAAAWIAAAEIAAAOQgBAEgCABIgGABIgqAAg");
	this.shape_14.setTransform(-187.6,-8.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C2C1C2").s().p("ABrDQIgNgBIgoABIgWAAQgMAAAAgDIAGgJQARgUADgXIACg0IAAgVIAAhDQAAgFgFAAIgeAAIg3AAQgFAAAAAFIAAADIAAAXIAAApIABBGQABAbAYAaQADADgFABIgHABIgvAAIgsAAIgWAAQgMAAAAgDIAGgJQARgUACgXIADg0IABgsIgBhIIAAgXIAAgpIgBhGQgBgbgYgaQgDgDAFgCIAHAAIAnAAIAMAAIAoAAIAWAAQAMAAAAADIgGAJQgRAUgCAXIgDA0IAAAVIAAAaQAAAFAFAAIAhAAIAfAAIAWAAQAEAAAAgFIAAgaIgBhGQgBgbgYgaQgDgDAFgCIAIAAIAuAAIAsAAIAXAAQALAAAAADIgGAJQgRAUgCAXIgCA0IgCAvIABBFIAAAXIABApIAABGQABAbAYAaQAEADgGABIgHABg");
	this.shape_15.setTransform(-220.725,-8.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C2C1C2").s().p("AALDPIgsABIgXgBQgLAAAAgCIAGgJQARgUADgXIABg0IABg6IAAg7IAAgWIAAgqIAAgoIAAgYQAAgFgGAAIgcAAQgbABgbAZQgDADgBgGIAAgHIAAgmIAAgLIAAgSQAAgHAJAAIAoAAIA/AAIA9AAIAiAAIAvAAQAJAAAAAIIAAAsIAAAVQABAMgEAAIgJgFQgVgTgWgCIgfgBQgFAAAAAFIgBAsIAAAUIAAA7IAAAmIAAAWIAAApIABBGQABAbAYAaQAEADgGABIgHABg");
	this.shape_16.setTransform(-252.9,-8.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269,-44.5,538.1,89);


(lib.Tween17copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAPwIrSEaMAAAgoTIWlAAMAAAAoTg");
	this.shape.setTransform(0.0353,-0.0025,1.4168,1.4168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.4,-182.7,204.9,365.4);


(lib.Tween17copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2C1C2").s().p("AAICvIgkAAIgTAAQgJAAAAgDIAEgIQAPgQACgUIACgrIAAgxIAAgxIABgTIgBgiIAAgjIAAgUQAAgEgEAAIgYABQgXAAgWAVQgDADgBgFIAAgGIAAggIAAgKIAAgOQAAgHAIAAIAhAAIA1ABIAzAAIAcAAIAogBQAIAAAAAIIAAAkIAAATQAAAKgDAAIgIgFQgRgQgTgCIgagBQgEAAAAAEIAAAlIgBASIABAwIgBAgIAAATIABAiIAAA7QABAXAUAVQABABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgHABg");
	this.shape.setTransform(243.625,-6.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2C1C2").s().p("ABTCvIgRAAQgGAAgDgGIgEgFIgWgoIgdgzIgTgiIgVglIgSgfIgGgHQgCAAAAAJIAAApIAAATIAAAiIABA7QABAXAUAVQABABAAABQAAAAAAABQAAAAgBABQgBAAgBAAIgFABIgmAAIgPgBIgTABIgBAAQgGAAAAgDIAFgIQAOgQACgUIACgrIAAgSIAAgwIAAggIABgTIgBgiIgBg7QAAgWgVgWQgCgDAEgBIAGgBIAbABIAjAAIAEAAQAGgBADAGIAIAPIAXAnIAUAnIAUAfIAdAvIADAGIADAFQACAAABgKIAAgRIAAgTIAAgiIgCg7QAAgWgUgWQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAHgBIAyABIAWAAIAAAAQAGAAABACIgGAIQgNAQgDAUIgCArIAAASIAAAxIAAAfIAAATIAAAiIABA7IAAAqQAAAHgFAAg");
	this.shape_1.setTransform(216.8,-6.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2C1C2").s().p("AAwCuIgoAAIgkAAIgSAAQgKAAAAgCIAFgIQAOgQACgUIADgsIAAgRIgBgxIABgfIAAgTIAAgjIgCg6QAAgWgVgWQgCgDAEgBIAHAAIAgAAIAKAAIAgAAIATAAQAKAAAAADIgFAHQgOAQgCAUIgCAsIgBAqIABA3IAAATIAAAiIAAA7QABAXAUAVQABABAAAAQABABgBABQAAAAAAABQgBAAgBAAg");
	this.shape_2.setTransform(194.2,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2C1C2").s().p("AhBCbQgjgegNgwQgKgoAAgoQAAgXAEgWQADgZAMgcQALgZANgOQAggnAxAAQAOAAANADQA2ANAaBEQALAdADArIACAcQAAAVgEAVQgDAegMAaQgQAngeATQgcATgfAAQglAAgcgZgAgYh2QgLARgGAaQgIApgBAiQAABLAZAmQALASAOAAQAUAAANgdQAKgZAEgsIACgkQABgkgHgfQgIgqgRgOQgIgGgKAAQgOAAgKAOg");
	this.shape_3.setTransform(172.75,-6.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C2C1C2").s().p("Ag+CuIgpABIgEAAIgGgBQgEgBADgDQAUgVAAgXIABg2IABglIAAgVIAAg0IgBguIgCgrQgCgUgOgQQgFgGAAgCQAAgCAGAAIAVgBIAgABIA/gBIAbADQApAFAXAcQARAWADApIAAARQAAAegJAbQgGASgSAPQgNALgRAFQgTAGgXABIgYAAIgJAAQgFAAABAGIAAAlQAAAjADAIQAFAQANANQAAABABABQAAAAAAABQgBAAAAABQgBAAgBAAIgGABgAgWh8QgDABAAAGIAAADIAAARIgBAVIAAAcIABAnIAAAKQAAAEAEAAIAHABIAOgBQASAAAHgDQAJgDAIgKQAGgJACgTIABgbQAAgMgDgOQgDgNgIgJQgLgLgWAAIgJAAIgOAAg");
	this.shape_4.setTransform(146.375,-6.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C2C1C2").s().p("AAICvIgkAAIgTAAQgJAAAAgDIAEgIQAPgQACgUIACgrIAAgxIAAgxIABgTIgBgiIAAgjIAAgUQAAgEgEAAIgYABQgXAAgWAVQgDADgBgFIAAgGIAAggIAAgKIAAgOQAAgHAIAAIAhAAIA1ABIAzAAIAcAAIAogBQAIAAAAAIIAAAkIAAATQAAAKgDAAIgIgFQgRgQgTgCIgagBQgEAAAAAEIAAAlIgBASIABAwIgBAgIAAATIABAiIAAA7QABAXAUAVQABABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgHABg");
	this.shape_5.setTransform(110.325,-6.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C2C1C2").s().p("AgyCmQgOgIgHAAQgLgBgMAQQgEAEgEAAQgDABAAgJIAAgoIAAgiIAAgUIAAgDQAAgHADgBIAJgBIAOgBIAHABQABABAFANIAGAPQAIAQAKAKQAQAPAZAAQARAAAMgJQAOgKAAgRQAAgjgxgUQgcgLgTgLQgUgNgOgRQgUgaAAghQAAgiANgZQAMgZAZgNQAYgNAfAAQAdAAAVAOQANAJAHAAQAKgBAMgPQAEgEADAAQAEAAAAAIIgBAoIAAAjIABATIAAACQAAAIgDABIgJABIgOAAIgGgBIgGgNIgGgPQgIgRgJgJQgQgPgYAAQgQAAgLAGQgRAMAAAUQAAAMAHALQALAQAnAPQAwATATARQAeAaAAAuQAAAWgHAWQgLAmghARQgZANggAAQgeAAgVgOg");
	this.shape_6.setTransform(85.475,-6.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C2C1C2").s().p("ABCCuIghAAIgnAAIgRAAIAAAAIgHAAIgJAAIgeAAIgFAAIgZAAQgKAAAAgCIAFgIQAPgQABgUIACgsIAAgRIAAgxIABgfIAAgTIgBgjIgBg6QAAgWgUgWQgDgDAEgBIAHAAIAfAAIALAAIAYAAIBBAAIA7AAIAJAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAAEIAAAWIAAAgIAAAEIgBAFQgBAFgDgDQgUgTgXgBIgpAAIgQAAIgOAAQgEAAAAAEIAAAJIgBAVIABA5QAAAFAEAAIANAAIAZAAIAcAAIAEABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAAIIgBAQIABAMIAAADIAAABQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgIAAIgoAAIgVAAQgEAAAAAEIAAAhIAAAoIAAAUQAAAEAEABIAoAAIAlgDQAUgCAQgOQAGgFACAAQACAAAAAHIAAAeIAAASIABADIgBANQAAAAAAABQAAABAAAAQgBAAAAABQgBAAAAAAIgGABg");
	this.shape_7.setTransform(60.8,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2C1C2").s().p("ABlCvIgLAAIgNgBIgrABQgFAAgBgGIgHgyIgJhNIgBgDIgBgOIgCgSIgCgPIgBgFIgBgCQgCABAAAEIgBAFIgBALIgDAfIgEAdIgLBnQgBAGgFAAIgMAAIgdAAIgZAAQgFAAgCgGIgKgyIgPhNIgKg4IgIgnIgHgpIgHggIgGgTQgCgEgPgUQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFAAIAUAAIAdAAIAQAAIAQAAIAQAAIADAAIAFAAQABAAABABQAAAAAAABQAAAAAAABQAAAAgBABQgMAQgCAHIgCAOIADAaIAGAqIAHAmIAIA2IAFAhIACAMIACAHIACgHIABgLIAFgjIAHg1IAFgjIAFgtIAIg9QAAgGAHAAIAJAAIAeAAIAEAAQAKAAACACIACAHIADASIAEAoIAEAWIAIA8IAGA0IAEAhIACANQAAAFACACQACAAACgPIAGgoIAHg0IAGgjIAFgsIACgZQAAgIgDgIQgDgIgMgPQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBABAAQACgBAFABIAbAAIAoAAIADAAIAFAAQABAAAAABQABAAAAABQAAAAAAABQAAAAgBABQgKANgFAIQgFAKgHAtIgHAoIgGAnIgKA4IgNBNIgHAyQgBAGgFAAIgBAAg");
	this.shape_8.setTransform(29.175,-6.8083);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C2C1C2").s().p("AAICvIgkAAIgTAAQgJAAAAgDIAEgIQAPgQACgUIACgrIAAgxIAAgxIABgTIgBgiIAAgjIAAgUQAAgEgEAAIgYABQgXAAgWAVQgDADgBgFIAAgGIAAggIAAgKIAAgOQAAgHAIAAIAhAAIA1ABIAzAAIAcAAIAogBQAIAAAAAIIAAAkIAAATQAAAKgDAAIgIgFQgRgQgTgCIgagBQgEAAAAAEIAAAlIgBASIABAwIgBAgIAAATIABAiIAAA7QABAXAUAVQABABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgHABg");
	this.shape_9.setTransform(-12.175,-6.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2C1C2").s().p("ACECuIgYAAIgsAAIgOAAIgUAAIgEAAIgGAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBQAPgPACgIIADgMIgEgcIgEgRQgBgFgEAAIgggBIgpAAIgDAAQgEAAgBAFIgEASIgGAcQAAAGADAGQADAIAPAPQAAABABAAQAAABAAABQAAAAgBABQgBAAgBAAIgJAAIghAAIgoAAIgEAAIgGAAQgEgBACgDIAUgVQAHgIADgLIAKgkIALgoIAJgmIARg4IALgoIAJglIAEgVQAAgGgDgHIgKgMQgFgFAAgDQAAgCAHAAIAcAAIAOAAIAPAAIAdAAIAUAAQAKAAAAADIgFAHQgIAJgCAEIgCALIADAWIATBMIANA5IAKAmIAKAoQAKAsAFAIIAVAYQADADgEABgAgKhcIgIAeIgJAkIgNA1IgCALIAAABQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIAWABIAhgBQAEAAgBgFIgCgKIgGgaIgFgbIgGgiIgIghIgBgCIgBADg");
	this.shape_10.setTransform(-39.2846,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C2C1C2").s().p("ABSCvIgQAAQgGAAgEgGIgDgFIgWgoIgdgzIgTgiIgVglIgSgfIgGgHQgCAAAAAJIABApIgBATIABAiIAAA7QABAXAUAVQABABAAABQAAAAAAABQAAAAgBABQgBAAgBAAIgGABIglAAIgPgBIgUABIAAAAQgHAAABgDIAEgIQAOgQADgUIABgrIABgSIgBgwIABggIAAgTIAAgiIgBg7QgBgWgTgWQgEgDAFgBIAGgBIAbABIAjAAIAEAAQAGgBADAGIAIAPIAWAnIAWAnIATAfIAcAvIAEAGIAEAFQABAAAAgKIAAgRIABgTIgBgiIgBg7QAAgWgUgWQgBAAAAgBQAAgBAAAAQAAgBABAAQABgBAAAAIAHgBIAxABIAXAAIAAAAQAHAAgBACIgEAIQgPAQgCAUIgBArIAAASIAAAxIgBAfIAAATIABAiIAAA7IABAqQAAAHgHAAg");
	this.shape_11.setTransform(-79.6,-6.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C2C1C2").s().p("AhBCbQgjgegNgwQgKgoAAgoQAAgXAEgWQADgZAMgcQALgZANgOQAggnAxAAQAOAAANADQA2ANAaBEQALAdADArIACAcQAAAVgEAVQgDAegMAaQgQAngeATQgcATgfAAQglAAgcgZgAgYh2QgLARgGAaQgIApgBAiQAABLAYAmQAMASAOAAQAUAAANgdQAKgZAEgsIACgkQABgkgHgfQgIgqgRgOQgIgGgKAAQgOAAgKAOg");
	this.shape_12.setTransform(-108.05,-6.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C2C1C2").s().p("AgyCmQgOgIgHAAQgLgBgMAQQgEAEgEAAQgDABAAgJIAAgoIAAgiIAAgUIAAgDQAAgHADgBIAJgBIAOgBIAHABQABABAFANIAGAPQAIAQAKAKQAQAPAZAAQARAAAMgJQAOgKAAgRQAAgjgxgUQgcgLgTgLQgUgNgOgRQgUgaAAghQAAgiANgZQAMgZAZgNQAYgNAfAAQAdAAAVAOQANAJAHAAQAKgBAMgPQAEgEADAAQAEAAAAAIIgBAoIAAAjIABATIAAACQAAAIgDABIgJABIgOAAIgGgBIgGgNIgGgPQgIgRgJgJQgQgPgYAAQgQAAgLAGQgRAMAAAUQAAAMAHALQALAQAnAPQAwATATARQAeAaAAAuQAAAWgHAWQgLAmghARQgZANggAAQgeAAgVgOg");
	this.shape_13.setTransform(-134.575,-6.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C2C1C2").s().p("ACECuIgYAAIgsAAIgOAAIgUAAIgEAAIgGAAQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAABgBQAPgPACgIIADgMIgEgcIgEgRQgBgFgEAAIgggBIgpAAIgDAAQgEAAgBAFIgEASIgGAcQAAAGADAGQADAIAPAPQAAABABAAQAAABAAABQAAAAgBABQgBAAgBAAIgJAAIghAAIgoAAIgEAAIgGAAQgEgBACgDIAUgVQAHgIADgLIAKgkIALgoIAJgmIARg4IALgoIAJglIAEgVQAAgGgDgHIgKgMQgFgFAAgDQAAgCAHAAIAcAAIAOAAIAPAAIAdAAIAUAAQAKAAAAADIgFAHQgIAJgCAEIgCALIADAWIATBMIANA5IAKAmIAKAoQAKAsAFAIIAVAYQADADgEABgAgKhcIgIAeIgJAkIgNA1IgCALIAAABQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIAWABIAhgBQAEAAgBgFIgCgKIgGgaIgFgbIgGgiIgIghIgBgCIgBADg");
	this.shape_14.setTransform(-162.3846,-6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C2C1C2").s().p("ABDCuIgiAAIgnAAIgQAAIgBAAIgHAAIgJAAIgeAAIgFAAIgZAAQgKAAAAgCIAFgIQAOgQACgUIADgsIAAgRIAAgxIAAgfIAAgTIAAgjIgCg6QAAgWgVgWQgCgDAEgBIAGAAIAhAAIAKAAIAYAAIBBAAIA7AAIAJAAIABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAAEIAAAWIAAAgIAAAEIgBAFQAAAFgEgDQgVgTgVgBIgqAAIgQAAIgNAAQgFAAAAAEIAAAJIgBAVIABA5QAAAFAEAAIANAAIAZAAIAcAAIAEABQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIAAAIIAAAQIAAAMIAAADIAAABQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgIAAIgoAAIgUAAQgFAAAAAEIAAAhIAAAoIAAAUQAAAEAEABIAoAAIAlgDQAUgCAQgOQAFgFACAAQADAAAAAHIAAAeIAAASIABADIgBANQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAIgGABg");
	this.shape_15.setTransform(-189.3,-6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C2C1C2").s().p("AAyCvIgbAAIgEAAIgGgBQgFgBADgDQAPgPADgIIABgGQAAgEgFgPIgKgeIgSgtIgDgIQgCgDgEgBIgNABIgKAAQgFAAAAAEIAAAVIAAAlQAAAjADAIQAFAQANANQABABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgHABIgygBIgpABIgDAAIgGgBQgFgBADgDQAUgVABgXIABg2IAAglIAAgVIAAg0IAAguIgCgrQgCgUgPgQQgFgGAAgCQAAgCAHAAIAVgBIAfABIBBgBIAZADQApAEAXAaQAUAWABAjQABAogKAcQgHASgUAMIgHAEQgDACACAFIAPAlIAQAmIARAoQAFAMAKAJIAIAIQAEAFgEAAIgJABgAghh9IgGABIgBAFIAAAJIAAAQIAAAUIAAAaIAAAgQAAAFAEAAIAFAAIASAAQASgBAHgDQAHgCAIgKQAHgHABgRIABgTQAAgPgDgMQgCgLgIgHQgLgLgeAAg");
	this.shape_16.setTransform(-216.6625,-6.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C2C1C2").s().p("AAICvIgkAAIgTAAQgJAAAAgDIAEgIQAPgQACgUIACgrIAAgxIAAgxIABgTIgBgiIAAgjIAAgUQAAgEgEAAIgYABQgXAAgWAVQgDADgBgFIAAgGIAAggIAAgKIAAgOQAAgHAIAAIAhAAIA1ABIAzAAIAcAAIAogBQAIAAAAAIIAAAkIAAATQAAAKgDAAIgIgFQgRgQgTgCIgagBQgEAAAAAEIAAAlIgBASIABAwIgBAgIAAATIABAiIAAA7QABAXAUAVQABABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgHABg");
	this.shape_17.setTransform(-243.725,-6.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.3,-37.3,514.6,74.69999999999999);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.linedrawing_expand();
	this.instance.setTransform(-500.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500.5,-69.5,1001,139);


(lib.Tween16copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAPwIrSEaMAAAgoTIWlAAMAAAAoTg");
	this.shape.setTransform(0.0353,-0.0025,1.4168,1.4168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.4,-182.7,204.9,365.4);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.linedrawing_expand();
	this.instance.setTransform(-500.5,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500.5,-69.5,1001,139);


(lib.Tween15copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image5();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.H202341_reverse();
	this.instance.setTransform(-139,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-200,278,400);


(lib.Tween14copy3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image5();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.H202341_reverse();
	this.instance.setTransform(-139,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-200,278,400);


(lib.Tween13copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image4();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween12copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image4();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("EhOCAFtIJiAAQAEgRAGgVQAKgiAQgqQA1iJBRhyQEClsG/AAQG/AAD5FrQBOBwAwCIQAZBEAIAtIHvAAQAGgtAThEQAliIBChwQDSlrGcAAQGcAADVFrQBCBwAnCIQATBEAGAtII1AAQACgtAPhFQAfiIA+hxQDLlrHIACQG/ADC8FrQA7ByAaCIQAOBEABAtIIwAAQAJhfAbh2QA3jsBehzQBJhaBygrQBVggBYAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAkA8QBDBtAQBkQAZCbAKBkIKeAA");
	this.shape.setTransform(0.025,-0.0005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween11copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image3();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("AlOAAIKdAA");
	this.shape.setTransform(466,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(7,1,1).p("EhIzAFtIJiAAQAEgRAGgVQAKgiAQgqQA1iJBRhyQEClsG/AAQG/AAD5FrQBOBwAwCIQAZBEAIAtIHvAAQAGgtAThEQAliIBChwQDSlrGcAAQGcAADVFrQBCBwAnCIQATBEAGAtII0AAQACgtAPhFQAfiIA/hxQDLlrHIACQG/ADC8FrQA7ByAaCIQAOBEABAtIIwAAQAJhfAbh2QA3jsBehzQBJhaBygrQBVggBYAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAkA8QBDBtAQBkQAZCbAKBk");
	this.shape_1.setTransform(-33.475,-0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween10copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image3();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("EhFZAFtIJiAAQAEgRAGgVQAKgiAQgqQA0iJBRhyQEDlsG/AAQG/AAD4FrQBOBwAxCIQAYBEAJAtIHvAAQAFgtAThEQAmiIBBhwQDTlrGcAAQGcAADUFrQBDBwAmCIQATBEAGAtII0AAQADgtAPhFQAeiIBAhxQDKlrHIACQG/ADC9FrQA7ByAaCIQANBEABAtIIwAAQAJhfAch2QA3jsBdhzQBKhaBygrQBVggBXAAIVaAA");
	this.shape.setTransform(-55.225,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("AoolsQA1AABFAsQA8AnAmAvQA+BKAkA9QBCBtAQBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(444.25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween9copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image2();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("Eg6sAFtIJiAAQAEgRAGgVQAKgiAQgqQA0iJBRhyQEDlsG/AAQG/AAD4FrQBOBwAxCIQAYBEAJAtIHvAAQAFgtAThEQAmiIBBhwQDTlrGcAAQGbAADUFrQBDBwAmCIQATBEAGAtII1AAQADgtAPhFQAeiIBAhxQDKlrHIACQG/ADC9FrQA7ByAaCIQANBEABAtIIwAAQAJhfAch2QA3jsBdhzQBKhaBygrQBVggBXAA");
	this.shape.setTransform(-123.725,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("AzVlsIVaAAQA0AABFAsQA8AnAnAvQA9BKAkA9QBCBtARBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(375.75,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween8copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image2();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("Eg2cAFtIJiAAQAEgRAGgVQAKgiAQgqQA1iJBRhyQEClsG/AAQG/AAD5FrQBOBwAwCIQAZBEAIAtIHvAAQAGgtAThEQAliIBChwQDSlrGbAAQGcAADVFrQBCBwAnCIQATBEAGAtII1AAQACgtAPhFQAfiIA/hxQDLlrHIACQG/ADC8FrQA7ByAaCIQAOBEABAtIIwAA");
	this.shape.setTransform(-150.975,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("A3lFtQAJhfAbh3QA3jrBehzQBKhbBxgqQBVggBYAAIVZAAQA0AABFAsQA8AnAnAvQA9BKAlA9QBCBtAQBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(348.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween7copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image1();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("EgyEAFtIJiAAQAEgRAGgVQAKgiAQgqQA1iJBRhyQEClsG/AAQG/AAD5FrQBOBwAwCIQAZBEAIAtIHvAAQAGgtAThEQAliIBChwQDSlrGbAAQGcAADVFrQBCBwAnCIQATBEAGAtII1AAQACgtAPhFQAfiIA/hxQDLlrHIACQG/ADC8FrQA7ByAaCIQAOBEABAt");
	this.shape.setTransform(-178.975,-0.0005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("A79FtIIwAAQAJhfAbh3QA3jrBehzQBKhbBxgqQBVggBYAAIVZAAQA0AABFAsQA8AnAnAvQA9BKAlA9QBCBtAQBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(320.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween6copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WHM_Image1();
	this.instance.setTransform(-500,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-200,1000,400);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("EgmTAFtIJiAAQAEgRAGgVQAKgiAQgqQA0iJBRhyQEDlsG/AAQG/AAD4FqQBOBxAxCHQAYBEAJAuIHuAAQAFguAThEQAmiHBBhxQDTlqGcAAQGcAADUFqQBDBwAmCIQATBEAGAuII1AA");
	this.shape.setTransform(-254.225,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("EgnuAFoQADgtAPhFQAeiIBAhxQDKlrHIACQHAADC8FrQA7ByAaCIQANBEABAtIIwAAQAJhfAch2QA3jsBdhzQBKhaBygrQBVggBXAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAkA8QBCBtARBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(245.25,-0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("Egh5AFtIJiAAQAEgRAGgVQAKgiAQgqQA1iJBRhyQEClsG/AAQG/AAD4FqQBOBxAwCHQAZBEAIAuIHvAAQAGguAThEQAliHBChxQDSlqGcAAQGcAADVFqQBCBwAnCIQATBEAGAu");
	this.shape.setTransform(-282.475,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("EgsIAFoII1AAQACgtAPhFQAfiIA/hxQDLlrHIACQG/ADC8FrQA8ByAZCIQAOBEABAtIIwAAQAJhfAbh2QA3jsBehzQBJhaBygrQBVggBXAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAlA8QBCBtAQBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(217,-0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("A2JFtIJiAAQAEgRAGgVQAKgiAQgqQA1iJBRhyQEClsG/AAQG+AAD5FqQBOBxAwCHQAZBEAJAuIHvAA");
	this.shape.setTransform(-357.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("Eg34AFoQAFgtAThEQAmiIBBhwQDTlrGcAAQGcAADUFrQBDBwAmCIQATBEAGAtII1AAQADgtAPhFQAeiIBAhxQDKlrHIACQG/ADC9FrQA7ByAaCIQANBEABAtIIvAAQAJhfAch2QA3jsBdhzQBKhaBygrQBVggBXAAIVaAAQA0AABGAtQA8AmAmAvQA9BLAlA8QBCBtAQBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(141.775,-0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("AyRFtIJiAAQAEgRAGgVQAKgiAQgqQA0iJBRhyQEDlsG+AAQG/AAD4FqQBPBxAwCHQAYBEAJAu");
	this.shape.setTransform(-382.45,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("Eg7wAFoIHvAAQAGgtAThEQAliIBChwQDSlrGcAAQGcAADVFrQBCBwAnCIQATBEAGAtII1AAQACgtAPhFQAfiIA/hxQDLlrHIACQG/ADC7FrQA7ByAaCIQAOBEABAtIIwAAQAJhfAbh2QA3jsBehzQBJhaBygrQBVggBYAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAkA8QBDBtAQBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(117.025,-0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("AkwAAIJhAA");
	this.shape.setTransform(-468.95,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("EhJRAFtQAEgRAGgVQAKgiAQgqQA1iJBRhyQEClsG/AAQG/AAD5FrQBOBwAwCIQAZBEAIAtIHvAAQAGgtAThEQAliIBChwQDSlrGcAAQGcAADVFrQBCBwAnCIQATBEAGAtII1AAQACgtAPhFQAfiIA/hxQDLlrHHACQG/ADC8FrQA7ByAaCIQAOBEABAtIIwAAQAJhfAbh2QA3jsBehzQBJhaBygrQBVggBYAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAkA8QBDBtAQBkQAZCbAKBkIKeAA");
	this.shape_1.setTransform(30.525,-0.0005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(7,1,1).p("EhOCAFtIJiAAQAKgtAahFQA1iJBRhyQEClsG/AAQG/AAD5FrQBOBwAwCIQAZBEAIAtIHvAAQAGgtAThEQAliIBChwQDSlrGcAAQGcAADVFrQBCBwAnCIQATBEAGAtII1AAQACgtAPhFQAfiIA+hxQDLlrHIACQG/ADC8FrQA7ByAaCIQAOBEABAtIIwAAQAJhfAbh2QA3jsBehzQBJhaBygrQBVggBYAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAkA8QBDBtAQBkQAZCbAKBkIKeAA");
	this.shape.setTransform(0.025,-0.0005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.9,-40,1005.9,80);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_14
	this.instance = new lib.WHM_background();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:true},1).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1000,400);


(lib.votesforwomen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_202 = function() {
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(202).call(this.frame_202).wait(23));

	// title_fortorange
	this.instance = new lib.Forttitle02("synched",0);
	this.instance.setTransform(164.5,-78.5,1,1,0,0,0,244.5,65.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({alpha:1},19).wait(112));

	// Layer_2
	this.instance_1 = new lib.Tween71("synched",0);
	this.instance_1.setTransform(-32.5,-144.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween72("synched",0);
	this.instance_2.setTransform(-32.5,-144.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},77).to({state:[{t:this.instance_2}]},21).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).to({_off:true,alpha:1},21).wait(127));

	// fort (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnLFSIAShgQADgaAVgDQAQgBgDgVIgwkjQgDgVgTACQgbADgKgeQgYg5gKgdQgGgPAHgHQAGgGAQACIBjATQAOADAGARQAEALAOgBIEeg0QARgDgDgRQgDgPAQgJIBRguQANgIAIAFQAIAGgBAQIgJBaQgCAXgSAIQgTAIAFAXIAxEdQAEATARgBQAUgCAJAWIAsBVQAGAMgEAIQgEAHgOABQgiAAhCgOQgMgDAAgLQgBgMgIgDQgEgBgMABQiPAdiCAXQgQADgGAFQgHAHABAPQACAOgNAGQhCAeg2AMg");
	var mask_graphics_10 = new cjs.Graphics().p("AnLFSIAShgQADgaAVgDQAQgBgDgVIgwkjQgDgVgTACQgbADgKgeQgYg5gKgdQgGgPAHgHQAGgGAQACIBjATQAOADAGARQAEALAOgBIEeg0QARgDgDgRQgDgPAQgJIBRguQANgIAIAFQAIAGgBAQIgJBaQgCAXgSAIQgTAIAFAXIAxEdQAEATARgBQAUgCAJAWIAsBVQAGAMgEAIQgEAHgOABQgiAAhCgOQgMgDAAgLQgBgMgIgDQgEgBgMABQiPAdiCAXQgQADgGAFQgHAHABAPQACAOgNAGQhCAeg2AMg");
	var mask_graphics_11 = new cjs.Graphics().p("AnZGbIAVh0QAEggAagEQATgCgDgZIg6liQgEgagXADQghADgMgkQgdhGgNgjQgHgSAIgJQAIgIATADIB5AYQASADAHAVQAFANAQgBIFdg+QAUgFgDgUQgEgSAUgMIBig3QAQgKAJAHQALAHgCATIgLBuQgCAcgXAJQgYAKAHAbIA8FcQAFAXAUgBQAYgCAMAbIA1BnQAHAPgFAJQgFAJgQABQgpAAhRgRQgOgDgBgOQgBgPgKgDQgGgCgPACQitAjidAcQgUADgHAHQgKAIACASQACARgQAHQhQAlhBAOg");
	var mask_graphics_12 = new cjs.Graphics().p("AnoHjIAZiIQAEgmAfgEQAXgCgEgeIhEmhQgEgfgbADQgnAEgOgrQgjhSgOgqQgIgVAJgKQAJgJAXADICPAcQAUAEAIAZQAGAPATgBIGahJQAZgFgFgYQgEgVAYgOIB0hBQAUgLAKAHQANAIgDAXIgMCBQgDAigbALQgcALAHAhIBHGZQAFAcAYgCQAdgCAOAfIA+B6QAIASgGALQgFALgUAAQgwABhggUQgQgFAAgQQgDgRgLgFQgHgBgRACQjMApi6AgQgYAEgIAIQgLAJACAWQACAUgSAIQheArhOARg");
	var mask_graphics_13 = new cjs.Graphics().p("An4IsIAeidQAFgrAkgFQAagDgFgiIhNnhQgFgkgfAEQgtAFgQgxQgohfgRgwQgJgZALgLQAKgLAbAEICkAgQAXAEAKAeQAGARAWgCIHZhTQAcgFgFgbQgFgZAbgQICHhLQAWgNAMAJQAPAJgDAaIgPCVQgDAngfAMQghAOAJAlIBRHYQAGAfAbgBQAhgDAQAkIBHCMQAKAVgHANQgGAMgXABQg4AAhtgXQgTgFgBgTQgCgUgNgFQgJgCgTADQjrAvjXAkQgbAFgJAJQgNALACAZQADAXgVAJQhtAxhZAUg");
	var mask_graphics_14 = new cjs.Graphics().p("AoHJ0IAhixQAGgxApgGQAegDgGgmIhXohQgFgogkAEQgyAFgSg3QgthrgTg3QgKgcAMgNQALgMAeAEIC6AlQAbAFALAhQAHAUAZgCIIXhdQAggGgGgfQgGgcAfgSICYhVQAagOAOAKQAQAKgDAeIgSCoQgDAsgjAOQglAPAKAqIBbIWQAGAkAfgBQAmgEARAqIBRCeQALAXgIAPQgHAOgaABQg/AAh8gbQgVgFgBgWQgDgWgPgGQgJgCgWADQkLA1jyApQgeAFgLAKQgPAMADAdQADAagYAKQh7A4hlAVg");
	var mask_graphics_15 = new cjs.Graphics().p("AoZK9IAmjHQAGg2AugGQAhgEgHgqIhfphQgGgtgoAFQg4AFgUg9Qgyh4gVg9QgMgfAOgPQANgNAhAFIDQApQAdAGANAlQAIAWAbgCIJVhnQAkgIgGgiQgHgfAjgUICqheQAdgQAPALQASAMgEAhIgTC8QgDAwgoAQQgpARALAvIBkJUQAHAoAjgBQAqgEATAuIBaCxQAMAagIAQQgJAQgcABQhHAAiKgeQgYgGAAgYQgDgZgRgGQgLgDgYADQkrA7kOAtQgiAGgLALQgRAOADAfQADAegbAKQiJA/hwAYg");
	var mask_graphics_16 = new cjs.Graphics().p("ApSMFIAqjbQAHg8AygHQAlgEgHgvIhpqgQgGgygsAFQg+AHgWhFQg3iEgYhDQgMgjAQgQQANgPAlAGIDlAuQAhAGANApQAJAZAegDIKUhxQAogIgHglQgHgjAngWIC7hoQAggSARANQATANgEAlIgVDPQgEA1gsASQguASANA0IBtKTQAIAtAmgCQAvgFAVA0IBjDDQAOAdgKASQgJARggABQhOAAiZghQgagHAAgbQgDgbgTgHQgLgDgcADQlJBBkqAxQgmAHgNAMQgSAPADAjQADAggeAMQiXBFh8Aag");
	var mask_graphics_17 = new cjs.Graphics().p("AqMNNIAvjwQAIhCA3gHQAogEgIgzIhxrgQgHg3gwAGQhEAGgYhKQg8iRgahKQgNgmARgRQAPgQApAGID6AzQAkAGAOAtQAKAbAhgDILSh6QAsgIgHgqQgJgmArgYIDOhxQAigTASANQAWAPgEAoIgYDjQgFA6gwATQgyAUANA5IB4LRQAIAxAqgCQAzgFAXA4IBsDXQAPAfgLATQgKAUgjAAQhVAAingkQgdgIAAgdQgEgegUgIQgMgDgeAEQlpBGlGA1QgqAIgOANQgUAQADAnQAEAjghANQilBLiIAcg");
	var mask_graphics_18 = new cjs.Graphics().p("ArFOVIAykFQAJhHA8gIQAsgEgJg4Ih6sfQgHg8g0AGQhKAHgahRQhBidgbhQQgPgqASgTQAQgRAtAHIEQA3QAmAIAQAxQALAcAkgCIMRiEQAvgJgIgtQgJgpAugaIDgh7QAlgVAUAPQAYAQgFArIgbD2QgEBAg1AUQg2AWAOA+ICBMQQAJA0AtgCQA3gFAaA9IB0DpQARAigMAVQgLAVgmABQhcAAi2goQgfgJAAgfQgEghgWgIQgOgEggAEQmIBLljA6QgtAIgPAOQgVASADAqQAEAmgkAPQi0BRiUAeg");
	var mask_graphics_19 = new cjs.Graphics().p("Ar/PcIA3kYQAKhOBAgIQAvgEgJg9IiCtfQgIhAg4AGQhQAIgbhYQhHiqgdhWQgQgtAUgUQARgTAwAHIEmA9QApAIASA1QALAfAngDINPiNQAzgKgIgwQgKgtAygcIDyiEQAogXAVAQQAaARgFAvIgdEKQgGBFg4AWQg7AXAQBDICJNOQAKA5AwgCQA8gFAbBBIB+D8QARAlgMAWQgMAXgpABQhkgBjEgrQghgJAAgiQgFgkgXgIQgPgEgjAEQmnBRl/A9QgxAJgQAPQgXAUADAtQAEApgmAPQjDBXifAhg");
	var mask_graphics_20 = new cjs.Graphics().p("As5QkIA7kuQALhTBFgIQAzgFgKhBIiLueQgIhFg8AGQhWAIgdheQhLi3gghcQgQgwAVgWQATgVAzAJIE7BBQAtAJASA4QAMAiAqgDIOOiWQA2gLgJg0QgKgwA2gdIEDiOQAsgYAXARQAbATgGAyIgfEdQgGBKg9AXQg/AaARBHICSONQAKA9A1gCQBAgGAdBHICGEOQATAogNAYQgOAYgrABQhrgBjTguQgjgLgBgkQgEgmgZgJQgQgFgmAEQnHBXmbBBQg0AJgRARQgaAVAEAwQAFAsgqAQQjRBeirAjg");
	var mask_graphics_21 = new cjs.Graphics().p("AtzRrIBAlCQALhYBKgJQA2gFgKhGIiTveQgJhKhAAHQhcAIgfhkQhQjDghhkQgSgzAXgXQAUgWA3AJIFQBGQAwAKATA8QANAkAtgDIPNifQA6gLgKg4QgKgzA5ggIEViXQAvgZAZASQAcAUgGA1IgiExQgGBPhBAZQhDAbARBMICbPMQALBBA4gCQBEgGAfBLICPEhQAUArgOAaQgOAZguABQhzgBjhgyQgmgLAAgnQgFgogbgKQgRgFgoAEQnmBcm3BFQg4AKgTARQgbAXAEAzQAFAwgsARQjgBji3Amg");
	var mask_graphics_22 = new cjs.Graphics().p("AuuSyIBFlWQAMheBPgKQA6gFgLhKIibweQgJhOhEAHQhiAJghhsQhVjQgkhpQgSg2AYgZQAVgYA7AKIFlBLQAzAKAVBBQAOAmAvgEIQLinQA+gMgJg7QgMg2A9giIEoigQAxgbAaATQAfAVgHA5IgkFFQgHBThFAbQhIAcATBSICjQKQALBFA8gCQBJgGAhBQICXE0QAWAtgQAbQgPAcgxAAQh6AAjvg2QgpgMAAgqQgFgrgdgKQgSgFgrAEQoFBhnTBJQg7AKgVATQgcAXAEA3QAFAzgvASQjuBqjDAng");
	var mask_graphics_23 = new cjs.Graphics().p("AvpT5IBKlrQANhkBTgJQA+gGgLhOIijxeQgKhThIAHQhoAJgihxQhajdgmhwQgTg5AZgbQAXgYA+AKIF7BQQA2ALAWBEQAOApAygEIRLiwQBBgMgKg/QgMg6BBgjIE5ipQA1gdAbAVQAhAWgHA8IgoFYQgHBZhJAcQhMAeATBWICrRJQANBJA/gCQBNgGAjBVICgFGQAXAwgRAdQgQAeg0AAQiBgBj+g5QgrgNAAgsQgFgugegLQgUgGgtAGQokBlnwBNQg/ALgVATQgfAZAEA6QAFA2gxATQj9BwjPApg");
	var mask_graphics_24 = new cjs.Graphics().p("AwjVAIBOl/QAOhqBYgKQBBgGgMhTIiqydQgKhYhNAIQhtAJglh4Qhejpgoh3QgUg9AbgbQAYgaBBAKIGRBWQA5ALAXBJQAPArA1gEISJi5QBFgMgLhDQgMg9BEglIFMizQA3geAeAWQAiAYgIA/IgqFsQgIBehNAdQhQAgAUBbICzSHQANBOBDgDQBRgGAlBaICpFZQAYAzgSAfQgRAeg3ABQiJgBkLg9QgugOAAguQgFgxgggMQgVgFgwAFQpDBqoNBRQhCALgWAVQghAaAEA+QAGA4g1AUQkLB2jaArg");
	var mask_graphics_25 = new cjs.Graphics().p("AxfWHIBUmUQAPhvBcgLQBFgGgMhXIiyzeQgKhchRAIQh0AKgmh/Qhjj2gph9QgWhAAdgdQAZgcBFAMIGmBbQA8AMAYBMQAQAtA4gEITHjAQBJgNgLhGQgNhBBIgoIFei7QA6ggAfAYQAkAZgIBDIgtF/QgIBihSAgQhVAhAWBgIC7TGQANBSBHgDQBVgHAnBfICxFsQAZA2gSAgQgSAhg6AAQiQgCkahAQgwgOAAgyQgFgygigNQgWgGgyAFQpjBvopBVQhGALgYAWQgiAcAEBBQAGA7g3AVQkaB8jmAtg");
	var mask_graphics_26 = new cjs.Graphics().p("AyaXNIBYmoQAQh1BigLQBHgGgMhcIi50dQgLhihUAJQh6AKgoiFQhokDgriDQgXhEAegeQAbgdBJAMIG7BgQA/ANAZBQQAQAwA7gEIUHjJQBNgOgMhJQgOhEBMgpIFwjFQA+ghAgAYQAmAbgJBGIgwGTQgJBnhVAhQhaAjAWBlIDDUEQAOBWBKgCQBagHApBkIC6F/QAaA4gTAiQgTAig9AAQiYgCkohEQgygPAAg0QgGg1gkgNQgWgHg1AGQqCBzpGBYQhJAMgZAXQgkAdAEBEQAGA/g6AWQkoCBjyAwg");
	var mask_graphics_27 = new cjs.Graphics().p("AzVYUIBdm9QAQh7BngLQBLgHgNhgIjA1dQgLhmhZAJQh/AKgqiMQhskPguiKQgXhHAfggQAcgeBMANIHRBmQBCANAaBUQASAyA9gEIVFjQQBRgPgMhNQgOhHBQgrIGBjOQBBgjAiAaQAoAcgJBKIgzGmQgKBthaAiQheAkAXBqIDLVDQAOBaBOgCQBegHArBpIDCGRQAbA7gUAkQgUAjhAABQifgCk2hJQg1gPAAg3QgGg3glgPQgXgHg4AGQqiB5phBbQhNAMgbAYQglAfAEBHQAGBCg9AXQk3CHj+Ayg");
	var mask_graphics_28 = new cjs.Graphics().p("A0RZaIBinRQASiBBrgLQBPgHgOhlIjG2dQgMhrhdAJQiFALgsiSQhxkcgviRQgZhKAighQAdggBPAOIHmBrQBFAOAcBYQASA0BAgEIWEjYQBVgPgNhQQgPhLBUgtIGUjWQBEglAjAbQAqAdgKBOIg2G5QgKByheAjQhiAmAYBvIDRWCQAPBfBRgDQBjgIAtBuIDKGlQAdA+gVAlQgVAlhDAAQingClEhMQg3gRAAg4QgGg7gngPQgZgHg6AGQrBB9p+BeQhRANgbAaQgoAfAFBLQAGBFhAAYQlGCNkJAzg");
	var mask_graphics_29 = new cjs.Graphics().p("A1NagIBnnmQATiGBwgMQBSgHgOhpIjN3dQgMhvhhAJQiLALgtiZQh2kpgxiWQgahOAjgjQAfghBTAPIH7BwQBIAPAcBcQATA3BEgFIXCjfQBZgPgOhVQgPhNBYgwIGmjfQBHgmAkAdQAsAegKBRIg5HNQgLB2hjAlQhmAoAZBzIDYXBQAQBjBVgDQBngHAuByIDTG4QAeBBgWAmQgWAnhGAAQiugClThRQg5gRAAg7QgGg9gpgQQgagHg9AGQrgCBqaBiQhVANgcAbQgqAhAFBOQAHBHhDAaQlUCSkWA2g");
	var mask_graphics_30 = new cjs.Graphics().p("A2JbmIBsn6QAUiMB0gMQBWgHgOhuIjU4dQgMh0hlAJQiRALgvifQh6k1gzieQgbhQAkglQAggiBXAPIIQB2QBMAQAdBgQAUA5BGgFIYCjmQBcgQgOhYQgQhRBbgxIG5joQBKgoAmAeQAtAggLBUIg8HgQgLB8hnAmQhrApAaB5IDgX/QAQBnBYgCQBsgIAwB4IDbHKQAfBEgXAoQgXAohJAAQi1gDlhhUQg8gSAAg9QgGhAgrgRQgagIhAAHQsACGq3BkQhXAOgeAcQgsAiAFBRQAHBLhGAaQljCZkhA3g");
	var mask_graphics_31 = new cjs.Graphics().p("A3FcrIBxoOQAViRB5gNQBZgHgPhzIjZ5cQgNh5hpAKQiXALgximQh+lCg1ikQgchUAmgmQAhgjBaAPIImB8QBPAQAeBkQAUA8BJgFIZBjtQBggRgOhbQgRhVBfgzIHLjwQBNgpAoAfQAvAhgMBXIg/H0QgMCBhrAoQhvAqAbB9IDmY/QARBrBbgDQBxgIAxB9IDkHeQAfBGgYAqQgYAqhLAAQi9gElvhYQg+gTAAhAQgHhCgsgRQgbgJhDAHQsfCKrTBoQhbAOggAcQgtAkAFBVQAHBOhJAbQlxCektA5g");
	var mask_graphics_32 = new cjs.Graphics().p("A4CdxIB2ojQAWiXB+gNQBdgHgPh3Ijg6dQgNh+htALQidALgyitQiDlOg3irQgchXAngnQAjglBdARII7CBQBSARAfBoQAVA9BMgEIaAj0QBjgRgOhfQgRhYBjg1IHdj5QBPgrAqAgQAwAjgLBbIhDIHQgNCGhvApQhzAsAbCCIDtZ9QARBwBggDQB0gIA0CCIDrHwQAhBJgZAsQgZArhPAAQjDgEl+hcQhBgTABhDQgHhFgugSQgdgJhEAHQs/COrwBrQhfAPggAdQgvAlAFBYQAHBRhLAdQmBCjk5A7g");
	var mask_graphics_33 = new cjs.Graphics().p("A4/e2IB8o3QAXidCDgNQBggHgQh8Ijl7cQgNiDhyAKQijAMgzizQiIlcg4iwQgehbApgpQAkgmBhARIJQCIQBVARAgBsQAWBABPgEIa+j7QBogSgPhiQgShbBng3IHvkCQBTgsArAhQAyAkgMBeIhGIbQgNCLh0AqQh4AuAdCHIDza8QASB0BjgDQB5gIA1CHIDzIDQAjBMgaAtQgaAthSAAQjLgFmMhfQhDgVAAhFQgGhIgwgSQgegJhHAGQteCTsMBtQhjAPgiAfQgwAmAFBcQAHBUhPAdQmOCplFA8g");
	var mask_graphics_34 = new cjs.Graphics().p("A58f7ICBpLQAYiiCIgOQBkgIgQh/Ijr8dQgOiHh2AKQioAMg2i6QiLlog7i3QgeheAqgqQAmgoBkASIJmCNQBXATAiBwQAWBCBSgFIb9kBQBrgSgPhmQgShfBqg4IICkLQBWgtAtAiQA0AlgNBiIhKIuQgOCQh3AsQh9AvAdCMID6b7QASB4BngDQB9gIA3CMID8IWQAjBPgbAvQgbAuhVAAQjSgFmahkQhGgVABhIQgHhKgxgUQgfgJhKAHQt+CWsoBxQhmAPgkAgQgyAnAFBfQAHBXhRAeQmdCvlRA+g");
	var mask_graphics_35 = new cjs.Graphics().p("Ega5AhAICGpgQAainCMgOQBngIgQiEIjx9dQgNiMh6ALQivAMg3jBQiQl1g8i9QgghiAtgrQAmgpBoATIJ7CTQBbATAiB0QAXBEBVgEIc8kIQBvgTgQhpQgShiBug6IIUkTQBZgwAuAlQA2AmgNBlIhNJCQgPCUh8AuQiBAwAeCRIEAc6QATB8BqgCQCCgJA4CRIEEIpQAkBSgcAwQgcAxhYgBQjZgFmohpQhJgWABhKQgHhNgzgUQgggKhMAHQudCbtFBzQhqAQglAgQg0ApAFBiQAIBahUAfQmtC0lcBAg");
	var mask_graphics_36 = new cjs.Graphics().p("Egb2AiFICMp0QAaitCRgPQBrgHgRiJIj2+dQgOiRh+ALQi0AMg5jHQiUmCg+jEQghhlAugsQAogqBsATIKQCZQBdAUAkB4QAXBHBYgFId7kOQBzgTgQhtQgThlByg8IImkcQBdgwAvAlQA4AogOBoIhQJVQgQCaiAAvQiFAxAeCWIEGd5QATCBBugDQCGgIA6CVIELI9QAmBUgdAyQgdAyhbgBQjhgGm2hsQhLgXABhNQgHhPg0gVQghgKhQAHQu8CetiB2QhtAQgmAiQg2AqAFBlQAIBdhXAhQm7C5lpBBg");
	var mask_graphics_37 = new cjs.Graphics().p("Egc0AjKICSqJQAbizCWgOQBugIgRiNIj7/dQgOiWiCALQi7ANg6jOQiYmPhAjKQghhoAvgvQApgrBvAUIKlCfQBhAVAlB8QAYBJBagFIe7kTQB2gUgQhxQgThoB1g+II5kkQBfgyAxAnQA6ApgPBsIhUJoQgQCfiEAwQiKAzAfCbIELe3QAUCFBxgCQCLgJA8CbIETJQQAnBXgeAzQgeA0hegBQjogHnFhwQhNgYAChPQgIhSg2gWQgigKhSAHQvcCit+B4QhxAQgnAjQg4AsAFBoQAIBhhaAhQnKC+l0BDg");
	var mask_graphics_38 = new cjs.Graphics().p("EgdyAkOICXqdQAdi4CagPQBygIgRiRMgEAggdQgOibiHALQjAANg8jUQidmchBjRQgihsAxgvQArgtByAVIK6ClQBkAWAmCAQAYBLBegFIf5kZQB6gUgQh0QgUhsB5hAIJMksQBig0AyAoQA8ArgQBvIhXJ8QgRCkiJAxQiOA0AhCgIEQf3QAUCJB1gCQCPgJA9CgIEcJjQAnBZgfA2QgfA1hggBQjwgHnTh1QhPgZABhSQgHhUg4gXQgjgLhVAIQv7ClubB7Qh0ARgoAkQg6AtAFBrQAIBkhdAiQnZDEmABEg");
	var mask_graphics_39 = new cjs.Graphics().p("EgewAlTICdqyQAei+CfgPQB1gIgRiWMgEFghdQgPifiKALQjGANg9jbQihmphDjXQgkhvAzgxQAsguB2AWILPCrQBnAWAnCEQAZBOBggFMAg5gEfQB+gUgRh4QgUhvB9hBIJek1QBlg1A0ApQA9AsgQBzIhbKPQgSCpiNAyQiSA2AhClMAEWAg2QAUCNB5gCQCTgJA/ClIEjJ2QApBcggA3QggA3hkgBQj3gInhh5QhRgaABhUQgHhXg6gXQgkgMhYAIQwaCpu3B9Qh5ARgpAlQg7AuAFBvQAHBnhfAiQnoDKmMBGg");
	var mask_graphics_40 = new cjs.Graphics().p("EgfuAmXICirGQAfjDCkgPQB5gJgSiaMgEJgidQgPiliOAMQjNANg+jiQilm1hFjeQgkhyA0gzQAugvB5AXILlCxQBqAXAnCIQAaBQBjgFMAh4gEkQCBgVgRh7QgUhzCBhDIJwk9QBog2A2AqQA/AugRB2IhfKiQgTCuiQA0QiYA3AiCqMAEbAh1QAVCRB8gCQCYgJBBCqIEqKJQAqBfghA5QghA4hngBQj+gJnvh9QhUgaAChXQgIhag7gYQgmgMhZAIQw7CsvTCAQh8ARgrAmQg9AwAFByQAIBqhjAjQn2DPmYBHg");
	var mask_graphics_41 = new cjs.Graphics().p("EggsAnbICoraQAgjJCpgQQB8gIgSifMgENgjdQgQipiSAMQjTAMhAjoQipnChGjlQglh1A1g0QAwgwB8AXIL6C4QBtAYAoCLQAbBTBmgFMAi3gEpQCFgVgSiAQgUh1CFhFIKClGQBsg3A3AsQBAAugRB6IhiK1QgUCziVA2QicA4AjCvMAEgAi0QAVCVB/gCQCdgIBCCuIEyKdQArBigiA6QgiA6hqgCQkFgJn9iCQhXgbAChZQgIhdg9gYQgmgNhcAIQxaCwvwCCQiAARgsAnQg/AxAFB2QAIBshmAlQoEDUmkBJg");
	var mask_graphics_42 = new cjs.Graphics().p("EghrAofICuruQAhjPCugQQCAgIgTikMgERgkdQgQiuiWAMQjZANhBjvQitnPhIjrQgmh5A3g1QAxgyCAAYIMPC+QBwAZApCQQAbBVBpgFMAj2gEvQCJgVgSiDQgVh5CJhHIKVlNQBvg5A4AtQBCAwgSB9IhmLJQgVC4iZA2QigA6AjC0MAElAjzQAWCaCDgCQCggJBEC0IE6KvQAsBlgjA8QgjA7htgBQkNgKoLiGQhZgcAChcQgHhfg/gaQgogMhfAIQx5CzwNCDQiDASgtAoQhBAyAFB6QAIBvhoAmQoUDYmwBLg");
	var mask_graphics_43 = new cjs.Graphics().p("EgipApiICzsCQAjjVCygPQCDgIgSipMgEWgldQgPizibAMQjeANhDj1QiynchJjyQgnh8A5g3QAygzCDAaIMkDEQBzAZAqCUQAcBXBsgEMAk1gE0QCNgWgSiGQgWh8CNhJIKolVQBxg7A6AvQBEAxgSCBIhqLcQgWC9idA3QilA8AkC4MAEpAkyQAWCeCHgBQClgJBFC4IFCLDQAtBogkA9QglA9hvgCQkUgKoZiKQhcgeADheQgIhihBgaQgogNhiAIQyZC2wpCGQiHASguApQhDA0AFB8QAIBzhrAmQojDem8BMg");
	var mask_graphics_44 = new cjs.Graphics().p("EgjoAqmIC5sXQAkjaC3gQQCHgIgTitMgEZgmdQgQi4ifAMQjkANhFj8Qi1nphLj4QgniAA6g3QAzg1CHAaIM5DLQB2AaArCYQAdBaBugFMAl0gE4QCRgWgSiKQgWiACQhKIK7ldQB1g8A7AvQBGAzgUCEIhuLwQgWDCiiA5QipA8AlC+MAEtAlxQAXCiCKgCQCpgIBHC9IFKLXQAuBqgmA/QglA/hygDQkcgLoniPQhegeAChhQgHhkhCgbQgqgNhkAIQy5C5xGCIQiKASgwAqQhEA1AECAQAIB1huAnQoxDknIBNg");
	var mask_graphics_45 = new cjs.Graphics().p("EgkoArpIDAsrQAljfC8gQQCKgJgTixMgEdgneQgQi8ijAMQjqANhGkCQi5n2hNj/QgoiDA8g5QA1g2CKAbINODRQB5AbAsCcQAdBcBygEMAmzgE9QCVgWgTiOQgXiDCVhMILNlmQB4g9A9AxQBHA1gUCHIhyMDQgXDHimA6QitA+AlDCMAExAmwQAXCnCOgCQCugIBIDCIFRLqQAvBtgmBBQgnBAh1gDQkjgLo1iUQhggfAChjQgIhnhDgcQgrgOhnAIQzYC9xiCJQiOATgxArQhHA2AFCDQAIB5hxAoQpADonUBPg");
	var mask_graphics_46 = new cjs.Graphics().p("EglnAssIDFs/QAnjlDAgQQCOgIgTi2MgEggoeQgQjBioAMQjwANhHkJQi9oDhOkGQgpiGA9g6QA2g3COAcINkDXQB8AcAsCgQAeBeB0gEMAnzgFBQCYgXgTiRQgXiGCZhOILfltQB7g/A/AyQBJA2gVCLIh2MWQgYDMiqA7QiyA/AmDIMAE1AnvQAXCrCSgBQCygJBKDIIFYL9QAwBwgnBCQgoBBh4gCQkqgNpEiYQhiggADhmQgIhphFgdQgsgOhqAIQz3C/x/CMQiSATgyAsQhJA3AFCHQAIB7h0ApQpPDtngBQg");
	var mask_graphics_47 = new cjs.Graphics().p("EgmnAtvIDMtTQAojrDFgQQCRgIgTi6MgEkgpfQgQjFirAMQj2AMhJkPQjBoQhQkMQgpiKA/g8QA3g4CSAdIN4DeQB/AdAuCkQAeBhB3gFMAoygFEQCcgYgTiVQgXiJCchQILyl1QB+hABAA0QBLA3gWCOIh6MpQgZDRiuA9Qi3BAAnDNMAE5AouQAYCvCVgBQC2gIBMDMIFfMQQAxB0goBDQgpBDh7gDQkxgNpSidQhlghADhoQgIhshHgdQgsgPhtAIQ0XDCybCNQiVAUg0AtQhKA4AECKQAIB/h3ApQpeDynrBRg");
	var mask_graphics_48 = new cjs.Graphics().p("EgnnAuyIDStnQApjxDKgQQCVgIgUi/MgEmgqfQgQjKiwAMQj8ANhJkWQjFodhSkTQgqiNBAg9QA5g6CVAeIOODlQCBAeAvCoQAfBjB6gFMApxgFIQCggYgUiYQgXiOCghQIMFl+QCBhBBBA1QBNA5gWCRIh+M9QgaDWizA+Qi7BBAnDSMAE9AptQAYCzCZAAQC7gJBNDSIFmMjQAyB2gpBFQgqBFh+gDQk5gOpfihQhogiAEhrQgIhvhJgeQgugPhvAIQ02DFy5CPQiYATg1AuQhMA6AECNQAICCh6AqQptD3n3BTg");
	var mask_graphics_49 = new cjs.Graphics().p("EgonAv1IDZt8QAqj2DPgQQCYgIgUjEMgEpgrfQgRjPizANQkCAMhLkdQjJoqhTkZQgriQBCg/QA7g7CYAfIOiDsQCFAfAwCrQAfBmB9gFMAqwgFMQCkgYgUicQgYiQCkhTIMYmFQCEhDBDA3QBOA6gXCVIiCNQQgbDai3A/Qi/BDAnDXMAFBAqsQAYC4CcgBQDAgIBODXIFuM3QAzB5grBGQgqBGiBgDQlBgPptimQhqgjAEhtQgIhxhLgfQgugQhyAIQ1WDIzVCQQicAUg3AvQhOA7AFCQQAICFh9ArQp8D8oDBUg");
	var mask_graphics_50 = new cjs.Graphics().p("EgpnAw3IDfuPQArj8DUgQQCcgJgVjHMgErgsgQgRjTi4AMQkHAMhNkjQjMo3hUkgQgtiUBEhAQA8g8CcAgIO3DyQCIAgAwCwQAgBoCAgFMArwgFPQCngZgUifQgYiUCohUIMqmNQCIhEBEA4QBQA7gYCYIiGNjQgcDgi8BAQjDBFAoDbMAFEArsQAYC7CgAAQDEgIBQDcIF1NKQA0B8gsBIQgsBIiEgEQlHgPp8irQhsgkAEhwQgIh0hMggQgwgQh0AJQ12DJzyCSQifAUg4AwQhQA8AECUQAICIh/AsQqLEBoQBVg");
	var mask_graphics_51 = new cjs.Graphics().p("EgqnAx5IDlujQAtkCDYgQQCfgIgUjMMgEugtgQgRjYi8AMQkNAMhOkqQjQpEhWkmQgtiXBFhCQA+g9CfAhIPMD5QCLAgAxC0QAhBqCDgEMAsugFTQCsgYgVikQgYiXCrhWIM+mUQCLhGBFA6QBSA9gZCbIiLN2QgcDljABCQjIBFAoDhMAFHAsqQAZDACjAAQDIgIBSDhIF8NeQA1B+gtBKQgtBJiHgEQlPgQqJiwQhugkAEhzQgIh2hOghQgxgQh3AIQ2VDM0OCTQikAVg5AxQhSA9AFCXQAICLiDAtQqaEGobBVg");
	var mask_graphics_52 = new cjs.Graphics().p("EgroAy7IDru3QAvkHDdgQQCjgJgVjQMgEwgugQgRjejAANQkTAMhPkxQjUpRhYktQgtiaBHhDQA+g/CjAiIPhEAQCOAiAyC3QAhBtCGgEMAtugFWQCvgZgUinQgZibCvhXINQmcQCOhHBHA7QBUA+gaCfIiPOKQgdDpjFBDQjMBHApDlMAFKAtqQAZDECnABQDMgJBTDmIGDNyQA2CBguBLQguBLiJgEQlXgRqXi1QhxgmAEh0QgIh5hPgiQgygRh5AIQ22DP0qCUQinAVg7AyQhTA/AECaQAICOiGAuQqpEKonBXg");
	var mask_graphics_53 = new cjs.Graphics().p("EgspAz9IDyvLQAwkNDigQQCmgIgVjWMgEygvgQgRjijEAMQkZAMhRk3QjXpehZk0QguieBIhEQBAg/CnAiIP2EHQCRAjAyC8QAiBvCJgEMAutgFaQCzgZgViqQgZieCzhZINjmkQCRhIBJA8QBVBAgaCiIiUOdQgeDvjJBDQjRBIAqDrMAFMAupQAZDICrABQDRgIBUDrIGKOFQA3CEgvBNQgvBMiNgEQldgSqmi6QhzgnAFh3QgIh8hRgiQgzgRh8AIQ3VDR1HCWQirAUg8AzQhVBAAECeQAICRiJAuQq4EPozBYg");
	var mask_graphics_54 = new cjs.Graphics().p("EgtqA0/ID5vgQAxkSDmgQQCqgIgVjaMgE0gwhQgRjmjIAMQkfAMhSk/Qjbprhak6QgvihBKhFQBChBCpAjIQLEOQCUAkA0DAQAiBxCLgEMAvtgFcQC3gZgViuQgaiiC4haIN1mrQCVhKBJA9QBXBCgbCmIiYOwQgfDzjNBFQjWBJArDwMAFPAvoQAZDNCuAAQDVgHBWDwIGROYQA4CHgwBOQgwBOiQgFQllgSqzi/Qh2gnAFh6QgIh/hSgjQg1gRh+AIQ31DT1jCXQivAVg9A0QhXBAADCiQAJCUiMAvQrHETo/BZg");
	var mask_graphics_55 = new cjs.Graphics().p("EgurA2BID/v0QAykYDsgQQCtgIgVjeMgE2gxhQgQjsjNAMQklAMhTlFQjfp4hblBQgwikBMhHQBDhCCtAkIQgEVQCXAlA0DEQAjBzCOgDMAwsgFfQC7gagVixQgailC7hcIOJmzQCXhKBLA+QBZBDgcCpIidPDQggD5jRBGQjaBKArD1MAFRAwnQAZDRCyABQDagHBXD0IGYOsQA5CKgxBQQgyBQiSgFQlsgUrCjDQh4gpAGh9QgJiAhUgkQg1gTiBAJQ4UDV2BCXQiyAWg+A1QhZBCADCkQAICXiOAwQrWEZpLBZg");
	var mask_graphics_56 = new cjs.Graphics().p("EgvsA3CIEFwIQA0kdDwgQQCxgIgVjjMgE4gyhQgQjxjRAMQkrAMhUlMQjiqFhdlHQgxioBOhIQBFhECwAmIQ1EcQCaAmA1DHQAjB3CRgEMAxrgFhQC/gagVi1QgaioC/heIObm6QCbhMBMBAQBbBFgdCsIihPWQgiD+jVBHQjfBLAsD6MAFTAxnQAaDVC1ABQDegHBZD6IGfO/QA6CNgzBRQgyBSiWgGQlzgVrQjIQh6gqAGh/QgIiDhWglQg3gTiDAIQ40DY2dCYQi2AWhAA2QhbBDADCoQAICaiRAxQrlEcpXBbg");
	var mask_graphics_57 = new cjs.Graphics().p("EgwuA4DIEMwcQA2kiD1gRQC0gHgVjoMgE5gzhQgRj2jUAMQkyAMhUlTQjmqShflOQgxirBPhJQBGhFC0AmIRKEkQCdAmA1DMQAkB5CUgEMAyrgFjQDCgagVi5QgairDDhgIOunBQCehNBOBBQBcBGgeCwIimPpQgiEDjaBIQjjBNAsD+MAFVAymQAaDaC5ABQDjgHBaD/IGlPTQA7CQg0BTQgzBSiZgGQl7gVrdjOQh8gqAGiCQgJiGhXgmQg3gTiGAJQ5UDZ26CZQi5AWhBA3QhdBEADCrQAICdiVAyQr0EhpjBcg");
	var mask_graphics_58 = new cjs.Graphics().p("EgxwA5EIETwwQA3koD6gQQC4gIgVjsMgE7g0iQgQj6jZAMQk3ALhWlZQjqqfhflUQgyivBRhLQBHhGC4AoIReErQCgAnA2DQQAlB7CXgDMAzqgFmQDGgagWi9QgaiuDHhhIPBnJQChhPBPBDQBeBIgeCzIirP9QgkEHjeBJQjoBOAtEEMAFXAzlQAaDdC9ACQDngHBbEEIGsPnQA8CTg1BUQg0BUicgGQmCgXrrjSQh/gsAGiEQgIiIhZgnQg4gTiJAIQ50Da3WCbQi9AWhCA3QhfBGADCvQAICgiYAyQsDEmpvBcg");
	var mask_graphics_59 = new cjs.Graphics().p("EgyyA6FIEaxEQA4ktD/gRQC7gHgVjwMgE7g1jQgQj/jdAMQk9ALhYlgQjtqshglbQgzizBShLQBJhIC7ApIRzEyQCjApA3DTQAlB+CagDMA0pgFoQDKgagVjAQgbiyDLhjIPUnQQCkhQBRBFQBfBJgfC2IivQQQglEMjiBLQjtBOAtEJMAFZA0lQAaDiDAACQDsgHBdEJIGzP6QA8CWg2BWQg1BWifgHQmJgYr5jXQiBgtAGiGQgIiMhbgnQg5gUiMAIQ6TDc3zCcQjAAVhEA5QhhBHADCyQAHCjiaAzQsSEqp7Beg");
	var mask_graphics_60 = new cjs.Graphics().p("Egz0A7GIEhxYQA6kzEDgQQC/gIgVj1MgE9g2jQgQkDjhAMQlDAKhYlmQjwq6hilhQg0i2BUhNQBLhJC+AqISIE6QCmApA4DYQAlCACdgDMA1ogFpQDOgbgWjEQgbi1DPhkIPnnXQCohRBSBFQBhBLggC5Ii0QjQgmESjnBLQjxBQAuEOMAFaA1kQAaDmDEACQDwgGBeEOIG5QOQA+CYg3BYQg3BXihgHQmRgZsHjcQiDguAGiJQgIiOhcgoQg6gViOAIQ6zDe4QCcQjEAWhFA6QhjBIACC1QAICmidA0QsiEvqGBeg");
	var mask_graphics_61 = new cjs.Graphics().p("Eg02A8GIEnxrQA8k5EIgQQDCgIgVj5MgE9g3jQgQkIjlALQlJAKhZltQj0rHhjloQg1i5BWhOQBMhKDCArISdFBQCoAqA5DcQAmCCCfgCMA2pgFrQDRgbgWjHQgbi5DThlIP6nfQCqhSBUBHQBjBMghC9Ii5Q2QgnEXjrBMQj2BRAuETMAFcA2jQAaDqDIADQD0gGBfETIHAQiQA/Cbg4BZQg4BZilgIQmYgasVjhQiFgvAHiLQgIiRhegpQg8gViQAIQ7TDf4sCdQjIAWhHA6QhkBKACC4QAHCqigA0QswEzqTBfg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg15A9GIEvx/QA9k+ENgQQDGgHgWj+MgE9g4kQgQkNjpALQlPAKhblzQj3rUhklvQg1i9BXhPQBOhLDFArISxFJQCsArA5DgQAnCFCigDMA3ogFrQDVgbgWjMQgbi8DWhnIQOnlQCthTBVBIQBlBOgiDAIi+RJQgoEbjwBOQj5BSAuEYMAFdA3iQAaDvDLADQD5gGBgEYIHHQ2QA/Ceg5BaQg5BbiogIQmfgbsjjnQiIgwAIiOQgIiThggqQg8gViTAHQ7zDh5JCdQjLAWhIA8QhnBKACC8QAICtijA1QtAE3qfBgg");
	var mask_graphics_63 = new cjs.Graphics().p("Eg28A+HIE2yUQA+lEESgQQDKgGgWkDMgE9g5kQgQkSjuAMQlUAJhcl6Qj6rihml1Qg1jABZhRQBPhMDIAtITGFQQCvAtA6DkQAnCGClgCMA4ngFtQDagbgXjPQgbi/DahpIQhnsQCxhVBWBKQBmBPgjDEIjDRcQgpEgj0BPQj+BTAvEdMAFdA4hQAbDzDOAEQD9gGBiEeIHNRJQBAChg6BcQg6BciqgJQmngcsxjsQiKgxAIiQQgIiWhhgrQg+gWiWAIQ8SDi5mCeQjPAWhJA8QhoBMABC/QAICwimA1QtPE8qrBgg");
	var mask_graphics_64 = new cjs.Graphics().p("Eg3+A/GIE8ynQBAlJEXgQQDNgHgWkGMgE9g6lQgQkXjyALQlaAKhdmBQj9rvhnl8Qg2jDBahSQBRhODMAuITbFYQCxAuA7DoQAnCJCogCMA5ngFuQDdgbgWjTQgcjDDehqIQ0nzQC0hWBYBLQBnBRgjDHIjIRvQgqEmj5BPQkDBUAvEiMAFfA5hQAbD3DRAEQECgFBjEiIHTRdQBCCkg8BdQg7BeiugJQmugds+jxQiNgyAIiTQgHiZhjgrQg/gXiYAIQ8yDk6DCdQjSAWhLA+QhqBNABDCQAICyipA3QteFAq3Bhg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg5CBAGIFEy7QBClPEbgPQDQgHgVkLMgE9g7lQgQkcj2ALQlgAJhemIQkAr7hpmDQg2jHBchTQBShPDPAvITwFgQC1AuA7DtQAoCLCrgCMA6mgFuQDhgcgXjWQgcjGDjhrIRGn7QC4hXBZBNQBpBSgkDKIjNSDQgsEqj9BQQkHBWAvEmMAFfA6hQAbD7DWAFQEFgGBlEoIHaRxQBCCmg9BfQg9BfiwgJQm1getMj3QiPgzAIiVQgHibhlgtQhAgXibAIQ9RDl6gCdQjWAXhMA+QhsBOABDGQAHC1isA4QttFDrDBig");
	var mask_graphics_66 = new cjs.Graphics().p("Eg6FBBGIFLzPQBDlVEggPQDUgGgVkQMgE9g8mQgPkgj6ALQlnAIhemOQkEsJhqmJQg3jKBehVQBThQDTAwIUFFoQC3AvA8DwQAoCOCugBMA7mgFvQDkgcgWjaQgcjJDmhtIRaoBQC6hZBbBOQBrBUglDOIjTSVQgsEwkBBRQkMBWAvEsMAFfA7gQAbD/DaAFQEKgFBmEtIHfSEQBDCqg+BgQg9BhizgJQm9ggtaj8QiRg0AIiYQgHiehmgtQhBgYidAIQ9yDm68CdQjZAXhOA/QhuBPABDJQAHC5ivA4Qt9FIrOBig");
	var mask_graphics_67 = new cjs.Graphics().p("Eg7JBCFIFTziQBFlbEkgPQDYgGgVkUMgE9g9mQgPklj+AKQltAIhfmVQkHsWhrmQQg4jNBghWQBVhRDWAxIUZFvQC7AxA8D0QApCRCxgCMA8lgFvQDogcgWjdQgdjNDrhvIRtoIQC9hZBcBPQBtBWgmDQIjYSpQguE0kFBSQkRBYAxExMAFfA8fQAbEEDcAFQEPgFBnEyIHmSYQBECtg/BiQg/Bii2gKQnEghtokBQiTg2AJiaQgHighogvQhCgXigAHQ+SDn7YCeQjdAWhPBAQhwBRAADMQAHC8iyA4QuLFMrbBjg");
	var mask_graphics_68 = new cjs.Graphics().p("Eg8MBDEIFZz2QBHlgEpgPQDbgFgVkZMgE7g+nQgPkqkDALQlyAHhhmbQkKskhrmWQg5jRBihYQBWhSDZAzIUuF3QC+AxA9D5QApCTCzgCMA9lgFvQDsgcgWjhQgdjQDvhwISAoPQDAhbBeBRQBuBXgnDUIjdS8QgvE5kKBTQkVBZAxE1MAFfA9fQAbEIDgAGQETgFBpE4IHsSrQBECwhABjQhABki5gKQnLgit1kHQiXg3AKicQgHijhqgwQhCgYijAHQ+xDo72CeQjgAWhRBBQhyBSABDPQAGC/i1A5QubFRrmBjg");
	var mask_graphics_69 = new cjs.Graphics().p("Eg9QBEDIFh0KQBIllEugPQDfgFgVkeMgE7g/nQgPkukGAKQl5AHhhmiQkNsxhtmdQg5jUBjhZQBYhTDdAzIVCF/QDBAzA9D8QAqCWC2gBMA+kgFwQDwgcgWjlQgdjTDzhyISToVQDEhcBfBSQBvBZgoDXIjiTPQgwE+kOBUQkaBaAxE6MAFfA+eQAbENDkAGQEXgEBqE8IHyTAQBGCyhCBlQhBBli8gLQnSgjuEkMQiYg4AKifQgHilhrgxQhEgYilAHQ/RDo8SCeQjlAWhRBCQh0BTAADTQAGDCi4A5QuqFVrzBjg");
	var mask_graphics_70 = new cjs.Graphics().p("Eg+UBFCIFo0eQBKlqEzgPQDigFgVkiMgE6hAoQgOkzkLAKQl+AHhimqQkRs9htmkQg6jYBlhaQBZhUDgA0IVXGHQDEA0A+EBQAqCXC5AAMA/kgFwQD0gcgXjoQgcjXD2hzISmocQDIhdBgBUQBxBagpDbIjnTiQgyFCkSBVQkfBbAyFAMAFeA/dQAbERDoAGQEbgEBrFCIH4TTQBHC2hDBmQhCBmi/gLQnagkuRkSQibg5ALihQgHiohtgyQhFgZioAHQ/wDp8vCeQjoAWhTBDQh2BUAADWQAGDFi7A6Qu5FZr/Bkg");
	var mask_graphics_71 = new cjs.Graphics().p("Eg/ZBGBIFw0yQBMlwE4gOQDlgFgVknMgE4hBoQgOk4kPAKQmEAGhjmwQkUtLhvmqQg6jcBnhbQBahVDkA2IVsGPQDGA0A/EFQAqCaC9AAMBAjgFwQD3gcgWjrQgdjbD6h0IS6ojQDKheBiBVQBzBcgqDeIjtT1QgzFIkXBWQkiBbAxFFMAFeBAdQAbEVDrAGQEggDBsFHIH+TnQBHC4hDBoQhEBojCgLQnhgmuekYQidg5AKilQgGiqhvgzQhFgZirAHUggRADpgdLACdQjsAXhUBEQh4BVgBDZQAGDIi+A7QvIFcsLBlg");
	var mask_graphics_72 = new cjs.Graphics().p("EhAdBG/IF31FQBOl2E8gOQDpgFgUkrMgE3hCoQgPk9kSAKQmLAFhjm2QkXtZhwmxQg7jeBphdQBchWDnA2IWAGYQDJA2BAEIQArCdC/AAMBBigFvQD8gcgWjwQgdjdD+h2ITNopQDNhfBjBWQB1BdgrDiIjyUIQg0FMkcBXQknBdAyFJMAFdBBcQAbEaDuAHQElgDBtFMIIET7QBIC7hFBqQhFBpjEgMQnpgnuskdQifg7ALinQgHithwgzQhGgaiuAGUggwADqgdoACdQjwAXhVBFQh6BVgBDdQAGDLjBA8QvYFgsXBlg");
	var mask_graphics_73 = new cjs.Graphics().p("EhBiBH+IF/1ZQBPl8FCgNQDsgFgUkwMgE2hDoQgOlCkXAJQmQAFhkm9Qkatlhxm4Qg7jiBqheQBehYDqA4IWVGgQDMA3BAEMQAsCfDBAAMBCjgFuQD/gcgXjzQgdjhEDh3ITgowQDRhgBkBYQB2BfgsDlIj4UaQg1FSkgBYQkrBdAxFPMAFcBCbQAcEeDyAIQEpgDBuFRIIKUPQBJC+hGBrQhHBrjHgNQnwgou6kjQihg8ALipQgGiwhyg0QhIgaivAGUghRADrgeEACcQjzAWhYBGQh7BXgCDgQAGDPjEA8QvnFksjBlg");
	var mask_graphics_74 = new cjs.Graphics().p("EhCnBI8IGH1tQBRmBFGgNQDwgEgUk1MgE0hEpQgNlGkcAJQmWAEhlnEQkctzhym+Qg8jmBrheQBghZDuA5IWpGnQDPA5BBEQQArCiDFAAMBDigFtQEDgcgXj3QgdjkEGh5IT0o2QDUhhBmBZQB3BggsDpIj+UtQg3FXkjBYQkxBfAyFUMAFbBDaQAbEiD2AJQEtgDBwFWIIPUkQBKDBhHBsQhIBsjKgNQn3gpvIkpQikg9AMisQgGiyhzg1QhJgbiyAGUghwADrgeiACcQj3AWhYBHQh+BYgBDjQAFDRjHA9Qv2FosvBmg");
	var mask_graphics_75 = new cjs.Graphics().p("EhDsBJ6IGP2BQBSmGFLgNQD0gEgVk5MgExhFqQgNlLkgAJQmcAEhmnLQkfuAhznFQg8jpBthgQBhhaDxA6IW+GwQDSA5BBEVQAsCkDIABMBEhgFsQEHgdgWj6QgejoELh5IUGo9QDYhiBnBaQB5BiguDsIkDVBQg4FbkoBZQk1BgAyFYMAFaBEbQAbEmD5AJQEygCBwFbIIWU3QBKDEhIBuQhJBujNgOQn+grvWkuQimg+AMivQgGi1h0g2QhKgbi1AGUgiQADrge+ACbQj7AXhaBHQiABZgBDnQAFDUjKA+QwGFrs7Bmg");
	var mask_graphics_76 = new cjs.Graphics().p("EhExBK4IGW2VQBUmLFQgNQD3gEgUk9MgEvhGqQgNlQkjAIQmiAEhonSQkhuNh0nMQg9jtBvhhQBihbD1A7IXSG5QDVA6BCEZQAsCmDLABMBFggFqQELgdgWj+QgdjrEOh7IUapDQDbhjBoBcQB7BjgvDvIkJVUQg5FgktBaQk5BhAyFeMAFYBFZQAbErD9AJQE2gBByFgIIbVLQBLDHhKBvQhJBvjRgOQoFgsvjk0QiphAANiwQgGi4h2g3QhLgci4AGUgivADrgfbACbQj+AWhbBJQiCBagCDqQAEDXjMA+QwVFvtIBng");
	var mask_graphics_77 = new cjs.Graphics().p("EhF3BL1IGf2oQBWmRFUgMQD7gEgUlBMgEthHrQgNlVknAIQmoADhonYQkkubh1nTQg+jvBxhjQBkhcD4A8IXmHBQDYA8BDEdQAtCoDNACMBGggFqQEPgcgXkBQgdjvESh8IUupKQDehkBpBeQB9BlgwDyIkPVmQg6FmkxBbQk/BhAzFjMAFXBGZQAbEvEAAJQE6gBBzFmIIhVfQBMDKhLBwQhLBxjTgOQoNguvxk6QiqhBANizQgGi6h4g4QhMgdi6AGUgjQADrgf3ACaQkCAWhcBKQiEBbgDDuQAFDajQA/QwkFytUBng");
	var mask_graphics_78 = new cjs.Graphics().p("EhG8BMzIGm28QBYmWFZgNQD+gDgUlGMgEqhIsQgMlZksAIQmuAChonfQknuoh2nZQg+jzByhkQBlheD8A+IX7HKQDbA8BDEhQAtCrDQACMBHggFoQESgcgWkFQgdjyEWh+IVBpPQDhhmBrBgQB+BmgxD2IkUV5Qg8Fqk2BcQlDBiAzFoMAFVBHZQAbEzEEAKQE/gBB0FrIImVzQBMDNhMByQhMByjWgPQoUgvv+lAQithCANi1QgFi9h6g5QhNgdi9AFUgjvADsggUACYQkFAXheBKQiGBcgDDxQAEDejTA/QwzF2tgBng");
	var mask_graphics_79 = new cjs.Graphics().p("EhICBNwIGu3PQBamcFegMQEBgDgTlLMgEohJsQgMlekvAHQm0AChqnmQkpu1h3ngQg/j3B1hkQBmhfD/A/IYQHSQDdA+BEElQAtCtDTACMBIggFlQEWgdgWkJQgej1Ebh/IVUpVQDkhnBtBhQB/BogyD4IkaWNQg9Fvk6BdQlHBiAzFtMAFSBIYQAbE4EHAKQFEAAB1FwIIrWHQBODQhOB0QhNBzjZgPQobgxwMlGQivhCAOi5QgGi/h7g6QhOgei/AGUgkPADrggxACYQkJAWhgBLQiIBegDD0QAEDgjWBAQxDF6trBmg");
	var mask_graphics_80 = new cjs.Graphics().p("EhJIBOtIG23jQBbmhFjgMQEFgCgTlQMgEkhKsQgMljk0AHQm5ABhrntQksvCh4nnQg/j6B2hmQBphgECBBIYkHaQDgA/BEEpQAuCwDWADMBJfgFkQEagcgWkNQgej5EfiAIVnpcQDohnBuBiQCBBqgzD8IkgWfQg/F0k+BdQlMBkAzFyMAFQBJXQAbE8ELALQFIABB2F1IIxWbQBODShPB2QhOB1jcgQQojgywZlMQiyhEAPi7QgFjCh9g7QhPgejCAFUgkvADrghOACXQkMAWhhBMQiKBfgED3QAEDjjZBBQxSF9t4Bng");
	var mask_graphics_81 = new cjs.Graphics().p("EhKOBPqIG+33QBdmmFogMQEIgCgTlUMgEhhLtQgLlnk4AGQnAABhrn0QkvvPh4nuQhAj9B4hoQBqhhEFBCIY5HjQDjBABEEuQAvCyDZADMBKegFiQEegcgWkQQgdj8EiiCIV7piQDrhpBvBkQCDBsg0D/IknWyQhAF5lCBeQlRBlAzF3MAFOBKXQAbE/EOAMQFNABB3F6II2WwQBPDVhQB3QhQB2jfgQQopg0wnlSQi0hFAPi9QgFjFh+g7QhQgfjFAFUglPADqghqACWQkRAWhiBNQiMBggED6QAEDnjcBBQxiGAuDBng");
	var mask_graphics_82 = new cjs.Graphics().p("EhLVBQmIHH4JQBfmtFsgLQEMgBgSlZMgEehMtQgLltk9AGQnFABhsn7Qkxvdh6n0QhAkBB6hpQBrhiEJBDIZNHsQDmBCBFExQAvC1DbADMBLfgFgQEhgcgWkTQgdkAEmiDIWPpnQDuhqBwBlQCFBtg1ECIktXFQhBF+lHBfQlWBmA0F8MAFLBLWQAbFEESANQFQABB4F/II8XEQBQDYhRB4QhRB4jigRQoxg1w1lYQi2hGAQjAQgFjHiAg9QhRgfjHAFUglvADqgiHACUQkUAWhkBOQiNBggFD+QADDqjfBCQxxGEuPBng");
	var mask_graphics_83 = new cjs.Graphics().p("EhMbBRjIHO4dQBhmyFygLQEPgBgSldMgEbhNuQgKlxlBAFQnLAAhsoBQk0vrh7n7QhAkEB7hqQBthjEMBEIZhH1QDqBDBFE1QAvC3DeAEMBMegFdQEmgcgWkXQgekDEriFIWiptQDxhrByBnQCGBug2EGIkzXYQhDGDlLBfQlaBnA0GBMAFIBMWQAaFIEWANQFVACB5GEIJBXYQBQDbhSB6QhSB5jlgSQo4g2xCleQi5hIAQjCQgEjKiBg9QhSggjKAEUgmPADqgikACTQkXAWhmBPQiPBhgFEBQACDtjhBCQyBGIubBng");
	var mask_graphics_84 = new cjs.Graphics().p("EhNiBSfIHX4xQBjm3F2gKQETgBgSlhMgEXhOvQgKl2lFAFQnRgBhtoIQk2v4h8oBQhBkIB9hrQBvhkEQBFIZ1H+QDsBEBGE5QAvC6DiAEMBNdgFaQEpgcgVkbQgekHEuiFIW2p0QD1hsByBpQCIBwg3EJIk5XrQhEGHlQBhQleBnAzGGMAFGBNVQAaFNEZANQFZADB6GJIJHXsQBRDehUB7QhTB7jogSQo/g4xQlkQi7hJARjEQgEjNiDg/QhTggjNAEUgmuADpgjBACSQkbAWhnBPQiRBjgGEEQADDwjlBDQyQGLuoBng");
	var mask_graphics_85 = new cjs.Graphics().p("EhOpBTbIHf5EQBlm9F7gKQEWAAgSlmMgEShPvQgKl7lJAFQnXgChtoOQk5wGh8oIQhCkLB/hsQBwhmETBHIaKIHQDvBFBGE9QAwC8DkAEMBOdgFXQEtgcgWkeQgdkKEyiHIXJp5QD4htB0BqQCKByg5EMIk/X+QhFGMlVBhQljBoA0GLMAFCBOVQAaFREdAOQFeADB7GPIJMYAQBRDhhVB8QhUB9jrgTQpHg6xdlqQi9hKARjHQgEjPiEhAQhUghjQAEUgnOADpgjdACQQkfAVhoBRQiUBkgGEHQADDzjoBDQygGOuzBng");
	var mask_graphics_86 = new cjs.Graphics().p("EhPwBUXIHo5YQBmnCGAgJQEaAAgSlrMgEPhQvQgJmAlNAFQndgDhuoVQk7wTh9oPQhCkPCBhtQByhnEWBIIadIQQDzBGBGFCQAwC+DnAFMBPdgFUQExgcgWkiQgdkNE2iIIXdp/QD7huB2BrQCKB0g5EQIlFYQQhHGRlZBiQloBpA0GQMAE/BPUQAaFVEgAPQFiADB8GUIJRYUQBSDlhWB9QhWB+jtgTQpOg7xrlxQi/hLARjJQgDjSiGhBQhVghjSADUgnvADogj6ACPQkiAVhpBRQiWBlgGELQABD2jqBEQyvGRvABng");
	var mask_graphics_87 = new cjs.Graphics().p("EhQ4BVSIHx5qQBonIGFgJQEdAAgRluMgELhRxQgImElRAEQnjgDhvocQk+whh9oVQhCkTCChuQBzhoEaBKIayIYQD1BIBGFGQAxDBDqAFMBQcgFRQE1gcgVkmQgekQE7iJIXwqFQD+hvB3BtQCMB1g6ETIlMYjQhIGWleBjQlsBpA0GVMAE7BQUQAaFZEkAQQFmAEB9GZIJWYoQBTDnhXCAQhXB/jxgUQpVg9x4l3QjChMASjMQgDjUiIhCQhWgijUAEUgoOADmgkXACNQkmAVhrBTQiYBlgHEPQACD5juBEQy+GUvMBng");
	var mask_graphics_88 = new cjs.Graphics().p("EhR/BWOIH55+QBqnNGJgJQEhABgRlzMgEGhSxQgImJlVADQnpgEhvojQlAwth/odQhCkVCEhwQB1hpEdBLIbGIiQD4BIBHFKQAxDEDtAFMBRbgFNQE5gcgVkpQgekUE/iKIYEqLQEChwB4BvQCNB2g7EXIlSY1QhKGbliBkQlxBqA0GaMAE4BRTQAZFeEoAQQFrAFB9GeIJbY8QBUDrhZCAQhYCBj0gVQpcg+yFl9QjEhOASjOQgDjXiJhDQhXgijXADUgouADmgk0ACLQkpAVhtBTQiZBngIERQABD9jwBEQzOGYvYBmg");
	var mask_graphics_89 = new cjs.Graphics().p("EhTHBXJIIC6RQBsnTGOgIQEkABgQl4MgEBhTxQgImOlaAEQnugFhwoqQlCw7iAojQhCkZCFhxQB3hqEgBMIbaIrQD7BKBIFOQAxDGDvAGMBScgFKQE8gbgVkuQgdkXFDiLIYXqQQEFhxB5BvQCQB5g9EaIlYZIQhMGglmBkQl2BrA0GfMAE0BSTQAZFiErAQQFwAGB+GjIJgZRQBUDthZCCQhaCCj2gVQpkhAyTmEQjGhOATjRQgDjaiLhEQhYgjjZADUgpOADlglRACJQktAVhuBUQibBogIEVQABD/j0BFQzeGbvjBmg");
	var mask_graphics_90 = new cjs.Graphics().p("EhUPBYEIIK6lQBvnYGSgHQEoACgQl9MgD8hUyQgImSldADQn1gGhwoxQlFxIh/oqQhEkdCIhxQB4hrEjBNIbvI0QD+BLBIFSQAxDJDyAGMBTbgFGQFBgbgVkxQgdkaFGiNIYrqWQEJhyB6ByQCRB6g+EdIlfZbQhNGllqBkQl6BsA0GkMAEvBTSQAZFmEvASQFzAGCAGpIJlZkQBVDwhbCEQhbCDj6gWQpqhByhmKQjIhQATjTQgCjdiMhEQhagkjcADUgpuADjgltACIQkwAUhwBVQidBpgJEYQABEDj3BFQztGevwBmg");
	var mask_graphics_91 = new cjs.Graphics().p("EhVXBY/IIT64QBwndGYgHQErACgQmBMgD3hVyQgHmYlhACQn7gGhxo3QlHxWiAoxQhEkgCKhzQB5hsEnBPIcDI9QEABNBJFWQAxDKD2AHMBUagFBQFEgcgUk0QgekeFLiOIY/qbQEMhzB7BzQCTB8g/EgIlmZuQhOGplvBmQl/BsA0GqMAErBURQAZFqEyASQF4AHCBGuIJpZ5QBWDzhcCFQhdCFj8gXQpyhDyumQQjKhRAUjWQgDjfiNhGQhagkjfACUgqOADjgmKACFQk0AVhxBVQigBqgJEcQABEFj6BGQz9Ghv8Blg");
	var mask_graphics_92 = new cjs.Graphics().p("EhWfBZ6IIb7MQBzniGcgHQEvADgQmGMgDyhWyQgGmdlmACQoAgHhxo+QlJxkiCo3QhEkkCMh0QB7htEqBQIcXJHQEDBOBJFaQAyDND4AHMBVagE9QFIgbgUk4QgekhFPiQIZSqgQEQh0B9B0QCUB+hAEjIlsaBQhRGulzBnQmDBsA0GvMAEmBVRQAZFvE2ASQF8AHCBG0IJvaNQBWD2heCGQhdCGj/gXQp6hFy7mWQjNhTAVjYQgCjiiPhGQhcgljhACUgquADhgmmACEQk4AUhyBWQiiBrgJEfQgBEIj9BGQ0MGkwIBmg");
	var mask_graphics_93 = new cjs.Graphics().p("EhXoBa0IIl7eQB0npGhgFQEzADgPmKMgDthX0QgGmhlqACQoGgJhypEQlLxxiCo+QhEknCNh2QB8huEuBSIcrJQQEGBPBJFeQAyDQD7AHMBWagE5QFMgagUk8QgdklFTiQIZlqmQETh1B+B2QCWB/hCEnIlyaTQhSG0l4BmQmIBuA0G0MAEiBWQQAYFzE6ATQGAAICDG4IJzaiQBXD5hfCIQhfCHkCgXQqAhHzJmdQjPhUAVjbQgCjkiRhIQhcgljkACUgrNADfgnEACCQk7AUh0BXQikBsgKEiQAAELkABHQ0cGnwUBlg");
	var mask_graphics_94 = new cjs.Graphics().p("EhYwBbvIIt7yQB2nuGmgFQE2ADgPmOMgDnhY0QgFmmluABQoMgJhypMQlNx+iDpFQhFkqCPh3QB+hvExBTIc/JaQEJBQBKFiQAyDSD+AIMBXZgE0QFQgbgUk/QgdkoFXiRIZ6qsQEVh1CAB3QCXCBhCEqIl6amQhTG4l8BnQmNBvA0G4MAEdBXQQAYF3E9AUQGFAJCDG9IJ4a2QBXD8hgCJQhgCJkFgYQqIhJzWmjQjRhVAWjdQgCjniShJQhdgmjnACUgrtADegngAB/QlAAUh0BYQimBtgLElQgBEOkDBIQ0rGpwgBlg");
	var mask_graphics_95 = new cjs.Graphics().p("EhZ5BcpII28FQB5nzGqgFQE6AEgPmTMgDhhZ0QgFmrlyAAQoSgKhypSQlQyMiDpLQhFkuCRh4QB/hwE1BUIdTJjQEMBSBJFmQAzDVEBAIMBYZgEvQFTgbgTlDQgdkrFbiTIaNqwQEZh3CBB5QCYCDhDEtImAa5QhVG9mBBnQmRBvAzG+MAEZBYPQAXF8FBAUQGJAKCEHDIJ8bKQBYD/hhCKQhhCLkIgZQqPhLzjmqQjUhWAXjgQgCjpiUhKQhegmjpABUgsNADcgn9AB9QlDATh2BZQioBugLEpQgCERkGBIQ06GtwtBkg");
	var mask_graphics_96 = new cjs.Graphics().p("EhbCBdjII/8ZQB7n4GvgEQE9AEgOmXMgDbha1QgEmvl2gBQoZgKhzpaQlRyZiEpSQhFkyCSh4QCChyE3BWIdnJtQEPBTBKFqQAzDXEEAJMBZYgEqQFXgbgTlGQgdkvFgiUIagq1QEdh4CCB7QCaCEhFEwImHbLQhWHCmFBpQmWBvAzHDMAETBZPQAYGAFEAVQGNAKCFHIIKBbeQBZEChjCMQhjCMkKgaQqWhMzxmxQjWhXAXjiQgBjsiVhLQhfgnjsABUgstADagoaAB7QlHATh3BaQiqBvgMEsQgCEUkJBIQ1KGww4Bjg");
	var mask_graphics_97 = new cjs.Graphics().p("EhcLBedIJI8sQB9n+G0gDQFAAFgNmcMgDVhb2QgEm0l6gBQoegLh0pgQlTyniEpZQhGk1CUh6QCDhyE7BXId7J2QESBUBKFvQAzDZEHAKMBaYgEmQFbgagTlKQgdkyFkiVIa0q7QEgh4CDB8QCcCGhGE0ImObeQhYHGmKBpQmaBwAzHIMAEOBaOQAXGEFHAWQGTALCFHNIKFbzQBaEFhkCNQhkCOkOgbQqdhOz+m3QjYhZAXjkQAAjviXhMQhggnjvAAUgtNADZgo2AB4QlKATh5BaQisBwgNEwQgCEXkMBIQ1aGzxEBjg");
	var mask_graphics_98 = new cjs.Graphics().p("EhdVBfWIJS8/QB/oDG4gDQFEAGgNmhMgDOhc2QgDm4l/gCQokgMhzpnQlWy1iEpfQhGk5CVh7QCFhzE+BYIePKAQEVBWBKFzQA0DcEJAKMBbYgEhQFfgZgTlOQgdk2FoiWIbIq/QEjh6CFB+QCdCHhHE3ImVbxQhaHLmOBqQmfBxAzHNMAEIBbNQAXGIFLAXQGXAMCGHSIKJcHQBaEIhlCPQhlCPkRgcQqkhP0Lm/QjbhZAYjoQAAjxiYhNQhhgojxAAUgttADXgpTAB2QlOASh7BcQiuBwgNEzQgCEbkQBJQ1pG0xQBjg");
	var mask_graphics_99 = new cjs.Graphics().p("EheeBgQIJa9TQCBoIG+gCQFHAGgMmlMgDIhd3QgDm9mCgCQoqgOh0puQlXzBiGpnQhGk8CYh8QCGh0FBBaIejKKQEYBWBLF4QAzDeEMAKMBcXgEaQFjgagSlRQgck5FriXIbcrFQEnh6CGB/QCeCJhIE6ImccDQhcHQmSBrQmkBxAzHSMAECBcNQAXGNFPAXQGbAMCHHYIKNcbQBbELhnCQQhmCRkUgcQqrhS0ZnFQjchbAYjqQABjziahOQhigpj0AAUguNADUgpwABzQlRATh8BcQiwBygOE2QgDEdkSBJQ15G4xcBig");
	var mask_graphics_100 = new cjs.Graphics().p("EhfoBhJIJk9mQCDoNHCgCQFLAHgMmqMgDBhe3QgCnCmHgDQovgOh1p1QlZzPiGptQhGlACZh9QCIh1FFBbIe3KUQEaBYBLF7QA0DhEPALMBdXgEVQFmgZgSlWQgck8FwiYIbwrKQEph7CHCBQCgCLhJE9ImjcWQhdHVmXBrQmpByAzHXMAD9BdMQAWGRFSAYQGfANCIHdIKScwQBbEOhnCRQhoCSkXgdQqyhT0mnMQjfhcAZjsQABj3ichPQhjgpj2gBUgutADTgqMABwQlVASh+BdQiyBzgOE5QgEEhkVBJQ2IG7xpBhg");
	var mask_graphics_101 = new cjs.Graphics().p("EhgyBiCIJt95QCFoTHIgBQFOAHgLmuMgC7hf3QgBnHmLgDQo1gQh1p7QlbzdiGp0QhHlDCbh+QCJh3FJBdIfKKeQEeBZBLGAQA0DjESALMBeWgEPQFqgZgRlZQgck/FziaIcErOQEth8CJCCQChCNhLFAImqcpQhfHambBrQmtByAzHcMAD2BeMQAWGVFVAZQGkAOCIHiIKXdEQBcERhqCTQhpCTkZgdQq6hV0znTQjhheAajuQABj5idhQQhkgqj5gBUgvNADQgqpABuQlZARh/BeQi0B0gPE8QgEEkkYBKQ2YG9x1Bhg");
	var mask_graphics_102 = new cjs.Graphics().p("Ehh8Bi7IJ2+MQCIoZHMAAQFSAIgLmzMgC0hg3QAAnMmPgEQo8gRh1qCQlczqiHp7QhHlGCdh/QCLh4FLBeIffKoQEgBbBLGDQA1DmEUALMBfWgEIQFvgZgSldQgclDF4iaIcYrTQEwh9CKCDQCjCPhNFEImxc7QhgHemgBsQmyBzAzHhMADwBfMQAVGZFZAaQGpAOCJHoIKadYQBdEUhrCUQhqCVkdgeQrBhX1AnaQjjhfAajxQACj8ifhRQhlgqj7gBUgvtADOgrGABqQlcASiBBeQi2B1gPFAQgFEmkbBLQ2oG/yABgg");
	var mask_graphics_103 = new cjs.Graphics().p("EhjGBjzIJ/+eQCKoeHRAAQFVAIgKm3MgCshh4QAAnRmTgEQpBgSh2qJQlez3iHqCQhIlKCfiAQCNh5FOBgIfzKxQEjBdBLGHQA1DoEXANMBgWgEDQFygYgRlgQgclHF8ibIcsrZQEzh9CLCFQClCQhOFHIm4dOQhiHjmlBtQm2BzAzHmMADpBgLQAVGeFcAaQGtAPCKHtIKfdtQBcEXhrCWQhsCVkfgeQrIhZ1OnhQjmhgAcj0QACj+ihhSQhmgrj+gCUgwMADMgrjABoQlgARiCBfQi4B2gQFDQgFEpkeBLQ24HCyNBfg");
	var mask_graphics_104 = new cjs.Graphics().p("EhkQBkrIKJ+xQCLojHWABQFZAJgKm8MgClhi5QABnVmXgFQpHgTh2qPQlg0GiIqIQhHlOCgiBQCPh6FSBhMAgGAK8QEmBeBLGLQA1DrEbANMBhVgD8QF2gYgRlkQgclKGAicIdArdQE3h/CMCHQCmCShPFKInAdgQhkHomoBtQm7B0AyHsMADiBhKQAVGiFgAbQGxAQCLHyIKjeCQBdEZhtCXQhtCXkigfQrQhb1annQjohiAcj2QACkBiihTQhngskAgCUgwtADJgr/ABlQlkARiDBgQi6B2gRFHQgGEtkhBLQ3HHEyZBfg");
	var mask_graphics_105 = new cjs.Graphics().p("EhlbBlkIKS/FQCPopHaACQFcAKgJnAMgCdhj5QABnbmbgFQpNgUh2qXQli0SiIqQQhIlQCjiDQCQh7FVBjMAgaALGQEpBfBMGQQA1DsEdAOMBiUgD1QF6gYgQloQgclNGFidIdTriQE6h/COCIQCnCUhQFNInHdzQhmHtmtBtQnAB1AzHwMADbBiJQAVGnFjAcQG2ARCLH3IKneWQBdEdhuCYQhuCZklghQrXhd1onuQjqhjAdj4QACkEijhUQhogskDgDUgxMADHgscABhQloARiFBgQi8B4gRFKQgGEvklBMQ3WHGylBeg");
	var mask_graphics_106 = new cjs.Graphics().p("EhmmBmcIKc/YQCRouHfADQFfAKgInFMgCWhk5QADnfmggHQpTgUh2qeQlj0giJqWQhIlVCliDQCRh8FZBkMAguALQQErBhBMGUQA1DvEgAOMBjUgDvQF+gXgQlrQgblRGIieIdnrnQE+iACPCKQCpCWhSFRInOeEQhnHymyBuQnFB1AyH2MADVBjIQAUGrFnAdQG6ARCMH9IKqeqQBfEghwCaQhwCakoghQrdhf12n1QjshlAej7QADkGilhVQhpgtkGgDUgxsADEgs5ABeQlrAQiGBiQi/B4gRFNQgHEzknBMQ3nHJyxBdg");
	var mask_graphics_107 = new cjs.Graphics().p("EhnxBnTIKm/qQCSozHkADQFjALgInKMgCNhl5QADnkmjgHQpZgWh2qkQll0uiJqdQhJlYCniEQCTh9FcBlMAhBALbQEvBhBMGZQA1DxEjAPMBkUgDoQGBgXgQluQgblUGNigId7rrQFBiBCQCMQCqCXhSFUInWeXQhpH3m3BuQnJB2AyH6MADNBkIQAUGvFrAeQG+ASCMICIKve/QBfEjhxCbQhyCbkqghQrlhi2Cn8QjvhmAej9QAEkIinhXQhqgtkIgEUgyMADCgtVABbQlvAPiIBjQjAB5gTFQQgHE2krBMQ32HLy9Bdg");
	var mask_graphics_108 = new cjs.Graphics().p("Eho8BoLIKv/9QCVo5HpAEQFmALgHnNMgCFhm7QAEnomogIQpfgXh2qrQlm07iKqkQhIlbCoiGQCVh+FfBnMAhVALlQExBjBNGcQA1D1EmAPMBlTgDhQGFgWgPlzQgblXGRigIePrwQFEiCCRCOQCsCYhUFYIndepQhrH8m7BuQnOB3AyH/MADGBlIQATGzFuAeQHDATCNIIIKyfTQBgEmhzCdQhyCckugiQrshk2PoDQjxhnAfkAQAEkLiohYQhrgukLgDUgysAC+gtyABYQlyAPiKBjQjCB6gUFUQgHE5kuBMQ4GHOzJBbg");
	var mask_graphics_109 = new cjs.Graphics().p("EhqHBpCMAK5ggQQCXo+HtAFQFqAMgHnSMgB8hn7QAFntmsgJQplgYh2qyQlo1JiKqqQhJlfCqiGQCXh/FiBoMAhpALvQE0BlBMGgQA2D3EpAQMBmSgDZQGJgXgOl2QgblbGVihIejr0QFIiCCSCOQCtCbhVFbInle8QhtIAm/BvQnSB3AxIEMAC+BmHQATG3FyAgQHGAUCOIMIK2foQBgEph0CeQhzCekxgjQrzhm2doKQjyhpAfkCQAEkNiphZQhsgvkOgEUgzLAC7guPABUQl2APiLBkQjFB7gTFXQgJE8kwBNQ4WHQzVBag");
	var mask_graphics_110 = new cjs.Graphics().p("EhrTBp6MALDggkQCapDHyAFQFtANgGnXMgB0ho6QAFnymvgJQprgah2q5Qlq1WiKqxQhJljCsiHQCYiAFlBqMAh9AL5QE3BmBNGlQA1D5EsAQMBnSgDRQGNgWgPl6QgaleGZiiIe3r5QFLiDCUCRQCuCchWFeIntfOQhuIFnEBwQnXB3AxIJMAC2BnHQASG7F2AgQHLAVCOISIK6f9QBhEsh2CfQh1CfkzgkQr6ho2qoRQj1hqAgkFQAFkQirhaQhtgvkQgFUgzsAC5gurABQQl6APiMBkQjHB8gUFbQgJE/k0BMQ4lHTzhBZg");
	var mask_graphics_111 = new cjs.Graphics().p("EhseBqxMALMgg3QCcpIH3AGQFxAOgGncMgBrhp7QAGn3m0gKQpwgah3rAQlr1kiKq4QhJlmCtiIQCaiBFpBrMAiQAMEQE6BoBNGoQA2D8EuARMBoSgDKQGQgVgOl+QgZlhGdijIfLr9QFOiECVCSQCwCehYFhIn0fhQhxIKnIBvQncB4AxIPMACuBoFQASHAF5AhQHPAWCPIXMAK+AgRQBhEvh3ChQh2Cgk2glQsChp23oZQj3hrAhkHQAFkTishbQhugwkTgFUg0LAC1gvJABNQl9AOiNBmQjJB8gWFeQgJFCk3BNQ41HUztBZg");
	var mask_graphics_112 = new cjs.Graphics().p("EhtqBrnMALWghJQCepNH8AHQF1AOgFngMgBjhq8QAHn7m4gLQp2gbh3rHQls1yiLq+QhJlqCviJQCciCFsBtMAikAMOQE9BpBMGtQA2D+ExASMBpSgDCQGUgWgNmAQgallGhikIffsCQFSiECWCTQCxCghZFkIn8fzQhyIPnNBwQngB4AwIUMACmBpFQASHEF8AiQHUAXCPIcMALCAgmQBhEyh4CiQh4Chk5glQsIhs3EogQj5hsAhkKQAFkVithdQhvgwkWgGUg0rACzgvlABJQmBANiPBnQjLB9gWFhQgKFFk5BOQ5FHWz6BXg");
	var mask_graphics_113 = new cjs.Graphics().p("Ehu2BseMALgghcQChpTIAAIQF4APgEnlMgBZhr8QAIoAm9gLQp8gdh3rNQlt2AiLrFQhKltCyiLQCdiDFvBvMAi4AMZQE/BrBNGwQA2EBE0ASMBqRgC6QGYgVgNmEQgZloGlilIfzsGQFViFCXCVQCzChhbFoMgIDAgFQh0IUnRBwQnlB5AwIZMACdBqEQARHIGAAjQHYAYCQIhMALFAg7QBiE1h6CjQh5Cjk8gmQsPhu3RooQj8htAikMQAHkZiwhdQhwgxkYgGUg1LACvgwBABFQmFANiRBnQjNB/gWFkQgLFIk9BOQ5UHY0GBXg");
	var mask_graphics_114 = new cjs.Graphics().p("EhwCBtUMALqghuQCjpZIFAJQF8APgEnoMgBQhs9QAJoFnAgMQqCgeh3rUQlv2NiLrMQhKlxCziLQCfiEFyBwMAjLAMkQFDBsBNG1QA2EDE3ATMBrQgCyQGcgUgNmIQgZlsGqimMAgHgMKQFZiGCYCXQC0CjhcFrMgILAgYQh2IYnWBxQnqB5AwIdMACVBrEQAQHNGEAkQHcAYCRInMALIAhPQBiE4h6CkQh7Clk/gnQsWhw3eovQj+hvAjkPQAGkbiwheQhxgxkbgHUg1rACrgweABCQmIANiTBnQjPCAgXFnQgLFLlABOQ5kHa0SBWg");
	var mask_graphics_115 = new cjs.Graphics().p("EhxHBuLMAL0giCQClpeIKAKQF/AQgDntMgBGht9QAKoKnFgMQqIggh3rbQlw2aiLrTQhKl0C1iNQCgiFF2ByMAjfAMuQFFBuBNG5QA2EFE6AUMBsPgCpQGhgUgNmMQgYlvGtinMAgbgMNQFciHCaCYQC1ClhdFuMgITAgqQh4IdnaBxQnvB6AwIiMACMBsDQAQHRGHAlQHhAZCRIsMALMAhkQBiE7h8CmQh8CmlCgoQsdhz3ro2QkAhwAjkRQAIkdizhgQhygykdgHUg2LACogw7AA9QmLANiUBoQjRCAgZFrQgLFOlDBOQ50Hd0eBUg");
	var mask_graphics_116 = new cjs.Graphics().p("EhyJBvBMAL+giVQCopjIOALQGDARgDnyMgA8hu9QAKoPnIgNQqOghh3rhQlx2piMraQhKl3C3iOQCiiGF5B0MAjyAM5QFIBvBNG9QA3EIE8AUMBtPgCgQGkgUgMmPQgYlzGyinMAgvgMSQFfiICbCaQC3CnhfFxMgIbAg9Qh6IhneByQnzB6AvInMACDBtDQAPHVGLAlQHlAbCSIxMALPAh4QBjE+h+CoQh9CnlFgpQslh033o+QkChyAkkTQAHkgizhhQhzgzkggHUg2rACkgxXAA6QmQALiVBqQjTCBgZFuQgMFRlGBOQ6EHe0qBUg");
	var mask_graphics_117 = new cjs.Graphics().p("EhzMBv2MAMJgimQCqppITALQGGASgBn2MgAzhv9QAMoUnNgOQqUgih3roQly23iMrgQhKl7C5iPQCjiHF9B1MAkFANEQFLBxBNHBQA3ELE/AUMBuOgCXQGogTgLmTQgYl2G2ipMAhDgMVQFjiJCcCcQC4CohgF1MgIjAhOQh8InnjByQn4B6AvItMAB6BuBQAPHaGOAmQHpAbCSI3MALTAiNQBjFBh+CpQh/ColIgqQssh24FpFQkEh0AlkVQAIkji1hiQh0gzkigIUg3LAChgx0AA1QmTALiXBqQjVCCgaFxQgNFVlJBOQ6THg02BSg");
	var mask_graphics_118 = new cjs.Graphics().p("Eh0OBwsMAMTgi6QCtptIYAMQGJASgBn7MgAohw9QAMoYnRgPQqZgjh3rwQl03DiMroQhKl+C7iQQCliIGAB3MAkZANPQFNByBNHFQA3ENFCAWMBvOgCPQGrgTgKmWQgYl5G6iqMAhYgMaQFmiJCdCdQC6CrhiF3MgIrAhhQh+IrnnBzQn9B6AuIyMABxBvBQAOHeGSAnQHuAcCSI8MALWAiiQBkFEiACqQiACqlLgrQszh54SpMQkGh1AmkYQAIkli3hjQh0g0klgJUg3rACdgyRAAxQmWALiZBrQjXCCgaF1QgOFXlMBPQ6jHi1CBRg");
	var mask_graphics_119 = new cjs.Graphics().p("Eh1QBxhMAMdgjMQCvpzIdANQGNATAAn/MgAehx+QANocnVgQQqfglh3r2Ql13RiMrvQhKmBC8iRQCniJGDB4MAksANaQFQBzBOHKQA2EPFFAXMBwOgCGQGvgSgKmaQgYl9G/iqMAhrgMeQFqiKCeCfQC7CshjF7MgIzAhzQh/IwntBzQoBB7AuI3MABoBwAQANHiGVAoQHyAdCTJBMALZAi3QBkFHiBCrQiCCrlNgrQs6h74fpUQkIh3AmkaQAJkoi4hkQh2g1kngJUg4LACagytAAsQmaAKiaBsQjaCEgbF3QgOFblPBPQ6zHj1OBQg");
	var mask_graphics_120 = new cjs.Graphics().p("Eh2SByXMAMngjfQCyp4IhANQGRAUAAoEMgAThy9QAOoinZgRQqlglh3r+Ql23fiMr1QhLmFC/iSQCoiKGGB6MAlAANlQFTB1BNHOQA3ESFIAXMBxNgB8QGzgSgKmeQgXmAHDirMAiAgMiQFsiKCgChQC8CthkF+MgI8AiGQiBI0nxBzQoGB7AuI8MABeBxAQANHmGYApQH3AeCTJHMALcAjLQBlFKiDCtQiDCslQgsQtBh+4spbQkKh4AnkdQAJkqi6hmQh2g1kqgJUg4rACVgzKAAoQmeAKibBsQjcCFgcF7QgOFdlTBPQ7DHm1ZBOg");
	var mask_graphics_121 = new cjs.Graphics().p("Eh3UBzMMAMygjyQC0p9ImAOQGUAVABoIMgAJhz+QAPonndgRQqrgnh3sEQl33tiMr8QhKmJDAiTQCqiKGJB7MAlUANwQFVB3BOHSQA3EUFKAXMByMgByQG3gRgJmhQgXmEHHisMAiUgMlQFwiLChCiQC+CvhmGCMgJEAiXQiDI6n1BzQoLB7AtJBMABUBx/QAMHqGcArQH7AfCUJMMALfAjfQBlFOiECtQiECulTgtQtJiA44pjQkNh5AokgQAKksi7hnQh3g2ktgKUg5LACRgzmAAkQmiAJidBtQjdCGgdF+QgQFglVBQQ7THn1mBMg");
	var mask_graphics_122 = new cjs.Graphics().p("Eh4WB0AMAM8gkEQC2qCIrAPQGYAWACoNMAACh0+QAQornhgTQqxgoh3sLQl437iMsCQhLmNDCiTQCsiMGNB9MAlmAN7QFZB4BNHWQA3EXFOAYMBzLgBoQG7gRgJmlQgWmHHLitMAiogMpQF0iLChCjQDACyhoGEMgJMAiqQiFI+n6BzQoPB8AsJGMABLBy+QALHvGgArQH/AgCUJRMALiAj1QBmFQiGCvQiGCvlVguQtQiC5FprQkPh6ApkiQAKkwi9hnQh4g3kvgKUg5rACNg0DAAfQmlAJieBtQjgCGgeGCQgQFjlYBQQ7jHp1yBLg");
	var mask_graphics_123 = new cjs.Graphics().p("Eh5YB01MANHgkXQC4qIIwARQGbAWADoRMAANh1/QARovnmgUQq2gph3sSQl54IiMsKQhLmQDEiUQCuiNGQB/MAl6AOGQFbB6BNHaQA3EZFQAZMB0LgBeQG/gRgImoQgWmLHPitMAi8gMtQF3iMCjClQDBCzhpGIMgJUAi8QiHJDn/BzQoUB8AsJLMABABz9QALHzGjAtQIEAhCUJWMALlAkKQBmFTiHCwQiHCxlZgvQtWiF5SpyQkRh8ApklQALkyi+hoQh5g4kygLUg6KACJg0gAAbQmpAIigBuQjiCHgeGFQgRFmlbBQQ7zHq1+BKg");
	var mask_graphics_124 = new cjs.Graphics().p("Eh6aB1pMANRgkpQC7qNI1ASQGeAXAEoWMAAYh2/QASo0npgVQq9grh2sYQl64WiNsQQhKmUDFiWQCwiNGTCBMAmNAORQFeB7BNHeQA3EcFUAaMB1KgBUQHCgQgHmtQgWmNHTivMAjRgMwQF6iNCkCnQDCC1hqGLMgJdAjOQiJJHoCB0QoZB8ArJRMAA2B08QAKH3GnAuQIIAiCVJbMALoAkfQBmFWiJCxQiICylcgwQtdiH5gp6QkTh9ArknQALk1i/hqQh7g3k0gMUg6qACEg09AAWQmsAIihBvQjlCIgfGIQgRFplfBQQ8CHs2KBJg");
	var mask_graphics_125 = new cjs.Graphics().p("Eh7cB2eMANcgk8QC+qTI5ATQGhAYAFobMAAkh3+QASo6ntgVQrCgsh2sgQl84jiMsXQhKmXDHiXQCxiOGWCCMAmhAOdQFhB8BNHjQA3EeFWAaMB2JgBKQHHgPgHmwQgVmRHXivMAjlgM0QF+iOClCpQDDC3hsGOMgJlAjgQiLJMoHB0QodB9AqJVMAAsB18QAJH7GqAuQIMAkCWJhMALrAkzQBmFZiKCzQiKCzlegxQtliJ5sqCQkVh/ArkpQAMk3jBhsQh7g4k3gMUg7KACAg1ZAARQmwAHijBwQjmCIggGLQgSFtliBQQ8SHt2WBIg");
	var mask_graphics_126 = new cjs.Graphics().p("Eh8eB3RMANmglOQDBqXI+ATQGlAZAFofMAAwh4/QATo+nxgWQrIguh2smQl84xiNseQhKmaDJiYQCziQGZCEMAm0AOpQFkB+BNHmQA3EhFZAbMB3JgA/QHKgPgHm0QgVmUHciwMAj5gM3QGBiPCmCrQDFC4htGRMgJtAjyQiOJSoLB0QojB9ArJaMAAgB26QAJIAGuAvQIQAlCWJmMALuAlIQBnFciMC0QiLC1lhgyQtsiM55qJQkXiBAskrQAMk6jChtQh8g5k6gMUg7qAB7g11AAMQm0AHikBwQjpCJghGPQgSFvllBRQ8iHv2iBFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-54.892,y:21.0378}).wait(10).to({graphics:mask_graphics_10,x:-54.892,y:21.0378}).wait(1).to({graphics:mask_graphics_11,x:-58.1972,y:20.9371}).wait(1).to({graphics:mask_graphics_12,x:-61.4944,y:20.8363}).wait(1).to({graphics:mask_graphics_13,x:-64.7837,y:20.7354}).wait(1).to({graphics:mask_graphics_14,x:-68.0651,y:20.6343}).wait(1).to({graphics:mask_graphics_15,x:-71.1441,y:20.5331}).wait(1).to({graphics:mask_graphics_16,x:-70.3089,y:20.4317}).wait(1).to({graphics:mask_graphics_17,x:-69.4734,y:20.3302}).wait(1).to({graphics:mask_graphics_18,x:-68.6378,y:20.2286}).wait(1).to({graphics:mask_graphics_19,x:-67.8019,y:20.1268}).wait(1).to({graphics:mask_graphics_20,x:-66.9659,y:20.0249}).wait(1).to({graphics:mask_graphics_21,x:-66.1296,y:19.9229}).wait(1).to({graphics:mask_graphics_22,x:-65.2932,y:19.8207}).wait(1).to({graphics:mask_graphics_23,x:-64.4565,y:19.7184}).wait(1).to({graphics:mask_graphics_24,x:-63.6197,y:19.6159}).wait(1).to({graphics:mask_graphics_25,x:-62.7826,y:19.5133}).wait(1).to({graphics:mask_graphics_26,x:-61.9454,y:19.4105}).wait(1).to({graphics:mask_graphics_27,x:-61.1079,y:19.3076}).wait(1).to({graphics:mask_graphics_28,x:-60.2703,y:19.2045}).wait(1).to({graphics:mask_graphics_29,x:-59.4324,y:19.1013}).wait(1).to({graphics:mask_graphics_30,x:-58.5944,y:18.998}).wait(1).to({graphics:mask_graphics_31,x:-57.7562,y:18.8945}).wait(1).to({graphics:mask_graphics_32,x:-56.9178,y:18.7908}).wait(1).to({graphics:mask_graphics_33,x:-56.0792,y:18.687}).wait(1).to({graphics:mask_graphics_34,x:-55.2404,y:18.5831}).wait(1).to({graphics:mask_graphics_35,x:-54.4014,y:18.479}).wait(1).to({graphics:mask_graphics_36,x:-53.5622,y:18.3747}).wait(1).to({graphics:mask_graphics_37,x:-52.7229,y:18.2703}).wait(1).to({graphics:mask_graphics_38,x:-51.8834,y:18.1657}).wait(1).to({graphics:mask_graphics_39,x:-51.0436,y:18.061}).wait(1).to({graphics:mask_graphics_40,x:-50.2038,y:17.9561}).wait(1).to({graphics:mask_graphics_41,x:-49.3637,y:17.8511}).wait(1).to({graphics:mask_graphics_42,x:-48.5234,y:17.7459}).wait(1).to({graphics:mask_graphics_43,x:-47.683,y:17.6405}).wait(1).to({graphics:mask_graphics_44,x:-46.8424,y:17.535}).wait(1).to({graphics:mask_graphics_45,x:-46.0016,y:17.4293}).wait(1).to({graphics:mask_graphics_46,x:-45.1607,y:17.3234}).wait(1).to({graphics:mask_graphics_47,x:-44.3196,y:17.2174}).wait(1).to({graphics:mask_graphics_48,x:-43.4783,y:17.1112}).wait(1).to({graphics:mask_graphics_49,x:-42.6368,y:17.0049}).wait(1).to({graphics:mask_graphics_50,x:-41.7952,y:16.8984}).wait(1).to({graphics:mask_graphics_51,x:-40.9534,y:16.7917}).wait(1).to({graphics:mask_graphics_52,x:-40.1115,y:16.6849}).wait(1).to({graphics:mask_graphics_53,x:-39.2694,y:16.5778}).wait(1).to({graphics:mask_graphics_54,x:-38.4271,y:16.4707}).wait(1).to({graphics:mask_graphics_55,x:-37.5847,y:16.3633}).wait(1).to({graphics:mask_graphics_56,x:-36.7421,y:16.2558}).wait(1).to({graphics:mask_graphics_57,x:-35.8993,y:16.1481}).wait(1).to({graphics:mask_graphics_58,x:-35.0564,y:16.0402}).wait(1).to({graphics:mask_graphics_59,x:-34.2133,y:15.9321}).wait(1).to({graphics:mask_graphics_60,x:-33.3701,y:15.8239}).wait(1).to({graphics:mask_graphics_61,x:-32.5267,y:15.7155}).wait(1).to({graphics:mask_graphics_62,x:-31.6832,y:15.6069}).wait(1).to({graphics:mask_graphics_63,x:-30.8395,y:15.4981}).wait(1).to({graphics:mask_graphics_64,x:-29.9957,y:15.3892}).wait(1).to({graphics:mask_graphics_65,x:-29.1518,y:15.2801}).wait(1).to({graphics:mask_graphics_66,x:-28.3077,y:15.1708}).wait(1).to({graphics:mask_graphics_67,x:-27.4634,y:15.0613}).wait(1).to({graphics:mask_graphics_68,x:-26.619,y:14.9516}).wait(1).to({graphics:mask_graphics_69,x:-25.7745,y:14.8417}).wait(1).to({graphics:mask_graphics_70,x:-24.9298,y:14.7317}).wait(1).to({graphics:mask_graphics_71,x:-24.085,y:14.6214}).wait(1).to({graphics:mask_graphics_72,x:-23.24,y:14.511}).wait(1).to({graphics:mask_graphics_73,x:-22.3949,y:14.4004}).wait(1).to({graphics:mask_graphics_74,x:-21.5497,y:14.2896}).wait(1).to({graphics:mask_graphics_75,x:-20.7043,y:14.1786}).wait(1).to({graphics:mask_graphics_76,x:-19.8588,y:14.0674}).wait(1).to({graphics:mask_graphics_77,x:-19.0132,y:13.956}).wait(1).to({graphics:mask_graphics_78,x:-18.1675,y:13.8445}).wait(1).to({graphics:mask_graphics_79,x:-17.3216,y:13.7327}).wait(1).to({graphics:mask_graphics_80,x:-16.4756,y:13.6207}).wait(1).to({graphics:mask_graphics_81,x:-15.6295,y:13.5085}).wait(1).to({graphics:mask_graphics_82,x:-14.7832,y:13.3962}).wait(1).to({graphics:mask_graphics_83,x:-13.9369,y:13.2836}).wait(1).to({graphics:mask_graphics_84,x:-13.0904,y:13.1709}).wait(1).to({graphics:mask_graphics_85,x:-12.2438,y:13.0579}).wait(1).to({graphics:mask_graphics_86,x:-11.3971,y:12.9447}).wait(1).to({graphics:mask_graphics_87,x:-10.5502,y:12.8313}).wait(1).to({graphics:mask_graphics_88,x:-9.7033,y:12.7178}).wait(1).to({graphics:mask_graphics_89,x:-8.8562,y:12.604}).wait(1).to({graphics:mask_graphics_90,x:-8.009,y:12.49}).wait(1).to({graphics:mask_graphics_91,x:-7.1618,y:12.3758}).wait(1).to({graphics:mask_graphics_92,x:-6.3144,y:12.2614}).wait(1).to({graphics:mask_graphics_93,x:-5.4669,y:12.1467}).wait(1).to({graphics:mask_graphics_94,x:-4.6193,y:12.0319}).wait(1).to({graphics:mask_graphics_95,x:-3.7716,y:11.9169}).wait(1).to({graphics:mask_graphics_96,x:-2.9238,y:11.8016}).wait(1).to({graphics:mask_graphics_97,x:-2.0759,y:11.6861}).wait(1).to({graphics:mask_graphics_98,x:-1.2279,y:11.5704}).wait(1).to({graphics:mask_graphics_99,x:-0.3798,y:11.4545}).wait(1).to({graphics:mask_graphics_100,x:0.4684,y:11.3384}).wait(1).to({graphics:mask_graphics_101,x:1.3167,y:11.2221}).wait(1).to({graphics:mask_graphics_102,x:2.1651,y:11.1055}).wait(1).to({graphics:mask_graphics_103,x:3.0136,y:10.9887}).wait(1).to({graphics:mask_graphics_104,x:3.8621,y:10.8717}).wait(1).to({graphics:mask_graphics_105,x:4.7108,y:10.7545}).wait(1).to({graphics:mask_graphics_106,x:5.5595,y:10.637}).wait(1).to({graphics:mask_graphics_107,x:6.4083,y:10.5193}).wait(1).to({graphics:mask_graphics_108,x:7.2572,y:10.4014}).wait(1).to({graphics:mask_graphics_109,x:8.1062,y:10.2833}).wait(1).to({graphics:mask_graphics_110,x:8.9553,y:10.1649}).wait(1).to({graphics:mask_graphics_111,x:9.8044,y:10.0463}).wait(1).to({graphics:mask_graphics_112,x:10.6536,y:9.9274}).wait(1).to({graphics:mask_graphics_113,x:11.5029,y:9.8084}).wait(1).to({graphics:mask_graphics_114,x:12.3523,y:9.6891}).wait(1).to({graphics:mask_graphics_115,x:12.4672,y:9.5695}).wait(1).to({graphics:mask_graphics_116,x:12.2825,y:9.4497}).wait(1).to({graphics:mask_graphics_117,x:12.0794,y:9.3297}).wait(1).to({graphics:mask_graphics_118,x:11.8578,y:9.2095}).wait(1).to({graphics:mask_graphics_119,x:11.6178,y:9.089}).wait(1).to({graphics:mask_graphics_120,x:11.3594,y:8.9682}).wait(1).to({graphics:mask_graphics_121,x:11.0825,y:8.8472}).wait(1).to({graphics:mask_graphics_122,x:10.7873,y:8.726}).wait(1).to({graphics:mask_graphics_123,x:10.4736,y:8.6045}).wait(1).to({graphics:mask_graphics_124,x:10.1416,y:8.4828}).wait(1).to({graphics:mask_graphics_125,x:9.7911,y:8.3608}).wait(1).to({graphics:mask_graphics_126,x:38.5343,y:10.3537}).wait(99));

	// picoffort
	this.instance_3 = new lib.fortorange();
	this.instance_3.setTransform(-500,-202);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(225));

	// map
	this.instance_4 = new lib.fortorangealbanymap();
	this.instance_4.setTransform(-500,-202);

	this.instance_5 = new lib.FORTOframesize();
	this.instance_5.setTransform(-500,-202);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhOMgfUMCcZAAAMAAAA+pMicZAAAg");
	this.shape.setTransform(0.5,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#406991").s().p("EhOMAfVMAAAg+pMCcZAAAMAAAA+pg");
	this.shape_1.setTransform(0.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4}]},165).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-501,-203,1003,403);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween33("synched",0);
	this.instance.setTransform(8.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,17,64), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween34("synched",0);
	this.instance.setTransform(8.5,31.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,17,64), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween36("synched",0);
	this.instance.setTransform(140,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,280,16.6), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween35("synched",0);
	this.instance.setTransform(140,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,280,16.6), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween30("synched",0);
	this.instance.setTransform(114.5,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,229,66.6), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween29("synched",0);
	this.instance.setTransform(114.5,33.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,229,66.6), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween31("synched",0);
	this.instance.setTransform(203.95,34.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,408,68.7), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween32("synched",0);
	this.instance.setTransform(203.95,34.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,408,68.7), null);


(lib.eachoneowned = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_180 = function() {
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180).call(this.frame_180).wait(20));

	// Line_of_text
	this.instance = new lib.Symbol25();
	this.instance.setTransform(321,421.3,1,1,0,0,0,140,8.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol26();
	this.instance_1.setTransform(321,269.3,1,1,0,0,0,140,8.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.instance_2 = new lib.Tween36("synched",0);
	this.instance_2.setTransform(321,269.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},94).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_2}]},100).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({_off:true,y:269.3},5).wait(101));

	// Inspired
	this.instance_3 = new lib.Symbol22();
	this.instance_3.setTransform(1218,199.4,1,1,0,0,0,204,34.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol21();
	this.instance_4.setTransform(385,199.4,1,1,0,0,0,204,34.4);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.instance_5 = new lib.Tween32("synched",0);
	this.instance_5.setTransform(384.95,199.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},89).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},105).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({_off:true,x:385},5).wait(106));

	// One
	this.instance_6 = new lib.Symbol28();
	this.instance_6.setTransform(414.5,-42.1,1,1,0,0,0,8.5,31.9);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(414.5,105.9,1,1,0,0,0,8.5,31.9);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.instance_8 = new lib.Tween34("synched",0);
	this.instance_8.setTransform(414.5,105.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},85).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},110).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85).to({_off:false},0).to({_off:true,y:105.9},4).wait(111));

	// Each
	this.instance_9 = new lib.Symbol23();
	this.instance_9.setTransform(-132.5,107.3,1,1,0,0,0,114.5,33.3);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_9._off = true;

	this.instance_10 = new lib.Symbol24();
	this.instance_10.setTransform(268.5,107.3,1,1,0,0,0,114.5,33.3);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.instance_11 = new lib.Tween30("synched",0);
	this.instance_11.setTransform(268.5,107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},79).to({state:[{t:this.instance_10}]},6).to({state:[{t:this.instance_11}]},114).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},0).to({_off:true,x:268.5},6).wait(115));

	// Layer_4
	this.instance_12 = new lib.Tween37("synched",0);
	this.instance_12.setTransform(812,200);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween38("synched",0);
	this.instance_13.setTransform(812,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},74).to({state:[{t:this.instance_13}]},5).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).to({_off:true,alpha:1},5).wait(121));

	// Layer_3
	this.instance_14 = new lib.Tween39("synched",0);
	this.instance_14.setTransform(713,200);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween40("synched",0);
	this.instance_15.setTransform(713,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},69).to({state:[{t:this.instance_15}]},5).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(69).to({_off:false},0).to({_off:true,alpha:1},5).wait(126));

	// Layer_2
	this.instance_16 = new lib.Tween41("synched",0);
	this.instance_16.setTransform(612.5,200);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween42("synched",0);
	this.instance_17.setTransform(612.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},64).to({state:[{t:this.instance_17}]},5).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(64).to({_off:false},0).to({_off:true,alpha:1},5).wait(131));

	// Layer_1
	this.instance_18 = new lib.Tween43("synched",0);
	this.instance_18.setTransform(512,200);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween44("synched",0);
	this.instance_19.setTransform(512,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},59).to({state:[{t:this.instance_19}]},5).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(59).to({_off:false},0).to({_off:true,alpha:1},5).wait(136));

	// Line_animation
	this.instance_20 = new lib.Tween1("synched",0);
	this.instance_20.setTransform(500,209.55);

	this.instance_21 = new lib.Tween2("synched",0);
	this.instance_21.setTransform(500,209.55);
	this.instance_21._off = true;

	this.instance_22 = new lib.Tween3("synched",0);
	this.instance_22.setTransform(500,209.55);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween4("synched",0);
	this.instance_23.setTransform(500,209.55);
	this.instance_23._off = true;

	this.instance_24 = new lib.Tween5("synched",0);
	this.instance_24.setTransform(500,209.55);
	this.instance_24._off = true;

	this.instance_25 = new lib.Tween6("synched",0);
	this.instance_25.setTransform(500,209.55);
	this.instance_25._off = true;

	this.instance_26 = new lib.Tween7("synched",0);
	this.instance_26.setTransform(500,209.55);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween8("synched",0);
	this.instance_27.setTransform(500,209.55);
	this.instance_27._off = true;

	this.instance_28 = new lib.Tween9("synched",0);
	this.instance_28.setTransform(500,209.55);
	this.instance_28._off = true;

	this.instance_29 = new lib.Tween10("synched",0);
	this.instance_29.setTransform(500,209.55);
	this.instance_29._off = true;

	this.instance_30 = new lib.Tween11("synched",0);
	this.instance_30.setTransform(500,209.55);
	this.instance_30._off = true;

	this.instance_31 = new lib.Tween12("synched",0);
	this.instance_31.setTransform(500,209.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(7,1,1).p("EhOCAFtIJiAAQAKgtAahFQA1iJBRhyQEClsG/AAQG/AAD5FrQBOBwAwCIQAZBEAIAtIHvAAQAGgtAThEQAliIBChwQDSlrGcAAQGcAADVFrQBCBwAnCIQATBEAGAtII1AAQACgtAPhFQAfiIA+hxQDLlrHIACQG/ADC8FrQA7ByAaCIQAOBEABAtIIwAAQAJhfAbh2QA3jsBehzQBJhaBygrQBVggBYAAIVaAAQA0AABFAtQA8AmAnAvQA9BLAkA8QBDBtAQBkQAZCbAKBkIKeAA");
	this.shape.setTransform(500.025,209.5495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape}]},12).to({state:[]},1).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},2).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:false},2).to({_off:true},2).wait(196));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({_off:false},2).to({_off:true},2).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({_off:false},2).to({_off:true},2).wait(192));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(6).to({_off:false},2).to({_off:true},2).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(8).to({_off:false},2).to({_off:true},2).wait(188));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(10).to({_off:false},2).to({_off:true},2).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(12).to({_off:false},2).to({_off:true},2).wait(184));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(14).to({_off:false},2).to({_off:true},2).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(16).to({_off:false},2).to({_off:true},2).wait(180));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(18).to({_off:false},2).to({_off:true},2).wait(178));

	// Full_line_png
	this.instance_32 = new lib.Tween16("synched",0);
	this.instance_32.setTransform(500.5,181.5);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.instance_33 = new lib.Tween17("synched",0);
	this.instance_33.setTransform(500.5,181.5);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(26).to({_off:false},0).to({_off:true,alpha:1},13).wait(161));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(26).to({_off:false},13).to({startPosition:0},14).to({startPosition:0},3).to({_off:true},1).wait(143));

	// Background_Color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C556B").s().p("EhOHAfVMAAAg+pMCcPAAAMAAAA+pg");
	this.shape_1.setTransform(499.975,200.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(200));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhOHAfaMAAAg+zMCcPAAAMAAAA+zg");
	this.shape_2.setTransform(500,201);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(199));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-253,-80,1696,531);


(lib.Tween1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0,45.3,1,1,0,0,0,186.4,178.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A74Q5MAAAghxMA3xAAAMAAAAhxgA7cQeMA25AAAMAAAgg6Mg25AAAg");
	this.shape.setTransform(0.175,-0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F85B9").s().p("A9HSBMAAAgkBMA6PAAAMAAAAkBg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.4,-133.2,372.8,357.1);


(lib.andre_medal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(179).call(this.frame_179).wait(21));

	// TreasonAtWestPoint
	this.instance = new lib.Tween17copy("synched",0);
	this.instance.setTransform(657.45,205.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({alpha:1},32).wait(95).to({startPosition:0},0).wait(21));

	// TheFidelityMedal
	this.instance_1 = new lib.Tween19("synched",0);
	this.instance_1.setTransform(663.8,151.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({alpha:1},32).wait(116));

	// Fidelity
	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.setTransform(237,200);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween15("synched",0);
	this.instance_3.setTransform(237,200);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},9).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(1).to({alpha:0.0002},0).wait(1).to({alpha:0.0008},0).wait(1).to({alpha:0.0019},0).wait(1).to({alpha:0.0035},0).wait(1).to({alpha:0.0056},0).wait(1).to({alpha:0.0083},0).wait(1).to({alpha:0.0117},0).wait(1).to({alpha:0.0158},0).wait(1).to({alpha:0.0207},0).wait(1).to({alpha:0.0264},0).wait(1).to({alpha:0.0332},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.0502},0).wait(1).to({alpha:0.0609},0).wait(1).to({alpha:0.0734},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.1052},0).wait(1).to({alpha:0.1256},0).wait(1).to({alpha:0.1503},0).wait(1).to({alpha:0.1808},0).wait(1).to({alpha:0.2196},0).wait(1).to({alpha:0.2718},0).wait(1).to({alpha:0.3491},0).wait(1).to({alpha:0.4858},0).wait(1).to({alpha:0.6864},0).wait(1).to({alpha:0.8075},0).wait(1).to({alpha:0.8799},0).wait(1).to({alpha:0.9306},0).wait(1).to({alpha:0.9692},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true,alpha:0},9,cjs.Ease.quintInOut).wait(100));

	// Amor
	this.instance_4 = new lib.Tween20("synched",0);
	this.instance_4.setTransform(234.5,199);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween21("synched",0);
	this.instance_5.setTransform(234.5,199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},96).to({state:[{t:this.instance_5}]},15).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96).to({_off:false},0).to({_off:true,alpha:1},15).wait(89));

	// Map
	this.instance_6 = new lib.Tween22("synched",0);
	this.instance_6.setTransform(500,163.5);
	this.instance_6.alpha = 0.0508;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:186.1,alpha:0.1992},14).to({y:373.5},116).to({alpha:0},69).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhOqAfuMAAAg/bMCdVAAAMAAAA/bg");
	this.shape.setTransform(501.475,201.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(200));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("EhOHAfVMAAAg+pMCcPAAAMAAAA+pg");
	this.shape_1.setTransform(500,200.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(199));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-355,1007,1247);


(lib.WHM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_184 = function() {
		this.getStage().getChildAt(0).changeSlide(slideNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(184).call(this.frame_184).wait(16));

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(510.9,84.1,1,1,0,0,0,171.9,34.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(20).to({alpha:0},43).wait(108));

	// Layer_9
	this.instance_1 = new lib.Tween1copy("synched",0);
	this.instance_1.setTransform(507.4,152.2,0.8612,0.8612);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(113).to({_off:false},0).to({alpha:1},7).wait(80));

	// Layer_8
	this.instance_2 = new lib.Tween16copy("synched",0);
	this.instance_2.setTransform(502.95,-191.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween17copy3("synched",0);
	this.instance_3.setTransform(502.95,201.75,0.9122,0.9122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},95).to({state:[{t:this.instance_3}]},20).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({_off:true,scaleX:0.9122,scaleY:0.9122,y:201.75},20).wait(85));

	// Layer_2
	this.instance_4 = new lib.Tween14copy3("synched",0);
	this.instance_4.setTransform(500,514);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween15copy2("synched",0);
	this.instance_5.setTransform(523.1,198.8,1.0059,1.0059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},22).to({state:[{t:this.instance_5}]},16).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({_off:true,scaleX:1.0059,scaleY:1.0059,x:523.1,y:198.8},16).wait(162));

	// Layer_2
	this.instance_6 = new lib.Tween12copy2("synched",0);
	this.instance_6.setTransform(500,492);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween13copy("synched",0);
	this.instance_7.setTransform(529,266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},18).to({state:[{t:this.instance_7}]},20).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({_off:true,x:529,y:266},20).wait(162));

	// Layer_2
	this.instance_8 = new lib.Tween10copy2("synched",0);
	this.instance_8.setTransform(833.95,499);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween11copy2("synched",0);
	this.instance_9.setTransform(775,128,1.36,1.36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},14).to({state:[{t:this.instance_9}]},24).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).to({_off:true,scaleX:1.36,scaleY:1.36,x:775,y:128},24).wait(162));

	// Layer_2
	this.instance_10 = new lib.Tween8copy2("synched",0);
	this.instance_10.setTransform(500,481);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween9copy2("synched",0);
	this.instance_11.setTransform(449,167,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},28).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({_off:true,scaleX:1.17,scaleY:1.17,x:449,y:167},28).wait(162));

	// Layer_2
	this.instance_12 = new lib.Tween6copy2("synched",0);
	this.instance_12.setTransform(500,507);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween7copy2("synched",0);
	this.instance_13.setTransform(451,211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},35).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({_off:true,x:451,y:211},35).wait(162));

	// Symbol_2
	this.instance_14 = new lib.Symbol2("synched",0);
	this.instance_14.setTransform(500,200,1,1,0,0,0,500,200);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({alpha:1,startPosition:5},7).wait(169));

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1C36C").s().p("EgmzAfQMAAAg+fMBNoAAAMAAAA+fg");
	this.shape.setTransform(1249.5,200.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1C36C").s().p("Egm1AfQMAAAg+fMBNrAAAMAAAA+fg");
	this.shape_1.setTransform(1231.675,200.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1C36C").s().p("Egm2AfQMAAAg+fMBNtAAAMAAAA+fg");
	this.shape_2.setTransform(1213.875,200.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1C36C").s().p("Egm3AfQMAAAg+fMBNvAAAMAAAA+fg");
	this.shape_3.setTransform(1196.025,200.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1C36C").s().p("Egm4AfQMAAAg+fMBNxAAAMAAAA+fg");
	this.shape_4.setTransform(1178.2,200.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1C36C").s().p("Egm5AfQMAAAg+fMBNzAAAMAAAA+fg");
	this.shape_5.setTransform(1160.4,200.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1C36C").s().p("Egm6AfQMAAAg+fMBN1AAAMAAAA+fg");
	this.shape_6.setTransform(1142.575,200.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1C36C").s().p("Egm7AfQMAAAg+fMBN3AAAMAAAA+fg");
	this.shape_7.setTransform(1124.775,200.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1C36C").s().p("Egm8AfQMAAAg+fMBN5AAAMAAAA+fg");
	this.shape_8.setTransform(1106.925,200.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1C36C").s().p("Egm+AfQMAAAg+fMBN9AAAMAAAA+fg");
	this.shape_9.setTransform(1089.1,200.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1C36C").s().p("EgnAAfQMAAAg+fMBOBAAAMAAAA+fg");
	this.shape_10.setTransform(1053.475,200.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1C36C").s().p("EgnBAfQMAAAg+fMBODAAAMAAAA+fg");
	this.shape_11.setTransform(1035.625,200.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1C36C").s().p("EgnCAfQMAAAg+fMBOFAAAMAAAA+fg");
	this.shape_12.setTransform(1017.825,200.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1C36C").s().p("EgnDAfQMAAAg+fMBOHAAAMAAAA+fg");
	this.shape_13.setTransform(1000,200.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1C36C").s().p("EgnEAfQMAAAg+fMBOJAAAMAAAA+fg");
	this.shape_14.setTransform(982.175,200.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F1C36C").s().p("EgnFAfQMAAAg+fMBOLAAAMAAAA+fg");
	this.shape_15.setTransform(964.375,200.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F1C36C").s().p("EgnGAfQMAAAg+fMBONAAAMAAAA+fg");
	this.shape_16.setTransform(946.525,200.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1C36C").s().p("EgnIAfQMAAAg+fMBORAAAMAAAA+fg");
	this.shape_17.setTransform(928.7,200.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F1C36C").s().p("EgnJAfQMAAAg+fMBOTAAAMAAAA+fg");
	this.shape_18.setTransform(910.9,200.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F1C36C").s().p("EgnKAfQMAAAg+fMBOVAAAMAAAA+fg");
	this.shape_19.setTransform(893.075,200.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F1C36C").s().p("EgnLAfQMAAAg+fMBOXAAAMAAAA+fg");
	this.shape_20.setTransform(875.275,200.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F1C36C").s().p("EgnMAfQMAAAg+fMBOZAAAMAAAA+fg");
	this.shape_21.setTransform(857.425,200.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1C36C").s().p("EgnNAfQMAAAg+fMBObAAAMAAAA+fg");
	this.shape_22.setTransform(839.6,200.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F1C36C").s().p("EgnOAfQMAAAg+fMBOdAAAMAAAA+fg");
	this.shape_23.setTransform(821.8,200.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F1C36C").s().p("EgnPAfQMAAAg+fMBOfAAAMAAAA+fg");
	this.shape_24.setTransform(803.975,200.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F1C36C").s().p("EgnQAfQMAAAg+fMBOhAAAMAAAA+fg");
	this.shape_25.setTransform(786.125,200.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F1C36C").s().p("EgnRAfQMAAAg+fMBOjAAAMAAAA+fg");
	this.shape_26.setTransform(768.325,200.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F1C36C").s().p("EgnSAfQMAAAg+fMBOmAAAMAAAA+fg");
	this.shape_27.setTransform(750.5,200.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{x:1089.1}}]},1).to({state:[{t:this.shape_9,p:{x:1071.3}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(172));

	// Layer_10
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7A5787").s().p("EgnmAfVMAAAg+pMBPNAAAMAAAA+pg");
	this.shape_28.setTransform(-258.45,200.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1).to({x:-240.15},0).wait(1).to({x:-221.9},0).wait(1).to({x:-203.6},0).wait(1).to({x:-185.3},0).wait(1).to({x:-167.05},0).wait(1).to({x:-148.75},0).wait(1).to({x:-130.45},0).wait(1).to({x:-112.2},0).wait(1).to({x:-93.9},0).wait(1).to({x:-75.6},0).wait(1).to({x:-57.35},0).wait(1).to({x:-39.05},0).wait(1).to({x:-20.75},0).wait(1).to({x:-2.45},0).wait(1).to({x:15.8},0).wait(1).to({x:34.1},0).wait(1).to({x:52.4},0).wait(1).to({x:70.65},0).wait(1).to({x:88.95},0).wait(1).to({x:107.25},0).wait(1).to({x:125.5},0).wait(1).to({x:143.8},0).wait(1).to({x:162.1},0).wait(1).to({x:180.35},0).wait(1).to({x:198.65},0).wait(1).to({x:216.95},0).wait(1).to({x:235.2},0).wait(1).to({x:253.5},0).wait(172));

	// Layer_1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("EhOHAfQMAAAg+fMCcPAAAMAAAA+fg");
	this.shape_29.setTransform(500,200);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).to({_off:true},1).wait(199));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-511.9,-373.9,2009.9,1087.9);


// stage content:
(lib.nysm_slider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
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
			console.log('the curslide is ' + curSlide);
			console.log('the nextslide is ' + nextSlide);
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
		self["symbol" + firstSlide].gotoAndPlay(0);
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
				this.symbol4.addEventListener("click", fl_ClickToGoToWebPage4);
				this.symbol3.addEventListener("click", fl_ClickToGoToWebPage3);
				this.symbol2.addEventListener("click", fl_ClickToGoToWebPage2);
				this.symbol1.addEventListener("click", fl_ClickToGoToWebPage1);
		
				function fl_ClickToGoToWebPage3() {
					window.open("exhibitions/each-one-inspired", "_self");
				}
			
		
		
				function fl_ClickToGoToWebPage4() {
					window.open("womens-history-month", "_self");
				}
				
					function fl_ClickToGoToWebPage1() {
					window.open("exhibitions/ongoing/fort-orange", "_self");
				}
		
						function fl_ClickToGoToWebPage2() {
					window.open("exhibitions/fidelity-medal", "_self");
				}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// WHM
	this.symbol4 = new lib.WHM();
	this.symbol4.name = "symbol4";
	this.symbol4.setTransform(500,200,1,1,0,0,0,500,200);
	this.symbol4.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol4).wait(2));

	// eachoneowned
	this.symbol3 = new lib.eachoneowned();
	this.symbol3.name = "symbol3";
	this.symbol3.setTransform(500,200,1,1,0,0,0,500,201);
	this.symbol3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol3).wait(2));

	// andre medal
	this.symbol2 = new lib.andre_medal();
	this.symbol2.name = "symbol2";
	this.symbol2.setTransform(500,200.5,1,1,0,0,0,500,200.5);
	this.symbol2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol2).wait(2));

	// fortorange
	this.symbol1 = new lib.votesforwomen();
	this.symbol1.name = "symbol1";
	this.symbol1.setTransform(1000,401,1,1,0,0,0,500,200);
	this.symbol1.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.symbol1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-155,1509.9,837);
// library properties:
lib.properties = {
	id: '5222455380EF4C3C8D1B33262CFD3544',
	width: 1000,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/sites/all/themes/nysm/homepageanimation/images/Each.png?1709565987847", id:"Each"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/FORTOframesize.jpg?1709565987847", id:"FORTOframesize"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/fortorangealbanymap.jpg?1709565987847", id:"fortorangealbanymap"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/fortorange.jpg?1709565987847", id:"fortorange"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/H202341_obverse.png?1709565987847", id:"H202341_obverse"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/H202341_reverse.png?1709565987847", id:"H202341_reverse"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/Image_1_1000x400.jpg?1709565987847", id:"Image_1_1000x400"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/Image_2_1000x400.jpg?1709565987847", id:"Image_2_1000x400"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/Image_3_1000x400.jpg?1709565987847", id:"Image_3_1000x400"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/Image_4_1000x400.jpg?1709565987847", id:"Image_4_1000x400"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/Inspired.png?1709565987847", id:"Inspired"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/linedrawing_expand.png?1709565987847", id:"linedrawing_expand"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/Lineoftext.png?1709565987847", id:"Lineoftext"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/one.png?1709565987847", id:"one"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/title01.png?1709565987847", id:"title01"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/title02.png?1709565987847", id:"title02"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/WHM_background.jpg?1709565987847", id:"WHM_background"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/WHM_Image1.png?1709565987847", id:"WHM_Image1"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/WHM_Image2.png?1709565987847", id:"WHM_Image2"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/WHM_Image3.png?1709565987847", id:"WHM_Image3"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/WHM_Image4.png?1709565987847", id:"WHM_Image4"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/WHM_Image5.png?1709565987847", id:"WHM_Image5"},
		{src:"/sites/all/themes/nysm/homepageanimation/images/WPmapA.jpg?1709565987847", id:"WPmapA"}
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
an.compositions['5222455380EF4C3C8D1B33262CFD3544'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;