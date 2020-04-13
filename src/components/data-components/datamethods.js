import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';
import Fade from 'react-reveal';

class DataMethods extends Component {
  
  render() {

    var innerContent=[
        <Col md={2}>
        <Fade bottom duration={5000}>
          <h2>
            Methods
          </h2>
        </Fade>
        </Col>,
        <Col md={1}></Col>,
        <Col md={9}>
          <p>
          <h4><b>Survey</b></h4>
          <ol>
            <li>All questions are multiple choice questions and do not allow custom inputs, except for “Other” in the identification choices allows participants to specify further</li>
            <li>Surveys are kept to about 5 minutes based on Surveymonmkey’s estiates. This year we have 19 questions and 8 identification questions.</li>
            <li>Survey questions are reviewed each year, but for the most part have not changed in the past 3 years so that we can track long term development. Next year, they may be discussed and reviewed amongst many schools and thus undergo some larger changes.</li>
            <li>All identification questions have “Prefer not to say”</li>
            <li>All questions other than identification questions are not required to answer in order to submit the survey.</li>
          </ol>


          <h4><b>Data Collection</b></h4>
          <ol>
            <li>Retrieve a full list of emails of all students studying computer science related fields that are invited</li>
            <li>Send individualized survey links for each email so that no one can access the survey unless invited via the email list in (1), thereby maintaining an exact survey population</li>
            <li>All survey responses are fully anonymized by Survey Monkey (see Data Compliance Docs for more info and links) and the participants are made aware of this</li>
            <li>The participants are made aware of other data privacy related facts (see Data Compliance Docs)</li>
            <li>Reminder email(s) to those who have not filled out the survey to fill it out (Surveymonkey has this feature while keeping responses anonymized)</li>
          </ol>

          <h4><b>Data Analysis</b></h4>
          <ol>
              <li>Surveymonkey allows CSV downloads with answers to all questions divided based on an answer to another question. For example, we can divide answers to all questions based on the gender identification question. We download these CSVs for each of the identification questions.</li>
              <li>We use an automated script to calculate percentages from the number of responses/total responses for each identification: Gender, Race, Ethnicity, Religion, LGBTQ+, Disability, First Generation Student, Low Income Student</li>
          </ol>

          </p>
        </Col>]
    
      
    return (
      <div className="dark-container" style={{paddingTop: "20vh"}}>            
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

export default DataMethods;
