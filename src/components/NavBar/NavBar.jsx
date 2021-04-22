import React from 'react'
import logo from './../../assets/logo.png';
import resume from './../../assets/Subhasree_Vadukoot_Resume.pdf';
import './NavBar.scss'
import {NavLink} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
const NavBar = () => {
 
    return (
   
        <Nav variant="tabs" defaultActiveKey="/home" className="navbar">
          <Nav className="mr-auto nav-right ">
        <Nav.Item>
          <img src={logo} className='logo' alt='logo'/>
        </Nav.Item>
        </Nav>
        
        <Nav className="ml-auto nav-left">
        <Nav.Item>
          <NavLink  exact to="/" activeClassName="active">About me</NavLink>
        </Nav.Item>
             <Nav.Item>
          <NavLink  exact to="/work" activeClassName="active">Work</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink exact to={resume} target="_blank" activeClassName="active">Resume</NavLink>
        </Nav.Item>
        </Nav>
      </Nav>
    
    )
}

export default NavBar
