
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guessesa
//  `Word.js` *should only* require `Letter.js`

var inquirer = require("inquirer");
//word array stores possible selections

var wordArr = ["tofurky", "tofu", "kale"];
// console.log("line 12 " + wordArr);
var gameWord = "";
// console.log("line 14 'gameword is empty' : " + gameWord);
//a method to pick a word from this.wordArr
var wordChooser = function () {
  var i = wordArr.length;//how many choices (3)
  // console.log("i " + i);
  var j = Math.floor((Math.random() * i)) //returns a number between 0 and wordArr.length-1
  // console.log("j " + j);
  gameWord = wordArr[j]; //the word to play with has been selected
  return gameWord;
}
wordChooser();
console.log("wordChosoer ran, game word is " + gameWord);
var Word = require("./word.js");
var wordObj = new Word(gameWord);//takes the selected word and constructs a word obj
// console.log("indexjs line 28" + JSON.stringify(wordObj))
var count=0;
var guessedArr=[];
var play = function () {
  if (count < 5) { //run the loop 5 times Replace this with the Winning or losing Condition later
    inquirer.prompt([
      {
        name: "userGuess",
        message: "Guess a Letter?"
      }
    ]).then(function (input) {
      // Word.Letter.valid(userGuess);
      var guess=JSON.stringify(input.userGuess);
      console.log("you guessed " + guess);
      wordObj.validator(guess); //pass this into our constuctors through Word.validator???
      guessedArr.push(guess);
      console.log("guessed letters: "+guessedArr);
      console.log(wordObj.replyArr);
      count++
      play();
    });
  }
}
play();