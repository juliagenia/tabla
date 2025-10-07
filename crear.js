import  Usuario  from './Usuario.js';
let usuariosDesdeLocalStorage;
if (localStorage.getItem("usuarios") === null) {
    usuariosDesdeLocalStorage = []
} else {
    usuariosDesdeLocalStorage = JSON.parse(localStorage.getItem("usuarios"))
}

const usuarios = usuariosDesdeLocalStorage;

const botonEnviar = document.getElementById("Enviar");

botonEnviar.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const nuevoUsuario = new Usuario(
        document.getElementById('inputID').value.trim(),
        document.getElementById('inputNombre').value.trim(),
        parseInt(document.getElementById('inputEdad').value),
        document.getElementById('inputEmail').value.trim(),
        document.getElementById('inputTelefono').value.trim(),
        document.getElementById('inputActivo').checked
    );

    console.log("Click en botón Enviar");
    console.log("Datos capturados:", nuevoUsuario);

    usuarios.push(nuevoUsuario); // Agrega al array
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    cargarTablaDesdeArray(usuarios); // Actualiza la tabla
});

function cargarTablaDesdeArray(array) {
    const contenedor = document.getElementById("tablaUsuarios");
    if (!contenedor) {
        console.warn("Contenedor 'tablaUsuarios' no encontrado.");
        return;
    }

    contenedor.innerHTML = ""; // Limpia contenido anterior

    const tabla = document.createElement("table");
    tabla.classList.add("tabla-estilo"); // Opcional para estilos
    tabla.classList.add("fade-in"); 

    const encabezado = `
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Activo</th>
        </tr>
    `;
    tabla.innerHTML = encabezado;

    array.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.activo ? "Sí" : "No"}</td>
        `;
        tabla.appendChild(fila);
    });

    contenedor.appendChild(tabla);
}
