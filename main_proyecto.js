function calcular() {
  const A = Number(document.getElementById('valorA').value);
  const B = Number(document.getElementById('valorB').value);
  const C = Number(document.getElementById('valorC').value);

  if (!A || !B || !C) {
    alert("Rellena los tres valores");
    return;
  }

  // Calcular resultado
  const resultado = ((B * C) / A).toFixed(2);

  // Mostrar en el input
  document.getElementById('valorResultado').value = resultado;

  // Mostrar en el bloque Resultado
  document.getElementById('resultado').innerHTML =
  "<p><strong>Resultado:</strong> " + resultado + "</p>" +
  "<p>" + A + " / " + B + " = " + C + " / y</p>" +
  "<p>y = (" + B + " × " + C + ") / " + A + "</p>" +
  "<p>y = " + resultado + "</p>";


  // Explicación
  if (document.getElementById('explicacion')) {
    let explicacion = "";
    explicacion += "<p>" + A + " / " + B + " = " + C + " / y</p>";
    explicacion += "<p>y = (" + B + " × " + C + ") / " + A + "</p>";
    explicacion += "<p>y = " + resultado + "</p>";
    document.getElementById('explicacion').innerHTML = explicacion;
  }

  // Historial
  const entrada = A + " / " + B + " = " + C + " / " + resultado;
  document.getElementById('historial').innerHTML += "<p>" + entrada + "</p>";
}
