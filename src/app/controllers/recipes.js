const fs = require ("fs")
const Recipes = require("../../models/Recipes")


module.exports = {
    index(req,res) {

        Recipes.index(function(recipes) {

            return res.render ("./admin/recipes/index", {recipes})
    
            })

    },

    create(req,res) {

        Recipes.chefsOptions (function(chefs){
            return res.render ("./admin/recipes/create", {chefs})
        })
    },

    post (req,res){

        Recipes.create(req.body,function(recipes) {
            return res.redirect (`/admin/receitas/${recipes.id}`)
        })

    },

    show (req,res) {
        
        Recipes.show(req.params.id, function(recipes) {            
        return res.render ("admin/recipes/show", {recipes})

        })
    } ,

    edit(req,res) {

        Recipes.show(req.params.id, function(recipes) {

        Recipes.chefsOptions (function(chefs) {
    
            res.render ("admin/recipes/editar", {chefs,recipes})
            
        })
    })
    
    },

    put(req,res) {
        Recipes.update(req.body, function(){
        return res.redirect (`/admin/receitas/${req.body.id}`)
    })

    },

    delete(req, res) {
        
         Recipes.delete(req.body.id, function() {
            return res.redirect(`/admin/receitas`)
        })
    }
}
