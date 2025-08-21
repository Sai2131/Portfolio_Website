import './App.css'
import {ProjectPanel, AboutmePanel, LanguagesPanel, ExperiencePanel} from './components/panels'

function App() {

  return (
    <>
      <div className="namecard">
        <h1>Sai Tarra</h1>
        <div className="links">
        <h5>LinkedIn</h5>
        <h5>email</h5>
        <h5>Phone</h5>
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
