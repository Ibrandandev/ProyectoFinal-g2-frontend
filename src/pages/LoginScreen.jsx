import "../css/Login.css";
import { useState } from "react";
import { login } from "../helpers/loginApi";
import MessageApp from "../components/MessageApp";
import { useNavigate, Link } from "react-router-dom";

const LoginScreen = ({ iniciarSesion, guardarUsuario }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email,
      password,
    };

    const response = await login(data);

    if (response?.token) {
      iniciarSesion();
      guardarUsuario(response.user);
      if (response.user.rol === "ADMIN_ROLE") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }

    setResultado(response.message);
    setLoading(false);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2 className="text-orange">Iniciar sesion</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <label htmlFor="">Correo:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="*" className="text-white">
            ¿Olvidaste Tu Contraseña?
          </Link>
          <div className="text-end">
            <button className="login-button" disabled={loading && true}>
              {loading ? "Cargando" : "Iniciar Sesión"}
            </button>
          </div>
        </form>
        {resultado && <MessageApp msg={resultado} />}
        <div></div>
      </div>
    </div>
  );
};

export default LoginScreen;
