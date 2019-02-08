# Advanced JavaScript Assignment: Constructor Word Guess
##Command Line Hangman!
How to Play:
Install Node before running: https://nodejs.org/en/download/<br/>
In the terminal: clone the repo, install node package, run index.js <br/>
* git clone git@github.com:Moskowitza/commandHangman.git<br/>
* npm i inquirer<br/>
* node index.js <br/>

The game is composed of : <br/>
* index.js: run the game from here<br/>
* word.js: our Word constructor <br/>
* letter.js: our Letter constructor<br/>
* theHanging.js: code for losers depicting a public execution<br/>
* package.json: for our node package<br/>
* .gitignore: so as to not updload ^this^ package to github<br/>

About the game:<br/>

It's Hangman. You guess a letter, the program sees if it's in a randomly selected word and then reveals that letter. If you guess wrong you die. Winning or Dying results in a process exit.

