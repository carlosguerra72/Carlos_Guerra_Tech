function validateInputs() {
  const aa = document.getElementById("cant");
  const bb = document.getElementById("detal");
  const cc = document.getElementById("vrunit");
  const agregar = document.getElementById("addfact");
  console.log("aca estoy");
  if (aa.value && bb.value && cc.value) {

    agregar.disabled = false;
    
  } else {
    agregar.disabled = true;
  }
}

document.getElementById("cant").addEventListener("input", validateInputs);
console.log("escuchando los iputs");
document.getElementById("detal").addEventListener("input", validateInputs);
document.getElementById("vrunit").addEventListener("input", validateInputs);



//Concatenar clasico
const a="anibal";
const b="guerra";
const c= a+" "+b;
console.log(c);

//Concatenar un poco mas moderno
const d=`${a} ${b}`;
console.log(d);

function addtable() {
  const aa = parseFloat(document.getElementById("cant").value);
  const bb = document.getElementById("detal").value;
  const cc = parseFloat(document.getElementById("vrunit").value);
  let vrtotal;
  let impuesto;
  let resultado = 0;
  vrtotal = aa * cc;
  if (vrtotal >= 2000000) {
    impuesto = vrtotal * 0.19;
    resultado = vrtotal + impuesto;
  } else {
    impuesto = 0;
  }
  document.getElementById("tbody").innerHTML+=`
<tr>
<td>${aa}</td>
<td>${cc}</td>
<td>${impuesto}</td>
<td>${vrtotal}</td>
<td>${resultado}</td>
  </tr>`;

  console.log("el impuesto de esta vaina es de: " + impuesto);
  console.log("el valor total de la factura es de: " + resultado);
  // document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

document.getElementById("FacturaForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  addtable(); // Llamar a la función calculate
});
