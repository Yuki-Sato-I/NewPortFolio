import React, { useState, useEffect, useContext } from 'react';
// molecules
import Cloud from './../molecules/Cloud'
// common
import CommonStyle from './../../common/CommonStyle';
import HomeLayout from '../templates/HomeLayout';
import Text, { TextThemes } from '../atoms/Text';
import SubTitle, { SubTitleThemes } from '../atoms/SubTitle';
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