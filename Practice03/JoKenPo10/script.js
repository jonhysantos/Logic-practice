const resutl = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let pointsMachine = 0;
let pointshuman = 0;



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
    const NumberRandom = Math.floor(Math.random () * 3)
    return choice[NumberRandom]
}

const playTheGame = (human,machine) => {
    console.log(human,machine)
    if(human === machine){
        resutl.innerHTML = 'Deu empate!'
    }else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
            (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
        )
    ){
        pointshuman ++
        humanScore.innerHTML = pointshuman
        resutl.innerHTML = 'Você ganhou!'
    }else {
        pointsMachine ++
        machineScore.innerHTML = pointsMachine
        resutl.innerHTML = 'Você perdeu para a Alexa'
    }
}