let mic, fft;

function setup() {
    createCanvas(windowWidth, 300);
  
    // Create an Audio input
    mic = new p5.AudioIn();
  
    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();
  }
  
function draw() {
    background(200);
  
    // Get the overall volume (between 0 and 1.0)
    let vol = mic.getLevel() * 2.5;
    fill(127);
    stroke(0);
  
    // Draw an ellipse with height based on volume
    let h = map(vol, 0, 1, height, 0);
    ellipse(width / 2, h - 50, 25, 25);
  }