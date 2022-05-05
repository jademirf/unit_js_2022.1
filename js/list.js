// Instancia o input que recebe os novos itens
const inputItem = document.querySelector('#addItem form input[name="newItem"]')

// Instancia a ul que lista todos os itens criados
const lista = document.querySelector('#itemsListView ul')

// Adiciona um listener ao evento submit do formulário
function addItem(item) {
    // pega o valor do input e guarda na variável
    console.log(item)
    // cria um novo elemento do tipo <span>
    const spanTitle = document.createElement('SPAN')
    // adiciona a class title ao span criado
    spanTitle.className = "title"
    // adiciona o valor do novo item ao title
    spanTitle.innerHTML = item.title
    // limpa o input

    // Cria um botão para finalizar/reabrir tarefa
    const newBtn = document.createElement('BUTTON')
    newBtn.innerHTML = "Finalizar"
    newBtn.className = "btn-toggle-status"

    // criando um novo elemento do tipo <li>
    const newLi = document.createElement('LI')
    newLi.appendChild(spanTitle)
    newLi.appendChild(newBtn)
    lista.appendChild(newLi)
}

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then(json => {
    json.map(item => addItem(item))
})

lista.addEventListener("click", (e) => {
    if(e.target.tagName == "BUTTON" && e.target.classList.contains('btn-toggle-status')) {
        toggleCompleted(e.target.parentNode)
    }
})

const toggleCompleted = (elemento) => {
    if(elemento.classList.contains("completed")){
        // remove
        elemento.className = ""
        elemento.children[1].innerHTML = "Finalizar"
    } else {
        // adiciona
        elemento.className = "completed"
        elemento.children[1].innerHTML = "Reabrir"
    }
}