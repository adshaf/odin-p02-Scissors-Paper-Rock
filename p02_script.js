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

function playGame() {
    let player_points = 0
    let computer_points = 0
    
    for (i = 0; i < 5; i++) {
        let p_select = getPlayerSelection()
        let comp_select = getComputerChoice()
        let res = (playRound(p_select, comp_select))
        
        console.log(p_select + " vs " + comp_select)
        console.log(res)
        
        if (res == "You win!") {
            player_points++
        } else if (res == "You Lost! Sucks to suck!") {
            computer_points++
        }
    }

    console.log("player: " + player_points + " vs " + "computer: " + computer_points)
}

playGame();