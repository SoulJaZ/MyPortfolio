import React from 'react'

const arregloProyectosAlmacenados = [
    // variable que contiene el arreglo que almacena proyectos.
    {id: 1, title: 'Proyecto 1', description: 'Descripción de proyecto  1. '},
    {id: 2, title: 'Proyecto 2', description: 'Descripción de proyecto  2. '},
    {id: 3, title: 'Proyecto 3', description: 'Descripción de proyecto  3. '}
];

function DetallesProyectos ({identificadorProyecto}){
    // Encuentra el proyecto basado en el id.
    const proyecto = arregloProyectosAlmacenados.find(eleArregloProyectos => eleArregloProyectos.id === parseInt(identificadorProyecto, 10))

    if (!proyecto) {
        return(
            <p>Proyecto no encontrado</p>
        )
    }
    return(
        <section>
            <div>
                <h2>{proyecto.title}</h2>
                <p>{proyecto.description}</p>
            </div>
        </section>
    );
}

export default DetallesProyectos
