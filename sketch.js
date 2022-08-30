//variaveis globais
var fundo,fundoImg;
var coelho,coelhoImg;

//carregar os arquivos
function preload(){
  fundoImg = loadImage("garden.png");
  coelhoImg = loadImage("rabbit.png");
}


//criando sprites e suas propriedades
function setup(){
  createCanvas(400,400);
  fundo = createSprite(200,200);
  fundo.addImage (fundoImg);

  coelho = createSprite(340,340);
  coelho.addImage (coelhoImg);
  coelho.scale =0.1;
}




function draw() {


  background(0);

  //cor do fundo
  background("white");

coelho.x = mouseX

  drawSprites();
  
}
