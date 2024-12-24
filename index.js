const express = require("express")
const app = express()
const exphbs = require('express-handlebars')
const livros = require('./livros/livro');


app.engine('handlebars', exphbs.engine()); 
app.set('view engine', 'handlebars'); 
app.use(express.static('public'));
app.use('/livro',livros)

app.get('/',(req,res)=>{    
    res.render('home')
})

app.listen(4000,()=>{
    console.log('Servidor Rodando')
})