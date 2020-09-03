// SCRIPT DA PAGINA DOS USER PARA DIRECIONAR PARA PÁGINA DE ACORDO COM A RECEITA CLICADA

const receitas = document.querySelectorAll('.receitas')
for (let i = 0; i < receitas.length; i++) {
    let recipeIndex = i

    receitas[i].addEventListener('click', () => {
        window.location.href = `/receitas/${recipeIndex}`
      
    })
}

const receitaInfo = document.querySelectorAll (".receita-info")

if (receitaInfo) {showAndHide()}

function showAndHide() {

    for (let info of receitaInfo ) {
        let visible = info.querySelector(".visible") 
        let showAndHide = info.querySelector (".show-and-hide")

        showAndHide.addEventListener ("click", () => {

            if (visible.classList.contains ("visible")) {
                visible.classList.add ("hidden")
                visible.classList.remove ("visible")
                showAndHide.textContent = "Mostrar"
            } else {
                visible.classList.add ("visible")
                visible.classList.remove ("hidden")
                showAndHide.textContent = "Esconder"
            }

        })

    }
}

// SCRIPT PARA COLOCAR A COR ATIVA DE ACORDO COM A PAGINA 

const menuItems = document.querySelectorAll ("#links a")
console.log(menuItems)
for (item of menuItems) {
       if (location.pathname.includes(item.getAttribute("href"))) {
        console.log(location.pathname.includes(item.getAttribute("href")))
        item.classList.toggle ("active")
    }
}

// SCRITP PARA NÃO EXCLUIR SE TIVER RECEITA CADASTRADA E CONFIRMAR SE QUER EXCLUIR O CHEF

let chefDelete = document.querySelector(".delete")
let totalRecipes = document.querySelector(".totalCount")

    function deleteChefConfirmation (event) {

        if(totalRecipes.value>0){
            event.preventDefault() 
            alert("Chef possui receita cadastrada e por esse motivo não pode ser excluido")
        }
        else {
        const confirmar = confirm (`Atenção!! Todos os dados serão perdidos.
Tem certeza que deseja excluir?`) 
       
        if(!confirmar){event.preventDefault()}
        }
    }

if(chefDelete) {
    chefDelete.addEventListener("click", deleteChefConfirmation)
}

// SCRITP PARA QUESTIONAR SE QUER EXCLUIR A RECEITA
let deleteRecipe = document.querySelector(".deleteRecipe")

function deleteRecipeConfirmation (event) {

    const confirmar = confirm (`Atenção!! Todos os dados serão perdidos.
Tem certeza que deseja excluir?`) 
   
    if(!confirmar){event.preventDefault()}
    }

if(deleteRecipe) {
    deleteRecipe.addEventListener("click", deleteRecipeConfirmation)
}



