import './App.css';
import Carrousel from './Components/Carousel';
import Encabezado from './Components/Encabezado';
import Footer from './Components/Footer';
import Servicios from './Components/Servicios';
import Somos from './Components/Somos';

function App() {
  return (
    <div>
      <Encabezado/>
      <Carrousel/>
      <Servicios/>
      <Somos/>
      <Footer/>
    </div>
  );
}

export default App;
