canvas = document.getElementById("myCanvas");

pen = canvas.getContext("2d");
c_width = 100;
c_height = 80;
c_x = 10;
c_y = 300;
bg = "parkingLot.jpg";
car = "car2.png";

function add() {
	bg_img = new Image();
    bg_img.onload = uploadbg;
    bg_img.src = bg;

    c_img = new Image();
    c_img.onload = uploadc;
    c_img.src = car;
}

function uploadbg() {
	pen.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
}

function uploadc() {
	pen.drawImage(c_img, c_x, c_y,100,100);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(c_y>0){
        c_y-=10;
        uploadbg();
        uploadc();
	}
}

function down()
{
	if(c_y<canvas.height-100){
        c_y+=10;
        uploadbg();
        uploadc();
    }
}

function left()
{
	if(c_x>0){
		c_x-=10;
		uploadbg();
		uploadc();
	}
}

function right()
{
	if(c_x<canvas.width-100){
        c_x+=10;
        uploadbg();
        uploadc();
    }
}
