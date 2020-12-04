import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

const JoinMobileMenu= (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="mobile-only mobilemenu" style={{position: "fixed", margins: "auto 0", padding: "3%", zIndex:"3"}}>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <img src= {require("../../public/static/menu-logo.png")} style={{maxHeight: "9vw", padding: "2vw"}}></img>
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Link class= "navlink" activeClass="active" to="joinwelcome" href= "" spy={true} smooth={true} duration= {800}> About Us</Link>
        </DropdownItem>
        <DropdownItem>
          <Link class= "navlink" activeClass="active" to="joinabout" href= "" spy={true} smooth={true} duration= {800}> Mission</Link>
        </DropdownItem>
        <DropdownItem>
          <Link class= "navlink" activeClass="active" to="jointeam" href= "" spy={true} smooth={true} duration= {800}> Team</Link>
        </DropdownItem>
        <DropdownItem>
          <Link class= "navlink" activeClass="active" to="joindirectors" href= "" spy={true} smooth={true} duration= {800}> Directors</Link>
        </DropdownItem>
        <DropdownItem>
          <Link class= "navlink" activeClass="active" to="joinphotographers" href= "" spy={true} smooth={true} duration= {800}> Photo Team</Link>
        </DropdownItem>
        <DropdownItem>
          <a href={process.env.PUBLIC_URL + "/"}>Home</a>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}

export default JoinMobileMenu;