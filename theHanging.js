var Hanging = function (wrongGuesses) {
    //wrong character Array

    // create a function that takes in the length of wrong guesses as switch cases
    this.staging = function () {
        // console.log(wrongGuesses.length)
        switch (wrongGuesses.length) {
            case 0:
            console.log("Good Guess!")
            break;
            case 1:
                this.hung1()
                break;
            case 2:
                this.hung2()
                break;
            case 3:
                this.hung3()
                break;
            case 4:
                this.hung4()
                break;
            case 5:
                this.hung5()
                break;
            case 6:
                this.hung6()
                break;
            case 7:
                this.hung7()
                process.exit();
        }
    }

//our images
    this.hung1 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |           ")
        console.log("  |           ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(wrongGuesses);
    }
    this.hung2 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |       |   ")
        console.log("  |           ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(wrongGuesses);
    };
    this.hung3 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |       |  ")
        console.log("  |       |   ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(wrongGuesses);
    };
    this.hung4 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / |  ")
        console.log("  |       |   ")
        console.log("  |         ")
        console.log("__|___________|")
        console.log(wrongGuesses);
    };
    this.hung5 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / | \\ ")
        console.log("  |       |   ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(wrongGuesses);
    };
    this.hung6 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / | \\ ")
        console.log("  |       |   ")
        console.log("  |     /    ")
        console.log("__|___________|")
        console.log(wrongGuesses);
    };
    this.hung7 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / | \\ ")
        console.log("  |       |   ")
        console.log("  |     /  \\  ")
        console.log("__|___________|")
        console.log("__|_You_Died__|")
        
    };
}

// var guessedArr=["a","b","c"];
// console.log(guessedArr);
// myHanging= new Hanging(guessedArr);
// myHanging.staging(guessedArr);
module.exports = Hanging;