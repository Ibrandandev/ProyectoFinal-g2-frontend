import "../../css/home.css";
import { useState, useEffect } from "react";
import { getPlans } from "../../helpers/plans";
import Card from "./Card";

import "../../css/plans.css";

const PlansSection = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    traerPlanes();
  }, [planes]);

  const traerPlanes = async () => {
    const { plans } = await getPlans();
    setPlanes(plans);
  };

  return (
    <section className="container mt-5" id="plans">
      <h2 className="text-center text-orange">Nuestros Planes</h2>
      <div className="row justify-content-center justify-content-lg-around p-0 mx-0 ">
        {planes.map((plan) => (
          <Card plan={plan} key={plan._id} />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
