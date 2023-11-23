import React from 'react'

const Portfolio = () => {
    const project = [
        {title: 'Project 1', description: 'This is the first project'},
        {title: 'Project 2', description: 'This is the second project'},
        {title: 'Project 3', description: 'This is the third project'},
        {title: 'Project 4', description: 'This is the fourth project'},
    ]
    return(
        <div>
            <h2>Portfolio</h2>
            <div className='flex'>
                {projects.map((project, index)=>(
                    <ProjectCard title={project.title} description={project.description} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;