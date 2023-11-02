import React from 'react'
import "../css/Login.css"
import { useState } from 'react'
import { authLogin } from '../helpers/ApiLogin';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const navigate = useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (nombre === "" || password === "") {
  //     setError(true)
  //     return
  //   }
  //   setError(false)
  // }

  return (
    <>
    <div className='login'>
      <h1>Iniciar sesion</h1>
      <form
      className='login2'
      onSubmit={handleLogin}
      >
        <label htmlFor="">Correo</label>
        <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="">Contraseña</label>
        <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button>Log in</button>
      </form>
    </div>
    </>
  );
};

export default login;