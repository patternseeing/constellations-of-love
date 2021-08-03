///////////CONSTELLATIONS OF LOVE ////////////
////////// patternseeing | 2021  /////////////


var filePath ="https://docs.google.com/spreadsheets/d/e/2PACX-1vSer5QV51YWQnsSkhYfDsqB41thTaBIf9pBlqutq7pueS8acrS7dguFwsh-H0Up6P00aBj9pJ9ZamSn/pub?output=csv";

var word = [];
var language = [];
var letters = [];
var wordLength = [];

let table;

let letterDict = {};


var stars = [];

var dx = 0;
var speed = 0.05;

let heartBeat;
let ambient;


var p1 = [];

var p2;
var p3;
var a =0;
var wt = 0;
var wc =0;
  var ag =0;

var counter = 0;
var ind = 0;
var searchWordValue;
var selBool = false;

var r= 0;
var g = 0;
var b = 0;
let selection;
let muteButton,saveButton,menuButton;
var snd = false;
var introBool = true;
 var tArray = [];
var color1,color2,color3;


function preload() {
  table = loadTable(filePath, "csv", "header");
  soundFormats("mp3", "ogg");
  heartBeat = loadSound("assets/beatalone_01");
    ambient = loadSound("assets/ambient");

}


function setup() {
  createCanvas(windowWidth,windowHeight);

	pixelDensity(1);


  saveButton = createButton('Capture');
  saveButton.position( width-180, height-60);
saveButton.class('button');
  saveButton.mousePressed(saveImage);

muteButton = createButton('Unmute');
muteButton.position( width-100, height-60);
muteButton.mousePressed(soundControl);
muteButton.class('button');

menuButton = createButton('patternseeing ');
menuButton.position(width/2-60, 70);
menuButton.class('button');
menuButton.mousePressed(gotoweb);

tweetButton = createButton('Tweet');
  tweetButton.position( 50, height-60);
tweetButton.class('button');
  tweetButton.mousePressed(tweetThis);

  fbButton = createButton('Facebook');
    fbButton.position(20+ tweetButton.x+tweetButton.width, height-60);
  fbButton.class('button');
    fbButton.mousePressed(fbThis);



startButton = createButton('Explore Constellations');
startButton.position(width/2-100,height/2);
startButton.class('button');
startButton.mousePressed(function(){introBool = false;soundControl()});



	if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
//   heartBeat.loop();
//  ambient.loop();
//
//  heartBeat.stop();
// ambient.stop();

   editorDiv = createElement('div', '');
   editorDiv.class('experience');


   selection = createSelect();
  selection.position(width/2-50, height-90);
 selection.class('dropsel');


  word = table.getColumn("Word");
  language = table.getColumn("Language");

  for (var i = 0; i < word.length; i++) {
    word[i] = word[i].toLowerCase();

    selection.option(language[i], i);


    for (var j = 0; j < word[i].length; j++) {
      var n = i + j * word.length;

      letters[n] = word[i][j];
    }
  }
  letters = letters.filter(function (el) {
    return el != null;
  });

  for (var i = 0; i < letters.length; i++) {
    if (letterDict[letters[i]] == undefined) {
      letterDict[letters[i]] = 1;
    } else {
      letterDict[letters[i]] = letterDict[letters[i]] + 1;
    }
  }
  letters = Object.keys(letterDict);




  for (var i = 0; i < 1100; i ++)
	{
    stars [i] = new Star (8);
  }
 r = random(50);
  g = random(50);
  b = random(150);


  color1 = color(0);
 color2 = color(255-r,255-g,255-b);
}

function draw() {
  background(0,200);




  if (counter >= 100) {
    counter = 0;
    ind = ind + 1;
      selection.selected(ind);
 //  letters= shuffle(letters);
color1 = color(255-r,255-g,255-b);
  }
   if (ind >= word.length) {
    ind = 0;
  }
if(counter==0){
  r = random(150);
  g = random(150);
  b = random(150);
  color2 = color(255-r,255-g,255-b);

tArray = [];
}

if(introBool){

  r = 0;
   g = 0;
   b = 0;
   noStroke();
var co1 = color(15,0,25, 155 * sin(frameCount*.01));
var co2 = color(240,170,0, 200 * sin(frameCount*.01));

fill(co1);
rect(width/2,height/2,width,height);

  textSize(25);
fill(co2);
  textFont('Times');
   text('Immerse yourself in unique constellations composed using the letters of the word "Love " over 100 different languages.',width/2,height/2+100,450,450);

    menuButton.style('display','none');
    saveButton.style('display','none');
    muteButton.style('display','none');

        tweetButton.style('display','none');

        fbButton.style('display','none');


        startButton.style('background-color',co2);

}
else{

  counter = counter + 1;
startButton.style('display','none');
menuButton.style('display','block');
saveButton.style('display','block');
muteButton.style('display','block');
tweetButton.style('display','block');
fbButton.style('display','block');
}



     var ang1 =  radians(counter*2)  ;
    var ang2 =  radians(counter)  ;



color3 = lerpColor(color1,color2,sin(radians(counter)));

searchWord = word[ind];
selection.changed(newWord);
selection.style('color',color(255-r,255-g,255-b,255*(sin(ang1))));

 if(selBool){
   counter = 0;
      ind = int(searchWordValue);
    }

selBool= false;

  var hb = 3.5;

   a = frameCount % 50;
  wt = frameCount % 10;

  var hbAngle = radians(frameCount * hb);

var ma1 = map(mouseX,0,width,0,180);
var ma2 = map(mouseY,0,height,0,180);

////////////////////////////////////////////////////// STAR UPDATE
push();
//translate (width / 2+width / 2*sin(radians(ma1)) , height/2+ height/2*sin(radians(ma2))  );
translate(width / 2, height / 2);

  for (var i = 0; i < stars.length; i ++){

    var   speed1 = map (counter, 0,50, 0,1);
    var c1 =  color(255,125,20,100);
    var c2 =  color(255,150*abs(sin(i*.005*hbAngle)));
    var c3=lerpColor(c1,c2,speed1);

    stars[i].update ();
    stars[i].show (c2);
  }

  pop();
  noStroke();
////////////////////////////////////////////////////// STAR UPDATE



////////////////////////////////////////////////////// BACKGROUND SKY
radial(
   width / 2, height / 2,50 ,
    width / 2, height / 2+200*sin(frameCount*.01), width/2  ,
   color(r,g,b,120*(sin(radians(2*counter)))),  color(r,g,b,50*(sin(radians(2*counter)))), color(r,g,b,20*(sin(radians(2*counter))))
  );
////////////////////////////////////////////////////// BACKGROUND SKY


////////////////////////////////////////////////////// LETTERS FLOATING
  push();
  translate(width / 2, height / 2);
//translate (width / 2+50*sin(radians(ma1)) , height/2+ 50*sin(radians(ma2))  );
  rotate(radians(frameCount * 0.2));

  var indexs = [];

  for (var i = 0; i < letters.length; i++) {
    var a = 1.3 * i + 100;
     var ang = a  * 0.0005*frameCount ;
    var x = 1*a * sin(a)+100*sin(ang*.05);
    var y = 1*a * cos(a)-150*sin(ang *.05);



    textSize(letterDict[letters[i]] + 10 + 10 * sin(ang));

    textSize(10);

    push();
    translate(x, y);
    rotate(ang*.005);
    scale(1+ sin(ang));
    fill(255-r,255-g,255-b, 200 * sin(ang*.2));
    noStroke();
    text(letters[i], 0, 0);
    pop();

////////////////////////////////////////////////////// LETTERS FLOATING


    for (var j = 0; j < searchWord.length; j++) {
      if (searchWord[j] == letters[i]) {
        indexs.push(letters.indexOf(searchWord[j]));
    p1[j] = createVector(x,y);
        noStroke();
      }
    }


  }

////////////////////////////////////////////////////// CONSTALLATION FORM
  for(var i=0;i<searchWord.length;i++){
    if (dx >= 1) {
      dx = 1;
    } else {
      dx = dx + speed;
    }
    if (mouseIsPressed) {
      dx = 0;
    }

    push();
    translate(p1[i].x,p1[i].y);
    noStroke();
    textSize(35);
    fill(255-r,255-g,255-b,255*sin(ang1));
    textFont('Times');
    text(searchWord[i],0,0);
    pop();

    stroke(255);
    strokeWeight(2);

       if (i - 1 >= 0) {

         var px = lerp (p1[i].x ,p1[i-1].x,abs(sin(frameCount*.1)) );
         var py = lerp(p1[i].y ,p1[i-1].y,abs(sin(frameCount*.1) ) );
         //line(p1[i].x,p1[i].y,p1[i-1].x,p1[i-1].y);
         stroke(255-r,255-g,255-b,55*abs(sin(ang1)));
         strokeWeight(1);
     // line(p1[i].x,p1[i].y,px,py );
       line(p1[i].x,p1[i].y,p1[i-1].x,p1[i-1].y);


       }

    if(i + 1 < searchWord.length){
               stroke(r,g,b,55*abs(sin(ang1)));
      strokeWeight(1);
             line(p1[i].x,p1[i].y,p1[i+1].x,p1[i+1].y);

                 }

  }

  ////////////////////////////////////////////////////// CONSTALLATION FORM


   ////////////////////////////////////////////////////// CONSTALLATION ANIMATED LINE
  if(wc>=searchWord.length){
     wc=0;
     }

       ag = map(wt,0,10,0,90);

  if(wc-1>=0){
      p2 = createVector(p1[wc-1].x,p1[wc-1].y);
 p3 = createVector(p1[wc].x,p1[wc].y);


var ang = radians(ag);
         var px = lerp (p2.x ,p3.x,abs(sin(ang)) );
         var py = lerp(p2.y ,p3.y,abs(sin(ang) ) );

    stroke(255,255*abs(sin(ang)));

    strokeWeight(4);

    gradientLine(p1[wc-1].x,p1[wc-1].y,px,py, color(0), color(255-r,255-g,255-b,),2);


     }

if(wt==0){
      wc = wc+1;
     }

  pop();
  ////////////////////////////////////////////////////// CONSTALLATION ANIMATED LINE



  ////////////////////////////////////////////////////// TITLE

  textFont('Times');
  color3.setAlpha(255*sin(ang1));
  fill(color3);

  textSize(50);
  textAlign(CENTER);
  text(searchWord, width/2, -15*sin(ang1)+height-90);
  textSize(20);


  textSize(25);
  color3.setAlpha(255 );
fill(color3);
  textAlign(CENTER);

  text(' C o n s t e l l a t i o n s   o f   l o v e',  width/2, 60);

  ////////////////////////////////////////////////////// TITLE

	

}



function radial(x1, y1, r1, x2, y2, r2, c1, c2, c3) {


  var gradient = this.drawingContext.createRadialGradient(
    x1,
    y1,
    r1,
    x2,
    y2,
    r2
  );

   gradient.addColorStop(0, c1);
  gradient.addColorStop(0.5, c2);
  gradient.addColorStop(1, c3);

rectMode(CENTER);
  this.drawingContext.fillStyle = gradient;
  rect(x1,y1, width, height);
}

function gradientLine(x1, y1, x2, y2, color1, color2,sw) {
   var grad = this.drawingContext.createLinearGradient(x1, y1, x2, y2);
  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);

  this.drawingContext.strokeStyle = grad;
  this.drawingContext.fillStyle = grad;
    strokeWeight(sw);
  line(x1, y1, x2, y2);

}
function newWord() {
selBool = true;
  searchWordValue = selection.value();
    col = color(
    random(180, 255),
    random(150, 200),
    random(150, 200),
    random(80, 120)
  );
}
function Star (speedx )
{
  this.x = random (-width, width);
  this.y = random (-height, height);
  this.z = random (0, width);
  this.pz = this.z;

  this.update = function ()
	{
    this.z = this.z - speedx;
    if (this.z < 1)
		{
    	this.z = width;
      this.x = random (-width, width);
      this.y = random (-height, height);
      this.pz = this.z;
  	}
	}

	this.show = function (c4)
	{
		fill (c4);
		noStroke();

		var sx = map (this.x / this.z, 0, 1, 0, width);
		var sy = map (this.y / this.z, 0, 1, 0, height);

		var r = map (this.z, 0, width, 5, 0);
	ellipse (sx, sy, r, r);

		var px = map (this.x / this.pz, 0, 1, 0, width);
		var py = map (this.y / this.pz, 0, 1, 0, height);

		this.pz = this.z;

		stroke (c4);
		strokeWeight (2);
 //	line (px, py, sx, sy);
		}
}
function mousePressed() {
  userStartAudio();
}

function touchStarted() {

    getAudioContext().resume();


}

function soundControl(){

  snd =! snd;
  if(snd){
//    heartBeat.play();
//      ambient.play();

      heartBeat.loop();
     ambient.loop();

  muteButton.html('Mute') ;


  }else if(snd ==false) {
       heartBeat.pause();
    ambient.pause();
  muteButton.html('Unmute') ;


  }
}

function mouseWheel(event) {
  if (event.deltaY > 0) {
    ind = ind + 1;
  } else {
    ind = ind - 1;
  }
  selection.selected(ind);
counter=-1;
}
function saveImage(){
  save(searchWord+"_patternseeing.png");
}
function gotoweb() {
	window.open('https://patternseeing.wordpress.com/');
}


function tweetThis(){
  window.open('https://twitter.com/share?url=https://constellationsoflove.netlify.app/&text=Explore constellations of love by @patternseeing');
}

function fbThis(){
  window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fconstellationsoflove.netlify.app%2F&amp;src=sdkpreparse');
}
