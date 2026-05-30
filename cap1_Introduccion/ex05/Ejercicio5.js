//Operadores matematicos

let a, b;
let c, d;

let suma, resta, mult, div, residuo, potencia;

//Obtener los datos a traves del usuario
a = prompt("ingrese un numero: ");
b = prompt("ingrese otro numero: ");

// Resultados de operaciones
suma = a + b; // Aqui la operacion da un error debido a que se concatenan los datos
document.write("La suma es: ", suma, "<br>");
console.log("La suma es: ", suma);

resta = a - b;
document.write("La resta es: ", resta, "<br>");
console.log("La resta es: ", resta);

mult = a * b;
document.write("La mult es: ", mult, "<br>");
console.log("La mult es: ", mult);

div = a / b;
document.write("La div es: ", div, "<br>");
console.log("La div es: ", div);

residuo = a % b;
document.write("La residuo es: ", residuo, "<br>");
console.log("La residuo es: ", residuo);

potencia = a ** b;
document.write("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);

c = parseInt(prompt("ingrese un numero: "));
d = parsefloat(prompt("ingrese otro numero: "));

suma = c + d
resta = c - d
mult = c * d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son: ", 
  "suma: ", suma, "<br>",
  "resta: ", resta, "<br>",
  "Multiplicacion: ", mult, "<br>",
  "div: ", div, "<br>",
  "residuo: ", residuo, "<br>",
  "potencia: ", potencia, "<br>",
);

console.log("Las operaciones resueltas son: ",
  "Suma: ", suma,
  "Resta: ", resta,
  "Multiplicacion: ", mult,
  "Division: ", div,
  "Residuo: ", residuo,
  "potencia: ", potencia
);