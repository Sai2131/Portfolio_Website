import './App.css'
import {ProjectPanel, AboutmePanel, LanguagesPanel, ExperiencePanel} from './components/panels'


const LinkedInURL = import.meta.env.VITE_LINKEDINURL
const email = import.meta.env.VITE_EMAIL
const phone = import.meta.env.VITE_PHONE

function App() {

  return (
    <>
      <div className="namecard">
        <h1>Sai Tarra</h1>
        <div className="links">
        <a href={LinkedInURL}>LinkedIn</a>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:+1${phone.replace("()-+", "")}`}>{phone}</a>
      </div>
      </div>


      <div className="panel-layout">
        <div className="panel-layout-inner">
          <AboutmePanel/>
          <LanguagesPanel/>
        </div>
        <ExperiencePanel/>
        <ProjectPanel/>
      </div>
      
      <div className="footer">
        <p>Made with React and self hosted. Website made by me and background animation by @delroyprithvi from CodePen with MIT Licence.
        </p>
      </div>

    </>
  )
}

export default App
