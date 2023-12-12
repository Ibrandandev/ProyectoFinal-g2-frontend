import { useState } from "react";
import "../css/contacto.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactoScreen = ({ user }) => {
  const [formValues, setFormValues] = useState({
    nombre: user ? user.nombre : "",
    destinatario: user ? user.email : "",
    consulta: "",
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
        "template_3cnfsca",
        templateParams,
        "kPRDVZfVG6hM9voQ-"
      )
      .then(
        () => {
          Swal.fire({
            title: "¡Listo!",
            text: "Tu consulta ha sido enviada!",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
          setFormValues({
            nombre: user ? user.nombre : "",
            destinatario: user ? user.email : "",
            consulta: "",
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
            confirmButtonText: "Aceptar",
          });
        }
      );
  };
  return (
    <div className="background ">
      <div className="container py-5">
        <div className="row  justify-content-center">
          <div className="col-10 text-white ">
            <h1 className="d-flex justify-content-center mb-4">
              Tenes alguna duda? Contáctanos!
            </h1>
          </div>
        </div>
        <div className="row justify-content-center text-white ">
          <form className="col-10" onSubmit={sendEmail}>
            <div className="row">
              <div className="col my-3">
                <label htmlFor="validationDefault01" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Introduzca su nombre"
                  onChange={handleChange}
                  value={formValues.nombre}
                  required
                  pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,254}"
                  title="Ingrese solo letras"
                  minLength="3"
                  maxLength="20"
                  disabled={user}
                />
              </div>
              <div className="col my-3 ">
                <label htmlFor="destinatario" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="destinatario"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  value={formValues.destinatario}
                  required
                  minLength="10"
                  disabled={user}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Motivo de consulta
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Ingrese el motivo de su consulta"
                required
                pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,254}"
                title="Ingrese solo letras"
                minLength="5"
                maxLength="30"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="consulta" className="form-label">
                Dejanos tu duda!
              </label>
              <textarea
                className="form-control"
                id="consulta"
                rows="3"
                onChange={handleChange}
                value={formValues.consulta}
                required
                minLength="10"
                maxLength="250"
              ></textarea>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-style btn-lg" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactoScreen;
