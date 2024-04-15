import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import CrearTarea from '../Componentes/CrearTarea'
import { Link } from 'react-router-dom'
import Realizadas from '../Componentes/Realizadas'




function Tarea() {
  const[task, setTask] = useState([])
  
  useEffect(() => {
    const data = async () =>{
    
      try {
        const response = await axios.get('http://localhost:3002/app/tarea')
        console.log(response.data.data)
        setTask(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    data()
  },[])

  const tareaActualizada = (tareaCreada) =>{
    setTask([...task, tareaCreada ])
  }
 
  const handleDone = async (id) =>{
    try {
      const response = await axios.post(`http://localhost:3002/app/tareaDone/${id}`);
      const deleteTask = await axios.delete(`http://localhost:3002/app/tarea/${id}`)
      const updatedTask = task.filter((e) => e._id !== id);
      setTask(updatedTask);
    } catch (error) {
      console.error(error)
    }
  }

    return (     
     <div className='main-container'>
      <h3>Tareas realizadas:<Realizadas/></h3>
        <div className='task-container'> 
          {task.length > 0 ? ( 
          <ul> 
            {task.map((elemento) => 
                ( <li key={elemento._id} className='item'> 
                <Link to={`/${elemento._id}`} className='texto-item'>
                <h4>{elemento.name}</h4>
                <p >Propiedad:{elemento.propiedad} </p>
                </Link>
                <button onClick={() => handleDone(elemento._id)}>COMPLETADA</button>
                </li> ))} 
                </ul> ) 
            : ( <p>No hay tareas disponibles</p> )} 
        </div>
        <div>
          <CrearTarea tareaActualizada={tareaActualizada}/>
        </div>
      </div>
  )
}

export default Tarea
