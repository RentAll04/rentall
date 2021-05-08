import React,{useState,useEffect} from "react";

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

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Slider from '@material-ui/core/Slider';

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
    marginBottom:0,
  }
}));

function valuetext(value) {
  return `${value}°C`;
}


const CardData = [
  {id:"1", category: "Category1"},
  {id:"2", category: "Category2"},
  {id:"3", category: "Category3"},
  {id:"4", category: "Category4"},
  {id:"5", category: "Category4"},
  {id:"6", category: "Category4"},
  {id:"7", category: "Category4"},
  {id:"8", category: "Category4"},
  {id:"9", category: "Category4"},
]


const Category = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    return ( 
        <>
            
              <section style={{marginTop:"100px",padding:"20px"}}>
                <Container>
                  <img src={rectangle} style={{width:"80vw",height:"50%"}}/>
                </Container>
              </section>

              <Container>
                <section style={{position:"relative"}}>
                  <div>
                    <img src={tag} alt="tag"/>
                    <FormControl style={{position:"absolute",right:"0"}} variant="outlined" className={classes.formControl}>
                      <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
                      <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        label="Age"
                        inputProps={{
                          name: 'age',
                          id: 'outlined-age-native-simple',
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

                <section style={{marginTop:"50px"}}>
                  <Row>
        
                      <Col md={3}>
                        <Row>
                          <img src={categories} alt="categories" style={{boxShadow: "-5px 10px 10px rgba(0, 0, 0, 0.1)"}}/>
                        </Row>
                        <Row style={{marginTop:"40px"}}>
                          <div style={{background:"white", borderRadius:"10px",boxShadow: "-4px 10px 20px rgba(0, 0, 0, 0.1)"}}>
                            <div style={{padding:"20px"}}>
                              <img src={Filter} alt="filter"/>
                              <div style={{marginTop:"20px"}}>
                                <p className={classes.text}>
                                  <img src={Price} alt="price"/>
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

                              <div style={{marginTop:"10px",marginBottom:"10px"}}>
                                <p className={classes.text}>
                                  <img src={Delivery} alt="Delivery"/>
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
                              
                              <img src={Rating} alt="rating"/>
                            </div>
                           
                          </div>
                        </Row>
                      </Col>
                   

                   
                    <Col md={9}>
                      <Row>
                          {CardData.map((category) => (
                              <Col md={4}>
                                      <img key={category.id} alt={category.category} src={RentCard}/>
                              </Col>
                          ))}
                      </Row>
                    </Col>
                  </Row>
                </section>
              </Container>



 
            
        </>
         );
}
 
export default Category;