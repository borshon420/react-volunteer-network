import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../logos/Group 1329.png";
import './Header.css';

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <div className="header">
      <Navbar>
        <Container>
          <div className="logo justify-content-end">
            <img style={{ width: "150px" }} src={logo} alt="" />
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/donation">Donation</NavLink>
              <NavLink to="/events">Events</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              {user.email ? 
              <Button onClick={logOut} className="me-2" variant="primary">log Out</Button>
              :
              <NavLink to="/login">
                  <Button className="me-2" variant="primary">Login</Button>
              </NavLink>}
              <NavLink to="/register">
                  <Button className="me-2" variant="primary">Register</Button>
              </NavLink>
              <Button variant="dark">Admin</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
