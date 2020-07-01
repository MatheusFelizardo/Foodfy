const express = require ("express")
const server = express()

const nunjucks = require ("nunjucks")
const receitas = require ("./data")

server.use(express.urlencoded({extended:true}))
server.set ("view engine", "njk")
nunjucks.configure ("views", {
    express: server, 
    autoescape: false,
    noCache: false
})

server.use(express.static('public'))
server.use (express.static('assets'))


server.get ("/", function (req,res) {

    
    return res.render("main", {receitas})

})

server.get ("/sobre", function (req,res) {
    return res.render("sobre")
})

server.get ("/receitas", function (req,res) {
    return res.render("receitas", {receitas})
})


server.get("/receitas/:index", function(req, res) {
    const receitaIndex = req.params.index;
    const receita = receitas[receitaIndex]

    return res.render("receita", {receita})

})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });



server.listen (5000, () => {console.log ("Servidor rodando")})