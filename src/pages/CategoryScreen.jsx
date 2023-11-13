import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../helpers/categoriesApi";

const CategoryScreen = () => {
  const { id } = useParams();

  const [categoria, setCategoria] = useState({});

  useEffect(() => {
    traerCategoria();
  }, []);

  const traerCategoria = async () => {
    const { category } = await getCategoryById(id);
    setCategoria(category);
  };

  return (
    <main className=" bg-our-black min-vh-100">
      <div className="container pt-3">
        <h1 className="text-our-white text-center ">{categoria.nombre}</h1>
      </div>
    </main>
  );
};

export default CategoryScreen;
