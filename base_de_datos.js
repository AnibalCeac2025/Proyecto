// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAU8os4nv0JBaFMLjtdZ3NlpoR9i5S9SqM",
  authDomain: "proyecto-ceac.firebaseapp.com",
  projectId: "proyecto-ceac",
  storageBucket: "proyecto-ceac.appspot.com",
  messagingSenderId: "1001600555002",
  appId: "1:1001600555002:web:ccd0a8c3211512d8d87643",
  measurementId: "G-1PN0GZNHLR"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, rellena al menos nombre, email y mensaje.");
      return;
    }

    try {
      await db.collection("contactos").add({
        nombre,
        empresa,
        email,
        mensaje,
        creadoEn: new Date().toISOString()
      });

      alert("Mensaje enviado correctamente");
      form.reset();
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Hubo un error al enviar el mensaje");
    }
  });
});
