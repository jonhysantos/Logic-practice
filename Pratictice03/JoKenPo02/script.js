const result = document.querySelector('.result')

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
    
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if ((human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')) {
        result.innerHTML = 'Você Ganhou!'
    }else {
        result.innerHTML = 'Você perdeu para a Alexa'
    }
    console.log(human,machine)
}