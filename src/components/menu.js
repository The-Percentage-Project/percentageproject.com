import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/standard.css';

class Menu extends Component {
  
  render() {
    console.log(process.env.PUBLIC_URL + "/#/data")
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="welcome" href= "" spy={true} smooth={true} duration= {800}> Welcome</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="about" href= "" spy={true} smooth={true} duration= {800}> About</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="to-gallery" href= "" spy={true} smooth={true} duration= {800}> Gallery</Link>
          </NavItem>
          <a href={process.env.PUBLIC_URL + "/#/people"}>People</a>
          <a href={process.env.PUBLIC_URL + "/"}>Disclosures</a>
          <a href={process.env.PUBLIC_URL + "/#/data"}>Data</a>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="support" href= "" spy={true} smooth={true} duration= {800}> Support</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="contact" href= "" spy={true} smooth={true} duration= {800}> Contact</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Menu;
