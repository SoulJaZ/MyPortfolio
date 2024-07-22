import React from 'react'
import { useParams } from 'react-router-dom'
import DetallesProyectos from './DetallesProyectos';

function OtrosProyectos() {
  const { identificadorProyecto } = useParams();
  // Obtiene el parámetro de la URL
  if (!identificadorProyecto) {
    // Mostrar una lista de todos los proyectos cuando no se proporciona identificadorProyecto
    return (
      <div>
        <h2>Otros Proyectos</h2>
        <a style={{"text-decoration": "none", }} href="/"> Portafolio</a>
      </div>
    );
  }
  return (
    <DetallesProyectos identificadorProyecto={identificadorProyecto}/>
  )
}

export default OtrosProyectos
