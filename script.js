
const usuarios = [
  {
    id: 4,
    nombre: "Carlos",
    edad: 30,
    domicilio: {
      pais: "España",
      ciudad: "Madrid",
      calle: "Calle Alcalá 321",
      descripcion: "Ático con terraza"
    },
    activo: true,
    email: "carlos@example.com",
    telefono: "+34 600 111 222",
    intereses: ["tecnología", "videojuegos"]
  },
  {
    id: 5,
    nombre: "Elena",
    edad: 19,
    domicilio: {
      pais: "España",
      ciudad: "Valencia",
      calle: "Calle Colón 25",
      descripcion: "Apartamento interior"
    },
    activo: false,
    email: "elena@example.com",
    telefono: "+34 600 333 444",
    intereses: ["moda", "arte"]
  },
  {
    id: 6,
    nombre: "Javier",
    edad: 41,
    domicilio: {
      pais: "España",
      ciudad: "Barcelona",
      calle: "Calle Aragón 10",
      descripcion: "Dúplex con balcón"
    },
    activo: true,
    email: "javier@example.com",
    telefono: "+34 600 555 666",
    intereses: ["ciclismo", "lectura"]
  }
];

function llenarTabla() {
  const tbody = document.querySelector("#table tbody");
  tbody.innerHTML = ""; // Limpia contenido previo

  usuarios.forEach((usuario) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${usuario.id}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.edad}</td>
      <td>${usuario.email}</td>
      <td>${usuario.telefono}</td>
      <td>${usuario.activo ? "Sí" : "No"}</td>
    `;
    tbody.appendChild(fila);
  });
}

window.addEventListener("DOMContentLoaded", llenarTabla);

