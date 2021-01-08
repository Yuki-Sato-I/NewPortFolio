import React, { useContext, useEffect } from 'react';
import queryString from 'query-string';
// common
import { capitalize } from '../../common/Function';
import { QueryContext } from './../../App'
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
  const queryContext = useContext(QueryContext);
  useEffect(() => {
    const qs = queryString.parse(props.location.search);
    queryContext.setQuery(qs.page);
  }, [queryContext.query])

  useEffect(() => {
  }, [])
  return (
    <HomeLayout title="Portfolio | Yuki Sato">
      <Nav />
      <Title
        theme={[TitleThemes.INIT]}
        propStyle={{textAlign: 'center'}}
      >
        {capitalize(queryContext.query)}
      </Title>
      {queryContext.query === 'about' ? <About /> : ''}
      {queryContext.query === 'works' ? <Works /> : 'works'}
      {queryContext.query === 'history' ? <History /> : ''}
      {queryContext.query === 'contact' ? <Contact /> : ''}
      {console.log(queryContext.query)}
    </HomeLayout>
  );
}

export default Home;