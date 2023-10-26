import React from 'react'
import Hero from '../components/Hero'
import ImageComponent from '../components/ImageComponent'
import TextComponent from '../components/TextComponent'
import Footer from '../components/Footer'
import BannerImg from "../assests/Images/Rectangle 186.png"
import HomeImgBanner from "../assests/Images/Rectangle 415.png"
import VectorImg from "../assests/Images/Vector.svg"
import MaryImg from "../assests/Images/Ellipse 30.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/Home.css'
import Carousel from '../components/Carousel'
import NavbarWhite from '../components/NavbarWhite'


function Home() {
  return (
    <div style={{background:"#EAECEB"}}>


        <NavbarWhite />
      <Hero
        name="hero"
        banner={BannerImg}
        heroText="home-banner-content"
        heading="Welcome to Saint Augustine"
        paragraph="Capitulum Generale Intermedium 2022"
      />


      <Container>
        <div className='home-rectangle'>
          <Row className='Vector-card'>

            <Col md={4} lg={4} sm={12} className='card-column'>
              <Card className='home-rectangle-card'>
                <Card.Img variant="top" src={VectorImg} className='vector-img' />
                <Card.Body>
                  <Card.Title className='homepage-rectangle-card-title'>Lorem Ipsum</Card.Title>
                  <Card.Text className='home-rectangle-card-text'>
                    In facilis Quis ut expedita
                    commodi qui animi nes
                    ciunt. Et maiores enim es
                    architecto voluptatibus
                    vel quia quidem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} sm={12} className='mobile-card'>
              <Card className='home-rectangle-card'>
                <Card.Img variant="top" src={VectorImg} className='vector-img' />
                <Card.Body>
                  <Card.Title className='homepage-rectangle-card-title'>Lorem Ipsum</Card.Title>
                  <Card.Text className='home-rectangle-card-text'>
                    In facilis Quis ut expedita
                    commodi qui animi nes
                    ciunt. Et maiores enim es
                    architecto voluptatibus
                    vel quia quidem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} sm={12} className='mobile-card'>
              <Card className='home-rectangle-card'>
                <Card.Img variant="top" src={VectorImg} className='vector-img' />
                <Card.Body className='home-reactangle-card-body'>
                  <Card.Title className='homepage-rectangle-card-title'>Lorem Ipsum</Card.Title>
                  <Card.Text className='home-rectangle-card-text'>
                    In facilis Quis ut expedita
                    commodi qui animi nes
                    ciunt. Et maiores enim es
                    architecto voluptatibus
                    vel quia quidem.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </div>
      </Container>


      <Container>
        <div className='home-second-content'>
          <h1>
            Building Community

          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill
            um dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qu
            i officia deserunt mollit anim id est laborum."
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill

          </p>
        </div>



        <div className='vision'>
          <Row className='visoin-row'>

            <Col md={6} lg={6} sm={6} className='rossary-img-1'>
              {/* <img src={RossaryImg1} className='rossary-img' alt='rossary-img' /> */}
            </Col>
            <Col md={6} lg={6} sm={6} className='vision-content'>
              <h3 className="vision-heading">Vision</h3>
              <p className="vision-description">
                Lorem ipsum dolor sit amet. Sed voluptate
                atque et dolor saepe non corporis repudia
                dae. 33 dolorem quasi eum explicabo velit
                ut voluptates aliquam vel voluptatem.
              </p>
            </Col>

          </Row>
        </div>




        <div className='mission'>
          <Row className='mission-row'>


            <Col md={6} lg={6} sm={6} className='mission-content'>
              <h3 className="mission-heading">Mission</h3>
              <p className="mission-description">
                Lorem ipsum dolor sit amet. Sed voluptate
                atque et dolor saepe non corporis repudia
                dae. 33 dolorem quasi eum explicabo velit
                ut voluptates aliquam vel voluptatem.
              </p>
            </Col>
            <Col md={6} lg={6} sm={6} className='rossary-img-2'>
              {/* <img src={RossaryImg2} className='rossary-img' alt='rossary-img'/> */}
            </Col>

          </Row>
        </div>









      </Container>



      <div className='contactUs-banner'>
        <Container className='contactUs-banner-container'>
        <h3 className="contactUs-banner-h3">Sed cursus ante dapibus diam</h3>
          <p className="contactUs-banner-p">Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorpr.
            Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Intege
            id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augu. 
          </p>
          <button className="contactUs-banner-button">  Contact us </button>
     

        </Container>

      </div>


      <Container fluid className='saint' style={{background: "white"}}>
      <Row className='saint-row'>
        <Col md={6} lg={6} sm={6} className='homepage-saint-img'>
          
        </Col>

        <Col className='saint-content'>

        <h3 className="saint-name">
                Praesent libero.
            </h3>
            <p className="saint-prayer">
                Pellentesque nibh. Aenean quam. In sceleris
                que sem at dolor. Maecenas mattis. Sed co
                nvallis tristique sem. Proin ut ligula vel nunc 
                egestas porttitor. Morbi lectus risus, iaculis 
                vel, suscipit quis, luctus non, massa. </p>
                <p className="saint-prayer">
                Fusce ac turpis quis ligula lacinia aliquet. 
                Mauris ipsum. Nulla metus metus, ullamcor
                per vel, tincidunt sed, euismod in, nibh. Quis
                que volutpat condimentum velit. 

            </p>

        </Col>
      </Row>
    </Container>



<div className='mary'>


<Container >
  <Row>
    <h1 className='mary-heading'>
    Vestibulum ante ipsum primis 

    </h1>
    <p className='mary-description'>
    faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent
                blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.
    </p>
  </Row>

  <Row>
        <Col className='cards-col' md={4} lg={4} sm={4}>
              <Card className='mary-cards'>
                <Card.Img variant="top" src={MaryImg} alt='mary-img' className='mary-card-img'/>
                <Card.Body className='mary-cards-body'>
                  <Card.Title className='mary-card-title'>Lorem ipsum</Card.Title>
                  <Card.Text className='mary-card-text'>
                  Morbi in ipsum sit amet 
                        pede facilisis laoreet. Do
                        nec lacus nunc, viverra 
                        nec, blandit vel, egestas 
                        et, augue. Vestibulum.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
        </Col>

        <Col className='cards-col home-mobile-cards' md={4} lg={4} sm={4}>
              <Card className='mary-cards'>
                <Card.Img variant="top" src={MaryImg} alt='mary-img' className='mary-card-img'/>
                <Card.Body className='mary-cards-body'>
                  <Card.Title className='mary-card-title'>Lorem ipsum</Card.Title>
                  <Card.Text className='mary-card-text'>
                  Morbi in ipsum sit amet 
                        pede facilisis laoreet. Do
                        nec lacus nunc, viverra 
                        nec, blandit vel, egestas 
                        et, augue. Vestibulum.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
        </Col>

        <Col className='cards-col home-mobile-cards' md={4} lg={4} sm={4}>
              <Card className='mary-cards'>
                <Card.Img variant="top" src={MaryImg} alt='mary-img' className='mary-card-img'/>
                <Card.Body className='mary-cards-body'>
                  <Card.Title className='mary-card-title'>Lorem ipsum</Card.Title>
                  <Card.Text className='mary-card-text'>
                  Morbi in ipsum sit amet 
                        pede facilisis laoreet. Do
                        nec lacus nunc, viverra 
                        nec, blandit vel, egestas 
                        et, augue. Vestibulum.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
        </Col>

      </Row>

</Container>




<ImageComponent 
  name="home-imagebanner"
  Imgbanner={HomeImgBanner}
/>


<div className='carousel-heading'>
  <h1>
  Vestibulum ante ipsum primis 
  </h1>
</div>


<Container className='carousel-container'>

<Carousel />

</Container>





<TextComponent 

name="writings"
title="Praesent libero."
paragraph=" Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer
id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue."

/>







</div>



<div className='home-blue-banner'>
        <Container className='saint-words-blue-banner'>
        <h3 className="blue-banner-content">“Pray as though everything depended on God. Work as though everything depended on you.”</h3>
          <p className="saint-name-1">Saint Augustine</p>

        </Container>

      </div>









<Footer />





    </div>
  )
}

export default Home