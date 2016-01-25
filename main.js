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
}