
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// * Randomly selects a word and uses the `Word` constructor to store it
var inquirer = require("inquirer");
var Word = require("./word.js");
var Hanging = require("./theHanging.js");


//* Pick a Word to play with from an Array
wordArr = ["hummus", "tofu", "kale"];
// this.gameWord = "";
wordChooser = function () {
  var i = wordArr.length;//how many choices (3)
  // console.log("i " + i);
  var j = Math.floor((Math.random() * i)) //returns a number between 0 and wordArr.length-1
  // console.log("j " + j);
  gameWord = wordArr[j]; //the word to play with has been selected
  return gameWord;
}
wordChooser();//run our word Chooser

//*Create a wordObj using the word constuctor
var wordObj = new Word(gameWord);//takes the selected word and constructs a word obj

//game letters
var gameWordArr = gameWord.split("");
console.log(gameWordArr);
var wrongGuesses = [];//only hold Graveyard letters  
//invoke this function when creating the guessed array
guessArrBuild = function (userGuess) {
  if ((wrongGuesses.indexOf(userGuess) === -1) && (gameWordArr.indexOf(userGuess) === -1)) {
    wrongGuesses.push(userGuess);
  }
}


myHanging = new Hanging(wrongGuesses);
//play function
console.log(gameWord) //our solution

//Game Play
var play = function () {
  //Run this loop while the guess array is less than 8, though we have other exit points
  if (wrongGuesses.length < 8) {
    inquirer.prompt([
      {
        name: "userGuess",
        message: "Guess a Letter?"
      }
    ]).then(function (input) {
      //TAKE IN THE GUESS
      var guess = input.userGuess;
      console.log("Following the prompt, you guessed " + guess);
      //See if the Guess is in our word  
      wordObj.validator(guess); //runs logic
      wordObj.wordString(); //displays the word representation

      guessArrBuild(guess);  // push to guessedArray or not
      console.log("wrong Guesses: " + wrongGuesses); //how can I keep the right guesses out?

      myHanging.staging(wrongGuesses);
     
      if(gameWordArr.length=0){
        console.log("YOU WIN")
      }
      // //get a winning exit!
      // wordObj.forEach(winner);
      // function winner(currentValue) {
      //   if(currentValue.guessed === true){
      //     console.log("YOU WIN")
      //   }
      // }
      

      play();//the loop play
    });
  }
}
play(); //play the game

