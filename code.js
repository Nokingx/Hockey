var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var fronteira1 = createSprite(200,0,400,10);
fronteira1.shapeColor = "white";
var fronteira2 = createSprite(200,400,400,10);
fronteira2.shapeColor = "white";
var fronteira3 = createSprite(0,200,10,400);
fronteira3.shapeColor = "white";
var fronteira4 = createSprite(400,200,10,400);
fronteira4.shapeColor = "white";
var fronteira5 = createSprite(200,15,400,5);
fronteira5.shapeColor = "white";
var fronteira6 = createSprite(200,385,400,5);
fronteira6.shapeColor = "white";
var fronteira7 = createSprite(15,200,5,400);
fronteira7.shapeColor = "white";
var fronteira8 = createSprite(385,200,5,400);
fronteira8.shapeColor = "white";
var fronteira9 = createSprite(200,130,400,5);
fronteira9.shapeColor = "white";
var fronteira10 = createSprite(200,270,400,5);
fronteira10.shapeColor = "white";
var gol1 = createSprite (200,28,100,20);
gol1.chapeColor= ('yellow');
var gol2 = createSprite (200,372,100,20);
gol2.shapeColor= ('yellow');
var atacante = createSprite (200,200,10,10);
atacante.shapeColor = 'white';
var estadoJogo = 'sacar';
var tacoJogador = createSprite (200,50,50,10);
tacoJogador.shapeColor = 'black';
var placarComputador = 0;
var placarJogador = 0;   
var tacoComputador = createSprite (200,350,50,10);
tacoComputador.shapeColor = 'black';

function draw() {
  background('green');
  text(placarComputador, 25,225);
  text(placarJogador,25,185);
  for (var i = 0; i <400; i=i+20) {
line (i,200,i+10,200);
}
if (estadoJogo === "sacar") {
 text('Aperte Espaço',205,180);
}
if (keyDown('space')&& estadoJogo === 'sacar'){
  sacar ();
  atacante.velocityX = atacante.velocityX -1;
  atacante.velocityY = atacante.velocityY -1;
  estadoJogo = 'jogar';
}
  tacoComputador.x = atacante.x;
  
  if (keyDown('A')){
tacoJogador.x = tacoJogador.x-10;

}

if (keyDown('D')){
tacoJogador.x = tacoJogador.x+10;

}
if (keyDown('W')) {
if(tacoJogador.y>25)
{
tacoJogador.y = tacoJogador.y-10;
}
}
if (keyDown('S')){
if(tacoJogador.y<120)
{
tacoJogador.y = tacoJogador.y+10;
}
}
if (placarJogador === 5 || placarComputador === 5){
    estadoJogo = "fim";
    fill("maroon");
    textSize(18);
    text("Game Over!",170,160);
    text("Aperte R para recomeçar",150,180);
    tacoJogador.x = 200;
    tacoJogador.y = 40;
  }
  if (keyDown('r') && estadoJogo === 'fim') {
estadoJogo = 'sacar';
placarComputador = 0;
placarJogador = 0;
}
  tacoComputador.x = atacante.x;
  
  if(atacante.isTouching(gol1) || atacante.isTouching(gol2))
{
if(atacante.isTouching(gol1))
{
placarComputador = placarComputador + 1;
}
if(atacante.isTouching (gol2))
{
placarJogador = placarJogador +1;
}
redefinir();
estadoJogo = 'sacar';
}
  line(0,20,400,20);
  line(0,380,400,380);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  createEdgeSprites();
    atacante.bounceOff(fronteira7);
  atacante.bounceOff(fronteira8);
  atacante.bounceOff(fronteira5);
  atacante.bounceOff(fronteira6);
  atacante.bounceOff(tacoJogador);
  atacante.bounceOff(tacoComputador);
  
  tacoJogador.bounceOff(fronteira7);
  tacoJogador.bounceOff(fronteira8);
  tacoJogador.bounceOff(fronteira5);
  tacoJogador.bounceOff(fronteira9);
 
  tacoComputador.bounceOff(fronteira7);
  tacoComputador.bounceOff(fronteira8);
  tacoComputador.collide(fronteira10);
  tacoComputador.collide(fronteira6);
  drawSprites();
}
function sacar() {
atacante.velocityX = 10;
atacante.velocityY = 5;

}
function redefinir(){
atacante.x = 200;
atacante.y = 200;
atacante.velocityX = 0;
atacante.velocityY = 0;
} 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
