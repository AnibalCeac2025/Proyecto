function calcular() {
  const aInput = document.getElementById("valorA");
  const bInput = document.getElementById("valorB");
  const cInput = document.getElementById("valorC");
  const resultadoInput = document.getElementById("valorResultado");

  const resultadoBox = document.getElementById("resultado");
  const historialBox = document.getElementById("historial");

  const a = parseFloat(aInput.value.replace(",", "."));
  const b = parseFloat(bInput.value.replace(",", "."));
  const c = parseFloat(cInput.value.replace(",", "."));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultadoInput.value = "";
    resultadoBox.innerHTML = "<p class='placeholder'>Por favor, rellena A, B y C con números válidos.</p>";
    return;
  }

  if (a === 0) {
    resultadoInput.value = "";
    resultadoBox.innerHTML = "<p class='placeholder'>El valor A no puede ser 0.</p>";
    return;
  }

  const y = (b * c) / a;
  const yFormateado = y.toFixed(2);

  // Mostrar en el input
  resultadoInput.value = yFormateado;

  // Paso a paso en el bloque de resultado
  resultadoBox.innerHTML = `
    <p><strong>Resultado: ${yFormateado}</strong></p>
    <p>
      <span>${a}</span> / <span>${b}</span> = <span>${c}</span> / <span>y</span>
    </p>
    <p>
      y = (${b} × ${c}) / ${a}
    </p>
    <p>
      y = ${yFormateado}
    </p>
  `;

  // Historial
  const item = document.createElement("p");
  item.textContent = `A: ${a}, B: ${b}, C: ${c} → Resultado: ${yFormateado}`;
  historialBox.appendChild(item);
}
