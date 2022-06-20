import React, { useState, useEffect, Suspense } from "react";
import { Card, Col, Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginScreen() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage:
            'url("https://img.freepik.com/free-photo/old-gray-cement-wall-background_34552-324.jpg?size=626&ext=jpg&ga=GA1.2.1139941274.1609027200")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Card
            style={{
              position: "relative",
              borderRadius: "5px",
              margin: "120px",
            }}
          >
            <Row>
              <Col
                style={{
                  background:
                    "linear-gradient(45deg, #1A2263 40%, rgba(255, 0, 0, 1) 100%)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "50px",
                }}
              >
                <p style={{ fontSize: "2rem" }}>
                  Login to Join the <br />
                  Rentalution
                </p>
              </Col>
              <Col style={{ padding: "30px 70px" }}>
                <Row>
                  <Col>
                    <h4 className="text-center">Log In</h4>
                    <form>
                      <Row>
                        <Col>
                          <div
                            className="form-group"
                            style={{ marginBottom: "0px" }}
                          >
                            <label
                              htmlFor="email"
                              style={{ marginBottom: "0px" }}
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Enter Your Email"
                              style={{ width: "100%" }}
                              onChange={(e) => {
                                console.log("violakjdflv");
                                // handleInputChange(e);
                              }}
                            />
                            <small className="form-text text-danger"></small>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <div
                            className="form-group"
                            style={{ marginBottom: "0px" }}
                          >
                            <label
                              htmlFor="password"
                              style={{ marginBottom: "0px" }}
                            >
                              Password :
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="Enter Your Password"
                              style={{ width: "100%" }}
                              onChange={(e) => {
                                console.log(e);
                                // handleInputChange(e);
                              }}
                            />
                            <small className="form-text text-danger">
                              {/* {errors.password}&nbsp; */}
                              {/* kfjnidvfifnd */}
                            </small>
                          </div>
                        </Col>
                      </Row>
                    </form>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Button
                        className="btn btn-primary my-2"
                        // onClick={handleClick}
                      >
                        Submit
                      </Button>
                    </div>
                    <Row className="text-center">
                      <Link to="/sign-up" style={{ width: "100%" }}>
                        Sign-Up
                      </Link>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Suspense>
      </div>
    </>
  );
}

export default LoginScreen;
