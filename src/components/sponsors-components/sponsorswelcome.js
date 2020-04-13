import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from '../parallax';

class SponsorsWelcome extends Component {
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
        <Parallax items = {items}>
        <div className= "namecard">
        <Row>
          <Col md={6} className= "welcome-title">
          <Fade bottom duration= {5000}>
            <h1>SPONSORS</h1>
          </Fade>
          </Col>
          <Col md={6} className= "welcome-title">
          <Fade bottom duration= {5000}>
            <div>
              <h1 style={{color: "black"}}>DONATE</h1>
              <h3 style={{color: "black"}}>Please support us at link@link.com</h3>
            </div>
          </Fade>
          </Col>
        </Row>
        </div>
        </Parallax>
        </section>
    </div>
    );
    }
  }

export default SponsorsWelcome;
