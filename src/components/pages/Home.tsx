import React, { useContext } from 'react';
// common
import { capitalize } from '../../common/Function';
import { QueryContext } from '../../provider/Provider';
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

const Home: React.FC = () => {
  const queryContext = useContext(QueryContext);

  return (
    <HomeLayout title="Portfolio | Yuki Sato">
      <Nav />
      <Title
        theme={[TitleThemes.INIT]}
        propStyle={{textAlign: 'center'}}
      >
        {queryContext.query && capitalize(queryContext.query)}
      </Title>
      {queryContext.query === 'about' ? <About /> :
        queryContext.query === 'works' ? <Works /> :
          queryContext.query === 'history' ? <History /> :
            queryContext.query === 'contact' ? <Contact /> : <React.Fragment />}
    </HomeLayout>
  );
}

export default Home;