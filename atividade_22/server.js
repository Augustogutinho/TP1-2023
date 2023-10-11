const express = require('express')
const app = express()
var contador = 0;

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', function (req, res) {
    res.render('login', {cont: contador})
})

app.post('/home', function (req, res) {
    console.log(req.body);
    res.render('home', {data: req.body})
})

app.get('/contador', function (req, res) {
    contador = contador + 1
    res.redirect("/")
})




app.listen(3000)