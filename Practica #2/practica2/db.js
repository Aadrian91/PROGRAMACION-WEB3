const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3307, 
  user: 'practica',
  password: '12345',
  database: 'tienda'
});

connection.connect(err => {
  if (err) {
    console.error('Error al conectar con MySQL:', err);
  } else {
    console.log('Conectado a MySQL');
  }
});

module.exports = connection;
