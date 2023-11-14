import React from "react";
import { useState } from "react";
import { crearUsuario } from "../helpers/UsuariosApi";
import "../css/RegisterScreen.css"

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
        <div className="register">
            <div className="register-container">
                <h2>¡Registrate!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container-uno">
                        <label htmlFor="name">Nombre:</label>
                        <input 
                        type="text" 
                        id="nombre"
                        name="nombre"
                        value={regData.nombre}
                        onChange={handleChange}
                        required/>
                        <label htmlFor="name">Apellido:</label>
                        <input 
                        type="text" 
                        id="apellido"
                        name="apellido"
                        value={regData.apellido}
                        onChange={handleChange}
                        required/>
                    </div>
                    <div className="input-container-dos">
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={regData.email}
                        onChange={handleChange}
                        required/>
                        <label htmlFor="">Telefono:</label>
                        <input 
                        type="text" 
                        id="telefono"
                        value={regData.telefono}
                        onChange={handleChange}
                        required/>
                    </div>
                    <div className="input-container-tres">
                        <label htmlFor="">Planes:</label>
                        <select 
                        className="form-selected" 
                        aria-label="Default select example" 
                        id="planContratado"
                        value={regData.planContratado}
                        onChange={handleChange}
                        >
                            <option value="FULL">Plan - Full</option>
                            <option value="MUSCULACION">Plan - Musculacion</option>
                            <option value="CLASES">Plan - Solo clases</option>
                        </select>
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                        type="password" 
                        id="password"
                        name="password"
                        value={regData.password}
                        onChange={handleChange}
                        required/>
                    </div>
                    <div className="input-container-cuatro">
                        <p className="iniciar-sesion">Ya tenes cuenta? <a href="#">Inicia sesion!</a></p>
                        <button className="register-button" type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default RegisterScreen;
