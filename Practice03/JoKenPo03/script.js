const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score')

let humanAdd = 0;
let machineAdd = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log(human,machine)
    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (human === 'rock' && machine === 'scissors' ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        result.innerHTML = 'Você ganhou!'
        humanAdd ++
        humanScore.innerHTML = humanAdd
    }else{
        result.innerHTML = 'Você perdeu para a Alexa'
        machineAdd ++
        machineScore.innerHTML = machineAdd
    }
}

