import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../img/Partum_Novum_Logo_vector.svg'

const NavBar = () => {
    return (
        <Navbar bg="white" variant="white" className="container-fluid sticky-top" id="nav-container">
            <div className="nav-wrapper container">

                <Navbar.Brand className="ml-4 nav-link" width="100%">
                    <Link to="/">
                        <img
                            src={logo}
                            width="100"
                            className="nav-logo" />
                    </Link>
                </Navbar.Brand>
                <div className="link-container ml-auto mr-3 d-flex">
                    <Nav.Link to="/" className="link-outer me-2 nav-link letter-spacing ">
                        Home
                        {/* <Link to="/" className="me-2 nav-link text-secondary letter-spacing link-inner">Home</Link> */}
                    </Nav.Link>
                    {/* <Nav.Link>
                        <Link to="/about">About</Link>
                    </Nav.Link> */}
                    <Nav.Link to="/contact" className="link-outer me-2 nav-link letter-spacing ">
                        Contact
                        {/* <Link to="/contact" className="nav-link text-secondary letter-spacing">Contact</Link> */}
                    </Nav.Link>
                </div>
            </div>


        </Navbar>
    );
}

export default NavBar;