
function adicionarIngredientes () {
    const ingredientes = document.querySelector ("#ingredientes")
    const campoIngredientes = document.querySelectorAll (".ingredientes")

    const novoIngrediente = campoIngredientes[campoIngredientes.length-1].cloneNode (true)

    if (novoIngrediente.children[0].value =="") return false

    novoIngrediente.children[0].value = "";
    ingredientes.appendChild(novoIngrediente)


}

document.querySelector (".adicionar-ingrediente").addEventListener ("click", adicionarIngredientes)

function adicionarPassos () {
    const passos = document.querySelector ("#passos")
    const campoPassos = document.querySelectorAll (".passos")

    const novoPasso = campoPassos[campoPassos.length-1].cloneNode (true)

    if (novoPasso.children[0].value="") return false

    novoPasso.children[0].value = "";
    passos.appendChild(novoPasso)
}

document.querySelector(".adicionar-passos").addEventListener ("click", adicionarPassos)