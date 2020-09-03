
// FUNÇÃO PARA ADICIONAR NOVOS INGREDIENTES

function adicionarIngredientes () {
    const ingredientes = document.querySelector ("#ingredientes")
    const campoIngredientes = document.querySelectorAll (".ingredientes")
    
    const novoIngrediente = campoIngredientes[campoIngredientes.length-1].cloneNode (true)

    if (novoIngrediente.children[0].value =="" ) return false
     
    novoIngrediente.children[0].value = "";

    ingredientes.appendChild(novoIngrediente)

}

document.querySelector (".adicionar-ingrediente").addEventListener ("click", adicionarIngredientes)

// FUNÇÃO PARA REMOVER INGREDIENTES

function removerIngrediente (){
    const campoIngredientes = document.querySelectorAll (".ingredientes")

    const novoIngrediente = campoIngredientes[campoIngredientes.length-1]

    for (let x = 0; x < campoIngredientes.length-1; x++) {
        novoIngrediente.remove()
      }     
    }

document.querySelector (".remover-ingrediente").addEventListener ("click", removerIngrediente)

// FUNÇÃO PARA ADICIONAR PASSO A PASSO

function adicionarPassos () {
    const passos = document.querySelector ("#preparation")
    const campoPassos = document.querySelectorAll (".preparation")

    const novoPasso = campoPassos[campoPassos.length-1].cloneNode (true)

    if (novoPasso.children[0].value =="") return false

    novoPasso.children[0].value = "";
    passos.appendChild(novoPasso)
}

document.querySelector(".adicionar-passos").addEventListener ("click", adicionarPassos)

// FUNÇÃO PARA REMOVER PASSO A PASSO

function removerPassos () {
    const campoPassos = document.querySelectorAll (".preparation")

    const novoPasso = campoPassos[campoPassos.length-1]

    for (let x=0; x<campoPassos.length-1;x++) {
        novoPasso.remove()
    }
}

document.querySelector(".remover-passos").addEventListener ("click", removerPassos)