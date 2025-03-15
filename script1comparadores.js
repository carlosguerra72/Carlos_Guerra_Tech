let a = 5;
let b = 10;
let nombre = "Carlos";
let apellido = "Guerra";
let estudante = true;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let potencia = a ** b;

console.log("El nombre del estudiante es: " + nombre);
console.log("El apellido del estudiante es: " + apellido);
console.log("La suma de a y b es: " + suma);
console.log("La resta de a y b es: " + resta);
console.log("La multiplicación de a y b es: " + multiplicacion);
console.log("La división de a y b es: " + division);
console.log("El módulo de a y b es: " + modulo);
console.log("La potencia de a y b es: " + potencia);
console.log("es un estudiante (si o no)" + estudante);

/*imprimiendo en el dom*/
document.write("<div class='rojo'>");
document.write("El nombre del estudiante es: " + nombre + "<br>");
document.write("El apellido del estudiante es: " + apellido + "<br>");
document.write("El Nombre completo del estudiante es: " + (nombre + " " + apellido) + "<br>");
document.write("es un estudiante (si o no)" + estudante + "<br>");
document.write("<p>");
document.write("La suma de a y b es: " + suma + "<br>");
document.write("</p>");
document.write("La resta de a y b es: " + resta + "<br>");
document.write("La multiplicación de a y b es: " + multiplicacion + "<br>");
document.write("La división de a y b es: " + division + "<br>");
// document.write("El módulo de a y b es: " + modulo + "<br>");
document.write("La potencia de a y b es: " + potencia + "<br>");
document.write("</div>" + "<br>");

console.log("la variable a es mayor que b: " + (a > b));
console.log("la variable a es menor que b: " + (a < b));
console.log("la variable a es igual a b: " + (a == b));
console.log("la variable a es diferente a b: " + (a != b));
console.log("la variable a es mayor o igual a b: " + (a >= b));
console.log("la variable a es menor o igual a b: " + (a <= b));
console.log("la variable a es igual a b: " + (a === b));
console.log("la variable a es diferente a b: " + (a !== b));

document.write("la variable a es mayor que b: " + (a > b) + "<br>");
document.write("<p>");
document.write("La suma de a y b es: " + suma + "<br>");
document.write("</p>");
document.write("la variable a es menor que b: " + (a < b) + "<br>");
document.write("la variable a es igual a b: " + (a == b) + "<br>");
document.write("la variable a es diferente a b: " + (a != b) + "<br>");
document.write("la variable a es mayor o igual a b: " + (a >= b) + "<br>");
document.write("la variable a es menor o igual a b: " + (a <= b) + "<br>");
document.write("la variable a es igual a b: " + (a === b) + "<br>");
document.write("la variable a es diferente a b: " + (a !== b) + "<br>");

if (a < b) {
  console.log("a es menor que b");
} else {
  console.log("a es mayor que b");
}
function calculate() {
    const aa = parseFloat(document.getElementById('num1').value);
    const bb = parseFloat(document.getElementById('num2').value);
    const operaciones = document.getElementById('operation').value;
    let resultado;
  
    switch (operaciones) {
      case 'add':
        resultado = aa + bb;
        break;
      case 'subtract':
        resultado = aa - bb;
        break;
      case 'multiply':
        resultado = aa * bb;
        break;
      case 'divide':
        resultado = aa / bb;
        break;
      default:
        resultado = 'Operación no válida';
    }
  
    document.getElementById('result').innerText = 'Resultado: ' + resultado;
  }