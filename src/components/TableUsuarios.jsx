import React from 'react';


const TableUsuarios = ({usuarios, traerUsuarios}) => {

  return (
    <div>
    <table className='table'>
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Email</th>
        <th scope="col">Plan</th>
        <th scope="col">Estado</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {usuarios.map((usuario) => (
        <tr key={usuario._id}>
          <th>{usuario.nombre}</th>
          <td>{usuario.email}</td>
          <td>{usuario.planContratado}</td>
            <td>
            {usuario.usuarioActivo ? (
              
              <i className="fa fa-check text-success" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-times text-danger" aria-hidden="true"></i>
            )}
            </td>
          <td>
            <div className="d-flex gap-3">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => handleShow(curso._id)}
              >
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </button>
               <button
                className="btn btn-danger btn-sm"
                onClick={() => inactivarCurso(curso.nombre, curso._id)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default TableUsuarios