import { useEffect, useState } from "react";
import { getUserById } from "../../helpers/usersApi";
import { updateUser } from "../../helpers/usersApi";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Modal from "react-bootstrap/Modal";
import { getPlans } from "../../helpers/plansApi";
import { getRoles } from "../../helpers/rolesApi";

const ModalEdit = ({ show, handleClose, uid }) => {
  const MySwal = withReactContent(Swal);
  const [usuario, setUsuario] = useState(null);
  const [roles, setRoles] = useState(null);
  const [planes, setPlanes] = useState(null);

  useEffect(() => {
    traerDatosUsuario();
  }, []);

  useEffect(() => {
    traerRoles();
  }, []);

  useEffect(() => {
    traerPlanes();
  }, []);

  const traerRoles = async () => {
    const { roles } = await getRoles();
    setRoles(roles);
  };

  const traerPlanes = async () => {
    const { plans } = await getPlans();
    setPlanes(plans);
  };

  const traerDatosUsuario = async () => {
    const resp = await getUserById(uid);
    setUsuario(resp.user);
  };

  const handleChange = (e) => {
    let valueCheck = false;

    if (e.target.name === "usuarioActivo") {
      console.log(e.target);
      if (e.target.checked) {
        valueCheck = true;
      } else {
        valueCheck = false;
      }
      setUsuario({
        ...usuario,
        [e.target.name]: valueCheck,
      });
    } else {
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await updateUser(usuario._id, usuario);
    console.log(resp);
    if (resp?.errors) {
      MySwal.fire(resp.errors[0].msg, "", "error");
    } else {
      MySwal.fire("Actualizacion Exitosa", "", "success");
    }
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usuario ? (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={usuario.nombre}
                name="nombre"
                onChange={handleChange}
              />

              <label className="fw-bold">Apellido</label>
              <textarea
                className="form-control"
                value={usuario.apellido}
                onChange={handleChange}
                name="apellido"
              ></textarea>

              <label className="fw-bold">Correo Electronico</label>
              <textarea
                className="form-control"
                value={usuario.email}
                onChange={handleChange}
                name="email"
              ></textarea>

              <div className="my-2">
                <p>
                  <span className="fw-bold">Rol actual: </span>
                  {usuario.rol}
                </p>
                <label className="fw-bold">Cambiar Rol</label>
                <select
                  className="form-select"
                  name="rol"
                  onChange={handleChange}
                >
                  {roles &&
                    roles.map((rol) => (
                      <option key={rol._id} value={rol.rol}>
                        {rol.rol}
                      </option>
                    ))}
                </select>
              </div>
              <div className="my-2">
                <p>
                  <span className="fw-bold">Plan actual: </span>
                  {usuario.planContratado}
                </p>
                <label className="fw-bold">Cambiar Plan</label>
                <select
                  className="form-select"
                  name="planContratado"
                  onChange={handleChange}
                >
                  {planes &&
                    planes.map((plan) => (
                      <option key={plan._id} value={plan.nombre}>
                        {plan.nombre}
                      </option>
                    ))}
                </select>
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={usuario.usuarioActivo}
                  onChange={handleChange}
                  name="usuarioActivo"
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
