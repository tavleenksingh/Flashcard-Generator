'use strict';


// creating my BasicCard Constructor
// The BasicCar constructor takes a front, back as parameters and
// returns a new object with those properties set appropriately.


function BasicCard(front, back){

	// Ensuring users get the result of a new call, even if they forget.
	if (!(this instanceof BasicCard)) {
		return new BasicCard(front, back);
	}

	// creating the two properties: front and back
	this.front = front;
	this.back = back;
}

// exporting our BasicCard constructor
module.exports = BasicCard;