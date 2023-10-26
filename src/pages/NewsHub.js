import React from 'react'
import BannerImg from "../assests/Images/Rectangle 294.png"
import CardImg1 from "../assests/Images/Rectangle 296.png"
import CardImg2 from "../assests/Images/Rectangle 315.png"
import CardImg3 from "../assests/Images/Rectangle 316.png"
import FrthImg from "../assests/Images/Rectangle 346.png"
import FifthImgBanner from "../assests/Images/Rectangle 349.png"
import GridImg1 from "../assests/Images/Rectangle 350.png"
import GridImg2 from "../assests/Images/Rectangle 352.png"
import Hero from '../components/Hero'
import ImageComponent from '../components/ImageComponent'
import NavbarWhite from '../components/NavbarWhite'
import Footer from '../components/Footer'
import '../style/NewsHub.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function NewsHub() {
  return (
    <div>
      <div>


    <NavbarWhite />


        <Hero
          name="hero"
          banner={BannerImg}
          heroText="newshub-baner-text"
        />
      </div>

      <Container>
        <div className='newshub-rectangle'>
          <h3>Welcome to The Augustinians NewsHub</h3>
        </div>
      </Container>

      <div className='newshub-second-content'>
        <h3 >Lorem ipsum dolor sit</h3>
        <Container>
          <Row>
            <Col sm={4} md={4} lg={4}>
              <Card  className='newshub-cards'>
                <Card.Img variant="top" src={CardImg1} alt='card-img' />
                <Card.Body>
                  <div className='newshub-cards-title-div'>
                    <Card.Title className='newshub-card-title'>Class aptent taciti</Card.Title>
                  </div>
                  <Card.Text className='newshub-card-text' >
                    Lorem ipsum dolor sitgh
                    amet, consectetur adyj
                    ipiscing elit. Integer thf
                    nec odio.Praesentr guil
                    libero. Sed cursus ante
                    dapibus diam. Sed nisi.
                    Nulla quis sem atnibh.
                  </Card.Text>
                  <Button className='newshub-read-more'>Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} md={4} lg={4} className='newshub-mobile-cards'>
              <Card className='newshub-cards' >
                <Card.Img variant="top" src={CardImg2} alt='card-img' />
                <Card.Body>
                  <div className='newshub-cards-title-div'>
                    <Card.Title className='newshub-card-title'>Class aptent taciti</Card.Title>
                  </div>
                  <Card.Text className='newshub-card-text'>
                    Lorem ipsum dolor sitgh
                    amet, consectetur adyj
                    ipiscing elit. Integer thf
                    nec odio.Praesentr guil
                    libero. Sed cursus ante
                    dapibus diam. Sed nisi.
                    Nulla quis sem atnibh.
                  </Card.Text>
                  <Button className='newshub-read-more'>Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} md={4} lg={4} className='newshub-mobile-cards'>
              <Card  className='newshub-cards'>
                <Card.Img variant="top" src={CardImg3} alt='card-img' />
                <Card.Body>
                  <div className='newshub-cards-title-div'>
                    <Card.Title className='newshub-card-title'>Class aptent taciti</Card.Title>
                  </div>
                  <Card.Text className='newshub-card-text'>
                    Lorem ipsum dolor sitgh
                    amet, consectetur adyj
                    ipiscing elit. Integer thf
                    nec odio.Praesentr guil
                    libero. Sed cursus ante
                    dapibus diam. Sed nisi.
                    Nulla quis sem atnibh.
                  </Card.Text>
                  <Button className='newshub-read-more'>Read More</Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>



      <div className='newshub-third-section'>

        <Row className='row-content-1'>
          <Col md={6} lg={6} sm={6} className='first-div-row-1'>
            <h4>
              Nulla facilisi. Integer lacinia
            </h4>
            <p>
              Sollicitudin massa. Cras metus. Sed aliquet
              risus a tortor. Integer id quam. Morbi mi.
              Quisque nisl felis, venenatis tristique.
            </p>
          </Col>

          <Col md={3} lg={3} sm={3} className='sub-images-third-section-1'>

          </Col>

          <Col md={3} lg={3} sm={3} className='sub-images-third-section-2'>

          </Col>

        </Row>


        <Row className='row-content-2'>
          <Col md={6} lg={6} sm={6} className='first-div-row-2'>
            <h4>
              Nulla facilisi. Integer lacinia
            </h4>
            <p>
              Sollicitudin massa. Cras metus. Sed aliquet
              risus a tortor. Integer id quam. Morbi mi.
              Quisque nisl felis, venenatis tristique.
            </p>
          </Col>

          <Col md={3} lg={3} sm={3} className='sub-images-third-section-2'>

          </Col>

          <Col md={3} lg={3} sm={3} className='sub-images-third-section-1'>

          </Col>

        </Row>

      </div>



      <Container className='fourth-section'>


        <Row className='row-1-fourth-section'>
          <Col md={6} lg={6}>
            <img src={FrthImg} alt='FourthImg1' />

          </Col>
          <Col md={6} lg={6}>

            <h3>
              Quisque cursus, metus vitae
            </h3>
            <p>Integer lacinia sollicitudin massa. Cras metus.
              Sed aliquet risus a tortor. Integer id quam. Mor
              bi mi. Quisque nisl felis, venenatis tristique, dig
              nissim in, ultrices sit amet, augue. Proin sodales
              libero eget ante. Nulla quam. Aenean laoreet.

            </p>
            <p>Integer lacinia sollicitudin massa. Cras metus.
              Sed aliquet risus a tortor. Integer id quam. Mor
              bi mi. Quisque nisl felis, venenatis tristique, dig
              nissim in, ultrices sit amet, augue. Proin sodales
              libero eget ante. Nulla quam. Aenean laoreet.

            </p>

          </Col>
        </Row>

        <Row className='row-2-fourth-section'>
          <Col md={6} lg={6}>

            <h3>
              Quisque cursus, metus vitae
            </h3>
            <p>Integer lacinia sollicitudin massa. Cras metus.
              Sed aliquet risus a tortor. Integer id quam. Mor
              bi mi. Quisque nisl felis, venenatis tristique, dig
              nissim in, ultrices sit amet, augue. Proin sodales
              libero eget ante. Nulla quam. Aenean laoreet.

            </p>
            <p>Integer lacinia sollicitudin massa. Cras metus.
              Sed aliquet risus a tortor. Integer id quam. Mor
              bi mi. Quisque nisl felis, venenatis tristique, dig
              nissim in, ultrices sit amet, augue. Proin sodales
              libero eget ante. Nulla quam. Aenean laoreet.

            </p>

          </Col>

          <Col md={6} lg={6}>
            <img src={FrthImg} alt='FourthImg1' />

          </Col>
        </Row>

      </Container>




      <div className='newshub-contactUs-banner'>
        <Container>
          <h3>
            Class aptent taciti sociosqu ad
            litora torquent per conubia
          </h3>
          <Button>Contact Us</Button>

        </Container>
      </div>



      <div className='fifth-section'>
        <Container>
          <h3>
            Curabitur tortor. Pellentesque nibh
          </h3>

          <p>The monastic tradition has its earliest traces soon after Augustine's conversion in
            Milan, when he and some friends returned to his native Tagaste, gave away their
            possessions, and began a life of prayer and study as "servants of God".
          </p>
          <p>
            You gather like-minded people to dwell together…We stayed together, and made
            a holy agreement to live together in the future. In search of a place where we
            could best serve you, we made arrangements to return as a group to Africa.
            (Confessions IX, 8)
          </p>


          <ImageComponent

            name="image-banner"
            Imgbanner={FifthImgBanner}
          />


          <p>The monastic tradition has its earliest traces soon after Augustine's conversion in
            Milan, when he and some friends returned to his native Tagaste, gave away their
            possessions, and began a life of prayer and study as "servants of God".
          </p>
          <p>
            You gather like-minded people to dwell together…We stayed together, and made
            a holy agreement to live together in the future. In search of a place where we
            could best serve you, we made arrangements to return as a group to Africa.
            (Confessions IX, 8)
          </p>

        </Container>
      </div>



      <Container fluid className='grid-pics'>
        <Row className='grid-rows-1'>

          <Col md={3} lg={3} className='grid-images'>
            <img src={GridImg1} alt='GridImg1' />
          </Col>
          <Col md={3} lg={3} className='grid-content'>
            <h4>Sed lacinia
            </h4>
            <p>urna non tincidunt
              mattis, tortorneque
              adipiscing diaa curs
              us ipsum antequis
              turpis. Nulla facilisi.</p>
          </Col>

          <Col md={3} lg={3} className='grid-images'>
            <img src={GridImg2} alt='GridImg2' />
          </Col>
          <Col md={3} lg={3} className='grid-content'>
            <h4>Sed lacinia
            </h4>
            <p>urna non tincidunt
              mattis, tortorneque
              adipiscing diaa curs
              us ipsum antequis
              turpis. Nulla facilisi.</p>
          </Col>

        </Row>


        <Row className='grid-rows-2'>

          <Col md={3} lg={3} className='grid-images'>
            <img src={GridImg2} alt='GridImg2' />
          </Col>
          <Col md={3} lg={3} className='grid-content'>
            <h4>Sed lacinia
            </h4>
            <p>urna non tincidunt
              mattis, tortorneque
              adipiscing diaa curs
              us ipsum antequis
              turpis. Nulla facilisi.</p>
          </Col>

          <Col md={3} lg={3} className='grid-images'>
            <img src={GridImg1} alt='GridImg1' />
          </Col>
          <Col md={3} lg={3} className='grid-content'>
            <h4>Sed lacinia
            </h4>
            <p>urna non tincidunt
              mattis, tortorneque
              adipiscing diaa curs
              us ipsum antequis
              turpis. Nulla facilisi.</p>
          </Col>

        </Row>
      </Container>



      <Footer />

    </div>
  )
}

export default NewsHub