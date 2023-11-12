import { useState, useEffect } from "react";
import { getCategories } from "../helpers/categoriesApi";

const CategoriesSection = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    traerCategorias();
  }, []);

  const traerCategorias = async () => {
    const { categories } = await getCategories();
    setCategorias(categories);
  };

  return (
    <section className="container">
      <h2 className="text-center">Categorias</h2>
      <div className="row justify-content-center gap-3">
        {categorias.map((c) => (
          <div className=" col-3 card text-bg-dark px-0 rounded-0 " key={c._id}>
            <img
              src={
                c.img ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9TjNUBXez72OB1MUkeAlbEBTRybtYpxJhyAt-j5FaSpLSo4CSw75EKARpwp3roPsrzc&usqp=CAU"
              }
              className="card-img opacity-75"
              alt={`Imagen de entrenamiento ${c.nombre}`}
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <h5 className="card-title fs-2">{c.nombre}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
