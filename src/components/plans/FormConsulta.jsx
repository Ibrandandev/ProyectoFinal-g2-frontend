import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useState } from "react";

const FormConsulta = ({ user }) => {
  const [formValues, setFormValues] = useState({
    nombre: user ? user.nombre : "",
    destinatario: user ? user.email : "",
    consulta: "",
    mensaje: "",
  });
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const templateParams = {
    nombre: formValues.nombre,
    destinatario: formValues.destinatario,
    consulta: formValues.consulta,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s77z5hs",
        "template_z6ovm7l",
        templateParams,
        "kPRDVZfVG6hM9voQ-"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "¡Listo!",
            text: "Tu consulta ha sido enviada!",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
            confirmButtonText: "Aceptar",
          });
        }
      );
    setFormValues({
      nombre: "",
      destinatario: "",
      consulta: "",
      mensaje: "",
    });
  };

  return (
    <div className="mt-4 ">
      <h2 className="infoPer">Información Personal</h2>
      <form
        className="row g-3 justify-content-center pt-4"
        onSubmit={sendEmail}
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <label htmlFor="validationDefault01" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Ingrese su nombre"
              onChange={handleChange}
              value={formValues.nombre}
              required
              minLength="3"
              maxLength="10"
              disabled={user}
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="validationDefaultUsername" className="form-label">
              Correo
            </label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">
                @
              </span>
              <input
                type="email"
                className="form-control"
                id="destinatario"
                aria-describedby="inputGroupPrepend2"
                placeholder="email@email.com"
                onChange={handleChange}
                value={formValues.destinatario}
                required
                minLength="12"
                maxLength="35"
                disabled={user}
              />
            </div>
          </div>

          <div className="col mb-3 pt-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Motivo de consulta
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleChange}
              value={formValues.consulta}
              id="consulta"
              required
            >
              <option value="">Elija el motivo de su consulta</option>
              <option value="Precio">Precio</option>
              <option value="Horario">Horario</option>
              <option value="Otro">Otro</option>
            </select>
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            ></label>
            <textarea
              className="form-control"
              id="mensaje"
              rows="3"
              placeholder="Ingrese aquí su consulta..."
              required
              value={formValues.mensaje}
              onChange={handleChange}
              minLength="10"
              maxLength="200"
            ></textarea>
          </div>

          <div className="col-12 mb-5 d-flex justify-content-end">
            <button className="btn btn-cursos" type="submit">
              Enviar consulta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormConsulta;
