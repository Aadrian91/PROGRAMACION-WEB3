function miFuncion(numeros) {
    let resultado = { pares: [], impares: [] };

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {      
            resultado.pares.push(numeros[i]);
        } else {                           
            resultado.impares.push(numeros[i]);
        }
    }

    return resultado;
}

let obj = miFuncion([4, 2, 7, 8, 5, 33, 44, 46, 55]);
console.log(obj);
