import React, { useEffect, useState } from 'react';
import axios from 'axios';
// common
import CommonStyle from './../../common/CommonStyle';
// atoms
import Image, { ImageThemes } from '../atoms/Image';
import SubTitle from '../atoms/SubTitle';
import Text, { TextThemes } from '../atoms/Text';
import Title, { TitleThemes } from '../atoms/Title';
import { GitHub, Facebook, Twitter, Instagram } from 'react-feather';

interface SkillIconProps {
}

const SkillIcon: React.FC<SkillIconProps> = ({ }) => {

  return (
    <div className="skill-wrapper">
      <SubTitle propStyle={{textAlign: 'center', fontSize: CommonStyle.TitleSize }}>Skill Set</SubTitle>
      <style jsx>{`
      `}</style>
    </div>
  );
}

export default SkillIcon;