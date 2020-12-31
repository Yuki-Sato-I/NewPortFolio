import React from 'react';
// library
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteName } from './common/Const';

// components
import Top from './components/pages/Top'
import Home from './components/pages/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route exact path={RouteName.ROOT} component={Top} />
          <Route exact path={RouteName.HOME} component={Home} />
        </Switch>
      </Route>
    </BrowserRouter>
  );
}

export default App;
