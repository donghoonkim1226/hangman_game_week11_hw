var prompt = require("prompt");
prompt.start();
var Word = require ("./word.js");
var game = new Game();

function Game() {
	this.wordBank = ["superbowl", "denver broncos", "carolina panthers", "pizza", "buffalo wings", "quarterback", "cornerback", "football", "national football league"];
	this.guessesRemaining = 10;
	this.currentWrd = null;
	this.startGame = function(){
		startingWord = this.currentWrd; // not fully understanding this part
		var theChosenWord = Math.floor((Math.random() * 9) + 1); // not fully understanding this part
		startingWord = new Word(this.wordBank[theChosenWord-1]); // not fully understanding this part
		startingWord.getLets(); // not fully understanding this part
		this.keepPromptingUser(); // not fully understanding this part
	}
	this.keepPromptingUser = function () {
		var self = this;
		prompt.get(["guessLetter"], function (err, result){
			console.log("The letter or space you guessed is " + result.guessLetter);
			var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter); // not fully understanding this part
			if (findHowManyOfUserGuess === 0){
				console.log("You guessed incorrectly~!");
				self.guessesRemaining --; // not fully understanding this part
			} else {
					console.log("You guessed right~!");
				if (startingWord.didWeFindTheWord() === true){ // not fully understanding this part
					console.log("You Won~!");
					return 1;
				}
			}
			console.log("Guesses reamining " + guessesRemaining);
			console.log(startingWord.wordRender()); // not fully understanding this part
			if (guessesRemaining > 0 && startingWord === false){
				self.keepPromptingUser(); // not fully understanding this part
			} else if (guessesRemaining === 0){
					console.log("Game over bro~!");
					console.log("The word you were guessing was " + self.startingWord.word);
			} else {
				console.log(startingWord.wordRender());
			}
		});
	}
};

game.startGame();