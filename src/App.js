import React, { Component } from 'react';
import logo from './logo.svg';
import Dev from './components/dev.js';
import DataHome from './components/data-components/datahome';
import SponsorsHome from './components/sponsors-components/sponsorshome';
import JoinHome from './components/join-components/joinhome';
import GalleryHome from './components/gallery-components/galleryhome';
import DonateHome from './components/donate-components/donatehome';
import DisclosuresHome from './components/disclosures-components/disclosureshome';
import ScrollToTop from './components/scrolltotop';
import {HashRouter as Router, Route} from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import './App.css';
import './css/mobile.css';

ReactGA.initialize('UA-163539952-1');

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <ScrollToTop>
          <Route path="/" exact component={Dev} />
          <Route path="/data" component={DataHome} />
          <Route path="/disclosures" component={DisclosuresHome} />
          <Route path="/people" component={JoinHome} />
          <Route path="/gallery" component={GalleryHome} />
          <Route path="/donate" component={DonateHome} />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
