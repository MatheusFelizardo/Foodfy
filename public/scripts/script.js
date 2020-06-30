
let receitas = document.querySelectorAll (".receitas")


for (let receita of receitas) {
    let id = receita.getAttribute ("id")
    
    receita.addEventListener ("click", () => {
        window.location (`receitas/teste`)
    })

}

// server.get (`/receitas/`, function (req,res) 
// {   let receitas = document.querySelectorAll (".receitas")


//     for (let receita of receitas) {
//         let id = receita.getAttribute ("id")
        
//         receita.addEventListener ("click", () => {
//             window.location (`receitas/${id}`)
//         })
    
//     return res.render (`/receitas/${id}`, {data})
//     }

// })
