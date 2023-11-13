import { useState, useEffect } from "react";
import { getCategories } from "../../helpers/categoriesApi";
import Card from "./Card";

const CategoriesSection = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    traerCategorias();
  }, [categorias]);

  const traerCategorias = async () => {
    const { categories } = await getCategories();
    setCategorias(categories);
  };

  return (
    <section className="container mt-5">
      <h2 className="text-center text-orange">Categorias</h2>
      <div className="row justify-content-center">
        {categorias.map((categoria) => (
          <Card categoria={categoria} key={categoria._id} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
