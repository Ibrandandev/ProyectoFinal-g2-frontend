const url = "https://proyectofinal-g2-backend.onrender.com/api/services";

//traer usuarios
export const getServices= async (desde = 0) => {
    try{
        const resp = await fetch(url + "?limite" + limite +"&desde" + desde, {
            method: "GET",
            /*headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
              },*/
        });
    
    const data = await resp.json();
    return data;

    }catch (error) {
        console.log(error);
        throw new Error("Lo sentimos, no se pudo obtener la informacion.")

    }

};

export const getServiceById = async (id) => {
    try{ 
        const resp = await fetch(url+"/"+ id, {
            method: "GET",
            /*headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
              },*/

        });
    
        const data = await resp.json();
        return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se encontro el servicio buscado")
    }

};

export const crearService= async (datos) => {
    try{ 
        const resp = await fetch (url, {
            method: "POST",
            /*headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
              },*/
        });
        const data = await resp.json();
        return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")

    }
};

export const actualizarService = async (id, datos) => {
    try{ 
        const resp = await fetch (url+"/"+ id , {
            method: "PUT",
            /*headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
              },*/
        });
        const data = await resp.json();
        return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")

    }
};

export const borrarService = async (id) => {
    try{ 
        const resp = await fetch (url + "/" + "id", {
            method: "DELETE",
            /*headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": token,
              },*/
        });

        const data = await resp.json();
    return data;

    }catch (error){
        console.log(error);
        throw new Error ("Lo sentimos, no se pudo conectar al backend")
    }
};
