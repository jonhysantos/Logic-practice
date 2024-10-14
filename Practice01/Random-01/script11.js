const buttonRandom = document.querySelector('button');
buttonRandom.addEventListener('click',function(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    if(min >= max){
        alert('O valor minimo deve ser menor que o valor máximo')
    }else {
        const result = Math.floor(Math.random() * (max - min) + min)
        alert(result)
    }
})