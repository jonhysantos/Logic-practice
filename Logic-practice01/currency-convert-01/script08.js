const convertButton = document.querySelector('.convert-currency');
const currencySelect = document.querySelector('.currency-select');

convertButton.addEventListener('click',convertValues);
function convertValues(){
    const inputCurrency = document.querySelector('.input-currency')
    const inputCurrencyValue = inputCurrency.value

    const currencyValueConvert = document.querySelector('.currency-value-convert');
    const currencyValueConverted = document.querySelector('.currency-value-converted');

    const dolarToday = 5.40
    const euroToday = 6.10

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(inputCurrencyValue / dolarToday);
    }

    currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(inputCurrencyValue)
    
}


currencySelect.addEventListener('change',changeCurrency);
function changeCurrency(){
    const currencyName = document.getElementById('currency-name');
    const currencyImage = document.querySelector('.currency-img');

    if(currencySelect.value == 'dolar'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/img/currency-eua-logo.png'
    }

    if(currencySelect.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/img/EUR-logo.png'
    }

    convertValues()


}