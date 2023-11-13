import { Link } from "react-router-dom";

const Card = ({ categoria }) => {
  return (
    <div className="col-11 col-md-5 col-lg-4 card text-bg-dark px-0 rounded-0  ">
      <Link to={`/categories/${categoria._id}`} className="text-white">
        <img
          src={
            categoria.img ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9TjNUBXez72OB1MUkeAlbEBTRybtYpxJhyAt-j5FaSpLSo4CSw75EKARpwp3roPsrzc&usqp=CAU"
          }
          className="card-img opacity-75"
          alt={`Imagen de entrenamiento ${categoria.nombre}`}
        />

        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <h5 className="card-title fs-2">{categoria.nombre}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
