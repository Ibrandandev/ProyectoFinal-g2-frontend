import { useEffect, useState } from "react";
import "../css/service-details.css";
import { Navigate, useParams } from "react-router-dom";
import { getServiceById } from "../helpers/servicesApi";
import Swal from "sweetalert2";
import { createBooking } from "../helpers/bookingsApi";

const ServiceDetailsScreen = () => {
  const { id } = useParams();

  const [service, setService] = useState(null);
  useEffect(() => {
    traerServicio();
  }, []);

  const traerServicio = async () => {
    const { service } = await getServiceById(id);
    setService(service);
  };

  const handleClick = async () => {
    const resp = await createBooking({ servicio: service._id });
    console.log(resp);
    if (resp.message === "Reserva Exitosa") {
      Swal.fire(resp.message, "", "success");
    } else {
      Swal.fire(resp.message, "", "error");
    }
  };

  if (service) {
    return (
      <div className="bg-blue">
        <img
          className=" d-block img-spinning"
          src={service.img}
          alt={service.nombre}
        />

        <div className="container text-white">
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h1 className="fontTitulos display-3">
              <strong>{service.nombre}</strong>
            </h1>
            <button
              className="btn btn-cursos w-50 mx-2"
              type="button"
              onClick={handleClick}
            >
              Reservar
            </button>
          </div>
          <hr />
          <div className="row datos my-3">
            <div className="col-12 col-lg-3 col-md-6">
              <h5>
                <i
                  className="fa fa-caret-square-o-right fs-3 me-2"
                  aria-hidden="true"
                ></i>
                {service.categoria.nombre}
              </h5>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <h5>
                <i
                  className="fa fa-user-circle-o fs-3 me-2"
                  aria-hidden="true"
                ></i>
                Profe: {service.profesor.nombre} {service.profesor.apellido}
              </h5>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <h5>
                <i className="fa fa-clock-o fs-3 me-2" aria-hidden="true"></i>
                {service.horario}
              </h5>
            </div>
            <div className="col-12 col-lg-3 col-md-6">
              <h5 className="d-flex align-items-center m-0">
                <i className="fa fa-calendar fs-3 me-2" aria-hidden="true"></i>
                <div className="d-flex gap-3">
                  {service.dias &&
                    service.dias.map((dia) => (
                      <span key={crypto.randomUUID()}>{dia}</span>
                    ))}
                </div>
              </h5>
            </div>
          </div>
          <hr />
          <p className="fs-5 mb-0">{service.descripcion}</p>
        </div>
      </div>
    );
  } else {
    <Navigate to="/services" />;
  }
};

export default ServiceDetailsScreen;
