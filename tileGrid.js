let pX = 180, pY = 180, n = 40;
let mX, mY;
let r = false;
let sW = 2;
let x = 1000; 
let y = 1000;

let h = 15, s = 10, b = 20;

let cV = 50;

let cA = [];

function setup() {
    createCanvas(x, y);
    rectMode(CENTER);
    // noLoop();
    frameRate(3)
}


// trying to texturize background
function texturize(density) {
    for (let  i = 0; i < density; i++) {
        stroke(h, s - Math.random() * 5, b + Math.random() * 8, 30);
        let x1 = Math.random() * x;
        let y1 = Math.random() * y;
        let theta = Math.random() * 2 * Math.PI;
        let segmentLength = Math.random() * 5 + 2;
        let x2 = Math.cos(theta) * segmentLength + x1;
        let y2 = Math.sin(theta) * segmentLength + y1;

        line(x1, y1, x2, y2);
    }
}

function colorVar(rgb) {
    return(random(rgb, rgb + cV));
}

function draw() {
    // background(40);
    
    // let grid = random(n, n*5);
    // let dim = random(n, grid);
    
    // let grid = n;
    // let dim = n/2;

    let grid = n;
    let dim = n;

    // console.log(grid, dim)

    colorMode(HSB, 100);
    background(h, s, b);
    texturize(20000);

    colorMode(RGB);

    if (frameCount === 1) {  
        mX = (x - grid * floor(
                (x - pX * 2 - n * 2)/grid)
            )/2;
        mY = (y - grid * floor(
                (y - pY * 2 - n * 2)/grid)
            )/2;
        sW = map(n, 40, 400, 2, 10);
    }

    strokeWeight(sW);
    let colorArray = [
        [254, 93, 38],
        [242, 192, 120],
        [250, 237, 202],
        [193, 219, 179],
        [126, 188, 137]
    ]

    for (let i = mX; i <= x - mX; i+= grid) {
        index = Math.floor(Math.random() * (colorArray.length - 1 + 1));
        cA = colorArray[index];
        console.log(cA, cA[0], cA[1], cA[2]);
        fill(colorVar(cA[0]), colorVar(cA[1]), colorVar(cA[2]))
        for (let j = mY; j <= y - mY; j+= grid) {
            push();
            translate(i, j);

            rotate(radians(i));
            noStroke();

            // fill(colorVar(45), colorVar(114), colorVar(143));
            // fill(colorVar(254), colorVar(93), colorVar(38));
            
            if (frameCount % 4 === 0) {
                rect(0, 0, random(dim), random(dim * 2));
            } else {
                ellipse(0, 0, random(dim), random(dim * 2));
            }

            pop();
        }

    }

    for (let i = mX; i <= x - mX; i+= grid) {
        index = Math.floor(Math.random() * (colorArray.length - 1 + 1));
        cA = colorArray[index];
        fill(colorVar(cA[0]), colorVar(cA[1]), colorVar(cA[2]))
        for (let j = mY; j <= y - mY; j+= grid) {
            push();
            translate(i, j);
            strokeWeight(2);

            // stroke(210, 210, 210, 150);
            // stroke(40);

            if (frameCount % 5 === 0) {
                noStroke();
                // fill(colorVar(239), colorVar(123), colorVar(69));
                ellipse(0 + random(0, n), 0 - random(0, n), random(dim));
                circle(0 - random(0, n), 0 + random(0, n), random(dim));
            } else {
                rotate(radians(j))
                // fill(239, 123, 69);
                rect(0, 0, random(5, dim), random(5, dim));
            }

            pop();
        }
    }

    for (let i = mX; i <= x - mX; i+= grid * 2) {
        index = Math.floor(Math.random() * (colorArray.length - 1 + 1));
        cA = colorArray[index];
        // console.log(cA[0]);
        fill(colorVar(cA[0]), colorVar(cA[1]), colorVar(cA[2]))
        for (let j = mY; j <= y - mY; j+= grid) {
            push();
            translate(i, j);
            strokeWeight(2);

            rotate(random(TWO_PI));
            
            if (frameCount % 6 === 0) {
                rect(0 + random(-n, n), 0 + random(-n, n), random(dim), random(dim));
            } else {
                noStroke();
                circle(0, 0, dim/2);
            }

            pop();
        }
    }
}

function keyPressed() {
    if (key === 's') {
        saveGif('tilesMe', 60);
      } else if (key === 'q') {
        noLoop();
      }
}