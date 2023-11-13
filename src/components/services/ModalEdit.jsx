import { useEffect, useState } from "react";
import { getServiceById } from "../../helpers/servicesApi";
import { updateService } from "../../helpers/servicesApi";
import { getTrainers } from "../../helpers/trainers";
import { getCategories } from "../../helpers/categoriesApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Modal from "react-bootstrap/Modal";

const ModalEdit = ({ show, handleClose, serviceId }) => {
  const MySwal = withReactContent(Swal);
  const [servicio, setServicio] = useState(null);
  const [categorias, setCategorias] = useState(null);
  const [profesores, setProfesores] = useState(null);

  useEffect(() => {
    traerServicio();
    traerCategorias();
    traerProfesores();
  }, []);

  const traerServicio = async () => {
    const { service } = await getServiceById(serviceId);
    setServicio(service);
  };

  const traerCategorias = async () => {
    const { categories } = await getCategories();
    setCategorias(categories);
  };

  const traerProfesores = async () => {
    const { trainers } = await getTrainers();
    setProfesores(trainers);
  };

  const handleChange = (e) => {
    let valueCheck = false;

    if (e.target.name === "estado") {
      console.log(e.target);
      if (e.target.checked) {
        valueCheck = true;
      } else {
        valueCheck = false;
      }

      setServicio({
        ...servicio,
        [e.target.name]: valueCheck,
      });
    } else {
      setServicio({
        ...servicio,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await updateService(servicio._id, servicio);
    MySwal.fire(resp, "", "success");
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {servicio ? (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={servicio.nombre}
                name="nombre"
                onChange={handleChange}
              />

              <div className="my-2">
                <p>
                  <span className="fw-bold">Categoría actual:</span>
                  {servicio.categoria}
                </p>
                <label className="fw-bold">Cambiar categoría</label>
                <select
                  className="form-select"
                  name="categoria"
                  onChange={handleChange}
                >
                  {categorias &&
                    categorias.map((categoria) => (
                      <option key={categoria._id} value={categoria._id}>
                        {categoria.nombre}
                      </option>
                    ))}
                </select>
              </div>
              {console.log(categorias)}
              <div className="my-2">
                <p>
                  <span className="fw-bold">Profesor:</span>{" "}
                  {servicio.categoria}
                </p>
                <label className="fw-bold">Cambiar Profesor</label>
                <select
                  className="form-select"
                  name="profesor"
                  onChange={handleChange}
                  value={servicio.profesor}
                >
                  {profesores &&
                    profesores.map((profesor) => (
                      <option key={profesor._id} value={profesor._id}>
                        {profesor.nombre} {profesor.apellido}
                      </option>
                    ))}
                </select>
              </div>
              {console.log(profesores)}
              <label className="fw-bold">Fechas </label>
              <textarea
                className="form-control"
                value={servicio.fecha}
                onChange={handleChange}
                name="fecha"
              ></textarea>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={servicio.estado}
                  onChange={handleChange}
                  name="estado"
                />
                <label className="form-check-label fw-bold">Estado</label>
              </div>
              <div className="d-grid mt-2">
                <button className="btn btn-warning">Actualizar</button>
              </div>
            </form>
          ) : (
            <h3>Cargando...</h3>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEdit;