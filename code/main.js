// constants
// two options to choose from for wordBank
const wordBank ={
    space:[
    "Asteroid",
    "Galaxy",
    "Nebula",
    "Supernova",
    "Blackhole",
    "Astronaut",
    "Rocket",
    "Exoplanet",
    "Comet",
    "Satellite",
    "Celestial",
    "Cosmonaut",
    "Meteor",
    "Lunar",
    "Planet",
    "Orbit",
    "Star",
    "Gravity",
    "Mars",
    "Sun",
    "Jupiter",
    "Venus",
    "Mercury",
    "Uranus",
    "Neptune",
    "Pluto",
    "Saturn",
    "Spacecraft",
    "Telescope",
    "Eclipse",
    "Wormhole",
    "Spacewalk",
    "Crater",
    "Alien",
    "Zodiac",
    "Comet",
    "Cluster",
    "Spectrum",
    "Interstellar",
    "Binary",
    "Apollo",
    "ISS",
    "Exploration",
    "Landing",
    "Liftoff",
    "Astrobiology",
    "Robonaut",
    "Quasar",
    "Pulsar",
    "Aurora",
    "Hubble"
    ],

randomWords:[
    "apple",
    "banana",
    "carrot",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "house",
    "island",
    "jungle",
    "kangaroo",
    "lemon",
    "mountain",
    "ninja",
    "ocean",
    "piano",
    "queen",
    "rabbit",
    "sun",
    "tiger",
    "umbrella",
    "violet",
    "whale",
    "xylophone",
    "yoga",
    "zebra",
    "airplane",
    "ball",
    "cat",
    "dolphin",
    "ear",
    "fire",
    "globe",
    "helicopter",
    "ice cream",
    "jacket",
    "key",
    "lion",
    "moon",
    "notebook",
    "orange",
    "penguin",
    "quilt",
    "rainbow",
    "snake",
    "tree",
    "unicorn",
    "volcano",
    "watermelon",
    "xylophone",
    "yacht",
    "zeppelin"
]
};
let guessesLeft = 8;
let selectedLetter = '';


// generate random word from object arrays
let rdmWord;
let spaceWord;




// cached element
const btnPlay = document.querySelector('#playBtn');
const btnLetters = document.querySelectorAll('.letter-ctr div');
const option = document.querySelector('.optionCtr');
const playAgainBtn = document.querySelector('.reset');
const rdmWordBank = document.querySelector('.optionRandom');
const rdmSpaceWordBank = document.querySelector('.optionSpace');
const backgroundImg = document.querySelector('.movingPic');
const hiddenWord = document.querySelector('.hiddenWord');



// event listeners
btnPlay.addEventListener('click', function(){
    option.style.visibility = 'visible';
    btnPlay.style.visibility = 'hidden';
});
option.addEventListener('click', function(){
    option.style.visibility = 'hidden';
});

playAgainBtn.addEventListener('click', resetGame);

rdmSpaceWordBank.addEventListener('click', function(){
    spaceWord = wordBank.space[Math.floor(Math.random() * wordBank.space.length)];
    renderGame(spaceWord);
    console.log(spaceWord);
    
    
});
rdmWordBank.addEventListener('click', function(){
    rdmWord = wordBank.randomWords[Math.floor(Math.random() * wordBank.randomWords.length)];
    renderGame(rdmWord);
    console.log(rdmWord);
});

// functions
initializeGame();
function initializeGame(){
    guessesLeft = 8;
    btnPlay.style.visibility = 'visible';
    backgroundImg.src = "../assets/error08.png";
};

function renderGame(word){
  backgroundImg.src = "../assets/error00.png";
  hiddenWord.innerHTML = '';

  for (let i = 0; i < word.length; i++){
    let letter = document.createElement('div');
    letter.innerText = '_';
    hiddenWord.appendChild(letter);
  }
  playerGuessLetters();
}

function resetGame(){
    hiddenWord.innerHTML = '';
    initializeGame();
    btnPlay.style.visibility = 'visible';
}

function playerGuessLetters() {
  btnLetters.forEach(function (letter) {
    letter.addEventListener('click', function () {
      const selectedLetter = letter.innerText;
      console.log('Selected letter:', selectedLetter);

      // determine which word to check against based on the option selected
      let wordToGuess;
      if (spaceWord) {
        wordToGuess = spaceWord;
      } else {
        wordToGuess = rdmWord;
      }

      // check if the selected letter is in the word to guess
      let wordLetters = wordToGuess.split('');
      let hiddenWordDivs = hiddenWord.querySelectorAll('div');
      let letterFound = false;

      for (let i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i].toLowerCase() === selectedLetter.toLowerCase()) {
          if (hiddenWordDivs[i]) {
            hiddenWordDivs[i].innerText = wordLetters[i];
            letterFound = true;
          }
        }
      }
      if (!letterFound) {
        guessesLeft--;
        backgroundImg.src = `../assets/error0${8 - guessesLeft}.png`; 
      }
    });
  });
}



function updateHiddenWord() {

}



