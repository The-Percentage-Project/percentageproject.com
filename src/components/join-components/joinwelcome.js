import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from '../parallax';
import {Button} from 'react-bootstrap';

class JoinWelcome extends Component {
  render() {
    const items = {
      name : "sponsorswelcome",
      background: "black",
      backgrounddepth: "0",
      layers: [ 
      {image: require("../../public/static/sponsorswelcome.svg"), depth: "0.05", name: "layer1"},

      ]
    }

    return (
    <div style={{minHeight: "110vh", backgroundColor: "black"}}>
        <section id = "sponsorswelcome">
        <div>
          <Parallax items = {items}>
          <div className= "namecard">
          <Row>
            <Col md={6} className= "welcome-title web-only">
            <Fade bottom duration= {5000}>
              <h1>ABOUT US</h1>
            </Fade>
            </Col>
            <Col md={6} className= "welcome-title mobile-only">
            <Fade bottom duration= {5000}>
              <h1 style={{color: "rgba(0, 0, 0, 0.3)"}}><b>ABOUT US</b></h1>
            </Fade>
            </Col>
            <Col md={6} className= "welcome-title">
            <Fade bottom duration= {5000}>
              <div>
                <h1 style={{color: "black"}}>JOIN</h1>
                <a href="https://mailchi.mp/fee20591b155/thepercentageproject_emailsignup">
                  <Button variant="outline-dark" style={{marginTop: "10px", marginBottom: "5px"}}> 
                  <h4>Join Our Newsletter</h4>
                  </Button>
                </a><br/>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScOrwCpGGRQuhM52twhyQI_iiupSD04MzQbLpdJR2VeXyag7w/viewform?usp=sf_link">
                  <Button variant="outline-dark" style={{marginTop: "5px", marginBottom: "10px"}}> 
                  <h4>Be a Campus Director</h4>
                  </Button>
                </a>
              </div>
            </Fade>
            </Col>
          </Row>
          </div>
        </Parallax>
        </div>
        </section>
    </div>
    );
    }
  }

export default JoinWelcome;
