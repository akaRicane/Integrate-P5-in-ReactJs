let mic;
let fft;

function setup() {
    createCanvas(windowWidth, 300);
  
    // Create an Audio input
    mic = new p5.AudioIn();
  
    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();

    fft = new p5.FFT();
    fft.setInput(mic)
}

function draw() {
    background(200);
    
    // Get in-sketch spectrum analyzer
    let spectrum = fft.analyze();
    noStroke();
    fill(255, 0, 255);
    for (let i = 0; i< spectrum.length; i++){
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h )
    }
    
    // Get in-sketch waveform
    let waveform = fft.waveform();
    stroke(0);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, -height / 2, height / 2);
        vertex(x, y + height / 2);
    }
    endShape();
    
    // Get the overall volume (between 0 and 1.0)
    let vol = mic.getLevel() * 5;
    fill(HSB);
    stroke(0);
    strokeWeight(1);
    
    // Draw an ellipse with height based on volume
    let h = map(vol, 0, 1, height, 0);
    ellipse(width / 2, h - 50, 25, 25);
  }