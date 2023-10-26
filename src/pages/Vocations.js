import React from 'react'
import TextComponent from '../components/TextComponent'
import ImageComponent from '../components/ImageComponent'
import Footer from '../components/Footer'
import PriestImg1 from "../assests/Images/medium-shot-senior-priest-holding-bible_prev_ui (1) 1.png"
import PriestImg2 from "../assests/Images/medium-shot-young-priest-holding-bible.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/Vocations.css'
import PriestCardImg from "../assests/Images/Rectangle 265.png"
import PriestImg4 from "../assests/Images/Rectangle 268.png"
import PriestImg5 from "../assests/Images/Rectangle 270.png"
import PriestImg6 from "../assests/Images/Rectangle 271.png"
import PriestImg7 from "../assests/Images/Rectangle 273.png"
import PriestImg8 from "../assests/Images/Rectangle 274.png"
import VImgbanner from "../assests/Images/Rectangle 276.png"
import NavbarWhite from '../components/NavbarWhite'


function Vocations() {
    return (
        <div>

           <NavbarWhite />

            <div className='vocations-banner-page'>

                <Row className='vocations-banner'>

                    <Col md={7} lg={7}>
                        <div className='vocations-banner-content'>
                            <h1>
                                Is God calling you to be an <span>Augustinian Friar?</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                Integer nec odio. Praesent libero. Sed cursus ante
                            </p>
                            <button>VOCATIONS</button>
                        </div>
                    </Col>
                    <Col md={5} lg={5}>
                        <img src={PriestImg1} alt="priest-img-1" className='priest-image' />
                    </Col>

                </Row>
            </div>

            <Container className='vocations-second-content'>
            <TextComponent 

                    name="vocations-second-section"
                    title="Lorem ipsum dolor sit amet."
                    paragraph="Sit unde nulla sed tenetur iure ut suscipit recusandae ab consequatur nostrum 33 eius dolo
                    r et aliquam quod qui quasi labore. Sit delectus tempore est sequi distinctio et internos tota
                    m qui doloremque obcaecati eum corporis provident aut dolorem dolores ea labore nihil."

                    />

                <Row className='card-container'>
                    <Col md={4} lg={4}>
                        <Card className="vocations-card">
                            <Card.Img variant="top" src={PriestCardImg} />
                        </Card>
                    </Col>
                    <Col md={4} lg={4} className='mobile-card'>
                        <Card className="vocations-card">
                            <Card.Img variant="top" src={PriestCardImg} />
                        </Card>
                    </Col>
                    <Col md={4} lg={4} className='mobile-card'>
                        <Card className="vocations-card">
                            <Card.Img variant="top" src={PriestCardImg} />
                        </Card>
                    </Col>
                </Row>
            </Container>

           

        <Container fluid className='priest-3'>
            <Row>
                <Col md={7} lg={7}>
                    <img src={PriestImg2} alt='priest-img-2' className='priest-img-3' />
                </Col>
                <Col md={5} lg={5}>
                <div className="priest-3-content">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Nam galisum voluptate et dolorum sunt ut numquam 
                    error et iure delectus a animi quibusdam. Qui facere
                    quis in pariatur eligendi ea amet nulla est iusto aliqui
                    sit rerum quidem nonnihil placeat.
                    Ex provident sunt 
                    corporis sunt aut sapiente corporis 33 consequatur 
                    possimus ut debitis quia 33 atque esse. </p>
        
                    <button>Contact Us</button>
            </div>
                </Col>
            </Row>

        </Container>


        <div className="end-line"  />


        <div className='priest-4'>

            
            <Row className='priest-4-row'>
                <Col md={5} lg={5} className='priest-4-col'>
                    <img src={PriestImg4} alt="priest-img-4" className="priest-img-4 "/>
                </Col>
                <Col md={2} lg={2} className='priest-4-col col-sub-imgs'>
                    <Row>
                    <img src={PriestImg5} alt="priest-img-4" className="sub-imgs "/>

                    </Row>
                    <Row>
                    <img src={PriestImg6} alt="priest-img-4" className="sub-imgs "/>

                    </Row>
                </Col>
                <Col md={5} lg={5} className='priest-4-content'>
                <h3 className="priest-4-content-title">Lorem ipsum 
                </h3>
                <p className="priest-4-content-text">
                    Sit unde nulla sed tenetur iure ut suscipit
                    recusandae ab consequatur nostrum 33 
                    eius dolet aliquam quod qui quasi labore.
                    Sit delectus tempore est sequi distinctio 
                    et internos totam qui doloremque obcae
                    provident aut dolorem dolores ea labore.
                </p>
                <br/>
                <p className="priest-4-content-text">
                    Sit unde nulla sed tenetur iure ut suscipit
                    recusandae ab consequatur nostrum 33 
                    eius dolet aliquam quod qui quasi labore.
                    Sit delectus tempore est sequi distinctio 
                    et internos totam qui doloremque obcae
                    provident aut dolorem dolores ea labore.
                </p>
                </Col>
            </Row>
            </div>
            <div className='priest-5'>

            <Row className='priest-5-row'>
                <Col md={5} lg={5}>
                <h3 className="priest-5-content-title">Lorem ipsum 
                </h3>
                <p className="priest-5-content-text">
                    Sit unde nulla sed tenetur iure ut suscipit
                    recusandae ab consequatur nostrum 33 
                    eius dolet aliquam quod qui quasi labore.
                    Sit delectus tempore est sequi distinctio 
                    et internos totam qui doloremque obcae
                    provident aut dolorem dolores ea labore.
                </p>
                <br/>
                <p className="priest-5-content-text">
                    Sit unde nulla sed tenetur iure ut suscipit
                    recusandae ab consequatur nostrum 33 
                    eius dolet aliquam quod qui quasi labore.
                    Sit delectus tempore est sequi distinctio 
                    et internos totam qui doloremque obcae
                    provident aut dolorem dolores ea labore.
                </p>
                </Col>
                <Col md={2} lg={2} className='col-sub-imgs'>
                <Row>
                    <img src={PriestImg5} alt="priest-img-" className="sub-imgs "/>

                    </Row>
                    <Row>
                    <img src={PriestImg8} alt="priest-img-4" className="sub-imgs "/>

                    </Row>
                </Col>
                <Col md={5} lg={5}>
                <img src={PriestImg7} alt="priest-img-5" className="priest-img-5 "/>

                </Col>
            </Row>


        </div>

        <ImageComponent

        name="vocations-img-banner"
        Imgbanner={VImgbanner}
        />


        <Footer />

        </div>
    )
}

export default Vocations