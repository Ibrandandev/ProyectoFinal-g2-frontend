import "../css/plan-details.css";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getPlanById } from "../helpers/plansApi";
import { Link } from "react-router-dom";
import FormConsulta from "../components/plans/FormConsulta";

const PlanDetailsScreen = ({ user }) => {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    traerPlanes();
  }, []);

  const traerPlanes = async () => {
    const { plan } = await getPlanById(id);
    setPlan(plan);
  };

  if (plan) {
    return (
      <div className="bg-blue">
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
                <ul className="mt-4 mx-2 ps-1 list-group list-group-flush ">
                  {plan.beneficios &&
                    plan.beneficios.map((beneficio) => {
                      return (
                        <li
                          key={crypto.randomUUID()}
                          className="list-group-item bg-blue text-our-white border-0 ps-0"
                        >
                          <i
                            className="fa fa-check me-1 text-success"
                            aria-hidden="true"
                          ></i>
                          {beneficio}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div>
                <Link
                  to="/error"
                  className="btn btn-plan bg-orange text-our-white mt-3"
                >
                  Anotarse
                </Link>
              </div>
            </div>
          </div>
          <FormConsulta user={user} />
        </div>
      </div>
    );
  } else {
    <Navigate to="/" />;
  }
};

export default PlanDetailsScreen;
