import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

import illustration from "../images/illustration.svg";
import quote from "../images/quote.svg";
import device from "../images/device.svg";
import image from "../images/camera.svg";
import RentCard from "../images/Rent Card.svg";
import TopRent from "../images/TopRent.svg";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CategoryCard from "./CategoryCard";

const dummy = [
  {
    id: "1",
    category: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/2777/2777142.png",
  },
  {
    id: "2",
    category: "Furniture",
    image: "https://cdn-icons-png.flaticon.com/512/1606/1606197.png",
  },
  {
    id: "3",
    category: "Clothes",
    image: "https://cdn-icons-png.flaticon.com/512/2789/2789609.png",
  },
  {
    id: "4",
    category: "Sports",
    image: "https://cdn-icons-png.flaticon.com/512/4163/4163679.png",
  },
  {
    id: "5",
    category: "Medical",
    image: "https://cdn-icons-png.flaticon.com/512/687/687529.png",
  },
  {
    id: "6",
    category: "Accessories",
    image: "https://cdn-icons-png.flaticon.com/512/775/775385.png",
  },
];

const CardData = [
  { id: "1", category: "Category1", image: "" },
  { id: "2", category: "Category2", images: "" },
  { id: "3", category: "Category3", images: "" },
  { id: "4", category: "Category4", images: "" },
];

const Category = styled.div`
  margin-top: 30px;
`;

const CardCat = styled.div`
  background: #ffffff;
  border: 1px solid #1a2263;
  box-shadow: 0px 8px 16px rgba(26, 34, 99, 0.2);
  border-radius: 10px;
  width: 104px;
  height: 94px;
  align-items: center;
  text-align: center;
  padding-top: 10px;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 236,
    maxHeight: 185,
  },
});

const Illustration = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <div style={{ paddingTop: "220px", margin: "auto" }}>
          <Row>
            <Col style={{ alignItems: "center" }} lg={5}>
              {/* <img src={quote} alt="illustration" /> */}
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: "40px",
                  color: "#1A2263",
                }}
              >
                Be a Part <br />
                of the
                <br />
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    fontSize: "60px",
                    color: "rgba(255, 0, 0, 1)",
                  }}
                >
                  Rentalution
                </span>
              </p>
            </Col>
            <Col lg={7}>
              <img src={illustration} alt="illustration" />
            </Col>
          </Row>
        </div>

        <Category>
          <Row>
            {dummy.map((category) => (
              <Col>
                <Link to={`/category/${category.category}`}>
                  <CardCat key={category.id}>
                    <img
                      style={{ width: "40%", height: "50%" }}
                      alt="device"
                      src={category.image}
                    />
                    <p
                      style={{
                        marginTop: "8px",
                        textDecoration: "none",
                        color: "#1A2263",
                        fontWeight: "500",
                      }}
                    >
                      {category.category}
                    </p>
                  </CardCat>
                </Link>
              </Col>
            ))}
          </Row>
        </Category>
        <br />
        <br />
        <br />
        <div>
          <img src={TopRent} alt="top" />
          <section style={{ marginBottom: "100px" }}>
            <Row>
              {CardData.map((category) => (
                <Col md={3}>
                  <Link to={`/category/${category.category}/${category.id}`}>
                    <CategoryCard key={category.id} details={category} />
                    {/* <img
                      key={category.id}
                      alt={category.category}
                      src={RentCard}
                    /> */}
                  </Link>
                </Col>
              ))}
            </Row>
            {/* <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="120"
                                image={image}
                                title="Contemplative Reptile"
                                />
                                <CardContent style={{padding:"0"}}>
                                <Typography style={{margin:"0"}} gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography>
                                    RentAt <span>$60/mon</span>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> */}
          </section>
        </div>
      </Container>
    </>
  );
};

export default Illustration;
