// basic card

function BasicCard(front, back) {
    this.front = front;
    this.back = back;

    this.printInfo = function() {
        console.log("Your new Basic card has been created.");  // "created" as in likely saved to a db somewhere
        console.log("card front -->>  " + JSON.stringify(front));
        console.log("card back -->>  " + JSON.stringify(back));
    };
}

module.exports = BasicCard;
