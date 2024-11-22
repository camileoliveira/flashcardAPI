const {
  createService,
  listService,
  removeDeckService,
  updateDeckService,
} = require("../service/deckService");

async function createDeckHandler(req, res) {
  const { title } = req.body;
  const newDeck = await createService(title);
  return res.status(200).send(newDeck);
}

async function listHandler(req, res) {
  const decks = await listService();
  return res.status(200).send(decks);
}


async function updateDeckHandler(req, res) {
  const { id } = req.params;
  const { title } = req.body;

  const updatedDeck = await updateDeckService(id, title);
  res.status(200).send(updatedDeck);
}

async function removeDeckHandler(req, res) {
  const { id } = req.params;
  const removedDeck = await removeDeckService(id);

  if (removedDeck) {
    return res.status(200).send("Deck removed");
  }
  return res.status(404).send("Decl not found");
}

module.exports = {
  createDeckHandler,
  listHandler,
  removeDeckHandler,
  updateDeckHandler,
};
