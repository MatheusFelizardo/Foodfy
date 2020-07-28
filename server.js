const express = require ("express")
const server = express()
const routes = require ("./routes")

const nunjucks = require ("nunjucks")


server.use(express.urlencoded({extended:true}))
server.set ("view engine", "njk")
server.use(routes)
nunjucks.configure ("views", {
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