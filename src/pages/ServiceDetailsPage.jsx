import "../css/service-details.css";
import data from "../data/services.json";
import { useParams } from "react-router-dom";

const ServiceDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      {console.log(data)}

      <img
        className=" d-block img-spinning"
        src={data[id].img}
        alt={data[id].nombre}
      />

      <div className="container text-white">
        {/* <div className="row mt-5 ">
                <div className="">
                    <img className='mx-auto d-block h-75 ' src={data[0].img} alt="" />
                </div>
            </div> */}

        <div className="mt-4 d-flex justify-content-between align-items-center">
          <h1 className="fontTitulos display-3">
            <strong>{data[id].nombre}</strong>
          </h1>
          <button className="btn btn-cursos w-50 mx-2" type="button">
            Registrarse
          </button>
        </div>
        <hr />
        <div className="row datos my-3">
          <div className="col-12 col-lg-3 col-md-6">
            <h5>
              <i
                className="fa fa-caret-square-o-right fs-3"
                aria-hidden="true"
              ></i>{" "}
              {data[id].categoria}
            </h5>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h5>
              <i className="fa fa-user-circle-o fs-3" aria-hidden="true"></i>{" "}
              Profe: {data[id].profesor}
            </h5>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h5>
              <i className="fa fa-clock-o fs-3" aria-hidden="true"></i>{" "}
              {data[id].horario}
            </h5>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <h5>
              <i className="fa fa-calendar fs-3" aria-hidden="true"></i>{" "}
              {data[id].fecha}
            </h5>
          </div>
        </div>
        <hr />
        <p className="fs-5">{data[id].descripcion}</p>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
