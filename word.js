// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Letter = require("./letter.js");


function Word(gameWord) {
    this.gameWord = gameWord;
    this.letterArr = gameWord.split('').map(function(letter) {
        return new Letter(letter);
    });
    // * A function that returns a string representing the word. 
    // this.addLetter = function (char) {
    //     console.log("from wordjs line 11 gameWord: " + gameWord + " and the type is " + typeof gameWord)
    //     var gameWordArr = gameWord.split("");
    //     console.log("from wordjs line 13 gamewordArr: " + gameWordArr + " and the type is " + typeof gameWordArr)
    //     for (i = 0; i < gameWordArr.length; i++) {
    //         var char = gameWordArr[i]
    //         console.log("char from add Lettermethod " + char)
    //         // var Letter = new Letter(char); 
    //         this.letterArr.push(new Letter(char));
    //     }
    // }

    // this.addLetter();
    console.log("from line 22 this letterArr value  " + JSON.stringify(this.letterArr) + " and the type is " + typeof this.letterArr);
    this.wordString = function () {
        var replyArr = [];
        // This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
        //for (each this.letter.char)
        for (i = 0; i < this.letterArr.length; i++) {
            var replyString = this.letterArr[i].state();
            console.log("THIS replyString value is: " + replyString + "and the type is " + typeof replyString);
            replyArr.push(replyString);
        }
        console.log("reply array joined: " + replyArr.join(""))
    };
    
    // * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.validator = function (guess) {
        for (i = 0; i < this.letterArr.length; i++) {
            console.log("finding out if "+guess+" is a letter in our word.")
            console.log(this.letterArr);
            this.letterArr[i].isValid(guess);

        }
        this.wordString();
    }
}
// Word()
module.exports = Word;