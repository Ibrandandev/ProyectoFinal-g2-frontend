import Swal from "sweetalert2";
const url = "https://proyectofinal-g2-backend.1.us-1.fl0.io/api/roles/";

export const getRoles = async (limit = 5) => {
  try {
    const resp = await fetch(`${url}?limit=${limit}`, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
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
