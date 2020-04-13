import React, { Component } from 'react';
import logo from './logo.svg';
import Dev from './components/dev.js';
import DataHome from './components/data-components/datahome';
import SponsorsHome from './components/sponsors-components/sponsorshome';
import JoinHome from './components/join-components/joinhome';
import GalleryHome from './components/gallery-components/galleryhome';
import DonateHome from './components/donate-components/donatehome';
import ScrollToTop from './components/scrolltotop';
import {HashRouter as Router, Route} from 'react-router-dom';

import './App.css';
import './css/mobile.css';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}  onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <ScrollToTop>
          <Route path="/" exact component={Dev} />
          <Route path="/data" component={DataHome} />
          <Route path="/disclosures" component={SponsorsHome} />
          <Route path="/people" component={JoinHome} />
          <Route path="/gallery" component={GalleryHome} />
          <Route path="/donate" component={DonateHome} />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
