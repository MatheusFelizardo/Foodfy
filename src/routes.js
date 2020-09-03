const express = require ("express")
const routes = express.Router()
const recipes = require("./app/controllers/recipes")
const chefs = require("./app/controllers/chefs")


// ROTAS DO USUÁRIO 

routes.get ("/", function (req,res) {

return res.render("./user/main")

})

routes.get ("/sobre", function (req,res) {
    return res.render("./user/sobre")
})

routes.get ("/receitas", function (req,res) {
    return res.render("./user/receitas")
})


routes.get("/receitas/:index", function(req, res) {
    // const receitaIndex = req.params.index;
    // const receita = receitas[receitaIndex]

    if ( receitaIndex === "receitas") {
        return res.redirect ("/receitas") 
    }

    if (receitaIndex === "sobre") {
        return res.redirect ("/sobre")
    }

    return res.render("./user/receita", {receita})

})

// ROTAS DE ADMIN

// ROTAS DO ADMINISTRATIVO DOS CHEFS

routes.get ("/admin/chefs", chefs.index)
routes.get ("/admin/chefs/create", chefs.create) 
routes.post ("/admin/chefs", chefs.post)
routes.get ("/admin/chefs/:id", chefs.show)
routes.get ("/admin/chefs/:id/editar", chefs.edit)
routes.put ("/admin/chefs", chefs.put)
routes.delete ("/admin/chefs/", chefs.delete)

// ROTAS DO ADMINISTRATIVO DAS RECEITAS

routes.get ("/admin/receitas", recipes.index)
routes.get ("/admin/receitas/create", recipes.create) 
routes.post ("/admin/receitas", recipes.post)
routes.get ("/admin/receitas/:id", recipes.show)
routes.get ("/admin/receitas/:id/editar", recipes.edit)
routes.put ("/admin/receitas", recipes.put)
routes.delete ("/admin/receitas/", recipes.delete)

module.exports = routes