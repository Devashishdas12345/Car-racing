var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png"
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png"
var car2_x = 10;
var car2_y = 100;

var background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg"

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground();
    background_image_tag.src = background_image;
  
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1();
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2();
    car2_imgTag.src = car2_image;
  }

  function uploadBackground() {
      ctx.drawImage(background_image_tag , 0 , 0 , canvas.width , canvas.height);
  }

  function uploadCar1() {
      ctx.drawImage(car1_imgTag , car1_x , car1_y , car1_width , car1_height);
  }

  function uploadCar2() {
    ctx.drawImage(car2_imgTag , car2_x , car2_y , car2_width , car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == 38) {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == 40) {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == 37) {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == 39) {
        car1_right();
        console.log("right arrow key");
    }

    if (keyPressed == 87) {
        car2_up();
        console.log("w key");
    }
    if (keyPressed == 83) {
        car2_down();
        console.log("s key");
    }
    if (keyPressed == 65) {
        car2_left();
        console.log("a key");
    }
    if (keyPressed == 68) {
        car2_right();
        console.log("s key");
    }
  }

  function car1_up() {
	if (car1_y >= 0) {
		car1_y = car1_y - 10;
		console.log("When up arrow key is pressed" + car1_x + " - " + car1_y);
		uploadBackground();
		uploadCar1();
        uploadCar2();
	}
}

function car1_down() {
	if (car1_y <= 500) {
		car1_y = car1_y + 10;
		console.log("When down arrow key is pressed" + car1_x + " - " + car1_y);
		uploadBackground();
		uploadCar1();
        uploadCar2();
	}
}

function car1_left() {
	if (car1_x >= 0) {
		car1_x = car1_x - 10;
		console.log("When left arrow key is pressed" + car1_x + " - " + car1_y);
		uploadBackground();
		uploadCar1();
        uploadCar2();
	}
}

function car1_right() {
	if (car1_x <= 700) {
		car1_x = car1_x + 10;
		console.log("When right arrow key is pressed" + car1_x + " - " + car1_y);
		uploadBackground();
		uploadCar1();
        uploadCar2()
	}
}




function car2_up() {
	if (car2_y >= 100) {
		car2_y = car2_y - 10;
		console.log("When up arrow key is pressed" + car2_x + " - " + car2_y);
		uploadBackground();
        uploadCar1();
		uploadCar2();
	}
}

function car2_down() {
	if (car2_y <= 400) {
		car2_y = car2_y + 10;
		console.log("When down arrow key is pressed" + car2_x + " - " + car2_y);
		uploadBackground();
        uploadCar1();
		uploadCar2();
	}
}

function car2_left() {
	if (car2_x >= 0) {
		car2_x = car2_x - 10;
		console.log("When left arrow key is pressed" + car2_x + " - " + car2_y);
		uploadBackground();
        uploadCar1();
		uploadCar2();
	}
}

function car2_right() {
	if (car2_x <= 700) {
		car2_x = car2_x + 10;
		console.log("When right arrow key is pressed" + car2_x + " - " + car2_y);
		uploadBackground();
        uploadCar1();
		uploadCar2();
	}
    if (car2_x < car1_x) {
        console.log("Car 1 wins");
        document.getElementById("Guess").innerHTML = "Car 1 wins";
    }
    else {
        if (car1_x < car2_x) {
            console.log("Car 2 wins");
            document.getElementById("Guess").innerHTML = "Car 2 wins";
        }
    }
}