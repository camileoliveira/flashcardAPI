const { findByIdAndDelete } = require("../schema/deckSchema");
const Flashcard = require("../schema/flashcardSchema");

async function createFlashCard(task, answer, idDeck) {
  try {
    const newFlashcard = new Flashcard({ task, answer, idDeck });
    return await newFlashcard.save();
  } catch (error) {
    console.log(err.message);
  }
}

async function listAllFlashcards() {
  try {
    return await Flashcard.find();
  } catch (error) {
    console.log(err.message);
  }
}

async function updateFlashcard(id, task, answer) {
  try {
    const flashcard = await Flashcard.findByIdAndUpdate(
      id,
      { task, answer },
      { new: true, runValidators: true }
    );
    return flashcard;
  } catch (error) {
    console.log(err.message);
  }
}

async function findFlashcardByIdDeck(idDeck) {
  try {
    const flashcard = await Flashcard.findOne({ idDeck });
    if (flashcard) {
      return flashcard;
    } else {
      console.log("Flashcard not found");
    }
  } catch (error) {
    console.log(err.message);
  }
}

async function findFlashcardByTask(task) {
  try {
    const flashcard = await Flashcard.findOne({ task });
    if (flashcard) {
      return flashcard;
    } else {
      console.log("Flashcard not found");
    }
  } catch (error) {
    console.log(err.message);
  }
}

async function removeFlashcard(id) {
  try {
    return await Flashcard.findByIdAndDelete(id);
  } catch (error) {
    console.log(err.message);
  }
}

module.exports = {
  createFlashCard,
  listAllFlashcards,
  updateFlashcard,
  removeFlashcard,
  findFlashcardByIdDeck,
  findFlashcardByTask,
};
