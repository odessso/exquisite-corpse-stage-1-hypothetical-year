let images = [];
let numberOfImages = 26;
let imageWidth, imageHeight;
let currentImageIndex = 0;
let lastImageChangeTime = 0;
let imageChangeInterval = 60; 
let daysPassed = 0;

let daysMapping = [
  14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15
];

function preload() {
  for (let i = 1; i <= numberOfImages; i++) {
    images.push(loadImage('images/h' + i + '.jpg'));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageWidth = images[0].width;
  imageHeight = images[0].height;
  background(0);
}

function draw() {
  background(0);
  
  if (frameCount - lastImageChangeTime >= imageChangeInterval) {

    currentImageIndex = (currentImageIndex + 1) % numberOfImages;
    lastImageChangeTime = frameCount;

    daysPassed += daysMapping[currentImageIndex];

    if (currentImageIndex === 0) {
      daysPassed = 1;
    }
  }

  let x = width / 2 - imageWidth / 2;
  let y = height / 2 - imageHeight / 2;
  image(images[currentImageIndex], x, y);

  textSize(20);
  fill(255);
  textAlign(CENTER, TOP);
  textSize (35)
  text("" + daysPassed, width / 2, 20);
}

