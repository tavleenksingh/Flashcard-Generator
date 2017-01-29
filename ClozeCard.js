'use strict';

// requiring inquirer npm package to take in user input
var inquirer = require("inquirer");

// creating my ClozeCard Constructor
// The ClozeCar constructor takes a partial, cloze as parameters and
// returns a new object with those properties set appropriately.
function ClozeCard(text, cloze){

	// Ensuring users get the result of a new call, even if they forget
	// (scope-safe constructor).
	if (!(this instanceof ClozeCard)) {
			return new ClozeCard(text, cloze);
	}

    this.text = text;
    this.cloze = cloze;
    this.type = "cloze";

    //function that returns only the full text
	this.showAll = function(){
		return this.text;
 	};

 	// function that returns only the cloze-deleted portion
	this.showCloze = function(){
		return this.cloze;
 	};

    // function that returns only the partial text
    this.returnClozeDeleted = function(){
        var textArray = this.text.split(this.cloze);
        var clozeDeleted = textArray.join(". . .");
        return clozeDeleted;
    };

    // function called when user picks this card
    this.useCard = function(){
        //show cloze deleted text 
        var clozeDeleted = this.returnClozeDeleted();
        var answer = this.showCloze();
        var phrase = this.showAll();
        console.log("");
        console.log("Sentence: " + clozeDeleted);
        //ask if ready for answer
        inquirer.prompt([
            {
                type: "input",
                message: "What is missing in the ' . . . ' ?",
                name: "input",
            }
        ]).then(function(response){
            //show the result
            if (response.input === answer){
                console.log("You are correct!");
            } else {
                console.log("You are wrong. The answer was: " + answer);
            }
            // after user gives the response this statement is logged for user to check the correct answer
            console.log("The whole phrase was: " + phrase);
            //re-start the app's loop
            startApp();
        });
    };
}

// exporting our ClozeCard constructor
module.exports = ClozeCard;



