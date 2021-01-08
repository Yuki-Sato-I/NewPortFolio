import React from 'react';
// organisms
import Profile from './Profile';
import Skill from './Skill';

const About: React.FC = () => {

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