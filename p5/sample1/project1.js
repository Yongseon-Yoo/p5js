let canvasSize = 500;
let outerRings = [];

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB, 360, 100, 100);
  
  let colors = [
    color(0, 50, 90),
    color(30, 50, 90),
    color(60, 50, 90),
    color(120, 50, 90),
    color(180, 50, 90),
    color(240, 50, 90),
    color(280, 50, 90),
    color(320, 50, 90),
  ];
  outerRings = colors.reverse();

  background(35, 10, 95);
  
  let cx = width / 2;
  let cy = height / 2;
  
  const staticT = 0;
  
  push();
  rectMode(CENTER);
  noFill();
  
  translate(cx, cy);
  
  for (let i = 0; i < outerRings.length; i++) {
    let baseSize = canvasSize * 0.9;
    let sizeDiff = (30 * i) * (canvasSize / 800);
    let scaleEffect = 5; 
    let currentSize = baseSize - sizeDiff + scaleEffect;
    let hueOffset = (i * 10) % 360; 
    stroke(hueOffset, 50, 90, 0.7);
    strokeWeight(10 * (canvasSize / 800));
    
    rect(0, 0, currentSize, currentSize);
  }
  pop();

  push();
  translate(cx, cy);
  noFill();
  strokeWeight(20 * (canvasSize / 800));
  
  for (let i = 0; i < 4; i++) {
    let baseRadius = 250 * (canvasSize / 800);
    let radiusDiff = (40 * i) * (canvasSize / 800);
    
    let c1 = color(30, 80, 80);
    let c2 = color(30, 50, 90);
    
    let lerpValue = 0.5; 
    let animatedColor = lerpColor(c1, c2, lerpValue);
    
    stroke(animatedColor);
    
    let sizePulse = 0; 
    let currentRadius = baseRadius - radiusDiff + sizePulse;
    
    ellipse(0, 0, currentRadius * 2, currentRadius * 2);
  }
  pop();

  push();
  
  let offsetX = 0;
  let offsetY = 0;
  translate(cx + offsetX, cy + offsetY);
  
  let shapeScale = canvasSize / 800;
  stroke(30);
  strokeWeight(2 * shapeScale);
  fill(30, 50, 90);
  
  quad(-80 * shapeScale, 0, 0, 60 * shapeScale, 80 * shapeScale, 0, 0, -60 * shapeScale);

  let eyeSize = 60 * shapeScale; 
  fill(0);
  ellipse(0, 0, eyeSize, eyeSize); 
  
  fill(360);
  ellipse(15 * shapeScale, -15 * shapeScale, 10 * shapeScale, 10 * shapeScale); 
  
  fill(0, 80, 80);
  triangle(0, -60 * shapeScale, -20 * shapeScale, -90 * shapeScale, 20 * shapeScale, -90 * shapeScale); 
  
  let triX = 40 * shapeScale; 
  let triY = 20 * shapeScale; 
  let triColor = color(60, 80, 90);  
  fill(triColor);
  triangle(triX, triY, triX + 20 * shapeScale, triY, triX + 10 * shapeScale, triY - 20 * shapeScale);
  
  pop();
  
  
  push();
  fill(0);
  textSize(24 * (canvasSize / 800));
  
  textAlign(RIGHT, TOP);
  
  let textMargin = 20 * (canvasSize / 800);
  let textX = width - textMargin; 
  let textY = textMargin;
  
  text("유용선", textX, textY);
  text("20211798", textX, textY + 30 * (canvasSize / 800));
  pop();
}

function draw() {
}