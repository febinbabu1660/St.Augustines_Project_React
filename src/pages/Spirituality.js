import React from 'react'

import Hero from '../components/Hero'
import TextComponent from '../components/TextComponent'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import BannerImg from "../assests/Images/Rectangle 219.png"
import Card1Img from "../assests/Images/Rectangle 377.png"
import Card2Img from "../assests/Images/Rectangle 391.png"
import Card3Img from "../assests/Images/Rectangle 392.png"
import SImgBanner from "../assests/Images/Rectangle 380.png"
import MaryImg from "../assests/Images/Rectangle 429.png"
import ChurchImg from "../assests/Images/Rectangle 432.png"
import AlterImg from "../assests/Images/Rectangle 431.png"
import ChildImg from "../assests/Images/Rectangle 390.png"
import LCardImg1 from "../assests/Images/Rectangle 240.png"
import LCardImg2 from "../assests/Images/Rectangle 243.png"
import LCardImg3 from "../assests/Images/Rectangle 244.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../style/Spirituality.css'
import ImageComponent from '../components/ImageComponent'

function Spirituality() {
  return (
    <div>
        
    <Navbar2 />
    <Hero 
        name='spirituality-hero'
        banner={BannerImg}
        heroText='spirituality-banner-content'
        heading='Spirituality'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing 
        Integer nec odio. Praesent libero. Sed cursus ante
        bus diam. Sed nisi. '
        btn_name="Learn More"
    />

    <div className='spirituality-rectangle' />



    <Container >


    <TextComponent 

        name="spirituality-second-content"
        title="Vestibulum ante ipsum primis "
        paragraph="The spirituality of the Order, whose principal features are presented here, proceeds from the
        following of Christ according to the teachings of the Gospel and the action of the Holy Spirit.
        Its principal point of reference is the teaching and example of Saint Augustine, complemen
       ted by the tradition of the Order. The principal document of our spirituality is the Rule, which
        must direct our lives and action. "
    
    />



    <Row className='spirituality-cards-1'>
        <Col md={4} lg={4} className='spirituality-col-cards' >

            <Card className='spirituality-first-card'>
                <Card.Img variant="top" src={Card1Img}  alt='card-1-img' className='spirituality-card1-img'/>
                <Card.Body className='spirituality-first-cards-body'>
                    <Card.Text className='spirituality-card1-text'>
                    <h4 className="spirituality-first-card-title">Evangelical & Ecclesial Aspects</h4>
                        <span className="spirituality-first-card-text">Integer lacinia sollicitudin 
                        massa. Cras metus. Sed 
                        aliquet risus a tortor. 
                        Integer id quam. </span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Col>
        <Col md={4} lg={4} className='spirituality-col-cards spirituality-mobile-cards' >

            <Card className='spirituality-first-card'>
                <Card.Img variant="top" src={Card2Img}  alt='card-1-img' className='spirituality-card1-img'/>
                <Card.Body className='spirituality-first-cards-body'>
                    <Card.Text className='spirituality-card1-text'>
                    <h4 className="spirituality-first-card-title">Evangelical & Ecclesial Aspects</h4>
                        <span className="spirituality-first-card-text">Integer lacinia sollicitudin 
                        massa. Cras metus. Sed 
                        aliquet risus a tortor. 
                        Integer id quam. </span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Col>
        <Col md={4} lg={4} className='spirituality-col-cards spirituality-mobile-cards' >

            <Card className='spirituality-first-card'>
                <Card.Img variant="top" src={Card3Img}  alt='card-1-img' className='spirituality-card1-img'/>
                <Card.Body className='spirituality-first-cards-body'>
                    <Card.Text className='spirituality-card1-text'>
                    <h4 className="spirituality-first-card-title">Evangelical & Ecclesial Aspects</h4>
                        <span className="spirituality-first-card-text">Integer lacinia sollicitudin 
                        massa. Cras metus. Sed 
                        aliquet risus a tortor. 
                        Integer id quam. </span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </Col>
    </Row>

    </Container>











    <ImageComponent 
        name="spirituality-img-banner"
        Imgbanner={SImgBanner}

    />


        
    <Row className="image-discription">
        <Container className="spirituality-img-description">
            <h3 className="img-title">Sed cursus ante dapibus diam</h3>
            <p className="img-text">Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar 
                Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a 
                id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augu. </p>
        </Container>
        
    </Row>




    <Container className="spirituality-mary-section">
    <Row>
        <Col md={6} lg={6} className='spirituality-mary-section-col-1'>
            <h3>Service to the Church
                and Evangelization</h3>
                <p>Aenean lectus elit, fermentum non, 
                    convallis id, sagittis at, neque. Nulla
                    m mauris orci, aliquet et, iaculis et, 
                    viverra vitae, ligula. Nulla ut felis in 
                    purus aliquam imperdiet. Maecen
                    as aliquet mollis lectus. </p>
        </Col>
        <Col md={3} lg={3} className="mobile-card" >
            <img src={MaryImg} alt="mary-img" />
        </Col>
        <Col md={3} lg={3} className="mary-section-img-1" >
            <img src={MaryImg} alt="mary-img" />
           
        </Col>
    </Row>

    <Row className='spirituality-mobile-cards'>
        <Col md={3} lg={3}>
        <img src={ChurchImg} alt="sub-img" style={{width:"100%"}}/>
            
        </Col>
        <Col md={3} lg={3}>
        <img src={AlterImg} alt="sub-img" style={{width:"100%"}} />

        </Col>
        <Col md={3} lg={3}>
        <img src={ChurchImg} alt="sub-img" style={{width:"100%"}} />

        </Col>
        <Col md={3} lg={3}>
        <img src={AlterImg} alt="sub-img" style={{width:"100%"}} />

        </Col>
        
    </Row>

</Container>





<div className="child-image-div">
    <Container>
        <Row className="child-image-row">
            <Col md={6} lg={6}>
                <img src={ChildImg} alt="child-img" />
            </Col>
            <Col md={6} lg={6} className="child-image-red-div">
                    <h3>
                        Nulla facilisi. 
                    </h3>
                    <p>
                        Aenean lectus elit, fermentum non, 
                        convallis id, sagittis at, neque. Nulla
                        m mauris orci, aliquet et, iaculis et, 
                        viverra vitae, ligula. Nulla ut felis in 
                        purus aliquam imperdiet. Maecen
                        as aliquet mollis lectus. 
                    </p>
            </Col>
        </Row>
    </Container>
</div>



<Container>
    <TextComponent
        name="spirituality-last-text"
        title="From the Rule of St. Augustine:"
        paragraph="The spirituality of the Order, whose principal features are presented here, proceeds from the
        following of Christ according to the teachings of the Gospel and the action of the Holy Spirit.
        Its principal point of reference is the teaching and example of Saint Augustine, complemen
        ted by the tradition of the Order. The principal document of our spirituality is the Rule, which
        must direct our lives and action. "

    />



    <Row className='spirituality-cards-row'>
        <Col md={4} lg={4} >
            <Card className='spirituality-last-cards'>
                <Card.Img variant="top" src={LCardImg1} className='spirituality-last-cards-img'/>
                <div className='last-card-title-div'>
                <Card.Title className='spirituality-last-cards-title'>Charism</Card.Title>
                </div>
                <Card.Body className='spirituality-last-cards-body'>
                    <Card.Text className='spirituality-last-cards-text'>
                    Lorem ipsum dolor sit amet. Vel velit 
                    officiis est ducimus itaque eos nihil
                     doloremque non sint cumque et 
                    modi fugit ut reiciendis omnis qui
                     voluptate error.
                    </Card.Text>
                    <i className="fa-solid fa-ellipsis" style={{color: "#003049"}}></i>
                </Card.Body>
            </Card>
        </Col>
        <Col md={4} lg={4} className='spirituality-mobile-cards' >
            <Card className='spirituality-last-cards'>
                <Card.Img variant="top" src={LCardImg2} className='spirituality-last-cards-img'/>
                <div className='last-card-title-div'>
                <Card.Title className='spirituality-last-cards-title'>Saint Augustine</Card.Title>
                </div>
                <Card.Body className='spirituality-last-cards-body'>
                    <Card.Text className='spirituality-last-cards-text'>
                    Lorem ipsum dolor sit amet. Vel velit 
                    officiis est ducimus itaque eos nihil
                     doloremque non sint cumque et 
                    modi fugit ut reiciendis omnis qui
                     voluptate error.
                    </Card.Text>
                    <i className="fa-solid fa-ellipsis" style={{color: "#003049"}}></i>
                </Card.Body>
            </Card>
        </Col>

        <Col md={4} lg={4} className='spirituality-mobile-cards'>
            <Card className='spirituality-last-cards'>
                <Card.Img variant="top" src={LCardImg3} className='spirituality-last-cards-img'/>
                <div className='last-card-title-div'>
                <Card.Title className='spirituality-last-cards-title'>Saints & Blesseds</Card.Title>
                </div>
                <Card.Body className='spirituality-last-cards-body'>
                    <Card.Text className='spirituality-last-cards-text'>
                    Lorem ipsum dolor sit amet. Vel velit 
                    officiis est ducimus itaque eos nihil
                     doloremque non sint cumque et 
                    modi fugit ut reiciendis omnis qui
                     voluptate error.
                    </Card.Text>
                  <i className="fa-solid fa-ellipsis" style={{color: "#003049"}}></i>

                </Card.Body>
            </Card>
        </Col>



    </Row>





</Container>




    <Footer />


    </div>
  )
}

export default Spirituality