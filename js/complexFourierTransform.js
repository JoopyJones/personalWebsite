let x = [];
let y = [];
let fourierX;
let fourierY;
let time = 0;
let path = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  const skip = 1;
  for (let i = 0; i < drawing.length; i+=skip) {
    x.push((drawing[i].x*.9));
    y.push((drawing[i].y*.9)-25);
  }
  fourierX = dft(x);
  fourierY = dft(y);

  fourierX.sort((a, b) => b.amp - a.amp);
  fourierY.sort((a, b) => b.amp - a.amp);
}

function epiCycles(x, y, rotation, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(255,255,255,50)
    noFill();
    ellipse(prevx, prevy, radius*2);
    stroke(255);
    line(prevx, prevy, x, y);
  }
  return createVector(x, y);
}

function draw() {
  background('#0d1117');

  let vx = epiCycles(width / 2, 90, 0, fourierX);
  let vy = epiCycles(150, height / 2 + 75, HALF_PI, fourierY);
  let v = createVector(vx.x, vy.y);
  path.unshift(v);

  stroke(255,255,255,50)
  line(vx.x, vx.y, v.x, v.y);
  line(vy.x, vy.y, v.x, v.y);

  beginShape();
  stroke(255);
  noFill();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i].x, path[i].y);
  }
  endShape();

  const dt = TWO_PI / fourierY.length;
  time += dt;

  if (time > TWO_PI) {
    time = 0;
    // path = [];
  }

}
