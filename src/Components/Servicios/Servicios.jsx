import React from "react";
import "./Servicios.css"

const Servicios = () => {
    return(
        <div>
            <div className="container">
            <h1 className="text-center p-5">¿Cómo podemos ayudarte?</h1>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Todos atravesamos momentos difíciles, desde inseguridades personales hasta problemas en nuestras relaciones. Te invitamos a que empieces a transformar tu vida en terapia con un psicólogo online o cerca de tu zona</p>
                    </div>
                    
                    <div className="col-md-3 m-5">
                        <div className="text-center">
                            <img src="Images/RelacionesPersonales.jpg" alt="Relaciones personales" width={300}/>
                            <h6 className="p-2 ">Relaciones personales</h6>
                        </div>
                    </div>
                    
                    <div className="col-md-3 m-5">
                        <div className="text-center">
                            <img src="Images/Miedos.jpg" alt="Miedos" width={220}/>
                            <h6 className="p-3">Miedos</h6>
                        </div>
                    </div>

                    <div className="col-md-3 p-5">
                        <div className="text-center">
                            <img src="Images/Estres.jpg" alt="Estrés y cansancio" width={300}/>
                            <h6 className="p-2">Estrés y cansancio</h6>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
            
    )
}

export default Servicios