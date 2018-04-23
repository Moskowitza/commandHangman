
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// * Randomly selects a word and uses the `Word` constructor to store it
var inquirer = require("inquirer");
var Word = require("./word.js");
var Hanging = require("./theHanging.js");

//* Pick a Word to play with from an Array
wordArr = ["hummus", "tofu", "kale"];
// this.gameWord = "";
wordChooser = function () {
  var i = this.wordArr.length;//how many choices (3)
  // console.log("i " + i);
  var j = Math.floor((Math.random() * i)) //returns a number between 0 and wordArr.length-1
  // console.log("j " + j);
  gameWord = wordArr[j]; //the word to play with has been selected
  return gameWord;
}
wordChooser();//run our word Chooser

//*Create a wordObj using the word constuctor
var wordObj = new Word(gameWord);//takes the selected word and constructs a word obj


var guessedArr = [];
//invoke this function when creating the guessed array
function guessArrBuild(el) {
  if (guessedArr.indexOf(el) === -1) guessedArr.push(el)
}
myHanging = new Hanging(guessedArr);
//play function
console.log(gameWord) //our solution
var play = function () {

  //Run this loop while the guess array is less than 8, though we have other exit points
  if (guessedArr.length < 8) {
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
      wordObj.validator(guess);
      wordObj.wordString();

      guessArrBuild(guess);

      myHanging.staging(guessedArr)


      play();

    });
  }
}
play();