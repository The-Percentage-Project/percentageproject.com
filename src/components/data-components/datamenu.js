import React, { Component } from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class DataMenu extends Component {
  
  render() {
    return (
      <div className = "sidenav">
        <Nav vertical>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="datawelcome" href= "" spy={true} smooth={true} duration= {800}> Data</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="data" href= "" spy={true} smooth={true} duration= {800}> At A Glance</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="stats" href= "" spy={true} smooth={true} duration= {800}> Statistics</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="report" href= "" spy={true} smooth={true} duration= {800}> Report</Link>
          </NavItem>
          <NavItem>
            <Link class= "navlink" activeClass="active" to="methods" href= "" spy={true} smooth={true} duration= {800}> Methods</Link>
          </NavItem>
          <a href={process.env.PUBLIC_URL + "/"}>Home</a>
        </Nav>
      </div>
    );
  }
}

export default DataMenu;
