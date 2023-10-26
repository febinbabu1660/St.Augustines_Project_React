import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LogoImg2 from '../assests/Images/Frame-logo.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import '../style/NavbarWhite.css'

function NavbarWhite() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
       




            <Navbar expand="lg" className="navbar-white" style={{position: "absolute", top: "0", width: "100%", background: "transparent"}}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={LogoImg2} alt="Logo" className="navbar-brand"></img>
                    </Navbar.Brand>
                  
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto navbar-nav justify-content-end nav-contents">
                            <Nav.Link className='nav-link-white' href="/">Home</Nav.Link>
                            <Nav.Link className='nav-link-white' href="/about">About Us</Nav.Link>
                            <Nav.Link className='nav-link-white' href="/newshub">NewsHub</Nav.Link>
                            <Nav.Link className='nav-link-white' href="/history">History</Nav.Link>
                            <Nav.Link className='nav-link-white' href="/contact">Contact</Nav.Link>
                            <Nav.Link href="">
                                <Button className="btn btn-link text-white navbar-white-button" data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>
                                    <i className="fa-solid fa-bars navbar-toggler-icon-1-white" data-toggle="modal" data-target="#exampleModal" ></i>
                                </Button>

                                <Modal show={show} onHide={handleClose} animation={false} className=' nv-modal fade slide-right'>

                                    <Modal.Body className='modalbody'>
                                        <ul className='modal-list'>
                                            <li className="toggle-item">
                                                <div className="items-blue">
                                                    <p className="toggle-link History" ><Link to={`/history`} className="link-toggle">History</Link></p>
                                                </div>
                                            </li>
                                            <li className="toggle-item">
                                                <div className="items-red">
                                                    <p className="toggle-link Vocation"><Link to={`/vocations`} className="link-toggle">Vocations</Link></p>
                                                </div>
                                            </li>
                                            <li className="toggle-item">
                                                <div className="items-blue">
                                                    <p className="toggle-link Spirituality" ><Link to={`/spirituality`} className="link-toggle">Spirituality</Link></p>
                                                </div>
                                            </li>
                                            <li className="toggle-item">
                                                <div className="items-red">
                                                    <p className="toggle-link Newshub"><Link to={`/newshub`} className="link-toggle">NewsHub</Link></p>
                                                </div>
                                            </li>
                                            <li className="toggle-item">
                                                <div className="items-blue">
                                                    <p className="toggle-link Contact-us"><Link to={`/contact`} className="link-toggle">Contact Us</Link></p>
                                                </div>
                                            </li>
                                            <li className="toggle-item">
                                                <div className="items-red">
                                                    <p className="toggle-link Family"><Link to={`/family`} className="link-toggle">Family</Link></p>
                                                </div>
                                            </li>
                                            <li className="toggle-item">
                                                <div className="items-blue">
                                                    <p className="toggle-link Where"><Link to={`/where`} className="link-toggle">Where we</Link></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </Modal.Body>


                                </Modal>

                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>







        
    )
}

export default NavbarWhite