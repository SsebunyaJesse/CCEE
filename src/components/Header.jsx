import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
// I am to plan the appearance of the nav bar when stretched
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary' style={{color:'red'}}>
      <Container className='header-container' >
      <Navbar.Brand href="/">Canadian Center </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link > 
            <Link to='/'>
              <div className="logo">Home</div>
        </Link>
            </Nav.Link>
            <Nav.Link > 
            <Link to='/about'>
        <div className="logo">About</div>
        </Link>
            </Nav.Link>
            <Nav.Link > 
            <Link to='/contact'><div className="logo">Contact</div></Link>
      
            </Nav.Link>
            <Nav.Link > 
            <Link to='/sponsors'>
            <div className="logo">Sponsor</div>
        </Link>
            </Nav.Link>
            <NavDropdown title='Conferences'  id='collapsible-nav-dropdown'>
              <NavDropdown.Item>
                <Link to='/conference1'>
                    Global Business and Investment forum
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to='/conference2'>
                    Canadian talent search for emerging artists 
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>

      {/* <header className='header'>
      <ul>
      <li>
        <Link to='/'>
        <div className="logo">Home</div>
        </Link>
      </li>
      <li>
        <Link to='/about'>
        <div className="logo">About</div>
        </Link>
      </li>
      <li>
        <Link to='/about'>
        <div className="logo">Logo</div>
        </Link>
      </li>
      <li>
        <Link to='/events'>
            <div className="logo">Events</div></Link>
      </li>
      <li>
        <Link to='/sponsors'>
            <div className="logo">Sponsor</div>
        </Link>
        
      </li>
      <li>
        <Link to='/contact'><div className="logo">Contact</div></Link>
      </li>
      </ul>
    </header> */}
      </Container>
    </Navbar>

  )
}

export default Header