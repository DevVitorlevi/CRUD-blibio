const mysql = require('mysql2');

// Criação da conexão com base nas variáveis de ambiente
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'blibioteca',

});

// Testar a conexão
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão bem-sucedida ao banco de dados!');
    }
});
