//very beginning of the game where you see a camera with a next button
var beginner, beginnerImg;
var nextImg, next1, next2, next3, next4, next5;

//koko the koala
var koalaImg, koala;

//text of instructions, koko intro, and a hint at what will be at the end
var txt_introImg, txt_intro;
var txt_instructionsImg, txt_instructions;
var txt_end_hintImg, txt_end_hint;

//gameState where you see a camer with a next button
var gameState = "camera";
// var gameState = "round3";

//round 1 pictures
var tree1Img, tree2Img, tree3Img, tree4Img;
var tree1, tree2, tree3, tree4;

//round 2 pictures
var fish1Img, fish2Img, fish3Img, fish4Img;
var fish1, fish2, fish3, fish4;

//round 3 pictures
var orange_flower, pink1_flower, pink2_flower, red_flower, white_flower, yellow_flower;
var orange_flowerImg, pink1_flowerImg, pink2_flowerImg, red_flowerImg, white_flowerImg, yellow_flowerImg;

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

  fish1Img = loadImage("good/fish1.JPG");
  fish2Img = loadImage("good/fish2.JPG");
  fish3Img = loadImage("good/fish3.JPG");
  fish4Img = loadImage("good/fish4.JPG");

  orange_flowerImg = loadImage("good/orange_Flower.JPG");
  pink1_flowerImg = loadImage("good/pink_Flower.JPG");
  pink2_flowerImg = loadImage("good/pink_Flower2.JPG");
  red_flowerImg = loadImage("good/red_Flower.JPG");
  white_flowerImg = loadImage("good/white_Flower.JPG");
  yellow_flowerImg = loadImage("good/yellow_Flower.JPG");
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

  next2 = createSprite(windowWidth/4, windowHeight/2);
  next2.addImage("roll that says next", nextImg);
  next2.scale = 0.4;
  next2.visible = false;

  next3 = createSprite(windowWidth/4, windowHeight/1.2);
  next3.addImage("roll that says next", nextImg);
  next3.scale = 0.4;
  next3.visible = false;

  next4 = createSprite(windowWidth/4, windowHeight/1.6);
  next4.addImage("roll that says next", nextImg);
  next4.scale = 0.4;
  next4.visible = false;

  next5 = createSprite(windowWidth/1.1, windowHeight/1.2);
  next5.addImage("roll that says next", nextImg);
  next5.scale = 0.4;
  next5.visible = false;

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

  fish1 = createSprite(windowWidth/1.85, windowHeight/3);
  fish1.addImage("fish in marbles between plants", fish1Img);
  fish1.scale = 0.12;
  fish1.visible = false;

  fish2 = createSprite(windowWidth/1.3, windowHeight/3);
  fish2.addImage("fish behind green plant + reflection of plants", fish2Img);
  fish2.scale = 0.12;
  fish2.visible = false;

  fish3 = createSprite(windowWidth/1.85, windowHeight/1.5);
  fish3.addImage("fish in marbles between plants", fish3Img);
  fish3.scale = 0.12;
  fish3.visible = false;
  
  fish4 = createSprite(windowWidth/1.3, windowHeight/1.5);
  fish4.addImage("fish infront of green plant", fish4Img);
  fish4.scale = 0.12;
  fish4.visible = false;

  orange_flower = createSprite(windowWidth/1.85, windowHeight/4.7);
  orange_flower.addImage("orange flowers", orange_flowerImg);
  orange_flower.scale = 0.1;
  orange_flower.visible = false;

  pink1_flower = createSprite(windowWidth/1.4, windowHeight/4.7);
  pink1_flower.addImage("1st pink flower image", pink1_flowerImg);
  pink1_flower.scale = 0.1;
  pink1_flower.visible = false;

  pink2_flower = createSprite(windowWidth/1.85, windowHeight/2.15);
  pink2_flower.addImage("2nd pink flower image", pink2_flowerImg);
  pink2_flower.scale = 0.1;
  pink2_flower.visible = false;

  red_flower = createSprite(windowWidth/1.4, windowHeight/2.15);
  red_flower.addImage("red flowers", red_flowerImg);
  red_flower.scale = 0.1;
  red_flower.visible = false;

  white_flower = createSprite(windowWidth/1.85, windowHeight/1.4);
  white_flower.addImage("white flowers", white_flowerImg);
  white_flower.scale = 0.1;
  white_flower.visible = false;

  yellow_flower = createSprite(windowWidth/1.4, windowHeight/1.4);
  yellow_flower.addImage("yellow flowers", yellow_flowerImg);
  yellow_flower.scale = 0.1;
  yellow_flower.visible = false;
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

    next3.visible = true;

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

    if(mousePressedOver(next3)) {
      tree1.destroy();
      tree2.destroy();
      tree3.destroy();
      tree4.destroy();
      next3.destroy();
      gameState = "round2";
    }
  } else if(gameState === "round2") {

    fish1.visible = true;
    fish2.visible = true;
    fish3.visible = true;
    fish4.visible = true;

    next4.visible = true;

    if(mouseIsOver(fish1)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a fish in its fish tank.", windowWidth/5, windowHeight/5);
      text("The fins are fanned out,", windowWidth/5, windowHeight/4.3);
      text("with marbles & plants", windowWidth/5, windowHeight/3.7);
      text("as decorations", windowWidth/5, windowHeight/3.3);
    }

    if(mouseIsOver(fish2)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("the same fish, but, instead,", windowWidth/5, windowHeight/5);
      text("it is sitting on a plant.", windowWidth/5, windowHeight/4.3);
      text("There is a reflection of the plants", windowWidth/5, windowHeight/3.7);
      text("in the background, to add", windowWidth/5, windowHeight/3.3);
      text("some more to the overall image.", windowWidth/5, windowHeight/2.95);
      text("Again, with the fins fanned out.", windowWidth/5, windowHeight/2.68);
    }

    if(mouseIsOver(fish3)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("the same fish.", windowWidth/5, windowHeight/5);
      text("The colorful shades", windowWidth/5, windowHeight/4.3);
      text("on the fanned fins.", windowWidth/5, windowHeight/3.7);
      text("While the fish is resting", windowWidth/5, windowHeight/3.3);
      text("on the marbles.", windowWidth/5, windowHeight/2.95);
      text("with the plants", windowWidth/5, windowHeight/2.68);
      text("as fillers", windowWidth/5, windowHeight/2.46);
    }

    if(mouseIsOver(fish4)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("the same Betta fish.", windowWidth/5, windowHeight/5);
      text("The fins are fanned.", windowWidth/5, windowHeight/4.3);
      text("In this photo, you can see all", windowWidth/5, windowHeight/3.7);
      text("the different shade of the fins.", windowWidth/5, windowHeight/3.3);
      text("Another thing to notice,", windowWidth/5, windowHeight/2.95);
      text("the background is blurred", windowWidth/5, windowHeight/2.68);
      text("to focus on the fish", windowWidth/5, windowHeight/2.46);
    }

    if(mousePressedOver(next4)) {
      fish1.destroy();
      fish2.destroy();
      fish3.destroy();
      fish4.destroy();
      next4.destroy();
      gameState = "round3";
    }
  } else if(gameState === "round3") {
    
    orange_flower.visible = true;
    pink1_flower.visible = true;
    pink2_flower.visible = true;
    red_flower.visible = true;
    white_flower.visible = true;
    yellow_flower.visible = true;

    next5.visible = true;

    if(mouseIsOver(orange_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("some orange flowers,", windowWidth/5, windowHeight/5);
      text("Looking up towards the sun.", windowWidth/5, windowHeight/4.3);
      text("With a focus on the flowers, while", windowWidth/5, windowHeight/3.7);
      text("giving a blurred look on the flowers", windowWidth/5, windowHeight/3.3);
    }

    if(mouseIsOver(pink1_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a bush with pink flowers.", windowWidth/5, windowHeight/5);
      text("The 3-4 flowers are in focus,", windowWidth/5, windowHeight/4.3);
      text("while the leaves and the other", windowWidth/5, windowHeight/3.7);
      text("flowers are a beautiful background.", windowWidth/5, windowHeight/3.3);
    }

    if(mouseIsOver(pink2_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a bush with similar pink flowers.", windowWidth/5, windowHeight/5);
      text("Now the overall bush is in focus,", windowWidth/5, windowHeight/4.3);
      text("with walls, and a wooden gate", windowWidth/5, windowHeight/3.7);
      text("as fillers to give an", windowWidth/5, windowHeight/3.3);
      text("interesting background.", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(red_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("a bush different shaped leaves,", windowWidth/5, windowHeight/5);
      text("and spiny leaves, you wouldn't", windowWidth/5, windowHeight/4.3);
      text("normally see, every place you go.", windowWidth/5, windowHeight/3.7);
      text("Note:", windowWidth/5, windowHeight/3.3);
      text("You can find beauty, even in the", windowWidth/5, windowHeight/2.95);
      text("oddest and different things.", windowWidth/5, windowHeight/2.68);
    }

    if(mouseIsOver(white_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("white flowers with unique-shaped", windowWidth/5, windowHeight/5);
      text("petals, with green leaves", windowWidth/5, windowHeight/4.3);
      text("The gravel gives more of a", windowWidth/5, windowHeight/3.7);
      text("natural look, since its in", windowWidth/5, windowHeight/3.3);
      text("a natural-looking habitat.", windowWidth/5, windowHeight/2.95);
    }

    if(mouseIsOver(yellow_flower)) {
      textSize(25);
      fill(rgb(127, 127, 127));
      text("See how this picture displays", windowWidth/5, windowHeight/6);
      text("yellow flowers  with green leaves.", windowWidth/5, windowHeight/5);
      text("Something that is different than", windowWidth/5, windowHeight/4.3);
      text("most pictures, is that a couple", windowWidth/5, windowHeight/3.7);
      text("flowers have a look burnt-look.", windowWidth/5, windowHeight/3.3);
      text("This gives a unique twist.", windowWidth/5, windowHeight/2.95);
    }

    if(mousePressedOver(next5)) {
      orange_flower.destroy();
      pink1_flower.destroy();
      pink2_flower.destroy();
      red_flower.destroy();
      white_flower.destroy();
      yellow_flower.destroy();
      next5.destroy();
      gameState = "round4";
    }
  } else if(gameState === "round4") {
    text("Now there will be some bad examples, tune in to see", windowWidth/5, windowHeight/2.95);
  }
}