
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guessesa
//  `Word.js` *should only* require `Letter.js`
var Word = require("./word.js")
var Inquirer = require("inquirer");
//word array stores possible selections
var wordArr =["tofurky","tofu","kale"];
var myWord = "";
//random word picker
var wordChooser=function(){
  var i=wordArr.length;//how many choices (3)
  var j= Math.floor((Math.random()*i)) //return a number between 0 and wordArr.length-1
  var selectedWord=j;
  //console log the selected word
  gameWord = wordArr[j]; //the word to play with has been selected
  console.log(gameWord);
}
wordChooser();
//make a word object out of the selected word
var solution = new Word(gameWord);//takes the selected word and constructs a word 
console.log(solution);

//create a new "letter" object for each letter in the gameWord
var letters = new Letter()


inquirer.prompt([
  {
    name: "userGuess",
    message: "Guess a Letter?"
  }
]).then(function(userGuess) {
    Word.Letter.valid(userGuess);

});