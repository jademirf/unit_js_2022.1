// Instancia o input que recebe os novos itens
const inputItem = document.querySelector('#addItem form input[name="newItem"]')

// Instancia a ul que lista todos os itens criados
const lista = document.querySelector('#itemsListView ul')

// Instancia o formulário
const formItem = document.querySelector('#addItem form')

// Adiciona um listener ao evento submit do formulário
formItem.addEventListener('submit', (event) => {
    // previne o comportamento padrão (recarregar a página)
    event.preventDefault()
    // pega o valor do input e guarda na variável
    const title = inputItem.value
    // cria um novo elemento do tipo <span>
    const spanTitle = document.createElement('SPAN')
    // adiciona a class title ao span criado
    spanTitle.className = "title"
    // adiciona o valor do novo item ao title
    spanTitle.innerHTML = title
    // limpa o input
    inputItem.value = ""

    // cria um novo elemento do tipo <span>
    const spanStatus = document.createElement('SPAN')
    // adiciona a class title ao span criado
    spanStatus.className = "status"
    // setar o valor inicial como pending
    spanStatus.innerHTML = "pending"

    // criando um novo elemento do tipo <li>
    const newLi = document.createElement('LI')
    newLi.appendChild(spanTitle)
    newLi.appendChild(spanStatus)
    lista.appendChild(newLi)

})