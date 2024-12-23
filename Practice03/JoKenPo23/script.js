
const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
let humanP = 0;
let machineP = 0;
const GAME_OPTIONS = {
    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors'
}

const playHuman = (humanChoice) => {
    console.log(humanChoice,playMachine())
}

const playMachine = () => {
    const options = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER,GAME_OPTIONS.SCISSORS]
    const random = Math.floor(Math.random() * 3)
    return options[random]
}

const playGame = (human,machine) => {
    console.log(human,machine)
    if(human === machine){
        result.innerHTML = 'Deu empate!'
    }
}