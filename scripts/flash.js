// create flash cards

const inquirer = require("inquirer");

const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');

function createBasicCard() {
    console.log("Creating Basic Card");
    inquirer.prompt([{
            type: "input",
            name: "theQuestion",
            message: "What is the question?"
        }, {
            type: "input",
            name: "theAnswer",
            message: "What is the answer?"
        }

    ]).then(function(answers) {
        var anotherBasicCard = new BasicCard(answers.theQuestion, answers.theAnswer);
        anotherBasicCard.printInfo();
    });
};


function createClozeCard() {
    console.log("Creating Cloze Card");
    inquirer.prompt([{
            type: "input",
            name: "fulltext",
            message: "What is the card FULL TEXT ?"
        }, {
            type: "input",
            name: "clozephrase",
            message: "What is the the card CLOZE phrase ?"
        }

    ]).then(function(answers) {
        var anotherClozeCard = new ClozeCard(answers.fulltext, answers.clozephrase);
        anotherClozeCard.printInfo();
    });

};

inquirer.prompt([{
    type: "list",
    name: "card",
    message: "What type of card are we creating, Basic or Cloze?",
    choices: [
        { name: "Basic" },
        { name: "Cloze" }
    ]
}]).then(function(answers) {

    console.log("Answers ---->>  " + JSON.stringify(answers.card));

    if (answers.card == "Basic") {
        createBasicCard();

    } else {
        createClozeCard();
    };
});
