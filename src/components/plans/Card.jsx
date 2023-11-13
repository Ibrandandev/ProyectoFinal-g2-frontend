import { Link } from "react-router-dom";

const Card = ({ plan }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 px-lg-2 m-3 mx-md-0">
      <div className="card-body bg-blue py-5 ">
        <h5 className="card-title fs-2  text-white mx-4">{plan.nombre}</h5>
        <hr className="border-orange " />
        <p className="card-text fs-2 text-center py-2 text-title text-our-white">
          $<span>{plan.precio}</span>/mes
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {plan.beneficios.map((beneficio) => (
          <li
            className="list-group-item bg-blue text-our-white"
            key={crypto.randomUUID()}
          >
            {beneficio}
          </li>
        ))}
      </ul>
      <div className="card-body bg-blue py-3">
        <Link
          to={`/plan-details/${plan._id}`}
          className="btn w-75 mx-auto d-block fw-bold"
        >
          Asociate
        </Link>
      </div>
    </div>
  );
};

export default Card;
