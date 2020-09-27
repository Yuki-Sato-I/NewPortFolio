import React from 'react';
// library
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteName } from './common/Const';

// components
import Top from './components/pages/Top'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route exact path={RouteName.ROOT} component={Top} />
        </Switch>
      </Route>
    </BrowserRouter>
  );
}

export default App;
