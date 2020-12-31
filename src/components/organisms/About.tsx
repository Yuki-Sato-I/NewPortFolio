import React, { useState, useEffect, useContext } from 'react';
// molecules
import Cloud from './../molecules/Cloud'
// common
import CommonStyle from './../../common/CommonStyle';
import HomeLayout from '../templates/HomeLayout';
import Text, { TextThemes } from '../atoms/Text';
import SubTitle, { SubTitleThemes } from '../atoms/SubTitle';
import Profile from '../molecules/Profile';
import Skill from '../molecules/Skill';

const About: React.FC = (props: any) => {

  return (
    <div className="about-wrapper">
      <Profile />
      <style jsx>{`
        .about-wrapper {
          padding: 0 80px;
        }
      `}</style>
    </div>
  );
}

export default About;