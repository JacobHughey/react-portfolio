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

                    <a href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter}
                        size="2x"
                        color="white"
                        className="mx-4" />
                    </a>
                    <a href="https://linkedin.com/">
                        <FontAwesomeIcon icon={faLinkedin}
                        size="2x"
                        color="white"
                        className="mx-4" />
                    </a>
                    <a href="https://facebook.com/">
                        <FontAwesomeIcon icon={faFacebookSquare}
                        size="2x"
                        color="white" 
                        className="mx-4" />
                    </a>

            </div>
        );
    }
}

export default Social