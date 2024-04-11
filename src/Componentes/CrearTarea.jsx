import React from 'react'
import { useState } from 'react'


function CrearTarea() {
  const [name, setName]= useState('')
  const [tarea, setTarea]= useState('')
  const [description, setDescription]= useState('')
  const [estado, setEstado]= useState('')


  
    return (
    <div>
       <label>Nombre</label>
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => {setName(e.target.value)}} />
        <label>Quien la tiene que hacer</label>
        <select value={tarea} name="tarea" onChange={(e) => {setTarea(e.target.value)}}>
                    <option value="Raquel">Raquel </option>
                    <option value="Josep">Josep </option>
        </select>
                
        <label>Description</label>
                <input type="text" placeholder="Description" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
        <label>Estado</label>
            <select value={estado} name="done" onChange={(e) => {setEstado(e.target.value)}}>
                    <option value="Realizada">👌 </option>
                    <option value="Por hacer">❌ </option>
            </select>
                
    </div>
  )
}

export default CrearTarea