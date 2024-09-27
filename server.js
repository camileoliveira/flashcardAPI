const express = require("express");
const { arrDeck } = require("./arr");
const { arrFlashcards } = require("./arr");
const app = express();
const port = 3000;
app.use(express.json());
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send("Something broke!")
})
const creatDeck = require("./creatDeck");
const listDeck = require("./listDeck");
const updateDeck = require("./updateDeck");
const removeDeck = require("./removeDeck");
const creatFlashCard = require("./creatFlashCard");
const findFlashcardByIdDeck = require("./findFlashcardByIdDeck");
const findFlashcardByTask = require("./findFlashcardByTask");
const { listAllFlashcards } = require("./listAllFlashcards");
const updateFlashcard = require("./updateFlashcard");
const removeFlashcard = require("./removeFlashcard");

app.post("/deck", (req, res) => {
  const id = arrDeck.length + 1;
  const title = req.body.title;

  creatDeck(id, title);
  res.send({ id, title });
});

app.get("/deck", (req, res) => {
  const decks = listDeck();
  res.send(decks);
});

app.put("/deck/:id", (req, res) => {
  const id = req.params.id;
  const newTitle = req.body.title;

  const newDeck = updateDeck(id, newTitle);

  if (!newDeck) {
    res.status(404).send("Deck não encontrado!");
    return;
  }

  res.status(200).send({ id, newTitle });
});

app.delete("/deck/:id", (req, res) => {
  const id = req.params.id;
  const deckRemoved = removeDeck(id);

  if (!deckRemoved) {
    res.status(404).send("Deck não encontrado!");
    return;
  }
  res.status(200).send("Deletado!");
});

app.post("/flashcard", (req, res) => {
  const id = arrFlashcards.length + 1;
  const taskFlashCard = req.body.task;
  const answerFlashCard = req.body.answer;
  const deckId = req.body.Id;

  creatFlashCard(id, taskFlashCard, answerFlashCard, deckId);
  res.send({ id, taskFlashCard, answerFlashCard, deckId });
});

app.get("/flashcard/:id", (req, res) => {
  const id = req.params.id;
  const flahscard = findFlashcardByIdDeck(id);
  if (!flahscard) {
    res.status(404), send("Não encontrado");
  }
  res.status(200).send(flahscard);
});

app.get("/flashcard", (req, res) => {
  const task = req.query.task;

  if (!task) {
    const flashcards = listAllFlashcards();
    res.send(flashcards);
    return;
  }

  const flahscard = findFlashcardByTask(task);
  res.send(flahscard);
});

app.put("/flashcard/:id", (req, res) => {
  const takeId = req.params.id;
  const newTask = req.body.task;
  const newAnswer = req.body.answer;

  const newFlashcard = updateFlashcard(takeId, newTask, newAnswer);
  if (!newFlashcard) {
    res.status(404).send("Não encontrado");
  }
  res.status(200).send({ takeId, newTask, newAnswer });
});

app.delete("/flashcard/:id", (req, res) => {
  const idFlashcard = req.params.id;

  const flashcardRemoved = removeFlashcard(idFlashcard);
  if (!flashcardRemoved) {
    res.status(404).send("Não encontrado!");
    return;
  }
  res.status(200).send("Deletado!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
