const eventHub = document.querySelector(".container")
import { placeX, placeO } from "./XandO.js";

let player1 = true
let gameState = ["", "", "", "", "", "", "", "", ""]
const winningCombinations = 

eventHub.addEventListener("theSquareThatWasClicked", e => {

    if(player1) {
        //target the square that was clicked
        const contentTarget = document.getElementById(e.detail.clickedSquare)
        //place an X in the target square
        contentTarget.innerHTML = placeX()
        //update gameState
        const currentGameStateIndex = e.detail.clickedSquare - 1
        gameState[currentGameStateIndex] = 1
    } else {
        const contentTarget = document.getElementById(e.detail.clickedSquare)
        contentTarget.innerHTML = placeO()
        //update gameState
        const currentGameStateIndex = e.detail.clickedSquare - 1
        gameState[currentGameStateIndex] = 0
    }
    player1 = !player1
    console.log(gameState)
})









