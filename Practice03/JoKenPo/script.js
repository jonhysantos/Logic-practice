const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const whyResult = document.querySelector('.why-result')

let humanScoreNumber = 0
let machineScoreNumber = 0
/*Primeiro passo ver se o botão está chamando as opções */
const playHuman = (humanChoice) => {
    // console.log(humanChoice) -> para averiguar se está tudo funcionando
    // console.log(playMachine()) -> idem ||       ||      ||

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Pédra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
    // Segundo passo a maquina fazer a escolha dela usando o random 
}


/* Terceiro passo criar uma função chamada play the game */

const playTheGame = (human, machine) => {
    console.log(`Humano:${human} Maquina: ${machine}`)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
    (human === 'Papel' && machine === 'Pédra') || 
    (human === 'Pédra' && machine === 'Tesoura') || 
    (human === 'Tesoura' && machine === 'Papel')) {
        humanScoreNumber ++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
        whyResult.style.color = 'blue'
        whyResult.innerHTML = `você escolheu: ${human} e a Alexa: ${machine}`

    } else {
        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
        whyResult.style.color = 'red'
        whyResult.innerHTML = `você escolheu: ${human} e a Alexa: ${machine}`
    }
}




