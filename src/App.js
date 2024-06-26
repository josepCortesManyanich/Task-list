
import './App.css';
import CrearTarea from './Componentes/CrearTarea';
import EditarTarea from './Componentes/EditarTarea';
import Tarea from './views/Tarea';
import {  Route, Routes } from 'react-router-dom';



function App() {
  return (
   
    <div className="App">
      
     
      <Routes>     
         <Route path="/" element={<Tarea/>} />
          <Route path="/" element={<CrearTarea/>}/>
         <Route path="/:id" element={<EditarTarea/>} />
      </Routes>
    
      
    </div>
    
  );
}

export default App;
