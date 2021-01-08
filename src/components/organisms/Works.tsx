import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// common
import CommonStyle from '../../common/CommonStyle';
import Button, { ButtonThemes } from '../atoms/Button';
// atoms
import SubTitle from '../atoms/SubTitle';
import Text, { TextThemes } from '../atoms/Text';
// molecules
import SwiperComponent from '../molecules/SwiperComponent';

const Works: React.FC = () => {
  const [selectedItemID, setSelectedItemID] = useState(0);
  const history = useHistory();
  const data = [
    {
      image: '/images/work4.jpg',
      title: 'covEAT',
      overview: 'covEATはコロナ禍でも安心して外食ができるように飲食店の感染症対策をまとめたグルメサービス.\n感染症対策をしているお店だけが掲載されており,駅名検索をすることも可能.\n店舗数100件ほど掲載',
    },
    {
      image: '/images/work3.jpg',
      title: 'STOCKROOM',
      overview: '「ひらめき」をストックしてタグで管理できるネタ帳アプリ.\nふとした時に出てきたアイデアのひらめきをストックし見返すことができる.\nまた,集めたひらめきをシャッフル機能によって掛け合わすことによって,考えつかなかったアイデアを生み出すことを促す.',
    },
    {
      image: '/images/work2.jpg',
      title: 'がんちゃんねる',
      overview: '岩手大学情報一元化アプリ.\n大学内に散らばっている学生に必要な情報をまとめており,学校が紹介しているアルバイト情報や,大学生協,大学の情報など確認をすることができる.\niOS/Androidで公開している.\n累計約2,300インストール達成.',
    },
    {
      image: '/images/work1.jpg',
      title: '降水量お知らせbot(LINE bot)',
      overview: '毎朝7時に降水量を自動で送ってくれるbot.\n地域設定ができ,最初に打ち込めば自動でその都道府県の降水量を教えてくれる.\n帰宅時のみ雨が降る時などの場合でも傘の持ち忘れを防ぐために作成.',
    },
  ]

  const goDetail = (selectedItemID: number) => {
    history.push({
      pathname: `/works/${selectedItemID}`,
    });
  }

  return (
    <div className="works-wrapper">
      <SwiperComponent
        data={data}
        setSelectedItemID={setSelectedItemID}
      />
      <div className="btn-wrapper">
        <Button theme={[ButtonThemes.WORKMORE]} onClick={() => goDetail(selectedItemID)}>More</Button>
      </div>
      <div className="discription">
        <SubTitle>{data[selectedItemID].title}</SubTitle>
        <Text propStyle={{maxWidth: '850px'}}>{data[selectedItemID].overview}</Text>
      </div>
      <style jsx>{`
        .discription {
          padding: 16px;
        }

        .btn-wrapper {
          text-align: center;
          margin: 24px 0;
        }
      `}</style>
    </div>
  );
}

export default Works;