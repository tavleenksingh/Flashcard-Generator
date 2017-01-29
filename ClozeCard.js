'use strict';


// creating my ClozeCard Constructor
// The ClozeCar constructor takes a partial, cloze as parameters and
// returns a new object with those properties set appropriately.
function ClozeCard(text, cloze){

	// Ensuring users get the result of a new call, even if they forget.
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}

	this.text = text;
	this.cloze = cloze;

	// function that returns only the full text
	this.showAll = function(){
		return this.text;
	};

	// function that returns only the cloze-deleted portion
	this.showCloze = function(){
		return this.cloze;
	};


	// function that returns only the partial text
	this.returnClozeDeleted = function(){  //return cloze-deleted version of text 
        var textArray = this.text.split(this.cloze);
        var clozeDeleted = textArray.join(". . .");
        return clozeDeleted;
    };
};

// exporting our ClozeCard constructor
module.exports = ClozeCard;



