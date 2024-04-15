import React from 'react';
import { Link } from 'react-router-dom';

function DoneTask({ tareasCompletadas }) {
  return (
    <div>
      {tareasCompletadas.length > 0 ? (
        <ul>
          {tareasCompletadas.map((tarea) => (
            <li key={tarea._id} className='item'>
              <Link to={`/${tarea._id}`}>
                <p>{tarea.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas completadas</p>
      )}
    </div>
  );
}

export default DoneTask;

