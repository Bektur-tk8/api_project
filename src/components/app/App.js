import React from "react"; 
import { Col, Row, Container } from "reactstrap"; 
 
const App = () => { 
  return ( 
    <> 
        <Container> 
          <Header /> 
        </Container> 
        <Container> 
          <Row> 
            <Col lg ={{size:5, offset:0}}> 
              <RandomChar /> 
            </Col> 
          </Row> 
          <Row> 
            <Col md='6'> 
              <ItemList /> 
            </Col> 
            <Col md='6'> 
              <CharDetails /> 
            </Col> 
          </Row> 
        </Container> 
    </> 
  ); 
} 
 
export default App;
