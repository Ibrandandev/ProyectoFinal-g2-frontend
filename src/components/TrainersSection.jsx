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
        {trainers.map((trainer) => (
          <div className=" col-4 card rounded-circle mx-4 px-0 rounded-0" key={trainer._id}>
            <img
              src={trainer.img}
              className="card-img rounded-circle w-75 mx-auto d-block "
              alt={`Imagen de Entrenador ${trainer.nombre}`}
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h5 className="card-title fs-2">{trainer.nombre} {trainer.apellido}</h5>
            </div>
          </div>
        ))}
      </div>

{/*<div className="col-3">
          <img
            src="https://us.123rf.com/450wm/yupiramos/yupiramos1912/yupiramos191206719/134808929-mujer-joven-atleta-avatar-ilustraci%C3%B3n-vectorial-character-design.jpg"
            className="rounded-circle w-75 mx-auto d-block border border-3"
            alt=""
          />
        </div>
        <div className="col-3">
          <img
            src="https://us.123rf.com/450wm/yupiramos/yupiramos2001/yupiramos200104131/136830074-joven-atleta-avatar-ilustraci%C3%B3n-vectorial-character-design.jpg"
            className="rounded-circle w-75 mx-auto d-block border border-3"
            alt=""
          />
        </div>
        <div className="col-3">
          <img
            src="https://us.123rf.com/450wm/yupiramos/yupiramos1912/yupiramos191206719/134808929-mujer-joven-atleta-avatar-ilustraci%C3%B3n-vectorial-character-design.jpg"
            className="rounded-circle w-75 mx-auto d-block border border-3"
            alt=""
          />
        </div>
        <div className="col-3">
          <img
            src="https://us.123rf.com/450wm/yupiramos/yupiramos2001/yupiramos200104131/136830074-joven-atleta-avatar-ilustraci%C3%B3n-vectorial-character-design.jpg"
            className="rounded-circle w-75 mx-auto d-block border border-3"
            alt=""
          />
        </div>
        <div className="col-3">
          <img
            src="https://us.123rf.com/450wm/yupiramos/yupiramos2001/yupiramos200104131/136830074-joven-atleta-avatar-ilustraci%C3%B3n-vectorial-character-design.jpg"
            className="rounded-circle w-75 mx-auto d-block border border-3"
            alt=""
          />
        </div> */}
      
    </section>
  );
}

export default TrainersSection








