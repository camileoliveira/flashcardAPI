const {
  createDeck,
  listDeck,
  removeDeck,
  updateDeck,
} = require("../repository/deckRepository");

async function createService(title) {
  return await createDeck(title);
}

async function listService() {
  return await listDeck();
}

async function updateDeckService(id, title) {
  return await updateDeck(id, title);
}

async function removeDeckService(id) {
  return await removeDeck(id);

}
module.exports = {
  createService,
  listService,
  removeDeckService,
  updateDeckService,
};
