import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CompilerDiagram from '../assets/CompilerDiagram.jpeg'

function Regexengine() {

  return ( 
      <Container className='text-light mt-5'>
        <Row>
          <Col>
            <h1>cRegex</h1>
            <p1>
              <b>cRegex</b> is a traditional regular expression library written in C. Internally, it uses
              a recursive descent parser to build an Abstract Syntax Tree (AST), which is then transformed
              into a Non-Deterministic Automaton (NFA). The NFA is used to check whether input strings
              are accepted by the regex.
              <br></br>
              <br></br>
              Features:
              <ul>
                <li><b>Full string matching</b> and <b>start-of-string matching</b></li>
                <li><b>Regex operations:</b> Concatenation, Union, Kleene Star</li>
                <li><b>Grouping and ranges</b> (e.g., <code>[A-Za-z]</code>)</li>
                <li><b>Wildcard</b> support (<code>.</code>)</li>
                <li><b>Work in progress:</b> group string capturing and quantifiers (<code>?</code>, <code>+</code>, <code>{}</code>)</li>
              </ul>
              How it Works:
              <ul>
                <li>Regex is first tokenized using a custom scanner.</li>
                <li>Tokens are parsed into an AST with a recursive descent parser.</li>
                <li>The AST is compiled into an NFA using standard automata construction techniques.</li>
                <li>The NFA is executed against input strings to determine acceptance.</li>
                <li>All functionality is packaged into a reusable C library.</li>
              </ul>
              Example:
              <ul>
                <li>Filtering email addresses and phone numbers from a list of strings by calling
                <code>quickFullMatch()</code> with user-defined regex patterns.</li>
                <li>Correctly identifies valid inputs such as
                <code>johnappleseed@email.org</code> and <code>(111)-222-3333</code>,
                while rejecting malformed strings.</li>
              </ul>
              The project was created as a lightweight alternative to POSIX regex, focusing on clarity,
              extensibility, and educational value.
            </p1>
          </Col>
            <Col>
                <img src={CompilerDiagram} alt="Compiler Diagram" className='ratio ratio-1x1 w-100 border border border-5 border-dark'/> 
            </Col>
        </Row>
      </Container>
  )
}

export default Regexengine