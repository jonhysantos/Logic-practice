const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
let humanPoints = 0
let mahcinePoints = 0


const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const numberRAndom = Math.floor(Math.random() * 3)
    return choice[numberRAndom]
}

const playTheGame = (human, machine) => {
    console.log(human, machine)
    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
            (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
        )
    ) {
        humanPoints ++
        humanScore.innerHTML = humanPoints
        result.innerHTML = 'Você ganhou!'
    }else{
        mahcinePoints ++
        machineScore.innerHTML = mahcinePoints
        result.innerHTML = 'Você perdeu para a Alexa'
    }
}