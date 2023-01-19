import React from "react";
import { Link } from "react-router-dom"

const Somos = () => {
    return(
      <div>
        <div className="container">
         <Link to={"/"}>
              <h1 className="animate__animated animate__fadeInDown text-center p-3 fs-1 mt-2 fw-bold" id="Nosotras">¿Quiénes somos?</h1>
         </Link> 
          <div className="row">
            <div className="col-md-12">
              <p className="fs-5 m-3 text-center"><span className="text-dark fw-bold">PsicoTeAyudo</span> pretende tener una participación activa en aquellas personas que están atravesando una situación de vulnerabilidad, paralizadas ante una problemática determinada y buscan ayuda terapéutica. Nuestro equipo cuenta con las herramientas terapéuticas para adecuarlas a cada paciente, atendiendo la circunstancia que esté atravesando.</p>
            </div>

            <div className="col-md-6">
                <div className="container-fluid">
                  <div className="card p-2" id="tarjetaSomos">
                    <div className="row">
                        <div className="col-md-4 m-3">
                            <img src="./Images/Marilyn.png" className="img-fluid m-3" alt="Psicóloga Marilyn Gómez" width={200}/>
                        </div>
                        <div className="col-md-4 card-body text-center">
                            <h3 className="card-title">Lic. Marilyn Gómez</h3>
                            <h5 className="card-text fw-bold ">PSICÓLOGA - M.P. 12788</h5>
                            <p>Atención online, presencial y domiciliaria</p>          
                            <a href={"https://wa.me/+543517531661"}  className="animate__animated animate__swing btn">Consultar</a>
                          </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="container-fluid">
                  <div className="card p-2" id="tarjetaSomos">
                    <div className="row">
                        <div className="col-md-4 m-3">
                            <img src="./Images/Julieta.png" className="img-fluid m-3" alt="Psicóloga Julieta Reynoso" width={200}/>
                        </div>
                        <div className="col-md-4 card-body text-center">
                            <h3 className="card-title">Lic. Julieta Reynoso</h3>
                            <h5 className="card-text fw-bold ">PSICÓLOGA - M.P.  12770</h5>
                            <p>Atención online y presencial</p>          
                            <a href={"https://wa.me/+543516312663"}  className="animate__animated animate__swing btn">Consultar</a>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
            
           
          </div>
        </div>
        
              
{/*

              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                      <p className="fs-5 p-3"><span className="text-dark fw-bold">PsicoTeAyudo</span> pretende tener una participación activa en aquellas personas que están atravesando una situación de vulnerabilidad, paralizadas ante una problemática determinada y buscan ayuda terapéutica. Nuestro equipo cuenta con las herramientas terapéuticas para adecuarlas a cada paciente, atendiendo la circunstancia que esté atravesando.</p>
                  </div>
                  <div className="card placeholder-glow">
                    <div className="text-center">
                      <img src="./Images/Marilyn.png" className="img-fluid rounded-start" alt="Psicóloga Marilyn Gómez" width={200}/>
                    </div>
                      <div className="card-body col-md-">
                        <h3 className="card-title">Lic. Marilyn Gómez</h3>
                        <h5 className="card-text fw-bold">PSICÓLOGA </h5>
                        <p>M.P. 12788</p>
                        <p>Atención online, presencial y domiciliaria</p>          
                        <a href="/" className="animate__animated animate__swing btn">Más info</a>
                      </div>
                  </div>
                </div>
              </div>

            </div>

            




*/}































  
  {/*
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
                  <a href="/" className="animate__animated animate__swing btn btn-dark">Más info</a>
                </div>
              </div>
            </div>
          </div>
  
  */}
 </div>
                )
            }

export default Somos; 
