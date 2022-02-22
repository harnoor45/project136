status = "";

function setup (){
    Canvas = createCanvas( 380 , 290);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image( video,0,0,380,380);
}
function start(){

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    name = document.getElementById("input").value;
    
    
    }
    
    function modelLoaded(){
        console.log("Model Loaded!");
        status = true;
    }