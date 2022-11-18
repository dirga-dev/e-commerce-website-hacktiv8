import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router';
import { useSelector } from "react-redux";

const NavBar = ({setToken}) => {
  const navigate = useNavigate();

  const {cartTotalQuantity} = useSelector(state => state.cart);

  const logoutHandler = () => {
    setToken("");
    localStorage.clear();
  }

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top" className="py-3">
      <Container className="mx-auto">
        <NavLink to="/" style={{ textDecoration: 'none' }}><Navbar.Brand className=" fs-4">Tokokeren</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/products" style={{ textDecoration: 'none' }} className="nav-item">Products</NavLink>
          </Nav>
          <Button variant="success" style={{marginRight: "5px"}} onClick={() => navigate('/cart')}>
            <i className="fa fa-shopping-cart"></i> Cart ({cartTotalQuantity})</Button>
          <Button variant="outline-secondary" onClick={() => logoutHandler()}>
            <i className="fa fa-sign-out"></i>Log out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;