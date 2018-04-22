
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// * Randomly selects a word and uses the `Word` constructor to store it
var inquirer = require("inquirer");
var Word = require("./word.js");



var wordArr = ["hummus", "tofu", "kale"];
var gameWord = "";
var wordChooser = function () {
  var i = wordArr.length;//how many choices (3)
  // console.log("i " + i);
  var j = Math.floor((Math.random() * i)) //returns a number between 0 and wordArr.length-1
  // console.log("j " + j);
  gameWord = wordArr[j]; //the word to play with has been selected
  return gameWord;
}
wordChooser();


var wordObj = new Word(gameWord);//takes the selected word and constructs a word obj

var count=5;
var guessedArr=[];
var gameBoardArr=[];

var play = function () {
  if (count > 0) { //run the loop 5 times Replace this with the Winning or losing Condition later
    inquirer.prompt([
      {
        name: "userGuess",
        message: "Guess a Letter?"
      }
    ]).then(function (input) {
      console.log(JSON.stringify(input));
      var guess=JSON.stringify(input.userGuess);
      console.log("Following the prompt, you guessed " + guess);
      wordObj.validator(guess); //pass this into our constuctors through Word.validator???
      guessedArr.push(guess);
      // wordObj.wordString(); //This is the Constructor that will create the g_me bo_rd 
      // gameBoardArr.push(wordObj.wordString);
      console.log("Guessed letters: "+guessedArr);
      console.log("State of Play: "+gameBoardArr);
      count--
      console.log("you have "+count+" guesses remaining")
      console.log(myObj.wordString)
      play();
    });
  }
}
play();