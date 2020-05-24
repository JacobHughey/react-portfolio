import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'



class Work extends Component {
    render() {
        return (
            <div className="Work">
                <Card className="mt-4">
                    <Card.Img variant="top" className="img-fluid" src={this.props.img}></Card.Img>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.text}</Card.Text>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text><a href={this.props.link}>View here</a></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Work