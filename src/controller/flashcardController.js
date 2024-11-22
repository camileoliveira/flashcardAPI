const {
  createFlashCardService,
  listAllFlashcardsService,
  updateFlashcardService,
  removeFlashcardService,
  findFlashcardByIdDeckService,
  findFlashcardByTaskService,
} = require("../service/flashcardService");

async function createFlashcardHandler(req, res) {
  const { task, answer, idDeck } = req.body;
  const newFlashcard = await createFlashCardService(task, answer, idDeck);
  return res.status(200).send(newFlashcard);
}

async function listAllFlashcardsHandler(req, res) {
  const flashcards = await listAllFlashcardsService();
  return res.status(200).send(flashcards);
}

async function updateFlashcardHandler(req, res) {
  const { id } = req.params;
  const { task, answer } = req.body;

  const updateFlashcard = await updateFlashcardService(id, task, answer);
  return res.status(200).send(updateFlashcard);
}

async function findFlashcardHandler(req, res) {
  const { idDeck, task } = req.query;

  if (idDeck) {
    idDeckFlashcard = await findFlashcardByIdDeckService(idDeck);
    return res.status(200).send(idDeckFlashcard);
  }

  if(task){
    taskFlashcard = await findFlashcardByTaskService(task)
    return res.status(200).send(taskFlashcard)
  }
}

async function removeFlashcardHandler(req, res) {
  const { id } = req.params;
  const removeFlashcard = await removeFlashcardService(id);

  if (removeFlashcard) {
    return res.status(200).send("Flashcard removed");
  }
  return res.status(404).send("Flashcard not found");
}

module.exports = {
    createFlashcardHandler,
    listAllFlashcardsHandler,
    removeFlashcardHandler,
    updateFlashcardHandler,
    findFlashcardHandler


};
