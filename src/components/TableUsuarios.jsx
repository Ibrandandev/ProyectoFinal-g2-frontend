import React, { useState } from 'react';
import {borrarUsuario} from "../helpers/usuariosApi";

import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

import ModalEdit from './ModalEdit';

import "../css/table.css";

const TableUsuarios = ({usuarios, traerUsuarios}) => {
  const MySwal = withReactContent(Swal);

  const[show, setShow] = useState(false);

  const [uid, setUid] = useState(null);

  const handleClose = () =>{ 
    setUid(null);
    setShow(false);
    traerUsuarios();
  };

  const handleShow = (id) =>{
    setUid(id);
    setShow(true);
  };

  const inactivarUsuario = async (nombre, id) => {
    MySwal.fire({
      title: `Está seguro que quiere inactivar el usuario ${nombre}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => { 
      if (result.isConfirmed) {
        borrarUsuario(id).then((resultado) => {
          console.log(resultado);
          traerUsuarios();
          MySwal.fire("", `${resultado.message}`, "success");
        });
      } else if (result.isDenied) {
        MySwal.fire("El Usuario no se inactivó", "", "info");
      }
    }); 
    };

  return (
    <div>
    <table className='table table-admin'>
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Email</th>
        <th scope="col">Telefono</th>
        <th scope="col">Plan Contratado</th>
        <th scope="col">Estado</th>
        <th></th>
      </tr>
    </thead>


    <tbody>
      {usuarios.map((usuario) => (
        <tr key={usuario._id}>
          <th>{usuario.nombre}</th>
          <th>{usuario.apellido}</th>
          <td>{usuario.email}</td>
          <td>{usuario.telefono}</td>
          <td>{usuario.planContratado}</td>
          <td>
            {usuario.usuarioActivo ? (
              
              <i className="fa fa-check text-success d-flex justify-content-center" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-times text-danger d-flex justify-content-center " aria-hidden="true"></i>
            )}
            </td>
          <td>
            <div className="d-flex gap-3">
              <button
                className="btn btn-warning btn-sm btn-table"
                onClick={() => handleShow(usuario._id)}
              >
                <i className="fa fa-pencil " aria-hidden="true"></i>
              </button>
               <button
                className="btn btn-danger btn-sm btn-table"
                disabled={!usuario.usuarioActivo}
                onClick={() => inactivarUsuario(usuario.nombre, usuario._id)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
            </td>
        </tr>
      ))}
    </tbody>

  </table>
  {show && <ModalEdit show={show} handleClose={handleClose} uid={uid}/>}
</div>
  )
}

export default TableUsuarios;
