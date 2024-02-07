function getComputerChoice() {
    const items = ["rock", "paper", "scissors"]
    let select_idx = Math.round(Math.random() * ( 2 - 0 ) + 0 )
    let selection = items[select_idx]
    return selection
}

function getPlayerSelection() {
    let userInput = prompt("Please select between rock, paper or scissors:")
    let playerSelectedItem = userInput.toLowerCase()
    
    return playerSelectedItem
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("Draw!")
    } else if ((playerSelection == "rock" && computerSelection == "paper") 
    || (playerSelection == "paper" && computerSelection == "scissors") 
    || (playerSelection == "scissors" && computerSelection == "rock")) {
        return ("You Lost! Sucks to suck!")
    } else if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "paper" && computerSelection == "rock") 
    || (playerSelection == "scissors" && computerSelection == "paper")) {
        return ("You win!")
    }
}

let player_points = 0
let computer_points = 0

const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", () =>{
    const selection = getComputerChoice()
    console.log(("You have selected Rock"))
    console.log("Computer has selected " + selection)
    res = playRound("rock", selection)
    console.log(res);
    if (res == "You win!") {
        player_points++
    } 
    else if (res == "You Lost! Sucks to suck!") {
        computer_points++
    }
    console.log(player_points + " vs " + computer_points)
    playGame(player_points, computer_points)
})

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", () =>{
    const selection = getComputerChoice()
    console.log(("You have selected Scissors"))
    console.log("Computer has selected " + selection)
    res = playRound("scissors", selection)
    console.log(res);
    if (res == "You win!") {
        player_points++
    } 
    else if (res == "You Lost! Sucks to suck!") {
        computer_points++
    }
    console.log(player_points + " vs " + computer_points)
    playGame(player_points, computer_points)
})

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", () =>{
    const selection = getComputerChoice()
    console.log(("You have selected Paper"))
    console.log("Computer has selected " + selection)
    res = playRound("paper", selection)
    console.log(res);
    if (res == "You win!") {
        player_points++
    } 
    else if (res == "You Lost! Sucks to suck!") {
        computer_points++
    }
    console.log(player_points + " vs " + computer_points)
    playGame(player_points, computer_points)
})

function playGame(player_points, computer_points) {
    if (player_points == 5) {
        console.log("player: " + player_points + " vs " + "computer: " + computer_points)
    } else if (computer_points == 5) {
        console.log("player: " + player_points + " vs " + "computer: " + computer_points)
    }
}














// function playGame() {
//     let player_points = 0
//     let computer_points = 0
    
//     for (i = 0; i < 5; i++) {
//         let p_select = getPlayerSelection()
//         let comp_select = getComputerChoice()
//         let res = (playRound(p_select, comp_select))
        
//         console.log(p_select + " vs " + comp_select)
//         console.log(res)
        
//         if (res == "You win!") {
//             player_points++
//         } else if (res == "You Lost! Sucks to suck!") {
//             computer_points++
//         }
//     