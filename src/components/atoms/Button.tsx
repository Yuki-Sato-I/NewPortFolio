import React from 'react';
// common
import CommonStyle from './../../common/CommonStyle';

interface ButtonProps {
  theme?: ButtonThemes[];
  children?: React.ReactNode;
  propStyle?: {};
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
}

export enum ButtonThemes {
  INIT     = 'INIT',
  WORKMORE = 'WORKMORE',
}

enum ModifierClassNames {
  INIT     = 'button-init',
  WORKMORE = 'button-work-more',
}


const Button: React.FC<ButtonProps> = ({theme = [ButtonThemes.INIT], children, propStyle = {}, onClick}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    <button className={["button", modifierClasses].join(' ')} style={propStyle} onClick={onClick}>
      {children}
      <style jsx>
        {`
          .button {
            cursor: pointer;
            display: inline-block;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            color: ${CommonStyle.TextColor};
            font-weight: bold;
            padding: 0.5rem 4rem;
          }
          .button-init{
          }

          .button-work-more {
            background-color: ${CommonStyle.AccentColor};
            color: white;
          }
          
        `}
      </style>
    </button>
  );
}

export default Button;