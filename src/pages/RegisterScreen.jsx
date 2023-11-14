import "../css/RegisterScreen.css";
import { useState, useEffect } from "react";
import { createUser } from "../helpers/usersApi";
import { getPlans } from "../helpers/plansApi";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function RegisterScreen() {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    planContratado: "",
    password: "",
    rol: "USER_ROLE",
  });
  const [planes, setPlanes] = useState(null);

  useEffect(() => {
    traerPlanes();
  }, []);

  const traerPlanes = async () => {
    const { plans } = await getPlans();
    setPlanes(plans);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegData({
      ...regData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados:", regData);
    const resp = await createUser(regData);
    console.log(resp);
    if (resp?.errors) {
      Swal.fire(resp.errors[0].msg, "", "error");
    } else {
      Swal.fire("Usuario creado", "", "success");
      navigate("/login");
    }
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
            </div>
            <div className="input-container-dos">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={regData.email}
                onChange={handleChange}
                required
              />
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
                <option value="NO PLAN">Seleccione Plan</option>
                <option value="NO PLAN">NO PLAN</option>
                {planes &&
                  planes.map((plan) => (
                    <option key={plan._id} value={plan.nombre}>
                      {plan.nombre}
                    </option>
                  ))}
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
            </div>
            <div className="input-container-cuatro">
              <p className="iniciar-sesion">
                Ya tenes cuenta? <Link to={"/login"}>Inicia sesion!</Link>
              </p>
              <div className="text-end">
                <button className="register-button" type="submit">
                  Registrarse
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterScreen;
