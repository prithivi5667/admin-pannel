import React from "react";
import { Tab, Nav, NavDropdown } from "react-bootstrap/";
import { FaLaughWink } from "react-icons/fa";

export default function TabPane() {
  return (
    <Tab.Container defaultActiveKey="dashboard">
      <Nav className="flex-column">
        <h5>
          <span>
            <FaLaughWink className="tabIcon" />
          </span>
          SB ADMIN <sup>2</sup>
        </h5>

        <NavDropdown.Divider />

        <Nav.Item>
          <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
        </Nav.Item>

        <NavDropdown.Divider />

        <NavDropdown className="dropdownTab" title="Components">
          <NavDropdown.Item eventKey="buttons">Buttons</NavDropdown.Item>
          <NavDropdown.Item eventKey="cards">Cards</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Utilities">
          <NavDropdown.Item eventKey="colors">Colors</NavDropdown.Item>
          <NavDropdown.Item eventKey="borders">Borders</NavDropdown.Item>
          <NavDropdown.Item eventKey="animations">Animations</NavDropdown.Item>
          <NavDropdown.Item eventKey="other">Other</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown.Divider />

        <NavDropdown title="Pages">
          <NavDropdown.Item eventKey="login">Login</NavDropdown.Item>
          <NavDropdown.Item eventKey="register">Register</NavDropdown.Item>
          <NavDropdown.Item eventKey="forgotPassword">
            Forgot Password
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="404">404 Page</NavDropdown.Item>
          <NavDropdown.Item eventKey="blankPage">Blank Page</NavDropdown.Item>
        </NavDropdown>

        <Nav.Item>
          <Nav.Link eventKey="charts">Charts</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="tables">Tables</Nav.Link>
        </Nav.Item>

        <NavDropdown.Divider />
      </Nav>
    </Tab.Container>
  );
}
