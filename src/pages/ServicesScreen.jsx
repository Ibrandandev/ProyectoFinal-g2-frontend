import { useEffect, useState } from "react";
import { getServices } from "../helpers/servicesApi";
import { Link } from "react-router-dom";

const ServicesScreen = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    traerServicios();
  }, [services]);

  const traerServicios = async () => {
    const { services } = await getServices();
    setServices(services);
  };

  return (
    <main className="bg-our-black min-vh-100">
      <div className="container ">
        <h1 className="text-our-white text-center py-4">Servicios</h1>
        <div className="row justify-content-evenly gap-3">
          {services.map((service) => (
            <div className="col-5 card bg-blue" key={service._id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={service.img}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className=" text-orange">{service.nombre}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <Link to={`/service-details/${service._id}`}>
                      <button className="btn btn-primary">Ver Más</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ServicesScreen;
