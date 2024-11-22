import {games} from './products.js'


const btnShowAll = document.querySelector('.show-all')
const list = document.querySelector('ul')

function currencyFormat(value){
    const newValue = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return newValue
}

function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">$${currencyFormat(product.price)}
            </li>
                `
    })
    list.innerHTML = myLi
}

btnShowAll.addEventListener('click',() => showAll(games))