import React, { useEffect, useState } from 'react'

import {getClaseById} from "../helpers/clasesApi";
import {actualizarClase} from "../helpers/clasesApi";

import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

import Modal from 'react-bootstrap/Modal';


const EditClases = () => {

    const MySwal = withReactContent(Swal);
    const [clase, setClase] =useState(null);

    useEffect(()=> {
        traerDatosClases();      
    }, []);
 
    const traerDatosClases = async () => {
        const resp = await getClaseById(cid);
        setClase(resp.clase) //VER!!!!!!!! NOMBRE QUE LE PUSO NACHO.  
    };

    const handleChange = (e)=> 
    {
        let valueCheck = false;

        if (e.target.name === "claseActiva") {
          console.log(e.target);
            if(e.target.checked){
                valueCheck = true;
            } else {
                valueCheck = false
            }
            setClase({
                ...clase,
                [e.target.name]: valueCheck,
            });        
        } else{
            setClase({
                ...clase,
                [e.target.name]:e.target.value,
           })}
        };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await actualizarClase(clase._id, clase);
        MySwal.fire("clase Actualizado", "", "success");
        handleClose();
    };


  return (
       <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar clase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {clase ? (
                <form onSubmit={handleSubmit}>
                  <label className="fw-bold">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={clase.nombre}
                    name="nombre"
                    onChange={handleChange}
                  />

                 
                
                  <label className="fw-bold">Telefono</label>
                  <textarea
                    className="form-control"
                    value={clase.telefono}
                    onChange={handleChange}
                    name="telefono"
                  ></textarea>        


                  <label className="fw-bold">PlanContratado</label>
                  <textarea
                    className="form-control"
                    value={clase.planContratado}
                    onChange={handleChange}
                    name="planContratado"
                  ></textarea>
             
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={clase.claseActiva}
                      onChange={handleChange}
                      name="claseActivo"
                    />
                    <label className="form-check-label fw-bold">Activo</label>
                  </div>
                  <div className="d-grid mt-2">
                    <button className="btn btn-warning">Actualizar</button>
                  </div>
                </form>
              ) : (
                <h3>Cargando...</h3>
              )}
            </Modal.Body>
          </Modal>
        </>
  )
};

export default EditClases


