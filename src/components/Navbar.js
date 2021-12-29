import React from "react";
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom";
const Navber = () => {
  const history = useHistory()
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
              <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() =>{
                  history.replace("/hospitalPage")
                }}>Hospital List</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() =>{
                  history.replace("/category")
                }}>
                  News Category
              
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