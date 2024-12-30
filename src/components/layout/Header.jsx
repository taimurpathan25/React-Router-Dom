import React from 'react';
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container'; 
import Form from 'react-bootstrap/Form'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Layout.css'

const Header = () => {
  return (
    <>
    <div className="main-top-nav">
    <Container>
    <div className="top-nav">
      <div className="left-topnav">
        <p>Hello this side pathan code and i m software developer with the expertise in frontend developer</p>
      </div>
      <div className="right-topnav">
          <NavLink style={{color:'white', textDecoration:'none', fontWeight:'bold'}} to='/signup'>Sign Up</NavLink>
          <NavLink style={{color:'white', textDecoration:'none', fontWeight:'bold'}} to='/signin'>Sign In</NavLink>
      </div>
    </div>
    </Container>
    </div>
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container>
       <NavLink to="/"><Navbar.Brand><img style={{borderRadius:'50%', width:'5vw', height:'11vh'}} src="https://yt3.googleusercontent.com/-bf_kwpb1B1Kk-u28M2576raivvnQkBCNy5A-_nCuFeWhJMTCYMmPJZ0FtwYbYIWeiyuv9pU5MQ=s900-c-k-c0x00ffffff-no-rj" alt="Logo" srcset="" /></Navbar.Brand></NavLink> 
        <Navbar aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '150px' }} navbarScroll >
            <NavLink className={({isActive}) => isActive ? 'navlinks active-link' : 'navlinks'} to="/"><b>Home</b></NavLink>
            <NavLink className='navlinks' to="/about-us"><b>About Us</b></NavLink>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item to="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action4"> Another action </NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item to="#action5"> Something else here </NavDropdown.Item>
              </NavDropdown> */}
              <NavLink className='navlinks' to="/all-medicine"><b>All Medicines</b></NavLink> 
              <NavLink className='navlinks' to="/contact-us"><b>Contact Us</b></NavLink> 
              </Nav> 
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search Medicine" className="me-2" aria-label="Search" />
                 <Button variant="outline-success" style={{ borderColor: "yellow", color: "#fff", border:'2px solid yellow' }}>Search</Button>
                 </Form> </Navbar.Collapse>
                 </Container>
        </Navbar>
    </>
  )
}

export default Header