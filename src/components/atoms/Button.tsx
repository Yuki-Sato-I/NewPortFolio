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
  INIT = 'INIT',
}

enum ModifierClassNames {
  INIT = 'button-init',
}


const Button: React.FC<ButtonProps> = ({theme = [ButtonThemes.INIT], children, propStyle = {}, onClick}) => {
  const modifierClasses = theme.map(data => ModifierClassNames[data]).join(' ');
  return (
    //style={propStyle}style直書き
    <button className={["button", modifierClasses].join(' ')} style={propStyle} onClick={onClick}>
      {children}
      <style jsx>
        {`
          .button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .button-init{
          }
          
        `}
      </style>
    </button>
  );
}

export default Button;