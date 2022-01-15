import FirstLogin from "./FirstLogin";
import SecondLogin from "./SecondLogin";
import Rests from "./Rests";
import RestIndObj from "./RestObj"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FirstLogin />
        </Route>
        <Route path="/otp">
          <SecondLogin />
        </Route>
        <Route path="/rests">
          <Rests />
        </Route>
        <Route path="/restaurantDetails">
          <RestIndObj />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;