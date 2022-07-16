function preload() {

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose)
}

function modelLoaded(){
    console.log("model is loaded");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose X = "+ results[0].pose.nose.x);
        console.log("nose Y = "+ results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 400, 300);
}

function takeSnapshot(){
    save("MyFilterPic.png")
}