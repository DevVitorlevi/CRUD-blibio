const express = require('express')
const conn = require('../db/conn.js')
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

router.get('/edit',(req,res)=>{
    const query = `SELECT * FROM livros`

    conn.query(query,(err,data)=>{
        if(err){
            console.err(err)
            return
        }
        const livros = data
        res.render('edit',{livros})
    })
})
router.get('/formedit/:id',(req,res)=>{
    const id = req.params.id

    const query = `SELECT * FROM livros WHERE  id = ?`

    conn.query(query,[id],(err,data)=>{
        if(err){
            console.err(err)
            return
        }
        const livro = data[0]
        res.render('formedit',{livro})
    }) 
})
router.post('/editar',(req,res)=>{
    const {id,titulo,autor,ano,desc} = req.body

    const query = `UPDATE livros SET titulo = ?, autor = ?, ano = ?, descricao = ? WHERE id = ?`

    conn.query(query,[titulo,autor,ano,desc,id],(err)=>{
        if(err){
            console.err(err)
            return
        }

        res.redirect('/livros/todos')
    })
})
router.get('/remover',(req,res)=>{
    const query = `SELECT * FROM livros`

    conn.query(query,(err,data)=>{
        if(err){
            console.err(err)
            return
        }
        const livros = data
        res.render('apagar',{livros})
    })
})

router.get('/livro/:id',(req,res)=>{
    const id= req.params.id

    const query = 'SELECT * FROM livros WHERE id = ?'

    conn.query(query,[id],(err,data)=>{
        if(err){
            console.err(err)
            return
        }
        const livro = data[0]
        res.render('livro',{livro})
    })

})
router.post('/apagar/:id',(req,res)=>{
    const id = req.params.id

    const query = `DELETE FROM livros WHERE id = ?`

    conn.query(query,[id],(err)=>{
            if(err){
                console.err(err)
                return
            }

            res.redirect('/livros/todos')

    })
})
module.exports = router
