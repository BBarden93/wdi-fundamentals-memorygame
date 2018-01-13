console.log("Up and running!");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
cardsInPlay.push(cards[cardId]);
var flipCard = function(cardId) {
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
	} else {
		alert("Sorry try again.")
	};
console.log("User flipped " + cards[cardId]);
};
flipCard(0);

