import './cards.css'

export function ProjectCard({image, name, desc}) {
  return (
    <div className="card">
    <div className="card-text">
        <h1 className="card-name">{name}</h1>
        <p className="card-desc">{desc}</p>
    </div>

    <img src={image} alt={"Project Screenshot"} className="project-image card-image"/>
    
    </div>
  )
}

export function ExperienceCard({image, name, desc}) {
  return (
    <div className="card">
    <div className="card-text">
        <h1 className="card-name">{name}</h1>
        <p className="card-desc">{desc}</p>
    </div>

    <img src={image} alt={"Company Logo"} className="experience-image card-image"/>
    
    </div>
  )
}