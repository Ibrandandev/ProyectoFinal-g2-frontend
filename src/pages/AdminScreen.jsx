import "../css/admin.css";
import { useEffect, useState } from "react";
import ServiceTable from "../components/services/Table";
import UserTable from "../components/users/Table";
import { getUsers } from "../helpers/usersApi";
import { getServices } from "../helpers/servicesApi";
import { Button } from "react-bootstrap";

const AdminScreen = () => {
  const [usuarios, setUsuarios] = useState([]);
  // const [totalUsuarios, setTotalUsuarios] = useState(0);
  const [services, setServices] = useState([]);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [mostrarServicios, setMostrarServicios] = useState(false);

  useEffect(() => {
    traerUsuarios();
    traerServicios();
  }, []);

  const traerUsuarios = async () => {
    const { users } = await getUsers();
    setUsuarios(users);
    // setTotalUsuarios(total);
  };

  const traerServicios = async () => {
    const { services } = await getServices();
    setServices(services);
  };

  return (
    <>
      <div className="fondo">
        <div className="container min-vh-100 bg-light fondo">
          <div className="row  py-5 head">
            <div className="col text-center ">
              <h1 className="titulo-admin">
                <span>
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                </span>
                Panel administrador
              </h1>
            </div>
          </div>

          <div className="container d-flex align-items-center justify-content-center flex-column">
            <div className="row m-5">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <Button
                  className="botonU"
                  onClick={() => {
                    setMostrarUsuarios(!mostrarUsuarios);
                    if (mostrarServicios) setMostrarServicios(false);
                  }}
                >
                  Usuarios
                </Button>
              </div>

              <div className="col-6 d-flex justify-content-center align-items-center">
                <Button
                  className="botonC"
                  onClick={() => {
                    setMostrarServicios(!mostrarServicios);
                    if (mostrarUsuarios) setMostrarUsuarios(false);
                  }}
                >
                  Servicios
                </Button>
              </div>
            </div>

            <div>
              {mostrarUsuarios && (
                <UserTable usuarios={usuarios} traerUsuarios={traerUsuarios} />
              )}

              {mostrarServicios && (
                <ServiceTable
                  services={services}
                  traerServicios={traerServicios}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminScreen;
