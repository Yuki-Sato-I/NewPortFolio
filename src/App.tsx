import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// common
import { RouteName } from './common/Const';
import { Provider } from './provider/Provider';
// components
import Top from './components/pages/Top'
import Home from './components/pages/Home'
import WorkDetail from './components/pages/WorkDetail';
import NotFound from './components/pages/NotFound';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Provider>
            <Route exact path={RouteName.ROOT} component={Top} />
            <Route exact path={RouteName.HOME} component={Home} />
            <Route exact path={RouteName.WORKDETAIL} component={WorkDetail} />
            <Route component={NotFound} />
          </Provider>
        </Switch>
      </Route>
    </BrowserRouter>
  );
}

export default App;
