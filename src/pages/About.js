import React from 'react'
import ImageComponent from '../components/ImageComponent'
import AbtImgBanner from "../assests/Images/Rectangle 443.png"
import PriestImg from "../assests/Images/Rectangle 447.png"
import AbtImg1 from "../assests/Images/Rectangle 192.png"
import AbtImg2 from "../assests/Images/Rectangle 193.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../style/About.css'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'

function About() {
  return (
    <div>

          <Navbar2 />
            

          <Row className="aboutus-row-banner">
                <Col md={6} lg={6} className="aboutus-banner-column-1">
                    <div className="aboutus-banner-content">
                        <p className="sname">The Order of Saint Augustine</p>
                        <p className="s-words">Lorem ipsum dolor sit amet. Id maxime totam sitds </p>
                        <div className="about-input-group">
                            <input type="text" id="email" className="about-input-form-control" placeholder="Enter Email address" />
                            <Button type="submit"  className="about-input-btn-login">Login</Button>
                        </div>
                        
                    </div>
                </Col>

                <Col md={4} lg={4} className='about-banner-col-2'>
                    <img src={AbtImg1} alt='about-img-1'  className="aboutus-banner-second-image"/>
                </Col>

                <Col m={2} lg={2} className='mobile-cards' >
                  <img src={AbtImg2} alt='about-img-2' className="aboutus-banner-third-image"/>
                </Col>

            </Row>







      <div className='he-is-risen-banner'>

        <Row>
          <Col md={5} lg={5}>


          </Col>
          <Col md={7} lg={7}>

            <div className='second-banner-content'>
              <h3 className="follower">We Are Follower of </h3>
              <h3 className="jesus">Jesus Christ!</h3>
              <p className="hir-content-1">The Order of St. Augustine, or Augustinian Order,fundamentally
                based upon the teachings of Jesus Christ andlater of Aurelius
                Augustine, the Bishop of Hippo (354 - 430 A.D.), was founded to
                live and promote the spirit of community as lived by the first
                Christian communities.</p>
              <p className="hir-content-2">
                voluptates consequuntur? Unde impedit et quibusd doloribus aut quae minima quo dolores
                quaerat ut dignissimos Repejk
              </p>
              <p className="hir-content-3">
                est voluptatem itaque. Non doloribus amet quo eligendi numquam eos sunt molestiae ut
                obcaecati repellendus ut officiis ipsam.
              </p>
            </div>

          </Col>
        </Row>

      </div>


      <Container className='saint-rules'>

        <div>

        <h3 className="rule-heading">
                From the Rule of St. Augustine:
            </h3>

            <p className="rule1">
                The main purpose for your having come together is to live harmoniously in your house, intent
                upon God, with one
                heart and one soul <span className="chapters"> (Acts 4:32)</span>.
            </p>
           
            <p className="rule2">
                Therefore call nothing your own, but let everything be yours in common. Food and clothing
                shall be distributed to
                each of you by your superior, not equally to all, for all do not enjoy equal health, but
                rather according to each one’s
                need. For so you read in the Acts of the Apostles that “they had all things in common, and
                each was given what
                he needed” <span className="chapters">(Acts 4:32, 35)</span> . </p>

        </div>

      </Container>






      <Container fluid className='explore-sections' style={{padding:"0"}}>

          <Row className='row-1'>
            <Col className='where-we-are' md={6} lg={6}>
                <h3>
                  Where we are  
                </h3>  
                <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua
                      odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                      Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                </p>
                <Button className="aboutus-learn-more" role="button">Learn More</Button>
            </Col>      
            <Col className='church-img' md={6} lg={6}>

            </Col>
          </Row>


          <Row className='row-2'>

            <Col className='saint-img' md={6} lg={6} >

            </Col>

            <Col className='family' md={6} lg={6}>
            <h3>
                    The Augustinian Family
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                </p>
                <Button className="aboutus-learn-more-1" role="button">Learn More</Button>
            </Col>


          </Row>



          <Row className='row-3'>
            <Col className='our-links' md={6} lg={6}>
                <h3>
                Our Links 
                </h3>  
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                    Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                </p>
                <Button className="aboutus-learn-more" role="button">Learn More</Button>
            </Col>      
            <Col className='church-img-1' md={6} lg={6}>

            </Col>
          </Row>




      </Container>





        <Container className='video-img'>
            <h3>
            Lorem ipsum dolor sit amet.
            </h3>
            <div className='video-thumbnail'>

              <ImageComponent 

                name="about-page-img"
                Imgbanner={AbtImgBanner}


              />
            </div>
        </Container>



      <Container fluid className='prayer'>
        <Row>
          <Col md={6} lg={6}>
            <img src={PriestImg} alt='priest-img' />
          </Col>
          <Col md={6} lg={6}>
            <h3>Sed venenatis a massa vel fringilla. </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut pellentesque tellus. Nulla eu
              ante ut
              nisl placerat tincidunt. In convallis nunc nibh, sit amet ornare justo suscipit sit amet. Duis non
              enim
              quis enim accumsan commodo ac sed metus.
            </p>
            <p>
              Duis eleifend hendrerit nibh eget consectetur. Suspendisse
              tristique leo justo, sit amet tincidunt sapien tristique sed.
              Etiam porta facilisis libero, id posuere felis iaculis nec. Nunc
              luctus ipsum quis rhoncus molestie. Nam libero nunc, sagittis
              vel ante non, convallis dictum est. Nullam fermentum erat in
              sapien sollicitudin varius ut ut urna.
            </p>

            <Button>
              Learn more
            </Button>
          </Col>

        </Row>
      </Container>


      <Container className='father-imgs'>
      
      <Row>
        <Col>
          <div className='last-column-image'>
          <h3>Vivamus laoreet </h3>
          <p>magna a viverra iaculis, ex neque
              mattis leo, eget venenatis ipsum
              risus quis metus. Sed suscipit nisi
              quis urna molestie, nec condime
              ntum eros mattis. Cras ornare,
              elit a eleifend vehicula, 
          </p>
          </div>
        </Col>
        
        <Col className='mobile-card'>
          <div className='last-column-image'>
          <h3>Vivamus laoreet </h3>
          <p>magna a viverra iaculis, ex neque
              mattis leo, eget venenatis ipsum
              risus quis metus. Sed suscipit nisi
              quis urna molestie, nec condime
              ntum eros mattis. Cras ornare,
              elit a eleifend vehicula, 
          </p>
          </div>
        </Col>
        
        <Col className='mobile-card'>
          <div className='last-column-image'>
          <h3>Vivamus laoreet </h3>
          <p>magna a viverra iaculis, ex neque
              mattis leo, eget venenatis ipsum
              risus quis metus. Sed suscipit nisi
              quis urna molestie, nec condime
              ntum eros mattis. Cras ornare,
              elit a eleifend vehicula, 
          </p>
          </div>
        </Col>
        
      </Row>
    </Container>













    <Footer />
        
    </div>
  )
}

export default About