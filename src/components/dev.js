import React, { Component } from 'react';
import '../css/standard.css';
import Welcome from './welcome';
import About from './about';
import HomeGallery from './home-gallery';
import ContactBanner from './contactbanner'
import Menu from './menu';
import MobileMenu from './mobilemenu';
import HomeSupport from './support';

class Dev extends Component {
  /*
  Dev is the main landing component, i.e. the homepage.
  The subcomponents are 
  */
  render() {
    return (
      <div className="landing-container">
        <Menu/>
        <MobileMenu/>
        <section id = "welcome">
          <Welcome/>
        </section>
        <section id = "about">
          <About/>
        </section>
        <section id = "to-gallery">
          <HomeGallery/>
        </section>
        <section id = "support">
          <HomeSupport/>
        </section>
        <ContactBanner/>
      </div>
    );
  }
}

export default Dev;
