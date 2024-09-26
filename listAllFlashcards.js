const { arrDeck , arrFlashcards } = require("./arr")


function listAllFlashcards(){
    for(var i = 0; i < arrFlashcards.length; i ++){
        const idDeck= arrFlashcards[i].idDeck
        const titleDeck = findTitleDeck(idDeck)
        arrFlashcards[i].titleDeck = titleDeck
       }
       return arrFlashcards
}



function findTitleDeck(idDeck){
    const i = arrDeck.findIndex((deck) => deck.id == idDeck)
    if(i == -1){
        return
    }
    return arrDeck[i].title
}


module.exports = {listAllFlashcards, findTitleDeck}