import React from "react";
import { useState } from "react";
import { crearUsuario } from "../helpers/UsuariosApi";

function RegisterScreen() {
    const [regData, setRegData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        planContratado: "",
        password: "",
        rol: "USER_ROLE",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setRegData({
            ...regData,
            [id]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos enviados:', regData);
        const response = await crearUsuario(regData);
        console.log(response);
    };

    return (
        <>
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input 
                type="text"
                id="nombre"
                name="nombre"
                value={regData.nombre}
                onChange={handleChange}
                required
                />
                <label htmlFor="name">Apellido:</label>
                <input 
                type="text"
                id="apellido"
                name="apellido"
                value={regData.apellido}
                onChange={handleChange}
                required
                />
                <label htmlFor="email">Email:</label>
                <input 
                type="email"
                id="email"
                name="email"
                value={regData.email}
                onChange={handleChange}
                required
                />
                <label htmlFor="">Telefono:</label>
                <input
                type="text"
                id="telefono"
                value={regData.telefono}
                onChange={handleChange}
                required/>
                <label htmlFor="">Planes:</label>
                <select
                className="form-select"
                aria-label="Default select example"
                id="planContratado"
                value={regData.planContratado}
                onChange={handleChange}>
                <option value="FULL">Plan Full</option>
                <option value="MUSCULACION">Plan Musculacion</option>
                <option value="CLASES">Plan Solo clases</option>
                </select>
                <label htmlFor="password">Contraseña:</label>
                <input 
                type="password"
                id="password"
                name="password"
                value={regData.password}
                onChange={handleChange}
                required
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
        </>
    );
}

export default RegisterScreen;