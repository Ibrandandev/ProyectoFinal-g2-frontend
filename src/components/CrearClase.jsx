import React, { useState } from 'react'

import { crearClase } from '../helpers/clasesApi';


const CrearClase = () => {
const [newClass, setNewClass] = useState ({nombre:"", categoria:"", profesor:"", dias:[], horario:"", descripcion:""})

const handleChange = (e) => {
    setNewClass({...newClass, [e.target.name]:e.target.value})
};

const handleSubmit = async (e) => {
        e.preventDefault();
      console.log(newClass);
        //const resp = await crearClase(newClass)
       
      };


  return (

    <div className='container w-75'>
       <h2> Agregar nueva clase </h2>

       <form onSubmit={handleSubmit}>

                  <label className="fw-bold">Nombre de la Clase</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newClass.nombre}
                    name="nombre"
                    onChange={handleChange}
                  />

                  <label className="fw-bold">Categoria</label>
                  <select className="form-select" aria-label="Default select example" 
                  value={newClass.categoria}
                  name="categoria"
                  onChange={handleChange}
                  >
                   <option value="1">Aerobico y Cardio</option>
                    <option value="2">Fuerza</option>
                    <option value="3">Mind & Body</option>
                    </select>
                
                <label className="fw-bold">Profesor</label>
                  <select className="form-select" aria-label="Default select example" 
                  value={newClass.profesor}
                  name="profeso"
                  onChange={handleChange}
                  >
                   <option value="1">Lucia Borghi</option>
                    <option value="2">Lucia Paterlini </option>
                    <option value="3">Ignacio Brandan</option>
                    <option value="3">Gonzalo Garcia </option>
                    </select>

                  
                    <div>
                    <label htmlFor="cbox1"><input type="checkbox" id="cbox1" value="first" /> 
                     Lunes </label>
                    <br />
                     <input type="checkbox" id="cbox2" value="second" />
                    <label htmlFor="cbox2">Martes </label>
                    <br />
                     <input type="checkbox" id="cbox3" value="third" />
                    <label htmlFor="cbox3"> Miercoles </label>
                    <br />
                     <input type="checkbox" id="cbox4" value="fourth" />
                    <label htmlFor="cbox4"> Jueves </label>
                    <br />
                     <input type="checkbox" id="cbox5" value="fifth" />
                    <label htmlFor="cbox5"> Viernes </label>
                    </div>

                    <label className="fw-bold" htmlFor='horario'>Horario </label> 
                    <input type="time"className='form-control'name="horario"
                    value={newClass.horario}
                    onChange={handleChange}
                    />


                  <label className="fw-bold" htmlFor='descripcion'>Descripcion</label>
                  <textarea
                    className="form-control"
                    value={newClass.descripcion}
                    onChange={handleChange}
                    name="descripcion"
                    id="descripcion"
                  ></textarea>  

              

 {/*<input type="text" className="form-control" aria-label="Text input with checkbox"/>*/}

<div className="d-grid mt-2">
  <button className="btn btn-warning">Crear</button>
</div>
      </form>   
      </div>
    
  )
}

export default CrearClase