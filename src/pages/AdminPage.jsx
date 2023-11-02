import React, { useEffect, useState } from 'react'
import TableClases from '../components/TableClases';
import TableUsuarios from '../components/TableUsuarios';

import { getUsuarios } from '../helpers/usuariosApi';

const AdminPage = () => {

const [usuarios, setUsuarios] = useState([]);
const [totalUsuarios, setTotalUsuarios] = useState(0)

//useEffect(()=>{alert("Bienvenidos a la pagina de administrador 🛠️")}, [] )

useEffect(() => {
    traerUsuarios();
}, []); 

const traerUsuarios = async () => {
const {users, total} = await getUsuarios();
setUsuarios(users);
setTotalUsuarios(total)

};

  return (
<>  
<div className="bg-dark">
      <div className="container bg-light vh-100">
        <div className="row  py-5">
          <div className="col text-center ">
            <h1>
              <span>
                <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              </span>
              Panel administrador
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
          <div>
        {usuarios.length > 0 ? (
         <TableUsuarios usuarios={usuarios} traerUsuarios={traerUsuarios}/>
        ) : (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>)}
            </div>  
          </div>
        </div>
      </div>
    </div>    
    </>
  )
}

export default AdminPage;