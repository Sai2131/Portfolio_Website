import ProjectCard from './projectcard'
import './projects.css'

export default function ProjectPanel() {
  return (
    <div>
        <h1> Projects </h1>
        <ProjectCard image={"noimg"} name={"Compiler"} desc={"This is a desc"} />
    </div>
  )
}