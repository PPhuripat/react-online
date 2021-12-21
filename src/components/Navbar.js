import React from "react";
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom"

const Navber = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
        {/*<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>*/}
  <NavLink to='/' exact className="navbar-brand">React-Bootstrap</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink  exact to="/Product" className="nav-link" activeClassName="active">Product</NavLink>
            <NavLink exact to="/Contact" className="nav-link" activeClassName="active">Contact</NavLink>
      <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navber;