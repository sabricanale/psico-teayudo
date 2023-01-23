import React from "react";

const Encabezado = () => {
    return(
            <div className="row">
                <div className="col-md-12 ">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid ">
                            <a className="navbar-brand" href="#"><img src="Images/LogoPrincipal.png" alt="Logo" width={100}/></a>
                            <div className="d-flex justify-content-end">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            </div>
                            
                            <div className="d-flex justify-content-end">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Inicio</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#Nosotras">¿Quiénes somos?</a>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#Servicios" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Servicios
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#Servicios1">Relaciones personales</a></li>
                                    <li><a className="dropdown-item" href="#Servicios2">Miedos</a></li>
                                    <li><a className="dropdown-item" href="#Servicios3">Estrés y cansancio</a></li>
                                    <li><a className="dropdown-item" href="#Servicios4">Toma de decisiones</a></li>
                                    <li><a className="dropdown-item" href="#Servicios5">Ánimo</a></li>
                                    <li><a className="dropdown-item" href="#Servicios6">Autoestima e inseguridades</a></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#Modalidad">Precios</a>
                                </li>
                                
                                
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ofrecemos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Terapia individual</a></li>
                                    <li><a className="dropdown-item" href="#">Terapia para parejas</a></li>
                                    <li><a className="dropdown-item" href="#">Terapia para padres</a></li>
                                    <li><a className="dropdown-item" href="#">Cursos de psicología</a></li>
                                    <li><a className="dropdown-item" href="#">Talleres de psicología para grupos</a></li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#Modalidad">Modalidad</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link " href="#Footer">Contacto</a>
                                </li>
                            </ul>
                            </div>
                            </div>
                            
                            
                        </div>
                        </nav>        
                </div>
            </div>
            

    )
}

export default Encabezado;