import React, { Component } from 'react';
import ContactBanner from '../contactbanner';
import SponsorsWelcome from './sponsorswelcome';
import SponsorsAbout from './sponsorsabout';
import SponsorsContent from './sponsorscontent';
import SponsorsMenu from './sponsorsmenu';

class DataHome extends Component {
  /*
  The main landing component for the Data Page
  Subcomponents consisting of delineated sections
  */
  render() {
    return (
      <div className="landing-container">
        <SponsorsMenu/>
        <section id="sponsorswelcome">
          <SponsorsWelcome/>
        </section>
        <section id="sponsorsabout">
          <SponsorsAbout/>
        </section>
        <section id="sponsorscontent">
          <SponsorsContent/>
        </section>
        <ContactBanner/>
      </div>
    );
  }
}

export default DataHome;
