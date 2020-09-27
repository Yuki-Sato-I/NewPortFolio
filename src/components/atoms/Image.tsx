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
  INIT = 'INIT',
  EYE  = 'EYE'
}

enum ModifierClassNames {
  INIT = 'image-init',
  EYE = 'image-eye',
}


const Image: React.FC<ImageProps> = ({theme = [ImageThemes.INIT], src, height, width, propStyle = {}, eye}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={["image_wrapper", modifierClasses].join(' ')} style={propStyle}>
      <img src={src} height={height} width={width}/>
      {eye ? <span className="eye" /> : ''}
      <style jsx>
        {`
          .image_wrapper {
          }

          .image-eye {
            
          }

          .eye {

          }
        `}
      </style>
    </p>
  );
}

export default Image;