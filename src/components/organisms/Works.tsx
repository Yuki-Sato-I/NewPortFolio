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
      image: './images/top_profile_1.png',
      title: 'title0',
      content: 'これはtitleです.titleでtitleなのでtitleです.'
    },
    {
      image: './images/top_profile_1.png',
      title: 'title1',
      content: 'これはtitleです.lm;lm;m;mtitleでtitleなのでtitleです.'
    },
    {
      image: './images/top_profile_1.png',
      title: 'title2',
      content: 'これはtitleです.t;lmlmm;mitleでtitleなのでtitleです.'
    },
  ]

  const goDetail = (selectedItemID: number) => {
    history.push({
      pathname: `/works/${selectedItemID}`,
      state: { data: data[selectedItemID] }
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
        <Text>{data[selectedItemID].content}</Text>
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