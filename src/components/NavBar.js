import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/ab_Partum Novum-01.jpg'

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" className="container-fluid shadow" id="nav-container">
            
                <Navbar.Brand className="text-center" width="100%">
                    <img
                        src={logo}
                        width="300"
                        // height="110"
                        className="d-inline-block align-top nav-logo border border-secondary" />

                </Navbar.Brand>

                <Nav className="">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about">About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contact">Contact</Link>
                    </Nav.Link>


                </Nav>
          

        </Navbar>
    );
}

export default NavBar;