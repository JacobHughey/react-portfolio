import React, { Component } from 'react';


import Card from 'react-bootstrap/Card'

// import Col from 'react-bootstrap/Col'



class SingleCard extends Component {
    render() {
        return (
            <div className="SingleCard">
                <Card className="mt-4">
                    <Card.Img variant="top" className="img-fluid" src={this.props.img}></Card.Img>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.text}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default SingleCard