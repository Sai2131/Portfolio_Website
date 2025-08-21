import {ProjectCard, ExperienceCard} from './cards'
import './panels.css'

export function ProjectPanel() {
  return (
    <div className= "panels">
        <h2> Projects </h2>
        <ProjectCard image={"noimg"} name={"Proj Name"} desc={"This is a desc"} />
        <ProjectCard image={"noimg"} name={"Proj Name"} desc={"This is a desc"} />
        <ProjectCard image={"noimg"} name={"Proj Name"} desc={"This is a desc"} />
    </div>
  )
}

export function ExperiencePanel() {
  return (
    <div className= "panels">
        <h2> Experience </h2>
        <ExperienceCard image={"noimg"} name={"Company"} desc={"This is a desc"} />
    </div>
  )
}

export function AboutmePanel() {
  return (
    <div className= "panels panels-small">
        <h2> About Me </h2>
        <div className="Aboutme-desc">
          <p1> </p1>
        </div>
    </div>
  )
}

export function LanguagesPanel() {
  return (
    <div className= "panels panels-small">
        <h2> Skills </h2>
        <div className="Skills-desc">
          <p1></p1>
        </div>
    </div>
  )
}

/*Im a 4th year Computer Science student at Univ of California, Santa Cruz. 
              My current interests are in Distributed Systems, Operating Systems, Compilers and Backend development.
              Some of my projects are attached below with a live demo. */
