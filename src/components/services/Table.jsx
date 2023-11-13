import { useState } from "react";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../../css/services.css";

import ModalEdit from "./ModalEdit";

import { deleteService } from "../../helpers/servicesApi";
import FormCreate from "./FormCreate";

const Table = ({ servicios, traerServicios }) => {
  const MySwal = withReactContent(Swal);
  const [show, setShow] = useState(false);

  const [serviceId, setServiceId] = useState(null);

  const handleClose = () => {
    setServiceId(null);
    setShow(false);
    traerServicios();
  };

  const handleShow = (id) => {
    setServiceId(id);
    setShow(true);
  };

  const deshabilitarServicio = async (nombre, id) => {
    MySwal.fire({
      title: `Está seguro que quiere deshabilitar la clase ${nombre}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteService(id).then((resultado) => {
          console.log(resultado);
          traerServicios();
          MySwal.fire("", `${resultado.message}`, "success");
        });
      } else if (result.isDenied) {
        MySwal.fire("Algo ha salida mal, reintente nuevamente!", "", "error");
      }
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Profesor</th>
            <th scope="col">Dias</th>
            <th scope="col">Horario</th>
            <th scope="col">Cupo</th>
            <th scope="col">Estado </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {servicios.map((servicio) => (
            <tr key={servicio._id}>
              <th>{servicio.nombre}</th>
              <td>{servicio.categoria}</td>
              <td>{servicio.profesor}</td>
              <td className="d-flex flex-column h-100">
                {servicio &&
                  servicio.dias.map((dia) => (
                    <p key={crypto.randomUUID()}>{dia}</p>
                  ))}
              </td>
              <td>{servicio.horario}</td>
              <td>{servicio.cupo}</td>
              <td>
                {servicio.estado ? (
                  <i
                    className="fa fa-check text-success d-flex justify-content-center"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    className="fa fa-times text-danger d-flex 
              justify-content-center "
                    aria-hidden="true"
                  ></i>
                )}
              </td>
              <td>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleShow(servicio._id)}
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deshabilitarServicio(servicio.nombre, servicio._id)
                    }
                    disabled={!servicio.estado}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {show && (
        <ModalEdit
          show={show}
          handleClose={handleClose}
          serviceId={serviceId}
        />
      )}

      <div>
        <FormCreate />
      </div>
    </div>
  );
};

export default Table;
