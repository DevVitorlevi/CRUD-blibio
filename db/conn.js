const mysql = require('mysql2')

const conn = mysql.createPool({
    connectionLimit: 20,
    host:'localhost',
    user:'root',
    password:'',
    database:"blibioteca"
},(err)=>{
    if(err){
        console.log('Erro ao Conenctar com o Banco de Dados')
    }
})

module.exports = conn