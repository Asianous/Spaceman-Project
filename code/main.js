// constants




// cached element
const btnPlay = document.querySelector('#playBtn');
const letters = document.getElementById('letter-ctr');
const option = document.querySelector('.optionCtr');
const playAgain = document.querySelector('.reset');
const rdmWordBank = document.querySelector('.optionRandom');
const rdmSpaceWordBank = document.querySelector('.optionSpace');




// event listeners
btnPlay.addEventListener('click', hidePlay);
option.addEventListener('click', renderGame);
playAgain.addEventListener('click', initGame);

rdmSpaceWordBank.addEventListener('click', function(){
    let spaceWord = wordBank.space[Math.floor(Math.random() * wordBank.space.length)];
    console.log(spaceWord);
});
rdmWordBank.addEventListener('click', function(){
    let rdmWord = wordBank.randomWords[Math.floor(Math.random() * wordBank.randomWords.length)];
    console.log(rdmWord);
});






// functions
function initGame(){
// hidePlay();   
renderGame();
};

function hidePlay() {
btnPlay.style.visibility = 'hidden';
option.style.visibility = 'visible';
}

function renderGame(){
    option.style.visibility = 'hidden';
    console.log('on click, this will  be hidden');
    wordGenList();
    displayOptions();

}

function wordGenList(){

};

const displayOptions = () => {
    option.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in option) {
      buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    option.appendChild(buttonCon);
  };

// two options to choose from for wordBank
const wordBank ={
space:   [
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

randomWords: [
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
