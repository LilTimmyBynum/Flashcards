// cloze card

function ClozeCard(text, cloze) {

	if(!text.includes(cloze)) {
		console.log("ERROR: cant find cloze phrase in full text............................");
	}else{
		console.log("Your new Cloze card has been created."); // "created" as in likely saved to a db somewhere
	};
    
        this.text = text;
        this.cloze = cloze;
        this.partial = text.replace(cloze, "...");    

    this.printInfo = function() {        
        console.log("full text -->>  " + JSON.stringify(this.text));
        console.log("card partial -->>  " + JSON.stringify(this.partial));
        console.log("card cloze phrase -->>  " + JSON.stringify(this.cloze));
    };
}

module.exports = ClozeCard;
