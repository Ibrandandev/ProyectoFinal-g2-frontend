import Swal from "sweetalert2";
const url = "https://proyectofinal-g2-backend.onrender.com/api/plans/";

export const getPlans = async () => {
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    throw new Error(error);
  }
};

export const getPlanById = async (id) => {
  try {
    const resp = await fetch(`${url}${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    throw new Error(error);
  }
};
