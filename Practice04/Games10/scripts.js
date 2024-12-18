import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');

function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${product.price}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}

btnShowAll.addEventListener('click',() => showAll(games))