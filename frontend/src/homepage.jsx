import { Footer } from './components/footer.jsx'
import { Header } from './components/header.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { ProjectCard } from './components/projectcard.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Homepage() {

    return (
        <>
            <Header />

            <Container>
                <AboutMe />
                <Row>
                    <Col className="d-flex">
                        <div className="equal-height w-100"><Education /></div>
                    </Col>
                    <Col className="d-flex">
                        <div className="equal-height w-100"><Experience /></div>
                    </Col>
                </Row>

                <div className='text-light border mt-5 border border-5 border-dark rounded blur'>

                    <h2 className='text-center' >Projects</h2>
                    <Row className='mb-4 mt-4'>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Project 1"} Desc={"This is the desc of the proj"} Page={"/compiler"} />
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Project 1"} Desc={"This is the desc of the proj"} />
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Project 1"} Desc={"This is the desc of the proj"} />
                        </Col>
                    </Row>

                    <Row className='mb-4 mt-4'>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Project 1"} Desc={"This is the desc of the proj"} />
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Project 1"} Desc={"This is the desc of the proj"} />
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Project 1"} Desc={"This is the desc of the proj"} />
                        </Col>
                    </Row>
                </div>


            </Container>

            <Footer />

        </>
    )
}

export default Homepage
