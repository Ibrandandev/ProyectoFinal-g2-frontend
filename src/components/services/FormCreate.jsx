import { useEffect, useState } from "react";
import { getCategories } from "../../helpers/categoriesApi";
import { getTrainers } from "../../helpers/trainers";
import { createService } from "../../helpers/servicesApi";
import Swal from "sweetalert2";

const FormCreate = () => {
  const [categorias, setCategorias] = useState(null);
  const [profesores, setProfesores] = useState(null);
  const [service, setService] = useState({
    nombre: "",
    categoria: "",
    profesor: "",
    dias: [],
    horario: "",
    cupo: 0,
    img: "",
    descripcion: "",
  });
  const [dias, setDias] = useState([]);

  useEffect(() => {
    traerCategorias();
  }, []);

  useEffect(() => {
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

  const handleChangeCheck = (e) => {
    const { checked, value } = e.target;
    if (checked && !dias.includes(value)) {
      setDias([...dias, value]);
    } else {
      setDias(dias.filter((dia) => dia !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!service.categoria) {
      return Swal.fire("Debe Seleccionar Categoria", "", "info");
    }
    if (!service.profesor) {
      return Swal.fire("Debe Seleccionar Profesor", "", "info");
    }
    if (dias.length === 0) {
      return Swal.fire("Debe Seleccionar al menos un Dia", "", "info");
    }
    if (!service.horario) {
      return Swal.fire("Debe Seleccionar el Horario", "", "info");
    }
    service.dias = [...dias];
    service.cupo = Number(service.cupo);
    const resp = await createService(service);
    console.log(resp);
  };

  return (
    <div className="container">
      <h2 className="text-blue"> Agregar nueva clase </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label className="form-label fw-bold" htmlFor="nombre">
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
        </div>
        
        {categorias && (
          <>
          <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="categoria">
              Categoria
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={service.categoria}
              id="categoria"
              onChange={handleChange}
            >
              <option value="NONE">Selecciona una categoria</option>
              {categorias.map((categoria) => (
                <option value={categoria._id} key={categoria._id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </div>
          </>
        )}

        {profesores && (
          <>
          <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="profesor">
              Profesor
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={service.profesor}
              id="profesor"
              onChange={handleChange}
            >
              <option value="NONE">Selecciona un Profesor</option>
              {profesores.map((profesor) => (
                <option value={profesor._id} key={profesor._id}>
                  {profesor.nombre} {profesor.apellido}
                </option>
              ))}
            </select>
          </div>
          </>
        )}

        <div className="col">
          <div className="mb-3">
          <p className="my-1 fw-bold">Dias</p>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              id="lunes"
              name="dias"
              value="lunes"
              className="form-check-input m-0"
              onChange={handleChangeCheck}
            />
            <label htmlFor="lunes" className="form-label ms-2 m-0">
              Lunes
            </label>
          </div>

          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="martes"
              value="martes"
              className="form-check-input m-0"
              onChange={handleChangeCheck}
            />
            <label htmlFor="martes" className="form-label ms-2 m-0">
              Martes
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="miercoles"
              value="miercoles"
              onChange={handleChangeCheck}
              className="form-check-input m-0"
            />
            <label htmlFor="miercoles" className="form-label ms-2 m-0">
              Miercoles
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="jueves"
              value="jueves"
              onChange={handleChangeCheck}
              className="form-check-input m-0"
            />
            <label htmlFor="jueves" className="form-label ms-2 m-0">
              Jueves
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="viernes"
              value="viernes"
              onChange={handleChangeCheck}
              className="form-check-input m-0"
            />
            <label htmlFor="viernes" className="form-label ms-2 m-0">
              Viernes
            </label>
          </div>
        </div>

        <div className="mb-3">
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
        </div>

        <div className="mb-3">
        <label className="fw-bold" htmlFor="cupo">
          Cupo de Participantes
        </label>
        <input
          type="number"
          className="form-control"
          min={5}
          id="cupo"
          value={service.cupo}
          required
          onChange={handleChange}
        />
        </div>
        
        <div className="mb-3">
        <label className="form-label fw-bold" htmlFor="img">
          Imagen
        </label>
        <input
          type="url"
          className="form-control"
          value={service.img}
          id="img"
          onChange={handleChange}
          required
        />
        </div>
        <div className="mb-3">
        <label className="fw-bold" htmlFor="descripcion">
          Descripcion
        </label>
        <textarea
          className="form-control"
          value={service.descripcion}
          onChange={handleChange}
          id="descripcion"
          required
        ></textarea>
        </div>

        <div className="d-grid mt-2">
          <button className="btn btn-warning">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default FormCreate;
