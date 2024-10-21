const convertCurrency = document.querySelector('.convert-currency');
const currencySelect = document.querySelector('.currency-select');

convertCurrency.addEventListener('click',convertValues);
function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueConvert = document.querySelector('.currency-value-convert');
    const currencyValueConverted = document.querySelector('.currency-value-converted');

    const dolarToday = 5.40
    const euroToday = 6.10

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(inputCurrencyValue / dolarToday);
    }

    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR'}).format(inputCurrencyValue / euroToday)
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inputCurrencyValue);
}

currencySelect.addEventListener('change',changeCurrency);
function changeCurrency(){
    const currencyName = document.querySelector('#currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/EUR-logo.png'
    }

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/img/currency-eua-logo.png'
    }

    convertValues()
}