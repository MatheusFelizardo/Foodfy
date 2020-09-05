
const Recipes = require("../../models/Recipes")
const Chefs = require("../../models/Chefs")


module.exports = {
    index(req,res) {

        let {filter} = req.query
        
        if(filter) {
            Recipes.filterRecipes(filter, function(recipes){
            return res.render("./user/filteredRecipes", {recipes,filter})    
            })  

        } if(!filter) {
            Recipes.index(function(recipes) {
            return res.render("./user/main", {recipes})    
            })
        }
    },

    about(req,res) {

        let {filter} = req.query
        
        if(filter) {
            Recipes.filterRecipes(filter, function(recipes){
            return res.render("./user/filteredRecipes", {recipes,filter})    
            })  

        } if(!filter) {
            return res.render("./user/about")

        }

    },

    recipes(req,res) { 
        
        let {filter} = req.query
        
        if(filter) {
            Recipes.filterRecipes(filter, function(recipes){
            return res.render("./user/filteredRecipes", {recipes,filter})    
            })  

        } if(!filter) {
            Recipes.index(function(recipes) {
                return res.render("./user/recipes", {recipes})
            })
        }
        
    },

    show (req,res) {
    
        Recipes.show(req.params.id, function(recipes) {   
            
            return res.render("./user/recipe", {recipes})

        })
    } ,

    chefs(req,res) {
        Chefs.chefShows (function(chefs){
            return res.render ("./user/chefs", {chefs})
        })
    }

}
