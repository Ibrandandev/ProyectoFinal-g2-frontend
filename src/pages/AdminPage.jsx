import React, { useEffect, useState } from 'react'
import TableClases from '../components/TableClases';
import TableUsuarios from '../components/TableUsuarios';

import "../css/admin.css";

import { getUsuarios } from '../helpers/usuariosApi';
import { getClases } from '../helpers/clasesApi';
import { Button } from 'react-bootstrap';

const AdminPage = () => {

const [usuarios, setUsuarios] = useState([]);
const [clases, setClases] = useState([]);

const [totalUsuarios, setTotalUsuarios] = useState(0);

const [mostrarUsuarios, setMostrarUsuarios]=useState(false);
const [mostrarClases, setMostrarClases]=useState(false);

//useEffect(()=>{alert("Bienvenidos a la pagina de administrador 🛠️")}, [] )

useEffect(() => {
    traerUsuarios();
    traerClases();
}, []); 

const traerUsuarios = async () => {
const {users, total} = await getUsuarios();
setUsuarios(users);
setTotalUsuarios(total)

};


const traerClases = async () => {
  const {services} = await getClases();
  setClases(services);
  };

  return (
<>  
<div className="fondo">
      <div className="container min-vh-100 bg-light fondo">
        <div className="row  py-5 head">
          <div className="col text-center ">
            <h1 className='titulo-admin'>
              <span>
                <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              </span>
              Panel administrador
            </h1>
          </div>
        </div>

        <div className='container d-flex align-items-center justify-content-center flex-column'>
        <div className='row m-5'>
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
        </div>

        <div className='col-6 d-flex justify-content-center align-items-center'>
        <Button className='botonC'
          onClick={()=> {
            
            setMostrarClases(!mostrarClases)
            if (mostrarUsuarios)setMostrarUsuarios(false)         
          }
          } > Clases
          </Button>
         
        </div>
        </div>

        <div>
          {mostrarUsuarios && (
            <TableUsuarios usuarios={usuarios} traerUsuarios={traerUsuarios}/>
          ) }
  
          {mostrarClases && (
            <TableClases clases={clases} traerClases={traerClases}/>
          ) }
         </div>
        


        </div>
      </div>
    </div>    
    </>
  )
}

export default AdminPage;