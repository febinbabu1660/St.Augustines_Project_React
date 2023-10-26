import React from 'react'
import BannerImg from "../assests/Images/Rectangle 249.png"
import Hero from '../components/Hero'
import TextComponent from '../components/TextComponent'
import ImageComponent from '../components/ImageComponent'
import ImgBanner from "../assests/Images/Rectangle 286.png"
import EllipseImg from "../assests/Images/Ellipse 14.svg"
import LineImg from "../assests/Images/Rectangle 329.svg"
import Imagetext from '../components/Imagetext'
import ImgContentleft from "../assests/Images/Rectangle 330.png"
import ImgContentRight from "../assests/Images/Rectangle 332.png"
import WordBanner from '../components/WordBanner'
import NavbarWhite from '../components/NavbarWhite'
import Footer from '../components/Footer'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImg from "../assests/Images/Rectangle 335.png"

import '../style/History.css'



function History() {
  return (

    <div>

      <NavbarWhite />

      <Hero
        name="hero"
        banner={BannerImg}
        heroText="history-banner-text"
        heading="History of the Order"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing Integer nec odio. Praesent libero. Sed cursus ante bus diam. Sed nisi. "
        btn_name="Learn more"
      />



      <TextComponent

        name="history-text-content1"
        title="History of the Order"
        paragraph="Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi 
        lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia 
        Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia "

      />





      <Row className='history-text-content-2-row' >
        <Col md={2} lg={2} className='history-side-points'>

          {/* <Row>
          <img src={EllipseImg} className="ellipse mt-3" />



          </Row>
       
          <Row>
          <img src={EllipseImg} className="ellipse mt-3" />
          <img src={LineImg} className="vertical-line" />
          </Row>
       
          <Row>
          <img src={EllipseImg} className="ellipse mt-3" />
          </Row>
        */}
        </Col>
        <Col md={10} lg={10}>
          <Row>
            <TextComponent

              name="history-text-content2"
              title="Augustine's Monasticism"
              paragraph="The monastic tradition has its earliest traces soon after Augustine's conversion in
                          Milan, when he and some friends returned to his native Tagaste, gave away their
                          possessions, and began a life of prayer and study as 'servants of God'.

                          You gather like-minded people to dwell together…We stayed together, and made
                          a holy agreement to live together in the future.  In search of a place where we 
                          could best serve you, we made arrangements to return as a group to Africa. 
                          (Confessions IX, 8)."


            />

          </Row>
          <Row>

            <TextComponent

              name="history-text-content2"
              title="Thirteenth Century"
              paragraph="On December 16 of the year 1243, Pope Innocent IV issued the bull Incumbit nobis
                          calling on several eremitical communities in Tuscany to unite
                          themselves into a
                          single religious order with the Rule and way of life of St.
                          Augustine.

                          The following March 1244, the hermits held a founding chapter in Rome under the guidance of Cardinal Richard Annibaldi and put the union into effect. Thus began the history of the Order of St. Augustine.
                          "

            />
          </Row>
          <Row>


            <TextComponent

              name="history-text-content2"
              title="The Grand Union of 1256"
              paragraph="Further development took place on 9 April 1256 with the bull Licet Ecclesiae 
                          catholicae of Pope Alexander IV. The pope confirmed the integration of the 
                          Hermits of John the Good (Rule of St. Augustine, 1225), the Hermits of St. William 
                          (Rule of St. Benedict), the Hermits of Brettino (Rule of St. Augustine, 1228), the 
                          Hermits of Monte Favale . "

            />
          </Row>
        </Col>
      </Row>




      <ImageComponent
        name="Img-div"
        Imgbanner={ImgBanner}

      />


      <Imagetext
        imageandtext="imageandtext"
        ImgContentleft={ImgContentleft}
        imgcontent="imgcontent"
        heading="Analecta Augustiniana"
        paragraph="The Institutum Historicum Augustinianum (IHA) is 
                    cultural organization of the Order of St Augustine, 
                    and it has an international character."


        ImgContentRight={ImgContentRight}
        headingright="Augustinian Historical Institute"
        imgcontentright="imgcontentright"
      />



      <WordBanner
        word_banner="word-banner"
        inner_banner="inner-banner"
        contents=" “God is always trying to give good things to us, but our 
                            hands are too full to receive them.” "
        saint_name="― St. Augustine, City of God"
      />


      <div>

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







      <Footer />





    </div>













  )
}

export default History