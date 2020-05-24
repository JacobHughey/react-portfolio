import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import cat from '../img/cat-square1.jpg'
import './Jumbo.css'
import Social from './Social.js'


class Jumbo extends Component {
    render() {
        return (
            <div className="Jumbo text-white">
                <Jumbotron fluid className="jumboImg text-center">
                    <Container>
                        <Row>
                            <Col>
                              
                                <div className="mt-4 jumboContact">
                                    <img src={cat} alt="cat pic" className="rounded-circle mt-4" />
                                    <h2 className="font-weight-bold">@jacobthewebdev</h2>
                                    <p className="mb-4 lead font-weight-bold">Web developer. I design, create, and deploy beautiful web applications. Love what I do.</p>
                                    <Social />
                                    <br />
                                    <Button variant="primary" size="lg" className="mt-4" onClick={this.props.parentMethod}>Let's Chat</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Jumbo;