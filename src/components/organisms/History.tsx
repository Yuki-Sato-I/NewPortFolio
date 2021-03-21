import React from 'react';
import CommonStyle from '../../common/CommonStyle';
import SubTitle from '../atoms/SubTitle';
// atoms
import Text from './../atoms/Text';
// molecules

// common

const History: React.FC = () => {

  return (
    <div className="history-wrapper">
      <ul className="timeline">
        <li>
          <p className="timeline-date">2017-4</p>
          <div className="timeline-content">
            <SubTitle>岩手大学 入学</SubTitle>
            <Text>システム創成工学科知能・メディア情報コースに入学.</Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2018-11</p>
          <div className="timeline-content">
            <SubTitle>開発活動の勉強を開始</SubTitle>
            <Text>
              大学で学んだことが活かせてない現状に不安を抱き,独学で開発の勉強を始める.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2018-12</p>
          <div className="timeline-content">
            <SubTitle>学内カンパニー「iFive」 加入</SubTitle>
            <Text>
              学生のみで構成されたコミュニティで,大学から毎年予算をもらい事業に取り組むという活動.<br/>
              独自アプリの開発や,受託開発などで収入を得ている.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2019-3</p>
          <div className="timeline-content">
            <SubTitle>札幌の会社で初インターン</SubTitle>
            <Text>
              独学で学び続けたWeb開発を実際の業務で使ってみたく,大学の春休みを利用して札幌の会社で3週間就業させていただいた.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2019-4</p>
          <div className="timeline-content">
            <SubTitle>1on1面談 初参加</SubTitle>
            <Text>
              この頃から就活と院進学のどちらが良いか意識し始める.<br/>
              東京で行われる1on1面談に2018-10頃まで毎月一回参加し,累計で50社以上の企業と面談をしてもらった.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2019-7</p>
          <div className="timeline-content">
            <SubTitle>都内IT企業での長期インターン</SubTitle>
            <Text>
              goとReactを使った,LMS(Learning Management System)の開発に携わる.現在も続けている.<br/>
              (2021-3現在)
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2019-8</p>
          <div className="timeline-content">
            <SubTitle>怒涛のインターン</SubTitle>
            <Text>
              大学の夏休みを利用し2018-8~2018-9まで,合計5社でインターンをする.<br/>
              業務に携わるものから,ハッカソン型のインターンもあった.<br/>
              ある会社のインターンでは個人優秀賞に選ばれた.それによって,エンジニア・デザイナー・ビジネスの各職種から選抜された学生同士で参加する1ヶ月ハッカソンインターンに参加した.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2020-2</p>
          <div className="timeline-content">
            <SubTitle>iFive 最優秀賞受賞</SubTitle>
            <Text>
              学内カンパニーのなかで,もっとも成果などを出したカンパニーに送られる最優秀賞を受賞.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2020-4</p>
          <div className="timeline-content">
            <SubTitle>iFive 代表に就任</SubTitle>
            <Text>
              iFive 代表に就任.限られた任期で成果を出せるよう頑張る.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2020-7</p>
          <div className="timeline-content">
            <SubTitle>enPiT 参加</SubTitle>
            <Text>
              高度人材育成プログラムenPiTに参加.<br/>
              (参考 <a href='http://emb.enpit.jp/enpit2/' target='_blank' rel="noopener noreferrer">http://emb.enpit.jp/enpit2/</a>)
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2021-3</p>
          <div className="timeline-content">
            <SubTitle>iFive 特別賞受賞</SubTitle>
            <Text>
              学内カンパニーのなかで,成果などを出したカンパニーに送られる賞を受賞.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2021-3</p>
          <div className="timeline-content">
            <SubTitle>全国情報処理学会 発表</SubTitle>
            <Text>
              全国情報処理学会,「人とロボットの協調作業における人間の位置予測」という題目で発表.
              学生奨励賞を受賞.
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2021-3</p>
          <div className="timeline-content">
            <SubTitle>岩手大学 卒業</SubTitle>
            <Text>
              岩手大学 卒業.卒業式は中止.
              (余談. 小学校の時も震災で正式な卒業式は中止になったので, 人生で, 最初と最後の卒業式に参加してません)
            </Text>
          </div>
        </li>
        <li>
          <p className="timeline-date">2021-4</p>
          <div className="timeline-content">
            <SubTitle>都内本社IT企業 就職</SubTitle>
            <Text>
              就職.勤務地都内
            </Text>
          </div>
        </li>
      </ul>
      <style jsx>{`
        .timeline {
          list-style: none;
          padding: 10px 20px;
        }
        .timeline > li {
          margin-bottom: 60px;
        }

        @media ( min-width : 640px ){
          .timeline > li {
            overflow: hidden;
            margin: 0;
            position: relative;
          }
          .timeline-date {
            width: 110px;
            float: left;
            text-align: center;
            margin-top: 20px;
          }
          .timeline-content {
            width: 75%;
            float: left;
            border-left: 3px rgba(255, 121, 121, 0.5) solid;
            padding-left: 30px;
            padding-bottom: 60px;
          }
          .timeline-content:before {
            content: '';
            width: 12px;
            height: 12px;
            background: ${CommonStyle.AccentColor};
            position: absolute;
            left: 106px;
            top: 24px;
            border-radius: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default History;