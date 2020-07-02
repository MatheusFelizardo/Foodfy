const receitas = document.querySelectorAll('.receitas')
for (let i = 0; i < receitas.length; i++) {
    let recipeIndex = i

    receitas[i].addEventListener('click', () => {
        window.location.href = `/receitas/${recipeIndex}`
      
    })
}

const receitaInfo = document.querySelectorAll (".receita-info")

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