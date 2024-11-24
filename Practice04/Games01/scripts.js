import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');

function currencyFormat(value){
    const newValue = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return newValue
}

function showAll(arrayProduct){
    let myli = ''
    arrayProduct.forEach(product => {
        myli += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${currencyFormat(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myli
}

btnShowAll.addEventListener('click',() => showAll(games))