export default class Usuario {
    constructor(id, nombre, edad, email, telefono, activo) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.activo = activo;
    }

    static items = [];

    static {
        const data = localStorage.getItem("usuarios");
        if (data) {
            try {
                const parsed = JSON.parse(data);
                // Aseguramos que cada objeto se convierta en instancia de Usuario
                Usuario.items = parsed.map(u => new Usuario(
                    u.id,
                    u.nombre,
                    u.edad,
                    u.email,
                    u.telefono,
                    u.activo
                ));
            } catch (error) {
                console.error("Error al parsear usuarios desde localStorage:", error);
                Usuario.items = [];
            }
        }
    }
}