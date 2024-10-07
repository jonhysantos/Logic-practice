const input = document.querySelector('input')
const p = document.querySelector('p');
const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click',searchPerson);

function searchPerson(){
    const contacts = [
        {Nome:'Aninha',Age:'10',Phone:'(13) 997936353'},
        {Nome:'Cecilia',Age:'22',Phone:'(13) 997936353'},
        {Nome:'Priscila',Age:'28',Phone:'(13) 997936353'},
        {Nome:'Lorena',Age:'23',Phone:'(13) 997936353'},
        {Nome:'Vera',Age:'37',Phone:'(13) 997936353'},
    ]

    for(let i = 0;i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].Nome.toLowerCase() ){
            p.innerHTML = `Contato encontrado, Nome: ${contacts[i].Nome} Idade ${contacts[i].Age}`
            break
        }else{
            p.innerHTML = 'Contato não encontrado tente novamente.'
        }
    }
}