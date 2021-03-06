const db = require("../config/db")
const {date} = require("../app/libs/utils")
const { show } = require("../app/controllers/recipes")

module.exports = {
    index(callback) {
        db.query(`
        SELECT recipes.*, chefs.name AS chef_name 
        FROM recipes 
        LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
        `, function(err,results) {
            if(err) throw `Database error! ${err}` 

            callback(results.rows)
        })
    },

    filterRecipes(filter, callback) {

        db.query(`
            SELECT recipes.*, chefs.name AS chef_name 
            FROM recipes
            LEFT JOIN chefs ON (chefs.id = recipes.chef_id) 
            WHERE recipes.title ILIKE '%${filter}%'
        `, function (err,results){
            if (err) throw `Database error! ${err}` 
            
            callback(results.rows)
        })


    },

    create(data,callback) {
        const query = `
        INSERT INTO recipes (
            image,
            title,
            ingredients,
            preparation,
            information,
            created_at,
            chef_id
        ) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
        `

        const values = [
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).created_at,
            data.chef
        ]

        db.query(query, values, (err,results)=>{
            if (err) throw `Database error! ${err}` 
            
            callback(results.rows[0])
        } )
    },

    show(id,callback) {
        db.query(`
        SELECT recipes.*, chefs.name AS chef_name 
        FROM recipes 
        LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
        WHERE recipes.id = $1`, [id], function(err,results) {
            if(err) throw `Database error! ${err}` 
            callback(results.rows[0])
        })
    },

    update(data, callback) {

        const query = `
        UPDATE recipes SET

        image = ($1),
        title = ($2),
        ingredients = ($3),
        preparation = ($4),
        information = ($5),
        chef_id = ($6)

        WHERE id = ($7)
        `

        const values = [
            data.image,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.chef,
            data.id
        ]

        db.query(query,values,function(err,results){

            if (err) throw `Database error! ${err}`

            callback()

        })
    },

    delete(id,callback) {
        
        db.query(`DELETE FROM recipes WHERE id = $1 `, [id], function(err, results){
           
            if(err) throw `Database error! ${err}`

            callback()

        })
    },

    chefsOptions(callback) {
        db.query(`
        SELECT * 
        FROM chefs
        `, function(err,results) {
            if (err) throw `Database error! ${err}` 
            callback(results.rows)
        })
    }
}
