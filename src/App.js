import React, {useState} from 'react';
import { Routes, Route } from 'react-router';
import Fincas from './components/paginas/Fincas';
import Productores from './components/paginas/Productores';
import Vitacoras from './components/paginas/Vitacoras';
import Sidebar from './components/ui/Sidebar';
import MostrarFincas from './components/paginas/MostrarFincas';
import EditarFincas from './components/paginas/EditarFincas';
import MostrarProductores from './components/paginas/MostrarProductores';
import EditarProductores from './components/paginas/EditarProductores';
import MostrarVitacoras from './components/paginas/MostrarVitacoras';
import EditarVitacoras from './components/paginas/EditarVitacoras';


function App() {
  const [finca, guardarFinca] = useState({});
  const [productor, guardarProductor] = useState({});
  const [vitacora, guardarVitacora] = useState({});
  return (
    <div className="md:flex min-h-screen">
    <Sidebar />
      <div className="md:w-3/5 xl:w-4/5">
        
        <Routes>
          <Route path="/fincas" element={<Fincas />} />
          <Route path="/mostrarfincas" element={<MostrarFincas guardarFinca={guardarFinca} />} />
          <Route path="/EditarFincas" element={<EditarFincas finca={finca} />} />

          <Route path="/productores" element={<Productores />} />
          <Route path="/mostrarproductores" element={<MostrarProductores guardarProductor={guardarProductor} />} />
          <Route path="/EditarProductores" element={<EditarProductores productor={productor} />} />

          <Route path="/vitacoras" element={<Vitacoras />} />
          <Route path="/mostrarvitacoras" element={<MostrarVitacoras guardarVitacora={guardarVitacora} />} />
          <Route path="/EditarVitacoras" element={<EditarVitacoras vitacora={vitacora} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

