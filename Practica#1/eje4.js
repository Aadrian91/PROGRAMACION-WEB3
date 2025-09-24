function miFuntion(numeros){
    let mayor = numeros[0];
    let menor = numeros[0];
    
    for (let i =1; i<numeros.length; i++){
        if(numeros[i]>mayor){
            mayor = numeros[i];
        }
        if(numeros[i]< menor){
            menor = numeros[i];
        }
    }
    return {mayor: mayor, menor: menor};
}
let obj=miFuntion([3,6,1,2,7,20]);
console.log(obj);