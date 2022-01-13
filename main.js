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



(lib._1std = function() {
	this.initialize(img._1std);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,1792);


(lib._2std = function() {
	this.initialize(img._2std);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,829,1792);


(lib._3std = function() {
	this.initialize(img._3std);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,829,1792);


(lib._4std = function() {
	this.initialize(img._4std);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,829,1793);


(lib._5std = function() {
	this.initialize(img._5std);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,1792);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,126);


(lib.FlashAICB = function() {
	this.initialize(img.FlashAICB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,829,1794);


(lib.flower = function() {
	this.initialize(img.flower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,197);// helper functions:

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


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._5std();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,828,1792), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._5std();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,828,1792), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICB();
	this.instance.setTransform(0,0,0.9988,0.9989);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,828,1792), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.flower();
	this.instance.setTransform(0,0,0.3262,0.3262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,64.3);


(lib.submit = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Submit", "48px 'Times'", "#FFFFFF");
	this.text.lineHeight = 50;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-72.5,-24);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6699").s().p("AvnFFIAAqJIfPAAIAAKJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-32.5,200,65);


(lib.Splash = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ACjCHQgJgshHgVQgbgIgqgFIhFgHQhEgKgmghQgUgQgJgVQgKgZAHgXQANgpA1gRQApgNA0AEQCCAKA3BXQAXAlALAxQAIAlAEA5QABAOgPAAIgEAAIgFABQgJAAgCgMgACiBNQgEgWgEgRQgNgzgagiQgegmgzgRQgrgPg3ABQg1ACgcAUQgQAMgEARQgDARALARQAZAjA9ANQAXAFAjADIA6AGQA1AIAkATQAQAJAMAKIAAAAg");
	this.shape.setTransform(7.631,5.5456,0.3857,0.3857);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,15.3,11.4);


(lib.flower2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.flower();
	this.instance.setTransform(0,0,0.3262,0.3262);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,64.3);


(lib.Flower = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.flower();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,197);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Background5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Background4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._4std();
	this.instance.setTransform(0,0,0.2399,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background4, new cjs.Rectangle(0,0,198.9,430.3), null);


(lib.Background3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._3std();
	this.instance.setTransform(0,0,0.2405,0.2399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background3, new cjs.Rectangle(0,0,199.4,430), null);


(lib.Background2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._2std();
	this.instance.setTransform(0,0,0.2399,0.2399);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background2, new cjs.Rectangle(0,0,198.9,430), null);


(lib.Background1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1std();
	this.instance.setTransform(-414,-896);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background1, new cjs.Rectangle(-414,-896,828,1792), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.flower2("synched",0);
	this.instance.setTransform(29.5,32.1,1,1,0,0,0,29.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,64.3);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.submit();
	this.instance.setTransform(580.15,263.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.addrs = new lib.an_TextInput({'id': 'addrs', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.addrs.name = "addrs";
	this.addrs.setTransform(350,30,7,2.7273,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.addrs},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-3.5,-1.3,707,297), null);


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

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(29.5,32.1,1,1,0,0,0,29.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,64.3);


(lib.Flower5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(59.45,60.75,1.4259,1.4259,29.9989,0,0,29.6,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.7,121.5);


(lib.Flower4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(48.85,53.15,1.6609,1.6609,0,0,0,29.4,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.1,106.8);


(lib.Flower3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(29.5,32.1,1,1,0,0,0,29.5,32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,64.3);


// stage content:
(lib.SavetheDate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:364,thanks:436};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [364,435,447];
	// timeline functions:
	this.frame_364 = function() {
		this.button.on("click", function(a) {
			this.gotoAndPlay("thanks");
		}.bind(this));
	}
	this.frame_435 = function() {
		this.gotoAndPlay("loop");
	}
	this.frame_447 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(364).call(this.frame_364).wait(71).call(this.frame_435).wait(12).call(this.frame_447).wait(1));

	// Flower1
	this.instance = new lib.Flower("synched",0);
	this.instance.setTransform(-26.15,-25.85,0.4143,0.4136,0,0,0,89.5,190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:90.5,regY:98.5,x:5.95,y:-41.15},0).wait(1).to({x:32.9,y:-13},0).wait(1).to({x:56,y:18.35},0).wait(1).to({x:76.2,y:51.65},0).wait(1).to({x:94.1,y:86.25},0).wait(1).to({x:110.2,y:121.8},0).wait(1).to({x:124.9,y:158},0).wait(1).to({x:138.4,y:194.65},0).wait(1).to({x:150.9,y:231.65},0).wait(1).to({x:162.55,y:269},0).wait(1).to({x:173.45,y:306.5},0).wait(1).to({x:183.75,y:344.2},0).wait(1).to({x:193.45,y:382.1},0).wait(1).to({x:202.7,y:420.15},0).wait(1).to({x:211.45,y:458.25},0).wait(1).to({x:219.85,y:496.5},0).wait(1).to({x:227.9,y:534.8},0).wait(1).to({x:235.6,y:573.15},0).wait(1).to({x:243.05,y:611.65},0).wait(1).to({x:250.2,y:650.15},0).wait(1).to({x:257.1,y:688.65},0).wait(1).to({x:263.8,y:727.25},0).wait(1).to({x:270.3,y:765.9},0).wait(1).to({x:276.6,y:804.6},0).wait(1).to({x:282.7,y:843.3},0).wait(1).to({x:288.7,y:882},0).wait(1).to({x:294.5,y:920.8},0).wait(1).to({x:300.15,y:959.55},0).wait(1).to({x:305.7,y:998.4},0).wait(1).to({x:311.15,y:1037.25},0).wait(1).to({x:316.45,y:1076.05},0).wait(1).to({x:321.6,y:1114.9},0).wait(1).to({x:326.65,y:1153.8},0).wait(1).to({x:331.75,y:1114.75},0).wait(1).to({x:343,y:1076.5},0).wait(1).to({x:357.25,y:1039.35},0).wait(1).to({x:374.6,y:1004.3},0).wait(1).to({x:397.5,y:977.65},0).wait(1).to({x:430.25,y:991.25},0).wait(1).to({x:457.8,y:1020.25},0).wait(1).to({x:478.1,y:1052.1},0).wait(1).to({x:494,y:1085.2},0).wait(1).to({x:507.2,y:1119.15},0).wait(1).to({x:518.1,y:1153.8},0).wait(1).to({x:527.6,y:1113.1},0).wait(1).to({x:548.65,y:1074.75},0).wait(1).to({x:579.2,y:1039.3},0).wait(1).to({x:610.45,y:1022.65},0).wait(1).to({x:654.55,y:1042.8},0).wait(1).to({x:675.75,y:1078.35},0).wait(1).to({x:692.35,y:1115.55},0).wait(1).to({x:705.95,y:1153.8},0).wait(1).to({x:723.15,y:1134.25},0).wait(1).to({x:744.45,y:1114.65},0).wait(1).to({x:765.7,y:1095.05},0).wait(1).to({x:786.9,y:1075.45},0).wait(1).to({x:818.2,y:1064.3},0).wait(1).to({x:852.85,y:1068.65},0).wait(1).to({x:881.95,y:1089.15},0).wait(1).to({x:902.85,y:1117.55},0).wait(1).to({x:917.95,y:1149},0).wait(1).to({x:929.25,y:1181.7},0).wait(1).to({x:936.9,y:1215.45},0).wait(1).to({x:938.35},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(381));

	// Background1
	this.instance_1 = new lib._1std();
	this.instance_1.setTransform(3,1);

	this.instance_2 = new lib.Background1();
	this.instance_2.setTransform(418.15,895.35,0.9999,0.9999);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},63).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(373));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({_off:false},0).wait(1).to({x:418.2598,y:732.75},0).wait(1).to({x:418.3696,y:570.15},0).wait(1).to({x:418.4795,y:407.55},0).wait(1).to({x:418.5893,y:244.95},0).wait(1).to({x:418.6991,y:82.35},0).wait(1).to({x:418.8089,y:-80.25},0).wait(1).to({x:418.9187,y:-242.85},0).wait(1).to({x:419.0285,y:-405.45},0).wait(1).to({x:419.1384,y:-568.05},0).wait(1).to({x:419.2482,y:-730.65},0).wait(1).to({x:419.358,y:-893.25},0).to({_off:true},1).wait(373));

	// MergedLayer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AikDEQgPAAAAgPQgDhKAHgzQAJhEAcgxQAaguAvggQAqgeA2gQQBHgVApAZQAWANAKAUQAKAXgIAWQgQAyhFAlQgTAKgnAPQgmARgSAJQgQAIgmAYQgdASgLAKQgRAQgIAXQgGATgCAcQAAAOgOABIgBAAgABAijQgVAEghAMQhhAngkBUQgTArgFA6IgBAIIAEgFQAQgRAcgSIAxgcQAVgMAggNIA2gYQAfgOASgOQAZgSANgWQAOgYgOgSQgJgMgPgFQgOgGgRAAQgLAAgNACg");
	this.shape.setTransform(573.6623,1283.38,0.3002,0.2637,0,-26.1454,-14.9808);

	this.instance_3 = new lib.Splash("synched",0);
	this.instance_3.setTransform(540.2,1287.1,0.7503,0.75,30.0161,0,0,7.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABpDjQgHgDgDgHQgVg8gRgbQgHgKgLgNIgUgWIgrgxIhPhSQgqguABgnQABgXAMgUQALgUATgOQApgcA0ANQAwALAjAqQAeAkARA1QAQAxAFA9QADAsgDBBQABAEgBAFIgGAoQgGAXgLAOQgEAEgFAAIgGgBgAhNi7QgTAKgKATQgTAjAeAoQAUAaAvAvQAqAsAdAiQAmArANAZQAIAPAHATIAEgXIAAgGQADhGgEgtQgFg+gSgxQgRgugegeQgjgjgqgBIgCAAQgVAAgTAKg");
	this.shape_1.setTransform(559.3527,1294.7231,0.2235,0.2234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:0.3002,scaleY:0.2637,skewX:-26.1454,skewY:-14.9808,x:573.6623,y:1283.38}}]},114).to({state:[{t:this.instance_3,p:{regX:7.9,regY:5.9,scaleX:0.7503,scaleY:0.75,rotation:30.0161,x:540.2,y:1287.1}},{t:this.shape,p:{scaleX:0.4214,scaleY:0.3702,skewX:-26.1468,skewY:-14.9807,x:577.5127,y:1279.1726}}]},1).to({state:[{t:this.instance_3,p:{regX:8,regY:6,scaleX:1.1676,scaleY:1.1672,rotation:30.0171,x:538.3,y:1280.3}},{t:this.shape_1,p:{scaleX:0.2235,scaleY:0.2234,x:559.3527,y:1294.7231,rotation:0,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:0.5369,scaleY:0.4717,skewX:-26.1464,skewY:-14.9876,x:581.7628,y:1271.4206}}]},1).to({state:[{t:this.instance_3,p:{regX:7.9,regY:6.1,scaleX:1.5442,scaleY:1.5437,rotation:30.0178,x:538.55,y:1273.1}},{t:this.shape_1,p:{scaleX:0.4084,scaleY:0.4081,x:559.0024,y:1282.3631,rotation:0,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:0.5914,scaleY:0.5193,skewX:-11.1257,skewY:0,x:584.9763,y:1262.3183}}]},1).to({state:[{t:this.instance_3,p:{regX:8,regY:6.1,scaleX:2.0986,scaleY:2.0978,rotation:30.0182,x:538,y:1262.7}},{t:this.shape_1,p:{scaleX:0.6272,scaleY:0.6267,x:558.9658,y:1267.4376,rotation:0,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:0.7681,scaleY:0.6863,skewX:-10.9374,skewY:0,x:589.2993,y:1252.8395}}]},1).to({state:[{t:this.instance_3,p:{regX:8,regY:6.2,scaleX:2.5763,scaleY:2.5754,rotation:30.0177,x:535.35,y:1247.15}},{t:this.shape_1,p:{scaleX:0.6272,scaleY:0.6267,x:558.9658,y:1267.4376,rotation:0,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:1.0586,scaleY:0.9458,skewX:-5.1991,skewY:5.7255,x:598.2496,y:1240.1389}}]},1).to({state:[{t:this.instance_3,p:{regX:8.1,regY:6.2,scaleX:2.8535,scaleY:2.8524,rotation:30.0185,x:533.55,y:1227.95}},{t:this.shape_1,p:{scaleX:0.8168,scaleY:0.8163,x:558.7532,y:1253.2439,rotation:-15.0037,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:1.3863,scaleY:1.2388,skewX:9.8027,skewY:20.7134,x:608.866,y:1224.8622}}]},1).to({state:[{t:this.instance_3,p:{regX:8.2,regY:6.2,scaleX:2.8538,scaleY:2.8521,rotation:15.0104,x:522.7,y:1212.15}},{t:this.shape_1,p:{scaleX:0.9746,scaleY:0.9741,x:558.9371,y:1233.9741,rotation:-22.2394,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:1.1838,scaleY:1.1036,skewX:28.5848,skewY:40.9133,x:625.3883,y:1215.3352}}]},1).to({state:[{t:this.instance_3,p:{regX:8.2,regY:6.2,scaleX:2.8538,scaleY:2.8521,rotation:15.0104,x:522.7,y:1212.15}},{t:this.shape_1,p:{scaleX:1.1213,scaleY:1.1208,x:556.1584,y:1214.7725,rotation:-22.2366,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:0.9292,scaleY:0.8665,skewX:43.5873,skewY:55.9172,x:642.4792,y:1214.2182}}]},2).to({state:[{t:this.instance_3,p:{regX:8.1,regY:6.3,scaleX:2.8539,scaleY:2.8519,rotation:0.0009,x:515.6,y:1206.85}},{t:this.shape_1,p:{scaleX:1.3501,scaleY:1.3496,x:551.1076,y:1197.0364,rotation:-29.7226,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:0.7607,scaleY:0.7149,skewX:59.8979,skewY:69.7013,x:657.5987,y:1222.4945}}]},2).to({state:[{t:this.instance_3,p:{regX:8.1,regY:6.4,scaleX:2.4884,scaleY:2.4869,rotation:-15.0062,x:507.3,y:1200.5}},{t:this.shape_1,p:{scaleX:1.1413,scaleY:1.1411,x:531.3446,y:1183.6729,rotation:-38.9142,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:0.4307,scaleY:0.4047,skewX:59.902,skewY:69.7032,x:665.8018,y:1230.3983}}]},2).to({state:[{t:this.instance_3,p:{regX:8.1,regY:6.5,scaleX:1.9982,scaleY:1.9975,rotation:-30.0107,x:495.55,y:1194.65}},{t:this.shape_1,p:{scaleX:0.8725,scaleY:0.8726,x:516.7186,y:1176.1144,rotation:-53.9154,skewX:0,skewY:0}},{t:this.shape,p:{scaleX:0.2179,scaleY:0.2048,skewX:59.904,skewY:69.7149,x:670.7641,y:1236.5679}}]},2).to({state:[{t:this.shape_1,p:{scaleX:0.6079,scaleY:0.6138,x:499.9418,y:1174.8523,rotation:0,skewX:-69.7202,skewY:-68.0664}}]},2).to({state:[{t:this.shape_1,p:{scaleX:0.3273,scaleY:0.3304,x:496.0071,y:1174.1636,rotation:0,skewX:-69.728,skewY:-68.0696}}]},1).to({state:[{t:this.shape_1,p:{scaleX:0.1401,scaleY:0.1415,x:490.5608,y:1174.7444,rotation:0,skewX:-69.7434,skewY:-68.0781}}]},1).to({state:[]},1).to({state:[]},6).wait(308));

	// water
	this.instance_4 = new lib.Bitmap5();
	this.instance_4.setTransform(521,1287,0.5838,0.6349);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).wait(42).to({scaleX:0.5837,scaleY:0.6347},0).to({_off:true},1).wait(331));

	// flower
	this.instance_5 = new lib.Symbol5("synched",0);
	this.instance_5.setTransform(493.4,-26.35,1.27,1.27,0,0,0,29.6,31.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({regX:29.7,regY:32.2,scaleY:1.2699,x:563,y:1327.8},42).to({_off:true},1).wait(331));

	// Background2
	this.instance_6 = new lib.Background2();
	this.instance_6.setTransform(418.8,2685.8,4.1626,4.1625,0,0,0,99.7,215.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({_off:false},0).wait(1).to({regX:99.5,regY:215,x:417.95,y:2522.2},0).wait(1).to({y:2359.4},0).wait(1).to({y:2196.6},0).wait(1).to({y:2033.8},0).wait(1).to({y:1871},0).wait(1).to({y:1708.25},0).wait(1).to({y:1545.45},0).wait(1).to({y:1382.65},0).wait(1).to({y:1219.85},0).wait(1).to({y:1057.05},0).wait(1).to({y:894.3},0).wait(1).to({regX:0,regY:0.2,scaleX:4.1628,scaleY:4.168,x:3.3,y:-3.05},0).wait(65).to({regX:99.5,regY:215,scaleY:4.1679,x:417.5,y:896.25},0).wait(1).to({x:417.45,y:733.55},0).wait(1).to({y:570.85},0).wait(1).to({y:408.15},0).wait(1).to({y:245.45},0).wait(1).to({y:82.75},0).wait(1).to({y:-79.95},0).wait(1).to({y:-242.65},0).wait(1).to({y:-405.35},0).wait(1).to({y:-568.05},0).wait(1).to({y:-730.75},0).wait(1).to({y:-893.45},0).to({_off:true},1).wait(296));

	// flower
	this.instance_7 = new lib.Flower3("synched",0);
	this.instance_7.setTransform(-33.9,1620.55,1.016,1.0147,0,0,0,29.3,32.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(152).to({_off:false},0).to({regX:29.7,regY:32.1,scaleX:0.9999,scaleY:0.9999,rotation:720,guide:{path:[-33.8,1620.6,-25.3,1623.3,-16.5,1626,22.7,1638,67,1649.8,175.6,1678.9,214.8,1678.9,235.1,1678.9,274.3,1671.8,289.8,1668.9,348.4,1656.4,395.7,1646.4,420.8,1642.7,457.5,1637.2,475.7,1640.1,502.9,1644.2,597.6,1664.1,688.2,1681.7,725.8,1681.7,747.1,1681.7,768.9,1675.7,785.1,1671.1,805.7,1661.8,809.6,1660.1,814.5,1657.8,824.1,1653.4,837.6,1647.2,841.2,1645.7,844.5,1644.5,856.9,1639.8,866,1638.8], orient:'cw'}},57).to({_off:true},1).wait(238));

	// Background3
	this.instance_8 = new lib.Background3();
	this.instance_8.setTransform(418.55,2683.35,4.1532,4.1681,0,0,0,100,215.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140).to({_off:false},0).wait(1).to({regX:99.7,regY:215,x:417,y:2520.55},0).wait(1).to({x:416.7,y:2358.2},0).wait(1).to({x:416.4,y:2195.8},0).wait(1).to({x:416.1,y:2033.45},0).wait(1).to({x:415.8,y:1871.05},0).wait(1).to({x:415.5,y:1708.7},0).wait(1).to({x:415.2,y:1546.3},0).wait(1).to({x:414.9,y:1383.95},0).wait(1).to({x:414.6,y:1221.55},0).wait(1).to({x:414.3,y:1059.2},0).wait(1).to({x:414.05,y:896.8},0).wait(1).to({regX:0,regY:0,scaleX:4.1534,scaleY:4.1679,x:1.3,y:-0.8},0).wait(57).to({regX:0.1,regY:0.2,x:1.35,y:-0.4},0).wait(1).to({regX:99.7,regY:215,x:415,y:745.65},0).wait(1).to({y:596.45},0).wait(1).to({y:447.2},0).wait(1).to({y:298},0).wait(1).to({y:148.75},0).wait(1).to({y:-0.45},0).wait(1).to({y:-149.65},0).wait(1).to({y:-298.9},0).wait(1).to({y:-448.1},0).wait(1).to({y:-597.35},0).wait(1).to({y:-746.55},0).wait(1).to({y:-895.8},0).to({_off:true},1).wait(226));

	// Layer_12
	this.instance_9 = new lib.Flower4("synched",0);
	this.instance_9.setTransform(649.85,555.75,0.9998,0.9998,95.1498,0,0,49,52.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(310).to({_off:false},0).wait(1).to({regY:53.4,rotation:95.1504,x:648.6,y:392.4},0).wait(1).to({y:229.15},0).wait(1).to({y:65.9},0).wait(1).to({y:-97.3},0).wait(1).to({y:-260.55},0).wait(1).to({y:-423.8},0).wait(1).to({y:-587.05},0).wait(1).to({y:-750.3},0).wait(1).to({y:-913.55},0).wait(1).to({y:-1076.8},0).wait(1).to({y:-1240},0).to({_off:true},1).wait(126));

	// flower
	this.instance_10 = new lib.Flower4("synched",0);
	this.instance_10.setTransform(647.75,-53.3,0.9999,0.9999,0,0,0,49.2,53.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(222).to({_off:false},0).to({regX:49.1,regY:53.5,x:649.9,y:546.8},25).to({regX:49.2,rotation:366.4558,x:649.75,y:546.65},2).to({regX:49.4,rotation:375.1617,x:649.95},2).to({regX:49.5,regY:53.6,rotation:383.1063,x:649.85},2).to({regX:49.4,regY:53.5,rotation:391.5832,x:649.95,y:546.55},2).to({regY:53.4,rotation:406.5855,x:649.9,y:546.65},2).to({regX:49.5,rotation:421.5835,y:546.7},2).to({rotation:436.5845,x:649.85,y:546.65},2).to({regY:53.2,rotation:444.3106,x:650},2).to({regX:49.6,regY:53.3,scaleX:0.9998,scaleY:0.9998,rotation:453.0068,x:649.95,y:546.8},2).to({regX:49.5,regY:53.2,rotation:468.0044,x:650},2).to({regX:49.3,regY:53.6,scaleX:0.9999,scaleY:0.9999,rotation:360,x:649.75,y:546.65},1).to({regX:49.2,regY:53.5,rotation:726.4558},2).to({regX:49.4,rotation:735.1617,x:649.95},2).to({regX:49.5,regY:53.6,rotation:743.1063,x:649.85},2).to({regX:49.4,regY:53.5,rotation:751.5832,x:649.95,y:546.55},2).to({regY:53.4,rotation:766.5855,x:649.9,y:546.65},2).to({regX:49.5,rotation:781.5835,y:546.7},2).to({rotation:796.5845,x:649.85,y:546.65},2).to({regY:53.2,rotation:804.3106,x:650},2).to({regX:49.6,regY:53.3,scaleX:0.9998,scaleY:0.9998,rotation:813.0068,x:649.95,y:546.8},2).to({regX:49.5,regY:53.2,rotation:828.0044,x:650},2).to({regX:49.3,regY:53.6,scaleX:0.9999,scaleY:0.9999,rotation:720,x:649.75,y:546.65},1).to({regX:49.2,regY:53.5,rotation:1086.4558},2).to({regX:49.4,rotation:1095.1617,x:649.95},2).to({regX:49.5,regY:53.6,rotation:1103.1063,x:649.85},2).to({regX:49.4,regY:53.5,rotation:1111.5832,x:649.95,y:546.55},2).to({regY:53.4,rotation:1126.5855,x:649.9,y:546.65},2).to({regX:49.5,rotation:1141.5835,y:546.7},2).to({rotation:1156.5845,x:649.85,y:546.65},2).to({regY:53.2,rotation:1164.3106,x:650},2).to({regX:49.6,regY:53.3,scaleX:0.9998,scaleY:0.9998,rotation:1173.0068,x:649.95,y:546.8},2).to({_off:true},3).wait(138));

	// Background4
	this.instance_11 = new lib.Background4();
	this.instance_11.setTransform(0.35,1785.05,4.1626,4.1647,0,0,0,0.1,0.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(209).to({_off:false},0).wait(1).to({regX:99.5,regY:215.2,x:414.15,y:2531},0).wait(1).to({y:2381.95},0).wait(1).to({y:2232.9},0).wait(1).to({y:2083.85},0).wait(1).to({scaleX:4.1627,scaleY:4.1646,y:1934.8},0).wait(1).to({y:1785.75},0).wait(1).to({y:1636.7},0).wait(1).to({y:1487.65},0).wait(1).to({y:1338.6},0).wait(1).to({y:1189.55},0).wait(1).to({y:1040.5},0).wait(1).to({scaleX:4.1628,y:891.55},0).wait(1).to({regX:105.5,regY:215.9,scaleX:4.1626,scaleY:4.1647,x:439.15,y:895.6},0).wait(88).to({regX:0.1,regY:-0.2,scaleX:4.1628,scaleY:4.1645,x:0.35,y:-2.65},0).wait(1).to({regX:99.5,regY:215.2,scaleY:4.1646,x:414.15,y:731.6},0).wait(1).to({y:568.75},0).wait(1).to({y:405.9},0).wait(1).to({y:243.1},0).wait(1).to({y:80.25},0).wait(1).to({y:-82.6},0).wait(1).to({y:-245.45},0).wait(1).to({y:-408.25},0).wait(1).to({y:-571.1},0).wait(1).to({y:-733.95},0).wait(1).to({y:-896.75},0).to({_off:true},1).wait(126));

	// flower
	this.instance_12 = new lib.Flower5("synched",0);
	this.instance_12.setTransform(849.6,-57.8,0.9999,0.9999,0,0,0,59.6,60.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(322).to({_off:false},0).to({regX:59.5,regY:60.9,scaleX:1.7245,scaleY:1.6816,skewX:6.0629,skewY:6.8745,guide:{path:[849.5,-57.7,835.3,-54.4,814.4,-44.2,790.4,-32.6,769.4,-16.4,753.8,-4.4,739.4,10.1,692.9,57.5,670.1,125.5,641.4,210.3,651.7,322.3,661.6,431.7,641.6,493.6,633.5,518.9,619.1,540.7,609.7,555.1,591,576.4,569.6,600.8,561.6,611.6,545.6,633.2,535.6,657,509.7,717.9,510.9,822.1,512.2,927.1,488.8,993.1,479.4,1019.2,465.1,1042.3,455.4,1058.2,438.7,1078.9,419.1,1103.6,413.8,1111.1,401.1,1129.5,394.5,1147.5,377.7,1192.5,388.9,1266.3,400.2,1342.1,397.1,1381.4,395,1410.1,383.3,1429.7,380,1435.1,373.2,1445.4,367.3,1455.1,363.8,1464.7,354.4,1490.8,355.5,1538.7]}},42).to({regX:59.6,regY:60.8,scaleX:1.7231,scaleY:1.6828,skewX:1.6331,skewY:1.8533,x:355.6,y:1540.2},9).to({regX:59.5,regY:60.9,scaleX:1.7245,scaleY:1.6816,skewX:6.0629,skewY:6.8745,x:355.5,y:1540.35},9).to({regX:59.6,regY:60.8,scaleX:1.7231,scaleY:1.6828,skewX:1.6331,skewY:1.8533,x:355.6,y:1540.2},9).to({regX:59.5,scaleX:1.7245,scaleY:1.6816,skewX:6.0629,skewY:6.8745,x:355.4,y:1540.15},9).to({regX:59.6,scaleX:1.7231,scaleY:1.6828,skewX:1.6331,skewY:1.8533,x:355.6,y:1540.2},9).to({regX:59.5,scaleX:1.7245,scaleY:1.6816,skewX:6.0629,skewY:6.8745,x:355.4,y:1540.15},9).to({regX:59.6,scaleX:1.7231,scaleY:1.6828,skewX:1.6331,skewY:1.8533,x:355.6,y:1540.2},9).to({skewX:1.6331},9).to({regX:59.5,regY:60.7,x:355.4,y:-252.05},11).wait(1));

	// Layer_13
	this.instance_13 = new lib.an_CSS({'id': 'instance_13', 'href':'assets/style.css'});

	this.instance_13.setTransform(-336.15,112.05,0.9999,0.9999,0,0,0,49.7,11.2);

	this.button = new lib.submit();
	this.button.name = "button";
		this.button.on("click", function (a) {
			var address = document.getElementById("addrs").value
			writeUserData(address)
			var data ={address:address}
			//console.log(data)
		}.bind(this));
	this.button.setTransform(644.1,1244.2,0.9999,0.9999,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.button, 0, 1, 1);

	this.addrs = new lib.an_TextInput({'id': 'addrs', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.addrs.name = "addrs";
	this.addrs.setTransform(414.5,1011.25,6.9997,2.7271,0,0,0,50.1,11.1);

	this.instance_14 = new lib.Symbol3();
	this.instance_14.setTransform(413.95,1128.35,0.9999,0.9999,0,0,0,350.2,147.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.addrs},{t:this.button},{t:this.instance_13}]},364).to({state:[{t:this.instance_14}]},72).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(436).to({_off:false},0).wait(1).to({regX:350,regY:147.2,x:413.7,y:965.85},0).wait(1).to({y:803.25},0).wait(1).to({y:640.65},0).wait(1).to({y:478.1},0).wait(1).to({y:315.5},0).wait(1).to({y:152.9},0).wait(1).to({y:-9.65},0).wait(1).to({y:-172.2},0).wait(1).to({y:-334.8},0).wait(1).to({y:-497.4},0).wait(1).to({y:-660},0).wait(1));

	// Background5
	this.instance_15 = new lib.Symbol7();
	this.instance_15.setTransform(418,2686,1,1,0,0,0,414,896);
	this.instance_15._off = true;

	this.instance_16 = new lib._5std();
	this.instance_16.setTransform(3,0);

	this.instance_17 = new lib.Background5();
	this.instance_17.setTransform(414.15,899.9,0.9999,0.9999,0,0,0,414.2,896.2);

	this.instance_18 = new lib.Symbol8();
	this.instance_18.setTransform(414,896,1,1,0,0,0,414,896);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},310).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_17,p:{x:414.15}},{t:this.instance_16,p:{x:3}}]},1).to({state:[{t:this.instance_17,p:{x:415}},{t:this.instance_16,p:{x:1}}]},42).to({state:[{t:this.instance_18}]},72).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(310).to({_off:false},0).wait(1).to({y:2523.2},0).wait(1).to({y:2360.4},0).wait(1).to({y:2197.65},0).wait(1).to({y:2034.85},0).wait(1).to({y:1872.05},0).wait(1).to({y:1709.3},0).wait(1).to({y:1546.5},0).wait(1).to({y:1383.7},0).wait(1).to({y:1220.95},0).wait(1).to({y:1058.15},0).wait(1).to({y:895.4},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(436).to({_off:false},0).wait(1).to({y:733.25},0).wait(1).to({y:570.45},0).wait(1).to({y:407.7},0).wait(1).to({y:244.9},0).wait(1).to({y:82.1},0).wait(1).to({y:-80.65},0).wait(1).to({y:-243.45},0).wait(1).to({y:-406.25},0).wait(1).to({y:-569},0).wait(1).to({y:-731.8},0).wait(1).to({y:-894.6},0).wait(1));

	// Background6
	this.instance_19 = new lib.Symbol6();
	this.instance_19.setTransform(418.5,2692.95,0.9999,0.9999,0,0,0,414.7,897.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(436).to({_off:false},0).wait(1).to({regX:414,regY:896,x:417.75,y:2528.8},0).wait(1).to({y:2365.85},0).wait(1).to({y:2202.9},0).wait(1).to({y:2039.95},0).wait(1).to({y:1877},0).wait(1).to({y:1714.05},0).wait(1).to({y:1551.1},0).wait(1).to({y:1388.15},0).wait(1).to({y:1225.2},0).wait(1).to({y:1062.25},0).wait(1).to({y:899.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(27.6,-898.5,948.3,4486.2);
// library properties:
lib.properties = {
	id: '1A0C79FD6BD24310B47450162C8D12C8',
	width: 828,
	height: 1789,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/image_1std.png", id:"_1std"},
		{src:"images/image_2std.png", id:"_2std"},
		{src:"images/image_3std.png", id:"_3std"},
		{src:"images/image_4std.png", id:"_4std"},
		{src:"images/image_5std.png", id:"_5std"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/FlashAICB.png", id:"FlashAICB"},
		{src:"images/flower.png", id:"flower"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
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
an.compositions['1A0C79FD6BD24310B47450162C8D12C8'] = {
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
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
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
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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


})
(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;