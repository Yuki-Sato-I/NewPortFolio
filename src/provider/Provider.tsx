import React, { useEffect, useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';

interface QueryContext {
  query: string;
  setQuery: any;
}

const initialContext: QueryContext = {
  query: 'about',
  setQuery: () => {},
}

export const QueryContext = createContext(initialContext);

export const Provider: React.FC = ({ children }): JSX.Element => {
  const [query, setQuery] = useState(initialContext.query)
  const history = useHistory();

  useEffect(()=> {
    if(query) {
      history.push({
        pathname: '/home',
        search: `?page=${query}`
      })
    }
  }, [query]);

  return (
    <QueryContext.Provider value={{query, setQuery}}>
      {children}
    </QueryContext.Provider>
  )
}
