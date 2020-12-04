import React, { Component } from 'react';
import Fade from 'react-reveal';
import {Row, Col} from 'reactstrap';
import {Button} from 'react-bootstrap';

class DonateHome extends Component {
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
                DONATE
                </h2>
                <a href={process.env.PUBLIC_URL + "/"}>
                <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                <h4>Back Home</h4>
                </Button>
                </a>
                </div>
              </Fade> 
              <Row style = {{paddingTop: "5%"}}>
                <Col md = {6}>
                  <p>
                    Dear Potential Donor,<br/><br/>
                    We at The Percentage Project are incredibly thankful that you are 
                    considering donating to us. 
                    Because we are new, we find it of the utmost importance to be clear 
                    about our current status and what it means for your donation. 
                    The Percentage Project Inc. is a 501(c)(3) not-for-profit organization 
                    registered in the state of New York. Our 990's and 1023 are available{" "}
                    <a href = {process.env.PUBLIC_URL + "/#/disclosures"}>here.</a>

                    <br/><br/>
                    We also want to recognize that many Americans are facing economic 
                    hardships due to the current COVID-19 outbreak. We do not ask for 
                    donations lightly and are thankful for any help you are willing to 
                    provide. As a publicly supported charity, your small individual donations 
                    are critical to our health. As an organization, we have pledged ourselves 
                    to respond to any records requests with good faith to the best of our 
                    ability and we encourage you to reach out directly using the contact 
                    information at below.
                    <br/><br/>
                    With gratitude,<br/><br/>

                    Jacob Bass<br/>
                    Board Secretary<br/>
                    operations@percentageproject.com
                  </p>
                </Col>
                <Col md = {1}>
                </Col>
                <Col md = {3}>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="D75BGWME4JJ4Y" />
                <input type="image" src={require("../../public/static/paypal_transparent.png")} border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"  width= "300px"/>
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" />
                </form>
                <p>
                <i>
                All donations will be acknowledged publicly. If you wish for your donation to remain anonymous, please contact operations@percentageproject.com with your request.
                </i>
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

export default DonateHome;
