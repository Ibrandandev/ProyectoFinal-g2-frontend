// const url = "http://localhost:8080/api/users/";
const url = "https://proyectofinal-g2-backend.onrender.com/api/users/";
const accessToken = JSON.parse(localStorage.getItem("access-token"));

export const getUsers = async (limite = 0, pagina = 0) => {
  try {
    const resp = await fetch(url + "?from=" + pagina + "&limit=" + limite, {
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
    throw new Error("Lo sentimos, No se pudo obtener la informacion");
  }
};

export const getUserById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token: accessToken,
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, No se pudo obtener la informacion");
  }
};

export const createUser = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token: accessToken,
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

export const updateUser = async (id, datos) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token: accessToken,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};

export const deleteUser = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token: accessToken,
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};
