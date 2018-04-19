// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Letter = require("./letter.js");


function Word(gameWord) {
    // * An array of `new` Letter objects representing the letters of the underlying word
    this.wordArr = []; //Where do we loop through letters and create a "new Letter(i)";
    // * A function that returns a string representing the word. 
    this.wordString = function () {
        // This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
        //for (each this.letter.char)
        // this.Letter.state.join(",");  ? 
    };
    // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.valid = function (character) {
        if (response === this.Letter.char) {
            this.Letter.guessed = true;
        }

    }
    this.wordArrBuild=function(gameWord){
        var gameWordArr=gameWord.split("");
        for(i=0;i<gameWordArr;i++){
            var Letters = new Letter(gameWordArr[i])
            this.wordArr.push(Letters);
            }
    }
};


console.log(gameWordArr);


var letterConstructor=function(){
for(i=0;i<gameWordArr;i++){
var Letters = new Letter(gameWordArr[i])
this.wordArr.push(Letters);
}
}


module.exports = Word;