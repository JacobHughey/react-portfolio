import React, { Component } from 'react'
import Social from './Social.js'

const footerStyle = {
    height: "200px",
    backgroundColor: "black"
}

class Footer extends Component {
    render() {
      return (
        <div className="Footer text-center mt-4 pt-4" style={footerStyle}>
            <br />
            <Social/>
            <br />

            <br />
            <p className="text-center text-white mt-4">All rights reserved 2020</p>
        </div>
      );
    }
  }
  
  export default Footer