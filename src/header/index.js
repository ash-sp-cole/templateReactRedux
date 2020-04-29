import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown,Form, Button, FormControl} from 'react-bootstrap';
import './header.css';

import {Link} from 'react-router-dom';

class Header extends Component {


    render() {


        return (

            <div>
              <Navbar className="navbar transparent justify-content-center"  variant="light" expand="lg" style={{color:'white'}}>
  <Navbar.Brand as={Link} to='/' >React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as ={Link} to='/'>Home</Nav.Link>
      <Nav.Link as ={Link} to='/search'>Search Api</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to='/about'>About</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/about'>Another action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/about'>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </div>

        )


    }

}

export default Header;