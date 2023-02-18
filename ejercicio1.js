/*Escribir un programa de extraiga las parte numérica de una placa de un auto.

Ejemplo:
placa=”ABC-2030”
salida: 2030
.*/


let placa = "ABC1234"; // Ejemplo de placa
let numerosPlaca = "";

for (let i = 0; i < placa.length; i++) {
  let caracter = placa[i];
  if (!isNaN(caracter)) {
    // Verifica si el caracter actual es un número
    numerosPlaca += caracter;
  }
}

console.log("Los números de la placa son: " + numerosPlaca);


/*Este código recorre la placa caracter por caracter, 
verificando si cada uno es un número.
 Si lo es, lo agrega a la cadena numerosPlaca. Al final, 
 numerosPlaca contiene únicamente los números de la placa.*/