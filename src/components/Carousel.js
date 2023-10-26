import React from 'react'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';

import HomeChurchImg1 from "../assests/Images/Rectangle 416.png"
import HomeChurchImg2 from "../assests/Images/Rectangle 423.png"

import '../style/Carousel.css'


function Carousel() {
    const settings = {
        className: "center",
        arrows: true,
        autoplay: true,
        centerMode: true,
        infinite: true,
        centerPadding: "5px",
        slidesToShow: 3,
        speed: 300,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div>
      
          <Slider {...settings}>
              <div>
                  <Card className='home-carousel-cards-1'>
                      <Card.Img variant="top" src={HomeChurchImg1}  />
                  </Card>
              </div>
              <div>
                  <Card className='home-carousel-cards-2'>
                      <Card.Img variant="top" src={HomeChurchImg2} />
                  </Card>
              </div>
              <div>
                  <Card className='home-carousel-cards-1'>
                      <Card.Img variant="top" src={HomeChurchImg1} />
                  </Card>
              </div>
              <div>
                  <Card className='home-carousel-cards-2'>
                      <Card.Img variant="top" src={HomeChurchImg2} />
                  </Card>
              </div>
              <div>
                  <Card className='home-carousel-cards-1'>
                      <Card.Img variant="top" src={HomeChurchImg1} />
                  </Card>
              </div>
              <div>
                  <Card className='home-carousel-cards-2'>
                      <Card.Img variant="top" src={HomeChurchImg2} />
                  </Card>
              </div>
          </Slider>
    </div>
  )
}

export default Carousel