import React, { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import "../css/table.css"

import EditClases from "../components/EditClases";

import { borrarClase } from '../helpers/clasesApi';


const TableClases  = ({clases, traerClases}) => {

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
        <table className='table'>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Profesor</th>
            <th scope="col">Dias</th>
            <th scope="col">Horario</th>
            <th scope="col">Estado </th>
          </tr>
        </thead>

        <tbody>
          {clases.map((clase) => (
            <tr key={clase._id}>
              <th>{clase.nombre}</th>
              <td>{clase.categoria}</td>
              <td>{clase.profesor}</td>
              <td>{clase.dias}</td>
              <td>{clase.horario}</td>
              <td>
            {clase.estado ? (
              
              <i className="fa fa-check text-success d-flex justify-content-center" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-times text-danger d-flex 
              justify-content-center " aria-hidden="true"></i>
            )}
            </td>
            <td>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleShow(clase._id)}
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                  
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => inactivarClase(clase.nombre, clase._id)}
                    disabled={!clase.estado}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                     </button>
                </div>
              </td>          
            </tr>
          ))}
        </tbody> 
      </table>
      {show && <EditClases show={show} handleClose={handleClose} cid={cid}/>}
    </div>
  )
}

export default TableClases;
