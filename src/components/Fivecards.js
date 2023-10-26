import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/Fivecards.css'
import CardImg from "../assests/Images/Rectangle 155.png"
import CardImg2 from "../assests/Images/Rectangle 158.png"


const CardData = [

    {
        id: "1",
        image: require("../assests/Images/Rectangle 155.png"),
        title: "North America",
        text: "Lorem ipsum dolor sit amet. Vel velit officiis est ducimus itaque eos nihil doloremque non sint cumque et modi fugit ut reiciendis omnis qui voluptate error."
    },
    {
        id: "2",
        image: {CardImg},
        title: "Latin America",
        text: "Lorem ipsum dolor sit amet. Vel velit officiis est ducimus itaque eos nihil doloremque non sint cumque et modi fugit ut reiciendis omnis qui voluptate error."
    },
    {
        id: "3",
        image: {CardImg},
        title: "Asia Pacific",
        text: "Lorem ipsum dolor sit amet. Vel velit officiis est ducimus itaque eos nihil doloremque non sint cumque et modi fugit ut reiciendis omnis qui voluptate error."
    }


]

const CardData2 = [

    {
        id : "1",
        title:"Europe",
        text:"Lorem ipsum dolor sit amet. Vel velit officiis est ducimus itaque eos nihil doloremque non sint cumque et modi fugit ut reiciendis omnis qui voluptate error."
    },
    {
        id : "2",
        title:"Africa",
        text:"Lorem ipsum dolor sit amet. Vel velit officiis est ducimus itaque eos nihil doloremque non sint cumque et modi fugit ut reiciendis omnis qui voluptate error."
    }

]

function Fivecards() {
    return (

        <div className='Cards-div'>
            <Container fluid>
              
                <Row>

                    {CardData.map((cardContent) => {
                        return (
                            <Col md={4} lg={4} key={cardContent.id} className='cards'>
                               
                               { cardContent.id === '2' ? (
                                    <div >
                                        <Card className='card'>
                                            <Card.Img variant="top" src={CardImg} alt='card-img' className='card-img'/>
                                            <Card.Body className='card-region-2'>
                                                <Card.Title className='where-card-title-2' >{cardContent.title}</Card.Title>
                                                <Card.Text className='where-card-text'>
                                                    {cardContent.text}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                               ) : (
                                        <div>
                                            <Card className='card'>
                                                <Card.Img variant="top" src={CardImg} alt='card-img' />
                                                <Card.Body className='card-region-1'>
                                                    <Card.Title className='where-card-title-2' >{cardContent.title}</Card.Title>
                                                    <Card.Text className='where-card-text'>
                                                        {cardContent.text}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>

                               )

                               }
                               
                               
                                
                            </Col>
                        );
                    })


                    }


                </Row>
            </Container>


            <Container fluid className='second-cards'>
                <Row >

                    {
                        CardData2.map((cardcontent2) => {
                            return (
                                <Col md={6} lg={6} key={cardcontent2.id} className='region-2'>
                                <Card className='card'>
                                    <Card.Body className='card2'>
                                        <Card.Title className='where-card-title'>{cardcontent2.title}</Card.Title>
                                        <Card.Img variant="top" src={CardImg2} className='card-img-top2' />
                                        <Card.Text className='where-card-text'>
                                           {cardcontent2.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Fivecards