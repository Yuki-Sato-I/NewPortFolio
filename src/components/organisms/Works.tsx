import React, { useEffect, useState } from 'react';
// common
import CommonStyle from '../../common/CommonStyle';
// atoms
import SubTitle from '../atoms/SubTitle';
import Text, { TextThemes } from '../atoms/Text';
// molecules
import SwiperComponent from '../molecules/SwiperComponent';

interface WorksProps {
}

const Works: React.FC<WorksProps> = ({ }) => {
  const [selectedItemID, setSelectedItemID] = useState(0);
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
  return (
    <div className="works-wrapper">
      <SwiperComponent
        data={data}
        setSelectedItemID={setSelectedItemID}
      />
      <div className="discription">
        <SubTitle>{data[selectedItemID].title}</SubTitle>
        <Text>{data[selectedItemID].content}</Text>
      </div>
      <style jsx>{`
        .discription {
          padding: 16px;
        }
      `}</style>
    </div>
  );
}

export default Works;