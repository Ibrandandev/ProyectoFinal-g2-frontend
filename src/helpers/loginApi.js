// const url = "http://localhost:8080/api/auth/login/";
const url = "https://proyectofinal-g2-backend.onrender.com/api/auth/login";

export const login = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};