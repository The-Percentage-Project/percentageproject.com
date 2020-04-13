import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import Parallax from '../parallax';

class DataWelcome extends Component {
  render() {
    const webitems = {
      name : "datawelcome",
      background: "black",
      backgrounddepth: "0",
      layers: [ 
      {image: require("../../public/static/datawelcome.svg"), depth: "0.2", name: "layer1"},
      {image: require("../../public/static/datawelcome1.svg"), depth: "0.2", name: "layer1"},
      ]
    }

    const mobileitems = {
      name : "datawelcome",
      background: "black",
      backgrounddepth: "0",
      layers: [ 
      {image: require("../../public/static/datawelcome-mobile.svg"), depth: "0.2", name: "layer1"},
      ]
    }

    return (
    <div style={{minHeight: "100vh", backgroundColor: "black"}}>
        <section id = "datawelcome">
        <div className= "web-only"> 
          <Parallax items = {webitems}>
            <div className= "namecard">
              <Row>
                <Col md={6} className= "welcome-title">
                <Fade bottom duration= {5000}>
                  <h1>DATA AND RESEARCH</h1>
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
                  <h1>DATA AND RESEARCH</h1>
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

export default DataWelcome;
