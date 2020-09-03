const Chefs = require("../../models/Chefs")

module.exports = {

    index(req,res) {
        Chefs.index(function(chefs) {
            return res.render ("./admin/chefs/index", {chefs})
            })
    },

    create(req,res) {
       return res.render("./admin/chefs/create")
    },

    post (req,res){

        const keys = Object.keys (req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send ("Por favor, preencha todos os campos.")
            }
        }   

        Chefs.create(req.body,function(chefs) {
           
            return res.redirect (`/admin/chefs/${chefs.id}`)
        })

    },

    show(req,res) {

        const {id} = req.params
        
        Chefs.show(req.params.id, function(chefs) {
        Chefs.showRecipes(function(recipe){
            Chefs.totalOfChefsRecipes(req.params.id, function(chefRecipes){
                let recipes = recipe.filter(function(item){
                    if(id == item.chef_id) {
                    return item 
                    }
                })
             
                let [count] = chefRecipes                            
    
                return res.render ("admin/chefs/show", {chefs,recipes,count})}
            )

            })
            
            })
    },
    
    edit(req,res) {
        
            Chefs.show(req.params.id, function(chefs) {
                Chefs.totalOfChefsRecipes(req.params.id, function(chefRecipes){

                let [count] = chefRecipes
                    
                return res.render ("admin/chefs/editar", {chefs, count})

                })
            })
    },

    put(req,res) {
        Chefs.update(req.body, function(){
        return res.redirect (`/admin/chefs/${req.body.id}`)
    })

    },

    delete(req, res) {
        
         Chefs.delete(req.body.id, function() {
            return res.redirect(`/admin/chefs`)

        })
    }

}