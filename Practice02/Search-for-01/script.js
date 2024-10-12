const searchButton = document.getElementsByTagName('button')[0]
searchButton.addEventListener('click',searchContact);

function searchContact(){
    let p = document.querySelector('p');
    let input = document.querySelector('input');

    const contacts = [
        {Name:'Elaine',Fone:'(13) 99793-6353'},
        {Name:'Aninha',Fone:'(13) 99793-6353'},
        {Name:'Tamiris',Fone:'(13) 99793-6353'},
        {Name:'Cecília',Fone:'(13) 99793-6353'},
        {Name:'Daiane',Fone:'(13) 99793-6353'},
    ]
    for(let i = 0;i < contacts.length; i ++){
        if(input.value.toLowerCase() === contacts[i].Name.toLowerCase()){
            p.innerHTML = `Contato encontrado Nome:${contacts[i].Name} \ Fone:${contacts[i].Fone}`
            break
        }else{
            p.innerHTML = 'Contato não encontrado, tente novamente.'
        }
    }

}