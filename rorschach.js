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

var pos, npos;
var maxPoints, maxDist, maxSize;

var points1 = [];
var points2 = [];
var points3 = [];
var points4 = [];

let deg = 0;

function setup() {
    createCanvas(2000, 2000);

    generate();
    fill(0);
    // frameRate(1);
    noLoop();
    strokeWeight(2)
}

function draw() {
  generate();
  randomGenerator();
}

function generate() {
  background(40);

  points1 = [];
  points2 = [];
  points3 = [];
  points4 = [];

  pos = createVector(width, height);
  npos = createVector(10, 10);

  maxPoints = floor(random(768, 1024));
  maxDist = floor(random(200, 500));
  maxSize = floor(random(width/5, width/10));
}

function randomGenerator() {
  let temp = random(colorMatrix);
  console.log(temp);
  let r = temp[0];
  let g = temp[1];
  let b = temp[2];

  strokeWeight(5);
  rotate(deg);

  if (points1.length < maxPoints) {
    for (var j = 0; j < maxPoints/20; j++) {
      append(points1, createVector(pos.x, pos.y));
      append(points2, createVector(width - pos.x, pos.y));
      append(points3, createVector(width - pos.x, height - pos.y));
      append(points4, createVector(pos.x, height - pos.y));
      for (var i = 0; i < points1.length; i++) {
        
        if (dist(pos.x, pos.y, points1[i].x, points1[i].y) < maxDist) {
          stroke(r, g, b, 25);
          line(pos.x, pos.y, points1[i].x, points1[i].y);
        }
        
        if (dist(width - pos.x, pos.y, points2[i].x, points2[i].y) < maxDist) {
          stroke(r, g, b, 25);
          line(width - pos.x, pos.y, points2[i].x, points2[i].y);
        }
        
        if (dist(width - pos.x, height - pos.y, points3[i].x, points3[i].y) < maxDist) {
          stroke(r, g, b, 25);
          line(width - pos.x, height - pos.y, points3[i].x, points3[i].y);
        }
        
        if (dist(pos.x, height - pos.y, points4[i].x, points4[i].y) < maxDist) {
          stroke(r, g, b, 25);
          line(pos.x, height - pos.y, points4[i].x, points4[i].y);
        }
        
      }
      pos.x += random(-maxSize, maxSize);
      pos.y += random(-maxSize, maxSize);
      
      if (pos.x < width*random(0.1, 0.2) || pos.x > width*random(0.5, 0.9)) {
        pos.x = width/random(2, 3);
      }
      
      if (pos.y < height*random(0.1, 0.2) || pos.y > height*random(0.5, 0.9)) {
        pos.y = height/random(2, 3);
      }
      
      npos.x += random(0.1, 0.5);
      npos.y += random(0.1, 0.5);
    }
  }
}

function keyPressed() {
  if (key == 'r') {
    generate();
    randomGenerator();
  } else if (key == 'S') {
    save("rorschach.png");
  }
}