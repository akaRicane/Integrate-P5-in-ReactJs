let mic;
let fft;

function setup() {
    createCanvas(windowWidth, 300);
    mic = openMicStream();
    fft = openFftStream(mic);
}

function draw() {
    background(110);
    
    drawSpectrumAnalyzer(fft);
    drawWaveform(fft);
    drawVolumeMeter(mic, 2);
  }