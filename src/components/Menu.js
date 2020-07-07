import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler className="ml-auto" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/g1">
                <i class="far fa-images"></i> Gallery-1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/g2">
                <i class="far fa-images"></i> Gallery-2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/g3">
                <i class="far fa-images"></i> Gallery-3
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
