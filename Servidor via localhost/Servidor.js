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
app.get("/JF", (requisicao,resposta) => {
    resposta.render('JF')
})
app.get("/formulario", (requisicao,resposta) => {
    resposta.render('formulario')
})
app.listen(8080)