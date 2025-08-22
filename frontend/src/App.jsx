import {Footer} from './components/footer.jsx'
import {Header} from './components/header.jsx'
import {AboutMe} from './components/AboutMe.jsx'
import {Education} from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>


      <Header />

      <Container>

        <AboutMe/>
        <Row>
        <Col><Education/></Col>
        <Col><Experience/></Col>
        </Row>
      </Container>

      <Footer/>

    </>
  )
}

export default App
