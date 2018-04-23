var Hanging = function (guessedArr) {
    // create a function that takes in the lenght of wrong guesses
    this.staging = function () {
        console.log(guessedArr.length)
        switch (guessedArr.length) {
            case 0:
            console.log("Good Guess!")
            break;
            case 1:
                this.hung1();
                break;
            case 2:
                this.hung2();
                break;
            case 3:
                this.hung3();
                break;
            case 4:
                this.hung4();
                break;
            case 5:
                this.hung5();
                break;
            case 6:
                this.hung6();
                case 7:
                this.hung7();
        }
    }


    this.hung1 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |           ")
        console.log("  |           ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(guessedArr);
    }
    this.hung2 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |       |   ")
        console.log("  |           ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(guessedArr);
    };
    this.hung3 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |       |  ")
        console.log("  |       |   ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(guessedArr);
    };
    this.hung4 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / |  ")
        console.log("  |       |   ")
        console.log("  |         ")
        console.log("__|___________|")
        console.log(guessedArr);
    };
    this.hung5 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / | \\ ")
        console.log("  |       |   ")
        console.log("  |           ")
        console.log("__|___________|")
        console.log(guessedArr);
    };
    this.hung6 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / | \\ ")
        console.log("  |       |   ")
        console.log("  |      /    ")
        console.log("__|___________|")
        console.log(guessedArr);
    };
    this.hung7 = function () {
        console.log("  ________    ")
        console.log("  |       |   ")
        console.log("  |       O   ")
        console.log("  |     / | \\ ")
        console.log("  |       |   ")
        console.log("  |      /  \\  ")
        console.log("__|___________|")
        console.log("__|_You_Died__|")
        process.exit()
    };
}

// var guessedArr=["a","b","c"];
// console.log(guessedArr);
// myHanging= new Hanging(guessedArr);
// myHanging.staging(guessedArr);
module.exports = Hanging;