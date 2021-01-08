import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface TitleProps {
  theme?: TitleThemes[];
  children?: React.ReactNode;
  propStyle?: {};
}

export enum TitleThemes {
  INIT = 'INIT',
}

enum ModifierClassNames {
  INIT = 'title-init',
}


const Title: React.FC<TitleProps> = ({theme = [TitleThemes.INIT], children, propStyle = {}}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <h1 className={["title", modifierClasses].join(' ')} style={propStyle}>
      {children}
      <style jsx>
        {`
          .title {
            color: ${CommonStyle.TextColor};
            font-size: ${CommonStyle.TitleSize};
            padding: 3rem;
          }

          .title-init {
          }

          @media only screen and (max-width: 480px) {
            .title {
              padding: 1.5rem;
            }
          }

        `}
      </style>
    </h1>
  );
}

export default Title;