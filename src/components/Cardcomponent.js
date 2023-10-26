import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImg from "../assests/Images/Rectangle 265.png"











function Cardcomponent() {
  return (
    <>
    <div>

              <Container className='card-container'>
                  <Row>
                      <Col md={4} lg={4}>
                          <Card>
                              <Card.Img variant="top" src={CardImg} />
                              {/* <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                              </Card.Body> */}
                          </Card>
                      </Col>
                      <Col md={4} lg={4}>
                          <Card>
                          <Card.Img variant="top" src={CardImg} />
                              {/* <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                              </Card.Body> */}
                          </Card>
                      </Col>
                      <Col md={4} lg={4}>
                          <Card>
                          <Card.Img variant="top" src={CardImg} />
                              {/* <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                              </Card.Body> */}
                          </Card>
                      </Col>
                  </Row>
              </Container>





    





    </div>



    </>
  )
}

export default Cardcomponent