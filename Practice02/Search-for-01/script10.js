const searchButton = document.querySelector('button');
const p = document.querySelector('p');
const input = document.querySelector('input')
searchButton.addEventListener('click',function(){
    const contacts = [
        {Name:'jonhy',Age:'36',Address:'av altlântica'},
        {Name:'Priscila',Age:'29',Address:'av altlântica'},
        {Name:'Elaine',Age:'33',Address:'av altlântica'},
        {Name:'Aninha',Age:'10',Address:'av altlântica'},
        {Name:'Stefany',Age:'13',Address:'av altlântica'},
    ]

    for(let i = 0;i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].Name.toLowerCase()){
            p.innerHTML = `Contato encontrado Name: ${contacts[i].Name} / ${contacts[i].Address}`
            break
        }else {
            p.innerHTML = 'Contato não consta na lista de dados.'
        }
    }
})