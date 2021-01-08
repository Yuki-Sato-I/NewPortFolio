import React from 'react';
// library
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteName } from './common/Const';
// components
import Top from './components/pages/Top'
import Home from './components/pages/Home'
import './App.css';
import WorkDetail from './components/pages/WorkDetail';
interface QueryContext {
  query: string;
  setQuery: any;
}

const initialContext: QueryContext = {
  query: 'about',
  setQuery: () => {},
}

export const QueryContext = React.createContext(initialContext);

function App() {
  const [query, setQuery] = React.useState(initialContext.query)
  return (
    <QueryContext.Provider value={{query, setQuery}}>
      <BrowserRouter>
        <Route>
          <Switch>
            <Route exact path={RouteName.ROOT} component={Top} />
            <Route exact path={RouteName.HOME} component={Home} />
            <Route exact path={RouteName.WORKDETAIL} component={WorkDetail} />
          </Switch>
        </Route>
      </BrowserRouter>
    </QueryContext.Provider>

  );
}

export default App;
