const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState="onsling"

function preload() {
    polygonImage = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new ground(450,400,900,20);
    stand1=new stand(390,300,250,10)
    stand2=new stand(700,200,200,10)
    block1 = new block(20,50,30,30)
}
function draw(){
    ground.display()
    stand1.display()
    stand2.display()
    block1.display()
}
