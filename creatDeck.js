const {arrDeck} = require("./arr")


function creatDeck(id, titleDeck){
    const objectDeck ={
     id: id,
     title: titleDeck
    }
    arrDeck.push(objectDeck)
}

module.exports = creatDeck