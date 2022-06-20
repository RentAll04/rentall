import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

import rectangle from "../images/rectangle.svg";
import tag from "../images/tag.svg";
import categories from "../images/Categories.svg";
import RentCard from "../images/Rent Card.svg";
import line from "../images/Line.svg";
import Filter from "../images/Filter.svg";
import Rating from "../images/Rating.svg";
import Price from "../images/Price.svg";
import Delivery from "../images/Delivery.svg";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Slider from "@material-ui/core/Slider";
import { getCategory } from "../redux/categories/actionReducer";
import CategoryCard from "./CategoryCard";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: 200,
  },
  text: {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "28px",
    marginBottom: 0,
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const Title = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */
  display: flex;
  align-items: center;
  /* Dark Blue */
  color: #1a2263;
  text-decoration: underline linear-gradient(90deg, #df6464 0%, #76a0e6 100%);
`;

const Category = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { category } = useSelector((state) => {
    return {
      category: state.categoryData.response,
    };
  });
  const classes = useStyles();
  const [state, setState] = useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    const name = match.params.category;
    dispatch(getCategory(name.toLowerCase()));
  }, []);

  return (
    <>
      <section style={{ marginTop: "100px", padding: "20px" }}>
        <Container>
          <img src={rectangle} style={{ width: "80vw", height: "50%" }} />
        </Container>
      </section>

      <Container>
        <section style={{ position: "relative" }}>
          <div>
            <div style={{ position: "relative" }}>
              <Title>{match.params.category}</Title>
            </div>

            <FormControl
              style={{ position: "absolute", right: "0" }}
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Age"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Featured</option>
                <option value={20}>Higest To Lowest</option>
                <option value={30}>Trendy</option>
              </Select>
            </FormControl>
          </div>
        </section>

        <section style={{ marginTop: "50px" }}>
          <Row>
            <Col md={3}>
              <Row>
                <img
                  src={categories}
                  alt="categories"
                  style={{ boxShadow: "-5px 10px 10px rgba(0, 0, 0, 0.1)" }}
                />
              </Row>
              <Row style={{ marginTop: "40px" }}>
                <div
                  style={{
                    background: "white",
                    borderRadius: "10px",
                    boxShadow: "-4px 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div style={{ padding: "20px" }}>
                    <img src={Filter} alt="filter" />
                    <div style={{ marginTop: "20px" }}>
                      <p className={classes.text}>
                        <img src={Price} alt="price" />
                      </p>
                      <div className={classes.root}>
                        <Slider
                          defaultValue={0}
                          getAriaValueText={valuetext}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={1}
                          marks
                          min={0}
                          max={10}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                      <p className={classes.text}>
                        <img src={Delivery} alt="Delivery" />
                      </p>
                      <div className={classes.root}>
                        <Slider
                          defaultValue={0}
                          getAriaValueText={valuetext}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={1}
                          marks
                          min={0}
                          max={10}
                        />
                      </div>
                    </div>

                    <img src={Rating} alt="rating" />
                  </div>
                </div>
              </Row>
            </Col>

            <Col md={9}>
              <Row style={{ marginTop: "60px" }}>
                {category?.map((cat) => (
                  <Col md={4}>
                    <Link to={`/category/${match.params.category}/${cat.id}`}>
                      {/* <img key={cat.id} alt={cat.name} src={RentCard} /> */}
                      <CategoryCard key={cat.id} details={cat} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Category;
