import React, { Component } from 'react'
import './Sidenav.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Sidenav extends Component {



  render() {
    return (
      <div className="Sidenav">
          <ul>
              <li><a href="#" className="closebtn" onClick={this.props.navToggle}>&times;</a></li>
              <li><a href="#" className="my-4 mr-4">Home</a></li>
              <li><a href="#" className="my-4 mr-4" onClick={this.props.contactToggle}>Contact</a></li>
              <li><a href="#" className="my-4 mr-4">Work</a></li>
          </ul>
      </div>
    );
  }
}

export default Sidenav