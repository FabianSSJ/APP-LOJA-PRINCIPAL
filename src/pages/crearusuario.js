import React, { useState } from "react";

const crearusuario = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = { nombre, email };

        try {
            const response = await fetch("http://localhost:5000/api/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoUsuario),
            });

            if (response.ok) {
                alert("Usuario creado exitosamente");
                setNombre("");
                setEmail("");
            } else {
                alert("Error al crear el usuario");
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
        }
    };

    return (
        <div>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Usuario</button>
            </form>
        </div>
    );
};

export default crearusuario;