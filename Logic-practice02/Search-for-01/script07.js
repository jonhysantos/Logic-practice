const input = document.querySelector('input');
const p = document.querySelector('p');


const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click',searchContacts);
function searchContacts(){
    const contacts = [
        {Name:'Jonhy',Age:'36',Phone:'(13) 99793-6353'},
        {Name:'Aninha',Age:'10',Phone:'(13) 99793-6353'},
        {Name:'Priscila',Age:'29',Phone:'(13) 99793-6353'},
        {Name:'Cecilia',Age:'22',Phone:'(13) 99793-6353'},
    ]

    for(let i = 0;i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].Name.toLowerCase()){
            p.innerHTML = `Contato encontrado, nome: ${contacts[i].Name} / Idade: ${contacts[i].Age}`
            break
        } else {
            p.innerHTML = 'Contato inexistente.'
        }
    }
}