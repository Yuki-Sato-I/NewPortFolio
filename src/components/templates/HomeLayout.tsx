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
        main {
          padding: 0 128px;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default HomeLayout;