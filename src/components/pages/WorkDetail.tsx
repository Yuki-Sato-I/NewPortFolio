import React, { useState, useEffect, useContext } from 'react';
// common
import CommonStyle from './../../common/CommonStyle';
// atoms
import SubTitle from '../atoms/SubTitle';
import Text, { TextThemes } from '../atoms/Text';
import Image from '../atoms/Image';
import Title, { TitleThemes } from '../atoms/Title';
// molecules
import Nav from '../molecules/Nav';
// templates
import HomeLayout from '../templates/HomeLayout';

// image は 700x550 に固定するように

const workData = [
  {
    image: '/images/work1.jpg',
    title: 'title0',
    overview: 'これはtitleです.titleでtitleなのでtitleです.概要はここに書きます.',
    content: 'ライティングはプロのカメラマンでも正しい光を当てるのは非常に難しいものです。正しいライティングを当てられた写真で始めることがベストな方法ですが、時には写真が暗い時があります。そんな時は輝度を調整することで、改善することができます.\n\n輝度を調整する時に気をつけたいのは、全体が明るく（または暗く）なることです。輝度は少しずつ変え、過度に明るいエリアをつくらないということに注意をはらう必要があります。そして多くの場合、コントラストも同時に調整することでバランスがよくなり、よりよい結果が得られます。',
    url: 'https://example.com',
    date: '2019-02-02',
  },
  {
    image: '/images/work1.jpg',
    title: 'title1',
    overview: 'これはtitleです.titleでtitleなのでtitleです.概要はここに書きます.',
    content: 'ライティングはプロのカメラマンでも正しい光を当てるのは非常に難しいものです。正しいライティングを当てられた写真で始めることがベストな方法ですが、時には写真が暗い時があります。そんな時は輝度を調整することで、改善することができます.\n\n輝度を調整する時に気をつけたいのは、全体が明るく（または暗く）なることです。輝度は少しずつ変え、過度に明るいエリアをつくらないということに注意をはらう必要があります。そして多くの場合、コントラストも同時に調整することでバランスがよくなり、よりよい結果が得られます。',
    url: 'https://example.com',
    date: '2019-02-02',
  },
  {
    image: '/images/work1.jpg',
    title: 'title2',
    overview: 'これはtitleです.titleでtitleなのでtitleです.概要はここに書きます.',
    content: 'ライティングはプロのカメラマンでも正しい光を当てるのは非常に難しいものです。正しいライティングを当てられた写真で始めることがベストな方法ですが、時には写真が暗い時があります。そんな時は輝度を調整することで、改善することができます.\n\n輝度を調整する時に気をつけたいのは、全体が明るく（または暗く）なることです。輝度は少しずつ変え、過度に明るいエリアをつくらないということに注意をはらう必要があります。そして多くの場合、コントラストも同時に調整することでバランスがよくなり、よりよい結果が得られます。',
    url: 'https://example.com',
    date: '2019-02-02',
  },
]

const WorkDetail: React.FC = (props: any) => {
  const id = Number(props.match.params.id);

  return (
    <HomeLayout title="佐藤裕紀のポートフォリオサイト">
      <Nav />
      <Title
        theme={[TitleThemes.INIT]}
        propStyle={{textAlign: 'center'}}
      >
        {workData[id].title}
      </Title>
      <div className="image">
        <div className="image-wrapper">
          <Image
            src={workData[id].image}
            propStyle={{backgroundColor: 'white'}}
          />
          <div className="overview pc">
            {workData[id].overview}
          </div>
        </div>
        <div className="sp-overview">
          {workData[id].overview}
        </div>
        <div className="section">
          <SubTitle>関連URL</SubTitle>
          <Text theme={[TextThemes.PROFILE]}>{workData[id].url}</Text>
          <SubTitle>公開日</SubTitle>
          <Text theme={[TextThemes.PROFILE]}>{workData[id].date}</Text>
          <SubTitle>詳細</SubTitle>
          <Text theme={[TextThemes.PROFILE]} propStyle={{whiteSpace: 'pre-wrap'}}>{workData[id].content}</Text>
        </div>
      </div>
      <style jsx>{`
        .image {
        }

        .image-wrapper {
          position: relative;
          padding: 10px 100px;
        }

        .overview {
          height: 200px;
          width: 300px;
          z-index: 400;
          padding: 10px 20px;
          color: ${CommonStyle.TextColor};
          font-size: ${CommonStyle.TextSize};
          background-color: ${CommonStyle.AccentColor};
          position: absolute;
          bottom: -80px;
          left: 550px;
        }

        .sp-overview {
          display: none;
        }

        .section {
          margin-top: 100px;
          padding: 10px 100px;
        }

        @media only screen and (max-width: 1023px) {
          .image-wrapper {
            padding: 10px;
            text-align: center;
          }
          .sp-overview {
            display: block;
            padding: 10px 20px;
            margin: 10px;
            color: ${CommonStyle.TextColor};
            font-size: ${CommonStyle.TextSize};
            background-color: ${CommonStyle.AccentColor};
          }
          .section {
            margin: 0;
            padding: 10px;
          }
        }

      `}</style>
    </HomeLayout>
  );
}

export default WorkDetail;