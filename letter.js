function Letter(let){
	this.charac = "let";
	this.appear = false;
	this.letterRender = function(){
		if (this.charac === false){
			console.log("_");
		} else {
			console.log(this.charac);
		}
	}
}

module.exports = Letter;