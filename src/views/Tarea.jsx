import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import CrearTarea from '../Componentes/CrearTarea'
import { Link } from 'react-router-dom'



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
      const doneTask = await axios.post(`http://localhost:3002/app/tareaDone/${id}`)
      const response = await axios.get('http://localhost:3002/app/tarea')
      setTask(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
  

  const handleDelete = async (id) =>{
    try {
      const deleteTask = await axios.delete(`http://localhost:3002/app/tarea/${id}`)
     const newTasks = task.filter((elem) => elem._id !==id)
      setTask(newTasks)
    } catch (error) {
      console.error(error)
    }
  }

    return (     
     <div>
        <div> 
          {task.length > 0 ? ( 
          <ul> 
            {task.map((elemento) => 
                ( <li key={elemento._id} className='item'> 
                <Link to={`/${elemento._id}`}>
                  <p>{elemento.name}</p> 
                  <button onClick={() => handleDone(elemento._id)}>COMPLETADA</button>
                </Link>
                <button onClick={()=>handleDelete(elemento._id)}>BORRAR</button>
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
