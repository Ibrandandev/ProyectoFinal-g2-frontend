import { useEffect, useState } from "react";
import { getCategories } from "../../helpers/categoriesApi";
import { getTrainers } from "../../helpers/trainersApi";
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
    <div className="container mb-5">
      <h2 className="text-blue"> Agregar nueva clase </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold text-orange" htmlFor="nombre">
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
              <label
                className="form-label fw-bold text-orange"
                htmlFor="categoria"
              >
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
              <label
                className="form-label fw-bold text-orange"
                htmlFor="profesor"
              >
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
            <p className="my-1 fw-bold text-orange">Dias</p>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              id="Lunes"
              name="dias"
              value="Lunes"
              className="form-check-input m-0"
              onChange={handleChangeCheck}
            />
            <label htmlFor="Lunes" className="form-label text-blue ms-2 m-0">
              Lunes
            </label>
          </div>

          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="Martes"
              value="Martes"
              className="form-check-input m-0"
              onChange={handleChangeCheck}
            />
            <label htmlFor="Martes" className="form-label text-blue ms-2 m-0">
              Martes
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="Miercoles"
              value="Miercoles"
              onChange={handleChangeCheck}
              className="form-check-input m-0"
            />
            <label
              htmlFor="Miercoles"
              className="form-label text-blue ms-2 m-0"
            >
              Miercoles
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="Jueves"
              value="Jueves"
              onChange={handleChangeCheck}
              className="form-check-input m-0"
            />
            <label htmlFor="Jueves" className="form-label text-blue ms-2 m-0">
              Jueves
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="dias"
              id="Viernes"
              value="Viernes"
              onChange={handleChangeCheck}
              className="form-check-input m-0"
            />
            <label htmlFor="Viernes" className="form-label text-blue ms-2 m-0">
              Viernes
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="fw-bold text-orange" htmlFor="horario">
            Horario
          </label>
          <input
            type="time"
            className="form-control"
            id="horario"
            min="08:00"
            max="22:30"
            value={service.horario}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="fw-bold text-orange" htmlFor="cupo">
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
          <label className="form-label fw-bold text-orange" htmlFor="img">
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
          <label className="fw-bold text-orange" htmlFor="descripcion">
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
          <button className="btn bg-orange btn-plan text-white ">Crear</button>
        </div>
      </form>
    </div>
  );
};

export default FormCreate;
