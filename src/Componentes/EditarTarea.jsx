import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'




function EditarTarea() {
  const{id} = useParams()
  const[editTask, setEdit] = useState({
        name: '',
        prioridad:'',
        fecha:'',
        description:'',
        propiedad:'Raquel',
  })

 

  useEffect(() =>{
    const data = async () =>{
        try {
            const response = await axios.get(`http://localhost:3002/app/tarea/${id}`)
            console.log(response.data.data)
            setEdit(response.data.data)

        } catch (error) {
            console.error(error)
        }
    }
    data()
  }, [id])
  
  const handleChange = (e) => {
       
    setEdit(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  
const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await axios.put(`http://localhost:3002/app/tarea/${id}`, editTask)
      console.log(newTask.data)
      setEdit(newTask.data)

    } catch (error) {
      console.error(error);
    }
  }

  
  
    return (
      <>
        <header> 
          <h1>OUR TO DO-LIST</h1>
        </header>
        <div className='main-container'>
          <div className='container'>
            <div className='create-container'>
              <form onSubmit={handleEdit}>
                <label>Nombre</label>
                        <input type="text" placeholder="Nombre" name="name" value={editTask.name} onChange={handleChange} />
                <label>Prioridad</label>
                        <input type="number" placeholder="Del 1-10" name="prioridad" value={editTask.prioridad} onChange={handleChange} />
                <label>Quien la tiene que hacer</label>
                <select value={editTask.propiedad} name="propiedad" onChange={handleChange}>
                            <option value="Raquel">Raquel </option>
                            <option value="Josep">Josep </option>
                </select>
                <label>Fecha</label>
                        <input type="text" placeholder="Fecha" name="fecha" value={editTask.fecha} onChange={handleChange}/>        
                <label>Description</label>
                        <input type="text" placeholder="Description" name="description" value={editTask.description} onChange={handleChange}/>
                        
                        <button type="submit">EDITAR</button>
              </form>
            </div>
            <Link to='/'><button type='submit' className='home-button'> INICIO</button></Link>
        </div>
      </div>
    </>
  )
}

export default EditarTarea
