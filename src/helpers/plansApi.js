const url = "https://proyectofinal-g2-backend.onrender.com/api/plans/";

export const getPlanById = async (id) => {
  try {
    const resp = await fetch(`${url}${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
