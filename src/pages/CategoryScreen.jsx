import "../css/category.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getServicesByCategory } from "../helpers/servicesApi";

const CategoryScreen = () => {
  const { id } = useParams();

  const [servicios, setServicios] = useState(null);

  useEffect(() => {
    traerServicios();
  }, []);

  const traerServicios = async () => {
    const { services } = await getServicesByCategory(id);
    setServicios(services);
  };

  return (
    <main className=" bg-our-black min-vh-100">
      <div className="container pt-3">
        <div className="row justify-content-evenly gap-3">
          {servicios?.length > 0 ? (
            servicios.map((servicio) => (
              <div className="col-10 col-lg-5 card bg-blue" key={servicio._id}>
                <div className="row g-0">
                  <div className="col">
                    <div className="card-body">
                      <h5 className=" text-orange fs-3">{servicio.nombre}</h5>
                      <div className="d-flex flex-column flex-md-row gap-2 my-3">
                        <span className="text-our-white fs-5 text-title text-decoration-underline">
                          {servicio.horario}
                        </span>
                        {servicio.dias &&
                          servicio.dias.map((dia) => (
                            <span
                              key={crypto.randomUUID()}
                              className="text-our-white fs-5 text-title"
                            >
                              {dia}
                            </span>
                          ))}
                      </div>
                      <Link to={`/service-details/${servicio._id}`}>
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
            <p className="text-danger text-center fs-4">
              No se encontraron resultados...
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default CategoryScreen;
