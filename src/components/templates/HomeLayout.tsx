import React from 'react';
// library
import { Helmet } from 'react-helmet';

interface HomeLayoutProps {
  title: string;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main>
        {children}
      </main>
      <style jsx>{`
        @media only screen and (min-width: 1024px) {
          main {
            padding-left: 176px;
          }
        }
        main {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default HomeLayout;