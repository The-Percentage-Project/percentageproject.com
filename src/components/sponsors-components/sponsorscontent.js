import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class SponsorsContent extends Component {
  
  render() {

    var innerContent=[
        <Col md={3}>
        <Fade bottom duration={5000}>
          <h2>
            Our Sponsors
          </h2>
        </Fade>
        </Col>,
        <Col md={2}></Col>,
        <Col md={7}>
          <p>
          [Sponsors here]
          </p>
        </Col>]
    
      
    return (
      <div className="light-container" style={{paddingTop: "40vh", paddingBottom: "10%"}}>            
        <div className= "mobile-only">
        <Row>
          <div className= "banner">
            {innerContent}
          </div>
        </Row>
        </div>

        <div className= "web-only">
        <Row>
            {innerContent}
        </Row>
        </div>
      </div>
    );
  }
}

export default SponsorsContent;
