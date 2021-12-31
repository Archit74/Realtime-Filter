NoseX=0;
NoseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function  setup(){
canvas=createCanvas(400,350);
canvas.center();
canvas.position(500,200);
video=createCapture(VIDEO);
video.size(400,350);
video.hide();
poseNet= ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}
function modelloaded(){
console.log("model is initialized");
}
function take_snapshot(){
save('image_clown.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX=results[0].pose.nose.x-10;
        NoseY=results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video,0,0,400,350); 
    image(clown_nose,NoseX,NoseY,30,30);
    }