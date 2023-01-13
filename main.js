document.getElementById("form").addEventListener("submit", event => {
    event.preventDefault()
});

//Mascara de CPF
const doc = document.querySelector('#cpf')

doc.addEventListener('keypress', () => {
    let doclength = doc.value.length

    if (doclength === 3 || doclength === 7) {
        doc.value += '.'
    } else if (doclength === 11) {
        doc.value += '-'
    }
})

//Mascara de Telefone
const Phone = document.querySelector('#phone')

Phone.addEventListener('keypress', () => {
    let Phonelength = Phone.value.length

    if (Phonelength === 0) {
        Phone.value += '('
    } else if (Phonelength === 3) {
        Phone.value += ') '
    } else if (Phonelength === 10) {
        Phone.value += '-'
    }
})

//Validação dos campos preenchidos
function cadastrar() {

    const nome = document.querySelector('#name')
    const email = document.querySelector('#email')
    const telefone = document.querySelector('#phone')
    const documento = document.querySelector('#cpf')
    const senha = document.querySelector('#password')

    const texto1 = document.querySelector('#texto1')
    const texto2 = document.querySelector('#texto2')
    const texto3 = document.querySelector('#texto3')
    const texto4 = document.querySelector('#texto4')
    const texto5 = document.querySelector('#texto5')
    const validacao = document.querySelector('#validacao')



    if (nome.value == '') {
        texto1.style.visibility = "visible"
        validacao.innerHTML = "Campos obrigatórios não registrados."
        validacao.style.color = '#E73550'
    } else {
        texto1.style.visibility = "hidden"
    }

    if (email.value == '') {
        texto2.style.visibility = "visible"
        validacao.innerHTML = "Campos obrigatórios não registrados."
        validacao.style.color = '#E73550'
    } else {
        texto2.style.visibility = "hidden"
    }

    if (telefone.value == '') {
        texto3.style.visibility = "visible"
        validacao.innerHTML = "Campos obrigatórios não registrados."
        validacao.style.color = '#E73550'
    } else {
        texto3.style.visibility = "hidden"
    }

    if (documento.value == '') {
        texto4.style.visibility = "visible"
        validacao.innerHTML = "Campos obrigatórios não registrados."
        validacao.style.color = '#E73550'
    } else {
        texto4.style.visibility = "hidden"
    }

    if (senha.value == '') {
        texto5.style.visibility = "visible"
        validacao.innerHTML = "Campos obrigatórios não registrados."
        validacao.style.color = '#E73550'
    } else {
        texto5.style.visibility = "hidden"
    }

    if (nome.value !=='' & email.value !=='' & telefone.value !=='' & documento.value !=='' & senha.value !=='') {
        texto1.style.visibility = "hidden"
        texto2.style.visibility = "hidden"
        texto3.style.visibility = "hidden"
        texto4.style.visibility = "hidden"
        texto5.style.visibility = "hidden"
        validacao.innerHTML = "Sucesso!"
        validacao.style.color = '#0F7B0F'
    }

    event.preventDefault()

}