// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Letter = require("./letter.js");

// var gameWord="kale";
function Word(gameWord) {
    this.gameWord = gameWord; 
    console.log("in Wordjs this gameWord value is " + this.gameWord + " and the type is "+ typeof gameWord);
    this.letterArr=[];
    // * A function that returns a string representing the word. 
    this.addLetter = function (char) {
        console.log("from wordjs line 22 gameWord: " + gameWord+" and the type is "+ typeof gameWord)
        var gameWordArr = gameWord.split("");
        console.log("from wordjs line 23 gamewordArr: " + gameWordArr+" and the type is "+ typeof gameWordArr)
        for (i = 0; i < gameWordArr.length; i++) {
            var char = gameWordArr[i]
            console.log("char from add Lettermethod "+ char)
            // var Letter = new Letter(char); 
            this.letterArr.push(new Letter(char));
        }         
    }
    this.addLetter();
    console.log("from line 34 this letterArr value  " + JSON.stringify(this.letterArr) + " and the type is "+ typeof this.letterArr);
    this.wordString = function () {
        // This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
        //for (each this.letter.char)
        this.Letter.state();
        var replyString=this.letterArr[0].char;
        console.log("this LetterState value is" + replyString + "and the type is "+ typeof replyString );
    };
    this.wordString();
    // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.valid = function (character) {
        if (response === this.Letter.char) {
            this.Letter.guessed = true;
        }
    }
}
// Word()
module.exports = Word;
