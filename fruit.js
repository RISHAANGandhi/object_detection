status1="";
objects=[];
function preload(){
    img=loadImage("object detection-5.jpg");

}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelloaded(){
  console.log("model loaded");
  status1="true";
  objectdetector.detect(img,gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(img,0,0,640,420);
    if(status1 != ""){
        
    }}
    