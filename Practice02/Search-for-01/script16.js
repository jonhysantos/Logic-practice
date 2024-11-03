const result = document.querySelector('p');
const input = document.querySelector('input');

const button = document.querySelector('button');
button.addEventListener('click',function(){
    const contacts = [
        {name:'jonhy',age:36,address:'Av atlântica'},
        {name:'aninha',age:10,address:'Av atlântica'},
        {name:'priscila',age:29,address:'Av atlântica'},
        {name:'cecilia',age:22,address:'Av atlântica'},
    ]

    for(let i = 0; i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            result.innerHTML = `Contato encontrado, Name: ${contacts[i].name}`
            break
        }else {
            result.innerHTML = 'Contato inexistente'
        }
    }
})