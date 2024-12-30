import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Layout.css'

  const Footer = () => {
  return (
    <>
    <div className="footer">
    <Container>
      <div className="innner-footer">
        <div className="row">
          <div className="col-md-3">
            <img style={{borderRadius:'50%', width:'5vw', height:'11vh', marginBottom:'30px'}} src="https://yt3.googleusercontent.com/-bf_kwpb1B1Kk-u28M2576raivvnQkBCNy5A-_nCuFeWhJMTCYMmPJZ0FtwYbYIWeiyuv9pU5MQ=s900-c-k-c0x00ffffff-no-rj" alt="Logo" />
            <h3>Pathan Group of Solution</h3>
          </div>
          <div className="col-md-3">
            <NavLink to='/social-media-marketing' className='nav-link'>Social Media Marketing</NavLink>
            <NavLink to='/medical-website-blogs' className='nav-link'>Medical Website Blogs</NavLink>
            <NavLink to='/medical-content-writing-services' className='nav-link'>Medical Content Writing Services</NavLink>
            <NavLink to='/patient-education-videos' className='nav-link'>Patient Education Videos</NavLink>
            <NavLink to='/medical-press-release-writing' className='nav-link'>Medical Press Release Writing</NavLink>
            <NavLink to='/patient-or-professional-portals' className='nav-link'>Patient or Professional Portals</NavLink>
          </div>
          <div className="col-md-3">
            <NavLink to='/healthcare-marketing' className='nav-link'>Healthcare Marketing</NavLink>
            <NavLink to='/healthcare-advertising-adwords' className='nav-link'>Healthcare Advertising (Adwords)</NavLink>
            <NavLink to='/medical-video-production' className='nav-link'>Medical Video Production</NavLink>
            <NavLink to='/lead-generation-services' className='nav-link'>Lead Generation Services</NavLink>
            <NavLink to='/best-medical-website-design' className='nav-link'>Best Medical Website Design</NavLink>
            <NavLink to='/email-marketing' className='nav-link'>Email Marketing</NavLink>
            </div>
          <div className="col-md-3">
            <h2>Let's talk</h2>
            <p>Have any question or comment?</p>
          <button className='connect-btn' type='submit'>Connect With Us</button></div>
        </div>
      </div>
    </Container>
    </div>
    </>
    )
}

export default Footer