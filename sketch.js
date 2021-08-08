//very beginning of the game where you see a camera with a next button
var beginner, beginnerImg;
var nextImg, next1, next2;

//koko the koala
var koalaImg, koala;

//text of instructions, koko intro, and a hint at what will be at the end
var txt_introImg, txt_intro;
var txt_instructionsImg, txt_instructions;
var txt_end_hintImg, txt_end_hint;

//gameState where you see a camer with a next button
var gameState = "camera";
// var gameState = "round1";

//round 1 pictures + text
var tree1Img, tree2Img, tree3Img, tree4Img;
var tree1, tree2, tree3, tree4;

function preload() {
  beginnerImg = loadImage("camera.jpg");
  nextImg = loadImage("roll.jpg");

  koalaImg = loadImage("koala.png");

  txt_introImg = loadImage("text/intro.png");
  txt_instructionsImg = loadImage("text/how_it_works.png");
  txt_end_hintImg = loadImage("text/end_hint.png");

  tree1Img = loadImage("good/tree1.JPG");
  tree2Img = loadImage("good/tree2.JPG");
  tree3Img = loadImage("good/tree3.JPG");
  tree4Img = loadImage("good/tree4.JPG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  beginner = createSprite(windowWidth/2, windowHeight/2);
  beginner.addImage("camera image", beginnerImg);
  beginner.scale = 4;
  beginner.visible = false;

  next1 = createSprite(windowWidth/1.1, windowHeight/6);
  next1.addImage("roll that says next", nextImg);
  next1.scale = 0.4;
  next1.visible = false;

  next2 = createSprite(windowWidth/1.1, windowHeight/1.2);
  next2.addImage("roll that says next", nextImg);
  next2.scale = 0.4;
  next2.visible = false;

  koala = createSprite(windowWidth/7, windowHeight/2);
  koala.addImage("koala on bamboo", koalaImg);
  koala.scale = 0.19;
  koala.visible = false;

  txt_intro = createSprite(windowWidth/2.5, windowHeight/5);
  txt_intro.addImage("koko's intro", txt_introImg);
  txt_intro.scale = 0.4;
  txt_intro.visible = false;

  txt_instructions = createSprite(windowWidth/1.3, windowHeight/2);
  txt_instructions.addImage("game instructions", txt_instructionsImg);
  txt_instructions.scale = 0.4;
  txt_instructions.visible = false;

  txt_end_hint = createSprite(windowWidth/2, windowHeight/1.3);
  txt_end_hint.addImage("hint about surprise", txt_end_hintImg);
  txt_end_hint.scale = 0.4;
  txt_end_hint.visible = false;

  tree1 = createSprite(windowWidth/1.85, windowHeight/3);
  tree1.addImage("2 trees", tree1Img);
  tree1.scale = 0.12;
  tree1.visible = false;
  
  tree2 = createSprite(windowWidth/1.3, windowHeight/3);
  tree2.addImage("tree with clouds", tree2Img);
  tree2.scale = 0.12;
  tree2.visible = false;

  tree3 = createSprite(windowWidth/1.85, windowHeight/1.5);
  tree3.addImage("sunset with tree", tree3Img);
  tree3.scale = 0.12;
  tree3.visible = false;

  tree4 = createSprite(windowWidth/1.3, windowHeight/1.5);
  tree4.addImage("tree and sunset downward", tree4Img);
  tree4.scale = 0.12;
  tree4.visible = false;
}

function draw() {
  background(0);
  drawSprites();

  if(gameState === "camera") {
    beginner.visible = true;
    next1.visible = true;

    if(mousePressedOver(next1)) {
      beginner.destroy();
      next1.destroy();
      
      gameState = "koala";
    }
  } else if(gameState === "koala") {
    koala.visible = true;
    txt_intro.visible = true;
    txt_instructions.visible = true;
    txt_end_hint.visible = true;
    next2.visible = true;

    if(mousePressedOver(next2)) {
      txt_intro.destroy();
      txt_instructions.destroy();
      txt_end_hint.destroy();
      next2.destroy();
      
      gameState = "round1";
    }
  } else if(gameState === "round1") {
    //in the last part, be sure to switch out all of the texts, for these 𝕥𝕖𝕩𝕥𝕤

    tree1.visible = true;
    tree2.visible = true;
    tree3.visible = true;
    tree4.visible = true;

    if(mouseIsOver(tree1)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("2 different trees,", windowWidth/5, windowHeight/5);
      text("with the beautiful sky above.", windowWidth/5, windowHeight/4.3);
      text("This was taken", windowWidth/5, windowHeight/3.7);
      text("as a background picture,", windowWidth/5, windowHeight/3.3);
      text("there is no clear subject.", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(tree2)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("another tree.", windowWidth/5, windowHeight/5);
      text("This was taken", windowWidth/5, windowHeight/4.3);
      text("in a way that,", windowWidth/5, windowHeight/3.7);
      text("the tree looks like a darker shade", windowWidth/5, windowHeight/3.3);
      text("therefore, highlighting the sky", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(tree3)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("one more tree", windowWidth/5, windowHeight/5);
      text("with the a beautiful sunset.", windowWidth/5, windowHeight/4.3);
      text("This was taken", windowWidth/5, windowHeight/3.7);
      text("to highlight the sunset", windowWidth/5, windowHeight/3.3);
      text("the tree is there as a filler.", windowWidth/5, windowHeight/2.95);
      text("I call it a filler because,", windowWidth/5, windowHeight/2.68);
      text("just the sunset would look empty,", windowWidth/5, windowHeight/2.45);
      text("which is why you add another", windowWidth/5, windowHeight/2.25);
      text("object (like a tree)", windowWidth/5, windowHeight/2.09);
    }

    if(mouseIsOver(tree4)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("another tree,", windowWidth/5, windowHeight/5);
      text("with the a colorful sunset.", windowWidth/5, windowHeight/4.3);
      text("This was taken", windowWidth/5, windowHeight/3.7);
      text("to highlight the sunset", windowWidth/5, windowHeight/3.3);
      text("the tree is there as another filler.", windowWidth/5, windowHeight/2.95);
      text("A note about fillers,", windowWidth/5, windowHeight/2.68);
      text("they shouldn't steal the show,", windowWidth/5, windowHeight/2.45);
      text("it should be clear what your", windowWidth/5, windowHeight/2.25);
      text("main focus is.", windowWidth/5, windowHeight/2.09);
    }
  }
}