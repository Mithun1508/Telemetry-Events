import React from "react";
import "./styles.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { HOME_ROUTE, USER_GROUP_ROUTE, USER_ROUTE } from "./routes";
import UserPage from "./pages/user/UserPage";
import UserGroupPage from "./pages/user-group/UserGroupPage";
import HomePage from "./pages/home/HomePage";
import AppContextProvider from "./contexts/App/AppContextProvider";
import { HashRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <main>
      <Router>
        <div className={"app-container"}>
          <AppContextProvider>
            <Switch>
              <Route path={USER_ROUTE} component={UserPage} />
              <Route path={USER_GROUP_ROUTE} component={UserGroupPage} />
              <Route exact path={HOME_ROUTE} component={HomePage} />
              <Redirect from={"*"} to={HOME_ROUTE} />
            </Switch>
          </AppContextProvider>
        </div>
      </Router>
    </main>
  );
};

export default App;
