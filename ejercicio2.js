/* Escribir un programa que permita obtener el numero de piso de un edificio de 
oficinas donde el formato de numeración de las oficinas  
es: “01.24” lo que significa piso 1 oficina 24.
    
    
    #Ejemplo:
    codigo: "01.24"
    salida: 01 
    */


    let numOficina = "01.24";
    let numPiso = parseInt(numOficina); // Convertir a número entero el primer dígito de la cadena
    
    if (numPiso < 1 || numPiso > 99) { // Validar que el número de piso esté dentro del rango permitido
      console.log("Número de piso inválido");
    } else {
      console.log("El número de piso es: " + numPiso);
    }

    /*En este ejemplo se utiliza la función parseInt() 
    para convertir el primer dígito de la cadena "01.24" a un número entero. 
    Luego, se valida que este número esté dentro del rango permitido de 1 a 99, 
    que es lo común en la numeración de edificios de oficinas. Si el número de piso es válido,
     se muestra en consola el mensaje "El número de piso es: X", donde X es el número de piso obtenido. 
     Si el número de piso es inválido, se muestra el mensaje "Número de piso inválido".*/