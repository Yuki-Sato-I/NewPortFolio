import React from 'react';
// common
import CommonStyle from '../../common/CommonStyle';
// atoms
import SubTitle from '../atoms/SubTitle';
// moleciles
import Icon from '../molecules/Icon';

const Skill: React.FC = () => {

  return (
    <div className="skill-wrapper">
      <SubTitle propStyle={{textAlign: 'center', fontSize: CommonStyle.TitleSize, marginBottom: '24px' }}>Skill Set(アプリリリース等)</SubTitle>
      <Icon percentage={100} name="React" image="./images/skills/react.png"/>
      <Icon percentage={100} name="TypeScript" image="./images/skills/typescript.png"/>
      <Icon percentage={100} name="JavaScript" image="./images/skills/js.png"/>
      <Icon percentage={100} name="Java" image="./images/skills/java.png"/>
      <Icon percentage={100} name="Spring Boot" image="./images/skills/springboot.png"/>
      <Icon percentage={100} name="Spring Batch" image="./images/skills/springbatch.png"/>
      <Icon percentage={100} name="Ruby" image="./images/skills/ruby.png"/>
      <Icon percentage={100} name="Ruby on Rails" image="./images/skills/rails.png"/>
      <Icon percentage={100} name="Go" image="./images/skills/go.png"/>
      <Icon percentage={100} name="Docker" image="./images/skills/docker.png"/>
      <Icon percentage={100} name="C#" image="./images/skills/csharp.png"/>
      <Icon percentage={100} name="Xamarin" image="./images/skills/xamarin.png"/>
      <Icon percentage={100} name="HTML" image="./images/skills/html.png"/>
      <Icon percentage={100} name="CSS" image="./images/skills/css.png"/>
      <Icon percentage={100} name="laravel" image="./images/skills/laravel.png"/>
      <Icon percentage={100} name="MySQL" image="./images/skills/mysql.png"/>
      <Icon percentage={100} name="Postgresql" image="./images/skills/postgresql.png"/>
      <Icon percentage={100} name="PHP" image="./images/skills/php.png"/>
      <Icon percentage={100} name="Sass" image="./images/skills/sass.png"/>
      <Icon percentage={100} name="Swift" image="./images/skills/swift.png"/>
      <Icon percentage={100} name="jQuery" image="./images/skills/jquery.png"/>
      <Icon percentage={100} name="Unity" image="./images/skills/unity.png"/>
      <Icon percentage={100} name="Python" image="./images/skills/python.png"/>
      <Icon percentage={100} name="AWS" image="./images/skills/aws.png"/>
      <style jsx>{`
        .skill-wrapper {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Skill;