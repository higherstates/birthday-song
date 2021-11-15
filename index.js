// The keys and notes variables store the piano keys
// I'm not using the black keys this time
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ','];
// const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white')
// const blackKeys = document.querySelectorAll('.key.black')
const notes = [];

keys.forEach(key => {
  notes.push(document.getElementById(key));
  key.addEventListener('keypress', () => playNote(key))
  key.addEventListener('click', () => playNote(key) )
})

document.addEventListener('keypress', e => {
  if(e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  // const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if(whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex])
  }

  // if(blackKeyIndex > -1) {
  //   playNote(blackKeys[blackKeyIndex])
  // }
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}



// Lyrics:

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextOne.hidden = true;
  nextTwo.hidden = false;
  document.getElementById('letter-note-five').innerHTML = 'D'; 
  document.getElementById('letter-note-six').innerHTML = 'C'; 
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextTwo.hidden = true;
  nextThree.hidden = false;
  document.querySelector('.five').innerHTML = 'DEAR';
  document.querySelector('.six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.querySelector('.one').innerHTML = 'HAP-';
  document.querySelector('.two').innerHTML = 'PY';
  document.querySelector('.three').innerHTML = 'BIRTH';
  document.querySelector('.four').innerHTML = 'DAY';
  document.querySelector('.five').innerHTML = 'TO';
  document.querySelector('.six').innerHTML = 'YOU!';

  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.querySelector('.one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.querySelector('.two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.querySelector('.three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.querySelector('.four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.querySelector('.five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.querySelector('.six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}