import React, { useEffect, useState } from 'react'

import {getClaseById} from "../helpers/clasesApi";
import {actualizarClase} from "../helpers/clasesApi";

import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

import Modal from 'react-bootstrap/Modal';


const EditClases = ({show, handleClose, cid}) => {
    const MySwal = withReactContent(Swal);
    const [clase, setClase] =useState(null);

    useEffect(()=> {
        traerDatosClases();      
    }, []);
 
    const traerDatosClases = async () => {
        const resp = await getClaseById(cid);
        setClase(resp.service) 
    };

    const handleChange = (e)=> 
    {
        let valueCheck = false;

        if (e.target.name === "estado") {
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
        MySwal.fire("clase Actualizada", "", "success");
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

                  <label className="fw-bold">Categoria</label>
                  <textarea
                    className="form-control"
                    value={clase.categoria}
                    onChange={handleChange}
                    name="categoria"
                  ></textarea>        


                  <label className="fw-bold">Fechas </label>
                  <textarea
                    className="form-control"
                    value={clase.fecha}
                    onChange={handleChange}
                    name="fecha"
                  ></textarea>
             
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={clase.estado}
                      onChange={handleChange}
                      name="estado"
                    />
                    <label className="form-check-label fw-bold">Estado</label>
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


