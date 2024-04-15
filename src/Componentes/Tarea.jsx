import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Tarea() {
  const[task, setTask] = useState([])

  useEffect(() => {
    const data = async () =>{
    
      try {
        const response = await axios.get('http://localhost:3002/app/tarea')
        console.log(response.data)
        setTask(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    data()
  },[])

    return (     
      <div> 
        {task.length > 0 ? ( 
        <ul> 
          {task.map((elemento) => 
              ( <li key={elemento._id} className='item'> 
              <div> 
                <p>{elemento.name}</p> 
              </div> 
              </li> ))} 
              </ul> ) 
          : ( <p>No hay tareas disponibles</p> )} 
          </div>
  )
}

export default Tarea
