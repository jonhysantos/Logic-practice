const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
let pointsHuman = 0
let pointsMachine = 0

const GAMES_OPTIONS = {
    ROCK:'rock',
    PAPER:'paper',
    SCISSORS:'scissors',
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice,playMachine())
}

const playMachine = () => {

    const options = [GAMES_OPTIONS.ROCK,GAMES_OPTIONS.PAPER,GAMES_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber]
}

const playTheGame = (human,machine) => {
    console.log(human,machine)
    if(human === machine){
        result.innerHTML = 'Deu empate!'
    }else if(human === GAMES_OPTIONS.ROCK && machine === GAMES_OPTIONS.SCISSORS || 
        (human === GAMES_OPTIONS.PAPER && machine === GAMES_OPTIONS.ROCK ||
            (human === GAMES_OPTIONS.SCISSORS && machine === GAMES_OPTIONS.PAPER)
        )
    ){
        result.innerHTML = "Você Ganhou!"
        pointsHuman ++
        humanScore.innerHTML = pointsHuman
    }else{
        result.innerHTML = "Você perdeu para a Alexa"
        pointsMachine ++
        machineScore.innerHTML = pointsMachine
    }

}