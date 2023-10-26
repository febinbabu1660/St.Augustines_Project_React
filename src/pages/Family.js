import React from 'react'
import Hero from '../components/Hero'
import BannerImg from "../assests/Images/Rectangle 209.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/Family.css'
import ChurchIcon from "../assests/Images/Group 613.svg"
import CrossImg from "../assests/Images/Rectangle 214.png"
import FCardImg1 from "../assests/Images/Vector-1.svg"
import FCardImg2 from "../assests/Images/Vector-2.svg"
import FCardImg3 from "../assests/Images/Vector-3.svg"
import TextComponent from '../components/TextComponent';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';


function Family() {
  return (
    <div>

      <Navbar2 />
      <Hero
        name="hero"
        banner={BannerImg}
        heroText="family-banner-content"
        heading="The Augustinian Family"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing
            Integer nec odio. Praesent libero. Sed cursus ante
            bus diam. Sed nisi. "
        btn_name="More"
      />


      <Container  className="family-second-content">
        <Row>
          <Col md={7} lg={7}>
            <h3> Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
              cursus ante dapi bus diam. Sed nisi. Nulla quis sem at nibh elementum
            </p>
          </Col>

          <Col md={1} lg={1} className='family-church-icon-col'>
            <img src={ChurchIcon} alt='church-icon' className='church-icon' />
          </Col>

          <Col md={3} lg={3} className="family-second-content-church-1">

            <h1>
              Lorem ipsum
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent
            </p>


          </Col>


        </Row>
        <Row>
          <Col md={7} lg={7}>
            <p className='family-second-content-p-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
              cursus ante dapi bus diam. Sed nisi. Nulla quis sem at nibh elementum
            </p>
          </Col>

          <Col md={1} lg={1} className='family-church-icon-col'>
            <img src={ChurchIcon} alt='church-icon' className='church-icon' />
          </Col>

          <Col md={3} lg={3} className="family-second-content-church-1">

            <h1>
              Lorem ipsum
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent
            </p>


          </Col>


        </Row>





      </Container>



      <Container className='family-third-content' >
        <Row className='family-third-contentrow-1'>
          <Col md={8} lg={8} >
            <div className='family-third-red-div'>
              <h1>
                Lorem Ipsum dolor
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                cursus ante dapi bus diam. Sed nisi. Nulla quis sem at nibh elementum
              </p>
            </div>
          </Col>

          <Col md={4} lg={4} >
            <img src={CrossImg} alt='cross-img' className='cross-img' />

          </Col>
        </Row>

        <Row className='family-third-contentrow-2'>
          <Col md={4} lg={4} >
            <img src={CrossImg} alt='cross-img' className='cross-img' />
          </Col>
          <Col md={8} lg={8} >
            <div className='family-third-blue-div'>
              <h1>
                Lorem Ipsum dolor
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                cursus ante dapi bus diam. Sed nisi. Nulla quis sem at nibh elementum
              </p>
            </div>
          </Col>


        </Row>
      </Container>






      <Container className='family-last-content'>

        <TextComponent
          name="details"
          title="The Order of Saint Augustine"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
        massa. Vestibulum lacinia arcu eget nulla."
        />

      </Container>

      <Container>
        <div className='family-cards'>


          <Row>


            <Col md={4} lg={4}>
              <Card className='family-card'>
                <Card.Img variant="top" src={FCardImg1} className='family-card-img' alt='family-card-img' />
                <Card.Body className='family-card-body'>
                  <Card.Title className='family-card-title'>Lorem ipsum</Card.Title>
                  <Card.Text className='family-card-text'>
                    Friars, whether professed or novices,
                    who are members of the various
                    Circumscriptions of the Order.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4}>
              <Card className='family-card'>
                <Card.Img variant="top" src={FCardImg2} className='family-card-img' alt='family-card-img' />
                <Card.Body className='family-card-body'>
                  <Card.Title className='family-card-title'>Lorem ipsum</Card.Title>
                  <Card.Text className='family-card-text'>
                    Friars, whether professed or novices,
                    who are members of the various
                    Circumscriptions of the Order.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4}>
              <Card className='family-card'>
                <Card.Img variant="top" src={FCardImg3} className='family-card-img' alt='family-card-img' />
                <Card.Body className='family-card-body'>
                  <Card.Title className='family-card-title'>Lorem ipsum</Card.Title>
                  <Card.Text className='family-card-text'>
                    Friars, whether professed or novices,
                    who are members of the various
                    Circumscriptions of the Order.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>


          </Row>









        </div>

      </Container>

      <Container style={{marginBottom:"4%"}}>

      <div className="form-template">
      <p className="form-heading">
                If interested in becoming a part of our family, please fill out the form below to get started!
            </p>
        <div className="form-div">
          <div className="input-field">
            <input type="text" className="input" placeholder="Name" />
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="input-field">
            <input type="password" className="input" placeholder="Password" />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="input-field">
            <input type="submit" className="Submit" value="LOGIN" />
          </div>
        </div>
      </div>

      </Container>

      <Footer />


    </div>
  )
}

export default Family