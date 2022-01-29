import React from "react";
import { Navbar , Nav , NavDropdown , Form , FormControl , Button } from 'react-bootstrap';
import { NavLink , useHistory } from "react-router-dom";
const NavBar = () => {
  const history = useHistory();
  return (
    <>
        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <NavLink className="navbar-brand" exact to="/">React-Bootstrap</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/product">Product</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact Us</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>{ history.replace("/hospital") }}>Hospital List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{ history.replace("/category") }}>News Category</NavDropdown.Item>
                </NavDropdown>
                <NavLink className="nav-link" activeClassName="active" to="/upload">Upload</NavLink>
            </Nav>
              <Nav>
              <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  );
};
export default NavBar;