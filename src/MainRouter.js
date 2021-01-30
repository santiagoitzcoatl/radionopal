import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Programacion from './pages/Programacion';
import Home from './pages/Home';

const MainRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/programacion" render={() => <Programacion />} />
      <Route path="/" render={() => <Home />} />
    </Switch>
  </HashRouter>
);

export default MainRouter;
