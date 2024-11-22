const Deck = require("../schema/deckSchema");

async function createDeck(title) {
  try {
    const newDeck = new Deck({ title });
    return await newDeck.save();
  } catch (error) {
    console.log(err.message);
  }
}

async function listDeck() {
  try {
    return await Deck.find();
  } catch (error) {
    console.log(err.message);
  }
}

async function updateDeck(id, title) {
  try {
    const deck = await Deck.findByIdAndUpdate(
      id,
      { title },
      { new: true, runValidators: true }
    );
    return deck;
  } catch (error) {
    console.log(err.message);
  }
}

async function removeDeck(id) {
  try {
    return await Deck.findByIdAndDelete(id);
  } catch (error) {
    console.log(err.message);
  }
}

module.exports = { createDeck, listDeck, removeDeck, updateDeck };
