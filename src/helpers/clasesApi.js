const url = "https://proyectofinal-g2-backend.onrender.com/api/services";


export const getClases = async (desde=0, limite = 0) => {
    try{ 
        const resp = await fetch (url + "?from" + desde + "&limit" + limite, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                //"x-token": token,
              },
        });

    const data = await resp.json();
    return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")
    }

};

//traer usuario por id
export const getClaseById = async (id) => {
    try{ 
        const resp = await fetch (url + "/" + id, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                //"x-token": token,
              },
        });

    const data = await resp.json();
    return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")
    }
};


export const crearClase = async (datos) => {
    try{ 
        const resp = await fetch (url, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                //"x-token": token,
              },
        });

    const data = await resp.json();
    return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")
    }
};

export const actualizarClase = async (id, datos) => {
    try{ 
        const resp = await fetch (url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                //"x-token": token,
              },
        });

    const data = await resp.json();
    return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")
    }
};

export const borrarClase = async (id) => {
    try{ 
        const resp = await fetch (url + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                //"x-token": token,
              },
        });

    const data = await resp.json();
    return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")
    }
};
