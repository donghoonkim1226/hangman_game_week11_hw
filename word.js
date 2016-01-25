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
	this.didWeFindTheWord = function (){ // not fully understanding this part. Why are we calling anonymous function?
		if (this.lets.every(function(curLet){ // not fully understanding this part. Confused by the syntax. 
			return curLet.appear === true // not fully understanding this part. Confused by the syntax. 
		}) === true){ // not fully understanding this part. Confused by the syntax. 
			return true; // not fully understanding this part. Confused by the syntax. 
		} else { // not fully understanding this part. Confused by the syntax. 

		}
	}
	this.wordRender = function (){
		var str = "";
		for (var i = 0; i < this.lets.length; i++){
			str += this.lets[i].letterRender(this.lets[i])
		}
		return str;
	}
}