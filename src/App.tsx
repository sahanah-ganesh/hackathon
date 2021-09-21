import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = (): JSX.Element => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
};

export default App;
