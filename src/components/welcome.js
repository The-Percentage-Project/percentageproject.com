import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import '../css/parallax.css';
import '../css/welcome.css';
import Fade from 'react-reveal';
import Parallax from './parallax';

class Welcome extends Component {
  render() {
    const webitems = {
      name : "welcome",
      background: "black",
      backgrounddepth: "0",
      layers: [ 
      {image: require("../public/static/welcome.svg"), depth: "0.2", name: "layer1"},
      {image: require("../public/static/welcome1.svg"), depth: "0.5",  name: "layer2"},
      {image: require("../public/static/welcome2.svg"), depth: "-0.3",  name: "layer3"},
      ]
    }

    const mobileitems = {
      name : "welcome",
      background: "white",
      backgrounddepth: "0",
      layers: [ 
      {image: require("../public/static/welcome-mobile.svg"), depth: "0.2", name: "layer1"},
      ]
    }

    return (
    <div style={{minHeight: "110vh"}}>
        <section id = "welcome">
        <div className= "web-only"> 
          <Parallax items = {webitems}>
            <div className= "namecard">
              <Row>
                <Col md={6} className= "welcome-title">
                <Fade bottom duration= {5000}>
                  <h1>THE PERCENTAGE PROJECT</h1>
                </Fade>
                </Col>
              </Row>
            </div>
          </Parallax>
        </div>
        <div className= "mobile-only"> 
          <Parallax items = {mobileitems}>
            <div className= "namecard">
              <Row>
                <Col md={6} className= "welcome-title">
                <Fade bottom duration= {5000}>
                  <h1>THE PERCENTAGE PROJECT</h1>
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

export default Welcome;
