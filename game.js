//jshint esversion:6
const aud1 = document.getElementById("audio1");
const aud2 = document.getElementById("audio2");
const aud3 = document.getElementById("audio3");
let maxScore = parseInt(localStorage.getItem("max"));
if(isNaN(maxScore)){
    maxScore = 0;
    localStorage.setItem("max", maxScore);
}

function setup(){
    angleMode(DEGREES);
    createCanvas(windowWidth,windowHeight);
}

let gameplay = true;
let hits = 7;
let initX = 420;
let initY = 650;
let x_increment = 10;
let y_increment = 10;
let score = 0;

function draw(){
        if(initX <= 0){
            initX = 420;
        }

        background(0);

        strokeWeight(30);
        stroke(97,108,248);
        fill(200,200,255);
        rect(20,mouseY-50,20,100);

        //MAX score
        if(score > maxScore){
            maxScore = score;
            localStorage.setItem("max", maxScore);
        }

        strokeWeight(1);
        fill(255);
        stroke(255,255,0);
        textSize(20);
        text("m a x s c o r e      :   " + maxScore,1000,100);
  
        //SCORE Counter
        strokeWeight(1);
        fill(255);
        stroke(0,255,250);
        textSize(20);
        text("s c o r e    :    " + score,1000,140);


        arc(initX,initY,20,20,0,360);
        initX+= x_increment;
        initY+= y_increment;

        if(initX <= 70 &&(initY >= (mouseY-70) && initY <=(mouseY+70))){
            hits+=1;
            aud2.play();
            x_increment = hits;
            score+=(10*hits);
        }
        if(initY<=0){
            aud1.play();
            y_increment = hits;
        }
        if(initX>=windowWidth){
            aud1.play();
            x_increment = -1*hits;
        }
        if(initY>=windowHeight){
            aud1.play();
            y_increment = -1*hits;
        }
        if(initX <= 0){
            audio3.play();
            hits = 7;
            stroke(200,100,50);
            stroke(20);
            fill(250,250,250);
            textSize(100);
            text("g  a  m  e  o  v  e  r",(windowWidth/2)-300,400);
            textSize(20);
            text("l e f t   c l i c k    t o     r e s t a r t",(windowWidth/2),450);
            score = 0;
            noLoop();
        } 
}

function mouseClicked() {
    loop();
}