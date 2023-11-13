// const url = "http://localhost:8080/api/services/";
const url = "https://proyectofinal-g2-backend.onrender.com/api/services/";
const token = JSON.parse(localStorage.getItem("token"));

export const getServices = async (desde = 0, limite = 0) => {
  try {
    const resp = await fetch(url + "?from" + desde + "&limit" + limite, {
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
        "Content-type": "application/json; charset=UTF-8",
        token,
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
        "Content-type": "application/json; charset=UTF-8",
        token,
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
        "Content-type": "application/json; charset=UTF-8",
        token,
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, no se pudo conectar al backend");
  }
};
