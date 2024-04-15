
import './App.css';
import EditarTarea from './Componentes/EditarTarea';
import Tarea from './Componentes/Tarea';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      
     
      <Routes>     
         <Route path="/" element={<Tarea/>} />
         <Route path="/:id" element={<EditarTarea/>} />
      </Routes>
    
      
    </div>
    </Router>
  );
}

export default App;
