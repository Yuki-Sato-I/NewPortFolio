import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// atoms
import Image, { ImageThemes } from '../atoms/Image';
// molecules
import Cloud from './../molecules/Cloud'
// templates
import HomeLayout from '../templates/HomeLayout';

const topSelect = ["About", "Works"]
const bottomSelect = ["History", "Contact"]
// 現在はこのページ使わない
const Top: React.FC = () => {
  const [mark, setMark] = useState(false);
  const onMouseOver = () => {
    setMark(true);
  }

  const onMouseOut = () => {
    setMark(false);
  }

  return (
    true ?
    <Redirect to="/home?page=about" /> :
    <HomeLayout title="Portfolio | Yuki Sato">
      <div className="clouds-container">
        {topSelect.map((select: string) => <Cloud key={`cloud_${select}`} text={select} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />)}
      </div>
      <div className="clouds-container">
        {bottomSelect.map((select: string) => <Cloud key={`cloud_${select}`} text={select} onMouseOver={onMouseOver} onMouseOut={onMouseOut} />)}
      </div>
      <div className="profile-image-container">
        {mark ? <Image theme={[ImageThemes.INIT]} src='./images/bikkuri.png' width={200} height={200} propStyle={{display: 'block'}}/> : <React.Fragment/>}
        <Image theme={[ImageThemes.EYE]} src="./images/top_profile_1.png" width={350} height={350} />
      </div>
      <style jsx>{`
        .clouds-container {
          display: flex;
          height: 320px;
          justify-content: space-between;
          margin-bottom: 80px;
        }

        .profile-image-container {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          text-align: center;
        }

      `}</style>
    </HomeLayout>
  );
}

export default Top;