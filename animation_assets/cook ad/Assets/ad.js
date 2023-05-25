(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ad_atlas_1", frames: [[205,68,181,36],[0,68,203,40],[0,0,341,66]]}
];


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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["ad_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["ad_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["ad_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bcpngcopy = function() {
	this.initialize(img.bcpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,375);


(lib.chefpngcopy = function() {
	this.initialize(img.chefpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,375);


(lib.crclpngcopy = function() {
	this.initialize(img.crclpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,375);


(lib.photo1pngcopy = function() {
	this.initialize(img.photo1pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3034,375);// helper functions:

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


(lib.RegisterButton = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(5.45,1.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.5,20);


(lib.Learn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.5,33);


(lib.crcls = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.crclpngcopy();
	this.instance.setTransform(0,0,0.2403,0.2436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.crcls, new cjs.Rectangle(0,0,729.1,91.4), null);


(lib.crcl = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.photo1pngcopy();
	this.instance.setTransform(0,0,0.2403,0.2436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.crcl, new cjs.Rectangle(0,0,729.1,91.4), null);


(lib.chef = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.chefpngcopy();
	this.instance.setTransform(0,0,0.2403,0.2436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chef, new cjs.Rectangle(0,0,729.1,91.4), null);


(lib.bc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bcpngcopy();
	this.instance.setTransform(0,0,0.2403,0.2436);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bc, new cjs.Rectangle(0,0,729.1,91.4), null);


// stage content:
(lib.Untitled4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [91];
	// timeline functions:
	this.frame_91 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.cozymeal.com/magazine/learn-to-cook", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(91).call(this.frame_91).wait(489));

	// Layer_9
	this.instance = new lib.Learn();
	this.instance.setTransform(365.5,-51.05,1,1,0,0,0,85.2,16.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:16.5,y:-49.7},0).wait(1).to({y:-48.25},0).wait(1).to({y:-46.8},0).wait(1).to({y:-45.4},0).wait(1).to({y:-43.95},0).wait(1).to({y:-42.5},0).wait(1).to({y:-41.05},0).wait(1).to({y:-39.65},0).wait(1).to({y:-38.2},0).wait(1).to({y:-36.75},0).wait(1).to({y:-35.35},0).wait(1).to({y:-33.9},0).wait(1).to({y:-32.45},0).wait(1).to({y:-31},0).wait(1).to({y:-29.6},0).wait(1).to({y:-28.15},0).wait(1).to({y:-26.7},0).wait(1).to({y:-25.25},0).wait(1).to({y:-23.85},0).wait(1).to({y:-22.4},0).wait(1).to({y:-20.95},0).wait(1).to({y:-19.55},0).wait(1).to({y:-18.1},0).wait(1).to({y:-16.65},0).wait(1).to({y:-15.2},0).wait(1).to({y:-13.8},0).wait(1).to({y:-12.35},0).wait(1).to({y:-10.9},0).wait(1).to({y:-9.45},0).wait(1).to({y:-8.05},0).wait(1).to({y:-6.6},0).wait(1).to({y:-5.15},0).wait(1).to({y:-3.75},0).wait(1).to({y:-2.3},0).wait(1).to({y:-0.85},0).wait(1).to({y:0.6},0).wait(1).to({y:2},0).wait(1).to({y:3.45},0).wait(1).to({y:4.9},0).wait(1).to({y:6.35},0).wait(1).to({y:7.75},0).wait(1).to({y:9.2},0).wait(1).to({y:10.65},0).wait(1).to({y:12.05},0).wait(1).to({y:13.5},0).wait(1).to({y:14.95},0).wait(1).to({y:16.4},0).wait(1).to({y:17.75},0).wait(1).to({y:19.2},0).wait(1).to({y:20.65},0).wait(1).to({y:22.1},0).wait(1).to({y:23.5},0).wait(1).to({y:24.95},0).wait(1).to({y:26.4},0).wait(1).to({y:27.85},0).wait(1).to({y:29.25},0).wait(1).to({y:30.7},0).wait(1).to({y:32.15},0).wait(1).to({y:33.55},0).wait(1).to({y:35},0).wait(1).to({y:36.45},0).wait(1).to({y:37.9},0).wait(1).to({y:39.3},0).wait(1).to({y:40.75},0).wait(1).to({y:42.2},0).wait(1).to({y:43.65},0).wait(514));

	// Layer_8
	this.button_1 = new lib.RegisterButton();
	this.button_1.name = "button_1";
	this.button_1.setTransform(368.15,192.15,1,1,0,0,0,50.8,10.1);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({regY:10,rotation:2.2785,x:368.1,y:190.3},0).wait(1).to({rotation:4.557,x:368.15,y:188.6},0).wait(1).to({rotation:6.8354,y:186.9},0).wait(1).to({rotation:9.1139,x:368.1,y:185.1},0).wait(1).to({rotation:11.3924,y:183.45},0).wait(1).to({rotation:13.6709,x:368.15,y:181.65},0).wait(1).to({rotation:15.9494,y:179.95},0).wait(1).to({rotation:18.2278,x:368.1,y:178.25},0).wait(1).to({rotation:20.5063,x:368.15,y:176.5},0).wait(1).to({rotation:22.7848,x:368.2,y:174.75},0).wait(1).to({rotation:25.0633,x:368.1,y:173.05},0).wait(1).to({rotation:27.3418,y:171.4},0).wait(1).to({rotation:29.6203,x:368.15,y:169.65},0).wait(1).to({rotation:31.8987,y:167.95},0).wait(1).to({rotation:34.1772,x:368.2,y:166.2},0).wait(1).to({rotation:36.4557,x:368.15,y:164.5},0).wait(1).to({rotation:38.7342,x:368.2,y:162.8},0).wait(1).to({rotation:41.0127,y:161.05},0).wait(1).to({rotation:43.2911,y:159.35},0).wait(1).to({rotation:45.5696,x:368.15,y:157.65},0).wait(1).to({rotation:47.8481,x:368.2,y:155.85},0).wait(1).to({rotation:50.1266,x:368.15,y:154.15},0).wait(1).to({rotation:52.4051,x:368.2,y:152.45},0).wait(1).to({rotation:54.6835,x:368.15,y:150.75},0).wait(1).to({rotation:56.962,y:149},0).wait(1).to({rotation:59.2405,x:368.2,y:147.25},0).wait(1).to({rotation:61.519,x:368.15,y:145.55},0).wait(1).to({rotation:63.7975,x:368.2,y:143.85},0).wait(1).to({rotation:66.0759,x:368.15,y:142.15},0).wait(1).to({rotation:68.3544,x:368.2,y:140.4},0).wait(1).to({rotation:70.6329,x:368.15,y:138.65},0).wait(1).to({rotation:72.9114,x:368.2,y:137},0).wait(1).to({rotation:75.1899,y:135.25},0).wait(1).to({rotation:77.4684,x:368.15,y:133.5},0).wait(1).to({rotation:79.7468,y:131.85},0).wait(1).to({rotation:82.0253,x:368.2,y:130.1},0).wait(1).to({rotation:84.3038,y:128.4},0).wait(1).to({rotation:86.5823,y:126.65},0).wait(1).to({rotation:88.8608,x:368.15,y:124.95},0).wait(1).to({rotation:91.1392,x:368.2,y:123.2},0).wait(1).to({rotation:93.4177,x:368.15,y:121.5},0).wait(1).to({rotation:95.6962,y:119.75},0).wait(1).to({rotation:97.9747,x:368.2,y:118.05},0).wait(1).to({rotation:100.2532,x:368.15,y:116.35},0).wait(1).to({rotation:102.5316,x:368.2,y:114.65},0).wait(1).to({rotation:104.8101,y:112.9},0).wait(1).to({rotation:107.0886,x:368.15,y:111.15},0).wait(1).to({rotation:109.3671,y:109.45},0).wait(1).to({rotation:111.6456,y:107.7},0).wait(1).to({rotation:113.9241,y:106.05},0).wait(1).to({rotation:116.2025,y:104.35},0).wait(1).to({rotation:118.481,x:368.2,y:102.6},0).wait(1).to({rotation:120.7595,x:368.15,y:100.85},0).wait(1).to({rotation:123.038,y:99.15},0).wait(1).to({rotation:125.3165,x:368.2,y:97.4},0).wait(1).to({rotation:127.5949,y:95.7},0).wait(1).to({rotation:129.8734,y:94},0).wait(1).to({rotation:132.1519,x:368.15,y:92.25},0).wait(1).to({rotation:134.4304,y:90.55},0).wait(1).to({rotation:136.7089,y:88.8},0).wait(1).to({rotation:138.9873,y:87.1},0).wait(1).to({rotation:141.2658,y:85.4},0).wait(1).to({rotation:143.5443,y:83.65},0).wait(1).to({rotation:145.8228,y:81.95},0).wait(1).to({rotation:148.1013,x:368.1,y:80.2},0).wait(1).to({rotation:150.3797,x:368.15,y:78.5},0).wait(1).to({rotation:152.6582,y:76.8},0).wait(1).to({rotation:154.9367,y:75.05},0).wait(1).to({rotation:157.2152,y:73.35},0).wait(1).to({rotation:159.4937,y:71.65},0).wait(1).to({rotation:161.7722,x:368.1,y:69.9},0).wait(1).to({rotation:164.0506,x:368.15,y:68.2},0).wait(1).to({rotation:166.3291},0).wait(1).to({rotation:168.6076,x:368.1},0).wait(1).to({rotation:170.8861,x:368.15},0).wait(1).to({rotation:173.1646,x:368.1,y:68.15},0).wait(1).to({rotation:175.443,y:68.2},0).wait(1).to({rotation:177.7215,x:368.15,y:68.15},0).wait(1).to({rotation:180,y:68.2},0).wait(1).to({rotation:173.3333,y:68.15},0).wait(1).to({rotation:166.6667,x:368.1},0).wait(1).to({rotation:160,x:368.15},0).wait(1).to({rotation:153.3333},0).wait(1).to({rotation:146.6667},0).wait(1).to({rotation:140},0).wait(1).to({rotation:133.3333,x:368.2},0).wait(1).to({rotation:126.6667,x:368.15,y:68.2},0).wait(1).to({rotation:120,x:368.2,y:68.15},0).wait(1).to({rotation:113.3333,x:368.15},0).wait(1).to({rotation:106.6667},0).wait(1).to({rotation:100,x:368.2},0).wait(1).to({rotation:93.3333,x:368.15,y:68.1},0).wait(1).to({rotation:86.6667,y:68.15},0).wait(1).to({rotation:80},0).wait(1).to({rotation:73.3333,y:68.1},0).wait(1).to({rotation:66.6667},0).wait(1).to({rotation:60,x:368.2},0).wait(1).to({rotation:53.3333},0).wait(1).to({rotation:46.6667,x:368.15},0).wait(1).to({rotation:40,x:368.1,y:68.05},0).wait(1).to({rotation:33.3333,x:368.15},0).wait(1).to({rotation:26.6667,y:68.1},0).wait(1).to({rotation:20,x:368.2,y:68.05},0).wait(1).to({rotation:13.3333,x:368.15,y:68.1},0).wait(1).to({rotation:6.6667},0).wait(1).to({rotation:0},0).wait(474));

	// chef_png_copy
	this.instance_1 = new lib.chef();
	this.instance_1.setTransform(902.2,44.25,1,1,0,0,0,364.5,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:45.7,x:894.4,y:44.4},0).wait(1).to({x:886.6},0).wait(1).to({x:878.8,y:44.45},0).wait(1).to({x:871},0).wait(1).to({x:863.2},0).wait(1).to({x:855.4,y:44.5},0).wait(1).to({x:847.65},0).wait(1).to({x:839.85,y:44.55},0).wait(1).to({x:832.05},0).wait(1).to({x:824.25},0).wait(1).to({x:816.45,y:44.6},0).wait(1).to({x:808.65},0).wait(1).to({x:800.85,y:44.65},0).wait(1).to({x:793.1},0).wait(1).to({x:785.3},0).wait(1).to({x:777.5,y:44.7},0).wait(1).to({x:769.7},0).wait(1).to({x:761.9,y:44.75},0).wait(1).to({x:754.1},0).wait(1).to({x:746.3},0).wait(1).to({x:738.55,y:44.8},0).wait(1).to({x:730.75},0).wait(1).to({x:722.95},0).wait(1).to({x:715.15,y:44.85},0).wait(1).to({x:707.35},0).wait(1).to({x:699.55,y:44.9},0).wait(1).to({x:691.75},0).wait(1).to({x:684},0).wait(1).to({x:676.2,y:44.95},0).wait(1).to({x:668.4},0).wait(1).to({x:660.6,y:45},0).wait(1).to({x:652.8},0).wait(1).to({x:645},0).wait(1).to({x:637.2,y:45.05},0).wait(1).to({x:629.45},0).wait(1).to({x:621.65,y:45.1},0).wait(1).to({x:613.85},0).wait(1).to({x:606.05},0).wait(1).to({x:598.25,y:45.15},0).wait(1).to({x:590.45},0).wait(1).to({x:582.65,y:45.2},0).wait(1).to({x:574.9},0).wait(1).to({x:567.1},0).wait(1).to({x:559.3,y:45.25},0).wait(1).to({x:551.5},0).wait(1).to({x:543.7},0).wait(1).to({x:535.9,y:45.3},0).wait(1).to({x:528.1},0).wait(1).to({x:520.35,y:45.35},0).wait(1).to({x:512.55},0).wait(1).to({x:504.75},0).wait(1).to({x:496.95,y:45.4},0).wait(1).to({x:489.15},0).wait(1).to({x:481.35,y:45.45},0).wait(1).to({x:473.55},0).wait(1).to({x:465.8},0).wait(1).to({x:458,y:45.5},0).wait(1).to({x:450.2},0).wait(1).to({x:442.4,y:45.55},0).wait(1).to({x:434.6},0).wait(1).to({x:426.8},0).wait(1).to({x:419,y:45.6},0).wait(1).to({x:411.25},0).wait(1).to({x:403.45,y:45.65},0).wait(1).to({x:395.65},0).wait(1).to({x:387.85},0).wait(1).to({x:380.05,y:45.7},0).wait(1).to({x:372.25},0).wait(1).to({x:364.5},0).wait(511));

	// photo_1_png_copy
	this.instance_2 = new lib.crcl();
	this.instance_2.setTransform(-47.3,45.6,1,1,0,0,0,364.4,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:364.5,regY:45.7,x:-41.2,y:45.7},0).wait(1).to({x:-35.25},0).wait(1).to({x:-29.3},0).wait(1).to({x:-23.35},0).wait(1).to({x:-17.4},0).wait(1).to({x:-11.45},0).wait(1).to({x:-5.5},0).wait(1).to({x:0.45},0).wait(1).to({x:6.4},0).wait(1).to({x:12.35},0).wait(1).to({x:18.3},0).wait(1).to({x:24.25},0).wait(1).to({x:30.2},0).wait(1).to({x:36.15},0).wait(1).to({x:42.1},0).wait(1).to({x:48.05},0).wait(1).to({x:54},0).wait(1).to({x:59.95},0).wait(1).to({x:65.9},0).wait(1).to({x:71.85},0).wait(1).to({x:77.8},0).wait(1).to({x:83.75},0).wait(1).to({x:89.7},0).wait(1).to({x:95.65},0).wait(1).to({x:101.6},0).wait(1).to({x:107.55},0).wait(1).to({x:113.5},0).wait(1).to({x:119.45},0).wait(1).to({x:125.4},0).wait(1).to({x:131.35},0).wait(1).to({x:137.3},0).wait(1).to({x:143.25},0).wait(1).to({x:149.2},0).wait(1).to({x:155.15},0).wait(1).to({x:161.15},0).wait(1).to({x:167.1},0).wait(1).to({x:173.05},0).wait(1).to({x:179},0).wait(1).to({x:184.95},0).wait(1).to({x:190.9},0).wait(1).to({x:196.85},0).wait(1).to({x:202.8},0).wait(1).to({x:208.75},0).wait(1).to({x:214.7},0).wait(1).to({x:220.65},0).wait(1).to({x:226.6},0).wait(1).to({x:232.55},0).wait(1).to({x:238.5},0).wait(1).to({x:244.45},0).wait(1).to({x:250.4},0).wait(1).to({x:256.35},0).wait(1).to({x:262.3},0).wait(1).to({x:268.25},0).wait(1).to({x:274.2},0).wait(1).to({x:280.15},0).wait(1).to({x:286.1},0).wait(1).to({x:292.05},0).wait(1).to({x:298},0).wait(1).to({x:303.95},0).wait(1).to({x:309.9},0).wait(1).to({x:315.85},0).wait(1).to({x:321.8},0).wait(1).to({x:327.75},0).wait(1).to({x:333.7},0).wait(1).to({x:339.65},0).wait(1).to({x:345.6},0).wait(1).to({x:351.55},0).wait(1).to({x:357.5},0).wait(1).to({x:363.45},0).wait(511));

	// crcl_png_copy
	this.instance_3 = new lib.crcls();
	this.instance_3.setTransform(365.5,-85.4,1,1,0,0,0,364.5,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:45.7,x:365.45,y:-83.25},0).wait(1).to({y:-81.2},0).wait(1).to({y:-79.15},0).wait(1).to({x:365.4,y:-77.1},0).wait(1).to({y:-75.05},0).wait(1).to({y:-73},0).wait(1).to({x:365.35,y:-70.95},0).wait(1).to({y:-68.9},0).wait(1).to({y:-66.85},0).wait(1).to({x:365.3,y:-64.8},0).wait(1).to({y:-62.75},0).wait(1).to({y:-60.7},0).wait(1).to({x:365.25,y:-58.65},0).wait(1).to({y:-56.6},0).wait(1).to({y:-54.55},0).wait(1).to({y:-52.55},0).wait(1).to({x:365.2,y:-50.5},0).wait(1).to({y:-48.45},0).wait(1).to({y:-46.4},0).wait(1).to({x:365.15,y:-44.35},0).wait(1).to({y:-42.3},0).wait(1).to({y:-40.25},0).wait(1).to({x:365.1,y:-38.2},0).wait(1).to({y:-36.15},0).wait(1).to({y:-34.1},0).wait(1).to({x:365.05,y:-32.05},0).wait(1).to({y:-30},0).wait(1).to({y:-27.95},0).wait(1).to({x:365,y:-25.9},0).wait(1).to({y:-23.85},0).wait(1).to({y:-21.8},0).wait(1).to({y:-19.8},0).wait(1).to({x:364.95,y:-17.75},0).wait(1).to({y:-15.7},0).wait(1).to({y:-13.65},0).wait(1).to({x:364.9,y:-11.6},0).wait(1).to({y:-9.55},0).wait(1).to({y:-7.5},0).wait(1).to({x:364.85,y:-5.45},0).wait(1).to({y:-3.4},0).wait(1).to({y:-1.35},0).wait(1).to({x:364.8,y:0.7},0).wait(1).to({y:2.75},0).wait(1).to({y:4.8},0).wait(1).to({x:364.75,y:6.85},0).wait(1).to({y:8.9},0).wait(1).to({y:10.95},0).wait(1).to({y:12.95},0).wait(1).to({x:364.7,y:15},0).wait(1).to({y:17.05},0).wait(1).to({y:19.1},0).wait(1).to({x:364.65,y:21.15},0).wait(1).to({y:23.2},0).wait(1).to({y:25.25},0).wait(1).to({x:364.6,y:27.3},0).wait(1).to({y:29.35},0).wait(1).to({y:31.4},0).wait(1).to({x:364.55,y:33.45},0).wait(1).to({y:35.5},0).wait(1).to({y:37.55},0).wait(1).to({x:364.5,y:39.6},0).wait(1).to({y:41.65},0).wait(1).to({y:43.7},0).wait(1).to({y:45.7},0).wait(516));

	// bc_png_copy
	this.instance_4 = new lib.bc();
	this.instance_4.setTransform(365.5,44.6,1,1,0,0,0,364.5,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:364.5,y:135.9},0).wait(1).to({regY:45.7,y:134.4},0).wait(1).to({y:132.85},0).wait(1).to({y:131.3},0).wait(1).to({y:129.75},0).wait(1).to({y:128.2},0).wait(1).to({y:126.65},0).wait(1).to({y:125.1},0).wait(1).to({y:123.5},0).wait(1).to({y:121.95},0).wait(1).to({y:120.4},0).wait(1).to({y:118.85},0).wait(1).to({y:117.3},0).wait(1).to({y:115.75},0).wait(1).to({y:114.2},0).wait(1).to({y:112.6},0).wait(1).to({y:111.05},0).wait(1).to({y:109.5},0).wait(1).to({y:107.95},0).wait(1).to({y:106.4},0).wait(1).to({y:104.85},0).wait(1).to({y:103.3},0).wait(1).to({y:101.7},0).wait(1).to({y:100.15},0).wait(1).to({y:98.6},0).wait(1).to({y:97.05},0).wait(1).to({y:95.5},0).wait(1).to({y:93.95},0).wait(1).to({y:92.4},0).wait(1).to({y:90.85},0).wait(1).to({y:89.25},0).wait(1).to({y:87.7},0).wait(1).to({y:86.15},0).wait(1).to({y:84.6},0).wait(1).to({y:83.05},0).wait(1).to({y:81.5},0).wait(1).to({y:79.95},0).wait(1).to({y:78.35},0).wait(1).to({y:76.8},0).wait(1).to({y:75.25},0).wait(1).to({y:73.7},0).wait(1).to({y:72.15},0).wait(1).to({y:70.6},0).wait(1).to({y:69.05},0).wait(1).to({y:67.45},0).wait(1).to({y:65.9},0).wait(1).to({y:64.35},0).wait(1).to({y:62.8},0).wait(1).to({y:61.25},0).wait(1).to({y:59.7},0).wait(1).to({y:58.15},0).wait(1).to({y:56.55},0).wait(1).to({y:55},0).wait(1).to({y:53.45},0).wait(1).to({y:51.9},0).wait(1).to({y:50.35},0).wait(1).to({y:48.8},0).wait(1).to({y:47.25},0).wait(1).to({y:45.7},0).wait(521));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-86,1314.5,289.8);
// library properties:
lib.properties = {
	id: '6392E929F10D334BA067511B7A21CA89',
	width: 728,
	height: 90,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bcpngcopy.png", id:"bcpngcopy"},
		{src:"images/chefpngcopy.png", id:"chefpngcopy"},
		{src:"images/crclpngcopy.png", id:"crclpngcopy"},
		{src:"images/photo1pngcopy.png", id:"photo1pngcopy"},
		{src:"images/ad_atlas_1.png", id:"ad_atlas_1"}
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
an.compositions['6392E929F10D334BA067511B7A21CA89'] = {
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