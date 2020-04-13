import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

const MobileMenu= (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="mobile-only mobilemenu" style={{position: "fixed", margins: "auto 0", padding: "5%", zIndex:"3"}}>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <img src= {require("../public/static/menu-logo.png")} style={{maxHeight: "10vw", padding: "2vw"}}></img>
        </DropdownToggle>
      <DropdownMenu>
      <DropdownItem>
            <Link class= "navlink" activeClass="active" to="welcome" href= "" spy={true} smooth={true} duration= {800}> Welcome</Link>
     </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="about" href= "" spy={true} smooth={true} duration= {800}> About</Link>
          </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="to-gallery" href= "" spy={true} smooth={true} duration= {800}> Gallery</Link>
          </DropdownItem>
          <DropdownItem>
            <a href={process.env.PUBLIC_URL + "/#/people"}>People</a>
          </DropdownItem>
          <DropdownItem>
            <a href={process.env.PUBLIC_URL + "/"}>Disclosures</a>
          </DropdownItem>
          <DropdownItem>
            <a href={process.env.PUBLIC_URL + "/#/data"}>Data</a>
          </DropdownItem>
          <DropdownItem>
            <Link class= "navlink" activeClass="active" to="contact" href= "" spy={true} smooth={true} duration= {800}> Contact</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
}

export default MobileMenu;