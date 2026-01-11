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
    <div className="text-center fs-8 w-80 mt-5 border border border-5 border-dark rounded blur">

        <h3 className='text-light'>Education</h3>

        <Accordion activeKey={activeKey} onSelect={handleSelect}>
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                <img src={UCSCLogo} alt="icon" className="me-2" style={{ width: '30px' }} /> 
                <div className='text-light'>University of California, Santa Cruz - Computer Science B.S.</div>
            </Accordion.Header>
            <Accordion.Body className='text-start'>
              <div className='text-light'>
              September 2022 - December 2025
              <br></br>
              GPA: 3.82 / 4.0
              <br></br>
              <br></br>
              Notable Coursework:
              <br></br>
              </div>
              <ul className='text-light'>
                <li> Distributed Systems (CSE 138) </li>
                <li> Operating Systems (CSE 134) </li>
                <li> Database Systems (CSE 180) </li>
                <li> Compilers (CSE 110A) </li>
                <li> Computer Architechure (CSE 120) </li>
                <li> Software Development (CSE 115A) </li>
                <li> Theory of Computation (CSE 103) </li>
                <li> Data Structures / Algorithm Analysis (CSE 101 & CSE 102) </li>
              </ul>
      
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  )
}
