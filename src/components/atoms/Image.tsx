import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface ImageProps {
  theme?: ImageThemes[];
  src: string;
  height: number;
  width: number;
  propStyle?: {};
  eye?: boolean;
}

export enum ImageThemes {
  INIT    = 'INIT',
  EYE     = 'EYE',
  PROFILE = 'PROFILE',
}

enum ModifierClassNames {
  INIT    = 'image-init',
  EYE     = 'image-eye',
  PROFILE = 'image-profile',
}


const Image: React.FC<ImageProps> = ({theme = [ImageThemes.INIT], src, height, width, propStyle = {}, eye}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={["image-wrapper", modifierClasses].join(' ')} style={propStyle}>
      <img src={src} height={height} width={width}/>
      {eye ? <span className="eye" /> : ''}
      <style jsx>
        {`
          .image-wrapper {
            display: inline-block;
          }

          .image-eye {
          }

          .eye {
          }

          .image-profile {
            overflow: hidden;
          }
        `}
      </style>
    </p>
  );
}

export default Image;