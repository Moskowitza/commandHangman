
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guessesa
//  `Word.js` *should only* require `Letter.js`
var Letter = require("./letter.js");

//word array stores possible selections
var wordArr =["tofurky","tofu","kale"];

//random word picker
var wordChooser=function(){
  var i=wordArr.length;//how many choices (3)
  var j= Math.floor((Math.random()*i)) //return a number between 0 and wordArr.length-1
  console.log(wordArr[j]);//console log the selected word
}
//run word choice
wordChooser();