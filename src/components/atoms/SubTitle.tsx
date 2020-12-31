import React from 'react';
// common
import CommonStyle from '../../common/CommonStyle';

interface SubTitleProps {
  theme?: SubTitleThemes[];
  children?: React.ReactNode;
  propStyle?: {};
}

export enum SubTitleThemes {
  INIT = 'INIT',
}

enum ModifierClassNames {
  INIT = 'subtitle-init',
}


const SubTitle: React.FC<SubTitleProps> = ({theme = [SubTitleThemes.INIT], children, propStyle = {}}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <h2 className={["title", modifierClasses].join(' ')} style={propStyle}>
      {children}
      <style jsx>
        {`
          .subtitle-init {
            color: ${CommonStyle.TextColor};
            font-size: ${CommonStyle.SubTitleSize};
            padding: 0.75rem 0;
          }

        `}
      </style>
    </h2>
  );
}

export default SubTitle;