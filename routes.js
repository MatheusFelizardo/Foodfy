const express = require ("express")
const routes = express.Router()
const admin = require("./admin")

const receitas = require ("./data")
const { indexOf } = require("./data")

// ROTAS DO USUÁRIO

routes.get ("/", function (req,res) {

return res.render("./user/main", {receitas})

})

routes.get ("/sobre", function (req,res) {
    return res.render("./user/sobre")
})

routes.get ("/receitas", function (req,res) {
    return res.render("./user/receitas", {receitas})
})


routes.get("/receitas/:index", function(req, res) {
    const receitaIndex = req.params.index;
    const receita = receitas[receitaIndex]

    if ( receitaIndex === "receitas") {
        return res.redirect ("/receitas") 
    }

    if (receitaIndex === "sobre") {
        return res.redirect ("/sobre")
    }

    return res.render("./user/receita", {receita})

})

// ROTAS DE ADMIN

routes.get ("/admin/receitas", admin.index)

routes.get ("/admin/receitas/create", admin.create) 

routes.post ("/admin/receitas", admin.post)

routes.get ("/admin/receitas/:id", admin.show)

module.exports = routes