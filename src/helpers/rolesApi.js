// const url = "http://localhost:8080/api/roles/";
const url = "https://proyectofinal-g2-backend.onrender.com/api/roles/";

export const getRoles = async (limit = 5) => {
  try {
    const resp = await fetch(`${url}?limit=${limit}`, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la informacion!");
  }
};
