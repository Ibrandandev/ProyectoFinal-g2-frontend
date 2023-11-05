import React from "react";
import { useState } from "react";

function RegisterScreen() {
    const [regData, setRegData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegData({
            ...regData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', regData);
    };

    return (
        <>
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input 
                type="text"
                id="name"
                name="name"
                value={regData.name}
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