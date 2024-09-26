const { arrFlashcards } = require("./arr");


function creatFlashCard(id, taskFlashCard, answerFlashCard, deckId) {
  const objecFlashCard = {
    id: id,
    task: taskFlashCard,
    answer: answerFlashCard,
    idDeck: deckId,
  };

  arrFlashcards.push(objecFlashCard);
}

module.exports = creatFlashCard;
