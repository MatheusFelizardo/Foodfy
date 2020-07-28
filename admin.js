const fs = require ("fs")
const data = require ("./data.json")

exports.index = function (req,res) {

    let receitas = data.receitas

    return res.render ("./admin/gerenciar-receitas", {receitas})
}

exports.create = function (req,res) {

    let receitas = data.receitas

    return res.render ("./admin/create", {receitas})
}

exports.post = function (req,res){

    const keys = Object.keys (req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send ("Por favor, preencha todos os campos.")
        }
    }   

    let {image, ingredientes, modo_preparo, adicionais, name, title } = req.body

    let id = 1
    let lastId = data.receitas[data.receitas.length -1]

    if (lastId) {
        id = lastId.id +1
    }

    data.receitas.push ({
        id,
        title,
        image,
        name,
        ingredientes,
        modo_preparo,
        adicionais
    }) 

    fs.writeFile ("data.json", JSON.stringify(data, null, 2), function (err) {
        if(err)  return res.send ("Erro ao gravar dados!")

        return res.redirect ("/admin/receitas")
})

}

exports.show = function (req,res) {

    const {id} = req.params


    const foundRecipe = data.receitas.find (function (receitas) {
        return receitas.id == id
    })
    if (!foundRecipe) return res.send ("Receita não encontrada!!")

    const receitas = {
        ...foundRecipe,
        
    }

    return res.render ("admin/show", {receitas})
} 