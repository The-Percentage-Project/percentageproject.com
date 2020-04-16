import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';
import Fade from 'react-reveal';

class DataReport extends Component {
  
  render() {

    var innerContent=[
        <Col md={2}>
        <Fade bottom duration={5000}>
          <h2>
            Report
          </h2>
        </Fade>
        </Col>,
        <Col md={1}></Col>,
        <Col md={9}>
          <h4>
            Interested in learning more? Click here for the full report. 
          </h4>
          <a href="https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Other/Informational%20Data%20Report%20Spring%202020.pdf" target="_blank">
            <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
            <h4>View Full Report</h4>
            </Button>
          </a>
        </Col>]
    
      
    return (
      <div className="dark-container" style={{paddingTop: "40vh"}}>            
        <div className= "mobile-only">
        <Row style={{paddingBottom: "8vh"}}>
          <div className= "banner">
            {innerContent}
          </div>
        </Row>
        </div>

        <div className= "web-only">
        <Row style={{paddingBottom: "8vh"}}>
            {innerContent}
        </Row>
        </div>
      </div>
    );
  }
}

export default DataReport;
