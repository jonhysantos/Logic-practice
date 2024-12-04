const btnConvert = document.querySelector('.convert-currency');
const currencySelect = document.querySelector('.currency-select');

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueConvert = document.querySelector('.currency-value-convert');
    const currencyValueConverted = document.querySelector('.currency-value-converted');

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(inputCurrencyValue / euroToday)
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inputCurrencyValue)

}

btnConvert.addEventListener('click',convertValues)

const changeCurrency = () => {
    const currencyName = document.querySelector('#currency-name');
    const currencyImage = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = './assets/img/dola.png'
    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/img/EUR-logo.png'
    }

    convertValues()
}

currencySelect.addEventListener('change',changeCurrency)