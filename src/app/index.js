import React from "react";
import { Layout } from "antd";
import { ConnectedRouter } from "connected-react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import ConnectedIntlProvider from "./containers/ConnectedIntlProvider";
import configureStore from "./store";
import history from "./helpers/history";
import { addLocalesDate } from "./helpers/locale";
import Header from "./components/Header";
import OrganizationsByGroups from "./containers/OrganizationsByGroups";
import Settings from "./components/Settings";
const store = configureStore();
addLocalesDate();

function App() {
  return (
    <Provider store={store}>
      <ConnectedIntlProvider>
        <ConnectedRouter history={history}>
          <Layout className="app">
            <Header />
            <Layout>
              <Switch>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/organization-by-groups">
                  <OrganizationsByGroups />
                </Route>
                <Route path="/">
                  <Redirect to="/organization-by-groups" />
                </Route>
              </Switch>
            </Layout>
          </Layout>
        </ConnectedRouter>
      </ConnectedIntlProvider>
    </Provider>
  );
}

export default App;
