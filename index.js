const express = require("express")
const app = express()
const exphbs = require('express-handlebars')
const livros = require('./livros/livro');
const port = process.env.PORT || 3001

app.engine('handlebars', exphbs.engine()); 
app.set('view engine', 'handlebars'); 
app.use(express.static('public'));
app.use('/livros',livros)

app.get('/',(req,res)=>{    
    res.render('home')
})

app.listen(port,()=>{
    console.log('Servidor Rodando')
})