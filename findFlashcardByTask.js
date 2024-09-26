const { arrFlashcards } = require("./arr");
const {findTitleDeck} = require("./listAllFlashcards");

function findFlashcardByTask(task) {
  const arrFiltered = arrFlashcards.filter((flashcard) => {
    if (flashcard.task == task) {
      return flashcard;
    }
  });
  for (var i = 0; i < arrFiltered.length; i++) {
    const title = findTitleDeck(arrFiltered[i].idDeck)
    arrFiltered[i].idDeck = title
    return arrFiltered[i]
  }
}

module.exports = findFlashcardByTask;
