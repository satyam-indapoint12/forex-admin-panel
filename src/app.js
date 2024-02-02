import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Layout from "layout";
import "assets/css/material-dashboard-react.css?v=1.10.0";

// eslint-disable-next-line react/no-deprecated

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
