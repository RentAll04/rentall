import React from "react";
import styled from "styled-components";
import logo from "../images/Logo.svg";
import searchIcon from "../images/Search.svg";
import location from "../images/location.svg";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Nav = styled.nav`
  background: #fff;
  height: 80px;
  box-shadow: 0px 6px 12px -6px rgba(0, 0, 0, 0.05);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const LogIn = styled.a`
  color: #1a2263;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  padding-left: 20px;
  vertical-align: center;
  width: 70%;
  display: inline-flex;
  place-items: center;
  background: #ffffff;
  border: 1px solid rgba(26, 34, 99, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
`;

const Location = styled.div`
  padding-left: 40px;
  vertical-align: center;
  display: inline-flex;
  place-items: center;
  background: #ffffff;
  width: 80%;
  margin-top: 10px;
  background: #fff;
  box-shadow: 0px 6px 12px -6px rgba(0, 0, 0, 0.05);
`;

const Navbar = () => {
  return (
    <Nav className="navbar">
      <Row style={{ width: "100%", paddingLeft: "60px" }}>
        <Col md={2} style={{ display: "inline-flex", placeItems: "center" }}>
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </Col>
        <Col md={2}>
          <Location>
            <img src={location} alt="location" />
            <p style={{ padding: "6px 6px", margin: "0px" }}>Location</p>
          </Location>
        </Col>
        <Col md={5}>
          <div style={{ paddingLeft: "50px" }}>
            <Form>
              <img alt="search" src={searchIcon} />
              <input
                placeholder="Search for an experience"
                type="/text"
                style={{
                  border: "1px solid white",
                  borderRadius: "6px",
                  padding: "10px 12px",
                  width: "90%",
                }}
              />
            </Form>
          </div>
        </Col>
        <Col style={{ display: "inline-flex", placeItems: "center" }} md={3}>
          <Link to="/sign-up">
            <LogIn>Log In/SignUp</LogIn>
          </Link>
        </Col>
      </Row>
    </Nav>
  );
};

/**/
export default Navbar;
