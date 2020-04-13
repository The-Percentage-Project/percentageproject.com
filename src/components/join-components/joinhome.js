import React, { Component } from 'react';
import ContactBanner from '../contactbanner';
import JoinWelcome from './joinwelcome';
import JoinAbout from './joinabout';
import JoinContent from './joincontent';
import JoinMenu from './joinmenu';
import JoinMobileMenu from './joinmobilemenu';

class DataHome extends Component {
  /*
  The main landing component for the Data Page
  Subcomponents consisting of delineated sections
  */
  render() {
    return (
      <div className="landing-container">
        <JoinMenu/>
        <JoinMobileMenu/>
        <section id="joinwelcome">
          <JoinWelcome/>
        </section>
        <section id="joinabout">
          <JoinAbout/>
        </section>
        <section id="joincontent">
          <JoinContent/>
        </section>
        <ContactBanner/>
      </div>
    );
  }
}

export default DataHome;
