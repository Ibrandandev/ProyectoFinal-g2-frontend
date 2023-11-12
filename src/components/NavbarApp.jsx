import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const NavbarApp = ({ auth, logIn, logOut }) => {
  const activeLink = {
    textDecoration: "underline",
  };

  return (
    <nav className="bg-blue navbar-expand-lg">
      <div className="container-fluid pb-3">
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
                to="/servicios"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/planes"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Planes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/nuestroEquipo"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Nuestro Equipo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3"
                to="/contacto"
                style={({ isActive }) => (isActive ? activeLink : undefined)}
              >
                Contacto
              </NavLink>
            </li>
            {auth && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/admin"
                  style={({ isActive }) => (isActive ? activeLink : undefined)}
                >
                  <i className="fa fa-cog" aria-hidden="true"></i> Admin
                </NavLink>
              </li>
            )}
          </ul>

          <div className="col-auto text-end">
            <div>
              {!auth && (
                <>
                  <button
                    type="button"
                    className="btn me-2 btn-login"
                    onClick={logIn}
                  >
                    Login
                  </button>
                  <button type="button" className="btn me-2 btn-style">
                    SignIn
                  </button>
                </>
              )}
              {auth && (
                <button
                  type="button"
                  className="btn  btn-style"
                  onClick={logOut}
                >
                  LogOut
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
