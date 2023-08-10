import React from "react";
import { Col, Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { logo } from "../../assets";
import cx from "./Header.module.scss";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <section className={`${cx.header}`}>
        <Container>
            <Row className='align-items-center'>
               <Col lg={6}>
                <div className={`${cx.logo}`}>
                <img src={logo} alt="" />
                </div>
               </Col>
               <Col lg={6}>
                <div className={`${cx.navSec}`}>
                  <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Services</li>
                    <li>Project</li>
                    <li>Blog</li>
                    <li>Contact </li>
                    <li><FiSearch/></li>
                  </ul>
                </div>
               </Col>
                
            </Row>
        </Container>
    </section> */}

      <Navbar collapseOnSelect expand="lg" className={`${cx.header}`}>
        <Container>
          <Navbar.Brand href="#">
            <div>
              <img src={logo} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <div className={`${cx.navSec}`}>
                <ul>
                  <li>
                    
                    <NavLink to="#">Home </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">Pages </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">Services </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">Project </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">Blog </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">Contact </NavLink>
                  </li>
                  <li>
                    
                    <NavLink to="#">
                      <FiSearch />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
