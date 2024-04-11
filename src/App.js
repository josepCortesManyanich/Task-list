import logo from './logo.svg';
import './App.css';
import Tarea from './Componentes/Tarea';
import { Link } from 'react-router-dom';
import CrearTarea from './Componentes/CrearTarea';

function App() {
  return (
    <div className="App">
      <CrearTarea/>
      <div>
        <Tarea/>
      </div>
      <button>
        
      </button>
    </div>
  );
}

export default App;
