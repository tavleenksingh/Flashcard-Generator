// requring our constructors exported from approriate files
var inquirer = require("inquirer");
var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');


// creating a new BasicCard Object
//var b = new BasicCard('Who was the first President of the United States', 'George Washington');
// console.log(b);
// console.log(b.front);
// console.log(b.back);

// creating a new ClozeCard Object 
//var c = new ClozeCard('George Washington was the first President of the United States', 'Washington');
// console.log(c);
// console.log(c.showAll());
// console.log(c.showCloze());
// console.log(c.returnClozeDeleted());

//funtion to direct user to choose a card
function startApp(){
    inquirer.prompt([
        {
            type: "list",
            message: "Which card would you like to play?",
            choices: ["Basic Card", "Cloze Card"],
            name: "action"
        }
    ]).then(function(response){
       if (response.action === "Basic Card"){
       	   var b = new BasicCard('Who was the first President of the United States', 'George Washington');
           b.useCard();
       } else if (response.action === "Cloze Card"){
       	   var c = new ClozeCard('George Washington was the first President of the United States', 'Washington');
           c.useCard();
       } 
    });
}// end startApp()

startApp();


