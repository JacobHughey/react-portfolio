import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Jumbo from './Jumbo.js'
import Sidenav from './Sidenav.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './Cards.js'
import Footer from './Footer.js'
import ContactModal from './ContactModal.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      isNavOpen: false,
      isContactOpen: false
    }
    this.handleNavToggle = this.handleNavToggle.bind(this)
    this.handleContactToggle = this.handleContactToggle.bind(this)
    this.goHome = this.goHome.bind(this)
  }
  handleNavToggle() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }
  handleContactToggle() {
    this.setState({
      isContactOpen: !this.state.isContactOpen
    })
  }
    goHome() {
      this.setState({
        isNavOpen: false,
        isContactOpen: false
      })
    }
  

  render() {
    return (
      <div className="App">
        <Container fluid>
        <FontAwesomeIcon icon={faBars} size="2x" className="my-4" onClick={this.handleNavToggle}></FontAwesomeIcon>
          { this.state.isNavOpen === true ? <Sidenav navToggle={this.handleNavToggle} goHome={this.goHome} contactToggle={this.handleContactToggle}/> : null }
          { this.state.isContactOpen === true ? <ContactModal parentMethod={this.handleContactToggle}/> : null }
          { this.state.isContactOpen === false ? <Jumbo parentMethod={this.handleContactToggle} /> : null }
          { this.state.isContactOpen === false ? <Cards /> : null }
          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
