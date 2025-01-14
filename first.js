function setup() {
  createCanvas(960, 540, WEBGL);
}

function draw() {
  
  background(220);
  
  
  push()
  translate(50,50)
  torus()
  pop()
  
  
  orbitControl()
  
}
