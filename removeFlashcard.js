const { arrFlashcards } = require("./arr");

function removeFlashcard(idFlashcard) {
  const i = arrFlashcards.findIndex((flashcard) => flashcard.id == idFlashcard);
  if (i == -1) {
    return false;
  }
  arrFlashcards.splice(i, 1)
  return true;
  
}

module.exports = removeFlashcard;
