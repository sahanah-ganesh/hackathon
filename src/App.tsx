import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import Home from "./pages/home/home";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/">{Home}</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
