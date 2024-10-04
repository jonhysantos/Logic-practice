const searchButton = document.querySelector('button');
searchButton.addEventListener('click', contactsSearch)

const input = document.querySelector('input');
const p = document.querySelector('p');

const contacts = [
    { Name: 'Priscila', Age: '29', Phone: '(13) 99793-6353' },
    { Name: 'Elaine', Age: '31', Phone: '(13) 99793-6353' },
    { Name: 'Aninha', Age: '10', Phone: '(13) 99793-6353' },
    { Name: 'Tamiris', Age: '29', Phone: '(13) 99793-6353' },
    { Name: 'Cecília', Age: '22', Phone: '(13) 99793-6353' },
    { Name: 'Daiane', Age: '37', Phone: '(13) 99793-6353' },
]

function contactsSearch() {

    for (let i = 0; i < contacts.length; i++) {
        if (input.value.toLowerCase() === contacts[i].Name.toLowerCase()) {
            p.innerHTML = `Contato encontrado ${contacts[i].Name} / Tel: ${contacts[i].Phone}`
            break
        } else {
            p.innerHTML = 'Contato não encontrado.'
        }
    }
}