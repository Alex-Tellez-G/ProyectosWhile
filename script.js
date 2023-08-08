/*
//1. Crea un programa que pregunte al usuario un número. 
//Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let numero; 
let multiplos = "";
let i = 1
numero = prompt("Ejercicio 1: Por favor ingresar un numero");

while(i <= numero)
{
    // Comprobar si el número es múltiplo de 5
    if (i % 5 == 0) 
    {
        // Añadir el número a la variable multiplos con un espacio
        multiplos += i + " ";
    }
    //incremeto 1
    i++;
}
console.log("EJERCICIO 1: \n" + multiplos);


//2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, 
//pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let numero1 = prompt("Ejercicio 2: Por favor ingresar un numero");
let numero2 = prompt("Ejercicio 2: Por favor ingresar un numero");
let x = 1;
let lista = "";

while(x <= 50)
{
    if(x == numero1 || x == numero2)
    {
        lista += x + " ¡Lotería! - ";
    }
    else
    {
        lista += x + " - ";
    }
    x++;
}
console.log("EJERCICIO 2: \n" + lista)

*/
//3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
//Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

let Arreglonumeros = [];
let cantidadDatos = prompt("Ejercicio 3: Por favor ingresar el numero de datos que va a ingresar:");
let y=1;
while(y <= cantidadDatos)
{
    let dato = prompt("Ejercicio 3: Ingrese un dato: ");
    //convertir datoa nuemro 
    var convertirDatoEnNumero = Number (dato)

    if (!isNaN (convertirDatoEnNumero)) 
    {
        Arreglonumeros.push (convertirDatoEnNumero);
    } else 
    {
       // Si no, mostramos un mensaje de error
       alert ("El valor " + dato + " no es un número");
    }
    y++;
}

// Mostramos el contenido del arreglo
console.log ("Ejercicio 3: \n El arreglo es " + Arreglonumeros);

//4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.



//5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
//El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
//Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.