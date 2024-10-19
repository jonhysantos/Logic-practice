const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanPoits = 0;
let machinePoints = 0;



const playHuman = (humanChoice) => {
    playTheGame(humanChoice,playMachine())
}

const playMachine = () => {
    const choices = ['rock','paper','scissors']
    const NumberRandom = Math.floor(Math.random() *3) 
    return choices[NumberRandom]
}

const playTheGame = (human,machine) => {
    console.log(human,machine)
    if(human === machine){
        result.innerHTML = 'Deu empate!'
    }else if(human === 'rock' && machine === 'scissors' || 
        (human === 'paper' && machine === 'rock') || 
        (human === 'scissors' && machine === 'paper')
    ){
        humanPoits ++
        humanScore.innerHTML = humanPoits
        result.innerHTML = 'Você ganhou!'
    }else {
        machinePoints ++
        machineScore.innerHTML = machinePoints
        result.innerHTML = 'Você perdeu para a Alexa'
    }
}