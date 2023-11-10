import "../css/plan-details.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { getPlanById } from "../helpers/plansApi";

const PlanDetailsPage = () => {
  const { id } = useParams();
  const [plan, setPlan] = useState([]);
  const [formValues, setFormValues] = useState({
    nombre: "",
    destinatario: "",
    consulta: "",
  });

  useEffect(() => {
    traerPlanes();
  }, []);

  const traerPlanes = async () => {
    const { plan } = await getPlanById(id);
    setPlan(plan);
  };

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
  };


  return (
    <div className="background">
      <div className="container text-white pt-4">
        <div className="row">
          <div className="col-12 col-lg-5 justify-content-md-center">
            <img className="w-100" src={plan.img} alt="" />
          </div>
          <div className="col-12 col-lg-7 mt-3">
            <div className="d-flex justify-content-between rowTitulo">
              <h1 className="rowTitulo mx-4 m-2">{plan.nombre}</h1>
              <h2 className="rowTitulo align-self-center mx-5 m-2">
                ${plan.precio}
              </h2>
            </div>
            <div>
              <h5 className="mt-3 mx-3">{plan.duracion}</h5>
            </div>
            <div>
              <ul className="mt-4 mx-2">
                {/* {plan.beneficios.map((beneficio) => {
                  return (
                    <li key={plan._id}>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      {beneficio}
                    </li>
                  ); 
                })}
                */}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <h2 className="infoPer">Información Personal</h2>
          <form className="row g-3 justify-content-center" onSubmit={sendEmail}>
            <div className="row">
              <div className="col-12 col-md-6">
                <label
                  htmlFor="validationDefault01"
                  className="form-label"
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={formValues.nombre}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label
                  htmlFor="validationDefault02"
                  className="form-label"
                ></label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  placeholder="Apellido"
                  required
                />
              </div>
              {/* </div>
                        <div className="row"> */}
              <div className="col-12 col-md-6">
                <label
                  htmlFor="validationDefaultUsername"
                  className="form-label"
                ></label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="destinatario"
                    aria-describedby="inputGroupPrepend2"
                    placeholder="Correo"
                    onChange={handleChange}
                    value={formValues.destinatario}
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <label
                  htmlFor="validationDefault03"
                  className="form-label"
                ></label>
                <input
                  type="number"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="Numero de teléfono"
                  required
                />
              </div>
              <div className="col mb-3">
              <label
                  htmlFor="formGroupExampleInput"
                  className="form-label"
                >Motivo de consulta</label>
                <select className="form-select" aria-label="Default select example"
                onChange={handleChange}
                value={formValues.consulta}
                id="consulta">
                  <option value="Precio">Precio</option>
                  <option value="Horario">Horario</option>
                  <option value="3">Three</option>
                </select>
                
                
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                ></label>
                <textarea
                  className="form-control"
                  id="plan"
                  rows="3"
                  placeholder="Ingrese aquí su consulta..."
                ></textarea>
              </div>

              <div className="col-12 mb-5 d-flex justify-content-end">
                <button
                  className="btn btn-cursos"
                  type="submit"
                >
                  Enviar consulta
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsPage;
