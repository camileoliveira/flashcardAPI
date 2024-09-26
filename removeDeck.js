const { arrDeck, arrFlashcards } = require("./arr");

function removeDeck(idRemove) {
  for (var i = 0; i < arrDeck.length; i++) {
    if (arrDeck[i].id == idRemove) arrDeck.splice(i, 1);
    flashcardRemove();
    return true;
  }
}

function flashcardRemove(idRemove) {
  const i = arrFlashcards.findIndex(
    (flashcard) => flashcard.idDeck == idRemove
  );
  arrFlashcards.splice(i, 1);
}

module.exports = removeDeck;

