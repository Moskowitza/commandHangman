// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
var Letter = require("./letter.js");

// var gameWord="kale";
function Word() {
    // * An array of `new` Letter objects representing the letters of the underlying word
    this.letterArr = [    ]; //Where do we loop through letters and create a "new Letter(i)";
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
    this.addLetter=function(char){
        console.log("from wordjs line 22"+gameWord)
        var gameWordArr=gameWord.split("");
        console.log("from wordjs line 23"+gameWordArr)
        for(i=0;i<gameWordArr.length;i++){
            var char=gameWordArr[i]
            console.log(char)
            // var Letter = new Letter(char); 
            this.letterArr.push(new Letter(char)); }
            // console.log("from wordjs line 29"+Letter)           
    }
    this.addLetter();
};
Word();
console.log("line 34"+letterArr);
module.exports = Word;
