import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Restaurants from '../pages/restaurants';
import Meny from '../pages/meny';
import Contact from '../pages/contact';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props: any) => <Home {...props} />} />
      <Route
        exact
        path="/omoss"
        render={(props: any) => <About {...props} />}
      />
      <Route
        exact
        path="/restauranger"
        render={(props: any) => <Restaurants {...props} />}
      />
      <Route
        exact
        path="/menyer"
        render={(props: any) => <Meny {...props} />}
      />
      <Route
        exact
        path="/kontakt"
        render={(props: any) => <Contact {...props} />}
      />
    </Switch>
  );
}
