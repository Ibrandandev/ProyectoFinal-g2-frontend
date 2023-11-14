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
  const [servicios, setServicios] = useState([]);
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [mostrarServicios, setMostrarServicios] = useState(false);

  useEffect(() => {
    if (mostrarUsuarios) {
      traerUsuarios();
    }
  }, [mostrarUsuarios]);

  useEffect(() => {
    if (mostrarServicios) {
      traerServicios();
    }
  }, [mostrarServicios]);

  const traerUsuarios = async () => {
    const { users } = await getUsers();
    setUsuarios(users);
    // setTotalUsuarios(total);
  };

  const traerServicios = async () => {
    const { services } = await getServices();
    setServicios(services);
  };

  return (
    <>
      <div className="fondo">
        <div className="container bg-light fondo">
          <div className="row py-5 bg-our-black">
            <div className="col text-center ">
              <h1 className="titulo-admin">Panel administrador</h1>
            </div>
          </div>

          <div className="container d-flex align-items-center justify-content-center flex-column">
            <div className="row m-5 gap-2">
              <div className="col-12">
                <Button
                  className="botonU bg-our-black w-100"
                  onClick={() => {
                    setMostrarUsuarios(!mostrarUsuarios);
                    if (mostrarServicios) setMostrarServicios(false);
                  }}
                >
                  Usuarios
                </Button>
              </div>

              <div className="col-12">
                <Button
                  className="botonC  w-100"
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
                  servicios={servicios}
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
