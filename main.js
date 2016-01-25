var prompt = require("prompt");
prompt.start();
var Word = require ("./word.js");

var game = {
	this.wordBank = ["superbowl", "denver broncos", "carolina panthers", "pizza", "buffalo wings", "quarterback", "cornerback", "football", "national football league"];
	this.guessesRemaining = 10;
	this.currentWrd = null;
	this.startGame = function(wrd){
		startingWord = this.currentWrd; // not fully understanding this part
		var theChosenWord = Math.floor((Math.random() * 9) + 1); // not fully understanding this part
		startingWord = new Word(this.wordBank[theChosenWord-1]); // not fully understanding this part
		startingWord.getLets(); // not fully understanding this part
		this.keepPromptingUser(); // not fully understanding this part
	}
	this.keepPromptingUser = function () {
		var self = this;
		prompt.get(["guessLetter"], function (err, result){
			console.log("The letter or pace you guessed is " + result.guessLetter);
			var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter); // not fully understanding this part
			if (findHowManyOfUserGuess === 0){
				console.log("You guessed incorrectly~!");
				self.guessesRemaining --;
			} else {
					console.log("You guessed right~!");
				if (startingWord.didWeFindTheWord() === true){
					console.log("You Won~!");
					return 1;
				} 
			}
		});
	}
}