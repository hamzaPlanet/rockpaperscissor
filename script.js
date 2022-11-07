const computerChoiceDisplay = document.getElementById('computerChoice'),
    userChoiceDisplay = document.getElementById('userChoice'),
    userScoreDisplay = document.getElementById('userScore'),
    resultDisplay = document.getElementById('result'),
    container = document.getElementById('container'),
    computerScoreDisplay = document.getElementById('computerScore'),
    userHandDisplay = document.getElementById('userHand'),
    computerHandDisplay = document.getElementById('computerHand'),
    possibleChoises = document.querySelectorAll('button'),
    choices = ['rock','paper','scissor']

let userChoice,
    computerChoice,
    userScore = 0,
    computerScore = 0

possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener('click',(e)=>{
    container.classList.remove('congratulation')
    container.classList.remove('gameOver')
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    userHandDisplay.setAttribute('src',userChoice+'.png')
    getComputerChoise()
    getResult()
}))

function getComputerChoise() {
    let randomChoice = Math.floor(Math.random() * possibleChoises.length)
    computerChoice = choices[randomChoice]
    computerChoiceDisplay.innerText = computerChoice
    computerHandDisplay.setAttribute('src',computerChoice+'.png')
}

function getResult(){
    if(userChoice === computerChoice){
        resultDisplay.innerText = 'The result is Draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        resultDisplay.innerText = 'You Win!'
        userScore++
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
        resultDisplay.innerText = 'You Lose!'
        computerScore++
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
        resultDisplay.innerText = 'You Win!'
        userScore++
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        resultDisplay.innerText = 'You Lose!'
        computerScore++
    }
    if(computerChoice === 'scissor' && userChoice === 'rock'){
        resultDisplay.innerText = 'You Win!'
        userScore++
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
        resultDisplay.innerText = 'You Lose!'
        computerScore++
    }

    if(computerScore === 3){
        container.classList.add('gameOver')
        resultDisplay.innerText = 'Game Over'+' '+'Your Score is: '+userScore+' Computer Score is: '+computerScore
        userScore = 0
        computerScore = 0
    }
    if(userScore === 3){
        container.classList.add('congratulation')
        resultDisplay.innerText = 'Congratulation'+'Your Score is: '+userScore+' Computer Score is: '+computerScore
        userScore = 0
        computerScore = 0
    }

    userScoreDisplay.innerText = userScore
    computerScoreDisplay.innerText = computerScore
}