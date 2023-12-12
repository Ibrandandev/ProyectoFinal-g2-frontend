import Swal from "sweetalert2";
const url = "https://proyectofinal-g2-backend.onrender.com/api/comments/";
const accessToken = JSON.parse(localStorage.getItem("access-token"));

export const getComments = async (limit = 5) => {
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

export const createComment = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        token: accessToken,
        "content-type": "application/json; charset=utf-8",
      },
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
