import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

const DataMobileMenu= (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="mobile-only mobilemenu" style={{position: "fixed", margins: "auto 0", padding: "5%", zIndex:"3"}}>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <img src= {require("../../public/static/menu-logo.png")} style={{maxHeight: "10vw", padding: "2vw"}}></img>
        </DropdownToggle>
      <DropdownMenu>
      <DropdownItem>
            <Link class= "navlink" activeClass="active" to="welcome" href= "" spy={true} smooth={true} duration= {800}> Welcome</Link>
     </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="datawelcome" href= "" spy={true} smooth={true} duration= {800}> Data</Link>
          </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="data" href= "" spy={true} smooth={true} duration= {800}> At A Glance</Link>
          </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="stats" href= "" spy={true} smooth={true} duration= {800}> Statistics</Link>
          </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="report" href= "" spy={true} smooth={true} duration= {800}> Report</Link>
          </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="methods" href= "" spy={true} smooth={true} duration= {800}> Methods</Link>
          </DropdownItem>
          <DropdownItem>
            <a href={process.env.PUBLIC_URL + "/"}>Home</a>
          </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}

export default DataMobileMenu;