v = t = 1,
o = {
	x: 323.6,
	y: 200	
};
document.onkeydown = function (k) {
	v += (k["which"] == 37)?0.05:0
	  +  (k["which"] == 39)?-0.05:0;
	if (t != v) {
		d(r);
	}
};

window.onload = function() {
	document.getElementById("regen").onclick = function () {
		c = cGen();
		r = rGen();
		d(r,c);
	}
	console.log("Document loaded.");
	ctx = document.getElementById("canvas").getContext('2d');
	c = cGen();
	r = rGen();
	d(r,c);
};

function d(r,c) {
	ctx.strokeStyle = c;
	ctx.clearRect(0, 0, 647.2, 400);
// 	drawBez(ctx, p, startX, startY, startControlX, startControlY, endX, endY, endControlX, endControlY)
	drawBez(ctx, v, o.x + r[0], o.y + r[1], o.x + r[2], o.y + r[3], o.x + r[4], o.y + r[6], o.x + r[7], o.y + r[8]);
}

function cGen() {
	return "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
}

function rGen() {
	var r = new Array();
	for (var i = 0; i<9;i++)
	{
		r.push(Math.random() * 199 + 1);
	}
	return r;
}
