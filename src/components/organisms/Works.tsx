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
      image: '/images/work1.jpg',
      title: 'title0',
      overview: 'これはtitleです.titleでtitleなのでtitleです.'
    },
    {
      image: '/images/work1.jpg',
      title: 'title1',
      overview: 'これはtitleです.lm;lm;m;mtitleでtitleなのでtitleです.'
    },
    {
      image: '/images/work1.jpg',
      title: 'title2',
      overview: 'これはtitleです.t;lmlmm;mitleでtitleなのでtitleです.'
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
        <Text>{data[selectedItemID].overview}</Text>
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