/*Escribir un programa para obtener el nombre de usuario de un correo electrónico.
#Ejemplo
Entrada: nombredeuser@magbdigital.net
salida: nombredeuser*/

//con el if

let email = "jeysonjose@hotmail.es";
let username = "";
for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    username = email.substring(0, i);
    break;
  }
}
console.log(username);

/*con el for

let email = "jeysonjose@hotmail.es";
let username = "";
for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    username = email.substring(0, i);
    break;
  }
}
console.log(username);
*/


//Ambos programas producirán la salida "jeysonjose" para la entrada "jeysonjose@hotmail.es".