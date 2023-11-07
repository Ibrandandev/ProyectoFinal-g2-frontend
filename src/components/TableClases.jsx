import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import "../css/table.css"

//import ModalEdit from './ModalEdit';


const TableClases = () => {


//const MySwal = withReactContent(Swal);

//Para mostrar el modal 
const [show, setShow] = useState(false);

//Por el ID del curso
const [cid, setCid] = useState(null);

//cerrar modal 
const handleClose = ()=>{
  setCid(null);
  setShow(false);
  traerUsuarios();
};

//abrir modal 
const handleShow = (id)=>{
  setCid(id);
  setShow(true);
};


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
