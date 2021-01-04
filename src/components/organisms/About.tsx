import React, { useState, useEffect, useContext } from 'react';
// atoms
import Text, { TextThemes } from '../atoms/Text';
import SubTitle, { SubTitleThemes } from '../atoms/SubTitle';
// molecules
import Cloud from './../molecules/Cloud'
// organisms
import Profile from './Profile';
import Skill from './Skill';

const About: React.FC = (props: any) => {

  return (
    <div className="about-wrapper">
      <Profile />
      <Skill />
      <style jsx>{`
        .about-wrapper {
          padding: 0 80px;
        }
        @media only screen and (max-width: 480px) {
          .about-wrapper {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default About;