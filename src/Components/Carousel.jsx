import React from "react";
import {Link} from "react-router-dom"

const Carrousel = () => {
    return (
        <Link to={"/"}>
            <div className="imagenFondo p-5">
                <div>   
                    <h4 className="tituloBanner pt-5 fs-5">Bienvenido a</h4>
                    <h1 className="tituloBanner">Psico Te Ayudo</h1>
                    <p className="textoBanner pb-2 animate__animated animate__backInDown"><span className="text-center text-white fw-bold">Consultorio psicológico - Espacio terapéutico</span></p>    
                    
                </div>
            </div>
        </Link>
    )
}

export default Carrousel