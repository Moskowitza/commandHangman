// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Letter = require("./letter.js");

// var gameWord="kale";
function Word(x) {
    this.gameWord = JSON.parse(x); 
    this.letterArr=[];
    console.log("this gameWord value is" + this.gameWord + "and the type is "+ typeof gameWord);
    // * A function that returns a string representing the word. 
    this.wordString = function () {
        // This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
        //for (each this.letter.char)
        console.log("this LetterState value is" + this.letter.state + "and the type is "+ typeof this.letter.state );

        this.Letter.state.join(",");
    };
    // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.valid = function (character) {
        if (response === this.Letter.char) {
            this.Letter.guessed = true;
        }
    }
    this.addLetter = function (char) {
        console.log("from wordjs line 22" + gameWord)
        var gameWordArr = gameWord.split("");
        console.log("from wordjs line 23" + gameWordArr)
        for (i = 0; i < gameWordArr.length; i++) {
            var char = gameWordArr[i]
            console.log(char)
            // var Letter = new Letter(char); 
            this.letterArr.push(new Letter(char));
        }
        console.log("from wordjs line 29"+Letter)           
    }
    this.addLetter();
}
// Word()
module.exports = Word;
