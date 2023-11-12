// const url = "https://proyectofinal-g2-backend.onrender.com/api/comments/";
const url = "http://localhost:8080/api/comments/";

export const getComments = async (from = 0, limit = 5) => {
  try {
    const resp = await fetch(`${url}?from=${from}&limit=${limit}`, {
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

export const postComment = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: { "content-type": "application/json; charset=utf-8" },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al enviar el comentario");
  }
};
