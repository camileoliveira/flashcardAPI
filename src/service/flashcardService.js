const {
  createFlashCard,
  listAllFlashcards,
  updateFlashcard,
  removeFlashcard,
  findFlashcardByIdDeck,
  findFlashcardByTask,
} = require("../repository/flashcardRepository");

async function createFlashCardService(task, answer, idDeck) {
  return await createFlashCard(task, answer, idDeck);
}

async function listAllFlashcardsService() {
  return await listAllFlashcards();
}

async function updateFlashcardService(id, task, answer) {
  return await updateFlashcard(id, task, answer);
}

async function findFlashcardByIdDeckService(idDeck) {
  return await findFlashcardByIdDeck(idDeck);
}

async function findFlashcardByTaskService(task) {
  return await findFlashcardByTask(task);
}

async function removeFlashcardService(id) {
  return await removeFlashcard(id);
}



module.exports = {
  createFlashCardService,
  listAllFlashcardsService,
  updateFlashcardService,
  removeFlashcardService,
  findFlashcardByIdDeckService,
  findFlashcardByTaskService,
};
