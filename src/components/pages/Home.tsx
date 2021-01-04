import React, { useState, useEffect, useContext } from 'react';
// molecules
import Cloud from './../molecules/Cloud'
// common
import CommonStyle from './../../common/CommonStyle';
import HomeLayout from '../templates/HomeLayout';
import Title, { TitleThemes } from '../atoms/Title';
import queryString from 'query-string';
import Nav from '../molecules/Nav';
import Contact from '../organisms/Contact';
import About from '../organisms/About';
import Works from '../organisms/Works';
import History from '../organisms/History';

interface TitleObj {
  [key: string]: string;
}

const pages = ['about', 'works', 'history', 'contact'];
const titles: TitleObj = {
  'about': 'About',
  'works': 'Works',
  'history': 'History',
  'contact': 'Contact',
}

const Home: React.FC = (props: any) => {
  const qs = queryString.parse(props.location.search);
  const [query, setQuery] = useState(typeof qs.page === 'string' && pages.includes(qs.page) ? qs.page : 'about');

  const onClick = (newQuery: string) => {
    setQuery(newQuery);
  }

  useEffect(()=> {
    props.history.push({
      pathname: '/home',
      search: `?page=${query}`
    })
  }, [query]);

  return (
    <HomeLayout title="佐藤裕紀のポートフォリオサイト">
      <Nav query={query} onClick={onClick}/>
      <Title
        theme={[TitleThemes.INIT]}
        propStyle={{textAlign: 'center'}}
      >
        {titles[query]}
      </Title>
      {
        query === 'about' ? <About /> :
          query === 'works' ? <Works /> :
            query === 'history' ? <History /> :
              query === 'contact' ? <Contact /> : <React.Fragment />
      }
      <style jsx>{`

      `}</style>
    </HomeLayout>
  );
}

export default Home;