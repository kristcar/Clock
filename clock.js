function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 153);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(153, 255, 102);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  rotate(secondAngle);
  stroke(153, 255, 102);
  line(0, 0, 100, 0);
  pop();

  stroke(51, 153, 0);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  push();
  rotate(minuteAngle);
  stroke(51, 153, 0);
  line(0, 0, 75, 0);
  pop();

  stroke(0, 102, 0);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke(0, 102, 0);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
}
