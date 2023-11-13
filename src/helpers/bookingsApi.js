const url = "http://localhost:8080/api/bookings/";
// const url = "https://proyectofinal-g2-backend.onrender.com/api/bookings/";
const token = JSON.parse(localStorage.getItem("token"));

export const getBookings = async () => {
  try {
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token,
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la informacion!");
  }
};

export const getBookingsByUser = async (uid) => {
  try {
    const resp = await fetch(`${url}${uid}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token,
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la informacion!");
  }
};

export const createBooking = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token,
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conecto al backend!" };
  }
};

export const deleteBooking = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};
