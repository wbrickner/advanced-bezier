var v = t = 1
,   o = { x: 323.6, y: 200 }

document.onkeydown = function onkey(k) {
	v += (k.which == 37 ?  0.05 : 0)
	  +  (k.which == 39 ? -0.05 : 0)
	
	if (t !== v) { d(r) }
}

function newCurve() {
	c = cGen()
	r = rGen()
	d(r, c)
}

function d(r, c) {
	ctx.strokeStyle = c;
	ctx.clearRect(0, 0, 647.2, 400);
	drawBez(ctx, v, o.x + r[0], o.y + r[1], o.x + r[2], o.y + r[3], o.x + r[4], o.y + r[6], o.x + r[7], o.y + r[8])
}

function cGen() {
	return (
		"rgb(" + 
			Math.round(255 * Math.random()) + "," +
			Math.round(255 * Math.random()) + "," +
			Math.round(255 * Math.random()) + "," + 
		")"
	)
}

function rGen() {
	var r = new Array()
	for (var i = 0; i < 9; i++) {
		r.push(199 * Math.random() + 1)
	}
	return r
}

window.onload = function () {
	document.getElementById("regen").onclick = newCurve
	ctx = document.getElementById("canvas").getContext("2d")
	newCurve()
}