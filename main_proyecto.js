function calcular() {
  const A = Number(document.getElementById('valorA').value);
  const B = Number(document.getElementById('valorB').value);
  const C = Number(document.getElementById('valorC').value);

  if (!A || !B || !C) {
    alert("Rellena los tres valores");
    return;
  }

  // calcular resultado
  const resultado = ((B * C) / A).toFixed(2);

  // Mostrar en el input
  document.getElementById('valorResultado').value = resultado;

  // Mostrar en el bloque Resultado
  document.getElementById('resultado').innerHTML =
  "<p><strong>Resultado:</strong> " + resultado + "</p>" +
  "<p>" + A + " / " + B + " = " + C + " / y</p>" +
  "<p>y = (" + B + " × " + C + ") / " + A + "</p>" +
  "<p>y = " + resultado + "</p>";


  // explicación
  if (document.getElementById('explicacion')) {
    let explicacion = "";
    explicacion += "<p>" + A + " / " + B + " = " + C + " / y</p>";
    explicacion += "<p>y = (" + B + " × " + C + ") / " + A + "</p>";
    explicacion += "<p>y = " + resultado + "</p>";
    document.getElementById('explicacion').innerHTML = explicacion;
  }

  // historial
  const entrada = A + " / " + B + " = " + C + " / " + resultado;
  document.getElementById('historial').innerHTML += "<p>" + entrada + "</p>";
}




//guardar historial (base de datos en Local Storage)

// const KEY = 'calculalo_historial';

// function getHistory() {
//   const raw = localStorage.getItem(KEY);
//   return raw ? JSON.parse(raw) : [];
// }

// function addEntry(inputs, resultado) {
//   const h = getHistory();
//   h.unshift({ id: Date.now(), inputs, resultado, ts: new Date().toISOString() });
//   if (h.length > 200) h.length = 200;
//   localStorage.setItem(KEY, JSON.stringify(h));
// }

// function clearHistory() {
//   localStorage.removeItem(KEY);
// }