import './App.css';
import Carrousel from './Components/Carousel/Carousel';
import Encabezado from './Components/Encabezado/Encabezado';
import Footer from './Components/Footer/Footer';
import Servicios from './Components/Servicios/Servicios';

function App() {
  return (
    <div>
      <Encabezado/>
      <Carrousel/>
      <Servicios/>
      <Footer/>
    </div>
  );
}

export default App;
