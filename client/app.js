import React from "react";
import Reflux from "reflux";
import Bluebird from "bluebird";
import ShowcaseApp from "./components/ShowcaseApp";
import Showcases from "./components/Showcases";
import Router, { Route, DefaultRoute } from "react-router";

// Reflux by default contains some kökkö promise. Let's use Bluebirdah.
Reflux.setPromise(Bluebird);

require('./app.less');

let routes = (
  <Route handler={ShowcaseApp} path="/">
    <DefaultRoute handler={Showcases} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});