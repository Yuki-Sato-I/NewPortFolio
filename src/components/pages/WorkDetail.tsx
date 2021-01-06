import React, { useState, useEffect, useContext } from 'react';
// molecules
// common
import CommonStyle from './../../common/CommonStyle';
import HomeLayout from '../templates/HomeLayout';
import Title, { TitleThemes } from '../atoms/Title';
import Nav from '../molecules/Nav';

const WorkDetail: React.FC = (props: any) => {
  const id = props.match.params.id
  console.log(id)

  return (
    <HomeLayout title="佐藤裕紀のポートフォリオサイト">
      <Nav />
      <Title
        theme={[TitleThemes.INIT]}
        propStyle={{textAlign: 'center'}}
      >
        s
      </Title>
      <style jsx>{`

      `}</style>
    </HomeLayout>
  );
}

export default WorkDetail;