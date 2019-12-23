"use strict";
var UnkoNenga = UnkoNenga || {};

UnkoNenga.fetchedImageElements = [];

UnkoNenga.fetchImages = function () {
	UnkoNenga.fetchingTextureCount = 2;
	UnkoNenga.fetchedImageElements.push(document.getElementById('bg'));
	UnkoNenga.fetchedImageElements.push(document.getElementById('uiAtlas'));
};
UnkoNenga.isImagesFetched = function () {
	var complete = true;
	for (var i = 0; i < UnkoNenga.fetchedImageElements.length; ++i) {
		if (UnkoNenga.fetchedImageElements[i].complete === false) {
			complete = false;
			break;
		}
	}
	return complete;
};
UnkoNenga.fetchImages(); // もうここで実行

UnkoNenga.uiAtlas = { // ここ以下はAtlasMakerによる自動生成
	"items": [
		{
			"name": "result_flame_bg",
			"width": 630,
			"height": 360,
			"x": 4,
			"y": 4
		},
		{
			"name": "result_text_cyoubiun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 368
		},
		{
			"name": "result_text_cyubiun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 592
		},
		{
			"name": "result_text_cyubsyuuun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 816
		},
		{
			"name": "result_text_daibiun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 1040
		},
		{
			"name": "result_text_daibsyuuun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 1264
		},
		{
			"name": "result_text_shinbiun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 1488
		},
		{
			"name": "result_text_syobiun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 1712
		},
		{
			"name": "result_text_syobsyuuun",
			"width": 604,
			"height": 220,
			"x": 4,
			"y": 1936
		},
		{
			"name": "title",
			"width": 570,
			"height": 146,
			"x": 4,
			"y": 2160
		},
		{
			"name": "text_setsumei",
			"width": 536,
			"height": 224,
			"x": 4,
			"y": 2310
		},
		{
			"name": "result_text01",
			"width": 450,
			"height": 50,
			"x": 544,
			"y": 2310
		},
		{
			"name": "result_text03",
			"width": 418,
			"height": 50,
			"x": 4,
			"y": 2538
		},
		{
			"name": "text_bottom",
			"width": 416,
			"height": 180,
			"x": 426,
			"y": 2538
		},
		{
			"name": "text_middle",
			"width": 416,
			"height": 180,
			"x": 4,
			"y": 2722
		},
		{
			"name": "btm_start",
			"width": 410,
			"height": 84,
			"x": 424,
			"y": 2722
		},
		{
			"name": "btm_tap",
			"width": 256,
			"height": 256,
			"x": 4,
			"y": 2906
		},
		{
			"name": "text_top",
			"width": 256,
			"height": 180,
			"x": 264,
			"y": 2906
		},
		{
			"name": "result",
			"width": 250,
			"height": 58,
			"x": 524,
			"y": 2906
		},
		{
			"name": "btm_retry",
			"width": 244,
			"height": 54,
			"x": 778,
			"y": 2906
		},
		{
			"name": "text_sound",
			"width": 226,
			"height": 67,
			"x": 4,
			"y": 3166
		},
		{
			"name": "result_balance",
			"width": 180,
			"height": 42,
			"x": 234,
			"y": 3166
		},
		{
			"name": "result_size_medium",
			"width": 180,
			"height": 42,
			"x": 418,
			"y": 3166
		},
		{
			"name": "btm_twitter",
			"width": 150,
			"height": 46,
			"x": 602,
			"y": 3166
		},
		{
			"name": "result_size_small",
			"width": 148,
			"height": 42,
			"x": 756,
			"y": 3166
		},
		{
			"name": "result_balance_beautiful",
			"width": 138,
			"height": 42,
			"x": 4,
			"y": 3237
		},
		{
			"name": "result_size_large",
			"width": 138,
			"height": 42,
			"x": 146,
			"y": 3237
		},
		{
			"name": "result_balance_ugly",
			"width": 126,
			"height": 42,
			"x": 288,
			"y": 3237
		},
		{
			"name": "result_size",
			"width": 100,
			"height": 42,
			"x": 418,
			"y": 3237
		},
		{
			"name": "btm_photo",
			"width": 68,
			"height": 56,
			"x": 522,
			"y": 3237
		},
		{
			"name": "num_0",
			"width": 48,
			"height": 48,
			"x": 594,
			"y": 3237
		},
		{
			"name": "num_1",
			"width": 48,
			"height": 48,
			"x": 646,
			"y": 3237
		},
		{
			"name": "num_2",
			"width": 48,
			"height": 48,
			"x": 698,
			"y": 3237
		},
		{
			"name": "num_3",
			"width": 48,
			"height": 48,
			"x": 750,
			"y": 3237
		},
		{
			"name": "num_4",
			"width": 48,
			"height": 48,
			"x": 802,
			"y": 3237
		},
		{
			"name": "num_5",
			"width": 48,
			"height": 48,
			"x": 854,
			"y": 3237
		},
		{
			"name": "num_6",
			"width": 48,
			"height": 48,
			"x": 906,
			"y": 3237
		},
		{
			"name": "num_7",
			"width": 48,
			"height": 48,
			"x": 958,
			"y": 3237
		},
		{
			"name": "num_8",
			"width": 48,
			"height": 48,
			"x": 4,
			"y": 3297
		},
		{
			"name": "num_9",
			"width": 48,
			"height": 48,
			"x": 56,
			"y": 3297
		}
	],
	"width": 1024,
	"height": 4096
};
// アニメデータ
UnkoNenga.uiAnimations = [
	{
		"name": "button_loop",
		"scale": {
			start: [1, 1],
			goal: [1, 1],
			velocity: [0.5, 0.5],
			stiffness: 10,
			damping: 0
		},
		"opacity": {
			start: 0.8,
			goal: 0.8,
			velocity: -0.2,
			stiffness: 10,
			damping: 0
		}
	}
];
UnkoNenga.unkoScaleFixAnimation = {
	"scale": {
		start: 1,
		goal: 1,
		velocity: 20,
		stiffness: 400,
		damping: 15
	},
	"scaleFinal": {
		start: 1,
		goal: 1,
		velocity: 30,
		stiffness: 200,
		damping: 10
	},
	"emission": {
		start: 1,
		goal: 0,
		velocity: -2,
		stiffness: 5,
		damping: 7
	},
	"emissionFinal": {
		start: 1,
		goal: 0,
		velocity: -0.7,
		stiffness: 4,
		damping: 5
	}
};
// 配置データ
UnkoNenga.uiTransforms = [
	{
		"name": "result_flame_bg",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_shinbiun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_cyoubiun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_cyubiun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_cyubsyuuun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_daibiun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_daibsyuuun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_keisoku",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.5],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_syobiun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text_syobsyuuun",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.8],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "title",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.07],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "text_setsumei",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.75],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text01",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.695],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text03",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.91],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "text_bottom",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.1],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "text_middle",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.1],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "btm_start",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.90],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_text02",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.7],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "btm_tap",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.85],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "text_top",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.1],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "btm_retry",
		"pivot": [0, 1],
		"anchor": [0.065, 0.985],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "text_sound",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.97],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "btm_twitter",
		"pivot": [1, 1],
		"anchor": [0.92, 0.98],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result",
		"pivot": [0.5, 0.5],
		"anchor": [0.5, 0.15],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_balance_beautiful",
		"pivot": [1, 0.5],
		"anchor": [1, 0.64],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_balance",
		"pivot": [1, 0.5],
		"anchor": [0.87, 0.61],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_size_medium",
		"pivot": [1, 0.5],
		"anchor": [1, 0.55],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_size_small",
		"pivot": [1, 0.5],
		"anchor": [1, 0.55],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_size_large",
		"pivot": [1, 0.5],
		"anchor": [1, 0.55],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_balance_ugly",
		"pivot": [1, 0.5],
		"anchor": [1, 0.64],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "result_size",
		"pivot": [1, 0.5],
		"anchor": [0.87, 0.52],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
	{
		"name": "btm_photo",
		"pivot": [0.5, 1],
		"anchor": [0.6, 0.985],
		"scale": [1, 1],
		"position": [0, 0],
		"texcoordOffset": [0, 0],
		"opacity": 1
	},
];

UnkoNenga.Unko = function (gpu, shader, vertexFormat, plateInterval, plateThickness, scaleMin, scaleMax, topHeightFactor) {
	this.plateInterval = plateInterval;
	this.plateThickness = plateThickness;
	this.scaleMin = scaleMin;
	this.scaleMax = scaleMax;
	this.topYMax = -1 + (2 * topHeightFactor);
	var hDiv = 64;
	var vDiv = 32;
	this.meshes = [];
	this.meshes[this.Parts.Bottom] = new UnkoNenga.Mesh(shader, vertexFormat, 'unkoMeshBottom');
	this.meshes[this.Parts.Bottom].setCylinder(gpu, hDiv, vDiv, -1, 1, true, true);
	this.meshes[this.Parts.Middle] = new UnkoNenga.Mesh(shader, vertexFormat, 'unkoMeshMiddle');
	this.meshes[this.Parts.Middle].setCylinder(gpu, hDiv, vDiv, -1, 1, true, true);
	this.meshes[this.Parts.Top] = new UnkoNenga.Mesh(shader, vertexFormat, 'unkoMeshTop');
	this.meshes[this.Parts.Top].setCylinder(gpu, hDiv, vDiv, -1, this.topYMax, true, true);

	this.transform = new Kayac.Transform();
	this.transforms = [];
	this.scales = [];
	this.fixFlashes = [];
	for (var i = 0; i < this.Parts.Count; i++) {
		this.transforms[i] = new Kayac.Transform();
		this.scales[i] = 1;
		this.fixFlashes[i] = new Kayac.SpringDamper();
	}

	this.transforms[this.Parts.Bottom].position = Kayac.V3.createXyz(0, -this.plateInterval * 2, 0);
	this.transforms[this.Parts.Top].position = Kayac.V3.createXyz(0, this.plateInterval * 2, 0);

	this.scaleSpeed = 0;
	this.scaleIndex = -1;
	this.fixScaleAnim = new Kayac.SpringDamper();
	this.fixScaleAnim.value = 1;
	this.additionalEmission = 0;
	this.rotator = new UnkoNenga.Rotator(
		Kayac.V3.createXyz(1, 0, 0),
		Kayac.V3.createXyz(0, 1, 0));
	this.rotatorEnabled = true;
	this.angularVelocity = Kayac.V3.createXyz(0, 0, 0);
	this.startDefaultRotation(false);
	this.resetScale();

	this.mColor = [0, 0, 0];
	this.mFresnel0 = 0.04;

	// 虹
	this.mRainbowTime = -1;
};

UnkoNenga.Unko.prototype.Parts = {
	Bottom: 0,
	Middle: 1,
	Top: 2,
	Count: 3,
};

UnkoNenga.Unko.prototype.setRainbowEnabled = function (enabled) {
	this.mRainbowTime = enabled ? 0 : -1;
}

UnkoNenga.Unko.prototype.startResultRotation = function () {
	this.rotatorEnabled = true;
	this.angularVelocity.setXyz(0, 0, 0);
	this.rotator.setData(
		{
			start: 0,
			goal: -Math.PI / 4,
			velocity: 0,
			stiffness: 50,
			damping: 20,
			isAngle: true
		},
		{
			start: 0,
			goal: 0,
			velocity: 0,
			stiffness: 50,
			damping: 20,
			isAngle: true
		},
		true);
};

UnkoNenga.Unko.prototype.startDefaultRotation = function (preserveValue) {
	this.rotatorEnabled = true;
	this.angularVelocity.setXyz(0, 0, 0);
	this.rotator.setData(
		{
			start: 0,
			goal: 0,
			velocity: 0.4,
			stiffness: 0.3,
			damping: 0,
			isAngle: true,
		},
		{
			start: 0,
			goal: 0,
			velocity: 0.9,
			stiffness: 0,
			damping: 0,
			isAngle: true
		},
		preserveValue);
};

UnkoNenga.Unko.prototype.startManualRotation = function () {
	this.rotatorEnabled = false;
};

UnkoNenga.Unko.prototype.rotateManually = function (x, y) {
	var d = Kayac.V3.createXyz(-x, y, 0);
	var z = Kayac.V3.createXyz(0, 0, 1);
	var a = new Kayac.V3();
	a.setCross(z, d);
	a.rotateRev(this.transform.rotation);
	this.angularVelocity.add(a);
};

UnkoNenga.Unko.prototype.setColor = function (color) {
	this.mColor[0] = color[0];
	this.mColor[1] = color[1];
	this.mColor[2] = color[2];
};

UnkoNenga.Unko.prototype.setFresnel0 = function (fresnel0) {
	this.mFresnel0 = fresnel0;
};

UnkoNenga.Unko.prototype.getScaleValue = function (partsIndex) {
	return this.scales[partsIndex];
};

UnkoNenga.Unko.prototype.update = function (deltaTime) {
	if (this.rotatorEnabled === true) {
		this.rotator.update(deltaTime);
		this.transform.rotation.setQ(this.rotator.rotation);
	} else {
		this.angularVelocity.mulS(0.99);
		this.transform.rotation.integrate(this.angularVelocity, deltaTime);
	}

	this.fixScaleAnim.update(deltaTime);
	this.transform.scale.x = this.fixScaleAnim.value;
	this.transform.scale.y = this.fixScaleAnim.value;
	this.transform.scale.z = this.fixScaleAnim.value;

	if (this.scaleIndex >= 0) {
		var s = this.scales[this.scaleIndex];
		s += this.scaleSpeed * deltaTime;
		if (s > this.scaleMax) {
			this.scaleSpeed = -Math.abs(this.scaleSpeed);
		} else if (s < this.scaleMin) {
			this.scaleSpeed = Math.abs(this.scaleSpeed);
		}
		this.scales[this.scaleIndex] = s;
	}

	for (var i = 0; i < this.fixFlashes.length; ++i) {
		this.fixFlashes[i].update(deltaTime);
	}
	if (this.mRainbowTime >= 0) {
		this.mRainbowTime += deltaTime;
	}
};

UnkoNenga.Unko.prototype.draw = function (
	matrixStack,
	gpu,
	cameraMatrix,
	bottomTransparent,
	middleTransparent,
	topTransparent,
	lightVector) {

	var pvwm = new Kayac.M44();
	var m = this.transform.getMatrix();
	matrixStack.pushMul(m);
	gpu.setTexture('uSampler', null);

	var albedo = [0, 0, 0, 0];
	var transparentFlags = [bottomTransparent, middleTransparent, topTransparent];
	var polynominal = [0, 0, 0, 0];
	var emission = [0, 0, 0];
	for (var i = 0; i < this.Parts.Count; ++i) {
		this.setTransparency(gpu, albedo, transparentFlags[i]);
		polynominal[0] = this.scales[i];
		polynominal[1] = -0.1;
		polynominal[2] = -this.scaleMin * 0.75;
		polynominal[4] = -this.scales[i] * 0.2;
		if (i === 2) {
			/*

			y = d + cx + bx^2 + ax^3
			y' = c + 2bx + 3ax^2

			4次の項は固定とする
			d + tMax*c + tMax^2*b + tMax^3*a = 0 - tMax^4*p4 // x=tMaxで値が0
			c + 2*tMax*b + 3*tMax^2*a = v - 4*tMax^3*p4 // x=tMaxでの傾き
			d + t*c	+ t^2*b + t^3*a = s - t^4*p4 // x=tでの値
			c + 2*t*b + 3*t^2*a = 0 - 4*t^3*p4 // x=tでの傾き

			この連立方程式を解く
			*/
			var t = -0.333;
			var p4 = -0.05;
			var vMax = -0.0;

			var tMax = this.topYMax;
			var tMax2 = tMax * tMax;
			var tMax3 = tMax2 * tMax;
			var tMax4 = tMax3 * tMax;
			var t2 = t * t;
			var t3 = t2 * t;
			var t4 = t3 * t;
			var m = [];
			m[(0 * 4) + 0] = 1;
			m[(0 * 4) + 1] = tMax;
			m[(0 * 4) + 2] = tMax2;
			m[(0 * 4) + 3] = tMax3;

			m[(1 * 4) + 0] = 0;
			m[(1 * 4) + 1] = 1;
			m[(1 * 4) + 2] = 2 * tMax;
			m[(1 * 4) + 3] = 3 * tMax2;

			m[(2 * 4) + 0] = 1;
			m[(2 * 4) + 1] = t;
			m[(2 * 4) + 2] = t2;
			m[(2 * 4) + 3] = t3;

			m[(3 * 4) + 0] = 0;
			m[(3 * 4) + 1] = 1;
			m[(3 * 4) + 2] = 2 * t;
			m[(3 * 4) + 3] = 3 * t2;

			polynominal[0] = 0 - (tMax4 * p4);
			polynominal[1] = vMax - (4 * tMax3 * p4)
			polynominal[2] = this.scales[2] - (t4 * p4);
			polynominal[3] = 0 - (4 * t3 * p4);

			Kayac.solveLinearSystem(m, polynominal, 4);
			polynominal[4] = p4;
		}
		var emissionStrength = this.fixFlashes[i].value + this.additionalEmission;
		emission[0] = emissionStrength * albedo[0];
		emission[1] = emissionStrength * albedo[1];
		emission[2] = emissionStrength * albedo[2];
		this.drawMesh(
			gpu,
			matrixStack,
			pvwm,
			this.transforms[i],
			this.meshes[i],
			cameraMatrix,
			albedo,
			emission,
			polynominal,
			lightVector);
	}
	matrixStack.pop();
};

UnkoNenga.Unko.prototype.flash = function (index) {
	var data = UnkoNenga.unkoScaleFixAnimation.emission;
	this.fixFlashes[index].setData(data);
};

UnkoNenga.Unko.prototype.flashFinal = function () {
	var data = UnkoNenga.unkoScaleFixAnimation.emissionFinal;
	for (var i = 0; i < this.fixFlashes.length; ++i) {
		this.fixFlashes[i].setData(data);
	}
};

UnkoNenga.Unko.prototype.resetScale = function () {
	this.scales[this.Parts.Bottom] = 2;
	this.scales[this.Parts.Middle] = 1.5;
	this.scales[this.Parts.Top] = 1;
	this.transforms[this.Parts.Bottom].scale.setXyz(1, this.plateThickness, 1);
	this.transforms[this.Parts.Middle].scale.setXyz(1, this.plateThickness, 1);
	this.transforms[this.Parts.Top].scale.setXyz(1, this.plateThickness, 1);
};

UnkoNenga.Unko.prototype.setTransparency = function (gpu, albedoOut, isTransparent) {
	if (isTransparent) {
		gpu.setBlendEnabled(true);
		gpu.setDepthTest(true, false);
		albedoOut[0] = 0.5;
		albedoOut[1] = 0.5;
		albedoOut[2] = 0.5;
		albedoOut[3] = 0.1;
	} else {
		gpu.setBlendEnabled(false);
		gpu.setDepthTest(true, true);
		albedoOut[0] = this.mColor[0];
		albedoOut[1] = this.mColor[1];
		albedoOut[2] = this.mColor[2];
		albedoOut[3] = 1;
	}
};

UnkoNenga.Unko.prototype.drawMesh = function (
	gpu,
	matrixStack,
	pvwm,
	transform,
	mesh,
	pvm,
	albedo,
	emission,
	polynominal,
	lightVector) {

	var m = transform.getMatrix();
	matrixStack.pushMul(m);
	var wm = matrixStack.top();
	pvwm.setMul44x34(pvm, wm);
	var nm = new Kayac.M33(); // 法線変換行列
	nm.setInvTranspose34(wm);
	mesh.draw(
		gpu,
		pvwm,
		wm,
		nm,
		albedo,
		emission,
		polynominal,
		lightVector,
		this.mFresnel0,
		this.mRainbowTime);
	matrixStack.pop();
};

UnkoNenga.Unko.prototype.startScaling = function (speed, index) {
	this.scaleIndex = index;
	this.scaleSpeed = speed;
};

// Mesh
UnkoNenga.Mesh = function (shader, vertexFormat, name) {
	this.name = name || 'unnamed mesh';
	this.mVertexBuffer = null;
	this.mIndexBuffer = null;
	this.mShader = shader;
	this.mVertexFormat = vertexFormat;
	this.mVertexCount = 0;
};

UnkoNenga.Mesh.prototype.setCylinder = function (gpu, hDiv, vDiv, yMin, yMax, topFace, bottomFace) {
	if ((vDiv < 2) || (hDiv < 3)) {
		throw 'setSphere(). invalid args. hDiv >= 3, vDiv >= 2';
	}
	var floatStride = this.mVertexFormat.stride / 4;
	// 一旦重複しない頂点を生成して座標のみ入れていく
	var vertexCount = (vDiv + 1) * hDiv;
	var vertices = new Float32Array(vertexCount * floatStride);
	var index = 0;
	var p = [0, 0];
	var yRange = yMax - yMin;
	for (var vIndex = 0; vIndex <= vDiv; ++vIndex) {
		p[1] = yMax - (yRange * vIndex / vDiv);
		for (var hIndex = 0; hIndex < hDiv; ++hIndex) {
			var theta = Math.PI * 2 * hIndex / hDiv;
			p[0] = theta;
			this.setVertex(vertices, index, p);
			++index;
		}
	}
	console.assert(index === vertexCount, index + " !== " + vertexCount);

	var indexCount = ((hDiv - 2) * 3 * 2) + (vDiv * hDiv * 6); // 蓋2枚と側面
	var indices = new Uint16Array(indexCount);
	var index = 0;
	// 上面
	if (topFace) {
		for (var i = 0; i < (hDiv - 2); ++i) {
			indices[index + 0] = 0;
			indices[index + 1] = i + 2;
			indices[index + 2] = i + 1;
			index += 3;
		}
	}
	// 側面
	for (var vIndex = 1; vIndex <= vDiv; ++vIndex) {
		for (var hIndex = 0; hIndex < hDiv; ++hIndex) {
			var hNext = ((hIndex + 1) >= hDiv) ? 0 : (hIndex + 1);
			indices[index + 0] = ((vIndex - 1) * hDiv) + hIndex;
			indices[index + 1] = ((vIndex - 1) * hDiv) + hNext;
			indices[index + 2] = (vIndex * hDiv) + hIndex;
			indices[index + 3] = (vIndex * hDiv) + hNext;
			indices[index + 4] = indices[index + 2];
			indices[index + 5] = indices[index + 1];
			index += 6;
		}
	}
	// 下面
	if (bottomFace) {
		var base = vertexCount - hDiv;
		for (var i = 0; i < (hDiv - 2); ++i) {
			indices[index + 0] = base;
			indices[index + 1] = base + i + 1; // 下面はひっくりかえす
			indices[index + 2] = base + i + 2;
			index += 3;
		}
	}
	indexCount = index;

	this.mVertexBuffer = new Kayac.VertexBuffer({
		gpu: gpu,
		name: this.name + '_vb',
		data: vertices
	});
	this.mIndexBuffer = new Kayac.IndexBuffer({
		gpu: gpu,
		name: this.name + '_ib',
		data: indices
	});
	this.mVertexCount = indexCount;
};

UnkoNenga.Mesh.generateVertexFormat = function () {
	var ret = {
		stride: 8,
		elements: [
			{ offset: 0, vectorDimension: 2, name: 'aCoord' },
		]
	};
	return ret;
};

UnkoNenga.Mesh.prototype.setVertex = function (
	data,
	index,
	coord) {

	var offset = index * this.mVertexFormat.stride / 4;
	Kayac.copyArray(data, offset + 0, coord, 0, 2);
};

UnkoNenga.Mesh.prototype.draw = function (
	gpu,
	pvwMatrix,
	wMatrix,
	wMatrixInvTransposed,
	albedo,
	emission,
	polynominal,
	lightVector,
	fresnel0,
	rainbowTime) {

	gpu.setVertexBuffer(this.mVertexBuffer);
	gpu.setIndexBuffer(this.mIndexBuffer);
	gpu.setShader(this.mShader);
	gpu.setVertexFormat(this.mVertexFormat);

	var m = pvwMatrix; // 別名
	gpu.setConstant('uTransform0', [m.m00, m.m01, m.m02, m.m03]);
	gpu.setConstant('uTransform1', [m.m10, m.m11, m.m12, m.m13]);
	gpu.setConstant('uTransform2', [m.m20, m.m21, m.m22, m.m23]);
	gpu.setConstant('uTransform3', [m.m30, m.m31, m.m32, m.m33]);

	m = wMatrix; // 別名
	gpu.setConstant('uToWorld0', [m.m00, m.m01, m.m02, m.m03]);
	gpu.setConstant('uToWorld1', [m.m10, m.m11, m.m12, m.m13]);
	gpu.setConstant('uToWorld2', [m.m20, m.m21, m.m22, m.m23]);

	m = wMatrixInvTransposed; // 別名
	gpu.setConstant('uToWorldNormal0', [m.m00, m.m01, m.m02]);
	gpu.setConstant('uToWorldNormal1', [m.m10, m.m11, m.m12]);
	gpu.setConstant('uToWorldNormal2', [m.m20, m.m21, m.m22]);
	gpu.setConstant('uAlbedo', albedo);
	gpu.setConstant('uEmission', emission);
	gpu.setConstant('uFresnel0', fresnel0);
	gpu.setConstant('uPolynominal', polynominal);
	var poly4 = (polynominal.length >= 5) ? polynominal[4] : 0;
	gpu.setConstant('uPolynominal4', poly4);
	gpu.setConstant('uLightVector', [lightVector.x, lightVector.y, lightVector.z]);
	var rainbow = [];
	rainbow[1] = rainbowTime;
	if (rainbowTime >= 0) {
		rainbow[0] = 1;
	} else {
		rainbow[0] = 0;
	}
	gpu.setConstant('uRainbow', rainbow);

	gpu.draw(this.mVertexCount, Kayac.Gpu.Primitive.Triangle, 0);
};

// Rotator
UnkoNenga.Rotator = function (axis0, axis1) {
	this.m0 = new Kayac.SpringDamper();
	this.mAxis0 = Kayac.V3.createV(axis0);
	this.m1 = new Kayac.SpringDamper();
	this.mAxis1 = Kayac.V3.createV(axis1);
	this.rotation = Kayac.Q.createIdentity();
	this.vector = Kayac.V3.createXyz(0, 0, 0);
};

UnkoNenga.Rotator.baseVector = new Kayac.V3.createXyz(0, 0, -1);

UnkoNenga.Rotator.prototype.setData = function (data0, data1, preserveValue) {
	if (data0) {
		this.m0.setData(data0, preserveValue);
	}
	if (data1) {
		this.m1.setData(data1, preserveValue);
	}
};

UnkoNenga.Rotator.prototype.update = function (deltaTime) {
	this.m0.update(deltaTime);
	this.m1.update(deltaTime);
	var q0 = Kayac.Q.createRotation(this.mAxis0, this.m0.value);
	var q1 = Kayac.Q.createRotation(this.mAxis1, this.m1.value);
	this.rotation.setMul(q1, q0);
	this.vector.setRotated(this.rotation, UnkoNenga.Rotator.baseVector);
};

(function () {
	var uiAtlas = UnkoNenga.uiAtlas;
	// データ検索テーブル生成
	var uiTransforms = {};
	for (var i = 0; i < UnkoNenga.uiTransforms.length; i++) {
		uiTransforms[UnkoNenga.uiTransforms[i].name] = UnkoNenga.uiTransforms[i];
	}
	var uiAnimations = {};
	for (var i = 0; i < UnkoNenga.uiAnimations.length; i++) {
		uiAnimations[UnkoNenga.uiAnimations[i].name] = UnkoNenga.uiAnimations[i];
	}
	var requestAspect = 9 / 16;
	var logicalWidth = 720;
	var logicalHeight = logicalWidth / requestAspect;
	var plateThickness = 0.6;
	var plateInterval = 0.6;
	var scaleMin = 0.5;
	var scaleMax = 3;
	var bottomScaleSpeed = 2;
	var middleScaleSpeed = 4;
	var topScaleSpeed = 6;
	var maxDeltaTime = 1 / 20;
	var topHeightFactor = 1.5; // 一番上のを他の段の何倍の高さにするか(ツノを含むので)
	var defaultUnkoColor = [1, 0.6, 1];
	var specialUnkoColor = [1, 1, 0.4];

	//フレームをまたいで保持するデータ
	var state = {
		gpu: null,
		camera2d: null,
		camera3d: null,
		vertexFormat3d: null,
		vertexFormat2d: null,
		shader3d: null,
		shader2d: null,
		backgroundSpriteInstance: null,
		spriteRenderer: null,
		spriteInstances: {},
		down: false,
		justDown: false,
		cursorPos: Kayac.V2.createXy(0, 0),
		prevCursorPos: Kayac.V2.createXy(0, 0),
		textures: {},
		time: null,
		matrixStack: null,
		deltaTime: 0,
		scene: null,
		bgm: null,
		se: {},
		audioExt: null,
		unko: null,
		lightRotator: null,
		frameTime: 0,
	};
	var setResolution = function (canvas, requestAspect) {
		var occupyRatio = 0.90;
		// レイアウト座標系なので、実解像度とは全く関係ないことがある(幅980とか)
		var windowW = window.innerWidth;
		var windowH = window.innerHeight;
		console.log('window: ' + windowW + 'x' + windowH);
		var windowAspect = windowW / windowH;
		if (requestAspect > windowAspect) { // 横合わせ
			windowH = Math.floor(windowW / requestAspect);
		} else { // 縦合わせ
			windowW = Math.floor(windowH * requestAspect);
		}
		// その9割でcanvasをレイアウト
		var elementW = windowW * occupyRatio;
		var elementH = windowH * occupyRatio;

		// 実canvas解像度の初期値は、レイアウト座標サイズにピクセル係数を乗じたもの
		var pixelRatio = window.devicePixelRatio || 1;
		var pxW = elementW * pixelRatio;
		var pxH = elementH * pixelRatio;

		// 最大ピクセル数は画面解像度と論理解像度で制約
		var maxPxW = Math.min(logicalWidth, screen.width * pixelRatio * occupyRatio);
		var maxPxH = Math.min(logicalHeight, screen.height * pixelRatio * occupyRatio);

		// capをかける
		if (pxW > maxPxW) {
			pxH *= maxPxW / pxW;
			pxW = maxPxW;
		}
		if (pxH > maxPxH) {
			pxW *= maxPxH / pxH;
			pxH = maxPxH;
		}
		pxW = Math.ceil(pxW);
		pxH = Math.ceil(pxH);
		elementW = Math.ceil(elementW);
		elementH = Math.ceil(elementH);
		// canvas解像度確定
		canvas.width = pxW;
		canvas.height = pxH;
		canvas.style = 'width: ' + elementW + 'px; height:' + elementH + 'px;';

		console.log('logical: ' + logicalWidth + 'x' + logicalHeight);
		console.log('element: ' + elementW + 'x' + elementH);
		console.log('canvas: ' + pxW + 'x' + pxH);
		/*
						alert(
							pxW + 'x' + pxH + '\n' +
							screen.width + 'x' + screen.height + '\n' +
							window.innerWidth + 'x' + window.innerHeight + '\n' +
							window.devicePixelRatio + '\n');
		*/
	};
	var loadingScene = {
		name: 'loading',
		update: function () {
			if (UnkoNenga.isImagesFetched() === true) {
				startAfterLoad();
			}
		},
		draw: function () {
			state.gpu.clear(1, 1, 1, 1);
			// TODO: 社ロゴとか出すのかな
		}
	};
	var titleScene = {
		name: 'title',
		initialize: function () {
			state.unko.resetScale();
			var button = state.spriteInstances['btm_start'];
			button.setAnimation(uiAnimations['button_loop']);
			state.unko.startDefaultRotation(false);
			state.unko.setRainbowEnabled(false);
		},
		onDown: function () {
			if (state.se.start) {
				state.se.start.play();
			} else {
				state.se.start = playAudio('se01_start_tap');
			}
		},
		update: function () {
			if (state.justDown === true) {
				changeScene(gameScene);
			}
		},
		draw: function () {
			state.gpu.clear(1, 1, 1, 1); // まずクリア。バグってるかわかるように派手ピンクで塗る
			var camera2dMatrix = state.camera2d.getMatrix();
			// 背景
			drawBackground(camera2dMatrix);
			// ウンコ
			var camera3dMatrix = state.camera3d.getMatrix();
			state.unko.draw(state.matrixStack, state.gpu, camera3dMatrix, true, true, true, state.lightRotator.vector);

			state.gpu.setBlendEnabled(true); // アルファブレンド
			state.gpu.setDepthTest(false, false); // Zテストしないし書き込まない
			state.spriteRenderer.clear();

			addSprite('btm_start');
			addSprite('title');
			addSprite('text_setsumei');
			addSprite('text_sound');
			state.spriteRenderer.updateAnimation(state.deltaTime);
			state.spriteRenderer.draw(state.gpu, camera2dMatrix);
		}
	};
	var addSprite = function (name) {
		var instance = state.spriteInstances[name];
		if (instance) {
			state.spriteRenderer.add(instance);
		} else {
			console.assert(false, 'sprite ' + name + ' not found.');
		}
	};
	var gameScene = {
		name: 'game',
		progress: 0,
		initialize: function () {
			this.progress = 0;
			state.unko.startScaling(bottomScaleSpeed, state.unko.Parts.Bottom);
			var button = state.spriteInstances['btm_tap'];
			button.setAnimation(uiAnimations['button_loop']);
		},
		onDown: function () {
			if (this.progress === 0) {
				state.se.stopBottom.play();
			} else if (this.progress === 1) {
				state.se.stopMiddle.play();
			} else if (this.progress === 2) {
				state.se.stopTop.play();
			}
		},
		update: function () {
			if (this.progress === 0) {
				if (state.justDown === true) {
					this.progress += 1;
					state.unko.fixScaleAnim.setData(UnkoNenga.unkoScaleFixAnimation.scale);
					state.unko.flash(state.unko.Parts.Bottom);
					state.unko.startScaling(middleScaleSpeed, state.unko.Parts.Middle);
				}
			} else if (this.progress === 1) {
				if (state.justDown === true) {
					this.progress += 1;
					state.unko.fixScaleAnim.setData(UnkoNenga.unkoScaleFixAnimation.scale);
					state.unko.flash(state.unko.Parts.Middle);
					state.unko.startScaling(topScaleSpeed, state.unko.Parts.Top);
				}
			} else if (this.progress === 2) {
				if (state.justDown === true) {
					changeScene(resultScene);
					state.unko.fixScaleAnim.setData(UnkoNenga.unkoScaleFixAnimation.scaleFinal);
					state.unko.flashFinal();
					state.unko.startScaling(0, 0);
					//							state.bgm.volume = 0.5;
				}
			}
		},
		draw: function () {
			state.gpu.clear(1, 1, 1, 1); // まずクリア。バグってるかわかるように派手ピンクで塗る
			var camera2dMatrix = state.camera2d.getMatrix();
			// 背景
			drawBackground(camera2dMatrix);
			// ウンコ
			var camera3dMatrix = state.camera3d.getMatrix();
			state.unko.draw(
				state.matrixStack,
				state.gpu,
				camera3dMatrix,
				this.progress < 0,
				this.progress < 1,
				this.progress < 2,
				state.lightRotator.vector);

			state.gpu.setBlendEnabled(true); // アルファブレンド
			state.gpu.setDepthTest(false, false); // Zテストしないし書き込まない
			state.spriteRenderer.clear();

			addSprite('btm_tap');
			if (this.progress === 0) {
				addSprite('text_bottom');
			} else if (this.progress === 1) {
				addSprite('text_middle');
			} else if (this.progress === 2) {
				addSprite('text_top');
			}
			state.spriteRenderer.updateAnimation(state.deltaTime);
			state.spriteRenderer.draw(state.gpu, camera2dMatrix);
		}
	};
	var showTweetWindow = function (size, balance, resultType) {
		var text0 = '';
		var text1 = '';
		if (resultType === 7) { // シン美
			text0 = '誰も見たことがない神秘的な運です';
		} else if (resultType === 6) { // 超美
			text0 = '非の打ち所のない完璧な運です。';
		} else if (resultType === 5) { // 大美
			text0 = '大きくて美しい運です。';
		} else if (resultType === 3) { // 中美
			text0 = 'イイ感じの運です。';
		} else if (resultType === 1) { // 小美
			text0 = 'とても個性的な運です。';
		} else if (resultType === 0) { // 小醜
			text0 = 'とても個性的な運です。';
		} else if ((size < 30) || (balance < 30)) {
			text0 = 'とても個性的な運です。';
		} else {
			text0 = '一般的な運です。';
		}

		if (resultType === 0) { // 小醜
			text1 = '小醜運';
		} else if (resultType === 1) { // 小美
			text1 = '小美運';
		} else if (resultType === 2) { // 中醜
			text1 = '中醜運';
		} else if (resultType === 3) { // 中美
			text1 = '中美運';
		} else if (resultType === 4) { // 大醜
			text1 = '大醜運';
		} else if (resultType === 5) { // 大美
			text1 = '大美運';
		} else if (resultType === 6) { // 超美
			text1 = '超美運';
		} else if (resultType === 7) { // シン美
			text1 = 'ｼﾝ·美運';
		}
		var message = '【KAI運TAP】\n';
		message += '今年の運は\n';
		message += '＿人人人人人人＿\n';
		message += '＞ 　' + text1 + '！　＜\n';
		message += '￣Y^Y^Y^Y^Y^Y￣\n'
		message += 'サイズ：' + size + '点\n';
		message += 'バランス：' + balance + '点\n';
		message += text0 + '\n\n';
		message += '今年も世界に大きな運が訪れますように。\n';

		var tweetUrl = 'https://twitter.com/intent/tweet?text=';
		tweetUrl += encodeURIComponent(message);
		tweetUrl += '&hashtags=';
		tweetUrl += encodeURIComponent('おみくじ,あけおめ,開運,面白法人カヤック');
		tweetUrl += '&url=';
		tweetUrl += encodeURIComponent('https://www.kayac.com/nenga/2020/kaiun/');
		var anchor = document.createElement('a');
		anchor.href = tweetUrl;
		anchor.click();
	};
	var resultScene = {
		name: 'result',
		sizeSprite: null,
		balanceSprite: null,
		resultSprite: null,
		sizeNumberRenderer: null,
		balanceNumberRenderer: null,
		manualRotationEnabled: false,
		time: 0,
		noInputTime: 0,
		sizeScore: 0,
		balanceScore: 0,
		resultType: 0,
		initialize: function () {
			// 採点。絶対仕様変わるよね
			var bottomSize = state.unko.getScaleValue(state.unko.Parts.Bottom);
			var middleSize = state.unko.getScaleValue(state.unko.Parts.Middle);
			var topSize = state.unko.getScaleValue(state.unko.Parts.Top);
			var sizeSum = bottomSize + middleSize + topSize;

			var revPenalty = 0.5;
			var size = Math.floor(100 * sizeSum / 6);
			var tm = topSize / middleSize;
			tm *= (3 / 2);
			tm = Math.abs(tm);
			if (tm > 1) {
				tm = 1 / tm;
			}
			if (topSize > middleSize) {
				tm *= revPenalty;
			}

			var mb = middleSize / bottomSize;
			var mbPenalty = (mb > 1) ? revPenalty : 1;
			mb *= (4 / 3);
			mb = Math.abs(mb);
			if (mb > 1) {
				mb = 1 / mb;
			}
			if (middleSize > bottomSize) {
				mb *= revPenalty;
			}
			var balance = Math.floor(100 * Math.min(tm, mb));
			balance = Math.max(0, balance);
			if (balance < 60) {
				this.balanceSprite = state.spriteInstances['result_balance_ugly'];
			} else {
				this.balanceSprite = state.spriteInstances['result_balance_beautiful'];
			}

			if (size < 50) {
				this.sizeSprite = state.spriteInstances['result_size_small'];
			} else if (size < 100) {
				this.sizeSprite = state.spriteInstances['result_size_medium'];
			} else {
				this.sizeSprite = state.spriteInstances['result_size_large'];
			}

			var resultNames = [
				'result_text_syobsyuuun',
				'result_text_syobiun',
				'result_text_cyubsyuuun',
				'result_text_cyubiun',
				'result_text_daibsyuuun',
				'result_text_daibiun',
				'result_text_cyoubiun',
				'result_text_shinbiun'
			];

			console.log('score size=' + size + ' balance=' + balance + ' mb=' + mb + ' tm=' + tm);
			this.resultType = 0;
			if (size < 50) {
				if (balance < 60) {
					this.resultType = 0;
				} else {
					this.resultType = 1;
				}
			} else if (size < 100) {
				if (balance < 60) {
					this.resultType = 2;
				} else {
					this.resultType = 3;
				}
			} else {
				if (balance < 60) {
					this.resultType = 4;
				} else if (balance < 90) {
					this.resultType = 5;
				} else {
					if ((size >= 110) && (balance >= 95)) {
						this.resultType = 7;
						state.unko.setRainbowEnabled(true);
					} else {
						this.resultType = 6;
						state.unko.setColor(specialUnkoColor);
					}
				}
			}
			this.resultSprite = state.spriteInstances[resultNames[this.resultType]];
			this.sizeNumberRenderer = new Kayac.NumberRenderer(state.digitSprites, 3);
			this.sizeNumberRenderer.value = size;
			this.sizeNumberRenderer.charWidth = 28;
			this.sizeNumberRenderer.position = [610, 640];
			this.balanceNumberRenderer = new Kayac.NumberRenderer(state.digitSprites, 3);
			this.balanceNumberRenderer.value = balance;
			this.balanceNumberRenderer.charWidth = 28;
			this.balanceNumberRenderer.position = [610, 755];

			state.unko.startResultRotation();
			this.time = 0;
			this.manualRotationEnabled = false;
			this.noInputTime = 0;

			this.sizeScore = size;
			this.balanceScore = balance;
		},
		terminate: function () {
			if (state.bgm !== null) {
				//						state.bgm.volume = 1;
			}
		},
		update: function () {
			var oldTime = this.time;
			this.time += state.deltaTime;
			this.noInputTime += state.deltaTime;
			if (this.manualRotationEnabled === false) {
				if ((this.time >= 3) && (oldTime < 3)) {
					this.manualRotationEnabled = true;
					state.unko.startManualRotation();
				}
				if ((this.time >= 1) && (state.down === true)) {
					this.manualRotationEnabled = true;
					state.unko.startManualRotation();
				}
			} else {
				if (state.down === true) {
					this.noInputTime = 0;
					// カーソル更新
					var d = Kayac.V2.createXy(0, 0);
					d.setSub(state.cursorPos, state.prevCursorPos);
					state.unko.angularVelocity.mulS(0.8); // ブレーキ
					var strength = 0.04;
					d.mulS(strength);
					state.unko.rotateManually(d.x, d.y);
				} else if (this.noInputTime >= 2) {
					state.unko.rotateManually(0.004, 0.0004); // わずかに回しておく
				}
			}
			if (state.justDown === true) {
				if (isHitUi('btm_retry')) {
					changeScene(titleScene);
					state.unko.setColor(defaultUnkoColor);
				} else if (isHitUi('btm_twitter')) {
					showTweetWindow(this.sizeScore, this.balanceScore, this.resultType);
				} else if (isHitUi('btm_photo')) {
					onClickScreenShot();
				}
			}
		},
		draw: function () {
			state.gpu.clear(1, 1, 1, 1); // まずクリア。バグってるかわかるように派手ピンクで塗る
			var camera2dMatrix = state.camera2d.getMatrix();
			// 背景
			drawBackground(camera2dMatrix);
			// ウンコ
			var camera3dMatrix = state.camera3d.getMatrix();
			state.unko.draw(
				state.matrixStack,
				state.gpu,
				camera3dMatrix, false,
				false,
				false,
				state.lightRotator.vector);

			state.gpu.setBlendEnabled(true); // アルファブレンド
			state.gpu.setDepthTest(false, false); // Zテストしないし書き込まない
			state.spriteRenderer.clear();

			addSprite('title');
			addSprite('result_flame_bg');
			addSprite('result_text01');
			addSprite('result_text03');
			addSprite('result_size');
			addSprite('result_balance');
			addSprite('btm_retry');
			addSprite('btm_twitter');
			addSprite('result');
			addSprite('btm_photo');
			state.spriteRenderer.add(this.sizeSprite);
			state.spriteRenderer.add(this.balanceSprite);
			state.spriteRenderer.add(this.resultSprite);

			this.sizeNumberRenderer.draw(state.spriteRenderer);
			this.balanceNumberRenderer.draw(state.spriteRenderer);
			state.spriteRenderer.draw(state.gpu, camera2dMatrix);
		}
	};
	var isHitUi = function (name) {
		var instance = state.spriteInstances[name];
		if (!instance) {
			return false;
		}
		return instance.isHit(state.cursorPos, logicalWidth, logicalHeight, 16);
	};

	var toLogicalScreenPosition = function (logicalPosOut, htmlPos) {
		var canvasRect = canvas.getBoundingClientRect();
		var canvasX = htmlPos.x - canvasRect.left;
		var canvasY = htmlPos.y - canvasRect.top;
		logicalPosOut.x = canvasX * logicalWidth / canvas.clientWidth;
		logicalPosOut.y = canvasY * logicalHeight / canvas.clientHeight;
	};

	var initializeGpu = function (canvas) {
		state.gpu = new Kayac.Gpu({ canvas: canvas });
		state.gpu.setFaceCullingEnabled(true); // TODO: 後で戻した方が性能は上がるが誤差だろうたぶん
		state.shader3d = new Kayac.Shader({
			gpu: state.gpu,
			name: 'shader3d',
			vertexShaderId: '3dvs',
			fragmentShaderId: '3dfs'
		});
		state.vertexFormat3d = UnkoNenga.Mesh.generateVertexFormat();
		state.shader2d = new Kayac.Shader({
			gpu: state.gpu,
			name: 'shader2d',
			vertexShaderId: '2dvs',
			fragmentShaderId: '2dfs'
		});
		state.vertexFormat2d = {
			stride: 32,
			elements: [
				{ offset: 0, vectorDimension: 2, name: 'aPosition' },
				{ offset: 8, vectorDimension: 2, name: 'aTexCoord' },
				{ offset: 16, vectorDimension: 4, name: 'aColor' } // TODO: バイトに落としたい
			]
		};
		state.spriteRenderer = new Kayac.SpriteRenderer(state.gpu, 32, state.vertexFormat2d, state.shader2d);
		state.spriteRenderer.parentWidth = logicalWidth;
		state.spriteRenderer.parentHeight = logicalHeight;
	};
	var mainLoop = function () {
		var now = Date.now();
		var deltaTime = (now - state.time) * 0.001;
		state.frameTime = ((state.frameTime - deltaTime) * 0.95) + deltaTime;
		state.deltaTime = Math.min(maxDeltaTime, deltaTime);
		state.time = now;
		state.lightRotator.update(state.deltaTime);
		if (state.unko) {
			state.unko.update(state.deltaTime);
		}
		// Update
		if (state.scene !== null) {
			if (typeof state.scene.update !== 'undefined') {
				state.scene.update();
			}
		}
		// Draw
		if (state.scene !== null) {
			if (typeof state.scene.draw !== 'undefined') {
				state.scene.draw();
			}
		}
		window.requestAnimationFrame(mainLoop);
		state.justDown = false;
		state.prevCursorPos.setV(state.cursorPos);
		// 以下デバグ描画
		//				showDebugInfo();
	};
	var onDown = function () {
		if (state.scene !== null) {
			if (typeof state.scene.onDown !== 'undefined') {
				state.scene.onDown();
			}
		}
		state.down = state.justDown = true;
	};
	var showDebugInfo = function () {
		if (state.timeRenderer) {
			state.timeRenderer.value = Math.min(Math.round(1000 * state.frameTime, 99999));

			var camera2dMatrix = state.camera2d.getMatrix();
			state.spriteRenderer.clear();
			state.timeRenderer.draw(state.spriteRenderer);
			state.spriteRenderer.draw(state.gpu, camera2dMatrix);
		}
	};
	var startBeforeLoad = function () {
		state.scene = loadingScene;
		state.time = Date.now();
		state.camera3d = new Kayac.Camera3d();
		state.camera3d.position = [0, -1, -10];
		state.camera3d.farClip = 100;
		state.camera3d.aspect = logicalWidth / logicalHeight;

		state.camera2d = new Kayac.Camera2d();
		state.camera2d.setProjection(logicalWidth, logicalHeight);
		state.camera2d.position = [logicalWidth / 2, logicalHeight / 2];

		state.lightRotator = new UnkoNenga.Rotator(
			Kayac.V3.createXyz(1, 0, 0),
			Kayac.V3.createXyz(0, 0, 1));
		state.lightRotator.setData(
			{
				start: 0,
				goal: 0,
				velocity: 0.3,
				stiffness: 0.2,
				damping: 0
			},
			{
				start: 0,
				goal: 0,
				velocity: 0.6,
				stiffness: 0,
				damping: 0
			},
			false);
	};
	var startAfterLoad = function () {
		for (var i = 0; i < UnkoNenga.fetchedImageElements.length; ++i) {
			var img = UnkoNenga.fetchedImageElements[i];
			state.textures[img.id] = new Kayac.Texture({ gpu: state.gpu, img: img });
		}
		// 背景
		var sprite = new Kayac.Sprite();
		sprite.name = 'background';
		sprite.texture = state.textures['bg'];
		var backgroundTiling = 1.5;
		sprite.size = [logicalWidth, logicalHeight];
		sprite.texcoordSize = [backgroundTiling, 2 * backgroundTiling * logicalHeight / logicalWidth];
		var backInstance = new Kayac.SpriteInstance();
		backInstance.sprite = sprite;
		backInstance.transform = new Kayac.SpriteTransform();
		state.backgroundSpriteInstance = backInstance;

		// ウンコ初期化
		state.matrixStack = new Kayac.MatrixStack();
		state.unko = new UnkoNenga.Unko(
			state.gpu,
			state.shader3d,
			state.vertexFormat3d,
			plateInterval,
			plateThickness,
			scaleMin,
			scaleMax,
			topHeightFactor);
		state.unko.setColor(defaultUnkoColor);

		// UI系初期化
		// Transformをまず辞書化
		var uiTransforms = {};
		for (var i = 0; i < UnkoNenga.uiTransforms.length; i++) {
			var transform = UnkoNenga.uiTransforms[i];
			uiTransforms[transform.name] = transform;
		}
		var uiItems = UnkoNenga.uiAtlas.items;
		var uiTexture = state.textures['uiAtlas'];
		for (var i = 0; i < uiItems.length; i++) {
			var item = uiItems[i];
			var sprite = new Kayac.Sprite();
			sprite.name = item.name;
			sprite.texture = uiTexture;
			sprite.size = [item.width, item.height];
			sprite.texcoordSize = [item.width / uiAtlas.width, item.height / uiAtlas.height];
			sprite.texcoordOffset = [item.x / uiAtlas.width, item.y / uiAtlas.height];

			var transform = uiTransforms[item.name];
			var instance = new Kayac.SpriteInstance();
			instance.sprite = sprite;
			instance.transform = transform;
			state.spriteInstances[item.name] = instance;
		}

		state.digitSprites = [
			state.spriteInstances['num_0'].sprite,
			state.spriteInstances['num_1'].sprite,
			state.spriteInstances['num_2'].sprite,
			state.spriteInstances['num_3'].sprite,
			state.spriteInstances['num_4'].sprite,
			state.spriteInstances['num_5'].sprite,
			state.spriteInstances['num_6'].sprite,
			state.spriteInstances['num_7'].sprite,
			state.spriteInstances['num_8'].sprite,
			state.spriteInstances['num_9'].sprite,
		];
		state.timeRenderer = new Kayac.NumberRenderer(state.digitSprites, 5);
		state.timeRenderer.charWidth = 28;
		state.timeRenderer.position = [0, 0];
		changeScene(titleScene);
	};
	var loadAudio = function (name) {
		var ret = null;
		if (state.audioExt !== null) {
			var path = name + state.audioExt;
			ret = new Audio(path);
			ret.preload = true;
		}
		return ret;
	};
	var changeScene = function (newScene) {
		console.log('changescene ' + state.scene.name + ' -> ' + newScene.name);
		if (state.scene !== null) {
			if (typeof state.scene.terminate !== 'undefined') {
				state.scene.terminate();
			}
		}
		state.scene = newScene;
		if (state.scene !== null) {
			if (typeof state.scene.initialize !== 'undefined') {
				state.scene.initialize();
			}
		}
	};
	var drawBackground = function (camera2dMatrix) {
		if (state.backgroundSprite !== null) {
			var scrollSpeed = -0.2;
			var u = state.backgroundSpriteInstance.transform.texcoordOffset[0];
			u += state.deltaTime * scrollSpeed;
			u -= Math.floor(u);
			state.backgroundSpriteInstance.transform.texcoordOffset[0] = u;
			state.gpu.setBlendEnabled(true); // アルファブレンド不要
			state.gpu.setDepthTest(false, false); // Zテストしないし書き込まない
			state.spriteRenderer.clear();
			state.spriteRenderer.add(state.backgroundSpriteInstance);
			state.spriteRenderer.draw(state.gpu, camera2dMatrix);
		}
	};
	var updateCursor = function (p) {
		var orig = Kayac.V2.createXy(p.clientX, p.clientY);
		toLogicalScreenPosition(state.cursorPos, orig);
	};
	var onMouseDown = function (e) {
		e = e || window.event;
		onDown();
		updateCursor(e);
		state.prevCursorPos.setV(state.cursorPos);
		e.preventDefault();
		e.stopPropagation;
		onPointerDown();
	};
	var onMouseMove = function (e) {
		e = e || window.event;
		if (state.down) {
			updateCursor(e);
		}
		e.preventDefault();
		e.stopPropagation;
	};
	var onMouseLeave = function (e) {
		e = e || window.event;
		state.down = false;
		e.preventDefault();
		e.stopPropagation;
	};
	var onMouseUp = function (e) {
		e = e || window.event;
		state.down = false;
		e.preventDefault();
		e.stopPropagation;
	};
	var onTouchStart = function (e) {
		e = e || window.event;
		if (e.changedTouches.length > 0) {
			onDown();
			var touch = e.changedTouches[0];
			updateCursor(touch);
			state.prevCursorPos.setV(state.cursorPos);
		}
		e.preventDefault();
		e.stopPropagation;
		onPointerDown();
	};
	var onTouchMove = function (e) {
		e = e || window.event;
		if (e.changedTouches.length > 0) {
			var touch = e.changedTouches[0];
			updateCursor(touch);
		}
		e.preventDefault();
		e.stopPropagation;
	};
	var onTouchEnd = function (e) {
		e = e || window.event;
		state.down = false;
		e.preventDefault();
		e.stopPropagation;
	};
	var onPointerDown = function () {
		// クリックタイミングでbgm鳴ってなければ鳴らす
		if (state.bgm === null) {
			state.bgm = playAudio('bgm01_main_191223a');
			if (state.bgm !== null) {
				state.bgm.addEventListener('ended', onBgmEnded, false);
			}
			// 全てロード開始
			state.se.start = loadAudio('se01_start_tap');
			state.se.stopBottom = loadAudio('se02_stop01_gedan');
			state.se.stopMiddle = loadAudio('se03_stop02_tyuudan');
			state.se.stopTop = loadAudio('se04_stop03_zyoudan');
		}
	};
	var playAudio = function (name) {
		var audio = loadAudio(name);
		if (audio !== null) {
			audio.play();
			console.log('audio: ' + name);
		}
		return audio;
	};
	var onCanPlayThrough = function (e) {
		state.bgm.play();
	};
	var onBgmEnded = function (e) {
		state.bgm.play();
	};
	var onClickScreenShot = function (e) {
		var dataUrl = canvas.toDataURL();
		var tmpCanvas = document.createElement('canvas');
		var cutTop = 0.02;
		var cutBottom = 0.06;
		var cutHeight = Math.ceil(canvas.height * (1 - cutTop - cutBottom));
		tmpCanvas.width = Math.ceil(cutHeight * 16 / 9);
		tmpCanvas.height = cutHeight;
		var cx = tmpCanvas.getContext('2d');
		cx.clearRect(0, 0, tmpCanvas.width, tmpCanvas.height);
		var img = document.createElement('img');
		img.src = dataUrl;
		img.onload = function () {
			cx.drawImage(
				img,
				0,
				Math.floor(canvas.height * cutTop),
				canvas.width,
				cutHeight,
				(tmpCanvas.width - canvas.width) * 0.5,
				0,
				canvas.width,
				cutHeight);
			var dataUrl2 = tmpCanvas.toDataURL();
			var anchor = document.createElement('a');
			anchor.download = 'kayacOnenga2020.png';
			anchor.href = dataUrl2;
			anchor.click();
		};
/*
		if (dataUrl) {
			var anchor = document.createElement('a');
			anchor.download = 'kayacOnenga2020.png';
			anchor.href = dataUrl;
			anchor.click();
		}
	*/	};
	var canvas = document.getElementById('screen');
	canvas.addEventListener('mousedown', onMouseDown, false);
	canvas.addEventListener('mousemove', onMouseMove, false);
	canvas.addEventListener('mouseup', onMouseUp, false);
	canvas.addEventListener('mouseleave', onMouseLeave, false);
	canvas.addEventListener('touchstart', onTouchStart, false);
	canvas.addEventListener('touchmove', onTouchMove, false);
	canvas.addEventListener('touchend', onTouchEnd, false);

	var testAudio = new Audio();
	if (testAudio.canPlayType('audio/ogg')) {
		state.audioExt = '.ogg';
	} else if (testAudio.canPlayType('audio/mp3')) {
		state.audioExt = '.mp3';
	}

	setResolution(canvas, requestAspect);
	initializeGpu(canvas);
	startBeforeLoad();
	mainLoop();
}());