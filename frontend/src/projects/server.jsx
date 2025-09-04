import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CompilerDiagram from '../assets/CompilerDiagram.jpeg'
function Server() {

  return ( 
      <Container className='text-light mt-5'>
        <Row>
            <Col className="d-flex">
                <h1>IR Code Generator / Compiler</h1>
            </Col>
            <Col className="d-flex">
                <img src={CompilerDiagram} alt="Compiler Diagram" className='ratio ratio-1x1 w-100 border border border-5 border-dark'/> 
            </Col>
        </Row>
      </Container>
  )
}

export default Server