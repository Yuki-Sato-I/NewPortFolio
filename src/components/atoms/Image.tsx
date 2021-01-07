import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface ImageProps {
  theme?: ImageThemes[];
  src: string;
  height?: number;
  width?: number;
  propStyle?: {};
  eye?: boolean;
}

export enum ImageThemes {
  INIT    = 'INIT',
  EYE     = 'EYE',
  PROFILE = 'PROFILE',
  SKILL   = 'SKILL'
}

enum ModifierClassNames {
  INIT    = 'image-init',
  EYE     = 'image-eye',
  PROFILE = 'image-profile',
  SKILL   = 'image-skill'
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

          .image-wrapper img {
            max-width: 100%;
            height: auto;
          }

          .image-eye {
          }

          .eye {
          }

          .image-profile, .image-skill {
            overflow: hidden;
          }
        `}
      </style>
    </p>
  );
}

export default Image;