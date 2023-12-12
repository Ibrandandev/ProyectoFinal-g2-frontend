import Swal from "sweetalert2";
const url = "https://proyectofinal-g2-backend.onrender.com/api/services/";
const accessToken = JSON.parse(localStorage.getItem("access-token"));

export const getServices = async (desde = 0, limite = 0) => {
  try {
    const resp = await fetch(url + "?from=" + desde + "&limit=" + limite, {
      method: "GET",
      headers: {
        token: accessToken,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, no se pudo conectar al backend");
  }
};

export const getServicesByCategory = async (category = null) => {
  try {
    const resp = await fetch(`${url}?category=${category}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, no se pudo conectar al backend");
  }
};

export const getServiceById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    throw new Error("Lo sentimos, no se pudo conectar al backend");
  }
};

export const createService = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        token: accessToken,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, no se pudo conectar al backend");
  }
};

export const updateService = async (id, datos) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        token: accessToken,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, no se pudo conectar al backend");
  }
};

export const deleteService = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        token: accessToken,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, no se pudo conectar al backend");
  }
};
