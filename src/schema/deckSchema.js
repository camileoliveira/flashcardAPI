const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

const Deck = mongoose.model('deck', deckSchema)

module.exports = Deck
