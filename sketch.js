function setup() {
  createCanvas(800, 800);
  background('red')
}

function draw() {
  fill("rgb(0,0,0)");
  stroke("rgb(7,5,3)")
  if (mouseIsPressed)
  circle(mouseX,mouseY,30,30)
}
