function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
    game_over = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");

	video = createCapture(VIDEO);
	video.size(800,300);
 video.parent("game_console");

 model = ml5.poseNet(video, modelloaded);
model.on("pose", gotresults);
}
function modelloaded() {
	console.log("The modal has been loaded");
}

function gotresults(result) {
 if (result.length > 0) {
	 console.log(result);

	 noseX = result[0].pose.nose.x;
	 noseY = result[0].pose.nose.y;
 }

}
function draw() {
	game();

}






