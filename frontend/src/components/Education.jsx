import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import UCSCLogo from '../assets/UC_Seal.png'
import FHSLogo from '../assets/FHS.png'
import '../global.css'

export function Education() {

  const [activeKey, setActiveKey] = useState("0");
  const handleSelect = (eventKey) => {
    if (eventKey === null) return;
    setActiveKey(eventKey);
  };

  return ( 
    <div className="text-center fs-8 w-80 mt-5 text-light border border border-5 border-dark rounded blur">

        <h3>Education </h3>

        <Accordion activeKey={activeKey} onSelect={handleSelect}>
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                <img src={UCSCLogo} alt="icon" className="me-2" style={{ width: '30px' }} /> 
                University of California, Santa Cruz - Computer Science B.S.
            </Accordion.Header>
            <Accordion.Body className='text-start'>
              Started my Computer Science degree in Fall 2022 and currently a senior. Some of my favorite courses I took were:
              <br></br>
              <ul>
                <li> Distributed Systems (134) </li>
                <li> Compilers (110A) </li>
                <li> Computer Architechure (120) </li>
                <li> System Design (130) </li>
                <li> Theory of Computation (103) </li>
              </ul>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>
                <img src={FHSLogo} alt="icon" className="me-2" style={{ width: '30px' }} /> 
                Frisco High School (Frisco, TX)
            </Accordion.Header>
            <Accordion.Body className='text-start'>
            This is where my interest in computer science began. In my softphmore year I took my first ever programming class
            and I remember how facisinating it was to see what programming was capable of.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  )
}
