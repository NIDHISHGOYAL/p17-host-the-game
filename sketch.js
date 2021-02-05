var f1,f2,f3,f4;
var knife,knifeImage;
var alanim
function preload(){ 
knifeImage=loadImage("sword.png");  
alanin=loadAnimation("alien1.png","alien2.png");
f1= loadImage("fruit1.png"); 
f2= loadImage("fruit2.png");
f3= loadImage("fruit3.png");
f4= loadImage("fruit4.png");   
}
function setup(){
createCanvas(800,700);  
knife=createSprite(400,350);   
knife.addImage(knifeImage);   
}
function draw(){
background("gold");
knife.x=mouseX;
knife.y=mouseY; 
killer(); 
frutes();  
drawSprites(); 
}

function killer(){
if(frameCount%80===0){
var kil=createSprite(800,300,10,10); 
kil.velocityX=-10;
kil.y=Math.round(random(20,680));
kil.addAnimation("al",alanin); 
kil.lifetime=800/10;  
}
}
function frutes(){
if(frameCount%60===0){
var f=createSprite(800,300,10,10); 
f.velocityX=-20;
f.y=Math.round(random(20,680));
var n=Math.round(random(1,4));
if(n===1){
f.addImage(f1);  
}
if(n===2){
f.addImage(f2);  
}  if(n===3){
f.addImage(f3);  
}  if(n===4){
f.addImage(f4);  
}  
f.lifetime=800/20;
 f.scale=0.5; 
}
}
