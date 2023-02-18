
/*Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10”
#Ejemplo:
codigo: "2022-10"
salida: 10*/




let fecha = "2022-10";
let mes = fecha.split("-")[1];

if (mes == "01") {
  console.log("Enero");
} else if (mes == "02") {
  console.log("Febrero");
} else if (mes == "03") {
  console.log("Marzo");
} else if (mes == "04") {
  console.log("Abril");
} else if (mes == "05") {
  console.log("Mayo");
} else if (mes == "06") {
  console.log("Junio");
} else if (mes == "07") {
  console.log("Julio");
} else if (mes == "08") {
  console.log("Agosto");
} else if (mes == "09") {
  console.log("Septiembre");
} else if (mes == "10") {
  console.log("Octubre");
} else if (mes == "11") {
  console.log("Noviembre");
} else if (mes == "12") {
  console.log("Diciembre");
} else {
  console.log("Mes inválido");
}

/*En este ejemplo, la variable fecha contiene la fecha en formato yyyy-mm,
 y se utiliza el método split() para separar el año y el mes en un array. 
Luego se obtiene el mes del array en la posición 1.

Después, se utiliza una estructura de control if para verificar el valor del mes y mostrar el nombre
 del mes correspondiente en la consola. Si el mes es inválido, se muestra un mensaje de error.*/