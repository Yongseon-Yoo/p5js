let winkTime = 0; 
let blushAlpha = 0; 

function setup() {
    createCanvas(600, 400);
}

function keyPressed() {
    if (key === 'w' || key === 'W') {
        winkTime = 30;
    }
    if (key === 's' || key === 'S') {
        saveGif('my_caricature_final.gif', 10);
    }
}

function draw() {
    
    background('#F5F1EB');
    drawBackgroundPattern();

    drawShadow();

    updateInteractionState();

    const centerX = width / 2;
    const centerY = height / 2 + 20;

    drawBackHair(centerX, centerY);
    drawFace(centerX, centerY);
    drawBlush(centerX, centerY);
    drawEyes(centerX, centerY);
    drawNose(centerX, centerY);
    drawMouth(centerX, centerY);
    drawFrontHair(centerX, centerY);

    drawInfoText();
}

function updateInteractionState() {
    if (winkTime > 0) winkTime--;
    if (mouseIsPressed) {
        blushAlpha = min(blushAlpha + 15, 100);
    } else {
        blushAlpha = max(blushAlpha - 4, 0);
    }
}


function drawBackgroundPattern() {
    stroke('#E8E0D5');
    strokeWeight(1);
    for (let i = -width; i < width; i += 15) {
        line(i, 0, i + height, height);
    }
}

function drawShadow() {
    noStroke();
    fill(0, 0, 0, 20);
    ellipse(width / 2, height / 2 + 150, 200, 50);
}

function drawBackHair(cx, cy) {
    noStroke();
    randomSeed(99);

    fill(0, 0, 0, 200);
    for (let i = 0; i < 150; i++) {
        const hairWidth = 290;
        const hairHeight = 250;
        const hairOffsetY = -55;
        
        let angle = random(TWO_PI);
        let r = sqrt(random());
        let x = cx + cos(angle) * r * (hairWidth / 2);
        let y = cy + hairOffsetY + sin(angle) * r * (hairHeight / 2);
        let d = random(30, 70);
        
        ellipse(x, y, d, d);
    }
}

function drawFrontHair(cx, cy) {
    noStroke();
    fill(0);
    const hairY = cy -110
    ;
    
    ellipse(cx - 40, hairY, 180, 160);  
    ellipse(cx + 40, hairY, 180, 160);
}


function drawFace(cx, cy) {
    noStroke();
    fill('#F2D3B3');
    ellipse(cx, cy, 190, 230);
}

function drawBlush(cx, cy) {
    if (blushAlpha > 0) {
        noStroke();
        fill(255, 0, 0, blushAlpha);
        ellipse(cx - 55, cy + 30, 40, 25);
        ellipse(cx + 55, cy + 30, 40, 25);
    }
}

function drawEyes(cx, cy) {
    const leftEyeX = cx - 38;
    const rightEyeX = cx + 38;
    const eyeY = cy - 10;

    if (winkTime === 0) {
        drawSingleEye(leftEyeX, eyeY);
    } else {
        stroke(0);
        strokeWeight(3);
        noFill();
        arc(leftEyeX, eyeY, 40, 20, 0, PI);
    }
    drawSingleEye(rightEyeX, eyeY);
}

function drawSingleEye(eyeX, eyeY) {
    fill(255);
    stroke(200);
    strokeWeight(1);
    ellipse(eyeX, eyeY, 45, 35);

    let pupilX = map(mouseX, 0, width, eyeX - 6, eyeX + 6, true);
    let pupilY = map(mouseY, 0, height, eyeY - 6, eyeY + 6, true);
    
    noStroke();
    fill('#6E4A2F');
    ellipse(pupilX, pupilY, 22, 22);

    fill(0);
    ellipse(pupilX, pupilY, 10, 10);
    
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(eyeX, eyeY, 45, 35, PI, TWO_PI);
}

function drawNose(cx, cy) {
    stroke(80);
    strokeWeight(2);
    line(cx, cy + 20, cx, cy + 50);
}

function drawMouth(cx, cy) {
    const mouthY = cy + 65;
    noFill();
    strokeWeight(3);
    stroke('#C85A5A');
    arc(cx, mouthY, 50, 30, 0.1 * PI, 0.9 * PI);
    arc(cx - 24, mouthY + 4, 10, 5, 0.5 * PI, PI);
    arc(cx + 24, mouthY + 4, 10, 5, 0, 0.5 * PI);
}

function drawInfoText() {
    noStroke();
    fill(50);
    textSize(16);
    textAlign(LEFT, TOP);
    text('유용선\n20211798', 25, 25);
}