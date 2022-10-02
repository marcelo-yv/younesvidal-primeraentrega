import React from 'react';

const SeccionesNavbar = () => {
    return (
        <>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Contacto
                        <span className="visually-hidden">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Vinos</a>
                        <a className="dropdown-item" href="#">Cervezas</a>
                        <a className="dropdown-item" href="#">Destilados</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Regaleria y Accesorios</a>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default SeccionesNavbar;
