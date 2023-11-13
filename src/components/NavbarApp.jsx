import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const NavbarApp = ({ user = "", login, cerrarSesion }) => {
  const activeLink = {
    textDecoration: "underline",
  };

  return (
    <nav className="bg-blue navbar-expand-lg">
      <div className="container pb-3">
        <header className=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-4 border-bottom w-100 mx-lg-1">
          <div className=" col-auto mb-2 mb-md-0">
            <NavLink className="navbar-brand logo text-white fs-4" to="/">
              {/* <i className="fa fa-ravelry" aria-hidden="true"></i>  */}
              <img src="/icon.png" className="icon me-2" alt="" />
              RollingGym
            </NavLink>
          </div>

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/services"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/contact"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Contacto
              </NavLink>
            </li>
            {user.rol === "ADMIN_ROLE" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/admin"
                  style={({ isActive }) => (isActive ? activeLink : undefined)}
                >
                  Admin
                </NavLink>
              </li>
            )}
          </ul>

          <div className="col-auto text-end">
            <div>
              {!login ? (
                <>
                  <NavLink to="/login">
                    <button type="button" className="btn me-2 btn-login">
                      Iniciar Sesion
                    </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button type="button" className="btn me-2 btn-style">
                      Registrarse
                    </button>
                  </NavLink>
                </>
              ) : (
                <button
                  type="button"
                  className="btn  btn-style"
                  onClick={cerrarSesion}
                >
                  Cerrar Sesion
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
};

export default NavbarApp;
