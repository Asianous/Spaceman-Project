# Spaceman-Project
Project link : https://asianous.github.io/Spaceman-Project/

## Hangman But in Space!

# **Description**
Welcome to my project! This is a project browser-based game I am developing through Javascript, HTML, and CSS for my General Assembly Software Engineer course. The game allows the users to reveal the word by guessing each letter. The words are generated randomly with no sort of catagories(working in progress). When the user guesses the correct letter from the hideen word, the letter will be added into the blank space. Users that make an incorrect guess will result in Spaceman making increments of leaving the planet! If the user fills up the blank spaces, the word will reveal and the user wins! If the user makes too many incorrect guesses, Spaceman will leave the planet and user will lose!. User will have the option to play again whether the user have won or lost.


# **Initial Wireframe**
![Alt text](https://github.com/Asianous/Spaceman-Project/blob/master/Wireframe.png)

**MVP Goals**
- Event listener to start the game(Random word generator at the start)
- Internal check feature (checks if the word is valid English word) 
- Click events to reveal word(when I click letter→ true or false if false move player)
- If the player clicks a letter that is not in the word bank spaceman moves to ship(if the user clicks correct the player stays in position but letter fills in the blank)
- Message for win/loser
- Play again(reset)

### Update 6/26/23
[My code currently does not have the word generating code, but an object of arrays that represents categories to choose from. Will revist on how to develop that. Link for reference](https://www.npmjs.com/package/check-word)
