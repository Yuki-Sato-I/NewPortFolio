import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  propStyle?: {};
}

export enum TextThemes {
  INIT  = 'INIT',
  CLOUD = 'CLOUD'
}

enum ModifierClassNames {
  INIT  = 'text-init',
  CLOUD = 'text-cloud'
}


const Text: React.FC<TextProps> = ({theme = [TextThemes.INIT], children, propStyle = {}}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <p className={["text", modifierClasses].join(' ')} style={propStyle}>
      {children}
      <style jsx>
        {`
          .text {
            color: ${CommonStyle.TextColor};
          }

          .text-cloud {
            font-size: 32px;
            font-weight: 800;
          }
        `}
      </style>
    </p>
  );
}

export default Text;