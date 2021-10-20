function openMicStream() {
    // Create an Audio input
    let mic = new p5.AudioIn();
    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();
    return mic;
}

function openFftStream(input) {
    let fft = new p5.FFT();
    // Bind stream to input
    fft.setInput(input);
    return fft;
}

function drawSpectrumAnalyzer(fftStream) {
    // Get in-sketch spectrum analyzer
    let spectrum = fftStream.analyze();
    noStroke();
    fill(255, 0, 255);  
    for (let i = 0; i< spectrum.length; i++){
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h )
    }
}

function drawWaveform(fftStream) {
    // Get in-sketch waveform
    let waveform = fftStream.waveform();
    stroke(0);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length, 0, width);
        let y = map(waveform[i], -1, 1, -height / 2, height / 2);
        vertex(x, y + height / 2);
    }
    endShape();
}

function drawVolumeMeter(micStream, gain=1) {
    // Get the overall volume (between 0 and 1.0)
    let vol = micStream.getLevel() * gain;
    fill(HSB);
    stroke(0);
    strokeWeight(1);
    
    // Draw an ellipse with height based on volume
    let h = map(vol, 0, 1, height, 0);
    ellipse(width / 2, h - 50, 25, 25);
}