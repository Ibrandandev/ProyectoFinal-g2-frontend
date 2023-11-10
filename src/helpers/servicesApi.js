const url = "https://proyectofinal-g2-backend.onrender.com/api/services/";
export const getServiceById = async (id) => {
    try {
        const resp = await fetch(`${url}${id}`, {method: "GET", headers: {"content-type":"application/json;charset=UTF-8"}});
        const data = await resp.json();
        return data
    }
    catch (error) {
        console.log(error);
    };
};

