$(document).ready(function() {
	var ctx = document.getElementById("canvas").getContext('2d');
// 	ctx.beginPath();
//	startX/startY is implied by the moveTo() call
//	HTML5's func: (startCx,startCy,	endCx,	endCy,   endX,   endY)
	drawBez(ctx, 1, 0, 0, 0, 100, 100, 0, 100, 30);
// 	args = (ctx, p, startX, startY,  contX1, contY1, endX,	 endY, contX2, contY2)
/*
	ctx.closePath();

	ctx.strokeStyle = "#0000ff";
	ctx.stroke();
*/
/*
	for (n=0;n<8;n++)
	{
		$("body").append($("<input class=\""+ n +"\" type=\"text\" value=\""+50+"\"></input>"));
		$("." + n).knob({
			'inputColor':'#000000',
			'min': 0,
			'max': 100,
			'readOnly':false,
			'width':64,
			'height':64,
			'fgColor':'#f31d21',
			'bgColor':'#bababa',
			'change': function(v){ 
// 				k[$(this).className] = v;
// 				console.log(k);
			},
			'release': function(v){
// 				k[n] = v;
// 				console.log(k);
			}
		});
	}
*/
});
