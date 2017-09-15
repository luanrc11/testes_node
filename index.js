const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

//tras todos clientes e por parametro id
router.get('/clientes/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM clientes' + filter, res);
})

router.post('/clientes', (req, res) =>{
  const nome = req.body.nome.substring(0,150);
  const cpf = req.body.cpf.substring(0,11);
  const email = req.body.email.substring(0,100);
  const img = req.body.img.substring(0,500);
  execSQLQuery(`INSERT INTO Clientes(Nome, CPF, email, img) VALUES('${nome}','${cpf}','${email}','${img}')`, res);
});

app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : '123456',
      database : 'tutorial'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }