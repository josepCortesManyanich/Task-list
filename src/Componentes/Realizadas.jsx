import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Realizadas() {
  const[realizadas, setRealizadas] = useState([])
  
  
    useEffect(() =>{
    const data = async () =>{
        try {
            const response =await axios.get(`http://localhost:3002/app/tareaDone`)
            setRealizadas(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }
    data()
  })

  
  return (
    <div> 
      <h3>{Math.max(...realizadas.map(e => e.quantity))}</h3>
    </div>
  )
}

export default Realizadas
