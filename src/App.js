import Home from './screens/Home';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Category from './components/Category';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/category" component={Category}/>
        </Switch>
      </Router>
     
        
    </div>
  );
}

export default App;
