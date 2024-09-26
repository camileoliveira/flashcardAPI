const { arrDeck } = require("./arr");

function updateDeck(takeId, newTitle) {
  const i = arrDeck.findIndex((findId) => findId.id == takeId);
  if (i == -1) {
    return false;
  }
  arrDeck[i].title = newTitle;
  return true
}

module.exports = updateDeck;

