import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="p-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <p>Proyectos en los que he trabajado.</p>

            <div id="project1" className="project">
                <h3>Project 1</h3>
                <p>Descripción del proyecto 1.</p>
            </div>
            <div id="project2" className="project">
                <h3>Project 2</h3>
                <p>Descripción del proyecto 2.</p>
            </div>
            <div id="project3" className="project">
                <h3>Project 3</h3>
                <p>Descripción del proyecto 3.</p>
            </div>
            <div id="other" className="project">
                <h3>Other Projects</h3>
                <p>Descripción de otros proyectos.</p>
            </div>
            
      </div>
    </section>
  )
}

export default Projects
