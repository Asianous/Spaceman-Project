// constants
// two options to choose from for wordBank
const wordBank ={
    spaceWords:[
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

randomWords: [
  "Apple",
  "Banana",
  "Carrot",
  "Dog",
  "Elephant",
  "Flower",
  "Guitar",
  "House",
  "Island",
  "Jungle",
  "Kangaroo",
  "Lemon",
  "Mountain",
  "Ninja",
  "Ocean",
  "Piano",
  "Queen",
  "Rabbit",
  "Sun",
  "Tiger",
  "Umbrella",
  "Violet",
  "Whale",
  "Xylophone",
  "Yoga",
  "Zebra",
  "Airplane",
  "Ball",
  "Cat",
  "Dolphin",
  "Ear",
  "Fire",
  "Globe",
  "Helicopter",
  "Icecream",
  "Jacket",
  "Key",
  "Lion",
  "Moon",
  "Notebook",
  "Orange",
  "Penguin",
  "Quilt",
  "Rainbow",
  "Snake",
  "Tree",
  "Unicorn",
  "Volcano",
  "Watermelon",
  "Xylophone",
  "Yacht",
  "Zeppelin"
]
};

// changing variables
let guessesLeft = 9;
let selectedLetter = '';
let wordToGuess;
let rdmWord;
let spaceWord;
let allLettersRevealed = false;




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
  spaceWord = wordBank.spaceWords[Math.floor(Math.random() * wordBank.spaceWords.length)];
  renderGame(spaceWord);
  // console.log(spaceWord);
  
  
});
rdmWordBank.addEventListener('click', function(){
  rdmWord = wordBank.randomWords[Math.floor(Math.random() * wordBank.randomWords.length)];
  renderGame(rdmWord);
  // console.log(rdmWord);
});

// functions
initializeGame();
function initializeGame(){
  guessesLeft = 9;
  btnPlay.style.visibility = 'visible';
  backgroundImg.src = "./assets/error09.png";
};

function renderGame(word){
  playerGuessLetters();
  backgroundImg.src = "./assets/error00.png";
  hiddenWord.innerHTML = '';
  
  for (let i = 0; i < word.length; i++){
    let letter = document.createElement('div');
    letter.innerText = '_';
    hiddenWord.appendChild(letter);
  }
};

function resetGame(){
  endGame();
  initializeGame();
  hiddenWord.innerHTML = '';
  btnPlay.style.visibility = 'visible';
  option.style.visibility = 'hidden';
  btnPlay.innerText = 'Play';
  btnLetters.forEach((letter) => {
    letter.style.backgroundColor = '#F0F4F8';
  });
};
function endGame(){
  btnLetters.forEach((letter) => {
    letter.removeEventListener('click', handleLetterClick);
  });
};

// determine which word to check based on the option selected
function checkWord(){
  if(spaceWord){
    wordToGuess = spaceWord;
  } else{
    wordToGuess = rdmWord;
  }
};



function playerGuessLetters(){
  checkWord();
  btnLetters.forEach((letter) => {
    letter.addEventListener('click', handleLetterClick);
  });
};

function handleLetterClick(){
  const selectedLetter = this.innerText;
  this.style.backgroundColor = 'black';
  // console.log('Selected letter:', selectedLetter);
  let letterFound = checkLetterInWord(selectedLetter);
  if(!letterFound){ //if letter selected is wrong, change the image
    guessesLeft--;
    backgroundImg.src = `./assets/error0${9 - guessesLeft}.png`;
    console.log(`${guessesLeft}`);
  }
  allLettersRevealed = checkIfPlayerRevealAllLetters();
  checkResult();
};


function checkLetterInWord(selectedLetter){
  // check if the selected letter is in the word to guess
  let wordLetters = wordToGuess.split('');
  let hiddenWordDivs = hiddenWord.querySelectorAll('div');
  let result = false;
  for(let i = 0; i < wordLetters.length; i++){
    if(wordLetters[i].toLowerCase() === selectedLetter.toLowerCase()){

        hiddenWordDivs[i].innerText = wordLetters[i];
        result = true;
      }
    }
    return result;
  }
  
  // checking if player reveals all the letters or not
function checkIfPlayerRevealAllLetters(){
    let revealedLetters = hiddenWord.querySelectorAll('div');
    let result = true;
    for (let i = 0; i < revealedLetters.length; i++) {
      if (revealedLetters[i].innerText === '_') {
        result = false;
      break;
    }
  }
  return result;
}

function checkResult(){
  if(allLettersRevealed === true){
    btnPlay.style.visibility = 'visible';
    btnPlay.style.height = 'auto';
    btnPlay.style.width = '15vh';
    btnPlay.innerText = 'You Win!!';
    endGame();
    
  }else if(guessesLeft === 0){
    btnPlay.style.visibility = 'visible';
    btnPlay.style.height = 'auto';
    btnPlay.style.width = '15vh';
    btnPlay.innerText = 'You Lose!!';
    endGame();
  }

};