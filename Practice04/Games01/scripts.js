import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');
const btnmapAll = document.querySelector('.map-all')
const btnreduceAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');

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
                <p class="item-price">${currencyFormat(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}

function mapAll(){
    const newPrices = games.map((product => ({
        ...product,
        price:product.price * 0.9
    })))
    showAll(newPrices)
}

function reduceAll(){
    const total = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `O valor total dos itens é de ${total}`

}

function filterAll(){
    const justHorror = games.filter(product => product.genero === 'Survivor horror')
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() => showAll(games));
btnmapAll.addEventListener('click',mapAll)
btnreduceAll.addEventListener('click',reduceAll)
btnFilterAll.addEventListener('click',filterAll)