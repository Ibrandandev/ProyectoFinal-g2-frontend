import { useState, useEffect } from "react";
import { getTrainers } from "../../helpers/trainers";
import Card from "./Card";

const TrainersSection = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    traerTrainers();
  }, [trainers]);

  const traerTrainers = async () => {
    const { trainers } = await getTrainers();
    setTrainers(trainers);
  };

  return (
    <section className="container mt-5">
      <h2 className="text-center">Trainers</h2>
      <div className="row justify-content-center">
        {trainers.map((trainer) => (
          <Card trainer={trainer} key={trainer._id} />
        ))}
      </div>
    </section>
  );
};

export default TrainersSection;