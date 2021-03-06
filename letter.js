
// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
//require NOTHING

function Letter(char) {
    // * A string value to store the underlying character for the letter
    this.char = char;
    // * A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;//default to false? but call back state?
    // * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.state = function () {
        if (this.guessed) {
            return this.char;  //update the displayed character
        } else {
            return "_";
        }
    };
    // * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.isValid = function (guess) {
        if (guess === this.char) {
            this.guessed = true;
        }
    }
};
// Code to test:
// myLetterObj=new Letter("a");
// console.log(myLetterObj);
module.exports = Letter;
