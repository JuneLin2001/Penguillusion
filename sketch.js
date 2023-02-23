let spe_img
let penguin_img
let bg_img

function preload() {

  let penguinIndex = int(fxRandom(1, 10));
  let speIndex = int(fxRandom(1, 6));
  let bgIndex = int(fxRandom(1, 8));

  penguin_img = loadImage('images/penguin-' + penguinIndex + '.png');
  spe_img = loadImage('images/spe-' + speIndex + '.png');
  bg_img = loadImage('images/bg-' + bgIndex + '.png');
}

function setup() {

  let canvasWidth = windowWidth;
  if (windowHeight < windowWidth)
    canvasWidth = windowHeight;
  createCanvas(canvasWidth, canvasWidth);
  background(225);
  image(bg_img, 0, 0, width, height);
  image(penguin_img, 0, 0, width, height);
  image(spe_img, 0, 0, width, height);


  if (isFxpreview) {
    fxpreview();
  }
}
