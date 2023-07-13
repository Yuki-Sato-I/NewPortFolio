import React from 'react';
import { Link } from 'react-feather';
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

// image は 700x500 に固定するように

const workData = [
  {
    image: '/images/work4.jpg',
    title: 'covEAT',
    overview: 'covEATはコロナ禍でも安心して外食ができるように飲食店の感染症対策をまとめたグルメサービス.\n感染症対策をしているお店だけが掲載されており,駅名検索をすることも可能.\n店舗数100件ほど掲載',
    content: '長引くコロナ禍で,私たちの外食のあり方が変わってきており,たまには外食したい.でも感染対策がきちんとされているか不安,というような声があった.そういった不安を解消するために各お店ごとの感染症対策に特化したグルメマップを作成した.\n\n店舗数は100件以上の登録をすることに成功したが,\n・お店の情報の収集,ユーザーの取得\n・書かれてる感染症対策がコロナに有効的かどうか分からない\nなどなど様々な不安要素(開発を続けていく上での)が出てきており現在は更新されていない.\n(サーバー側の課金を停止したため,機能が制限・ログインなどの機能も停止されています)',
    date: '2020-09-15',
  },
  {
    image: '/images/work3.jpg',
    title: 'STOCKROOM',
    overview: '「ひらめき」をストックしてタグで管理できるネタ帳アプリ.\nふとした時に出てきたアイデアのひらめきをストックし見返すことができる.\nまた,集めたひらめきをシャッフル機能によって掛け合わすことによって,考えつかなかったアイデアを生み出すことを促す.',
    content: '「ひらめき」をストックしてアイデアを蓄積していくメモアプリ.\n\n「ひらめき」を一箇所にまとめることで,プロジェクトを超えて柔軟に活用することができる.メモした「ひらめき」たちは,タグで絞り込んだり並べ替えたりしていつでも簡単に見返すことができ,さらに「シャッフル機能」でランダムなひらめきの組み合わせを提案.\n新たな「ひらめき」をサポートすることができる.\n\n新しいアイデアがなかなか出てこない時,昔の「ひらめき」を見返す時,アイデアをまとめる時など様々な用途に使用することができる.',
    date: '2020-07-29',
  },
  {
    image: '/images/work2.jpg',
    title: 'がんちゃんねる',
    overview: '岩手大学情報一元化アプリ.\n大学内に散らばっている学生に必要な情報をまとめており,学校が紹介しているアルバイト情報や,大学生協,大学の情報など確認をすることができる.\niOS/Androidで公開している.\n累計約2,300インストール達成.',
    content: '岩手大学では「アイアシスタント」という,シラバスや授業記録に加え,科目ごとの電子掲示板（BBS）や課題・レポート,ドリルにアンケートなど,受講期間を通じて,教員と学生が双方向的に活用できる多彩な機能を備えた学習支援システムが存在する.\nしかしこれはパソコン専用のサイトであり,スマートフォンで見るとレイアウトだったりボタンが小さかったりととても使いづらい状況であった.それを解決しようとし他のがこのアプリの始まりである.\n\n現在では「アイアシスタント」以外に,大学サイトの情報一元化をしたり,学生団体が情報を掲載できる「学生掲示板」などの機能もついている.',
    url: 'https://ifive.sakura.ne.jp/ifive/works/ganchannel.html',
    date: '2019-04-01',
  },
  {
    image: '/images/work1.jpg',
    title: '降水量お知らせbot(LINE bot)',
    overview: '毎朝7時に降水量を自動で送ってくれるbot.\n地域設定ができ,最初に打ち込めば自動でその都道府県の降水量を教えてくれる.\n帰宅時のみ雨が降る時などの場合でも傘の持ち忘れを防ぐために作成.',
    content: 'LINE APIを使って朝7時に降水量を自動で送ってくれるbotを作成した.地域設定ができ,最初に登録をしておけば自動でその都道府県の降水量を教えてくれるようになり,傘を持つ時などがわかるようになる.\n\n天気予報で雨が降るとなっていても,朝雨が降っていないとどうしても傘を持って出かけない.その後雨が降って濡れてしまうということがよくある.そういったことを防ぐために,天気予報を見なくてもLineで確認できるようにした.朝忙しくて天気予報をみない,ネットで調べるのもめんどくさいという人に,オススメのLINE botである.自動送信なので勝手にその日の降水量が送られてくる.毎朝7時に自動送信される。\n\nまた自動送信の時間では無くても,Botに話しかける事でいつでも確認できる.「明日」というキーワードを打てば,明日の降水量も教えてくれる.それだけでは無く,ある一定のワードにも反応してくれる.',
    date: '2018-12-04',
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
            maxHeight={500}
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
          <SubTitle>関連URL { workData[id].url && <a href={workData[id].url} target='_blank' rel="noopener noreferrer" style={{color: CommonStyle.TextColor}}><Link style={{verticalAlign: 'top'}}/></a> }</SubTitle>
          <SubTitle>公開日</SubTitle>
          <Text theme={[TextThemes.PROFILE]}>{workData[id].date}</Text>
          <SubTitle>詳細</SubTitle>
          <Text theme={[TextThemes.PROFILE]} propStyle={{maxWidth: '800px'}}>{workData[id].content}</Text>
        </div>
      </div>
      <style jsx>{`
        .image {
        }

        .image-wrapper {
          position: relative;
          padding: 10px 100px;
          padding-left: 200px;
        }

        .overview {
          filter: drop-shadow(1px 2px 3px black);
          height: 200px;
          width: 300px;
          z-index: 400;
          padding: 10px 20px;
          color: ${CommonStyle.TextColor};
          font-size: ${CommonStyle.TextSize};
          background-color: ${CommonStyle.AccentColor};
          position: absolute;
          bottom: -50px;
          left: 550px;
          line-height: 1.75rem;
          white-space: pre-wrap;
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
            margin: 10px auto;
            color: ${CommonStyle.TextColor};
            font-size: ${CommonStyle.TextSize};
            line-height: 2rem;
            background-color: ${CommonStyle.AccentColor};
            max-width: 70vw;
          }
          .section {
            margin: 0;
            padding: 10px;
          }
        }

        @media only screen and (max-width: 479px) {
          .sp-overview {
            display: block;
            padding: 10px 20px;
            margin: 10px;
            max-width: 100%;
          }
        }

      `}</style>
    </HomeLayout>
  );
}

export default WorkDetail;