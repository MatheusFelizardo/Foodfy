const express = require ("express")
const server = express()

const nunjucks = require ("nunjucks")
const data = require ("./data")

server.use(express.urlencoded({extended:true}))
server.set ("view engine", "njk")
nunjucks.configure ("views", {express: server})

server.use(express.static('public'))
server.use (express.static('assets'))


server.get ("/", function (req,res) {
    return res.render("main", {data})

})

server.get ("/sobre", function (req,res) {
    return res.render("sobre")
})

server.get ("/receitas", function (req,res) {
    return res.render("receitas", {data})
})

/* === PROGRAMAR A LOGICA PARA MUDAR A PAGINA DE ACORDO COM ID. 
// server.get("/receitas/:id", function(req, res) {
//     const id = req.params.id;
    
//     return res.send(`O id fornecido na rota é: ${id}`);
//   });

server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen (5000, () => {console.log ("Servidor rodando")})