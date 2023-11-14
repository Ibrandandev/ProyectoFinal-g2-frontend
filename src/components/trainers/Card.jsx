import "../../css/trainers.css";
const Card = ({ trainer }) => {
  return (
    <div className="col-10 col-md-5 col-lg-3 m-3 m-lg-0">
      <div className="card rounded-circle px-0" key={trainer._id}>
        <img
          src={trainer.img}
          className="card-img rounded-circle img-trainer"
          alt={`Imagen de Entrenador ${trainer.nombre}`}
        />
      </div>
      <div className="d-flex mt-3 align-items-center justify-content-center">
        <p className="text-orange fs-2 fw-bold text-center">
          {trainer.nombre} {trainer.apellido}
        </p>
      </div>
    </div>
  );
};

export default Card;
