import { Link } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <main className="bg-our-black py-5 d-flex flex-column justify-content-center align-items-center gap-4">
      <h1 className="text-center text-orange">Pagina No Encontrada</h1>
      <div className="row w-100 justify-content-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3atHo_2HlrPWDSsmwn_ukHhlDdjlPTyFNxw&usqp=CAU"
          className="col-3 rounded "
          alt=""
        />
      </div>
      <Link className="btn" to="/">
        Volver a Inicio
      </Link>
    </main>
  );
};

export default ErrorScreen;
