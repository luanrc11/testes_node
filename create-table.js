const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'root',
  password : '123456',
  database : 'tutorial'
});


  function createTable(conn){
  
        const sql = "CREATE TABLE IF NOT EXISTS Clientes ("+
                    "ID int NOT NULL AUTO_INCREMENT,"+
                    "Nome varchar(150) NOT NULL,"+
                    "CPF char(11) NOT NULL,"+
                    "PRIMARY KEY (ID)"+
                    ");";
        
        conn.query(sql, function (error, results, fields){
            if(error) return console.log(error);
            console.log('criou a tabela!');
        });
  }

  function addRows(conn){
    const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
    const values = [
          ['Luan', '12345678901'],
          ['Lucas', '09876543210'],
          ['Mayara', '12312312399']
        ];
    conn.query(sql, [values], function (error, results, fields){
            if(error) return console.log(error);
            console.log('adicionou registros!');
            conn.end();//fecha a conexão
        });
  }

  connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou!');
    createTable(connection);
    addRows(connection);
  })

