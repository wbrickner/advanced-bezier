// Zak v1.0.0
// Feb 11th, 2015
// Developed by Will Brickner.
function drawBez(ctx, p, startX, startY, startControlX, startControlY, endX, endY, endControlX, endControlY) {	
	var c = getBez(0, p, startX, startY, endX, endY, startControlX, startControlY, endControlX, endControlY);
	ctx.beginPath();
	ctx.moveTo(c.a.x, c.a.y);
	ctx.bezierCurveTo(c.b.x, c.b.y, c.c.x, c.c.y, c.d.x, c.d.y);
	ctx.stroke();
	ctx.closePath();
}
function getBez(t0, t1, x1, y1, x2, y2, bx1, by1, bx2, by2) {
	var u0  = 1.0 - t0,
		u1  = 1.0 - t1,
		qxa =  x1*u0*u0 + bx1*2*t0*u0 + bx2*t0*t0,
		qxb =  x1*u1*u1 + bx1*2*t1*u1 + bx2*t1*t1,
		qxc = bx1*u0*u0 + bx2*2*t0*u0 +  x2*t0*t0,
		qxd = bx1*u1*u1 + bx2*2*t1*u1 +  x2*t1*t1,
		qya =  y1*u0*u0 + by1*2*t0*u0 + by2*t0*t0,
		qyb =  y1*u1*u1 + by1*2*t1*u1 + by2*t1*t1,
		qyc = by1*u0*u0 + by2*2*t0*u0 +  y2*t0*t0,
		qyd = by1*u1*u1 + by2*2*t1*u1 +  y2*t1*t1;
		
	return {
		a:{ 
			x: qxa*u0 + qxc*t0,
			y: qya*u0 + qyc*t0
		},
		b:{
			x: qxa*u1 + qxc*t1,
			y: qya*u1 + qyc*t1
		},
		c:{
			x: qxb*u0 + qxd*t0,
			y: qyb*u0 + qyd*t0
		},
		d:{
			x: qxb*u1 + qxd*t1,
			y: qyb*u1 + qyd*t1
		}
	};
}
