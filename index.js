
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guessesa
//  `Word.js` *should only* require `Letter.js`
var Word = require("./word.js")
var inquirer = require("inquirer");
//word array stores possible selections
var hangman=function(){
  this.wordArr = ["tofurky", "tofu", "kale"];
  this.gameWord = "";
  //a method to pick a word from this.wordArr
  this.wordChooser = function () {
    var i = this.wordArr.length;//how many choices (3)
    var j = Math.floor((Math.random() * i)) //returns a number between 0 and wordArr.length-1
    this.gameWord = this.wordArr[j]; //the word to play with has been selected
  }
  this.solutionObj = new Word(gameWord);//takes the selected word and constructs a word 
  this.wordChooser()
  // console.log("indexjs line 22"+ this.solutionObj)
}


hangman(); //run hangman
console.log("hangman.gameword is:" + solutionObj)

//create a new "letter" object for each letter in the gameWord
// var letters = new Letter()
// var count = 0;
// this.play = function () {
//   if (count < 5) { //run the look 5 times Replace this with the Winning Condition later
//     inquirer.prompt([
//       {
//         name: "userGuess",
//         message: "Guess a Letter?"
//       }
//     ]).then(function (userGuess) {
//       // Word.Letter.valid(userGuess);
//       console.log("you guessed " + userGuess)
//       count++
//       runTime();
//     });
//   }
// }
