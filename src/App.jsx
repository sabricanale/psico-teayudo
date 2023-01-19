import './App.css';
import Carrousel from './Components/Carousel';
import Encabezado from './Components/Encabezado';
import Footer from './Components/Footer';
import Modalidad from './Components/Modalidad';
import Servicios from './Components/Servicios';
import Somos from './Components/Somos';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    
      <div>
        <BrowserRouter>
          <Encabezado/>
          <Carrousel/>
          <Somos/>
          <Servicios/> 
          <Modalidad/>             
          <Footer/>
        </BrowserRouter>
        </div>

    
  );
}

export default App;
