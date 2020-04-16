import React, { Component } from 'react';
import { Row, Col, NavLink} from 'reactstrap';
import Fade from 'react-reveal';
import AnimatedPie from './animated-pie';
import AnimatedBar from './animated-bar';
import data from './data.json';

class TestData extends Component {
  
  render() {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var data = [
        {text: "Percent of Students Who Feel That Minority Organizations are Still Needed Today", val: 81},
        {text: "Percent of Students Who Feel Comfortable Asking Questions During Lecture", val: 38},
        {text: "Percent of Students Who Feel Intimidated Studying Computer Science and Related fields", val: 45}, 
        {text: "Percent of Students Who Have Been/Felt Judged or Micro-Aggressed by Someone ", val: 33},    
    ]

    return (      
      <section id = "piecharts">    
        <div className="dark-container" style={{minHeight: "80vh", paddingLeft: "20%", paddingRight: "18%", 
        paddingTop: "20vh",
        color: "rgba(255, 255, 255, 0.7)"}}>
        <AnimatedPie name="animatedpie" dataset = {data}/>
        </div>
      </section>
    );
  }
}

export default TestData;
