import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom w-100">
                <div className="col-lg-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                    <span>RollingGym</span>
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <NavLink className="nav-link px-2 link-secondary"> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link px-2">Programas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link px-2">Turnos</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link px-2">Nuestro Equipo</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link px-2">About</NavLink>
                    </li>
                </ul>

                <div className="col-lg-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">
                    Login
                    </button>
                    <button type="button" className="btn btn-primary">
                    Sign-up
                    </button>
                </div>
            </header>
        </div>
    </nav>
    );
};

export default NavBar;