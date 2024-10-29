const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click',searchContacts);

const input = document.querySelector('input');
const p = document.querySelector('p');
function searchContacts(){

    const contacts = [
        {name:'Jonhy',age:'36'},
        {name:'Aninha',age:'10'},
        {name:'Priscila',age:'29'},
        {name:'Iza',age:'38'},
    ]

    for(let i = 0;contacts.length; i ++ ){
        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Contato encontrado: Nome:${contacts[i].name}`
            break
        }else {
            p.innerHTML = 'Contato inexistente'
        }
    }
}