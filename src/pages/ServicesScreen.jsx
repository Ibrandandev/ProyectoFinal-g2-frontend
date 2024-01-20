import { useEffect, useState } from "react";
import { getServices } from "../helpers/servicesApi";
import { Link } from "react-router-dom";

const ServicesScreen = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    traerServicios();
  }, []);

  const traerServicios = async () => {
    const { services } = await getServices();
    setServices(services);
  };

  return (
    <main className="bg-our-black ">
      <div className="container py-5">
        <h1 className="text-orange text-center mb-4">Servicios</h1>
        <div className="row justify-content-evenly gap-3">
          {services?.length > 0 ? (
            services.map((service) => (
              <div className="col-10 col-lg-5 card bg-blue" key={service._id}>
                <div className="row g-0">
                  <div className="col">
                    <div className="card-body">
                      <h5 className=" text-orange fs-3">{service.nombre}</h5>
                      <div className="d-flex flex-column flex-md-row gap-2 my-3">
                        <span className="text-our-white fs-5 text-title text-decoration-underline">
                          {service.horario}
                        </span>
                        {service.dias &&
                          service.dias.map((dia) => (
                            <span
                              key={crypto.randomUUID()}
                              className="text-our-white fs-5 text-title"
                            >
                              {dia}
                            </span>
                          ))}
                      </div>
                      <Link to={`/service-details/${service._id}`}>
                        <button className="btn btn-service bg-orange text-our-white ">
                          Ver Más
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-danger text-center">No hay servicios listados</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ServicesScreen;
