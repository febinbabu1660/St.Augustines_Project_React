import React from 'react'
import BannerImg from "../assests/Images/Rectangle 484.png"
import MapImg from "../assests/Images/Rectangle 479.png"
import CardImg1 from "../assests/Images/Ellipse 20.png"
import CardImg2 from "../assests/Images/Ellipse 21.png"
import CardImg3 from "../assests/Images/Ellipse 22.png"
import StarImg from "../assests/Images/Group 912.svg"
import Hero from '../components/Hero'
import TextComponent from '../components/TextComponent'
import NavbarWhite from '../components/NavbarWhite'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../style/ContactUs.css'

function Service() {
  return (
    <div>
      <div>
        <NavbarWhite />
        <Hero
          name="hero"
          banner={BannerImg}
          heroText="contactus-banner"
          heading="Quo rerum sint et esse numquam dignissimos."
          paragraph="Vel autem magni vel sequi aliquid eos consequatur quia "
          btn_name="Contact US"
        />
      </div>


      <div className='second-section '>

        <Container>
          <h3>
            Lorem ipsum dolor sit
          </h3>
          <p className="second-section-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
            nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. </p>


          <Row className='first-row'>

            <Col md={6} lg={6}>
              <div className='first-container'>
                <div className='column-1'>
                  <div className='one'>1</div>
                </div>

                <div className="column-2">
                  <p className="first-container-p">Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabituriol.</p>
                </div>
              </div>

            </Col>

            <Col md={6} lg={6}>

              <div className="second-container">
                <div className="column-1">
                  <div className="two">2</div>

                </div>
                <div className="column-2">
                  <p className="first-container-p">Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabituriol.</p>
                </div>
              </div>

            </Col>

          </Row>

          <Row className='second-row'>

            <Col md={6} lg={6}>
              <div className='first-container-row-2'>
                <div className='column-1'>
                  <div className='three'>3</div>
                </div>

                <div className="column-2">
                  <p className="first-container-row-2-p">Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabituriol.</p>
                </div>
              </div>

            </Col>

            <Col md={6} lg={6}>

              <div className="second-container-row-2">
                <div className="column-1">
                  <div className="four">4</div>

                </div>
                <div className="column-2">
                  <p className="second-container-row-2-p">Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabituriol.</p>
                </div>
              </div>

            </Col>

          </Row>



        </Container>

      </div>




      <div className='contactus-third-section'>

        <Container>
          <div className='contactus-form-div'>
            <h2>Get In Touch With us</h2>



            <Form>
              <Row>
                <Col>
                  <Form.Control type="text" placeholder="First Name" required className='contactus-fname' />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Last Name" required className='contactus-lname' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control type="email" placeholder="Work Email" required className='contactus-email' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="contactus-phone-input" >
                    <div className="contactus-input-group">
                      <div className="contactus-country-code">
                        <Form.Select className='contactus-select'>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+1">🇨🇦 +1</option>
                          <option value="+61">🇦🇺 +61</option>
                        </Form.Select>
                      </div>
                      <div className="contactus-phone-number">
                        <Form.Control type="tel" placeholder="Phone Number" required className='countactus-phonenumber' />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>


              <Row>
                <Col>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here..." className='contactus-textarea' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className='contactus-btn' type="submit">Send</Button>
                </Col>
              </Row>
            </Form>


            <div className="map">
              <img src={MapImg} alt="MapImg" />
            </div>


          </div>
        </Container>

      </div>




      <div className='lastSection'>
        <Container>


          <TextComponent

            name="contactus-last-content"
            title="Lorem ipsum dolor sit"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
                        nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."

          />


          <Row>


            <Col md={4} lg={4}>
              <Card className="contactus-last-cards">
                <Card.Body className="contactus-last-cards-body">
                  <Card.Img src={CardImg1} alt='CardImg' className='contactus-last-card-img' />
                  <div className='contactus-last-card-content'>
                    <Card.Title className="contactus-last-cards-title">Evan Thomas</Card.Title>
                    <img src={StarImg} alt="starImg" className='star-img' />
                    <Card.Text className="contactus-last-cards-text">
                      Sed lacinia, urna non tincidunt mattis,
                      tortor neque adipiscing diam, a curs
                      us ipsum ante quis turpis.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>



            <Col md={4} lg={4} className='mobile-cards-contactus'>
              <Card className="contactus-last-cards">
                <Card.Body className="contactus-last-cards-body">
                  <Card.Img src={CardImg2} alt='CardImg' className='contactus-last-card-img' />
                  <div className='contactus-last-card-content'>
                    <Card.Title className="contactus-last-cards-title">Chris Jo</Card.Title>
                    <img src={StarImg} alt="starImg" className='star-img' />
                    <Card.Text className="contactus-last-cards-text">
                      Sed lacinia, urna non tincidunt mattis,
                      tortor neque adipiscing diam, a curs
                      us ipsum ante quis turpis.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>



            <Col md={4} lg={4} className='mobile-cards-contactus'>
              <Card className="contactus-last-cards">
                <Card.Body className="contactus-last-cards-body">
                  <Card.Img src={CardImg3} alt='CardImg' className='contactus-last-card-img' />
                  <div className='contactus-last-card-content'>
                    <Card.Title className="contactus-last-cards-title">Emily Zara</Card.Title>
                    <img src={StarImg} alt="starImg" className='star-img' />
                    <Card.Text className="contactus-last-cards-text" style={{ color: "white" }}>
                      Sed lacinia, urna non tincidunt mattis,
                      tortor neque adipiscing diam, a curs
                      us ipsum ante quis turpis.
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>





          </Row>

        </Container>


      </div>
















      <Footer />



    </div>
  )
}

export default Service