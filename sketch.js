
function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(3)
//stroke('black');
strokeWeight(5);

//gives a random background

var a = floor(random() * coloresfondo.length);
  background(color(coloresfondo[a]));
   if (a==1)
      {stroke('white')}
   else if (a==0 || a==2)
      {stroke('black')}
      

//gives randomly a word from each group that van create a phrase with or without sense
  for (var index = 0; index < (parola1.length-1); index++){
      x = random()*width;
      y = random()*height;
      var index = floor(random() * parola1.length);
      text(parola1[index], x, y)*10;
      fill('red');
      textSize(40);
      textStyle(BOLD);
    }


    for (var index2 = 0; index2 < (parola2.length-1); index2++) {

         var index2 = floor(random() * parola2.length);
         text(parola2[index2], x, y)*10;
         fill('yellow');
         textSize(100);
         textStyle(BOLD);
         x = random()*width;
         y = random()*height;
      }



    for (var index3 = 0; index3 < (parola3.length-1); index3++) {

         var index3 = floor(random() * parola3.length);
         text(parola3[index3], x, y);
         fill('white');
         textSize(80);
         textStyle(BOLD);
         x = random()*width;
         y = random()*height;
      }

}
var parola1= ['I', 'not', 'need', 'want'];
var parola2= ['cannot', 'creative', 'a', 'some'];
var parola3= ['code', 'today', 'vacation', 'wine'];
var coloresfondo= [ "blue", "white", "black"];

function draw() {

}
