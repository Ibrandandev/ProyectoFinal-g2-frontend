// const url = "http://localhost:8080/api/trainers/";
const url = "https://proyectofinal-g2-backend.onrender.com/api/trainers/";

export const getTrainers = async (from = 0, limit = 0) => {
  try {
    const resp = await fetch(`${url}?from=${from}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la informacion!");
  }
};
