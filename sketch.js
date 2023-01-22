let PREV;

function setup() 
{
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	PREV = minute();
	setInterval(moveStar, 1000);
	a = 10;
	b = 200;
	c = 30;
	d = 400;
	e = 0;
	f = 550;
	g = 300;
	h = 250;
	i = 190;
	j = 50;
	k = 100;
	l = 500;
	m = 120;
	//console.log(PREV);
}

function draw() 
{
	background('#A5E5FF');
	//textSize(32);
	fill(180);
	//text(hour(), 10, 30);
	fill(100);
	//text(minute(), 10, 60);
	fill(0);
	//text(second(), 10, 90);

	/*
	fill('#FFD9EA');
	stroke('#FFD9EA');
	polygon(400, second());

	fill('#FFB8D8');
	stroke('#FFB8D8');
	polygon(200, minute());

	fill('#FF99C7');
	stroke('#FF99C7');
	polygon(50, hour());
	*/

	push();
	strokeWeight(4);
	fill('#E1F6FF');
	stroke('#E1F6FF');
	star(width * 0.5, height * 0.5, 250, second());

	strokeWeight(4);
	fill('#B9EBFF');
	stroke('#B9EBFF');
	star(0, 0, 125, minute());

	strokeWeight(4);
	fill('#91E0FF');
	stroke('#91E0FF');
	star(0, 0, 50, hour());
	pop();

	//code for the moving snowflakes
	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.25, a, 10, 10);
	rotate(frameCount/-100);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.75, b, 10, 10);
	pop();
	
	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.05, c, 5, 8);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.15, d, 7, 10);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.85, e, 7, 6);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.9, f, 5, 4);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.95, g, 8, 8);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.1, h, 7, 4);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.3, i, 4, 6);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.8, j, 6, 10);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.77, k, 4, 2);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.33, l, 8, 10);
	pop();

	push();
	fill('white');
	stroke('white');
	snowflakes(width * 0.22, m, 6, 6);
	pop();

	//code for snowman
	push();
	fill('white');
	stroke('white');
	circle(80, 570, 40);
	circle(80, 545, 30);
	fill('red');
	stroke('red');
	circle(80, 518, 20);
	circle(80, 508, 10);
	fill('white');
	stroke('white');
	circle(80, 525, 20);
	fill('black');
	stroke('black');
	circle(75, 523, 3);
	circle(85, 523, 3);
	circle(80, 540, 3);
	circle(80, 550, 3);
	circle(80, 560, 3);
	fill('orange');
	stroke('orange');
	triangle(80, 526, 80, 529, 90, 527);
	pop();

	push();
	snowman(720, 570);
	pop();
	
	printMinute();
}

function snowman(x, y)
{
	fill('white');
	stroke('white');
	//circle(80, 570, 40);
	circle(x, y, 40);
	circle(x, y-25, 30);
	fill('red');
	stroke('red');
	circle(x, y - 52, 20);
	circle(x, y - 62, 10);
	fill('white');
	stroke('white');
	circle(x, y - 45, 20);
	fill('black');
	stroke('black');
	circle(x - 5, y - 47, 3);
	circle(x + 5, y - 47, 3);
	circle(x, y - 30, 3);
	circle(x, y - 20, 3);
	circle(x, y - 10, 3);
	fill('orange');
	stroke('orange');
	triangle(x, y - 44, x, y - 41, x + 10, y - 43);
}

//referred to polygon function on examples page of pj5: https://p5js.org/examples/form-regular-polygon.html
function polygon(radius, sides) 
{
	let angle = TWO_PI / sides;
	beginShape();
	for (let i = 0; i < TWO_PI; i += angle) {
	  let sx = cos(i) * radius;
	  let sy = sin(i) * radius;
	  vertex(sx, sy);
	}
	endShape(CLOSE);
  }


function star(x, y, rad, val)
{
	angleMode(DEGREES);
	translate(x, y);
	beginShape();
	let angle = 0;
	let w, z;
	for (let i = 0; i < val*2; i++) {
        if (i % 2 == 0) {
            radius = rad;
        } else {
            radius = rad/2;
        }
        w = radius * cos(angle);
        z = radius * sin(angle);
        vertex(w, z);
        angle += (360 / (val*2));
    }
	endShape(CLOSE);
}

function snowflakes(x, y, rad, val)
{
	angleMode(DEGREES);
	translate(x, y);
	beginShape();
	rotate(frameCount);
	let angle = 0;
	let w, z;
	for (let i = 0; i < val*2; i++) {
        if (i % 2 == 0) {
            radius = rad;
        } else {
            radius = rad/2;
        }
        w = radius * cos(angle);
        z = radius * sin(angle);
        vertex(w, z);
        angle += (360 / (val*2));
    }
	endShape(CLOSE);
}

function printMinute() 
{
	let curr = minute();
	
	if(curr != PREV)
	{
		console.log(minute());
		PREV = curr;
	}
}

function moveStar()
{
	a = (a + 10) % 600;
	b = (b + 20) % 600;
	c = (c + 12) % 600;
	d = (d + 30) % 600;
	e = (e + 28) % 600;
	f = (f + 15) % 600;
	g = (g + 40) % 600;
	h = (h + 10) % 600;
	i = (i + 20) % 600;
	j = (j + 25) % 600;
	k = (k + 13) % 600;
	l = (l + 8) % 600;
	m = (m + 37) % 600;
}