import {games} from './products.js'


const btnShowAll = document.querySelector('.show-all')
const list = document.querySelector('ul')
const btnMapAll = document.querySelector('.map-all')

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
                <p class="item-price">${currencyFormat(product.price)}
            </li>
                `
    })
    list.innerHTML = myLi
}

function mapAll(){
    const newPrices = games.map((product) => ({
        ...product,
        price:product.price * 0.9
    }))
    showAll(newPrices)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll)