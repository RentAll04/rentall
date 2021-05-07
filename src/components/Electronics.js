import React,{useState,useEffect} from "react";

import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

import rectangle from "../images/rectangle.svg";
import tag from "../images/tag.svg";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const Electronics = () => {
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
                <section>
                  <div>
                    <img src={tag} alt="tag"/>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
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
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                    </FormControl>
                  </div>
                </section>
              </Container>

 
            
        </>
         );
}
 
export default Electronics;