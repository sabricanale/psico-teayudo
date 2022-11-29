import React from "react";

const Modalidad = () => {
    return(
        <div>
            <h1 className="animate__animated animate__fadeInDown text-center p-3 fs-1 mt-2 fw-bold" id="Modalidad">Modalidades de consulta</h1>
    
            
    <p className="text-center fs-5 pt-4">Atendemos de manera virtual, mediante videollamadas, o de manera presencial en nuestras oficinas. Agendá tu turno</p>
    
    <div className=" d-flex justify-content-around m-5">
        <div className="card m-2" id="tarjeta">
            <img className= "img-fluid" src="Images/TerapiaVirtual.jpg" alt="Modalidad virtual" width={400}/>
            <div className="card-body text-center">
                <h2 className="">Virtual</h2>
                <p className="card-text">Realizá tu consulta desde donde estés</p>
                <a href="https://walink.co/3efb88" className="animate__animated animate__swing btn btn-secondary">Reservar turno</a>

            </div>
        </div>
        <div className="card m-3 p-3" id="tarjeta">
            <img className= "img-fluid" src="Images/TerapiaPresencial.jpg" alt="Modalidad presencial" width={500}/>
            <div className="card-body text-center">
                <h2 className="pt-3">Presencial</h2>
                <p className="card-text">Acercate a nuestras oficinas</p>
                <a href="https://walink.co/b47e4f" className="animate__animated animate__swing btn btn-secondary">Reservar turno</a>
                
            </div>
        </div>
    </div>
    </div>
    )
}

export default Modalidad;