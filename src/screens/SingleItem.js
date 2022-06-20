import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import main from "../images/item_image.svg";
import ship from "../images/shipped.svg";
import card from "../images/Rent Card.svg";
import CategoryCard from "../components/CategoryCard";
import star from "../images/star.svg";
var axios = require("axios");

// const main =
//   "https://4.imimg.com/data4/VW/KR/MY-4085966/portable-electric-cloth-dryer-500x500.jpg";
const Draw = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: rgba(26, 34, 99, 0.6);
`;

const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 32px;
  margin-bottom: 0px;
  color: #000000;
  text-transform: uppercase;
`;

const Company = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 33px;
  color: rgba(0, 0, 0, 0.7);
`;

const Cost = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 44px;
  color: #fb5c5d;
`;

const Card = styled.div`
  padding: 20px;
  height: 439px;
  border-radius: 12px;
  border: 1px solid rgba(26, 34, 99, 0.05);
  box-shadow: 15px 15px 10px -9px rgba(26, 34, 99, 0.05);
`;

const Card_Product = styled.div`
  width: 253px;
  height: 223.04px;
  border-radius: 10px;
  border: 1px solid rgba(26, 34, 99, 0.15);
  //   filter: drop-shadow(-8px 10px 20px rgba(26, 34, 99, 0.15));
  //   box-shadow: 20px 20px 10px -9px rgba(26, 34, 99, 0.14),
  //     -20px -20px 10px -9px rgba(26, 34, 99, 0.14);
`;

const Title_Product = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #1a2263;
`;

const products_rented = [
  {
    id: "1",
    title: "bag cover",
    ship: "3",
    image:
      "https://rukminim1.flixcart.com/image/416/416/bag-cover/t/q/u/rc106-destiny-m-original-imaek7v4hs6znybu.jpeg?q=70",
  },
  {
    id: "2",
    title: "coffee maker",
    ship: "2",
    image:
      "https://4.imimg.com/data4/GH/YN/MY-31037626/coffee-maker-500x500.jpg",
  },
  {
    id: "3",
    title: "umbrella",
    ship: "2",
    image:
      "https://rukminim1.flixcart.com/image/612/612/koynr0w0/umbrella/l/t/5/21-leatrix-21-inch-2-fold-auto-open-eume-original-imag3avryrbwgmzz.jpeg?q=70",
  },
];

export default function SingleItem() {
  const match = useRouteMatch();
  // console.log(match.params);
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [recommendation, setRecommendation] = useState({
    id: match.params.id,
    name: "",
    delivery: "",
  });
  const [values, setValues] = useState(null);
  let season = null;
  let final_arr = [];
  const db = getFirestore();

  const d = new Date();
  let month = d.getMonth();
  if ((month === 0) | (month === 10) | (month === 11)) {
    season = "Winter";
  } else if ((month === 1) | (month === 2)) {
    season = "Spring";
  } else if ((month === 3) | (month === 4) | (month === 5)) {
    season = "Summer";
  } else if ((month === 6) | (month === 7)) {
    season = "Rainy";
  } else if ((month === 8) | (month === 9)) {
    season = "Fall";
  }

  const getItemData = async (category, id) => {
    const docRef = doc(db, `/category/${category}/products/${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
      setDate(docSnap.data().rental_time);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getProductsData = async () => {
    const docRef = doc(db, `/Products_Rented/${season}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const arrayObject = Object.values(docSnap.data());
      for (let i = 0; i <= arrayObject.length; i++) {
        if (arrayObject[i]?.includes(match.params.id)) {
          final_arr.push(arrayObject[i]);
        }
      }
      setValues(final_arr);
      // setDate(docSnap.data().rental_time);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    const name = match.params.category;
    getItemData(name.toLowerCase(), match.params.id);
    getProductsData();
  }, []);

  // console.log(values);

  useEffect(() => {
    postData(values);
    fetchRecommendation();
  }, []);

  const postData = (data) => {
    var axios = require("axios");
    var config = {
      method: "put",
      url: `http://127.0.0.1:5000/category/${match.params.category}/${match.params.id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PUT,PATCH,DELETE",
        Authorization: "Bearer",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // localStorage.setItem("access", JSON.stringify(response.data));
        window.location.href = `/category/${match.params.category}/${match.params.id}`;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchRecommendation = async () => {
    const response = await fetch(
      `http://127.0.0.1:5000/category/${match.params.category}/${match.params.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const recommend = await response.json();
    setRecommendation(recommend);
    // console.log(data);
  };

  return (
    <>
      {data?.length !== 0 ? (
        <section style={{ marginTop: "100px" }}>
          <Container>
            <div>
              <Draw>
                <Link to="/">Home</Link> {">"} {match.params.category} {">"}{" "}
                {data?.name}
              </Draw>
            </div>

            <Row>
              <Col lg={7}>
                <img src={main} alt="main image" />
              </Col>

              <Col lg={5}>
                <Card>
                  <Title>{data?.name}</Title>
                  <p>
                    by:<Company style={{}}> {data?.brand_name}</Company>
                  </p>

                  <p>
                    RentAt:{" "}
                    <Cost>INR {Math.floor(Math.random() * 1000 + 1)}/mon</Cost>
                  </p>

                  <p>
                    {data?.type} {data?.name} from {data?.brand_name} which has
                    been rented {data?.quality - 5} times. Curabitur arcu erat,
                    accumsan id imperdiet et, porttitor at sem. Mauris blandit
                    aliquet elit, eget tincidunt nibh pulvinar a.
                  </p>

                  <div style={{ width: "120px" }}>
                    <Row className="justify-content-left">
                      <Col
                        lg={8}
                        style={{
                          fontFamily: "Raleway",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {data?.delivery} Day
                      </Col>
                      <Col
                        lg={4}
                        style={{ disply: "flex", justifyContent: "left" }}
                      >
                        <img src={ship} alt="ship" />
                      </Col>
                    </Row>
                  </div>

                  <p>
                    Rent Duration: <Cost>{date} Days</Cost>
                  </p>

                  <p>
                    <Button variant="outline-danger">Rent It</Button>
                  </p>

                  {/* <p>
                    Specifics:
                    <li>
                      {data?.specifics.map((specific) => (
                        <ul>{specific}</ul>
                      ))}
                    </li>
                  </p> */}
                </Card>
              </Col>
            </Row>

            <section style={{ marginTop: "50px" }}>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  color: "#1A2263",
                }}
              >
                Products Rented Along With {data?.name} from {data?.brand_name}
              </p>

              <Row style={{ width: "100%", marginBottom: "40px" }}>
                {recommendation?.length !== 0 ? (
                  products_rented?.map((details, index) => (
                    <Col lg={3}>
                      <Card_Product key={index}>
                        <img
                          src={details.image}
                          width="253px"
                          height="120px"
                          style={{ borderRadius: "10px 10px 0px 0px" }}
                        />
                        <div style={{ margin: "12px" }}>
                          <Row>
                            <Col lg={7}>
                              <Title_Product>{details.title}</Title_Product>
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
                                <Col
                                  lg={12}
                                  style={{
                                    fontSize: "11px",
                                    color: "#1A2263",
                                    fontWeight: "400",
                                    textAlign: "left",
                                  }}
                                >
                                  {details.ship} Days Ship
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </Card_Product>
                    </Col>
                  ))
                ) : (
                  <p>Loading</p>
                )}
                {/* {products_rented.map((details, index) => (
                  <Col lg={3}>
                    <Card_Product key={index}>
                      <img
                        src={
                          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"
                        }
                        width="253px"
                        height="120px"
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                      />
                      <div style={{ margin: "12px" }}>
                        <Row>
                          <Col lg={7}>
                            <Title_Product>{details.title}</Title_Product>
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
                              
                              <Col
                                lg={12}
                                style={{
                                  fontSize: "11px",
                                  color: "#1A2263",
                                  fontWeight: "400",
                                  textAlign: "left",
                                }}
                              >
                                {details.ship} Days Ship
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </Card_Product>
                  </Col>
                ))} */}
              </Row>
            </section>
          </Container>
        </section>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
