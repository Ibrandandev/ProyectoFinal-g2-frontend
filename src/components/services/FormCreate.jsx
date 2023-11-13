import { useEffect, useState } from "react";
import { getCategories } from "../../helpers/categoriesApi";
import { getTrainers } from "../../helpers/trainers";
// import { createService } from "../../helpers/servicesApi";

const CrearServicio = () => {
  const [categorias, setCategorias] = useState(null);
  const [profesores, setProfesores] = useState(null);
  const [service, setService] = useState({
    nombre: "",
    categoria: "",
    profesor: "",
    dias: [],
    horario: "",
    descripcion: "",
  });

  useEffect(() => {
    traerCategorias();
    traerProfesores();
  }, []);

  const traerCategorias = async () => {
    const { categories } = await getCategories();
    setCategorias(categories);
  };

  const traerProfesores = async () => {
    const { trainers } = await getTrainers();
    setProfesores(trainers);
  };

  const handleChange = (e) => {
    setService({ ...service, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(service);
    //const resp = await createService(service)
  };

  return (
    <div className="container w-75">
      <h2 className="text-blue"> Agregar nueva clase </h2>

      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="nombre">
          Nombre de la Clase
        </label>
        <input
          type="text"
          className="form-control"
          value={service.nombre}
          id="nombre"
          onChange={handleChange}
          minLength={4}
          required
        />

        <label className="form-label" htmlFor="categoria">
          Categoria
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={service.categoria}
          id="categoria"
          onChange={handleChange}
          required
        >
          {categorias &&
            categorias.map((categoria) => (
              <option value={categoria._id} key={categoria._id}>
                {categoria.nombre}
              </option>
            ))}
        </select>

        <label className="form-label" htmlFor="profesor">
          Profesor
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={service.profesor}
          id="profesor"
          onChange={handleChange}
        >
          {profesores &&
            profesores.map((profesor) => (
              <option value={profesor._id} key={profesor._id}>
                {profesor.nombre} {profesor.apellido}
              </option>
            ))}
        </select>

        <div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              id="lunes"
              value="lunes"
              className="form-check-input m-0"
            />
            <label htmlFor="lunes" className="form-label ms-2 m-0">
              Lunes
            </label>
          </div>

          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              id="martes"
              value="martes"
              className="form-check-input m-0"
            />
            <label htmlFor="martes" className="form-label ms-2 m-0">
              Martes
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              id="miercoles"
              value="miercoles"
              className="form-check-input m-0"
            />
            <label htmlFor="miercoles" className="form-label ms-2 m-0">
              Miercoles
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              id="jueves"
              value="jueves"
              className="form-check-input m-0"
            />
            <label htmlFor="jueves" className="form-label ms-2 m-0">
              Jueves
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              id="viernes"
              value="viernes"
              className="form-check-input m-0"
            />
            <label htmlFor="viernes" className="form-label ms-2 m-0">
              Viernes
            </label>
          </div>
        </div>

        <label className="fw-bold" htmlFor="horario">
          Horario
        </label>
        <input
          type="time"
          className="form-control"
          id="horario"
          value={service.horario}
          onChange={handleChange}
        />

        <label className="fw-bold" htmlFor="descripcion">
          Descripcion
        </label>
        <textarea
          className="form-control"
          value={service.descripcion}
          onChange={handleChange}
          id="descripcion"
        ></textarea>

        <div className="d-grid mt-2">
          <button className="btn btn-warning">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default CrearServicio;
