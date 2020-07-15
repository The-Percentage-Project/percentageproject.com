import React, { Component } from 'react';
import Fade from 'react-reveal';
import {Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';

class DisclosuresHome extends Component {
  /*
  The main landing component for the Data Page
  Subcomponents consisting of delineated sections
  */
  render() {
    return (
      <div className="landing-container">
        <section id = "donatewelcome">
        <div className = "dark-container" style={{minHeight:"100vh"}}>
          <div className="center-row" style={{paddingBottom:"3%"}}>
              <Fade bottom duration={5000}>
                <div style= {{paddingBottom:"5vh"}}>
                <h2 style = {{letterSpacing: "15px"}}>
                DISCLOSURES
                </h2>
                <a href={process.env.PUBLIC_URL + "/"}>
                <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                <h4>Back Home</h4>
                </Button>
                </a>
                </div>
              </Fade> 
              <Row style = {{paddingTop: "5%"}}>
                <Col md = {12}>
                  <div>
                  <a href="https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Other/privacy_statement.pdf" target="_blank">
                    <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}>
                    <h4>Privacy Statement</h4>
                    </Button>
                  </a>
                  </div>
                  <div>
                  <a href="https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Other/1023.pdf" target="_blank">
                    <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                    <h4>1023</h4>
                    </Button>
                  </a>
                  </div>
                  <div>
                  <a href="https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Other/990-N.pdf" target="_blank">
                    <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                    <h4>990-N</h4>
                    </Button>
                  </a>
                  </div>
                  <p>
                    Please contact the Board Secretary Jacob Bass at jake@percentageproject.com for any additional records requests.
                  </p>
                </Col>
              </Row>
                
                         
          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default DisclosuresHome;
