// const url = "http://localhost:8080/api/trainers/";
const url = "https://proyectofinal-g2-backend.onrender.com/api/trainers/";
const token = JSON.stringify(localStorage.getItem("token"));

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

export const getTrainerById = async (id) => {
  try {
    const resp = await fetch(`${url}/${id}`, {
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

export const createTrainer = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        //token
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conecto al backend!" };
  }
};

export const deleteTrainer = async (id) => {
  try {
    const resp = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        //token
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conecto al backend!" };
  }
};
