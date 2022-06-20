import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from "./components/Category";
import { Provider } from "react-redux";
import store from "./redux/store";
import Data from "./screens/Data";
import SingleItem from "./screens/SingleItem";
import SignUpScreen from "./screens/Signup";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUpScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/category/:category" component={Category} />
            <Route
              exact
              path="/category/:category/:id"
              component={SingleItem}
            />

            <Route exact path="/data" component={Data} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
