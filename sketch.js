let sound, amplitude;

function preload() {
  sound = loadSound("songsparrowisolated.wav");
}

function setup() {
  
  let cnv = createCanvas(600,600);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background("#AB8F7B");
  noStroke();

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 600);
  fill('#ECE9E5')  
  ellipse(width/2, height/2, size*240, size*240);
  fill('#844E3A')  
  ellipse(width/2, height/2, size*220, size*220);
  fill('#ECE9E5')  
  ellipse(width/2, height/2, size*120, size*120);
  fill('#97735F')  
  ellipse(width/2, height/2, size*100, size*100);
 
  fill('#E9E6E4')  
  ellipse(width/2, height/2, size*40, size*40);
  
   
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}