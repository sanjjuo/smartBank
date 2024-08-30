import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom"
import "../Navbar/Navbar.css"
import { MdLock } from "react-icons/md";
import UserModal from '../UserModal/UserModal';

const MyNavbar = () => {

    const [modal, setModal] = useState(false)
    const location = useLocation();
    const isBannerPage = location.pathname === "/";


    return (
        <div>
            <Navbar expand="lg" className={`navbar ${isBannerPage ? "navbar-banner" : "navbar-other"}`}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ fontWeight: 800, color: "#ffbd39" }}>smartbank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Products">Products</Nav.Link>
                            <Nav.Link href="#About">About-us</Nav.Link>
                            <Nav.Link href="#About">Blog</Nav.Link>
                            <Nav.Link href="#Business">Business</Nav.Link>
                        </Nav>
                        <Nav className='ms-auto navbar-nav2'>
                            <Nav.Link onClick={()=>setModal(true)}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <UserModal show={modal} onHide={setModal}/>
        </div>
    )
}

export default MyNavbar
