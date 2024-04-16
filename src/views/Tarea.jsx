import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import CrearTarea from '../Componentes/CrearTarea'
import { Link } from 'react-router-dom'
import Realizadas from '../Componentes/Realizadas'




function Tarea() {
  const[task, setTask] = useState([])
  const[busqueda, setBusqueda] = useState('')
  const [tareasEncontradas, setTareasEncontradas] = useState([])
  const [tareasOrdenadas, setTareasOrdenadas] = useState([])
  
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

  const handleSearch = (e) => {
    const valorBuscado = e.target.value.toLowerCase();
    setBusqueda(valorBuscado)
    let tareaEncontrada = []

    if(task){
      const tarea = task.filter((e) => e.name.toLowerCase().includes(valorBuscado))
      tareaEncontrada = [...tareaEncontrada, ...tarea]
    }
    setTareasEncontradas(tareaEncontrada)
  }

  const handlePriority = () =>{
    const tareaOrdenada = task.slice().sort((a,b) =>{
      return a.prioridad - b. prioridad
    })
    setTareasOrdenadas(tareaOrdenada)
  }
  
  const tareasMostradas = tareasEncontradas.length > 0 ? tareasEncontradas : tareasOrdenadas.length > 0 ? tareasOrdenadas : task;


    return (     
      <>
     
        <h1>OUR TO DO-LIST</h1>
        <h3>Tareas realizadas: <Realizadas /></h3>
      

      <div className='main-container'>
        <div className='container'>
          <div className='create-container'><CrearTarea tareaActualizada={tareaActualizada} />
          </div>

          <div className='task-container'>
              <div className='filter'>
                <input 
                  type="text"
                  value={busqueda}
                  onChange={handleSearch}
                  placeholder="Buscar"
                />
                <button onClick={handlePriority}>PRIORIDAD</button>
              </div>

            <ul>
              {tareasMostradas.map((elemento) => (
                <li key={elemento._id} className='item'>
                  <Link to={`/${elemento._id}`} className='texto-item'>
                    <h4>{elemento.name}</h4>
                  </Link>
                  <p>Propiedad: {elemento.propiedad}</p>
                  <div className='button-wrapper'>
                    <button onClick={() => handleDone(elemento._id)}>COMPLETADA</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
)};

      
  


export default Tarea
