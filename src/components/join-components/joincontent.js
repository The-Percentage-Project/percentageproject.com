import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';

class JoinContent extends Component {
  
  render() {

    var innerContent1=[
        <Col md={2}>
        <Fade bottom duration={5000}>
          <div>
            <h2>
              Our Team
            </h2>
          </div>
        </Fade>
        </Col>,
        <Col md={1}></Col>,
        <Col md={9}>
          <Row>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Stephanie_Tang.jpg' width = '200px'/>
          <h3>Stephanie Tang</h3>
          <h4>President<br/><i>Board President</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Keren_Fuentes.png' width = '200px'/>
          <h3>Keren Fuentes</h3>
          <h4>Director of Technology<br/><i>Board Member</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Jake_Bass.png' width = '200px'/>
          <h3>Jake Bass</h3>
          <h4>Director of Operations<br/><i>Board Secretary</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Emma_Suarez.png' width = '200px'/>
          <h3>Emmanuel Suarez</h3>
          <h4>Director of Finance<br/><i>Board Treasurer</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Melinda_Hu.png' width = '200px'/>
          <h3>Melinda Hu</h3>
          <h4>Director of Marketing<br/><i>Board Member</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Lucia_Huo.jpeg' width = '200px'/>
          <h3>Lucia Huo</h3>
          <h4>Director of Recruitment<br/><i>Board Member</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Megan_Paik.png' width = '200px'/>
          <h3>Megan Paik</h3>
          <h4>Director of Program Development<br/><i>Board Member</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Jill_Pesce.png' width = '200px'/>
          <h3>Jillian Pesce</h3>
          <h4>Recruitment Head</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Sophia_Ye.png' width = '200px'/>
          <h3>Sophia Ye</h3>
          <h4>Outreach Coordinator</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Gabriel_Ting.png' width = '200px'/>
          <h3>Gabriel Ting</h3>
          <h4>Software Engineer</h4> 
          </Col>
          </Row>
        </Col>]

var innerContent3=[
  <Col md={3}>
  <Fade bottom duration={5000}>
    <div>
      <h2>
        Photographers
      </h2>
    </div>
  </Fade>
  </Col>,
  <Col md={2}></Col>,
  <Col md={7}>
    <Row>
      <Col md = {6}>
        <h3>Brown University</h3>
        <h4>Luna Ito-Fisher</h4>
        <h4>Ambika Miglani</h4>
      </Col>
      <Col md = {6}>
        <h3>Rutgers University</h3>
        <h4>Kuhu Halder</h4>
        <h4>Nida Ansari</h4>
      </Col>
    </Row>
  </Col>
]

var innerContent2=[
  <Col md={2}>
  <Fade bottom duration={5000}>
    <div>
      <h2>
        Campus Directors
      </h2>
    </div>
  </Fade>
  </Col>,
  <Col md={1}></Col>,
  <Col md={9}>
    <p>
      The Percentage Project provides resources to independent students who want 
      to lead a data driven advocacy campaign on their campus. These students 
      utilize our resources to provide their peers a platform to be heard and to 
      advocate for their community.
    </p>
    <Row>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus%20Director/Catherine_Qiao.jpg' width = '200px'/>
    <h3>Catherine Qiao</h3>
    <h4>University of Pennsylvania</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Lucia_Huo.jpeg' width = '200px'/>
    <h3>Lucia Huo</h3>
    <h4>University of Pennsylvania</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus%20Director/Luna%20Ito-Fisher.jpg' width = '200px'/>
    <h3>Luna Ito-Fisher</h3>
    <h4>Brown University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus%20Director/Kassen_Qian.jpg' width = '200px'/>
    <h3>Kassen Qian </h3>
    <h4>Duke University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus%20Director/Shruthi_Kumar.jpg' width = '200px'/>
    <h3>Shruthi Kumar</h3>
    <h4>Duke University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus%20Director/Madhu_Sivaraj.jpg' width = '200px'/>
    <h3>Madhu Sivaraj</h3>
    <h4>Rutgers University</h4> 
    </Col>
    </Row>
  </Col>]
    
      
    return (
      <div className="light-container" style={{paddingBottom: "10%"}}>            
        <section id="jointeam">
        <div className= "web-only">
        <Row style={{paddingTop: "50px"}}>
            {innerContent1}
        </Row>
        </div>
        <div className= "mobile-only">
        <Row style={{paddingTop: "50px"}}>
          <div className= "banner">
            {innerContent1}
          </div>
        </Row>
        </div>
        </section>

        

        <section id="joindirectors">
        <div className= "web-only">
        <Row style={{paddingTop: "50px"}}>
            {innerContent2}
        </Row>
        </div>
        <div className= "mobile-only">
        <Row style={{paddingTop: "50px"}}>
          <div className= "banner">
            {innerContent2}
          </div>
        </Row>
        </div>
        </section>

        <section id="joinphotographers">
        <div className= "web-only">
        <Row style={{paddingTop: "50px"}}>
            {innerContent3}
        </Row>
        </div>
        <div className= "mobile-only">
        <Row style={{paddingTop: "50px"}}>
          <div className= "banner">
            {innerContent3}
          </div>
        </Row>
        </div>
        </section>
      </div>
    );
  }
}

export default JoinContent;
