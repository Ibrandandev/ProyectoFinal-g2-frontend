import React, { useEffect } from 'react';
import clasesGym from "../data/clases.json";



const TableClases = () => {
useEffect(()=>{alert("Bienvenidos a la pagina de administrador 🛠️")}, [] )
  return (
    <div>
        <table className='table'>
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
          {clasesGym.map((clase) => (
            <tr key={clase.id}>
              <th>{clase.nombre}</th>
              <td>{clase.categoria}</td>
              <td>{clase.horario}</td>
              <td>{clase.profesor}</td>
              <td>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => alert("Quiere modificar este elemento?")}
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


              {/*
              <td>
                {clase.destacado ? (
                  <i className="fa fa-star" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                )}
              </td>
              */}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableClases;
