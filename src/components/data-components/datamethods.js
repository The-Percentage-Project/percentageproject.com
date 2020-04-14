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
            <li>All questions are multiple choice questions and do not allow custom inputs, except for “Other” in the demographic identification questions, which allows participants to specify further.</li>
            <li>Surveys are kept at 5 minutes based on Surveymonkey’s estimates. This year we have 19 questions and 8 demographic identification questions.</li>
            <li>Survey questions are reviewed each year. For the most part, they have not changed in the past 3 years to allow for following long term development across the same questions.</li>
            <li>All questions other than demographic identification questions are not required to submit the survey. All demographic identification questions have “Prefer not to say” as an option.</li>
          </ol>


          <h4><b>Data Collection</b></h4>
          <ol>
            <li>All surveys are made available to the full list of emails of all students studying computer science related fields at the university.</li>
            <li>Each email is sent an individualized survey link so that no one can access the survey unless invited via the email list in (1). This maintains an exact survey population.</li>
            <li>All survey responses are fully anonymized by Survey Monkey. No responses contain any personally identifiable information (name, address, email address, IP address, profile images, birthdates, social media handles, etc.), and the participants are made aware of this.</li>
            <li>The participants are made aware of the goal of the survey, that their participation is voluntary, and that they may withdraw at any time before completing the survey. Once they submit their completed survey, there will be no way to withdraw their response because the survey contains no identifying information. They were also given contact information for any questions they may have.</li>
            <li>Surveys are open for around 3 weeks, depending on the campus.</li>
            <li>We send reminder email(s) once a week and on the last day the survey is open to those who have not filled out the survey. Surveymonkey has this feature while keeping responses anonymous.</li>
          </ol>

          <h4><b>Data Analysis</b></h4>
          <ol>
              <li>Surveymonkey allows CSV downloads for all responses. We merge all responses from all school surveys for a aggregate analysis.</li>
              <li>We use an automated script to calculate percentages from the number of responses/total responses for each identification: Gender, Race, Ethnicity, Religion, LGBTQ+, Disability, First Generation Student, Low Income Student.</li>
              <li>The automated script also calculates significance based on our survey population.</li>
              <li>A report with percentages for each question and demographic can be found on the Data page. We will publish a full annual report on the aggregate data (no school-specific data) with further data analysis and insights, which will be made available on this website.</li>
          </ol>

          * Any surveys that did not meet the above criteria were not included in the aggregate analysis. If any additional non-individualized links were used in collection, we used Surveymonkey’s collector filter feature to remove those responses from the analysis.
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
