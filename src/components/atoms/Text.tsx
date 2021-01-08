import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface TextProps {
  theme?: TextThemes[];
  children?: React.ReactNode;
  propStyle?: {};
}

export enum TextThemes {
  INIT    = 'INIT',
  CLOUD   = 'CLOUD',
  PROFILE = 'PROFILE',
}

enum ModifierClassNames {
  INIT    = 'text-init',
  CLOUD   = 'text-cloud',
  PROFILE = 'text-profile',
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
            white-space: pre-wrap;
            line-height: 1.5rem;
          }

          .text-cloud {
            font-size: 32px;
            font-weight: 800;
          }

          .text-profile {
            padding-left: 16px;
            margin-bottom: 12px;
            font-size: ${'20px'}
          }
        `}
      </style>
    </p>
  );
}

export default Text;