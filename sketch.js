function setup() {
  createCanvas(400, 200);
  background(255);
}

function draw() {
  ellipseMode(CORNER);
  fill(255, 170, 120);
  noStroke();
  ellipse(20, 20, 50);

  fill(255, 120, 170);
  ellipse(90, 20, 50);

  fill(254, 228, 189);
  ellipse(160, 20, 50);

  fill(255, 195, 189);
  rect(20, 90, 185, 40, 20);
  fill(255);
  text("warm and", 84, 105, 130, 160);


  fill(203, 236, 164);
  rect(20, 140, 185, 40, 20);
  fill(255);
  text("welcoming", 81, 154, 130, 160);


  fill(221, 42, 123);
  rect(230, 20, 150, 160, 20);
  fill(255);
  let s = "Don't be so busy to forget to enjoy your life!";
  text(s, 240, 85, 130, 160);
}
