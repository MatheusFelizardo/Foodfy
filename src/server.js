const express = require ("express")
const server = express()
const routes = require ("../src/routes")
const methodOverride = require ("method-override")
const nunjucks = require ("nunjucks")


server.use(express.urlencoded({extended:true}))
server.use (methodOverride ("_method"))
server.use(routes)

server.set ("view engine", "njk")
nunjucks.configure ("src/app/views", {
    express: server, 
    autoescape: false,
    noCache: true
})


server.use(express.static('public'))
server.use (express.static('assets'))

// server.use(function(req, res) {
//     res.status(404).render("not-found");
//   });

server.listen (5000, () => {console.log ("Servidor rodando")})