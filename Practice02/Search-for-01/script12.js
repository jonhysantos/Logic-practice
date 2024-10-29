const input = document.querySelector('input');
const buttonSearch = document.querySelector('button');
const p = document.querySelector('p')
buttonSearch.addEventListener('click',searchContacts);
function searchContacts(){
    const contacts = [
        {Name:'Priscila',Age:'29',Address:'Av atlântica'},
        {Name:'Aninha',Age:'10',Address:'Av atlântica'},
        {Name:'Jonhy',Age:'36',Address:'Av atlântica'},
        {Name:'Cecilia',Age:'22',Address:'Av atlântica'},
        {Name:'Elaine',Age:'32',Address:'Av atlântica'},
        
    ]

    for(let i = 0; i< contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].Name.toLowerCase()){
            p.innerHTML = `Contato encontrado ${contacts[i].Name} / idade: ${contacts[i].Age}`
            break
        }else {
            p.innerHTML = 'Contato inexistente'
        }
    }
}