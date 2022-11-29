import React from "react";

const Somos = () => {
    return(
        <div>
            <div className="w-100 mx-auto text-center pt-3" id="intro">
    <h1 className="animate__animated animate__fadeInDown text-center p-3 fs-1 mt-2 fw-bold" id="Nosotras">¿Quiénes somos?</h1>
        <p className="text-center fs-5 p-3"><span className="text-dark fw-bold">PsicoTeAyudo</span> pretende tener una participación activa en aquellas personas que están atravesando una situación de vulnerabilidad, paralizadas ante una problemática determinada y buscan ayuda terapéutica. Nuestro equipo cuenta con las herramientas terapéuticas para adecuarlas a cada paciente, atendiendo la circunstancia que esté atravesando.</p>
</div>
  <div className="row justify-content-around p-4 mx-auto">
    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6" id="tarjeta">
      <div className="card">
          <div className="head">
            <div className="circle">
              <div className="img">
                <img className="img-fluid" src="Images/Marilyn.png" alt="Lic. Marilyn Gómez"/>
              </div>
            </div>
          </div>
        <div className="description">
          <h3>Lic. Marilyn Gómez</h3>
          <p className="fw-bold">PSICÓLOGA</p>
          <p>M.P. 12788</p>
          <p>Atención online y presencial</p>          
          <a href="/" className="animate__animated animate__swing btn btn-dark ">Más info</a>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6" id="tarjeta" >
      <div className="card">
          <div className="head">
            <div className="circle">
              <div className="img">
                <img className="img-fluid" src="Images/Julieta.png" alt="Lic. Julieta Reynoso"/>
              </div>
            </div>
          </div>
        <div className="description">
          <h3>Lic. Julieta Reynoso</h3>
          <p className="fw-bold">PSICÓLOGA</p>
          <p>M.P. 12770</p>
          <p>Atención online y presencial</p>  
          <a href="/" className="animate__animated animate__swing btn btn-dark ">Más info</a>
        </div>
      </div>
    </div>
  </div>

            
        </div>
                )
            }

export default Somos; 
