/*
var: Se utiliza para declarar variables globales o locales, y se puede reasignar su valor posteriormente.
let: Se utiliza para declarar variables que pueden ser reasignadas, pero no pueden ser redeclaradas dentro del mismo ámbito.
const: Se utiliza para declarar constantes, es decir, variables cuyo valor no puede ser reasignado después de su inicialización.

*/

var nombre; //Declarar una variable con var
nombre = "Juan"; //Asignar un valor a la variable


var apellido = "Pérez"; //Declarar y asignar una varible en una sola linea

console.log(nombre); //Imprime "Juan"
console.log(apellido); //Imprime "Pérez"

let edad = 30; //Declarar y asignar una variable con let
console.log(edad); //Imprime 30


edad = 31; //Reasignar el valor de la variable edad
console.log(edad); //Imprime 31

const PI = 3.14159; //Declarar una constante
console.log(PI); //Imprime 3.14159
