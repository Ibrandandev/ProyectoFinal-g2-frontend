import React from 'react';
import listaUsuarios from "../data/usuarios.json";




const TableUsuarios = () => {
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
      {listaUsuarios.map((usuario) => (
        <tr key={usuario.id}>
          <th>{usuario.nombre}</th>
          <td>{usuario.email}</td>
          <td>{usuario.plan}</td>
          <td>{usuario.estado}</td>
          {/*<td>
            {curso.destacado ? (
              <i className="fa fa-star" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-star-o" aria-hidden="true"></i>
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
              {/* boton eliminar curso }
              <button
                className="btn btn-danger btn-sm"
                onClick={() => inactivarCurso(curso.nombre, curso._id)}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </td>*/}
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default TableUsuarios