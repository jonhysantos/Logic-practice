const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click',searchContacts);
const p = document.querySelector('p')
const input = document.querySelector('input')

function searchContacts(){
    const contacts = [
        {Name:'Jonhy',Age:'36',Address:'av atlãntica'},
        {Name:'Aninha',Age:'10',Address:'av atlãntica'},
        {Name:'Priscila',Age:'29',Address:'av atlãntica'},
        {Name:'Elaine',Age:'32',Address:'av atlãntica'},
    ]

    for(let i = 0; i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].Name.toLowerCase()){
            p.innerHTML = `Contato encontrado Nome: ${contacts[i].Name} / ${contacts[i].Age}`
            break
        }else{
            p.innerHTML = 'Contato não consta na lista.'
        }
    }
}