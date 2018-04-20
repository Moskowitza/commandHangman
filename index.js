
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guessesa
//  `Word.js` *should only* require `Letter.js`

var inquirer = require("inquirer");
//word array stores possible selections

var wordArr = ["tofurky", "tofu", "kale"];
console.log("line 12 " + wordArr);
var gameWord = "";
console.log("line 14 " + gameWord);
//a method to pick a word from this.wordArr
var wordChooser = function () {
  var i = wordArr.length;//how many choices (3)
  console.log("i " + i);
  var j = Math.floor((Math.random() * i)) //returns a number between 0 and wordArr.length-1
  console.log("j " + j);
  gameWord = wordArr[j]; //the word to play with has been selected
  return gameWord;
}
wordChooser();
console.log("wordChosoer ran, game word is " + gameWord);
var Word = require("./word.js");
var wordObj = new Word(gameWord);//takes the selected word and constructs a word 

console.log("indexjs line 22" + wordObj)



//run hangman


// create a new "letter" object for each letter in the gameWord
// var letters = new Letter();
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
