import React from 'react';
import './App.css';
import Carrousel from './Components/Carousel';
import Encabezado from './Components/Encabezado';
import Footer from './Components/Footer';
import Modalidad from './Components/Modalidad';
import Servicios from './Components/Servicios';
import Somos from './Components/Somos';

function App() {
  return (
    
      <div>

          <Encabezado/>
          <Carrousel/>
          <Somos/>
          <Servicios/> 
          <Modalidad/>             
          <Footer/>

        </div>

    
  );
}

export default App;
