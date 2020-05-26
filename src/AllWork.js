import React, { Component } from 'react'
import Work from './Work.js'
import projectsData from './projectsData.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



class AllWork extends Component {
    render() {
        return (
            <div className="Work">
                <h1 className="text-center my-4">Projects:</h1>
                <Container>
                    <Row>


                        {
                            projectsData.map((item, i) => {
                                return (

                                    <Col sm={6}>
                                        <Work
                                            img={item.img}
                                            title={item.title}
                                            text={item.text}
                                            description={item.description}
                                            link={item.link}
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

export default AllWork