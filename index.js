
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

var count = 7;
var guessedArr = [];
myHanging= new Hanging(guessedArr);
//play function
var play = function () {
  if (count > 0) { //run the loop 5 times Replace this with the Winning or losing Condition later
    inquirer.prompt([
      {
        name: "userGuess",
        message: "Guess a Letter?"
      }
    ]).then(function (input) {

      var guess = JSON.stringify(input.userGuess);
      console.log("Following the prompt, you guessed " + guess);
      wordObj.validator(guess); //pass this into our constuctors through Word.validator???
      guessedArr.push(guess); //store guesses
      wordObj.wordString();
      // wordObj.wordString(); //This is the Constructor that will create the g_me bo_rd 
      // gameBoardArr.push(wordObj.wordString);
      myHanging.staging(guessedArr)
      count--
      console.log("you have " + count + " guesses remaining")
      console.log(wordObj.wordString)
      play();
    });
  }
}
play();