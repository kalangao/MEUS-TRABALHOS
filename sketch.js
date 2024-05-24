function setup() {
  createCanvas(2000, 2000);
  background('red')
}

function draw() {
  fill("rgb(0,0,0)");
  stroke("rgb(7,5,3)")
  if (mouseIsPressed)
  circle(mouseX,mouseY,30,30)
}
