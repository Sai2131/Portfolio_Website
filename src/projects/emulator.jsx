import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Gameplay from '../assets/emulatorgameplay.gif'
function Emulator() {

  return ( 
      <Container className='text-light mt-5'>
        <Row>
          <Col>
            <h1>BananaSlug Emulator</h1>
            <p1>
              I implemented a virtual console emulator in <b>C++</b> that simulates a custom hardware stack
              including a CPU, GPU, memory, and controller input. The emulator reads a custom ROM format
              (.slug) and executes the game logic in a 60 FPS loop.
              <br></br>
              <br></br>
              System Features:
              <ul>
                <li>
                  <b>Custom CPU:</b> Implemented a RISC-style CPU supporting arithmetic, branching,
                  load/store, and I-/R-type instructions with proper program counter and stack handling.
                </li>
                <li>
                  <b>Memory Model:</b> Includes address-mapped I/O, ROM loading, data sections, and
                  memory safety checks for readable/writeable addresses.
                </li>
                <li>
                  <b>GPU Rendering:</b> Used SDL to render a 64x64 pixel display at 60 FPS with proper
                  texture and frame buffer management.
                </li>
                <li>
                  <b>Controller Input:</b> Keyboard mapped to controller buttons; integrated into the
                  event loop with real-time input handling.
                </li>
                <li>
                  <b>ROM Validation & Loading:</b> SLUG files are checked for correct headers, and
                  program/data sections are loaded into memory for execution.
                </li>
                <li>
                  <b>Game Loop:</b> Main loop handles CPU execution, GPU rendering, and input events,
                  maintaining a consistent frame rate and proper termination conditions.
                </li>
                <li>
                  <b>CI/CD & Build:</b> Built with CMake and continuously integrated via GitHub Actions
                  for automated compilation and testing.
                </li>
                <li>
                  <b>Testing:</b> Verified correctness using hand-written ROM files simulating game logic.
                </li>
              </ul>
            </p1>
          </Col>

            <Col>
                <img src={Gameplay} alt="Gameplay GIF" className='ratio ratio-1x1 w-100 border border border-5 border-dark'/> 
            </Col>
        </Row>
      </Container>
  )
}

export default Emulator