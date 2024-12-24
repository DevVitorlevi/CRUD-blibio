const express = require('express')
const conn = require('../db/conn')
const router = express.Router()

router.use(express.urlencoded({
    extended:true
}))
router.use(express.json())

router.post('/inserir',(req,res)=>{
    const { titulo, autor, ano, desc } = req.body;

    const query = `INSERT INTO livros (titulo, autor, ano, descricao) VALUES (?, ?, ?, ?)`

    conn.query(query,[titulo,autor,ano,desc],(err)=>{
        if(err){
            console.err(err)
            return
        }
        
        console.log('Livro Adicionado')
        res.redirect('/livros/todos')
    })
})

router.get('/todos',(req,res)=>{
    const query = `SELECT * FROM livros`

    conn.query(query,(err,data)=>{
        if(err){
            console.err(err)
            return
        }
        const livros = data
        res.render('livros',{livros})
    })
})
module.exports = router
