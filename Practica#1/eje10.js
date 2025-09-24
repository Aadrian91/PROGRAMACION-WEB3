/*Callback
Se usa cuando una función necesita ejecutar otra función después de 
que termine una tarea, sincrónica o asíncrona, y el código es simple.
*/
function obtenerDatos(callback) {
  console.log("Obteniendo datos...");
  setTimeout(() => {
    callback("Datos recibidos con callback");
  }, 2000);
}

// Uso
obtenerDatos((resultado) => {
  console.log(resultado);
});

/*Promesa
Se usa para manejar operaciones asíncronas de manera más ordenada, evitando 
el “callback hell” y permitiendo encadenar tareas fácilmente con .then() y .catch().
*/
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    console.log("Obteniendo datos...");
    setTimeout(() => {
      resolve("Datos recibidos con promesa");
    }, 2000);
  });
}

// Uso
obtenerDatos()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

