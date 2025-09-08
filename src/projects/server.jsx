import Container from 'react-bootstrap/Container';
import webservedemo from '../assets/Webserver-demo.mp4'
function Server() {

  return ( 
      <Container className='text-light mt-5'> 
          <h1>Multi-Threaded HTTP Server in C</h1>

                          <video
                    src={webservedemo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-100 border border-5 border-dark mt-3 mb-4"
                />

          <div className='mb-5'>
          <p1>
            I implemented a resilient, standards-compliant HTTP server in C with support for both
            single-threaded and multi-threaded execution. The project focused on low-level system
            programming, concurrency, and robust error handling.
            <br></br>
            <br></br>
            Features:
            <ul>
              <li>
                <b>HTTP Protocol Support:</b> Implemented parsing and handling for a subset of HTTP/1.1,
                including <code>GET</code> and <code>PUT</code> methods.
              </li>
              <li>
                <b>Request Parsing:</b> Built a custom parser for request lines, headers, and message
                bodies using C string manipulation and regular expressions.
              </li>
              <li>
                <b>Response Generation:</b> Implemented correct HTTP responses with status codes
                (<code>200</code>, <code>201</code>, <code>400</code>, <code>403</code>, <code>404</code>,
                <code>500</code>, <code>501</code>, <code>505</code>) and proper <code>Content-Length</code>.
              </li>
              <li>
                <b>File Operations:</b> Supported serving files from the local directory and creating/updating
                files via PUT requests, with strict validation of URIs and headers.
              </li>
              <li>
                <b>Error Handling:</b> Ensured the server never crashes, even under malformed or malicious
                requests. Protected against memory leaks and file descriptor leaks.
              </li>
              <li>
                <b>Concurrency:</b> Extended the server to handle multiple clients simultaneously using a
                thread pool, a thread-safe request queue, and reader-writer locks.
              </li>
              <li>
                <b>Audit Logging:</b> Added a log to <code>stderr</code> that records the linearized order
                of client requests for debugging and verification of concurrency behavior.
              </li>
            </ul>
            Implementation Details:
            <ul>
              <li>Developed in C with direct use of system calls (<code>socket</code>, <code>bind</code>,
              <code>accept</code>, <code>read</code>, <code>write</code>, <code>close</code>).</li>
              <li>Used modular design with separate functions for connection management, request parsing,
              and response generation.</li>
              <li>Created a Makefile with <code>clang</code> and strict compilation flags
              (<code>-Wall -Wextra -Werror -pedantic</code>).</li>
              <li>Validated functionality with <code>curl</code> and <code>netcat</code> test scripts,
              ensuring compliance with provided specifications.</li>
            </ul>
            The server can run indefinitely, handle malformed inputs gracefully, and scale to serve multiple
            concurrent clients while maintaining correct semantics.
          </p1>
          </div>
      </Container>
  )
}

export default Server