var Letter = require ("./letter.js");

function Word(wrd){
	this.word = wrd;
	this.lets = [];
	this.found = false;
	this.getLets = function (){
		for (var i = 0; i <  this.word.length; i++){
			letter = this.word.charAt(i); // not fully understanding this part.
			var let = new Letter(letter); // not fully understanding this part.
			this.lets.push(let); // not fully understanding this part.
		}
	}
	this.checkIfLetterFound = function (guessLetter){
		var whatToReturn = 0;
		for (var i = 0; i < this.lets.length; i++){
			if (this.lets[i].charac === guessLetter){ // not fully understanding this part.
				this.lets[i].appear = true; // not fully understanding this part.
				whatToReturn += 1;
			}
		}
		return whatToReturn; // not fully understanding this part.
	}






}