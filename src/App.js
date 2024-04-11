import logo from './logo.svg';
import './App.css';
import Tarea from './Componentes/Tarea';

function App() {
  return (
    <div className="App">
      <div>
        <h4> Lista de Tareas</h4>
        <Tarea/>
      </div>
      <button>
        <Link to='/crear'>
          Crear tarea
        </Link>
      </button>
    </div>
  );
}

export default App;
