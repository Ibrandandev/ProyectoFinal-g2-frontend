const url = "https://proyectofinal-g2-backend.onrender.com/api/users";
//const token = JSON.parse(localStorage.getItem("token"));


export const getUsuarios = async (limite = 0, pagina = 0) => {
  try {
    const resp = await fetch(url + "?limite=" + limite + "&desde=" + pagina);
    const data = await resp.json(); // ver porque el de categorias esta configurado diferente. No tiene esta linea, pero tiene el metodo GET

    return data;

  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, No se pudo obtener la informacion");
  }
};

export const getUsuariosById = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, { //ver si es asi la URl que puso nacho a los usuarios de ID
      method: "GET",
      /*headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },*/
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Lo sentimos, No se pudo obtener la informacion");
  }
};


export const crearUsuario = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      /*headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },*/
    });

    const data = await resp.json();
    return data;

  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};


export const actualizarUsuario = async (id, datos) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(datos),
      /*headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },*/
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};


export const borrarUsuario = async (id) => {
  try {
    const resp = await fetch(url + "/" + id, {
      method: "DELETE",
      /*headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": token,
      },*/
    });

    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return { msg: "No se conectó con backend" };
  }
};
