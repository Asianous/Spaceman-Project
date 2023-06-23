// constants
// two options to choose from for wordBank
const wordBank ={
    space:[
    "Asteroid",
    "Big Bang",
    "Black hole",
    "Celestial body",
    "Comet",
    "Cosmic rays",
    "Dark energy",
    "Dark matter",
    "Exoplanet",
    "Galaxy",
    "Gravitational waves",
    "Interstellar",
    "Lunar eclipse",
    "Mars",
    "Meteor",
    "Milky Way",
    "Moon",
    "NASA",
    "Nebula",
    "Neptune",
    "Orbit",
    "Planet",
    "Quasar",
    "Rocket",
    "Satellite",
    "Solar flare",
    "Solar system",
    "Spacecraft",
    "Space exploration",
    "Space station",
    "Star",
    "Supernova",
    "Telescope",
    "Universe",
    "Uranus",
    "Venus",
    "Wormhole",
    "X-ray astronomy",
    "Yuri Gagarin",
    "Zenith",
    "Astronaut",
    "Astrobiology",
    "Binary star",
    "Cosmonaut",
    "Eclipse",
    "Gravity",
    "Hubble Space Telescope",
    "Ionosphere",
    "Jupiter",
    "Kuiper belt",
    "Lunar module"
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

//generate random word from object arrays
let spaceWord = wordBank.space[Math.floor(Math.random() * wordBank.space.length)];
let rdmWord = wordBank.randomWords[Math.floor(Math.random() * wordBank.randomWords.length)];




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
    backgroundImg.src = "../assets/error0.png";
    spaceWord;
    // let spaceWord = wordBank.space[Math.floor(Math.random() * wordBank.space.length)];
    console.log(spaceWord);
    hiddenWord.innerHTML = '';
    for(let i = 0; i < spaceWord.length; i++){
        let letter = document.createElement('div');
        letter.innerText += '_';
        letter.classList.add('letter');
        hiddenWord.append(letter);
    };
    playerGuessLetters();
    // checkWin();
});
rdmWordBank.addEventListener('click', function(){
    backgroundImg.src = "../assets/error0.png";
    rdmWord;
    // let rdmWord = wordBank.randomWords[Math.floor(Math.random() * wordBank.randomWords.length)];
    // console.log(rdmWord);
    hiddenWord.innerHTML = '';
    for(let i = 0; i < rdmWord.length; i++){
        let letter = document.createElement('div');
        letter.innerText = '_';
        hiddenWord.append(letter);
    };
    playerGuessLetters();
    // checkWin();
});

// functions
initializeGame();
function initializeGame(){
    btnPlay.style.visibility = 'visible';
    backgroundImg.src = "../assets/error08.png";
};

function resetGame(){
    initializeGame();
    
}

function playerGuessLetters() {
    btnLetters.forEach(function(letter) {
      letter.addEventListener('click', function () {
        const selectedLetter = letter.innerText;
        console.log('Selected letter:', selectedLetter);
        checkWin();
    });
    });
  }

// [...btnLetters].forEach(function (div){
    //     div.addEventListener('click', function(){
        //     console.log(div.innerHTML); 
        //     });
        // }); 
        
        function checkWin(){
            const hiddenLetters = document.querySelectorAll('.letter');
            const revealLetters = [...hiddenLetters].map(function(letter){
                return letter.innerText;
            })
            // .join('');
            
            // if (!isCorrectGuess) {
            //   guessesLeft--;
            // }
            
            if(revealLetters === rdmWord || revealLetters === spaceWord){
                console.log('I guess you want me to stay...');
            } else if (guessesLeft === 0) {
                console.log('Game over! Maybe Next Time');
            } else {
                guessesLeft--;
        console.log(`Incorrect guess! ${guessesLeft} guesses left`);
    }
}


