import './projectcard.css'

export default function ProjectCard({image, name, desc}) {
  return (
    <div className="project-card">
    <img src={image} alt={name} className="project-card-image"/>

    <div>
        <h2 className="project-card-name">{name}</h2>
        <p className="project-card-desc">{desc}</p>
    </div>

    </div>
  )
}