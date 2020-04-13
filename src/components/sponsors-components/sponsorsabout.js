import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class SponsorsAbout extends Component {
  
  render() {

    var innerContent=[
        <Col md={3}>
        <Fade bottom duration={5000}>
          <h2>
            More Than Just Numbers.
          </h2>
        </Fade>
        </Col>,
        <Col md={2}></Col>,
        <Col md={7}>
          <p>
            We believe that the stories our data tell 
            are more than just numbers. Our work helps 
            contextualize these stories and bring to light
            the fact that behind each and every number is an
            individual with a story to tell. A special thanks
            to our sponsors for making this all possible.
            <br/><br/>
            If you would like to support our cause, please reach out. 
            We'd love to hear from you. 
          </p>
        </Col>]
    
      
    return (
      <div className="light-container" style={{paddingTop: "40vh", color: "black"}}>            
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

export default SponsorsAbout;
