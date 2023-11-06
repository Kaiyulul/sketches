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
let temp, z, q = 1;

function setup() {
    createCanvas(2000, 2000, WEBGL);
    background(40);
    noStroke();

    off = random(0, 50);
    w = 50;
    x = width/10;
    y = height/10;
    temp = random(colorMatrix);
  }
  
function draw() {

    off += 0.01;
    let n = noise(off) * 3;

    // fill(240 - n, 240 / n, 240 / n);
    fill(temp[0]/n, temp[1]/n, temp[2]/n)

    translate(-width/2, -height/2);
    if (q === 1) {
        if (0 <= z < 0.25) {
            ellipse(x, (height / 2), 20 * n, w / n)
            ellipse(width-x, (height / 2), 20 * n, w / n)
        } else if (0.25 <= z < 0.5) {
            ellipse((width / 2), y, w / n, 20 * n)
            ellipse((width / 2), height-y, w / n, 20 * n)
        } else if (0.5 <= z < 0.75) {
            ellipse((height / 2) + 100 - x, (height / 2), 20 * n, w / n)
            ellipse((height / 2) - 100 + x, (height / 2), 20 * n, w / n)
        } else if (0.75 <= z <= 1) {
            ellipse((height / 2), (height / 2)  + 100 - y, w / n, 20 * n)
            ellipse((height / 2), (height / 2)  - 100 + y, w / n, 20 * n)
        }
    } else if (q === 0) {
        if (z < 0.5) {
            ellipse(x, (height / 2), 20 * n, w / n)
            ellipse(width-x, (height / 2), 20 * n, w / n)
            
            ellipse((width / 2), y, w / n, 20 * n)
            ellipse((width / 2), height-y, w / n, 20 * n)
        } else if (0.5 <= z) {
            ellipse((height / 2) + 100 - x, (height / 2), 20 * n, w / n)
            ellipse((height / 2) - 100 + x, (height / 2), 20 * n, w / n)

            ellipse((height / 2), (height / 2)  + 100 - y, w / n, 20 * n)
            ellipse((height / 2), (height / 2)  - 100 + y, w / n, 20 * n)
        }
    }

    y += height * 0.0009;
    x += width * 0.0009;
    w += width * 0.0009;

    if (y>height/2) {
        setup()
    }

}

function reset(){
    off = 0;
    w = 100;
    y = 200;
}

function keyPressed() {
    if (key === 'r') {
        z = random(0, 1);
        console.log(z)
        q = 1;
        setup();
    }
    if (key === 't') {
        z = random(0, 1);
        console.log(z)
        q = 0;
        setup();
    }
    if (key === 'q') w += width/50;
    if (key === 'e') w -= width/50;
}