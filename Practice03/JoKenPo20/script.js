const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const result = document.querySelector('.result');

let humanP = 0;
let machineP = 0;


const GAME_OPTIONS = {
    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice,playMachine())
}

const playMachine = () => {
    const machineChoice = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER,GAME_OPTIONS.SCISSORS]
    const randomChoice = Math.floor(Math.random() * 3)
    return machineChoice[randomChoice]
}

const playTheGame = (human,machine) => {
    console.log(human,machine)
    if(human === machine){
        result.innerHTML = "Deu empate!"
    }else if(human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
            (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
        )
    ){
        result.innerHTML = "Você Ganhou!"
        humanP ++
        humanScore.innerHTML = humanP
    }else{
        result.innerHTML = "Você perdeu para a alexa"
        machineP ++
        machineScore.innerHTML = machineP
    }
}