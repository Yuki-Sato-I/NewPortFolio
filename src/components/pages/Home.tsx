import React, { useState } from 'react';
import queryString from 'query-string';
// common
import { capitalize } from '../../common/Function';
// atoms
import Title, { TitleThemes } from '../atoms/Title';
// molecules
import Nav from '../molecules/Nav';
//organisms
import Contact from '../organisms/Contact';
import About from '../organisms/About';
import Works from '../organisms/Works';
import History from '../organisms/History';
//templates
import HomeLayout from '../templates/HomeLayout';

const Home: React.FC = (props: any) => {
  const qs = queryString.parse(props.location.search);
  const [query, setQuery] = useState(qs.page && typeof qs.page === 'string' ? qs.page : 'about');

  const getQuery = (newQuery: string) => {
    setQuery(newQuery);
  }

  return (
    <HomeLayout title="Portfolio | Yuki Sato">
      <Nav getQuery={getQuery}/>
      <Title
        theme={[TitleThemes.INIT]}
        propStyle={{textAlign: 'center'}}
      >
        {capitalize(query)}
      </Title>
      {query === 'about' ? <About /> : ''}
      {/* {query === 'works' ? <Works /> : ''} */}
      {query === 'history' ? <History /> : ''}
      {/* {query === 'contact' ? <Contact /> : ''} */}
      {console.log(query)}
    </HomeLayout>
  );
}

export default Home;