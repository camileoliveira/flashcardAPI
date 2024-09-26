const {arrFlashcards} = require("./arr")

function  updateFlashcard(takeId, newTask, newAnswer){
const i = arrFlashcards.findIndex((flashcard) => flashcard.id == takeId);
if(i == -1){
    return false;
}
arrFlashcards[i].task = newTask;
arrFlashcards[i].answer = newAnswer;
return true
}

module.exports =  updateFlashcard


