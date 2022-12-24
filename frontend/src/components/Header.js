import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>

        <Navbar.Brand href="/">Pro Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </header>
  )
}

export default Header