import React from 'react'
import { useState, useEffect } from "react";
import { getTrainers } from "../helpers/trainers";


const TrainersSection = () => {

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    traerTrainers();
  }, []);

  const traerTrainers = async () => {
    const { trainers } = await getTrainers();
    setTrainers(trainers);
  };



  return (
    <section className="container mt-5">
      <h2 className="text-center">Trainers</h2>
      <div className="row justify-content-center gap-2">
        {trainers.map((trainer) => ( <div className='col-4'>
          <div className="card rounded-circle px-0 rounded-0" key={trainer._id}>
            <img
              src={trainer.img}
              className="card-img rounded-circle w-75 mx-auto d-block "
              alt={`Imagen de Entrenador ${trainer.nombre}`}
            /> 
            
          </div>
          <div className="d-flex mt-4 align-items-center justify-content-center">
              <h5 className="card-title fs-2">{trainer.nombre} {trainer.apellido}</h5>
            </div>
          </div>
        ))}
      </div>      
    </section>
  );
}

export default TrainersSection








