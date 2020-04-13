import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class SponsorsMenu extends Component {
  
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="sponsorswelcome" href= "" spy={true} smooth={true} duration= {800}> Sponsors</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="sponsorsabout" href= "" spy={true} smooth={true} duration= {800}> Support</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="sponsorscontent" href= "" spy={true} smooth={true} duration= {800}> List</Link>
          </NavItem>
          <a href={process.env.PUBLIC_URL + "/"}>Home</a>
        </Nav>
      </div>
    );
  }
}

export default SponsorsMenu;
