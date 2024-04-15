import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import CrearTarea from './CrearTarea'
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

    return (     
     <div>
        <div> 
          {task.length > 0 ? ( 
          <ul> 
            {task.map((elemento) => 
                ( <li key={elemento._id} className='item'> 
                <Link to={`/${elemento._id}`}>
                  <p>{elemento.name}</p> 
                </Link>
                </li> ))} 
                </ul> ) 
            : ( <p>No hay tareas disponibles</p> )} 
        </div>
        <div>
          <CrearTarea/>
        </div>
      </div>
  )
}

export default Tarea
