import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from'react';
import Icon37 from './leni/icon_37.png';
import data from './data.js';

function App() {

  let [shoes] = useState(data)


  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage : 'url('+Icon37+')'}}></div>

      <div>
        <Container>
          <Row>
            {
              shoes.map((a, i)=>{
                return(
                  <Card shoes={shoes[i]} i={i}></Card>
                )
              })
            }
            {/* {<Card shoes={shoes[0]} i={1}></Card>
            <Card shoes={shoes[1]} i={2}></Card>
            <Card shoes={shoes[2]} i={3}></Card>
            <Col>
              <img src={process.env.PUBLIC_URL + '/icon_57.png'} width="80%"></img>
              <h4>상품명</h4>
              <p>상품 설명</p>
            </Col>} */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

function Card(props) {
  return (
      <Col>
          <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%"></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
      </Col>
  );
}

export default App;
