img=" ";
status=" ";
objects=[];

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
  }

  function start(){
  objectDetector = ml5.objectDetector('cocoSsd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects ";
  }

function preload(){
   // img=loadImage('dog_cat.jpg');
}

function draw(){
  image(video, 0, 0, 380, 380);
  
  if(status != " ")
  {
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResults);
  for(i = 0; i < objects.length; i++)
  {
  
    document.getElementById("status").innerHTML="Status : Objects detected";
    document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
    fill(r, g, b);
  percent=floor(objects[i].confidence*100);
  text(objects[i].label+" "+ percent + "%", objects[i].x + 10, objects[i].y- 10);
  noFill();
  stroke(r, g, b);
  rect(objects[i].x, objects[i].y, objects[i].height, objects[i].width )
  
  }
  }
  }

function modelLoaded(){
console.log("modelLoaded!");
status = true;
}
function gotResults(error, results){
  if (error) {
  console.log(error);
  }
  console.log(results);
  objects=results;
  }