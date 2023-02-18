/*Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

#Ejemplo
Entrada: facebook.com/nombreuser
Salida: nombreuser*/

let url = "facebook.com/jeysonUser";
let partes = url.split("/"); 
let nombreUsuario = "";

for(let i = 0; i < partes.length; i++){
  if(partes[i] !== "" && partes[i] !== "facebook.com"){
    nombreUsuario = partes[i]; 
    break; 
  }
}

console.log(nombreUsuario); 


/*Este código en JavaScript utiliza el método split() para separar la URL en partes,
 y luego utiliza un ciclo for para encontrar el nombre de usuario, el cual se almacena en la variable nombreUsuario. 
 La salida se muestra en la consola mediante el uso del método console.log(). 
 El código se puede simplificar utilizando un if en lugar de un 
if anidado y una sola instrucción en lugar de un bloque de código para asignar el valor a nombreUsuario.*/