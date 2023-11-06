function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)
  }
  
function draw() {
  background(30)
  
  rotateX(45)
  rotateY(-45)

  noFill()


  for (var i = 0; i < 50; i++) {
      var r = map(frameCount / 2, frameCount/2, frameCount, 100, 255)
      var g = map(sin(frameCount/2), -1, 1, 100, 200)
      var b = map(cos(frameCount/2), -1, 1, 125, 225)

      strokeWeight(map(sin(frameCount), -1, 1, 1, 3))
      stroke(r, g, b)
  
      rotate(frameCount / 150)
  
      beginShape()
      for (var j = 0; j < 360; j += 50) {
          var rad = i * 5
          var x = rad * cos(j)
          var y = rad * sin(j)
          var z = tan(frameCount * 0.5 + i * 4) * 75
  
          vertex(x, y, z)
      }
      endShape(CLOSE)
  }
}