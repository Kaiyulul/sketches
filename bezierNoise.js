let w = 1000; let h = 1000;
let cnv;

let colorMatrix = [
  // [183, 156, 237],
  // [190, 120, 80],
  // [120, 40, 120],
  // [222, 192, 241],
  [254, 93, 38], [242, 192, 120], [250, 237, 202], [193, 219, 179], [126, 188, 137]
]

let d = 0;
let t = 0;
let c = w * h;

function setup() {
    createCanvas(1000, 1000, WEBGL);
    noFill();
    // noLoop();
    // noStroke();
    // stroke(40);
    rectMode(CENTER);
    // frameRate(1);
    
    background(40);
    stroke(216, 30);
}

function draw() {
    translate(-w, -h);
    var x1 = w * noise(t + c*10) * 2;
    var x2 = w * noise(t + c*20) * 2;
    var x3 = w * noise(t + c*30) * 2;
    var x4 = w * noise(t + c*40) * 2;
    var y1 = h * noise(t + c*50) * 2;
    var y2 = h * noise(t + c*60) * 2;
    var y3 = h * noise(t + c*70) * 2;
    var y4 = h * noise(t + c*80) * 2;

    if (frameCount%2 === 0) {
      bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    } else {
      curve(x1, y1, x2, y2, x3, y3, x4, y4);
    }

    t += 0.002;
    
    if (frameCount % 200 === 0) {
      clear();
      background(40);
    }
    
}

function keyPressed() {
  if (key === 'r') {
    // redraw();

    loop();
  } else if (key === 'q') {
    let temp = random(colorMatrix);
    stroke(temp[0], temp[1], temp[2], 30);
    console.log(temp[0], temp[1], temp[2]);
  } else {
    noLoop();
  }
}

function mousePressed() {
    noStroke();
}


// var r = p5.map(p5.frameCount, 1, p5.frameCount, 140, 255)
//         var g = p5.map(p5.cos(p5.frameCount/2), -1, 1, 120, 160)
//         var b = p5.map(p5.sin(p5.frameCount/2), -1, 1, 20, 80)
//         p5.stroke(r, g, b, 30);

//         p5.translate(-w, -h);
//         p5.rotateX(p5.mouseX/100);
//         p5.rotateY(p5.mouseY/100);



