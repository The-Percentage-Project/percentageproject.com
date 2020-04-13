import React, { Component } from 'react';
import DataWelcome from './datawelcome';
import ContactBanner from '../contactbanner';
import TestData from './testdata';
import DataMenu from './datamenu';
import DataMobileMenu from './datamobilemenu';
import BarComponent from './barcomponent';
import DataReport from './datareport';
import DataMethods from './datamethods';

class DataHome extends Component {
  /*
  The main landing component for the Data Page
  Subcomponents consisting of delineated sections
  */
  render() {
    return (
      <div className="landing-container">
        <DataMenu/>
        <DataMobileMenu/>
        <section id = "datawelcome">
          <DataWelcome/>
        </section>
        <section id = "data">
          <TestData/>
        </section>
        <section id = "stats">
          <BarComponent/>
        </section>
        <section id = "report">
          <DataReport/>
        </section>
        <section id = "methods">
          <DataMethods/>
        </section>
        
        <ContactBanner/>
      </div>
    );
  }
}

export default DataHome;
