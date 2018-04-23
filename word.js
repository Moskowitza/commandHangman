// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Letter = require("./letter.js");

function Word(gameWord) {
    //  * An array of `new` Letter objects representing the letters of the underlying word
    this.letterArr = gameWord.split('').map(function (letter) {
        return new Letter(letter);
    });
    // console.log("line 10" + JSON.stringify(this.letterArr));
    // * A function that returns a string representing the word. This should call the function on each letter object (the first function (STATE) defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.wordString = function () {
        var replyArr = [];
        for (i = 0; i < this.letterArr.length; i++) {
            var replyString = this.letterArr[i].state();
            // console.log("THIS replyString value is: " + replyString + "and the type is " + typeof replyString);
            replyArr.push(replyString);
        }
        console.log(replyArr.join(""));
    };
    // * A function that takes a character as an argument and calls the guess function on each letter object (the second (ISVALID) function defined in `Letter.js`)
    this.validator = function (guess) {
        console.log("this.validator: "+guess)
        this.letterArr.forEach(function (letterObj) {
            letterObj.isValid(guess);
        });
    };
};
    //CODE for TESTING
    // myWordObj = new Word("bana");
    // console.log(myWordObj); //everything in default state
    // myWordObj.validator("b");//pass a letter to check
    // myWordObj.wordString();//Generate a string of l_tt_rs




    //EXPORT MODULE
    module.exports = Word;

   // this.wordString=function(){
    //     this.letterArr.forEach(element => {this.letterArr.state();
    //     });
    // }
    // this.wordString = function () {
    //     var replyArr = [];
    //     for (i = 0; i < this.letterArr.length; i++) {
    //         var replyString = this.letterArr[i].state();
    //         // console.log("THIS replyString value is: " + replyString + "and the type is " + typeof replyString);
    //         replyArr.push(replyString);
    //     }
    //     console.log("reply array joined: " + replyArr.join(""))
    // };