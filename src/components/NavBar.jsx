import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css"

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 mb-2 border-bottom w-100">
                <div className="col-lg-2 mb-2 mb-md-0">
                    <Link className="navbar-brand logo text-white" to="/"><i class="fa fa-ravelry" aria-hidden="true"></i> RollingGym</Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li className="nav-item">
                        <NavLink className="nav-link px-3" to="/"> Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link px-3" to="/programas">Programas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link px-3" to="/turno">Turnos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link px-3" to="/nuestroEquipo">Nuestro Equipo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link px-3" to="/aboutUs">About</NavLink>
                    </li>
                    {/* {user.rol === "ADMIN_ROLE" && ( aqui hay q poner la funcion q permite entrar a admin */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/admin">
                        <i className="fa fa-cog" aria-hidden="true"></i> Admin</NavLink>
                    </li>
                    {/* )} */}
                </ul>

                <div className="col-lg-3 text-end">
                    <button type="button" className="btn  me-2 btn-login">
                    Login
                    </button>
                    <button type="button" className="btn  btn-style">
                    Sign-up
                    </button>
                </div>
            </header>
        </div>
    </nav>
    );
};

export default NavBar;