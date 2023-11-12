
import "../css/home-section.css"
import React from 'react'
import { useState, useEffect } from "react";
import { getPlans } from "../helpers/plans";

import "../css/plans.css";


const PlansSection = () => {

  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    traerPlanes();
  }, []);

  const traerPlanes = async () => {
    const { plans } = await getPlans();
    setPlanes(plans);
  };


  return (
    <section className="container mt-5">
      <h2 className="text-center">Nuestros Planes</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
      
       
        {planes.map((plan) => (   
              
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title fs-3">{plan.nombre}</h5>
            <hr />
            <p className="card-text fs-5 text-center py-2">
              $<span>{plan.precio}</span>/mes
            </p>
          </div>
          <ul className="list-group list-group-flush">
            {plan.beneficios.map((beneficio) => (
              <li className="list-group-item">{beneficio}</li>
            ))
            }
            
          </ul>
          <div className="card-body">
            <a href="#" className="btn btn-primary w-75 mx-auto d-block">
              Asociate
            </a>
          </div>
        </div>

        )
        )}
      
      </div>
    </section>
  );
};

export default PlansSection;
