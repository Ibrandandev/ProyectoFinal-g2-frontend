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
    <div className='container'>
      <div className="container-all">
      <div className='titulo'>
        <h2>Iniciar sesion</h2>
      </div>
      <div>
        <form className='form' onSubmit={handleLogin}>
          <div className='row'>
            <label htmlFor="">Correo:</label>
            <input 
            type="text" 
            placeholder='example@mail.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='row'>
            <label htmlFor="">Contraseña:</label>
            <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='row button'>
            <button>Log in</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    </>
  );
};

export default LoginScreen;