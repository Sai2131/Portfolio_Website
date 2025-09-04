import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CompilerDiagram from '../assets/CompilerDiagram.jpeg'
function KVSProject() {

  return ( 
      <Container className='text-light mt-5'>
        <Row>
            <Col>
                <Col>
                <h1>Distributed Key Value Store</h1>
                <p1>
                  I implemented a fault-tolerant distributed key-value store (KVS) that supports
                  <b> availability, causal consistency, and eventual consistency</b>. The system was
                  designed to remain usable during node failures and network partitions while preserving
                  natural cause-and-effect relationships between operations.
                  <br></br>
                  <br></br>
                  System Features:
                  <ul>
                    <li>
                      <b>Availability:</b> As long as one replica is reachable, all client operations succeed,
                      provided they do not violate causal consistency.
                    </li>
                    <li>
                      <b>Causal Consistency:</b> Implemented happens-before tracking between versions of values.
                      Clients always observe effects alongside their causes (never the reverse).
                    </li>
                    <li>
                      <b>Eventual Consistency:</b> After partitions heal, replicas exchange state using gossip-like
                      mechanisms until all nodes converge on the same values.
                    </li>
                    <li>
                      <b>Versioning & Metadata:</b> Each write creates a new version with causal dependencies
                      recorded in a <code>causal-metadata</code> object, which clients pass along with each request.
                    </li>
                    <li>
                      <b>View Management:</b> Nodes maintain a dynamic view of the cluster. External processes
                      can update views, and nodes synchronize state with newly added peers.
                    </li>
                    <li>
                      <b>Horizontal Scaling:</b> Extended the KVS with sharding support. Each shard is responsible
                      for a disjoint subset of keys, and nodes proxy requests to the correct shard when necessary.
                    </li>
                    <li>
                      <b>Resharding:</b> On view changes, the KVS redistributes keys to match new shard assignments
                      while minimizing data movement (inspired by consistent hashing).
                    </li>
                    <li>
                      <b>REST API:</b> Implemented endpoints for <code>/ping</code>, <code>/data/&lt;key&gt;</code>,
                      <code>/data</code>, and <code>/view</code>, following strict specifications for correctness
                      and causal metadata handling.
                    </li>
                  </ul>

                  The system was containerized using Docker and tested with simulated network partitions
                  (via iptables and custom Docker networks) to verify availability, convergence, and
                  correctness under failure scenarios.
                  <br></br>
                  <br></br>

                  Future work could involve extending the system with stronger consistency models,
                  optimized gossip protocols, or a persistent storage backend.
                </p1>
              </Col>
            </Col>
            <Col>
                <img src={CompilerDiagram} alt="Compiler Diagram" className='ratio ratio-1x1 w-100 border border border-5 border-dark'/> 
            </Col>
        </Row>
      </Container>
  )
}

export default KVSProject