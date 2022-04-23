NoseX = 0;
NoseY = 0;

function preload(){
   nice = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nice, NoseX, NoseY, 40, 40)
}

function second(){
    save('mustache.png');
    
}

function modelLoaded(){
    console.log("mustache sucessful");
}

function gotResult(results){
    if(results.length>0){
        console.log(results);
        NoseX = results[0].pose.nose.x+20;
        NoseY = results[0].pose.nose.y+20;
        console.log("mustache x = "+NoseX);
        console.log("mustache y = "+NoseY);
    }
}