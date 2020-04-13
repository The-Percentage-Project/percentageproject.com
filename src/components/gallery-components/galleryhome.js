import React, { Component } from 'react';
import FullGallery from './gallery-full';

class GalleryHome extends Component {
  /*
  The main landing component for the Data Page
  Subcomponents consisting of delineated sections
  */
  render() {
    return (
      <div className="landing-container">
        <section id = "datawelcome">
          <FullGallery/>
        </section>
      </div>
    );
  }
}

export default GalleryHome;
