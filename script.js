function calcular() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operacion = document.getElementById("operacion").value;
  const resultado = document.getElementById("resultado");

  if (num1 === "" || num2 === "") {
    resultado.textContent = "⚠️ Por favor, completa ambos campos.";
    return;
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (operacion === "division" && n2 === 0) {
    resultado.textContent = "❌ Error: No se puede dividir entre cero.";
    return;
  }

  let res;
  switch (operacion) {
    case "suma":
      res = n1 + n2;
      break;
    case "resta":
      res = n1 - n2;
      break;
    case "multiplicacion":
      res = n1 * n2;
      break;
    case "division":
      res = n1 / n2;
      break;
  }

  resultado.textContent = `✅ Resultado: ${res}`;
}

function limpiar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("operacion").value = "suma";
}
