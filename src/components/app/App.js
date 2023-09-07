import React from "react"; 
import { Col, Row, Container } from "reactstrap"; 
import ItemList from "../itemlist/itemList";
import CharDetails from "../charDetails/charDetails";
import RandomChar from "../randomChar/randomchar";
 
const App = () => { 

  state = {
    
  }
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
