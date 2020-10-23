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
          <h3>Jake (Jacob) Bass</h3>
          <h4>Director of Operations<br/><i>Board Secretary</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Melinda_Hu.jpg' width = '200px'/>
          <h3>Melinda Hu</h3>
          <h4>Director of Marketing<br/><i>Board Member</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Lucia_Huo.jpeg' width = '200px'/>
          <h3>Lucia Huo</h3>
          <h4>Director of Outreach<br/><i>Board Member</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Megan_Paik.png' width = '200px'/>
          <h3>Megan Paik</h3>
          <h4>Director of Program Development<br/><i>Board Member</i></h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Yossy_Montecinos.jpg' width = '200px'/>
          <h3>Yossy Montecinos</h3>
          <h4>Director of Finance<br/><i>Board Treasurer</i></h4> 
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
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Luna_Ito-Fisher.jpg' width = '200px'/>
          <h3>Luna Ito-Fisher</h3>
          <h4>Associate Program Lead & Campus Director</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Weizhen_Sheng.jpg' width = '200px'/>
          <h3>Weizhen Sheng</h3>
          <h4>Outreach Associate</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Misty_Liao.jpeg' width = '200px'/>
          <h3>Misty Liao</h3>
          <h4>Corporate Relations Lead</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Hyewon_Lee.jpg' width = '200px'/>
          <h3>Hyewon Lee</h3>
          <h4>Associate Program Lead</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Cindy_Hao.png' width = '200px'/>
          <h3>Cindy Hao</h3>
          <h4>Associate Program Lead</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Ziyi_Yan.jpg' width = '200px'/>
          <h3>Ziyi Yan</h3>
          <h4>Lead Web Developer</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Saron_Mosazghi.jpg' width = '200px'/>
          <h3>Saron Mosazghi</h3>
          <h4>Community Marketing Coordinator</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Geshna_Aggarwal.jpg' width = '200px'/>
          <h3>Geshna Aggarwal</h3>
          <h4>Digital Marketing Coordinator</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Diya_Singh.jpg' width = '200px'/>
          <h3>Diya Singh</h3>
          <h4>Fundraising Chair</h4> 
          </Col>
          <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
          <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Team/Yuewei_Yuan.png' width = '200px'/>
          <h3>Lucy Yuewei Yuan</h3>
          <h4>Data Engineer</h4> 
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

var innerContent4=[
  <Col md={4}>
  <Fade bottom duration={5000}>
    <div>
      <h2>
      Campus Directors 19-20
      </h2>
    </div>
  </Fade>
  </Col>,
  <Col md={1}></Col>,
  <Col md={7}>
    <Row>
      <Col md = {6}>
        <h3>University of Pennsylvania</h3>
        <h4>Catherine Qiao</h4>
        <h4>Lucia Huo</h4>
        <br></br>
      </Col>
      <Col md = {6}>
        <h3>Brown University</h3>
        <h4>Luna Ito-Fisher</h4>
      </Col>
      <Col md = {6}>
        <h3>Duke University</h3>
        <h4>Kassen Qian</h4>
        <h4>Shruthi Kumar</h4>
      </Col>
      <Col md = {6}>
        <h3>Rutgers University</h3>
        <h4>Madhu Sivaraj</h4>
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
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Carly_Ryan.png' width = '200px'/>
    <h3>Carly Ryan</h3>
    <h4>University of Pennsylvania</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus%20Director/Luna_Ito-Fisher.jpg' width = '200px'/>
    <h3>Luna Ito-Fisher</h3>
    <h4>Brown University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Kassen_Qian.jpg' width = '200px'/>
    <h3>Kassen Qian </h3>
    <h4>Duke University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Shruthi_Kumar.jpg' width = '200px'/>
    <h3>Shruthi Kumar</h3>
    <h4>Duke University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Nikita_Sharma.jpg' width = '200px'/>
    <h3>Nikita Sharma</h3>
    <h4>Rutgers University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Jarelle_Franchela_Boac.jpg' width = '200px'/>
    <h3>Jarelle Franchela Boac</h3>
    <h4>Rutgers University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Anna_Zhang.jpg' width = '200px'/>
    <h3>Anna Zhang</h3>
    <h4>Vanderbilt University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Gabriel_Ting.jpg' width = '200px'/>
    <h3>Gabriel Ting</h3>
    <h4>Vanderbilt University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Melissa_Chen.jpg' width = '200px'/>
    <h3>Melissa Chen</h3>
    <h4>University of Illinois at Urbana-Champaign</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Emma_Sargent.jpg' width = '200px'/>
    <h3>Emma Sargent</h3>
    <h4>New York University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Melissa_Kwan.JPG' width = '200px'/>
    <h3>Melissa kwon</h3>
    <h4>Harvard University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Uma_Patel.jpg' width = '200px'/>
    <h3>Uma Patel</h3>
    <h4>Drexel University</h4> 
    </Col>
    <Col md= {4} style={{padding: "2%", paddingBottom: "5%"}}>
    <img src= 'https://raw.githubusercontent.com/The-Percentage-Project/photos/master/Campus_Directors_20-21/Kirubel_Aklilu.jpg' width = '200px'/>
    <h3>Kirubel Aklilu</h3>
    <h4>Carnegie Mellon University</h4> 
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

        <section id="joindirectors-19">
        <div className= "web-only">
        <Row style={{paddingTop: "50px"}}>
            {innerContent4}
        </Row>
        </div>
        <div className= "mobile-only">
        <Row style={{paddingTop: "50px"}}>
          <div className= "banner">
            {innerContent4}
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
