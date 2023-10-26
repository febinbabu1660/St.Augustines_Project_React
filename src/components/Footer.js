import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "../assests/Images/Frame-logo.svg"

import "../style/Footer.css"

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div>


            <Container fluid className='stay-upto-date'>
                <Row>
                    <Col>
                        <p className="stay-updated">Stay Up To Date!</p>
                    </Col>
                </Row>
            </Container>



            <Container fluid className='footer-container'>
                <Row>
                <div className="footer-logo">
                    <img src={Logo} alt="f-logo" className='f-logo' />
                </div>


                <div className="sentence">
                    <p className="sentence-1">
                        Seek not to understand that you may believe, but believe that you may understand.
                    </p>
                    <p className="s-name">
                        Saint Augustine
                    </p>
                </div>
                </Row>
               




            <Container>
            <Row className="footer-row">
                            <Col md={3} sm={3}>
                            <div >
                                    <h5 className="footer-heading">The Augustinians</h5>
                                    <ul className="list-unstyled text-small">
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>

                                    </ul>
                                </div>
                            </Col>
                             

                            <Col md={3} sm={3}>
                            <div >
                                    <h5 className="footer-heading">The Augustinians</h5>
                                    <ul className="list-unstyled text-small">
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>

                                    </ul>
                                </div>
                            </Col>
                                

                            <Col md={3} sm={3}>
                            <div >
                                    <h5 className="footer-heading">The Augustinians</h5>
                                    <ul className="list-unstyled text-small">
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>

                                    </ul>
                                </div>
                            </Col>

                            <Col md={3} sm={3}>
                            <div  >
                                    <h5 className="footer-heading">The Augustinians</h5>
                                    <ul className="list-unstyled text-small">
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                        <li className="footer-li-text mt-3"><a className="text-footer" href="#Lorem">Lorem Ipsum</a></li>
                                    </ul>
                                </div>
                            </Col>
                </Row>
    </Container>


        <Row className="text-center last-line-footer">

      
                    <Col md={4} className='box'>
                        <span className="copyright quick-links"><i className="fa-sharp fa-regular fa-copyright"></i>
                            {currentYear} - The Order Of Saint Augustine
                        </span>
                    </Col>
                    <Col md={4} className='box'>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item social-media-buttons">
                                <a href="#facebook">
                                    <i className="fa-brands fa-square-facebook" ></i>
                                </a>
                            </li>
                            <li className="list-inline-item social-media-buttons">
                                <a href="#instagram">
                                    <i className="fa-brands fa-square-instagram" ></i>
                                </a>
                            </li>
                            <li className="list-inline-item social-media-buttons">
                                <a href="#twitter">
                                    <i className="fa-brands fa-square-twitter" ></i>
                                </a>
                            </li>
                            <li className="list-inline-item social-media-buttons">
                                <a href="#linkedin">
                                    <i className="fa-brands fa-linkedin" ></i>
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col md={4} className='box'>
                        <ul className="list-inline quick-links">
                            <li className="list-inline-item">
                                <p className="privacy">Privacy Policy | Terms of use</p>
                            </li>
                        </ul>
                    </Col>


                

        </Row>


    </Container>

        </div>
    )
}

export default Footer