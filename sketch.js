var line1, line2, line3, line4, line5;


function setup() {
  createCanvas(800,608);
//  line1  = createSprite(0,608,10,608);
  line2 = createSprite(200,608,10,608);
  line3 = createSprite(400,608,10,608);
  line4 = createSprite(600,608,10,608);
  line5 = createSprite(800,608,10,608);
  line(0,0,0,608)

  // line1.shapeColor = "cyan"
  // line2.shapeColor = "cyan"
  // line3.shapeColor = "cyan"
  // line4.shapeColor = "cyan"
  // line5.shapeColor = "cyan"
}

function draw() {
  background("black");
 //line1.display();    
 line2.display();    
 line3.display();    
 line4.display();    
 line5.display();    
 }
