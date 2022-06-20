import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import polaroid from "../images/polaroid.svg";
import star from "../images/star.svg";
import shipped from "../images/shipped.svg";

const Card = styled.div`
  width: 253px;
  height: 223.04px;
  border-radius: 10px;
  border: 1px solid rgba(26, 34, 99, 0.15);
  //   filter: drop-shadow(-8px 10px 20px rgba(26, 34, 99, 0.15));
  //   box-shadow: 20px 20px 10px -9px rgba(26, 34, 99, 0.14),
  //     -20px -20px 10px -9px rgba(26, 34, 99, 0.14);
`;

const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #1a2263;
`;

export default function CategoryCard(details) {
  // console.log(
  //   details?.details.product_image ? details?.details.product_image[0] : "tp"
  // );
  return (
    <div style={{ marginBottom: "14px" }}>
      <Card>
        <img
          src={
            details.details.product_image
              ? details.details.product_image[0]
              : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"
          }
          width="253px"
          height="120px"
          style={{ borderRadius: "10px 10px 0px 0px" }}
        />
        <div style={{ margin: "12px" }}>
          <Row>
            <Col lg={7}>
              <Title>{details.details.name}</Title>
            </Col>
            <Col lg={5}>
              <img src={star} />
            </Col>
          </Row>

          <Row>
            <Col lg={7}>
              <p
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "11px",
                  fontWeight: "400",
                  color: "rgba(26, 34, 99, 0.6)",
                }}
              >
                RentAt{" "}
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  Rs.{Math.floor(Math.random() * 1000 + 1)}/mon
                </span>
              </p>
            </Col>
            <Col lg={5}>
              <Row className="justify-content-center">
                {/* <Col lg={2}>
                  <img src={shipped} alt="ship" />
                </Col> */}
                <Col
                  lg={12}
                  style={{
                    fontSize: "11px",
                    color: "#1A2263",
                    fontWeight: "400",
                    textAlign: "left",
                  }}
                >
                  {details.details.delivery} Days Ship
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}
