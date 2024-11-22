const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },

  answer: {
    type: String,
    require: true,
  },

  idDeck: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Flashcard = mongoose.model("flashcard", flashcardSchema);

module.exports = Flashcard;
