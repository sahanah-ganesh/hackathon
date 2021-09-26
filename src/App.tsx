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
import { useClearCache } from "react-clear-cache";
import { Text, Link, Box } from "rebass/styled-components";
import { useTranslation } from "react-i18next";
/* cra built upon webpack with support for code splitting
lazily load components with suspense while waiting for dynamic imports */
const Home = lazy(() => import("./pages/home/home"));
const Chat = lazy(() => import("./pages/chat/chat"));

function _ScrollToTop(props: any) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  const { t } = useTranslation();
  const { isLatestVersion, emptyCacheStorage } = useClearCache();
  return (
    <>
      {!isLatestVersion && (
        <Box
          style={{
            backgroundColor: "red",
            width: "100%",
            height: "2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            <Link
              onClick={(e) => {
                e.preventDefault();
                emptyCacheStorage();
              }}
            >
              {t("buttons.update")}
            </Link>
          </Text>
        </Box>
      )}
      <ViewportProvider>
        <GlobalStyle />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <ScrollToTop>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/start">
                  <Chat />
                </Route>
                <Route exact path="/login">
                  <Chat />
                </Route>
              </Switch>
            </ScrollToTop>
          </Suspense>
        </Router>
      </ViewportProvider>
    </>
  );
}

export default App;
