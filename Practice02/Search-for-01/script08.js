const input = document.querySelector('input');
const buttonSearch = document.querySelector('button');
const p = document.querySelector('p')
buttonSearch.addEventListener('click',searchContacts);

function searchContacts(){
    
    const contacts = [
        {Name:'Jonhy',Age:'36'},
        {Name:'Aninha',Age:'10'},
        {Name:'Taisa',Age:'09'},
        {Name:'Stefany',Age:'13'},
        {Name:'Amanda',Age:'10'}
    ]
    for(let i = 0; i < contacts.length;i ++){
        if(input.value.toLowerCase() === contacts[i].Name.toLowerCase()){
            p.innerHTML = `Contato encontrado, Nome:${contacts[i].Name}`
            break
        }else {
            p.innerHTML = 'Contato inexistente'
        }
    }
}