import React from 'react'
import "../css/Login.css"
import { useState } from 'react'
import { authLogin } from '../helpers/ApiLogin';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault()
    const data = {
      email,
      password, 
    }
    
    const response = await authLogin(data)
    console.log(response)

    if (response?.token) {
      localStorage.setItem("token",JSON.stringify(response.token));
      Navigate("/")
    }
  }

  return (
    <>
    <div className="login">
      <div className="login-container">
        <h2>Iniciar sesion</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label htmlFor="">Correo:</label>
            <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Contraseña:</label>
            <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="container-loginbutton">
            <button className="login-button">Log in</button>
            <p className="registrarse">No tenes cuenta?<a href="">Registrate aqui!</a></p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default LoginScreen;