const eventHub = document.querySelector(".container")
import { placeX, placeO } from "./XandO.js";
import { Boxes } from "./boxes.js";


let player1 = true
let round = 0
let gameState = ["", "", "", "", "", "", "", "", ""]


eventHub.addEventListener("theSquareThatWasClicked", e => {
    const allSquares = document.getElementsByClassName("square")

    if(player1) {
        //target the square that was clicked
        const contentTarget = document.getElementById(e.detail.clickedSquare)
        //place an X in the target square
        contentTarget.innerHTML = placeX()
        //update gameState
        const currentGameStateIndex = e.detail.clickedSquare - 1
        gameState[currentGameStateIndex] = 1
        round +=1
    } else {
        //target the square that was clicked
        const contentTarget = document.getElementById(e.detail.clickedSquare)
        //place an O in the target square
        contentTarget.innerHTML = placeO()
        //update gameState
        const currentGameStateIndex = e.detail.clickedSquare - 1
        gameState[currentGameStateIndex] = 0
        round +=1
    }
    //evaluate a winner! or a tie :(

    //player 2
    if (gameState[0] === 0 && gameState[1] === 0 && gameState[2] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[3] === 0 && gameState[4] === 0 && gameState[5] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[6] === 0 && gameState[7] === 0 && gameState[8] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    }else if (gameState[0] === 0 && gameState[3] === 0 && gameState[6] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[1] === 0 && gameState[4] === 0 && gameState[7] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[2] === 0 && gameState[5] === 0 && gameState[8] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[0] === 0 && gameState[4] === 0 && gameState[8] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[2] === 0 && gameState[4] === 0 && gameState[6] === 0) {
        alert("Player 2 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    }
    //player 1
    else if(gameState[0] === 1 && gameState[1] === 1 && gameState[2] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[3] === 1 && gameState[4] === 1 && gameState[5] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[6] === 1 && gameState[7] === 1 && gameState[8] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    }else if (gameState[0] === 1 && gameState[3] === 1 && gameState[6] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[1] === 1 && gameState[4] === 1 && gameState[7] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[2] === 1 && gameState[5] === 1 && gameState[8] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[0] === 1 && gameState[4] === 1 && gameState[8] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (gameState[2] === 1 && gameState[4] === 1 && gameState[6] === 1) {
        alert("Player 1 Wins!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    } else if (round > 8) {
        alert("It's a tie!")
        gameState = ["", "", "", "", "", "", "", "", ""]
        round = 0
        Boxes()
    }
    player1 = !player1
    console.log(gameState)
    console.log(round)
})









