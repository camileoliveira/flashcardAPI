const express = require("express");
const router = express.Router();

const {
  createDeckHandler,
  listHandler,
  removeDeckHandler,
  updateDeckHandler,
} = require("../controller/deckController");

const {
  createFlashcardHandler,
  listAllFlashcardsHandler,
  removeFlashcardHandler,
  updateFlashcardHandler,
  findFlashcardHandler
} = require("../controller/flashcardController");


router.post("/deck", createDeckHandler);
router.get("/deck", listHandler);
router.put("/deck/:id", updateDeckHandler);
router.delete("/deck/:id", removeDeckHandler);

router.post("/flashcard", createFlashcardHandler);
router.get("/flashcard", listAllFlashcardsHandler);
router.get("/flashcard/search", findFlashcardHandler);
router.put("/flashcard/:id", updateFlashcardHandler);
router.delete("/flashcard/:id",removeFlashcardHandler )

module.exports = router;
