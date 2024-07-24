import './App.css';
import Icon37 from './leni/icon_37.png';
import data from './data.js';
import { useState } from'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Card from './components/Card.js';
import Detail from './routes/Detail.js';
import Page_404 from './routes/Page_404.js';

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">React-2</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link href="/detail">상세 페이지</Nav.Link>
            <Nav.Link href="/about">회사 소개 페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
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
          </>
        }></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}></Route>

        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>사원 소개 페이지입니다!</div>}></Route>
          <Route path="location" element={<div>location 정보 페이지입니다!</div>}></Route>
        </Route>
        <Route path="*" element={<Page_404></Page_404>}></Route>
      </Routes>

      
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 소개 페이지</h4>
      <Outlet />
    </div>
  )
}

export default App;
