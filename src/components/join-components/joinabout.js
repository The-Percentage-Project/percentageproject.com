import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';
import Fade from 'react-reveal';

class JoinAbout extends Component {
  
  render() {

    var innerContent=[
        <Col md={3}>
        <Fade bottom duration={5000}>
          <h2>
            Our Movement. Our Mission.
          </h2>
          <a href="https://mailchi.mp/fee20591b155/thepercentageproject_emailsignup">
            <Button variant="outline-dark" style={{marginTop: "20px", marginBottom: "20px"}}> 
            <h4>Join Our Newsletter</h4>
            </Button>
          </a>
        </Fade>
        </Col>,
        <Col md={2}></Col>,
        <Col md={7}>
          <p>
          <h4><b>Vision</b></h4>
          To help every person of every background feel a sense of belonging in the field that they pursue.<br/><br/>

          <h4><b>Mission</b></h4>
          To build a movement that informs the experiences of secondary education students studying computer science-related fields and encourages reflection and conversation on the state of students of all backgrounds.<br/><br/>

          <h4><b>Goals</b></h4>
          Collaborate with student leaders and schools to:
          <ul>
          <li>Organize the % Project social campaign on their campuses</li>
          <li>Facilitate conversation between students and faculty on diversity and inclusion and empower students to speak out about their own experiences</li>
          <li>Create awareness of and inform the public on the current experience of secondary education students studying computer-science related fields</li>
          <li>Increase transparency of current metrics on diversity and inclusion on school campuses</li>
          <li>Demonstrate and lead data-driven advocacy efforts</li>
          </ul>

          </p>
        </Col>]

  var innerContent2=[
    <Col md={3}>
    <Fade bottom duration={5000}>
      <h2>
        Join the Movement.
      </h2>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScOrwCpGGRQuhM52twhyQI_iiupSD04MzQbLpdJR2VeXyag7w/viewform?usp=sf_link">
        <Button variant="outline-dark" style={{marginTop: "20px", marginBottom: "20px"}}> 
        <h4>Be a Campus Director</h4>
        </Button>
      </a>
    </Fade>
    </Col>,
    <Col md={2}></Col>,
    <Col md={7}>
      <p>
      The Percentage Project is proud to bring campuses together to reflect on the experiences of students studying computer-science related fields and the state of diversity and inclusion. Since our inception in 2018, we have welcomed 4 campus projects to the constantly growing team and look forward to bringing this project to campuses everywhere!
      <br/><br/>
      The program includes:
      <ul>
      <li>A step-by-step guide and timeline that details how to bring this project to your campus!</li>
      <li>One-on-one sessions with our program development team to help you through anything you need in the process</li>
      <li>A community of many individuals committed to the project and what it stands for</li>
      <li>Round-table meetings with the entire community to make decisions on how the program evolves and runs in all schools</li>
      <li>Opportunity to attend or run meet-ups and workshops at various related conferences</li>
      <li>Of course, free % Apparel, stickers, and other merchandise for yourself and to pass out to friends!</li>
      </ul>

      </p>
    </Col>]
    
      
    return (
      <div className="light-container" style={{paddingTop: "40vh", color: "black"}}>            
        <div className= "mobile-only">
        <Row style={{paddingBottom: "8vh"}}>
          <div className= "banner">
            {innerContent}
          </div>
        </Row>
        <Row>
          <div className= "banner">
            {innerContent2}
          </div>
        </Row>
        </div>

        <div className= "web-only">
        <Row style={{paddingBottom: "8vh"}}>
            {innerContent}
        </Row>
        <Row>
            {innerContent2}
        </Row>
        </div>
      </div>
    );
  }
}

export default JoinAbout;
