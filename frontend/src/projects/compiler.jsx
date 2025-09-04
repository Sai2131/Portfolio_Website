import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CompilerDiagram from '../assets/CompilerDiagram.jpeg'
import Container from 'react-bootstrap/Container';

function CompilerProject() {

  return ( 
      <Container className='text-light mt-5'>
        <Row>
            <Col>
                <h1>IR Code Generator / Compiler</h1>
                <p1>
                  I made a simple compiler in Python for a custom C like programming language, targeting a three address LLVM style intermediate representation (IR).
                  <br></br>
                  <br></br>
                  Compiler Stages:
                  <ul>
                    <li>Lexical Analysis: Made a custom lexer using regular expressions, converting the source code into tokens (e.g., INT, FLOAT, SEMICOLON, ID).</li>
                    <li>Grammar Design: Wrote a context free grammar, then refactored it into LL1 compatible form by removing left recursion and enforcing associativity/precedence rules.</li>
                    <li>Parsing and AST Construction: Handwrote a recursive descent parser based on the grammar. While parsing it constructs an Abstract Syntax Tree (AST) and populates a symbol table to manage variables and types, and scope.</li>
                    <li>Semantic Analysis: Did type checking and type inference on the AST with the help of the symbol table. Any type errors were thrown here.</li>
                    <li>IR Generation: Translated the AST into three address code similar to LLVM's IR</li>
                    <li>IR Optimization: Implemented basic compiler optimizations:
                      <ul>
                        <li>Loop unrolling with a customizable unrolling factor</li>
                        <li>Local value numbering on basic blocks</li>
                      </ul>
                    </li>
                  </ul>

                  Finally to test compiler, I built an interpreter to execute the IR and benchmarked optimizations on computation and branch heavy programs.

                  <br></br>
                  <br></br>

                  Eventually, I want to write a more complex compiler in C++ for a language with many more features, as well as create a backend to make real executables.
                </p1>
            </Col>
            <Col>
                <img src={CompilerDiagram} alt="Compiler Diagram" className='ratio ratio-1x1 w-100 border border border-5 border-dark'/> 
            </Col>
        </Row>
      </Container>
  )
}

export default CompilerProject