function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasContainer");
  background(220);
  for (let i = 0; i < totalNum; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  for(let x = 0; x < width; x++) {
    ground[x] = height;
  } 
}

let particles = [];
let totalNum = 120; 
let ground = [];

function draw() {
  background(78, 102, 149);
  fill(30);
  noStroke();
  rect(0, 450, 600, 250);
  fill(225);
  rect(0, 500, 600, 100);
  textSize(15)
  text("click q key", 20, 30)
  text("use mouse clicker to slow down snow", 320, 30)
  noStroke();
  fill(225);
  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
    particles[i].reappear();
    particles[i].pile();
    particles[i].keyPressed();
    if (mouseIsPressed) {
      particles[i].slowDown();
    }
  }
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dia = (random(10));
    this.xSpd = 0;
    this.ySpd = 7;
  }
  
  move(){
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    ellipse(0, 0, this.dia/2, this.dia);
    pop();
  }
  
  reappear(){
    if (this.x < 0) {
      this.x = width;
    }
    else if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 500;
    }
    else if (this.y > 500) {
      this.y = 0;
    } 
  }  
  
  slowDown(){
    this.xSpd = this.xSpd * 0.99;
    this.ySpd = this.ySpd * 0.99;
  }
  
  keyPressed (){
  if (key == "q"){
    this.xSpd = this.xSpd + 0.008;
    this.ySpd = this.ySpd + 0.05;
    noStroke();
    
    fill(188);
    ellipse(40, 50, 100, 80);
    ellipse(120, 45, 100, 80);
    ellipse(200, 50, 100, 80);
    ellipse(280, 45, 100, 80);
    ellipse(360, 50, 100, 80);
    ellipse(420, 45, 100, 80);
    ellipse(500, 50, 100, 80);
    ellipse(580, 45, 100, 80);
    
    fill(225);
    ellipse(40, 20, 100, 80);
    ellipse(120, 15, 100, 80);
    ellipse(200, 20, 100, 80);
    ellipse(280, 15, 100, 80);
    ellipse(360, 20, 100, 80);
    ellipse(420, 15, 100, 80);
    ellipse(500, 20, 100, 80);
    ellipse(580, 15, 100, 80);
  }
 }

  pile (){
    stroke(225);
    ellipse(this.x, 500, 6, 5);
  }
}