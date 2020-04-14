import React, { Component } from 'react';
import Fade from 'react-reveal';
import {Button} from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import Gallery from './gallery';
import photos from '../public/static/photos_2019/photos';

class HomeSupport extends Component {
  render() {
    console.log(photos)

    return (
    <div>
    <section id = "support">
    <div className = "dark-container" style={{minHeight:"30vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <div style= {{paddingBottom:"5vh"}}>
                    <h2>
                    Support Us
                    </h2>
                    <a href={process.env.PUBLIC_URL + "/#/gallery"}>
                        
                    </a>
                    </div>
                </Fade>
            </div>
        </div>
        <Row>
            <Col md = {2}>
            </Col>
            <Col md = {5}>
            <a href="https://www.etsy.com/shop/ThePercentageProject?fbclid=IwAR1efVJjzQFaYq_tDf-Lkxm4OSfVFW0elJ1C8MnXsHDZLhlLycbL5NlrSCw" target ="_blank">
            <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px", padding: "5%"}}> 
                <img src = "https://i.etsystatic.com/22467709/r/il/725eb1/2261236870/il_794xN.2261236870_xnch.jpg" height="250px"/>
                <h4><br/>Buy Our Merch!</h4>
            </Button>
            </a>
            </Col>
            <Col md = {4}>
            <a href={process.env.PUBLIC_URL + "/#/donate"}>
            <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
            <h4>Donate</h4>
            </Button>
            </a>
            <br/>
            <a href = "https://www.tinyurl.com/percentageprojectnewsletter" target ="_blank">
                <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                <h4>Join Our Biweekly Newsletter</h4>
                </Button>
            </a>
            <br/>
            <a href = "https://docs.google.com/forms/d/e/1FAIpQLScOrwCpGGRQuhM52twhyQI_iiupSD04MzQbLpdJR2VeXyag7w/viewform?usp=sf_link" target ="_blank">
                <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px"}}> 
                <h4>Become A Campus Director</h4>
                </Button>
            </a>
            </Col>
        </Row>
    </div>
    <div className = "dark-container" style={{minHeight:"30vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <div style= {{paddingBottom:"5vh"}}>
                    <h2>
                    % In the News
                    </h2>
                    <a href={process.env.PUBLIC_URL + "/#/gallery"}>
                        
                    </a>
                    </div>
                </Fade>
            </div>
        </div>
        <Row>
            <Col md = {2}></Col>
            <Col md = {5}>
            <a href="https://www.thedp.com/article/2018/04/wics-women-computer-science-percent-project-social-media-upenn-penn-philadelphia" target="_blank">
                <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px", padding: "5%"}}> 
                    <div className= "center-row">
                        <img src ={require("../public/static/dp_header.JPG")} height="250px"/>
                        <h4><br/>The Daily Pennsylvanian</h4>
                    </div> 
                </Button>
            </a>
            </Col>
            <Col md = {5}>
            <a href = "https://www.dukechronicle.com/article/2019/04/duke-university-women-in-stem-the-percentage-project-highlights-experiences-of-inequity-in-stem-fields" target ="_blank">
                <Button variant="outline-light" style={{marginTop: "20px", marginBottom: "20px", padding: "5%"}}> 
                <div className= "center-row">
                    <img src ={require("../public/static/duke_header.JPG")} height="250px"/>
                    <h4><br/>Duke Chronicle</h4>
                </div>
                </Button>
            </a>
            </Col>
        </Row>
    </div>
    </section>
    </div>
    );
  }
}

export default HomeSupport;