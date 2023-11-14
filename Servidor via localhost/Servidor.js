const express = require("express");
const app = express();
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/", (requisicao, resposta) => {
    resposta.render('index')
})
app.get("/barra", (requisicao, resposta) => {
    resposta.render('barra')
})
app.get("/tec", (requisicao,resposta) => {
    resposta.render('tec')
})
app.get("/ps", (requisicao,resposta) => {
    resposta.render('portugol')
})
app.listen(8080)