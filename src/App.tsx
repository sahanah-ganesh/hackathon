import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import GlobalStyle from "./theme/globalStyle";
import { ViewportProvider } from "./hooks/useViewport";

/* cra built upon webpack with support for code splitting
lazily load components with suspense while waiting for dynamic imports */
const Home = lazy(() => import("./pages/home/home"));

function _ScrollToTop(props: any) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <ViewportProvider>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about"></Route>
            </Switch>
          </ScrollToTop>
        </Suspense>
      </Router>
    </ViewportProvider>
  );
}

export default App;
