let size = 40;

let colorMatrix = [
  [183, 156, 237],
  [190, 120, 80],
  // [120, 20, 120],
  [214, 143, 214],
  [242, 208, 164],
  // [53, 88, 52],
  [222, 192, 241],
  [254, 93, 38], [242, 192, 120], [250, 237, 202], [193, 219, 179], [126, 188, 137]
]

let r, g, b, temp;
let offset = 50, qx = 0, qy = 0;
let d;

function setup() {
    createCanvas(2000, 2000, WEBGL)
    angleMode(DEGREES)
    
    temp = random(colorMatrix);
    console.log(temp);
    r = temp[0];
    g = temp[1];
    b = temp[2];

    d = random([10, 20, 30, 40, 50, 60]);
  }
  
function draw() {
  background(30)
  

    rotateX(qx);
    rotateY(qy);

  noFill()
  for (var i = 0; i < size; i++) {
      strokeWeight(2);
      stroke(r, g, b);
  
      rotate(2)
  
      beginShape()
      for (var j = 0; j < 360; j += d) {
          var rad = i * 5
          var x = rad * cos(j)
          var y = rad * sin(j)
          var z = tan(frameCount * 0.5 + i * 4) * d * 10
  
          vertex(x, y, z)
      }
      endShape(CLOSE)
  }
  // qx += random([-0.1, 0.1])
  // qy += random([-0.1, 0.1])
}

function keyPressed() {
  if (key == 'r') {
    temp = random(colorMatrix);
    console.log(temp);
    r = temp[0];
    g = temp[1];
    b = temp[2];

    offset = floor(random(20, 60));

    size = floor(random(40, 80));
    // frameCount = 0;
    qx = random([-25, 25, 0]);
    qy = random([-25, 25, 0]);
    d = random([10, 20, 30, 40, 50, 60]);
    console.log(d, qx, qy)
    
    redraw();
  } else if (key == 'q') {
    temp = random(colorMatrix);
    console.log(temp);
    r = temp[0];
    g = temp[1];
    b = temp[2];

    offset = floor(random(20, 60));

    size = floor(random(40, 80));
    // frameCount = 0;
    qx = 0
    qy = 0
    d = random([10, 20, 30, 40, 50, 60]);
    console.log(d, qx, qy)
    redraw();
  }
}
