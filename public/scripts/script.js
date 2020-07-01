const receitas = document.querySelectorAll('.receitas')

for (let i = 0; i < receitas.length; i++) {
    let recipeIndex = i

    receitas[i].addEventListener('click', () => {
        window.location.href = `/receitas/${recipeIndex}`
      
    })
}
