function sumar(a2, b2) {
  const result = a2 + b2;
  console.log("La suma de a y b es: " + result);
  return result;
}

const resultado = sumar(1, 2);
console.log("El resultado es función normal: " + resultado);

function facturar(nombre, a, b, callback) {
  console.log("Ejecutando la función facturar para " + nombre + "...");
  const resultado = callback(a, b);
  console.log("El resultado de la función callback es: " + resultado);
}

facturar("Carlos", 50, 80, sumar);

facturar("KAthe", 1000, 2500, function (a, b) {
  console.log("Anónima...... La suma de a y b es: " + (a + b));
  return a + b;
});
