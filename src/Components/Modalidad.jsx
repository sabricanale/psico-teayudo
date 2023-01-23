import React from "react";

const Modalidad = () => {
    return(
    <div className="container-fluid">
        <div>
            <h1 className="animate__animated animate__fadeInDown text-center fs-1 fw-bold" id="Modalidad">Modalidades y precios de consulta</h1>      
            <p className="text-center fs-5 pt-4">Atendemos de manera VIRTUAL, mediante videollamadas, de manera PRESENCIAL, en nuestros consultorios, o a DOMICILIO. Los precios indicados a continuación corresponden a terapias individuales:</p>
        </div>
    
        <div className="row justify-content-around m-3">

            <div className="col-md-4">
                <div className="card" id="tarjeta">
                    <div className="text-center">
                    <img className= "img-fluid" src="Images/TerapiaVirtual.jpg" alt="Modalidad virtual" width={300}/>
                    </div>
                    
                    <div className="card-body text-center">
                        <h3 className="fw-bold">Virtual</h3>
                        <p className="card-text">Realizá tu consulta desde donde estés</p>
                        <p className="card-text">Precio por cada sesión: <span className="fw-bold">$2800</span></p>
                        <a href="https://walink.co/3efb88" className="animate__animated animate__swing btn btn-secondary">Reservar turno</a>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card" id="tarjeta">
                    <div className="text-center m-5">
                    <img className= "img-fluid" src="Images/TerapiaPresencial.jpg" alt="Modalidad presencial" width={300}/>
                    </div>
                    
                    <div className="card-body text-center">
                        <h3 className="fw-bold">Presencial</h3>
                        <p >Acercate a nuestros consultorios</p>
                        <p className="card-text">Precio por cada sesión: <span className="fw-bold">$3000</span></p>
                        <a href="https://walink.co/b47e4f" className="animate__animated animate__swing btn btn-secondary">Reservar turno</a>    
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" id="tarjeta">
                    <div className="text-center"> <img className= "img-fluid" src="Images/TerapiaDomicilio.jpg" alt="Modalidad presencial" width={300}/></div>
                    
                    <div className="card-body text-center">
                        <h3 className="fw-bold">Domiciliaria</h3>
                        <p>Nos dirigimos a tu domicilio</p>
                        <p className="card-text">Precio por cada sesión: <span className="fw-bold">$4500</span></p>
                        <a href="https://wa.link/dy6b67" className="animate__animated animate__swing btn btn-secondary">Reservar turno</a>    
                    </div>
                </div>
            </div>
        </div>
        <div className="p-3">
            <p className="text-center m-4">Para terapias de pareja y familiar las modalidades solo son presencial y domiciliaria. El costo en ambos casos es de <span className="fw-bold">$5000</span> la sesión para la pareja o el grupo familiar <a href="https://wa.link/g2f5r2" className="animate__animated animate__swing btn btn-secondary">Reservar turno</a>    
            </p>

        </div>
        
    </div>

    )
}

export default Modalidad;