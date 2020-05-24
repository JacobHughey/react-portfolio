import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const socialStyle = {
    textAlign: "center"
}


class Social extends Component {
    render() {
        return (
            <div className="Social" style={socialStyle}>

                    <a href="https://github.com/JacobHughey">
                        <FontAwesomeIcon icon={faGithub}
                        size="2x"
                        color="white"
                        className="mx-4"/>
                    </a>

                    <FontAwesomeIcon icon={faTwitter} size="2x" color="white" className="mx-4" />
                    <FontAwesomeIcon icon={faLinkedin} size="2x" color="white"  className="mx-4" />
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="white"  className="mx-4" />

            </div>
        );
    }
}

export default Social