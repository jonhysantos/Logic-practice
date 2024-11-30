import {games} from './products.js'

const btnShowAll = document.querySelector('.show-all');
const list = document.querySelector('ul');
const btnMapAll = document.querySelector('.map-all');
const btnSumAll = document.querySelector('.sum-all');
const btnFilterAll = document.querySelector('.filter-all');

function currencyConvert(value){
    const newValue = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    return newValue
}

function showAll(arrayProduct){
    let myLi = ''
    arrayProduct.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${currencyConvert(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myLi
    
}

function mapAll(){
    const newPrice = games.map((product) => ({
        ...product,
        price:product.price * 0.9
    }))

    showAll(newPrice)
}

function sumAll(){
    const totalValue = games.reduce((acc,curr) => acc + curr.price,0)
    list.innerHTML = `O total de todos os itens é de ${totalValue * 0.9}`
}

function filterAll(){
    const justHorror = games.filter(product => product.genero === 'Survivor horror')
    showAll(justHorror)
}

btnShowAll.addEventListener('click',() => showAll(games))
btnMapAll.addEventListener('click',mapAll);
btnSumAll.addEventListener('click',sumAll)
btnFilterAll.addEventListener('click',filterAll)