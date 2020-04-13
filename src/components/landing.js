import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../css/standard.css';
import Welcome from './welcome';
import About from './about';
import Education from './education';
import Experience from './experience';
import ArtBanner from './artbanner';
import Projects from './projects';
import BlogBanner from './blogbanner';
import ContactBanner from './contactbanner';

class Landing extends Component {
  
  render() {
    return (
      <div className="landing-container">
        <Welcome/>
        <About/>
        <Education/>
        <Experience/>
        <ArtBanner/>
        <Projects/>
        <BlogBanner/>
        <ContactBanner/>
      </div>
    );
  }
}

export default Landing;
