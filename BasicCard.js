'use strict';

// requring the inquirer package
var inquirer = require("inquirer");

// creating my BasicCard Constructor
// The BasicCar constructor takes a front, back as parameters and
// returns a new object with those properties set appropriately.
function BasicCard(front, back){

	// Ensuring users get the result of a new call, even if they forget.
	// (scope-safe constructor)
 	if (!(this instanceof BasicCard)) {
 		return new BasicCard(front, back);
	}


    this.front = front;
    this.back = back;
    this.type = "basic";

    // function called when user picks this card
    this.useCard = function(){

        back = this.back;
        //show front
        console.log("");
        console.log("Front: " + this.front);
        //ask if ready for answer
        inquirer.prompt([
            {
                type: "input",
                message: "What is on the back?",
                name: "input",
            }
        ]).then(function(response){
            //show the result
            if (response.input === back) {
                console.log("You are correct!");
            } else {
                console.log("You are wrong.  The back was: " + back);
            }
            //re-start the app's loop
            startApp();
        })
    };
};


// exporting our BasicCard constructor
module.exports = BasicCard;



