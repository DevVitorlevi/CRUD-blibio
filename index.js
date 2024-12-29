const express = require("express")
const app = express()
const exphbs = require('express-handlebars')
const livros = require('./livros/livro');
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs.engine()); 
app.set('view engine', 'handlebars'); 
app.use(express.static(__dirname+'../../'+'public'));
app.use('/livros',livros)

app.get('/',(req,res)=>{    
    res.render('home')
})  

app.listen(PORT,()=>{
    console.log('Servidor Rodando')
})