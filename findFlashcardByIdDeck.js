const { arrFlashcards } = require("./arr");
const {findTitleDeck} = require("./listAllFlashcards");

function findFlashcardByIdDeck(idDeck) {
  const arrFiltered = arrFlashcards.filter((flahscard) => {
    if (flahscard.idDeck == idDeck) {
      return flahscard;
    }
  });

  for (var i = 0; i < arrFiltered.length; i++) {
    const title = findTitleDeck(arrFiltered[i].idDeck)
    arrFiltered[i].idDeck = title
    return arrFiltered[i]
  }
}

module.exports = findFlashcardByIdDeck;
