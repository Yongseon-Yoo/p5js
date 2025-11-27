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
}

function draw() {
  background(35, 10, 95);
  
  let cx = width / 2;
  let cy = height / 2;
  
  let t = frameCount * 0.05;
  let t_slow = frameCount * 0.01;

  push();
  rectMode(CENTER);
  noFill();
  
  translate(cx, cy);
  rotate(sin(t_slow * 0.1) * PI / 30);
  
  for (let i = 0; i < outerRings.length; i++) {
    let baseSize = canvasSize * 0.9;
    let sizeDiff = (30 * i) * (canvasSize / 800);
    
    let scaleEffect = sin(t_slow * 0.5) * 5 + 5;
    let currentSize = baseSize - sizeDiff + scaleEffect;

    let hueOffset = (i * 10 + frameCount * 1.5) % 360;
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
    let lerpValue = (sin(t * 0.8 + i * 0.5) + 1) / 2;
    let animatedColor = lerpColor(c1, c2, lerpValue);
    
    stroke(animatedColor);
    
    let sizePulse = sin(t * 1.2 + i * 0.8) * 10 * (canvasSize / 800);
    let currentRadius = baseRadius - radiusDiff + sizePulse;
    
    ellipse(0, 0, currentRadius * 2, currentRadius * 2);
  }
  pop();

  push();
  
  let offsetX = cos(t * 0.5) * 30 * (canvasSize / 800);
  let offsetY = sin(t * 0.5) * 30 * (canvasSize / 800);
  translate(cx + offsetX, cy + offsetY);
  
  rotate(t);
  
  let shapeScale = canvasSize / 800;
  stroke(30);
  strokeWeight(2 * shapeScale);
  fill(30, 50, 90);
  quad(-80 * shapeScale, 0, 0, 60 * shapeScale, 80 * shapeScale, 0, 0, -60 * shapeScale);

  let eyeSize = (60 + sin(t * 2) * 15) * shapeScale;
  fill(0);
  ellipse(0, 0, eyeSize, eyeSize);
  
  fill(360);
  ellipse(15 * shapeScale, -15 * shapeScale, 10 * shapeScale, 10 * shapeScale);
  
  fill(0, 80, 80);
  triangle(0, -60 * shapeScale, -20 * shapeScale, -90 * shapeScale, 20 * shapeScale, -90 * shapeScale);
  
  let triX = (40 + sin(t * 1.5) * 10) * shapeScale;
  let triY = (20 + cos(t * 1.5) * 10) * shapeScale;
  let triColor = lerpColor(color(60, 80, 90), color(30, 80, 90), (sin(t * 3) + 1) / 2);
  fill(triColor);
  triangle(triX, triY, triX + 20 * shapeScale, triY, triX + 10 * shapeScale, triY - 20 * shapeScale);

  pop();
  
  push();
  rectMode(CENTER);
  noStroke();
  
  translate(cx, cy);
  rotate(t_slow * 5);

  let bandColor1 = lerpColor(color(0, 70, 90, 0.6), color(280, 70, 90, 0.6), (sin(t * 0.5) + 1) / 2);
  fill(bandColor1);
  
  rect(0, 0, width * 1.5, 30 * (canvasSize / 800));

  rotate(PI / 2);
  let bandColor2 = lerpColor(color(120, 70, 90, 0.6), color(240, 70, 90, 0.6), (cos(t * 0.5) + 1) / 2);
  fill(bandColor2);
  rect(0, 0, width * 1.5, 30 * (canvasSize / 800));

  pop();
  
  fill(0);
  textSize(24 * (canvasSize / 800));
  
  textAlign(RIGHT, TOP);
  
  let textMargin = 20 * (canvasSize / 800);
  let textX = width - textMargin; 
  let textY = textMargin;
  
  text("유용선", textX, textY);
  text("20211798", textX, textY + 30 * (canvasSize / 800));
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('p5과제 5', 10, { delay: 400 });
  }
}
