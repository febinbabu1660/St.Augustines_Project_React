import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/Imagetext.css'

function Imagetext(props) {
  return (
    <>

          <div className={props.imageandtext}>

              <Container fluid>

                  <Row className='left-row'>
                      <Col md={5} lg={5} className='left-column'>
                        <div className='image-div-left'>
                        <img src={props.ImgContentleft} alt='ImageContentLeft' />
                        </div>
                      </Col>
                      <Col md={7} lg={7}>
                        <div className={props.imgcontent}>
                            <h2>
                                {props.heading}
                            </h2>

                            <p>
                                {props.paragraph}
                            </p>
                            <p>
                                {props.paragraph}
                            </p>
                            <p>
                                {props.paragraph}
                            </p>

                            <p>
                                {props.paragraph}
                            </p>

                        </div>
                      </Col>
                  </Row>

                  <Row>
                  <Col md={7} lg={7}>
                        <div className={props.imgcontentright}>
                            <h2>
                                {props.headingright}
                            </h2>

                            <p>
                                {props.paragraph}
                            </p>
                            <p>
                                {props.paragraph}
                            </p>
                            <p>
                                {props.paragraph}
                            </p>

                            <p>
                                {props.paragraph}
                            </p>

                        </div>
                      </Col>
                      <Col md={5} lg={5} className='right-column'>
                        <div className='image-div-right'>
                        <img src={props.ImgContentRight} alt='ImageContentRight' />
                        </div>
                      </Col>
                  </Row>

              </Container>

          </div>






    </>
  )
}

export default Imagetext