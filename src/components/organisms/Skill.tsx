import React from 'react';
// common
import CommonStyle from '../../common/CommonStyle';
// atoms
import SubTitle from '../atoms/SubTitle';
// moleciles
import Icon from '../molecules/Icon';

interface SkillProps {
}

const Skill: React.FC<SkillProps> = ({ }) => {

  return (
    <div className="skill-wrapper">
      <SubTitle propStyle={{textAlign: 'center', fontSize: CommonStyle.TitleSize, marginBottom: '24px' }}>Skill Set</SubTitle>
      <Icon percentage={40} name="AWS" image="./images/skills/aws.png"/>
      <Icon percentage={50} name="C" image="./images/skills/c.png"/>
      <Icon percentage={60} name="C#" image="./images/skills/csharp.png"/>
      <Icon percentage={70} name="CSS" image="./images/skills/css.png"/>
      <Icon percentage={80} name="HTML" image="./images/skills/html.png"/>
      <Icon percentage={90} name="jQuery" image="./images/skills/jquery.png"/>
      <Icon percentage={10} name="Go" image="./images/skills/go.png"/>
      <Icon percentage={10} name="JavaScript" image="./images/skills/js.png"/>
      <Icon percentage={14} name="laravel" image="./images/skills/laravel.png"/>
      <Icon percentage={14} name="MySQL" image="./images/skills/mysql.png"/>
      <Icon percentage={14} name="PHP" image="./images/skills/php.png"/>
      <Icon percentage={14} name="Play" image="./images/skills/play.png"/>
      <Icon percentage={14} name="Ruby on Rails" image="./images/skills/rails.png"/>
      <Icon percentage={14} name="React" image="./images/skills/react.png"/>
      <Icon percentage={14} name="Ruby" image="./images/skills/ruby.png"/>
      <Icon percentage={14} name="Sass" image="./images/skills/sass.png"/>
      <Icon percentage={14} name="Scala" image="./images/skills/scala.png"/>
      <Icon percentage={14} name="Swift" image="./images/skills/swift.png"/>
      <Icon percentage={14} name="Unity" image="./images/skills/unity.png"/>
      <Icon percentage={14} name="Xamarin" image="./images/skills/xamarin.png"/>
      <Icon percentage={14} name="Docker" image="./images/skills/docker.png"/>
      <style jsx>{`
        .skill-wrapper {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Skill;