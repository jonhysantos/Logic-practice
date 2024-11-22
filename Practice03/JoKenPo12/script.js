const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
let h = 0;
let m = 0;
const GAME_OPTIONS = {
    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors'
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice,playMachine())
}

const playMachine = () => {
    const choice = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER,GAME_OPTIONS.SCISSORS]
    const numberRandom = Math.floor(Math.random() *3);
    return choice[numberRandom]
}


const playTheGame = (human,machine) => {
    console.log(human,machine)
    if(human === machine){
        result.innerHTML = 'Deu empate!'
    }else if(human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS  ||
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)){
        h ++
        humanScore.innerHTML = h
        result.innerHTML = 'Você ganhou!'
    }else{
        m ++
        machineScore.innerHTML = m
        result.innerHTML = 'Vocêr perdeu para a Alexa'
    }
}