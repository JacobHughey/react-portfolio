import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
// import code from '../img/code.jpg'
import cardData from './cardData.js'
// import Col from 'react-bootstrap/Col'
import SingleCard from './SingleCard.js'



class Cards extends Component {
    render() {
        return (
            <div className="Cards">
                <Container>
                    <Row>
                        {
                            cardData.map((item, i) => {
                                return (

                                    <Col sm={6}>
                                        <SingleCard
                                            img={item.img}
                                            title={item.title}
                                            text={item.text}
                                        />
                                    </Col>

                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cards;

