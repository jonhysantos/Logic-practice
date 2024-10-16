const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanPoints = 0;
let machinePoists = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}

const playTheGame = (human, machine) => {
    console.log(human, machine)

    if(human === machine){
        result.innerHTML = 'Deu empate!'
    }else if(human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS || 
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ){
        result.innerHTML = 'Você ganhou!'
        humanPoints ++
        humanScore.innerHTML = humanPoints
    }else {
        machinePoists ++
        machineScore.innerHTML = machinePoists
        result.innerHTML = 'Você perdeu para a Alexa'
    }

}