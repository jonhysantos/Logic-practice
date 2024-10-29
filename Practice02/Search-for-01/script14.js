const input = document.querySelector('input');
const p = document.querySelector('p');
const buttonSearch = document.querySelector('button');

buttonSearch.addEventListener('click',searchContacts);
function searchContacts(){
    const contacts = [
        {name:'Jonhy',age:'36'},
        {name:'aninha',age:'10'},
        {name:'stefany',age:'36'},
    ]

    for(let i = 0; i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Contato encontrado: Nome: ${contacts[i].name}`
            break
        }else{
            p.innerHTML = 'Não encontrado.'
        }
    }
}