import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');

function formatCurrency(value){
    const real = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    return real
}

function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}

btnShowAll.addEventListener('click',() => showAll(games));