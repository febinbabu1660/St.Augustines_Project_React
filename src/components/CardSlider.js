import React from 'react'
import React, { Component } from "react";
import Slider from "react-slick";

function CardSlider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
    };
  return (
    <div>
        <h2>Right to Left</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>



        <Container className='card-container'>
          <Row>
            <Col md={4} lg={4}>
              <Card className='History-image-cards'>
                <Card.Img variant="top" src={CardImg} />
              </Card>
            </Col>
            <Col md={4} lg={4} className='mobile-card'>
              <Card>
                <Card.Img variant="top" src={CardImg} />
              </Card>
            </Col>
            <Col md={4} lg={4} className='mobile-card'>
              <Card>
                <Card.Img variant="top" src={CardImg} />
              </Card>
            </Col>
          </Row>
        </Container>





      </div>
  )
}

export default CardSlider