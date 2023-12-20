import Swal from "sweetalert2";
const url = `${import.meta.env.VITE_API_URL}/api/users/`;

export const getUsers = async (limite = 0, pagina = 0) => {
  const token = await localStorage.getItem("token");
  try {
    const resp = await fetch(url + "?from=" + pagina + "&limit=" + limite, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();

    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    throw new Error(error);
  }
};

export const getUserById = async (id) => {
  const token = await localStorage.getItem("token");

  try {
    const resp = await fetch(url + id, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    throw new Error(error);
  }
};

export const createUser = async (datos) => {
  const token = await localStorage.getItem("token");

  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    throw new Error(error);
  }
};

export const updateUser = async (id, datos) => {
  const token = await localStorage.getItem("token");

  try {
    const resp = await fetch(url + id, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    throw new Error(error);
  }
};

export const deleteUser = async (id) => {
  const token = await localStorage.getItem("token");

  try {
    const resp = await fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Algo salio mal!",
    });
    throw new Error(error);
  }
};
