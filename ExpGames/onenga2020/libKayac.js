// Utility、Math系機能
"use strict";
var Kayac = Kayac || {};

Kayac.isPowerOf2 = function (x) {
	return (x & (x - 1)) === 0;
};

Kayac.normalizeRadian = function (x) {
	var pi2 = Math.PI * 2;
	var q = Math.floor(x / pi2);
	x -= q * pi2;
	if (x >= Math.PI) {
		x -= pi2;
	}
	return x;
}

//配列オフセットつきコピー
Kayac.copyArray = function (dst, dstOffset, src, srcOffset, count) {
	for (var i = 0; i < count; i += 1) {
		dst[dstOffset + i] = src[srcOffset + i];
	}
};

//e:HTMLElement。中のテキストを結合して返す
Kayac.concatenateTextInElement = function (e) {
	var r = '';
	var c = e.firstChild;
	while (c) {
		if (c.nodeType === c.TEXT_NODE) {
			r += c.textContent;
		}
		c = c.nextSibling;
	}
	return r;
};

//2要素配列ベクタ演算
Kayac.add2 = function (self, a) {
	self[0] += a[0];
	self[1] += a[1];
};

Kayac.setAdd2 = function (self, a, b) {
	self[0] = a[0] + b[0];
	self[1] = a[1] + b[1];
};

Kayac.sub2 = function (self, a) {
	self[0] -= a[0];
	self[1] -= a[1];
};

Kayac.setSub2 = function (self, a, b) {
	self[0] = a[0] - b[0];
	self[1] = a[1] - b[1];
};

Kayac.mul2 = function (self, a) {
	self[0] *= a[0];
	self[1] *= a[1];
};

Kayac.setMul2 = function (self, a, b) {
	self[0] = a[0] * b[0];
	self[1] = a[1] * b[1];
};

Kayac.mulS2 = function (self, s) {
	self[0] *= s;
	self[1] *= s;
};

Kayac.setMulS2 = function (self, a, s) {
	self[0] = a[0] * s;
	self[1] = a[1] * s;
};

Kayac.setMadd2 = function (self, a, b, c) {
	self[0] = (a.x * b.x) + c.x;
	self[1] = (a.y * b.y) + c.y;
};

Kayac.setMaddS2 = function (self, a, s, b) {
	self[0] = (a.x * s) + b.x;
	self[1] = (a.y * s) + b.y;
};

//V2
Kayac.V2 = function () {
};

Kayac.V2.setA = function (self, a) {
	self.x = a[0];
	self.y = a[1];
};

Kayac.V2.setXy = function (self, x, y) {
	self.x = x;
	self.y = y;
};

Kayac.V2.setV = function (self, v) {
	self.x = v.x;
	self.y = v.y;
};

Kayac.V2.createA = function (a) {
	var ret = new Kayac.V2();
	ret.setA(a);
	return ret;
};

Kayac.V2.createXy = function (x, y) {
	var ret = new Kayac.V2();
	ret.setXy(x, y);
	return ret;
};

Kayac.V2.createV = function (v) {
	var ret = new Kayac.V2();
	ret.setV(v);
	return ret;
};

Kayac.V2.add = function (self, a) {
	self.x += a.x;
	self.y += a.y;
};

Kayac.V2.setAdd = function (self, a, b) {
	self.x = a.x + b.x;
	self.y = a.y + b.y;
};

Kayac.V2.sub = function (self, a) {
	self.x -= a.x;
	self.y -= a.y;
};

Kayac.V2.setSub = function (self, a, b) {
	self.x = a.x - b.x;
	self.y = a.y - b.y;
};

Kayac.V2.mul = function (self, a) {
	self.x *= a.x;
	self.y *= a.y;
};

Kayac.V2.setMul = function (self, a, b) {
	self.x = a.x * b.x;
	self.y = a.y * b.y;
};

Kayac.V2.mulS = function (self, s) {
	self.x *= s;
	self.y *= s;
};

Kayac.V2.setMulS = function (self, a, s) {
	self.x = a.x * s;
	self.y = a.y * s;
};

Kayac.V2.setMadd = function (self, a, b, c) {
	self.x = (a.x * b.x) + c.x;
	self.y = (a.y * b.y) + c.y;
};

Kayac.V2.setMaddS = function (self, a, s, c) {
	self.x = (a.x * s) + b.x;
	self.y = (a.y * s) + c.y;
};

Kayac.V2.neg = function (self) {
	self.x = -self.x;
	self.y = -self.y;
};

Kayac.V2.setNeg = function (self, a) {
	self.x = -a.x;
	self.y = -a.y;
};

Kayac.V2.dot = function (a, b) {
	return (a.x * b.x) + (a.y * b.y);
};

Kayac.V2.sqMagnitude = function (self) {
	return (self.x * self.x) + (self.y * self.y);
};

Kayac.V2.magnitude = function (self) {
	return Math.sqrt(Kayac.V2.sqMagnitude(self));
};

Kayac.V2.normalize = function (self) {
	var V = Kayac.V2;
	var l = V.magnitude(self);
	if (l !== 0) {
		V.mul(self, 1 / l);
	}
};

Kayac.V2.setNormalized = function (self, a) {
	var V = Kayac.V2;
	var l = V.magnitude(a);
	if (l !== 0) {
		V.setMul(self, a, 1 / l);
	}
};

Kayac.V2.setMin = function (self, a, b) {
	self.x = Math.min(a.x, b.x);
	self.y = Math.min(a.y, b.y);
};

Kayac.V2.min = function (self, a) {
	self.x = Math.min(self.x, a.x);
	self.y = Math.min(self.y, a.y);
};

Kayac.V2.setMax = function (self, a, b) {
	self.x = Math.max(a.x, b.x);
	self.y = Math.max(a.y, b.y);
};

Kayac.V2.max = function (self, a) {
	self.x = Math.max(self.x, a.x);
	self.y = Math.max(self.y, a.y);
};

//以下メソッド版。インライン展開してくれるかなあ
Kayac.V2.prototype.setXy = function (x, y) {
	Kayac.V2.setXy(this, x, y);
};

Kayac.V2.prototype.setV = function (v) {
	Kayac.V2.setV(this, v);
};

Kayac.V2.prototype.setA = function (a) {
	Kayac.V2.setA(this, a);
};

Kayac.V2.prototype.add = function (a) {
	Kayac.V2.add(this, a);
};

Kayac.V2.prototype.setAdd = function (a, b) {
	Kayac.V2.setAdd(this, a, b);
};

Kayac.V2.prototype.sub = function (a) {
	Kayac.V2.sub(this, a);
};

Kayac.V2.prototype.setSub = function (a, b) {
	Kayac.V2.setSub(this, a, b);
};

Kayac.V2.prototype.mul = function (a) {
	Kayac.V2.mul(this, a);
};

Kayac.V2.prototype.setMul = function (a, b) {
	Kayac.V2.SetMul(this, a, b);
};

Kayac.V2.prototype.mulS = function (s) {
	Kayac.V2.mulS(this, s);
};

Kayac.V2.prototype.setMulS = function (a, s) {
	Kayac.V2.SetMulS(this, a, s);
};

Kayac.V2.prototype.setMadd = function (a, b, c) {
	Kayac.V2.SetMadd(this, a, b, c);
};

Kayac.V2.prototype.setMaddS = function (a, s, b) {
	Kayac.V2.SetMadd(this, a, s, b);
};

Kayac.V2.prototype.neg = function () {
	Kayac.V2.neg(this);
}

Kayac.V2.prototype.setNeg = function (a) {
	Kayac.V2.setNeg(this, a);
}

Kayac.V2.prototype.dot = function (a) {
	return Kayac.V2.dot(this, a);
};

Kayac.V2.prototype.sqMagnitude = function () {
	return Kayac.V2.sqMagnitude(this);
};

Kayac.V2.prototype.magnitude = function () {
	return Kayac.V2.magnitude(this);
};

Kayac.V2.prototype.normalize = function () {
	Kayac.V2.normalize(this);
};

Kayac.V2.prototype.setNormalized = function (a) {
	Kayac.V2.setNormalized(this, a);
};

Kayac.V2.prototype.setMin = function (a, b) {
	Kayac.V2.setMin(this, a, b);
};

Kayac.V2.prototype.min = function (a) {
	Kayac.V2.min(this, a);
};

Kayac.V2.prototype.setMax = function (a, b) {
	Kayac.V2.setMax(this, a, b);
};

Kayac.V2.prototype.max = function (a) {
	Kayac.V2.max(this, a);
};

Kayac.V2.prototype.toString = function () {
	return '(' + this.x.toFixed(3) + ', ' + this.y.toFixed(3) + ')';
};

//3要素配列ベクタ演算
Kayac.add3 = function (self, a) {
	self[0] += a[0];
	self[1] += a[1];
	self[2] += a[2];
};

Kayac.setAdd3 = function (self, a, b) {
	self[0] = a[0] + b[0];
	self[1] = a[1] + b[1];
	self[2] = a[2] + b[2];
};

Kayac.sub3 = function (self, a) {
	self[0] -= a[0];
	self[1] -= a[1];
	self[2] -= a[2];
};

Kayac.setSub3 = function (self, a, b) {
	self[0] = a[0] - b[0];
	self[1] = a[1] - b[1];
	self[2] = a[2] - b[2];
};

Kayac.mul3 = function (self, a) {
	self[0] *= a[0];
	self[1] *= a[1];
	self[2] *= a[2];
};

Kayac.setMul3 = function (self, a, b) {
	self[0] = a[0] * b[0];
	self[1] = a[1] * b[1];
	self[2] = a[2] * b[2];
};

Kayac.mulS3 = function (self, s) {
	self[0] *= s;
	self[1] *= s;
	self[2] *= s;
};

Kayac.setMulS3 = function (self, a, s) {
	self[0] = a[0] * s;
	self[1] = a[1] * s;
	self[2] = a[2] * s;
};

Kayac.setMadd3 = function (self, a, b, c) {
	self[0] = (a[0] * b[0]) + c[0];
	self[1] = (a[1] * b[1]) + c[1];
	self[2] = (a[2] * b[2]) + c[2];
};

Kayac.setMaddS3 = function (self, a, s, b) {
	self[0] = (a[0] * s) + b[0];
	self[1] = (a[1] * s) + b[1];
	self[2] = (a[2] * s) + b[2];
};

//V3
Kayac.V3 = function () {
};

Kayac.V3.setXyz = function (self, x, y, z) {
	self.x = x;
	self.y = y;
	self.z = z;
};

Kayac.V3.setV = function (self, v) {
	self.x = v.x;
	self.y = v.y;
	self.z = v.z;
};

Kayac.V3.setA = function (self, a) {
	self.x = a[0];
	self.y = a[1];
	self.z = a[2];
};

Kayac.V3.createA = function (a) {
	var ret = new Kayac.V3();
	ret.setA(a);
	return ret;
};

Kayac.V3.createXyz = function (x, y, z) {
	var ret = new Kayac.V3();
	ret.setXyz(x, y, z);
	return ret;
};

Kayac.V3.createV = function (v) {
	var ret = new Kayac.V3();
	ret.setV(v);
	return ret;
};

Kayac.V3.neg = function (self) {
	self.x = -self.x;
	self.y = -self.y;
	self.z = -self.z;
};

Kayac.V3.setNeg = function (self, a) {
	self.x = -a.x;
	self.y = -a.y;
	self.z = -a.z;
};

Kayac.V3.add = function (self, a) {
	self.x += a.x;
	self.y += a.y;
	self.z += a.z;
};

Kayac.V3.setAdd = function (self, a, b) {
	self.x = a.x + b.x;
	self.y = a.y + b.y;
	self.z = a.z + b.z;
};

Kayac.V3.sub = function (self, a) {
	self.x -= a.x;
	self.y -= a.y;
	self.z -= a.z;
};

Kayac.V3.setSub = function (self, a, b) {
	self.x = a.x - b.x;
	self.y = a.y - b.y;
	self.z = a.z - b.z;
};

Kayac.V3.mul = function (self, a) {
	self.x *= a.x;
	self.y *= a.y;
	self.z *= a.z;
};

Kayac.V3.setMul = function (self, a, b) {
	self.x = a.x * b.x;
	self.y = a.y * b.y;
	self.z = a.z * b.z;
};

Kayac.V3.mulS = function (self, s) {
	self.x *= s;
	self.y *= s;
	self.z *= s;
};

Kayac.V3.setMulS = function (self, a, s) {
	self.x = a.x * s;
	self.y = a.y * s;
	self.z = a.z * s;
};

Kayac.V3.setMadd = function (self, a, b, c) {
	self.x = (a.x * b.x) + c.x;
	self.y = (a.y * b.y) + c.y;
	self.z = (a.z * b.z) + c.z;
};

Kayac.V3.setMaddS = function (self, a, s, b) {
	self.x = (a.x * s) + b.x;
	self.y = (a.y * s) + b.y;
	self.z = (a.z * s) + b.z;
};

Kayac.V3.setMulQ = function (self, a, b) { //a,b共にクォタニオン
	self.x = (a.w * b.x) + (a.x * b.w) + (a.y * b.z) - (a.z * b.y);
	self.y = (a.w * b.y) + (a.y * b.w) + (a.z * b.x) - (a.x * b.z);
	self.z = (a.w * b.z) + (a.z * b.w) + (a.x * b.y) - (a.y * b.x);
};

Kayac.V3.setMulQCq = function (self, a, b) { //a,b共にクォタニオンだが、bは複素共軛
	self.x = -(a.w * b.x) + (a.x * b.w) - (a.y * b.z) + (a.z * b.y);
	self.y = -(a.w * b.y) + (a.y * b.w) - (a.z * b.x) + (a.x * b.z);
	self.z = -(a.w * b.z) + (a.z * b.w) - (a.x * b.y) + (a.y * b.x);
};

Kayac.V3.setMulCqQ = function (self, a, b) { //a,b共にクォタニオンだが、aは複素共軛
	self.x = (a.w * b.x) - (a.x * b.w) - (a.y * b.z) + (a.z * b.y);
	self.y = (a.w * b.y) - (a.y * b.w) - (a.z * b.x) + (a.x * b.z);
	self.z = (a.w * b.z) - (a.z * b.w) - (a.x * b.y) + (a.y * b.x);
};

Kayac.V3.dot = function (a, b) {
	return (a.x * b.x) + (a.y * b.y) + (a.z * b.z);
};

Kayac.V3.cross = function (self, a) {
	var x = (self.y * a.z) - (self.z * a.y);
	var y = (self.z * a.x) - (self.x * a.z);
	self.z = (self.x * a.y) - (self.y * a.x);
	self.x = x;
	self.y = y;
};

Kayac.V3.setCross = function (self, a, b) {
	//自分が引数に入っている可能性を考えてxyは一旦テンポラリに格納
	var x = (a.y * b.z) - (a.z * b.y);
	var y = (a.z * b.x) - (a.x * b.z);
	self.z = (a.x * b.y) - (a.y * b.x);
	self.x = x;
	self.y = y;
};

Kayac.V3.sqMagnitude = function (self) {
	return (self.x * self.x) + (self.y * self.y) + (self.z * self.z);
};

Kayac.V3.magnitude = function (self) {
	return Math.sqrt(Kayac.V3.sqMagnitude(self));
};

Kayac.V3.normalize = function (self) {
	var V = Kayac.V3;
	var l = V.magnitude(self);
	if (l !== 0) {
		V.mul(self, 1 / l);
	}
};

Kayac.V3.setNormalized = function (self, a) {
	var V = Kayac.V3;
	var l = V.magnitude(a);
	if (l !== 0) {
		V.setMul(self, a, 1 / l);
	}
};

Kayac.V3.rotate = function (self, q) {
	var qv = Kayac.Q.createQ(q);
	Kayac.Q.mulV(qv, self);
	Kayac.V3.setMulQCq(self, qv, q);
};

Kayac.V3.rotateRev = function (self, q) {
	var cqv = Kayac.Q.createQ(q);
	cqv.x = -cqv.x;
	cqv.y = -cqv.y;
	cqv.z = -cqv.z;
	Kayac.Q.mulV(cqv, self);
	Kayac.V3.setMulQ(self, cqv, q);
};

Kayac.V3.setRotated = function (self, q, v) {
	var qv = Kayac.Q.createQ(q);
	Kayac.Q.mulV(qv, v);
	Kayac.V3.setMulQCq(self, qv, q);
};

Kayac.V3.setRotatedRev = function (self, q, v) {
	var cqv = Kayac.Q.createQ(q);
	cqv.x = -cqv.x;
	cqv.y = -cqv.y;
	cqv.z = -cqv.z;
	Kayac.Q.mulV(cqv, v);
	Kayac.V3.setMulQ(self, cqv, q);
};

/*
v' = v - 2*dot(v,n)/dot(n,n)
だが、高速化のために法線が正規化されていることを要求する
結果はvと同じ長さ(正規化状態なら正規化を保証する)
*/
Kayac.V3.reflect = function (self, normalizedNormal) {
	var V = Kayac.V3;
	var vn = V.dot(self, normalizedNormal);
	V.setMaddS(self, normalizedNormal, -2 * vn, self);
};

Kayac.V3.setReflected = function (self, v, normalizedNormal) {
	var V = Kayac.V3;
	var vn = V.dot(v, normalizedNormal);
	V.setMaddS(self, v, normalizedNormal, -2 * vn, self);
};

Kayac.V3.setMin = function (self, a, b) {
	self.x = Math.min(a.x, b.x);
	self.y = Math.min(a.y, b.y);
	self.z = Math.min(a.z, b.z);
};

Kayac.V3.min = function (self, a) {
	self.x = Math.min(self.x, a.x);
	self.y = Math.min(self.y, a.y);
	self.z = Math.min(self.z, a.z);
};

Kayac.V3.setMax = function (self, a, b) {
	self.x = Math.max(a.x, b.x);
	self.y = Math.max(a.y, b.y);
	self.z = Math.max(a.z, b.z);
};

Kayac.V3.max = function (self, a) {
	self.x = Math.max(self.x, a.x);
	self.y = Math.max(self.y, a.y);
	self.z = Math.max(self.z, a.z);
};

//以下メソッド版。インライン展開してくれるかなあ
Kayac.V3.prototype.setXyz = function (x, y, z) {
	Kayac.V3.setXyz(this, x, y, z);
};

Kayac.V3.prototype.setV = function (v) {
	Kayac.V3.setV(this, v);
};

Kayac.V3.prototype.setA = function (a) {
	Kayac.V3.setA(this, a);
};

Kayac.V3.prototype.add = function (a) {
	Kayac.V3.add(this, a);
};

Kayac.V3.prototype.setAdd = function (a, b) {
	Kayac.V3.setAdd(this, a, b);
};

Kayac.V3.prototype.sub = function (a) {
	Kayac.V3.sub(this, a);
};

Kayac.V3.prototype.SetSub = function (a, b) {
	Kayac.V3.setSub(this, a, b);
};

Kayac.V3.prototype.mul = function (a) {
	Kayac.V3.mul(this, a);
};

Kayac.V3.prototype.setMul = function (a, b) {
	Kayac.V3.setMul(this, a, b);
};

Kayac.V3.prototype.mulS = function (s) {
	Kayac.V3.mulS(this, s);
};

Kayac.V3.prototype.setMulS = function (a, s) {
	Kayac.V3.setMulS(this, a, s);
};

Kayac.V3.prototype.neg = function () {
	Kayac.V3.neg(this);
};

Kayac.V3.prototype.setNeg = function (a) {
	Kayac.V3.setNeg(this, a);
};

Kayac.V3.prototype.setMadd = function (a, b, c) {
	Kayac.V3.setMadd(this, a, b, c);
};

Kayac.V3.prototype.setMaddS = function (a, s, b) {
	Kayac.V3.setMaddS(this, a, s, b);
};

Kayac.V3.prototype.setMulQ = function (a, b) { //a,b共にクォタニオン
	Kayac.V3.setMulQ(this, a, b);
};

Kayac.V3.prototype.setMulQCq = function (a, b) { //a,b共にクォタニオンだが、bは複素共軛化
	Kayac.V3.setMulQCq(this, a, b);
};

Kayac.V3.prototype.setMulCqQ = function (a, b) { //a,b共にクォタニオンだが、aは複素共軛化
	Kayac.V3.setMulCqQ(this, a, b);
};

Kayac.V3.prototype.dot = function (a) {
	return Kayac.V3.dot(this, a);
};

Kayac.V3.prototype.cross = function (a) {
	Kayac.V3.cross(this, a);
};

Kayac.V3.prototype.setCross = function (a, b) {
	Kayac.V3.setCross(this, a, b);
};

Kayac.V3.prototype.sqMagnitude = function () {
	return Kayac.V3.sqMagnitude(this);
};

Kayac.V3.prototype.magnitude = function () {
	return Kayac.V3.magnitude(this);
};

Kayac.V3.prototype.normalize = function () {
	Kayac.V3.normalize(this);
};

Kayac.V3.prototype.setNormalized = function (a) {
	Kayac.V3.setNormalized(this, a);
};

Kayac.V3.prototype.rotate = function (q) {
	Kayac.V3.rotate(this, q);
};

Kayac.V3.prototype.rotateRev = function (q) {
	Kayac.V3.rotateRev(this, q);
};

Kayac.V3.prototype.setRotated = function (q, v) {
	Kayac.V3.setRotated(this, q, v);
};

Kayac.V3.prototype.setRotatedRev = function (q, v) {
	Kayac.V3.setRotatedRev(this, q, v);
};

Kayac.V3.prototype.reflect = function (normalizedNormal) {
	Kayac.V3.reflect(this, normalizedNormal);
};

Kayac.V3.prototype.setReflected = function (v, normalizedNormal) {
	Kayac.V3.setReflected(this, v, normalizedNormal);
};

Kayac.V3.prototype.setMin = function (a, b) {
	Kayac.V3.setMin(this, a, b);
};

Kayac.V3.prototype.min = function (a) {
	Kayac.V3.min(this, a);
};

Kayac.V3.prototype.setMax = function (a, b) {
	Kayac.V3.setMax(this, a, b);
};

Kayac.V3.prototype.max = function (a) {
	Kayac.V3.max(this, a);
};

//Q
Kayac.Q = function () {
};

Kayac.Q.setXyzw = function (self, x, y, z, w) {
	self.x = x;
	self.y = y;
	self.z = z;
	self.w = w;
};

Kayac.Q.setA = function (self, a) {
	self.x = a[0];
	self.y = a[1];
	self.z = a[2];
	self.w = a[3];
};

Kayac.Q.setQ = function (self, q) {
	self.x = q.x;
	self.y = q.y;
	self.z = q.z;
	self.w = q.w;
};

Kayac.Q.createXyzw = function (x, y, z, w) {
	var ret = new Kayac.Q();
	ret.setXyzw(x, y, z, w);
	return ret;
};

Kayac.Q.createA = function (a) {
	var ret = new Kayac.Q();
	ret.setA(a);
	return ret;
};

Kayac.Q.createQ = function (q) {
	var ret = new Kayac.Q();
	ret.setQ(q);
	return ret;
};

Kayac.Q.setIdentity = function (self) {
	self.x = self.y = self.z = 0;
	self.w = 1;
};

Kayac.Q.createIdentity = function () {
	var ret = new Kayac.Q();
	ret.setIdentity();
	return ret;
};

Kayac.Q.createRotation = function (axisNormalized, angle) {
	var ret = new Kayac.Q();
	var halfAngle = angle * 0.5;
	var s = Math.sin(halfAngle);
	var c = Math.cos(halfAngle);
	ret.w = c;
	ret.x = s * axisNormalized.x;
	ret.y = s * axisNormalized.y;
	ret.z = s * axisNormalized.z;
	return ret;
};

Kayac.Q.setRotation = function (self, axisNormalized, angle) {
	var halfAngle = angle * 0.5;
	var s = Math.sin(halfAngle);
	var c = Math.cos(halfAngle);
	self.w = c;
	self.x = s * axisNormalized.x;
	self.y = s * axisNormalized.y;
	self.z = s * axisNormalized.z;
};

Kayac.Q.setRotationZMinusToVectorW0 = function (self, v) {
	/*
	(0,0,-1)をv(x,y,z)に回転するクォータニオンを生成する。
	w=0だと回転角は180度に固定される。
	180度回して行けるのだから、回転軸は(0,0,-1)とdの平均ベクタだ。
	平均だから足せばいい。
	= Q(cos(90),sin(90)*x, sin(90)*y, sin(90)*(z-1))
	= Q(0, x, y, z-1)
	となる。角度が固定されるために三角関数を呼ぶ必要ない。
	zに-1を足したせいで長さが1でなくなっているので、正規化する必要がある。
	L=sqrt(x^2+y^2+z^2-2z+1)
	なので、これで割れば良い。この時、x^2+y^2+z^2=1とわかっているため、
	L=sqrt(-2z+2)
	と単純化される
	*/
	var tmp = (-v.z + 1) * 2;
	if (tmp <= 0) { //演算誤差及びz==-1対策
		self.w = self.y = self.z = 0; //x軸180度回転で到達可能
		self.x = 1;
	} else {
		var l = Math.sqrt(tmp);
		var rcpL = 1 / l;
		self.w = 0;
		self.x = v.x * rcpL;
		self.y = v.y * rcpL;
		self.z = (v.z - 1) * rcpL;
	}
};

Kayac.Q.setOrientation = function (
	self,
	forwardNormalized,
	upwardNormalized) {

	var V = Kayac.V3; //別名
	var Q = Kayac.Q; //別名
	//上ベクタと前ベクタから右ベクタを生成
	var x = new V();
	V.setCross(x, forwardNormalized, upwardNormalized);
	V.normalize(x);
	//X,-Z軸からYを生成。正規直交なので正規化不要
	var y = new V();
	V.setCross(y, x, forwardNormalized);

	//まず(0,0,-1)をzに回す。計算量を削るためにw0で作る。
	var q0 = new Q();
	Q.setRotationZMinusToVectorW0(q0, forwardNormalized);
	//これでY軸を回す
	var yt = new V3();
	V.setRotated(yt, q0, new V([0, 1, 0]));

	var q1 = new Q();
	var h = new V3();
	V.setAdd(h, yt, y); //まだ正規化はしない
	var crossY = new V();
	V.isetCross(crossY, yt, h);
	var crossYL2 = V.sqMagnitude(crossY);
	if ((crossYL2 < 1e-8) && (V.dot(yt, y) < 0)) {
		q1.w = 0;
		q1.x = forwardNormalized.x;
		q1.y = forwardNormalized.y;
		q1.z = forwardNormalized.z;
	} else {
		var rcpHLength = 1 / h.magnitude();
		q1.w = V.dot(yt, h) * rcpHLength;
		q1.x = crossY.x * rcpHLength;
		q1.y = crossY.y * rcpHLength;
		q1.z = crossY.z * rcpHLength;
	}
	Q.setMul(self, q1, q0);
};

Kayac.Q.add = function (self, a) {
	self.x += a.x;
	self.y += a.y;
	self.z += a.z;
	self.w += a.w;
};

Kayac.Q.setAdd = function (a, b) {
	self.x = a.x + b.x;
	self.y = a.y + b.y;
	self.z = a.z + b.z;
	self.w = a.w + b.w;
};

Kayac.Q.setMul = function (self, a, b) {
	var x = (a.w * b.x) + (a.x * b.w) + (a.y * b.z) - (a.z * b.y);
	var y = (a.w * b.y) + (a.y * b.w) + (a.z * b.x) - (a.x * b.z);
	var z = (a.w * b.z) + (a.z * b.w) + (a.x * b.y) - (a.y * b.x);
	self.w = (a.w * b.w) - (a.x * b.x) - (a.y * b.y) - (a.z * b.z);
	self.x = x;
	self.y = y;
	self.z = z;
};

Kayac.Q.setMulQV = function (self, a, b) {
	//上の関数から不要な項を消している
	var x = (a.w * b.x) + (a.y * b.z) - (a.z * b.y);
	var y = (a.w * b.y) + (a.z * b.x) - (a.x * b.z);
	var z = (a.w * b.z) + (a.x * b.y) - (a.y * b.x);
	self.w = - (a.x * b.x) - (a.y * b.y) - (a.z * b.z);
	self.x = x;
	self.y = y;
	self.z = z;
};

Kayac.Q.setMulVQ = function (self, a, b) { //aはV3
	//上の関数から不要な項を消している
	var x = (a.x * b.w) + (a.y * b.z) - (a.z * b.y);
	var y = (a.y * b.w) + (a.z * b.x) - (a.x * b.z);
	var z = (a.z * b.w) + (a.x * b.y) - (a.y * b.x);
	self.w = - (a.x * b.x) - (a.y * b.y) - (a.z * b.z);
	self.x = x;
	self.y = y;
	self.z = z;
};

Kayac.Q.mul = function (self, a) {
	Kayac.Q.setMul(self, self, a);
};

Kayac.Q.mulV = function (self, a) {
	Kayac.Q.setMulQV(self, self, a);
};

Kayac.Q.mulVQ = function (self, a) {
	Kayac.Q.setMulVQ(self, self, a);
};

Kayac.Q.sqNorm = function (self) {
	return (self.w * self.w) +
		(self.x * self.x) +
		(self.y * self.y) +
		(self.z * self.z);
};

Kayac.Q.norm = function (self) {
	return Math.sqrt(Kayac.Q.sqNorm(self));
};

Kayac.Q.normalize = function (self) {
	var n = Kayac.Q.norm(self);
	if (n !== 0) {
		var rcpN = 1 / n;
		self.w *= rcpN;
		self.x *= rcpN;
		self.y *= rcpN;
		self.z *= rcpN;
	}
};

Kayac.Q.invert = function (self) {
	self.x = -self.x;
	self.y = -self.y;
	self.z = -self.z;
};

Kayac.Q.integrate = function (self, angularVelocity, deltaTime) {
	var tv = new Kayac.V3();
	tv.setMulS(angularVelocity, deltaTime * 0.5);
	var tq = new Kayac.Q();
	tq.setMulQV(self, tv);
	self.add(tq);
	self.normalize();
};

//以下メソッド版
Kayac.Q.prototype.setXyzw = function (x, y, z, w) {
	Kayac.Q.setXyzw(this, x, y, z, w);
};

Kayac.Q.prototype.setA = function (a) {
	Kayac.Q.setA(this, a);
};

Kayac.Q.prototype.setQ = function (q) {
	Kayac.Q.setQ(this, q);
};

Kayac.Q.prototype.setIdentity = function () {
	Kayac.Q.setIdentity(this);
};

Kayac.Q.prototype.setRotation = function (axisNormalized, angle) {
	Kayac.Q.setRotation(this, axisNormalized, angle);
};

Kayac.Q.prototype.setRotationZMinusToVectorW0 = function (v) {
	Kayac.Q.setRotationZMinusToVectorW0(this, v);
};

Kayac.Q.prototype.setOrientation = function (
	forwardNormalized,
	upwardNormalized) {

	Kayac.Q.setOrientation(this, forwardNormalized, upwardNormalized);
};

Kayac.Q.prototype.add = function (a) {
	Kayac.Q.add(this, a);
};

Kayac.Q.prototype.setAdd = function (a, b) {
	Kayac.Q.setAdd(this, a, b);
};

Kayac.Q.prototype.setMul = function (a, b) {
	Kayac.Q.setMul(this, a, b);
};

Kayac.Q.prototype.setMulQV = function (a, b) { //bはV3
	Kayac.Q.setMulQV(this, a, b);
};

Kayac.Q.prototype.setMulVQ = function (a, b) { //aはV3
	Kayac.Q.setMulVQ(this, a, b);
};

Kayac.Q.prototype.mul = function (a) {
	this.setMul(this, a);
};

Kayac.Q.prototype.mulV = function (a) {
	this.setMulQV(this, a);
};

Kayac.Q.prototype.mulVQ = function (a) {
	this.setMulVQ(a, this);
};

Kayac.Q.prototype.sqNorm = function () {
	return Kayac.Q.sqNorm(this);
};

Kayac.Q.prototype.norm = function () {
	return Kayac.Q.norm(this);
};

Kayac.Q.prototype.normalize = function () {
	Kayac.Q.normalize(this);
};

Kayac.Q.prototype.invert = function () {
	Kayac.Q.invert(this);
};

Kayac.Q.prototype.integrate = function (angularVelocity, deltaTime) {
	Kayac.Q.integrate(this, angularVelocity, deltaTime);
};

//M23
Kayac.M23 = function () {
};

Kayac.M23.prototype.setM = function (m) {
	this.m00 = m.m00;
	this.m01 = m.m01;
	this.m02 = m.m02;
	this.m10 = m.m10;
	this.m11 = m.m11;
	this.m12 = m.m12;
};

// 回転角を与えてカメラ行列を生成
Kayac.M23.prototype.setRotation = function (theta) {
	var s = Math.sin(theta);
	var c = Math.cos(theta);
	this.m00 = c;
	this.m01 = s;
	this.m10 = -s;
	this.m11 = c;
	this.m02 = this.m12 = 0;
};

// 前から移動を乗算
Kayac.M23.prototype.preMultiplyTranslation = function (v) {
	this.m02 += v.x;
	this.m12 += v.y;
};

// 後ろから移動を乗算
Kayac.M23.prototype.postMultiplyTranslation = function (v) {
	this.m02 += (this.m00 * v.x) + (this.m01 * v.y);
	this.m12 += (this.m10 * v.x) + (this.m11 * v.y);
};

// 前から拡縮を乗算
Kayac.M23.prototype.preMultiplyScale = function (v) {
	this.m00 *= v.x;
	this.m01 *= v.x;
	this.m02 *= v.x;
	this.m10 *= v.y;
	this.m11 *= v.y;
	this.m12 *= v.y;
};

// 後ろから拡縮を乗算
Kayac.M23.prototype.postMultiplyScale = function (v) {
	this.m00 *= v.x;
	this.m01 *= v.y;
	this.m10 *= v.x;
	this.m11 *= v.y;
};

//M33
Kayac.M33 = function () {
};

Kayac.M33.setInvTranspose34 = function (out, a) {
	var m00 = (a.m11 * a.m22) - (a.m12 * a.m21);
	var m01 = (a.m12 * a.m20) - (a.m10 * a.m22);
	var m02 = (a.m10 * a.m21) - (a.m11 * a.m20);

	var m10 = (a.m21 * a.m02) - (a.m22 * a.m01);
	var m11 = (a.m22 * a.m00) - (a.m20 * a.m02);
	var m12 = (a.m20 * a.m01) - (a.m21 * a.m00);

	var m20 = (a.m01 * a.m12) - (a.m02 * a.m11);
	var m21 = (a.m02 * a.m10) - (a.m00 * a.m12);
	var m22 = (a.m00 * a.m11) - (a.m01 * a.m10);

	var det = (a.m00 * m00) + (a.m01 * m01) + (a.m02 * m02);
	var rcpDet = 1 / det;

	out.m00 = m00 * rcpDet;
	out.m01 = m01 * rcpDet;
	out.m02 = m02 * rcpDet;
	out.m10 = m10 * rcpDet;
	out.m11 = m11 * rcpDet;
	out.m12 = m12 * rcpDet;
	out.m20 = m20 * rcpDet;
	out.m21 = m21 * rcpDet;
	out.m22 = m22 * rcpDet;
};

Kayac.M33.prototype.setInvTranspose34 = function (a) {
	Kayac.M33.setInvTranspose34(this, a);
};

//M34
Kayac.M34 = function () {
};

Kayac.M34.createM = function (m) {
	var ret = new Kayac.M34();
	ret.copyFrom(m);
	return ret;
}

Kayac.M34.setMul = function (out, a, b) {
	var m0 = (a.m00 * b.m00) + (a.m01 * b.m10) + (a.m02 * b.m20);
	var m1 = (a.m00 * b.m01) + (a.m01 * b.m11) + (a.m02 * b.m21);
	var m2 = (a.m00 * b.m02) + (a.m01 * b.m12) + (a.m02 * b.m22);
	var m3 = (a.m00 * b.m03) + (a.m01 * b.m13) + (a.m02 * b.m23) + a.m03;
	out.m00 = m0;
	out.m01 = m1;
	out.m02 = m2;
	out.m03 = m3;

	var m0 = (a.m10 * b.m00) + (a.m11 * b.m10) + (a.m12 * b.m20);
	var m1 = (a.m10 * b.m01) + (a.m11 * b.m11) + (a.m12 * b.m21);
	var m2 = (a.m10 * b.m02) + (a.m11 * b.m12) + (a.m12 * b.m22);
	var m3 = (a.m10 * b.m03) + (a.m11 * b.m13) + (a.m12 * b.m23) + a.m13;
	out.m10 = m0;
	out.m11 = m1;
	out.m12 = m2;
	out.m13 = m3;

	var m0 = (a.m20 * b.m00) + (a.m21 * b.m10) + (a.m22 * b.m20);
	var m1 = (a.m20 * b.m01) + (a.m21 * b.m11) + (a.m22 * b.m21);
	var m2 = (a.m20 * b.m02) + (a.m21 * b.m12) + (a.m22 * b.m22);
	var m3 = (a.m20 * b.m03) + (a.m21 * b.m13) + (a.m22 * b.m23) + a.m23;
	out.m20 = m0;
	out.m21 = m1;
	out.m22 = m2;
	out.m23 = m3;
};

Kayac.M34.prototype.setIdentity = function () {
	this.m00 = this.m11 = this.m22 = 1;
	this.m01 = this.m02 = this.m03 = 0;
	this.m10 = this.m12 = this.m13 = 0;
	this.m20 = this.m21 = this.m23 = 0;
};

Kayac.M34.prototype.copyFrom = function (a) {
	this.m00 = a.m00;
	this.m01 = a.m01;
	this.m02 = a.m02;
	this.m03 = a.m03;

	this.m10 = a.m10;
	this.m11 = a.m11;
	this.m12 = a.m12;
	this.m13 = a.m13;

	this.m20 = a.m20;
	this.m21 = a.m21;
	this.m22 = a.m22;
	this.m23 = a.m23;
};

Kayac.M34.prototype.setM = function (m) {
	this.m00 = m.m00;
	this.m01 = m.m01;
	this.m02 = m.m02;
	this.m03 = m.m03;
	this.m10 = m.m10;
	this.m11 = m.m11;
	this.m12 = m.m12;
	this.m13 = m.m13;
	this.m20 = m.m20;
	this.m21 = m.m21;
	this.m22 = m.m22;
	this.m23 = m.m23;
};

Kayac.M34.prototype.mul = function (a) {
	Kayac.M34.setMul(this, this, a);
};

Kayac.M34.prototype.setMul = function (a, b) {
	Kayac.M34.setMul(this, a, b);
};

Kayac.M34.prototype.setQ = function (q) {
	var xx = q.x * q.x;
	var yy = q.y * q.y;
	var zz = q.z * q.z;
	var xy = q.x * q.y;
	var yz = q.y * q.z;
	var zx = q.z * q.x;
	var xw = q.x * q.w;
	var yw = q.y * q.w;
	var zw = q.z * q.w;

	this.m00 = 1 - (2 * (yy + zz));
	this.m01 = 2 * (xy - zw);
	this.m02 = 2 * (zx + yw);

	this.m10 = 2 * (xy + zw);
	this.m11 = 1 - (2 * (xx + zz));
	this.m12 = 2 * (yz - xw);

	this.m20 = 2 * (zx - yw);
	this.m21 = 2 * (yz + xw);
	this.m22 = 1 - (2 * (xx + yy));

	this.m03 = this.m13 = this.m23 = 0;
};

// 前から移動を乗算
Kayac.M34.prototype.preMultiplyTranslation = function (t) {
	this.m03 += t.x;
	this.m13 += t.y;
	this.m23 += t.z;
};

// 後ろから移動を乗算
Kayac.M34.prototype.postMultiplyTranslation = function (t) {
	this.m03 += (this.m00 * t.x) + (this.m01 * t.y) + (this.m02 * t.z);
	this.m13 += (this.m10 * t.x) + (this.m11 * t.y) + (this.m12 * t.z);
	this.m23 += (this.m20 * t.x) + (this.m21 * t.y) + (this.m22 * t.z);
};

// 前から拡縮を乗算
Kayac.M34.prototype.preMultiplyScale = function (v) {
	this.m00 *= v.x;
	this.m01 *= v.x;
	this.m02 *= v.x;
	this.m03 *= v.x;

	this.m10 *= v.y;
	this.m11 *= v.y;
	this.m12 *= v.y;
	this.m13 *= v.y;

	this.m20 *= v.z;
	this.m21 *= v.z;
	this.m22 *= v.z;
	this.m23 *= v.z;
};

// 後ろから拡縮を乗算
Kayac.M34.prototype.postMultiplyScale = function (v) {
	this.m00 *= v.x;
	this.m01 *= v.y;
	this.m02 *= v.z;

	this.m10 *= v.x;
	this.m11 *= v.y;
	this.m12 *= v.z;

	this.m20 *= v.x;
	this.m21 *= v.y;
	this.m22 *= v.z;
};

//M44
Kayac.M44 = function () {
};

Kayac.M44.setMul44x34 = function (out44, m44, m34) {
	var m0 = (m44.m00 * m34.m00) + (m44.m01 * m34.m10) + (m44.m02 * m34.m20);
	var m1 = (m44.m00 * m34.m01) + (m44.m01 * m34.m11) + (m44.m02 * m34.m21);
	var m2 = (m44.m00 * m34.m02) + (m44.m01 * m34.m12) + (m44.m02 * m34.m22);
	var m3 = (m44.m00 * m34.m03) + (m44.m01 * m34.m13) + (m44.m02 * m34.m23) + m44.m03;
	out44.m00 = m0;
	out44.m01 = m1;
	out44.m02 = m2;
	out44.m03 = m3;

	m0 = (m44.m10 * m34.m00) + (m44.m11 * m34.m10) + (m44.m12 * m34.m20);
	m1 = (m44.m10 * m34.m01) + (m44.m11 * m34.m11) + (m44.m12 * m34.m21);
	m2 = (m44.m10 * m34.m02) + (m44.m11 * m34.m12) + (m44.m12 * m34.m22);
	m3 = (m44.m10 * m34.m03) + (m44.m11 * m34.m13) + (m44.m12 * m34.m23) + m44.m13;
	out44.m10 = m0;
	out44.m11 = m1;
	out44.m12 = m2;
	out44.m13 = m3;

	m0 = (m44.m20 * m34.m00) + (m44.m21 * m34.m10) + (m44.m22 * m34.m20);
	m1 = (m44.m20 * m34.m01) + (m44.m21 * m34.m11) + (m44.m22 * m34.m21);
	m2 = (m44.m20 * m34.m02) + (m44.m21 * m34.m12) + (m44.m22 * m34.m22);
	m3 = (m44.m20 * m34.m03) + (m44.m21 * m34.m13) + (m44.m22 * m34.m23) + m44.m23;
	out44.m20 = m0;
	out44.m21 = m1;
	out44.m22 = m2;
	out44.m23 = m3;

	m0 = (m44.m30 * m34.m00) + (m44.m31 * m34.m10) + (m44.m32 * m34.m20);
	m1 = (m44.m30 * m34.m01) + (m44.m31 * m34.m11) + (m44.m32 * m34.m21);
	m2 = (m44.m30 * m34.m02) + (m44.m31 * m34.m12) + (m44.m32 * m34.m22);
	m3 = (m44.m30 * m34.m03) + (m44.m31 * m34.m13) + (m44.m32 * m34.m23) + m44.m33;
	out44.m30 = m0;
	out44.m31 = m1;
	out44.m32 = m2;
	out44.m33 = m3;
};

Kayac.M44.prototype.setMul44x34 = function (m44, m34) {
	Kayac.M44.setMul44x34(this, m44, m34);
};

Kayac.M44.prototype.mul34 = function (m34) {
	Kayac.M44.setMul44x34(this, this, m34);
};

Kayac.M44.prototype.setM = function (m) {
	this.m00 = m.m00;
	this.m01 = m.m01;
	this.m02 = m.m02;
	this.m03 = m.m03;
	this.m10 = m.m10;
	this.m11 = m.m11;
	this.m12 = m.m12;
	this.m13 = m.m13;
	this.m20 = m.m20;
	this.m21 = m.m21;
	this.m22 = m.m22;
	this.m23 = m.m23;
	this.m30 = m.m30;
	this.m31 = m.m31;
	this.m32 = m.m32;
	this.m33 = m.m33;
};

Kayac.M44.prototype.setProjectionView = function (fieldOfViewY, aspect, nearZ, farZ, view) {
	var m11 = 1 / Math.tan(fieldOfViewY * 0.5);
	var m00 = m11 / aspect;
	this.m00 = m00 * view.m00;
	this.m01 = m00 * view.m01;
	this.m02 = m00 * view.m02;
	this.m03 = m00 * view.m03;

	this.m10 = m11 * view.m10;
	this.m11 = m11 * view.m11;
	this.m12 = m11 * view.m12;
	this.m13 = m11 * view.m13;

	var m22 = farZ / (farZ - nearZ);
	var m23 = -m22 * nearZ;

	this.m20 = m22 * view.m20;
	this.m21 = m22 * view.m21;
	this.m22 = m22 * view.m22;
	this.m23 = (m22 * view.m23) + m23;

	this.m30 = view.m20;
	this.m31 = view.m21;
	this.m32 = view.m22;
	this.m33 = view.m23;
};

Kayac.M44.multiplyPoint = function (vOut, m, v) {
	var tx = (m.m00 * v.x) + (m.m01 * v.y) + (m.m02 * v.z) + m.m03;
	var ty = (m.m10 * v.x) + (m.m11 * v.y) + (m.m12 * v.z) + m.m13;
	var tz = (m.m20 * v.x) + (m.m21 * v.y) + (m.m22 * v.z) + m.m23;
	var w = (m.m30 * v.x) + (m.m31 * v.y) + (m.m32 * v.z) + m.m33;

	var rcpW = 1 / w;
	vOut.x = tx * rcpW;
	vOut.y = ty * rcpW;
	vOut.z = tz * rcpW;
};

//その他関数

//a2*x^2 + a1*x^1 + a0 = 0を解く。
//解があれば小さな順に並べた2要素配列を返し、
//解がなければ、nullを返す。
Kayac.solveQuadratic = function (a2, a1, a0) {
	//倍精度なので小細工はせず、解の公式をそのままつっこむ
	if (a2 === 0) { //2次項0
		if (a1 === 0) { //1次項0。解けないか不定。
			return null;
		} else {
			var x = -a0 / a1;
			return [x, x]; //便宜のために2要素にして返す。
		}
	}
	var d = (a1 * a1) - (4 * a2 * a0);
	if (d < 0) {
		return null;
	}
	d = Math.sqrt(d);
	var x = [];
	x[0] = (-a1 - d) / (2 * a2);
	x[1] = (-a1 + d) / (2 * a2);
	return x;
};

//x^2 + a1*x^1 + a0 = 0を解く。2次の係数が1限定。
//解があれば小さな順に並べた2要素配列を返し、
//解がなければ、nullを返す。
Kayac.solveQuadraticSq1 = function (a1, a0) {
	//倍精度なので小細工はせず、解の公式をそのままつっこむ
	var d = (a1 * a1) - (4 * a0);
	if (d < 0) {
		return null;
	}
	d = Math.sqrt(d);
	var x = [];
	x[0] = (-a1 - d) * 0.5;
	x[1] = (-a1 + d) * 0.5;
	return x;
};

// 連立方程式mx=vを解いて、xを求める。軸選択を行わない。途中で対角に0が現れたら詰む。m、b共に変更され、答えはvに入る。
// mはm[(row * N) + column]でアクセスする1次元配列で行列を表現する
Kayac.solveLinearSystem = function (m, v, n) {
	for (var i = 0; i < n; ++i) {
		var rcpPivot = 1 / m[(i * n) + i];
		for (var j = i + 1; j < 4; ++j) {
			var coeff = m[(j * n) + i] * rcpPivot;
			for (var k = 0; k < 4; ++k) {
				m[(j * n) + k] -= m[(i * n) + k] * coeff;
			}
			v[j] -= v[i] * coeff;
		}
	}

	for (var i = 3; i >= 0; --i) {
		var t = 1 / m[(i * n) + i];
		m[(i * n) + i] *= t;
		v[i] *= t;
		for (var j = 0; j < i; ++j) {
			v[j] -= v[i] * m[(j * n) + i];
			m[(j * n) + i] = 0;
		}
	}
};

Kayac.evaluatePolynominal = function (a, x) {
	var r = 0;
	for (var i = (a.length - 1); i >= 0; --i) {
		r *= x;
		r += a[i];
	}
	return r;
};

//Gpuクラス: 要するにGLを楽に使うためのラッパー
//コンストラクタ
//arg.canvas: 描くキャンバスか、そのid
Kayac.Gpu = function (arg) {
	//メンバ変数
	this.mGl = null; //WebGlRenderingContext
	this.mShader = null; //現在設定中のシェーダ
	this.mVertexBuffer = null; //現在設定中の頂点バッファ
	this.mIndexBuffer = null; //現在設定中のインデクスバッファ
	this.mVertexFormat = null; //現在設定中の頂点フォーマット
	this.mTextureMap = {}; //シェーダ内の名前とテクスチャオブジェクトの対応表
	this.mDefaultTexture = null; //テクスチャなしで描画された時に自動で使う1x1の白テクスチャ
	this.mFullScreenVertexBuffer = null; //全画面描画用頂点バッファ
	this.mFullScreenVertexBufferFlipV = null; //全画面描画用頂点バッファ(V逆)
	this.mFullScreenVertexFormat = null; //全画面描画用頂点フォーマット
	//以下処理
	var canvas = arg.canvas;
	if ((typeof canvas) === 'string') { //文字列なら引くよ
		canvas = document.getElementById(canvas);
	}
	var attributes = {
		antialias: true,
		depth: true,
		preserveDrawingBuffer: true,  // TODO: 最終的に画像保存しないなら消せ
		alpha: false
	};
	var gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl'); //後ろはIE用
	this.mGl = gl;
	//デフォルトテクスチャ生成
	var texData = new Uint8Array(4);
	texData[0] = texData[1] = texData[2] = texData[3] = 255;
	var texArg = {
		gpu: this,
		width: 1,
		height: 1,
		data: texData,
		name: 'defaultTexture'
	};
	this.mDefaultTexture = new Kayac.Texture(texArg);
	//drawFullScreen用のデータ用意
	var vbData = new Float32Array(3 * 4); //3頂点4スカラ
	Kayac.copyArray(vbData, 0, [-1, 3, 0, -1], 0, 4); //左上
	Kayac.copyArray(vbData, 4, [-1, -1, 0, 1], 0, 4); //左下
	Kayac.copyArray(vbData, 8, [3, -1, 2, 1], 0, 4); //右下
	this.mFullScreenVertexBuffer = new Kayac.VertexBuffer({
		gpu: this,
		name: 'fullScreenVb',
		data: vbData
	});

	Kayac.copyArray(vbData, 0, [-1, 3, 0, 2], 0, 4); //左上
	Kayac.copyArray(vbData, 4, [-1, -1, 0, 0], 0, 4); //左下
	Kayac.copyArray(vbData, 8, [3, -1, 2, 0], 0, 4); //右下
	this.mFullScreenVertexBufferFlipV = new Kayac.VertexBuffer({
		gpu: this,
		name: 'fullScreenVbFlipV',
		data: vbData
	});
	var ibData = new Uint16Array(3);
	ibData[0] = 0;
	ibData[1] = 1;
	ibData[2] = 2;
	this.mFullScreenIndexBuffer = new Kayac.IndexBuffer({
		gpu: this,
		name: 'fullScreenIb',
		data: ibData
	});

	this.mFullScreenVertexFormat = {
		stride: 16,
		elements: [
			{ offset: 0, vectorDimension: 2, name: 'aPosition' },
			{ offset: 8, vectorDimension: 2, name: 'aTexCoord' }]
	};

	//初期設定
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	gl.clearColor(1, 1, 1, 1);
	gl.clearDepth(1);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.cullFace(gl.FRONT); // TODO: 場合によっては必要になるかも。真面目に考えてない。

	//エラーチェック
	var e = gl.getError();
	if (e !== gl.NO_ERROR) {
		throw 'GL Error: ' + e;
	}
};

Kayac.Gpu.Primitive = {
	Triangle: 0,
	Point: 1,
	Line: 2
};

Kayac.Gpu.prototype.getGl = function () {
	return this.mGl;
};

Kayac.Gpu.prototype.renderingWidth = function () {
	return this.mGl.drawingBufferWidth;
};

Kayac.Gpu.prototype.renderingHeight = function () {
	return this.mGl.drawingBufferHeight;
};

//クリアする。指定する色は0から1
//clear([0.2, 0.3, 0.4, 0.5]); アルファを省略すれば1
//clear(0.2, 0.3, 0.4, 0.5); //アルファを省略すれば1
//clear(); //透明な黒でクリア。アルファ0に注意！
Kayac.Gpu.prototype.clear = function (rOrArray, g, b, a) {
	var cr = 0;
	var cg = 0;
	var cb = 0;
	var ca = 0;
	if ((typeof rOrArray) !== 'undefined') { //引数がある
		if (rOrArray.length) { //色が配列で来た
			var c = rOrArray;
			cr = c[0];
			cg = c[1];
			cb = c[2];
			if (c.length >= 4) {
				ca = c[3];
			} else {
				ca = 1;
			} //RGBだけ入れてアルファを入れない時もあるのでアルファのデフォルトは1とする。
		} else { //要素別
			ca = 1; //RGBだけ入れてアルファを入れない時もあるのでアルファのデフォルトは1とする。
			cr = rOrArray;
			if ((typeof g) !== 'undefined') {
				cg = g;
			}
			if ((typeof b) !== 'undefined') {
				cb = b;
			}
			if ((typeof a) !== 'undefined') {
				ca = a;
			}
		}
	}
	var gl = this.mGl;
	//webGLでは前乗算されている前提らしいので、乗じてやる。
	//TODO:最終的にトーンマッピング段でやる方がいい。塗り残しに2重にかかってしまう。
	cr *= ca;
	cg *= ca;
	cb *= ca;
	gl.clearColor(cr, cg, cb, ca);
	gl.clearDepth(1);
	this.setDepthTest(true, true); // maskがfalseだとclearも動かなくなる
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	//クリアなんて頻繁にやらないだろうから、このタイミングでエラーチェックとコマンドのフラッシュを行う
	gl.flush();
	var e = gl.getError();
	if (e !== gl.NO_ERROR) {
		throw 'GL Error: ' + e;
	}
};

Kayac.Gpu.prototype.setShader = function (shader) {
	if (this.mShader !== shader) {
		this.mShader = shader;
		//シェーダセット
		var program = this.mShader.getGlObject();
		this.mGl.useProgram(program);
	}
};

Kayac.Gpu.prototype.setTexture = function (name, texture) {
	if (!texture) {
		this.mTextureMap[name] = this.mDefaultTexture;
	} else {
		this.mTextureMap[name] = texture;
	}
};

Kayac.Gpu.prototype.setRenderTarget = function (renderTarget) {
	var gl = this.mGl;
	if (!renderTarget) {
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	} else {
		gl.bindFramebuffer(gl.FRAMEBUFFER, renderTarget.getGlObject());
		var tex = renderTarget.colorBuffer;
		gl.viewport(
			0,
			0,
			tex.width,
			tex.height);
	}
};
Kayac.Gpu.prototype.setBlendEnabled = function (enabled) {
	var gl = this.mGl;
	if (enabled === true) {
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	} else if (enabled === false) {
		gl.disable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ZERO);
	} else {
		throw 'Gpu.setBlendEnabled invalid arg: ' + enabled;
	}
};
Kayac.Gpu.prototype.setDepthTest = function (test, write) {
	var gl = this.mGl;
	if (test === true) {
		gl.enable(gl.DEPTH_TEST);
		gl.depthFunc(gl.LEQUAL);
		if (write === true) {
			gl.depthMask(true);
		} else if (write === false) {
			gl.depthMask(false);
		} else {
			throw 'Gpu.setDepthTest invalid arg: write=' + write;
		}
	} else if (test === false) {
		if (write === true) {
			gl.enable(gl.DEPTH_TEST);
			gl.depthFunc(gl.ALWAYS);
		} else if (write === false) {
			gl.disable(gl.DEPTH_TEST);
		} else {
			throw 'Gpu.setDepthTest invalid arg: write=' + write;
		}
	} else {
		throw 'Gpu.setDepthWriteEnabled invalid arg: test=' + test;
	}
};
Kayac.Gpu.prototype.setFaceCullingEnabled = function (enabled) {
	var gl = this.mGl;
	if (enabled === true) {
		gl.enable(gl.CULL_FACE);
	} else if (enabled === false) {
		gl.disable(gl.CULL_FACE);
	} else {
		throw 'Gpu.setBlendEnabled invalid arg: ' + enabled;
	}
}

//VertexFormatの構造は例えばこんな感じ
//var fmt = {
//   stride:16
//   elements:[
//      {name:'aPosition', offset:0, vectorDimension:2},
//      {name:'aTexCoord', offset:8, vectorDimension:2}};
Kayac.Gpu.prototype.setVertexFormat = function (format) {
	this.mVertexFormat = format;
};

Kayac.Gpu.prototype.setVertexBuffer = function (vb) {
	this.mVertexBuffer = vb;
};

Kayac.Gpu.prototype.setIndexBuffer = function (ib) {
	this.mIndexBuffer = ib;
};

Kayac.Gpu.prototype.draw = function (vertexCount, primitiveType, startVertexIndex) {
	if (!(this.mShader)) {
		throw 'Gpu.draw(): call setShader().';
	}
	if (!(this.mVertexFormat)) {
		throw 'Gpu.draw(): call setVertexFormat().';
	}
	if (!(this.mVertexBuffer)) {
		throw 'Gpu.draw(): call setVertexBuffer().';
	}
	if (!(this.mIndexBuffer)) {
		throw 'Gpu.draw(): call setIndexBuffer().';
	}
	var gl = this.mGl;
	var program = this.mShader.getGlObject();

	//テクスチャセット
	var unitNames = [
		gl.TEXTURE0,
		gl.TEXTURE1,
		gl.TEXTURE2,
		gl.TEXTURE3,
		gl.TEXTURE4,
		gl.TEXTURE5,
		gl.TEXTURE6,
		gl.TEXTURE7];
	var uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	var i = 0;
	var unitIndex = 0;
	var defaultTex = this.mDefaultTexture.getGlObject();
	//全部一旦デフォルトセット
	while ((i < uniformCount) && (unitIndex < 8)) {
		var u = gl.getActiveUniform(program, i);
		if (u.type === gl.SAMPLER_2D) {
			gl.activeTexture(unitNames[unitIndex]);
			gl.bindTexture(gl.TEXTURE_2D, defaultTex);
			unitIndex += 1;
		}
		i += 1;
	}
	//ユーザが差したものセット
	unitIndex = 0;
	for (var name in this.mTextureMap) {
		if (this.mTextureMap.hasOwnProperty(name)) {
			var tex = this.mTextureMap[name];
			gl.activeTexture(unitNames[unitIndex]);
			gl.bindTexture(gl.TEXTURE_2D, tex.getGlObject());
			var loc = gl.getUniformLocation(program, name);
			if (loc !== null) {
				gl.uniform1i(loc, unitIndex);
				unitIndex += 1;
				if (unitIndex >= 8) {
					break;
				}
			}
		}
	}
	//頂点バッファ
	gl.bindBuffer(gl.ARRAY_BUFFER, this.mVertexBuffer.getGlObject());
	//インデクスバッファ
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mIndexBuffer.getGlObject());
	//頂点フォーマット
	//一旦全部無効化。TODO:必要なのこれ？
	var attribCount = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
	for (i = 0; i < attribCount; i += 1) {
		gl.disableVertexAttribArray(i);
	}
	attribCount = this.mVertexFormat.elements.length;
	var stride = this.mVertexFormat.stride;
	for (i = 0; i < attribCount; i += 1) {
		var e = this.mVertexFormat.elements[i];
		var loc = gl.getAttribLocation(program, e.name);
		if (loc >= 0) {
			gl.enableVertexAttribArray(loc);
			gl.vertexAttribPointer(loc, e.vectorDimension, gl.FLOAT, 0, stride, e.offset);
		}
	}
	//描画キック
	primitiveType = primitiveType || Kayac.Gpu.Primitive.Triangle; //undefinedなら0
	var prims = [
		gl.TRIANGLES,
		gl.POINTS,
		gl.LINES];
	var start = startVertexIndex || 0;
	gl.drawElements(prims[primitiveType], vertexCount, gl.UNSIGNED_SHORT, start * 2);
};

Kayac.Gpu.prototype.drawFullScreen = function (readsRenderTexture) {
	//今刺さってるものを覚えておいて後で復帰
	var vbBack = this.mVertexBuffer;
	var vfBack = this.mVertexFormat;
	if (readsRenderTexture) {
		this.setVertexBuffer(this.mFullScreenVertexBufferFlipV);
	} else {
		this.setVertexBuffer(this.mFullScreenVertexBuffer);
	}
	this.setIndexBuffer(this.mFullScreenIndexBuffer);
	this.setVertexFormat(this.mFullScreenVertexFormat);
	this.draw(3);
	this.setVertexBuffer(vbBack);
	this.setVertexFormat(vfBack);
};

Kayac.Gpu.prototype.setConstant = function (name, value) {
	if (!this.mShader) {
		throw 'Gpu.setConstant: call setShader().';
	}
	var gl = this.mGl;
	var l = gl.getUniformLocation(this.mShader.getGlObject(), name);
	if (l) {
		if (value.length) {
			var c = value.length;
			if (c >= 3) { //3以上
				if (c >= 4) { //4
					gl.uniform4f(l, value[0], value[1], value[2], value[3]);
				} else { //3
					gl.uniform3f(l, value[0], value[1], value[2]);
				}
			} else {
				if (c == 2) { //2
					gl.uniform2fv(l, value[0], value[1]);
				} else { //1
					gl.uniform1fv(l, value[0]);
				}
			}
		} else {
			gl.uniform1f(l, value);
		}
	}
};

//RenderTarget
Kayac.RenderTarget = function (arg) {
	//メンバ変数
	this.name = arg.name || '';
	this.colorBuffer = arg.colorBuffer;

	this.mGlObject = null;
	this.mGl = arg.gpu.getGl();
	//以下処理
	var gl = this.mGl; //たくさん使うので短く
	if (!gl) { //gpu先に初期化しろよ
		throw 'Kayac.Texture() : Gpuクラスを渡してね！';
	}
	this.mGlObject = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.mGlObject);
	var tex = this.colorBuffer.getGlObject();
	gl.framebufferTexture2D(
		gl.FRAMEBUFFER,
		gl.COLOR_ATTACHMENT0,
		gl.TEXTURE_2D,
		tex,
		0);
	var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
	if (status !== gl.FRAMEBUFFER_COMPLETE) {
		throw 'Kayac.RenderTarget() : framebuffer incomplete.';
	}
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};

Kayac.RenderTarget.prototype.getGlObject = function () {
	return this.mGlObject;
};

//Textureクラス
//コンストラクタ
Kayac.Texture = function (arg) {
	//メンバ変数
	this.name = arg.name || ''; //名前。主にデバグ用。
	if ((Kayac.isPowerOf2(arg.width) === false) || (Kayac.isPowerOf2(arg.height) === false)) {
		throw 'Kayac.Texture() : サイズは2の累乗にしてね！'
	}
	this.width = arg.width;
	this.height = arg.height;

	this.mGlObject = null; //GLハンドル
	this.mGl = arg.gpu.getGl();
	//以下処理
	var gl = this.mGl; //たくさん使うので短く
	if (!gl) { //gpu先に初期化しろよ
		throw 'Kayac.Texture() : Gpuクラスを渡してね！';
	}
	var img = arg.img; //画像指定あればそこから作るよ
	if ((typeof img) === 'string') {  //文字列ならidとみなして引く
		img = document.getElementById(img);
	}
	this.mGlObject = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, this.mGlObject);
	if (img) {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
		this.width = img.width;
		this.height = img.height;
	} else if (arg.data) {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, arg.width, arg.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, arg.data);
	} else {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, arg.width, arg.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	}
	var minFilter;
	var magFilter;
	if (arg.mipmap === true) {
		gl.generateMipmap(gl.TEXTURE_2D);
		if (arg.pointSampling === true) {
			minFilter = gl.NEAREST_MIPMAP_NEAREST;
			magFilter = gl.NEAREST;
		} else {
			minFilter = gl.LINEAR_MIPMAP_LINEAR;
			magFilter = gl.LINEAR;
		}
	} else {
		if (arg.pointSampling === true) {
			magFilter = minFilter = gl.NEAREST;
		} else {
			magFilter = minFilter = gl.LINEAR;
		}
	}
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

	//エラーチェック
	var e = gl.getError();
	if (e !== gl.NO_ERROR) {
		throw 'GL Error: ' + e;
		return null;
	}
};

Kayac.Texture.prototype.update = function (data) {
	var gl = this.mGl; //たくさん使うので短く
	gl.bindTexture(gl.TEXTURE_2D, this.mGlObject);
	gl.texSubImage2D(
		gl.TEXTURE_2D,  //target
		0, //level
		0, //xoffset
		0, //yoffset
		this.width,
		this.height,
		gl.RGBA, //format
		gl.UNSIGNED_BYTE, //type
		data); //pixels
};

Kayac.Texture.prototype.getGlObject = function () {
	return this.mGlObject;
};

//VertexBufferクラス
Kayac.VertexBuffer = function (arg) {
	//メンバ変数
	this.mGlObject = null;
	this.mName = arg.name || ''; //名前。主にデバグ用。
	this.mSize = 0; //バイト数
	this.mGl = arg.gpu.getGl();

	//処理本体
	var gl = this.mGl; //たくさん使うので短く
	if (!gl) { //gpu先に初期化しろよ
		throw 'Kayac.VertexBuffer() Gpuクラスを渡してね！';
	}
	this.mGlObject = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.mGlObject);
	if (arg.data) {
		if (arg.size) {
			throw 'Kayac.VertexBuffer() : 引数不正。dataとsizeはどちらかにして。';
		}
		gl.bufferData(gl.ARRAY_BUFFER, arg.data, gl.STATIC_DRAW);
		if (arg.data.byteLength) { //TypedArray
			this.mSize = arg.data.byteLength;
		} else { //ArrayBuffer
			this.mSize = arg.data.length;
		}
	} else if (arg.size) { //空で作ったらDynamic扱い
		gl.bufferData(gl.ARRAY_BUFFER, arg.size, gl.DYNAMIC_DRAW);
		this.mSize = arg.size;
	} else {
		throw 'VertexBuffer() : invalid arg. data or size is mandatory.';
	}
	//エラーチェック
	var e = gl.getError();
	if (e !== gl.NO_ERROR) {
		throw 'GL Error: ' + e;
	}
};

Kayac.VertexBuffer.prototype.update = function (data) {
	var gl = this.mGl;
	gl.bindBuffer(gl.ARRAY_BUFFER, this.mGlObject);
	gl.bufferSubData(gl.ARRAY_BUFFER, 0, data);
};

Kayac.VertexBuffer.prototype.getGlObject = function () {
	return this.mGlObject;
};

//IndexBufferクラス
Kayac.IndexBuffer = function (arg) {
	//メンバ変数
	this.mGlObject = null;
	this.mName = arg.name || ''; //名前。主にデバグ用。
	this.mCount = 0; //頂点数
	this.mGl = arg.gpu.getGl();

	//処理本体
	var gl = this.mGl; //たくさん使うので短く
	if (!gl) { //gpu先に初期化しろよ
		throw 'Kayac.VertexBuffer() Gpuクラスを渡してね！';
	}
	this.mGlObject = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mGlObject);
	if (arg.data) {
		if ((arg.data instanceof Uint16Array) === false) {
			throw 'Kayac.IndexBuffer() : 引数不正。dataはUint16Arrayだけにして';
		}
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arg.data, gl.STATIC_DRAW);
		this.mCount = arg.data.length;
	} else if (arg.count) { //空で作ったらDynamic扱い
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arg.count * 2, gl.DYNAMIC_DRAW);
		this.mCount = arg.count;
	} else {
		throw 'IndexBuffer() : invalid arg. data or count is mandatory.';
	}
	//エラーチェック
	var e = gl.getError();
	if (e !== gl.NO_ERROR) {
		throw 'GL Error: ' + e;
	}
};

Kayac.IndexBuffer.prototype.update = function (data) {
	var gl = this.mGl;
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mGlObject);
	gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, data);
};

Kayac.IndexBuffer.prototype.getGlObject = function () {
	return this.mGlObject;
};

//Shaderクラス。programを保持。頂点とフラグメントをセットにして生成する。
Kayac.Shader = function (arg) {
	//メンバ変数
	this.mGlObject = null; //program
	this.mGl = arg.gpu.getGl();
	this.mName = arg.name || 'unnamed shader';
	//処理本体
	var gl = this.mGl;
	var vsElement = document.getElementById(arg.vertexShaderId);
	var fsElement = document.getElementById(arg.fragmentShaderId);
	var vsSrc = Kayac.concatenateTextInElement(vsElement);
	var fsSrc = Kayac.concatenateTextInElement(fsElement);
	var vs = gl.createShader(gl.VERTEX_SHADER);
	var fs = gl.createShader(gl.FRAGMENT_SHADER);
	var msg;
	gl.shaderSource(vs, vsSrc);
	gl.compileShader(vs);
	msg = gl.getShaderInfoLog(vs);
	if (msg.length > 0) {
		throw msg;
	}
	gl.shaderSource(fs, fsSrc);
	gl.compileShader(fs);
	msg = gl.getShaderInfoLog(fs);
	if (msg.length > 0) {
		throw msg;
	}
	this.mGlObject = gl.createProgram();
	gl.attachShader(this.mGlObject, vs);
	gl.attachShader(this.mGlObject, fs);
	gl.linkProgram(this.mGlObject);
	gl.validateProgram(this.mGlObject);
	msg = gl.getProgramInfoLog(this.mGlObject); if (msg.length > 0) {
		throw msg;
	}
};

Kayac.Shader.prototype.getGlObject = function () {
	return this.mGlObject;
};

// Mesh
Kayac.Mesh = function (shader, vertexFormat, name) {
	this.name = name || 'unnamed mesh';
	this.mVertexBuffer = null;
	this.mIndexBuffer = null;
	this.mShader = shader;
	this.mVertexFormat = vertexFormat;
	this.mVertexCount = 0;
};

Kayac.Mesh.prototype.setCylinder = function (gpu, hDiv, vDiv, yMin, yMax, topFace, bottomFace) {
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
Kayac.Mesh.generateVertexFormat = function () {
	var ret = {
		stride: 8,
		elements: [
			{ offset: 0, vectorDimension: 2, name: 'aCoord' },
		]
	};
	return ret;
};
Kayac.Mesh.prototype.setVertex = function (
	data,
	index,
	coord) {

	var offset = index * this.mVertexFormat.stride / 4;
	Kayac.copyArray(data, offset + 0, coord, 0, 2);
};
Kayac.Mesh.prototype.draw = function (
	gpu,
	pvwMatrix,
	wMatrix,
	wMatrixInvTransposed,
	albedo,
	emission,
	polynominal,
	lightVector,
	fresnel0) {

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

	gpu.draw(this.mVertexCount, Kayac.Gpu.Primitive.Triangle, 0);
};

// Camera3d
Kayac.Camera3d = function () {
	this.fieldOfViewY = Math.PI / 3; //初期値60度
	this.aspect = 1;
	this.position = [0, 0, 0]; //原点配置
	this.rotation = new Kayac.Q();
	this.rotation.setXyzw(0, 0, 0, 1);
	this.nearClip = 1;
	this.farClip = 1000;
};

Kayac.Camera3d.prototype.getMatrix = function () {
	var view = new Kayac.M34();
	var invR = new Kayac.Q();
	invR.setQ(this.rotation);
	invR.invert();
	view.setQ(invR); // まず回転行列設定
	var invT = new Kayac.V3();
	invT.setA(this.position);
	invT.neg();
	view.postMultiplyTranslation(invT); // 後ろから逆移動を乗算

	var ret = new Kayac.M44();
	ret.setProjectionView(this.fieldOfViewY, this.aspect, this.nearClip, this.farClip, view);
	return ret;
};

// Camera2d
Kayac.Camera2d = function () {
	this.aspect = 1;
	this.position = [0, 0]; //原点配置
	this.rotation = 0;
	this.projectionScale = [1, 1];
};
Kayac.Camera2d.prototype.setProjection = function (width, height) {
	this.projectionScale = [2.0 / width, -2.0 / height];
};

//M23を返す
Kayac.Camera2d.prototype.getMatrix = function () {
	var ret = new Kayac.M23();
	ret.setRotation(-this.rotation); // 逆回転
	var invT = new Kayac.V2();
	invT.setA(this.position);
	invT.neg();
	ret.postMultiplyTranslation(invT); // 後ろから逆移動を乗算
	var scale = new Kayac.V2();
	scale.setA(this.projectionScale);
	ret.preMultiplyScale(scale); // 前から拡縮を乗算
	return ret;
};

// Sprite
Kayac.Sprite = function () {
	this.name = 'unnamed sprite';
	this.size = [1, 1];
	this.texture = null;
	this.texcoordOffset = [0, 0];
	this.texcoordSize = [1, 1];
};

// SpringDamper
Kayac.SpringDamper = function () {
	this.value = 0;
	this.goal = 0;
	this.velocity = 0;
	this.stiffness = 0;
	this.damping = 0;
	this.isAngle = false;
};
Kayac.SpringDamper.prototype.setData = function (data, preserveValue) {
	if (!preserveValue) {
		this.value = data.start;
	}
	if (data.isAngle) {
		this.isAngle = true;
	}
	this.velocity = data.velocity;
	this.goal = data.goal;
	this.stiffness = data.stiffness;
	this.damping = data.damping;
};
Kayac.SpringDamper.prototype.update = function (dt) {
	if (this.isAngle) {
		this.value = Kayac.normalizeRadian(this.value);
		this.goal = Kayac.normalizeRadian(this.goal);
	}
	var d = this.goal - this.value;
	var a = (d * this.stiffness) - (this.velocity * this.damping);
	this.velocity += a * dt;
	this.value += this.velocity * dt;
};
Kayac.SpringDamper.prototype.converge = function () {
	this.velocity = 0;
	this.value = this.goal;
};

// SpringDamper2
Kayac.SpringDamper2 = function () {
	this.value = Kayac.V2.createXy(0, 0);
	this.goal = Kayac.V2.createXy(0, 0);
	this.velocity = Kayac.V2.createXy(0, 0);
	this.stiffness = 0;
	this.damping = 0;
};
Kayac.SpringDamper2.prototype.setData = function (data) {
	this.value.setA(data.start);
	this.goal.setA(data.goal);
	this.velocity.setA(data.velocity);
	this.stiffness = data.stiffness;
	this.damping = data.damping;
};
Kayac.SpringDamper2.prototype.update = function (dt) {
	var dx = this.goal.x - this.value.x;
	var dy = this.goal.y - this.value.y;
	var ax = (dx * this.stiffness) - (this.velocity.x * this.damping);
	var ay = (dy * this.stiffness) - (this.velocity.y * this.damping);
	this.velocity.x += ax * dt;
	this.velocity.y += ay * dt;
	this.value.x += this.velocity.x * dt;
	this.value.y += this.velocity.y * dt;
};
Kayac.SpringDamper2.prototype.converge = function () {
	this.velocity.setxy(0, 0);
	this.value.setV(this.goal);
};

// SpriteAnimator
Kayac.SpriteAnimator = function () {
	this.position = null;
	this.rotation = null;
	this.scale = null;
	this.opacity = null;
};
Kayac.SpriteAnimator.prototype.setAnimation = function (animation) {
	var data = animation.position;
	if (data) {
		this.position = new Kayac.SpringDamper2();
		this.position.setData(data);
	}
	data = animation.scale;
	if (data) {
		this.scale = new Kayac.SpringDamper2();
		this.scale.setData(data);
	}
	data = animation.opacity;
	if (data) {
		this.opacity = new Kayac.SpringDamper();
		this.opacity.setData(data);
	}
};
Kayac.SpriteAnimator.prototype.update = function (deltaTime) {
	if (this.position !== null) {
		this.position.update(deltaTime);
	}
	if (this.scale !== null) {
		this.scale.update(deltaTime);
	}
	if (this.opacity !== null) {
		this.opacity.update(deltaTime);
	}
};
Kayac.SpriteAnimator.prototype.apply = function (transform) {
	if (this.position !== null) {
		transform.position[0] = this.position.value.x;
		transform.position[1] = this.position.value.y;
	}
	if (this.scale !== null) {
		transform.scale[0] = this.scale.value.x;
		transform.scale[1] = this.scale.value.y;
	}
	if (this.opacity !== null) {
		transform.opacity = this.opacity.value;
	}
};
Kayac.SpriteAnimator.prototype.converge = function () {
	if (this.position !== null) {
		this.position.converge();
	}
	if (this.scale !== null) {
		this.scale.converge();
	}
	if (this.opacity !== null) {
		this.opacity.converge();
	}
};

// SpriteInstance
Kayac.SpriteInstance = function () {
	this.sprite = null;
	this.transform = null;
	this.originalTransform = null;
	this.animator = null;
};
Kayac.SpriteInstance.prototype.setAnimation = function (animation) {
	if (this.animator === null) {
		this.animator = new Kayac.SpriteAnimator();
		this.originalTransform = new Kayac.SpriteTransform();
		this.originalTransform.set(this.transform);
	}
	this.animator.setAnimation(animation);
};
Kayac.SpriteInstance.prototype.resetAnimation = function () {
	if (this.animator !== null) {
		this.transform.set(this.oirignalTransform);
	}
};
Kayac.SpriteInstance.prototype.updateAnimation = function (deltaTime) {
	if (this.animator !== null) {
		this.animator.update(deltaTime);
		this.animator.apply(this.transform);
	}
};
Kayac.SpriteInstance.prototype.isHit = function (p, parentWidth, parentHeight, margin) {
	var topLeft = Kayac.V2.createXy(0, 0);
	this.getTopLeft(topLeft, parentWidth, parentHeight);
	margin = margin || 0;

	var minX = topLeft.x - margin;
	if (p.x < minX) {
		return false;
	}
	var minY = topLeft.y - margin;
	if (p.y < minY) {
		return false;
	}
	var maxX = minX + (this.sprite.size[0] * this.transform.scale[0]) + margin;
	if (p.x > maxX) {
		return false;
	}
	var maxY = minY + (this.sprite.size[1] * this.transform.scale[1]) + margin;
	if (p.y > maxY) {
		return false;
	}
	return true;
};
Kayac.SpriteInstance.prototype.getTopLeft = function (topLeftOut, parentWidth, parentHeight) {
	Kayac.SpriteTransform.getTopLeft(
		topLeftOut,
		this.transform,
		this.sprite.size,
		parentWidth,
		parentHeight);
};
// SpriteRenderer
Kayac.SpriteRenderer = function (
	gpu,
	spriteCapacity,
	vertexFormat,
	shader) {

	var stride = vertexFormat.stride;
	var vertexBufferSize = spriteCapacity * 4 * stride;

	this.mInstances = [];
	this.mGpu = gpu;
	this.mShader = shader;
	this.mVertexFormat = vertexFormat;
	this.mVertexBuffer = new Kayac.VertexBuffer({ gpu: gpu, name: 'spriteRendererVb', size: vertexBufferSize });
	// インデクスバッファは最初に作って終わり
	var ibData = new Uint16Array(spriteCapacity * 6);
	for (var i = 0; i < spriteCapacity; i++) {
		ibData[(i * 6) + 0] = (i * 4) + 0;
		ibData[(i * 6) + 1] = (i * 4) + 1;
		ibData[(i * 6) + 2] = (i * 4) + 2;
		ibData[(i * 6) + 3] = (i * 4) + 3;
		ibData[(i * 6) + 4] = (i * 4) + 0;
		ibData[(i * 6) + 5] = (i * 4) + 2;
	}
	this.mIndexBuffer = new Kayac.IndexBuffer({ gpu: gpu, name: 'spriteRendererIb', data: ibData });
	this.parentWidth = 0;
	this.parentHeight = 0;
};
Kayac.SpriteRenderer.prototype.clear = function () {
	this.mInstances = [];
};
Kayac.SpriteRenderer.prototype.add = function (spriteInstance) {
	console.assert(spriteInstance);
	this.mInstances.push(spriteInstance);
};
Kayac.SpriteRenderer.prototype.updateAnimation = function (deltaTime) {
	for (var i = 0; i < this.mInstances.length; ++i) {
		this.mInstances[i].updateAnimation(deltaTime);
	}
};
Kayac.SpriteRenderer.prototype.draw = function (gpu, cameraMatrix) {
	// 全頂点バッファを生成
	var floatStride = this.mVertexFormat.stride / 4;
	var buffer = new Float32Array(this.mInstances.length * 4 * floatStride);
	var offset = 0;
	var tmpTopLeft = Kayac.V2.createXy(0, 0);
	for (var i = 0; i < this.mInstances.length; i++) {
		var instance = this.mInstances[i];
		offset = this.fillVertices(buffer, instance, offset, tmpTopLeft);
	}
	this.mVertexBuffer.update(buffer.buffer);

	// 描画 TODO: DrawCallのマージ
	gpu.setVertexBuffer(this.mVertexBuffer);
	gpu.setIndexBuffer(this.mIndexBuffer);
	gpu.setShader(this.mShader);
	gpu.setVertexFormat(this.mVertexFormat);
	gpu.setConstant('uTransform0', [cameraMatrix.m00, cameraMatrix.m01, cameraMatrix.m02]);
	gpu.setConstant('uTransform1', [cameraMatrix.m10, cameraMatrix.m11, cameraMatrix.m12]);
	for (var i = 0; i < this.mInstances.length; i++) {
		gpu.setTexture('uSampler', this.mInstances[i].sprite.texture); // あとで
		gpu.draw(6, Kayac.Gpu.Primitive.Triangle, i * 6);
	}
};
Kayac.SpriteRenderer.prototype.fillVertices = function (buffer, instance, offset, tmpTopLeft) {
	var floatStride = this.mVertexFormat.stride / 4;
	var sprite = instance.sprite;
	var transform = instance.transform;

	// 色まとめてセット TODO: そのうちRGBも入れるか?
	var alpha = transform.opacity;
	for (var i = 0; i < 4; i++) {
		buffer[offset + (i * floatStride) + 4] = 1;
		buffer[offset + (i * floatStride) + 5] = 1;
		buffer[offset + (i * floatStride) + 6] = 1;
		buffer[offset + (i * floatStride) + 7] = alpha;
	}

	console.assert(sprite && transform);
	instance.getTopLeft(tmpTopLeft, this.parentWidth, this.parentHeight);
	var u = sprite.texcoordOffset[0] + transform.texcoordOffset[0];
	var v = sprite.texcoordOffset[1] + transform.texcoordOffset[1];
	// 左下
	buffer[offset + 0] = tmpTopLeft.x;
	buffer[offset + 1] = tmpTopLeft.y + (sprite.size[1] * transform.scale[1]);
	buffer[offset + 2] = u;
	buffer[offset + 3] = v + sprite.texcoordSize[1];
	offset += floatStride;

	// 左上
	buffer[offset + 0] = tmpTopLeft.x;
	buffer[offset + 1] = tmpTopLeft.y;
	buffer[offset + 2] = u;
	buffer[offset + 3] = v;
	offset += floatStride;

	// 右上
	buffer[offset + 0] = tmpTopLeft.x + (sprite.size[0] * transform.scale[0]);
	buffer[offset + 1] = tmpTopLeft.y;
	buffer[offset + 2] = u + sprite.texcoordSize[0];
	buffer[offset + 3] = v;
	offset += floatStride;

	// 右下
	buffer[offset + 0] = tmpTopLeft.x + (sprite.size[0] * transform.scale[0]);
	buffer[offset + 1] = tmpTopLeft.y + (sprite.size[1] * transform.scale[1]);
	buffer[offset + 2] = u + sprite.texcoordSize[0];
	buffer[offset + 3] = v + sprite.texcoordSize[1];
	offset += floatStride;

	return offset;
};

// 3DのTransform
Kayac.Transform = function () {
	this.name = 'unnamed transform';
	this.position = Kayac.V3.createXyz(0, 0, 0);
	this.rotation = Kayac.Q.createIdentity();
	this.scale = Kayac.V3.createXyz(1, 1, 1);
};

// M34を返す
Kayac.Transform.prototype.getMatrix = function () {
	var ret = new Kayac.M34();
	ret.setQ(this.rotation); // 回転
	ret.preMultiplyTranslation(this.position); // 前から移動を乗算
	ret.postMultiplyScale(this.scale); // 後ろから拡縮を乗算
	return ret;
};

// SpriteTransform
Kayac.SpriteTransform = function () {
	this.name = 'unnamed SpriteTransform';
	this.pivot = [0.5, 0.5];
	this.anchor = [0.5, 0.5];
	this.scale = [1, 1];
	this.position = [0, 0];
	this.texcoordOffset = [0, 0];
	this.opacity = 1;
};
Kayac.SpriteTransform.getTopLeft = function (topLeftOut, transform, spriteSize, parentWidth, parentHeight) {
	// 親の中の座標原点
	topLeftOut.x = parentWidth * transform.anchor[0];
	topLeftOut.y = parentHeight * transform.anchor[1];
	// 自分のピボットを見てズラす
	topLeftOut.x -= spriteSize[0] * transform.pivot[0] * transform.scale[0];
	topLeftOut.y -= spriteSize[1] * transform.pivot[1] * transform.scale[1];
	// 位置を加算
	topLeftOut.x += transform.position[0];
	topLeftOut.y += transform.position[1];
};
Kayac.SpriteTransform.prototype.set = function (a) {
	this.name = a.name;
	this.pivot[0] = a.pivot[0];
	this.pivot[1] = a.pivot[1];
	this.anchor[0] = a.anchor[0];
	this.anchor[1] = a.anchor[1];
	this.scale[0] = a.scale[0];
	this.scale[1] = a.scale[1];
	this.position[0] = a.position[0];
	this.position[1] = a.position[1];
	this.texcoordOffset[0] = a.texcoordOffset[0];
	this.texcoordOffset[1] = a.texcoordOffset[1];
	this.opacity = a.opacity;
};

// MatrixStack
Kayac.MatrixStack = function () {
	this.mStack = [];
	var bottom = new Kayac.M34();
	bottom.setIdentity();
	this.mStack.push(bottom);
	this.mTop = 0;
};
Kayac.MatrixStack.reset = function () {
	this.mTop = 0;
};
Kayac.MatrixStack.prototype.push = function () {
	var top = this.mTop;
	this.mStack[top + 1] = Kayac.M34.createM(this.mStack[top]);
	this.mTop += 1;
};
Kayac.MatrixStack.prototype.pop = function () {
	console.assert(this.mTop > 0);
	this.mTop -= 1;
};
Kayac.MatrixStack.prototype.pushMul = function (m) {
	this.push();
	this.mStack[this.mTop].mul(m);
};
Kayac.MatrixStack.prototype.top = function () {
	return this.mStack[this.mTop];
};

// NumberRenderer
Kayac.NumberRenderer = function (sprites, digitCount) {
	this.mSprites = sprites;
	this.mInstances = [];
	for (var i = 0; i < digitCount; ++i) {
		this.mInstances[i] = new Kayac.SpriteInstance();
		var transform = new Kayac.SpriteTransform();
		transform.position[0] = transform.position[1] = 0;
		transform.pivot[0] = transform.pivot[1] = 0;
		transform.anchor[0] = transform.anchor[1] = 0;
		this.mInstances[i].transform = transform;
	}
	this.position = [0, 0];
	this.charWidth = 0;
	this.value = 0;
};
Kayac.NumberRenderer.prototype.draw = function (spriteRenderer) {
	var scale = 1;
	for (var i = 1; i < this.mInstances.length; ++i) {
		scale *= 10;
	}

	var v = this.value;
	var onceRendererd = false;
	for (var i = 0; i < this.mInstances.length; ++i) {
		var q = v / scale;
		q = Math.floor(q);
		v -= q * scale;
		scale /= 10;
		scale = Math.round(scale);
		if (onceRendererd || (q != 0) || (i == this.mInstances.length - 1)) {
			onceRendererd = true;
			var sprite = this.mSprites[q];
			this.mInstances[i].sprite = sprite;
			var transform = this.mInstances[i].transform;
			transform.position[0] = this.position[0] + (this.charWidth * i);
			transform.position[1] = this.position[1];
			spriteRenderer.add(this.mInstances[i]);
		}
	}
};