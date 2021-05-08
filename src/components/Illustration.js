import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

import illustration from "../images/illustration.svg";
import quote from "../images/quote.svg";
import device from "../images/device.svg";
import image from "../images/camera.svg";
import RentCard from "../images/Rent Card.svg";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const dummy = [
    {id:"1", category: "Category1"},
    {id:"2", category: "Category2"},
    {id:"3", category: "Category3"},
    {id:"4", category: "Category4"},
    {id:"5", category: "Category5"},
    {id:"6", category: "Category6"},
]

const CardData = [
    {id:"1", category: "Category1"},
    {id:"2", category: "Category2"},
    {id:"3", category: "Category3"},
    {id:"4", category: "Category4"},
]

const Category = styled.div`
    margin-top: 30px
`

const CardCat = styled.div`
    background: #FFFFFF;
    border: 1px solid #1A2263;
    box-shadow: 0px 8px 16px rgba(26, 34, 99, 0.20);
    border-radius: 10px;
    width: 104px;
    height: 94px;
    align-items: center;
    text-align: center;
    padding-top:10px
`

const useStyles = makeStyles({
    root: {
      maxWidth: 236,
      maxHeight: 185
    },
  });


const Illustration = () => {
    const classes = useStyles();

    return (
        <>
            <Container>
                <div style={{paddingTop:"220px", margin:"auto"}}>
                    <Row>
                        <Col style={{alignItems:"center"}} md={5}>
                            <img src={quote} alt="illustration"/>
                        </Col>
                        <Col md={7}>
                            <img src={illustration} alt="illustration"/>
                        </Col>
                    </Row>
                </div>

                <Category>
                    <Row>
                        {dummy.map((category) => (
                            <Col>
                                <Link to="/category">
                                    <CardCat key={category.id}>
                                        <img alt="device" src={device}/>
                                        <p>{category.category}</p>
                                    </CardCat>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Category>
                <br/>
                <br/>
                <br/>
                <div>
                    <p>Top RentALL</p>
                    <section style={{marginBottom:"100px"}}>
                    <Row>
                        {CardData.map((category) => (
                            <Col md={3}>
                                    <img key={category.id} alt={category.category} src={RentCard}/>
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
}
 
export default Illustration;