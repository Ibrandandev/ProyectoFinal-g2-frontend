import React, { useEffect, useState } from 'react'
import TableClases from '../components/TableClases';
import TableUsuarios from '../components/TableUsuarios';

import "../css/admin.css";

import { getUsuarios } from '../helpers/usuariosApi';
import { Button } from 'react-bootstrap';

const AdminPage = () => {

const [usuarios, setUsuarios] = useState([]);
const [totalUsuarios, setTotalUsuarios] = useState(0);
const [mostrarUsuarios, setMostrarUsuarios]=useState(false);
const [mostrarClases, setMostrarClases]=useState(false);

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
<div className="fondo">
      <div className="container bg-light vh-100 fondo">
        <div className="row  py-5">
          <div className="col text-center ">
            <h1 className='titulo-admin'>
              <span>
                <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              </span>
              Panel administrador
            </h1>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
          <div className='col-6 d-flex justify-content-center align-items-center'>
          
          <Button className='botonU'
          onClick={()=>
            {
              setMostrarUsuarios(!mostrarUsuarios)
              if (mostrarClases)setMostrarClases(false)   
            }
          }
          > Usuarios
          </Button>

          {mostrarUsuarios && (
            <TableUsuarios usuarios={usuarios} traerUsuarios={traerUsuarios}/>
          ) }
        </div>

        <div className='col-6 d-flex justify-content-center align-items-center'>
        <Button className='botonC'
          onClick={()=> {
            
            setMostrarClases(!mostrarClases)
            if (mostrarUsuarios)setMostrarUsuarios(false)         
          }
          } > Clases
          </Button>
          {mostrarClases && (
            <TableClases/>
          ) }
        </div>
        </div>
        </div>


        

       {/* <div className=" table row">
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
        </div>*/}
      </div>
    </div>    
    </>
  )
}

export default AdminPage;