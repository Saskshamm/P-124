noseX=0;
noseY=0;
leftWristxp=0;
rightWristxp=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,470);
    canvas.position(560,90);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}
function draw(){
    background('#0000ff');
    fill('#00FFFF');
    stroke('#00008b');
    square(noseX,noseY, difference);
 }
  function modelloaded(){
      console.log("Model is Loaded!");
  }
  function gotposes(results){
if (results.length > 0)
{
    console.log(results);
  noseX=results[0].pose.nose.x;
  nosey=results[0].pose.nose.y;
  leftWristxp=results[0].pose.leftWrist.x;
  rightWristxp=results[0].pose.rightWrist.x;
  difference=floor(leftWristxp-rightWristxp);
}
 }