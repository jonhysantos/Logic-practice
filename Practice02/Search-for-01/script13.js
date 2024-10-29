const buttonSearch = document.querySelector('button');
const p = document.querySelector('p');
const input = document.querySelector('input')

buttonSearch.addEventListener('click',searchContacts);
function searchContacts(){
    const contacts = [
        {name:'Jonhy',age:'36'},
        {name:'Aninha',age:'10'},
        {name:'Priscila',age:'29'},
        {name:'Elaine',age:'32'}
    ]

    for(let i = 0; i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Contato encontrado, Nome: ${contacts[i].name} / Idade: ${contacts[i].age}`
            break
        }else{
            p.innerHTML = `Contato inexistente.`
        }
    }
}