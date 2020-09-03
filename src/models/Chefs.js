const db = require("../config/db")
const {date} = require("../app/libs/utils")
const { show } = require("./chefs")

module.exports = {

    index(callback) {
        db.query(`
        SELECT * 
        FROM chefs `, function(err,results) {
            if(err) throw `Database error! ${err}` 

            callback(results.rows)
        })
    },

    create(data,callback) {
        const query = `
        INSERT INTO chefs (
            name,
            avatar_url,
            created_at
        ) 
        VALUES ($1, $2, $3)
        RETURNING id
        `

        const values = [
            data.name,
            data.avatar_url,
            date(Date.now()).created_at
        ]

        db.query(query, values, (err,results)=>{
            if (err) throw `Database error! ${err}` 
            
            callback(results.rows[0])
            console.log(results.rows)
        } )
    },

    show(id,callback) {
        db.query(`
        SELECT * 
        FROM chefs 
        WHERE id = $1`, [id], function(err,results) {
            if(err) throw `Database error! ${err}` 
            callback(results.rows[0])
        }) 
    },

    update(data,callback){ 

        const query = `
        UPDATE chefs SET

        name = ($1),
        avatar_url = ($2)
        
        WHERE id = ($3)
        `

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query, values ,function(err,results){
           
            if (err) throw `Database error! ${err}`

            callback()

        })
    },
    delete(id,callback) {
        
        db.query(`DELETE FROM chefs WHERE id = $1 `, [id], function(err, results){
            
            if(err) throw `Database error! ${err}`

            callback()

        })
    },
    showRecipes(callback)  {
        db.query(`
        SELECT recipes.*, chefs.name AS chef_name
        FROM recipes 
        LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
        `, function(err,results) {
            if(err) throw `Database error! ${err}` 
            callback(results.rows)
        })
    },
    totalOfChefsRecipes(id,callback)  {

        db.query( ` 
        SELECT COUNT (*) as total
        FROM recipes 
        LEFT JOIN chefs ON (chefs.id = recipes.chef_id)
        WHERE chefs.id = $1
        `,[id], function(err,results) {
            if(err) throw `Database error! ${err}` 
            callback(results.rows)} 
        
        )

    }
    

}