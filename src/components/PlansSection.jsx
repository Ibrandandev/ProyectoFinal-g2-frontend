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
      <div className="row justify-content-center gap-2">
      
       
        {planes.map((plan) => (   
              
        <div className="card col-3">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-center w-75">{plan.nombre}</h5>
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
            <a href="#" className="btn d-flex justify-content-center">
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
