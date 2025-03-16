
document.getElementById("calcForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    calculate(); // Llamar a la función calculate
});

function validateInputs() {
  const aa = document.getElementById("num1");
  const bb = document.getElementById("num2");
  const calcButton = document.getElementById("calcButton");
    console.log("num1.value: " + aa.value);
    console.log("num2.value: " + bb.value);
  if (aa.value && bb.value) {
    calcButton.disabled = false;
  } else {
    calcButton.disabled = true;
  }
}

document.getElementById("num1").addEventListener("input", validateInputs);
document.getElementById("num2").addEventListener("input", validateInputs);

function calculate() {
  const aa = parseFloat(document.getElementById("num1").value);
  const bb = parseFloat(document.getElementById("num2").value);
  const operaciones = document.getElementById("operation").value;
  let resultado;

  switch (operaciones) {
    case "add":
      resultado = aa + bb;
      break;
    case "subtract":
      resultado = aa - bb;
      break;
    case "multiply":
      resultado = aa * bb;
      break;
    case "divide":
      resultado = aa / bb;
      break;
    default:
      resultado = "Operación no válida";
  }

  document.getElementById("result").innerText = "Resultado: " + resultado;
}
