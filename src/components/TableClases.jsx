import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import "../css/table.css"


const TableClases = () => {

const MySwal = withReactContent(Swal); 
const [show, setShow] = useState(false);

const [cid, setCid] = useState(null);

const handleClose = ()=>{
  setCid(null);
  setShow(false);
  traerClases();
};

const handleShow = (id)=>{
  setCid(id);
  setShow(true);
};


const inactivarClase = async (nombre, id) => {
  MySwal.fire({
    title: `Está seguro que quiere inactivar la clase ${nombre}?`,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si",
    denyButtonText: `No`,
  }).then((result) => { 
    if (result.isConfirmed) {
      borrarClase(id).then((resultado) => {
        console.log(resultado);
        traerClases();
        MySwal.fire("", `${resultado.message}`, "success");
      });
    } else if (result.isDenied) {
      MySwal.fire("La clase no se inactivó", "", "info");
    }
  }); 
}

 return (

    <div>
        <table className='table table-admin'>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Horario</th>
            <th scope="col">Profesor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {/*usuarios.map((usuario)) => (
            <tr key={usuario.id}>
              <th>{usuario.nombre}</th>
              <td>{usuario.categoria}</td>
              <td>{usuario.horario}</td>
              <td>{usuario.profesor}</td>
              <td>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleShow(clase.id)}
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                  
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => inactivarClase(clase.nombre, clase.id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                     </button>
                </div>
              </td>


              
              <td>
                {clase.destacado ? (
                  <i className="fa fa-star" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                )}
              </td>
              
            </tr>
          ))*/}

        </tbody>
      </table>

    </div>
  )
}

export default TableClases;
