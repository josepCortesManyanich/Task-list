import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function CrearTarea({tareaActualizada}) {
 const [task, setTask] = useState({
        name: '',
        prioridad:'',
        fecha:'',
        description:'',
        propiedad:'Raquel',
})
const[mostrar, setMostrar] = useState(false)

const handleChange = (e) => {
       
        setTask(prev => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
      }
    

 const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const newTask = await axios.post('http://localhost:3002/app/tarea', task)
                console.log(newTask.data.data)
                const nuevaTarea = newTask.data.data;
                tareaActualizada(nuevaTarea)

        } catch (error) {
          console.error(error);
        }
      }
     

const handleContenido = async () => {
        setMostrar(!mostrar)
}

    
    return (
        <>
         <button onClick={handleContenido}>
                {mostrar ? 'Ocultar' : 'Crear'}
        </button>
    <div>
       
        {mostrar && ( <form onSubmit={handleSubmit}>
       <label>Nombre</label>
                <input type="text" placeholder="Nombre" name="name" value={task.name} onChange={handleChange} />
        <label>Prioridad</label>
                <input type="number" placeholder="Del 1-10" name="prioridad" value={task.prioridad} onChange={handleChange} />
        <label>Quien la tiene que hacer</label>
        <select value={task.propiedad} name="propiedad" onChange={handleChange}>
                    <option value="Raquel">Raquel </option>
                    <option value="Josep">Josep </option>
        </select>
        <label>Fecha</label>
                <input type="text" placeholder="Fecha" name="fecha" value={task.fecha} onChange={handleChange}/>        
        <label>Description</label>
                <input type="text" placeholder="Description" name="description" value={task.description} onChange={handleChange}/>
                
                <button type="submit">CREAR</button>
         </form>)}
      
                
    </div>
    </>
  )
}

export default CrearTarea