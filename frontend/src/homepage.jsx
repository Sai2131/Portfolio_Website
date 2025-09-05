import { Footer } from './components/footer.jsx'
import { Header } from './components/header.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { ProjectCard } from './components/projectcard.jsx'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import compilerIcon from './assets/compilerIcon.png'
import distributedIcon from './assets/DistributedIcon.png'


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
                            <ProjectCard Title={"IR Code Generator / Compiler"} Desc={"Compiles a subset of the C language into IR (A form of code similar to assembly)"} Page={"/compiler"} Img={compilerIcon}/>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Distributed Key Value Store"} Desc={"Stores Key Value pairs in a distributed network of nodes for better fault tolerance, avaliability and throughput"} Page={"/kvs"} Img={distributedIcon} />
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Chaptre"} Desc={"A platform to share stories in incremental chapters for people to read and give feedback."} Page={"/chaptre"} Img={distributedIcon} />
                        </Col>
                    </Row>

                    <Row className='mb-4 mt-4'>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"HTTP Webserver"} Desc={"A Multithreaded HTTP 1.1 Webserver made with pthreads and unix sockets"} Page={"/httpserver"} Img={distributedIcon} />
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"cRegex"} Desc={"Regular expression library for C designed to be easy to use."} Page={"/regexengine"} Img={distributedIcon}/>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            <ProjectCard Title={"Game Emulator"} Desc={"Emulator made for a virtual game console called the Banana Slug"} Img={distributedIcon} Page={"/emulator"}/>
                        </Col>
                    </Row>
                </div>


            </Container>

            <Footer />

        </>
    )
}

export default Homepage
