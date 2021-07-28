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

//creating the player Sofia
var Sofia = createSprite(20,25,12,12);
Sofia.shapeColor = "blue";

//creating the maze walls (wall1 - wall22)
var wall1=createSprite(18,50,180,15);
var wall2=createSprite(198,28,15,56);
var wall3=createSprite(198,50,100,15);
var wall4=createSprite(150,97,15,109);
var wall5=createSprite(95,96,93,15);
var wall6=createSprite(52,148,100,15);
var wall7=createSprite(350,52,15,98);
var wall8=createSprite(299,99,15,100);
var wall9=createSprite(245,98,95,15);
var wall10=createSprite(198,195,15,208);
var wall11=createSprite(52,200,193,15);
var wall12=createSprite(319,142,55,15);
var wall13=createSprite(332,199,135,15);
var wall14=createSprite(130,234,450,15);
var wall15=createSprite(99,268,100,15);
var wall16=createSprite(142,310,15,100);
var wall17=createSprite(50,322,100,15);
var wall18=createSprite(150,360,200,15);
var wall19=createSprite(330,267,160,15);
var wall20=createSprite(243,310,15,100);
var wall21=createSprite(350,351,15,95);
var wall22=createSprite(326,348,50,15);
//given colour to the maze
wall1.shapeColor="hotpink";
wall2.shapeColor="hotpink";
wall3.shapeColor="hotpink";
wall4.shapeColor="hotpink";
wall5.shapeColor="hotpink";
wall6.shapeColor="hotpink";
wall7.shapeColor="hotpink";
wall8.shapeColor="hotpink";
wall9.shapeColor="hotpink";
wall10.shapeColor="hotpink";
wall11.shapeColor="hotpink";
wall12.shapeColor="hotpink";
wall13.shapeColor="hotpink";
wall14.shapeColor="hotpink";
wall15.shapeColor="hotpink";
wall16.shapeColor="hotpink";
wall17.shapeColor="hotpink";
wall18.shapeColor="hotpink";
wall19.shapeColor="hotpink";
wall20.shapeColor="hotpink";
wall21.shapeColor="hotpink";
wall22.shapeColor="hotpink";

//create cup
var cup = createSprite(400,400,40,150)
  cup.shapeColor="blue"
  
function draw() {
  //setting the background color to pink
  background("lime");
  
  createEdgeSprites();
  Sofia.bounceOff(edges);
  
  Sofia.velocityX = 0;
  Sofia.velocityY = 0;
  
  if (keyDown("UP_ARROW")) {
  Sofia.velocityY = -4;
    
  }
  if (keyDown("DOWN_ARROW")) {
    Sofia.velocityY = 4;
    
  }
  if (keyDown("RIGHT_ARROW")) {
    Sofia.velocityX = 4;
  }
  if (keyDown("LEFT_ARROW")) {
    Sofia.velocityX = -4;
    
  }
  
  if (Sofia.isTouching(wall1) || Sofia.isTouching(wall2)|| Sofia.isTouching(wall3)|| Sofia.isTouching(wall4)|| Sofia.isTouching(wall5)|| Sofia.isTouching(wall6)|| Sofia.isTouching(wall7)
  || Sofia.isTouching(wall8)|| Sofia.isTouching(wall9)|| Sofia.isTouching(wall10)|| Sofia.isTouching(wall11)|| Sofia.isTouching(wall12)
  || Sofia.isTouching(wall13)|| Sofia.isTouching(wall14)|| Sofia.isTouching(wall15)|| Sofia.isTouching(wall16)|| Sofia.isTouching(wall17)|| Sofia.isTouching(wall18)|| Sofia.isTouching(wall19)|| Sofia.isTouching(wall20)|| Sofia.isTouching(wall21)
  || Sofia.isTouching(wall22)) {
    Sofia.x = 20;
    Sofia.y = 25;
     
  }
  
 if (Sofia.collide(cup)) {
    background("white");
  }
   
  
drawSprites();

}

function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
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
