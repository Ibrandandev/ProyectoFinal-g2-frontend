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
  {/*<div>
      <h1 className='d-flex text-center'> Admin </h1>
      
    </div>
    {/*<div>
      //<TableClases/>
  </div>}*/}
    <div>
        {usuarios.length > 0 ? (
         <TableUsuarios usuarios={usuarios} traerUsuarios={traerUsuarios}/>
        ) : (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
        )}
    </div>  
    </>
  )
}

export default AdminPage;