const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanPoints = 0;
let machinePoints = 0;


const playHuman = (humanchoice) => {
    playTheGame(humanchoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const numberRandowm = Math.floor(Math.random() * 3)
    return choices[numberRandowm]
}

const playTheGame = (human, machine) => {
    console.log(human, machine)
    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (human === 'rock' && machine === 'scissors' ||
        (human === 'paper' && machine === 'rock' ||
        (human === 'scissors' && machine === 'paper')
        )
    ) {
        humanPoints ++
        humanScore.innerHTML = humanPoints
        result.innerHTML = 'Você ganhou!'
    }else{
        machinePoints ++
        machineScore.innerHTML = machinePoints
        result.innerHTML = 'Você perdeu para a Alexa'
    }
}