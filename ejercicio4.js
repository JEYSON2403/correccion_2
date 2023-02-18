/*Escribir un programa que obtenga las iniciales de un jugador de futbol, 
sabiendo que se usa iniciales y numero.
 Ejemplo CR-7, LM-10, LFS-10, AV-25*/


let jugador = "CR-7";

let iniciales = "";

for (let i = 0; i < jugador.length; i++) {
  if (jugador[i] === "-") {
    break;
  } else {
    iniciales += jugador[i];
  }
}

console.log(iniciales);


/*En este caso, el resultado sería "CR",
 ya que se están obteniendo las letras desde el inicio de la cadena hasta el primer guion ("-").
Puedes cambiar la variable jugador por cualquier otro valor que contenga iniciales y número en formato "XX-NN".*/