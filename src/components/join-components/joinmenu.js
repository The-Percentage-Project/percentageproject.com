import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class JoinMenu extends Component {
  
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="joinwelcome" href= "" spy={true} smooth={true} duration= {800}> About Us</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="joinabout" href= "" spy={true} smooth={true} duration= {800}> Mission</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="jointeam" href= "" spy={true} smooth={true} duration= {800}> Team</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="joindirectors" href= "" spy={true} smooth={true} duration= {800}> Directors</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="joinphotographers" href= "" spy={true} smooth={true} duration= {800}> Photo Team</Link>
          </NavItem>
          <a href={process.env.PUBLIC_URL + "/"}>Home</a>
        </Nav>
      </div>
    );
  }
}

export default JoinMenu;
