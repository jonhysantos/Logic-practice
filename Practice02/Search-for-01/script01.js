const buttonSearch = document.querySelector('button');
buttonSearch.addEventListener('click',searchContact)

function searchContact(){
    const p = document.querySelector('p');
    const input = document.querySelector('input');

    const contacts = [
        {Name:'Priscila',Age:'29',Phone:'(13) 99793-6353'},
        {Name:'Elaine',Age:'31',Phone:'(13) 99793-6353'},
        {Name:'Aninha',Age:'10',Phone:'(13) 99793-6353'},
        {Name:'Tamiris',Age:'29',Phone:'(13) 99793-6353'},
        {Name:'Cecília',Age:'22',Phone:'(13) 99793-6353'},
        {Name:'Daiane',Age:'37',Phone:'(13) 99793-6353'},
    ]
 
    for(let i = 0;i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].Name.toLowerCase()){
            p.innerHTML = `Contato encontrado Nome:${contacts[i].Name} / Phone:${contacts[i].Phone}`
            break
        }else{
            p.innerHTML = 'Contato não encontrado,tente novamente'
        }
    }
}