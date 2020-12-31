import React from 'react';
// common
import CommonStyle from '../../common/CommonStyle';

interface InputProps {
  id?: string;
  theme?: InputThemes[];
  propStyle?: {};
  handleChange: any;
  label: string;
  placeholder: string;
  name: string;
}

export enum InputThemes {
  INIT = 'INIT',
  REQUIRED = 'REQUIRED',
}

enum ModifierClassNames {
  INIT = 'input-init',
  REQUIRED = 'REQUIRED',
}


const Input: React.FC<InputProps> = ({ id, theme = [InputThemes.INIT], propStyle = {}, handleChange, label, placeholder, name }) => {
  const modifierClasses = theme?.map(data => ModifierClassNames[data]).join(' ');
  return (
    <div className={["form-container", modifierClasses].join(' ')} style={propStyle}>
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          name={name}
          placeholder={placeholder}
        />
      </div>
      <style jsx>{`
        .input-init{
        }

        .input-init input {
          background: ${CommonStyle.White};
        }

        .form-container {
          display: block;
          justify-content: center;
          align-items: center;
          max-width: 400px;
          position: relative;
          padding: 0.5rem 0.75rem;
        }
      
        {/* ラベル */}
        .input-label {
          font-weight: bold;
          font-size: 14px;
          line-height: 24px;
          text-align: left;
          margin-bottom: 4px;
          color: ${CommonStyle.TextColor};
          display: block;
        }
        .require-icon {
          display: none;
          margin-left: 2px;
          display: inline;
          color: ${CommonStyle.AccentColor};
        }

        input {
          width: 100%;
          border: 1px solid ${CommonStyle.BorderColor};
          box-sizing: border-box;
          border-radius: 4px;
          padding: 0.5rem 0.75rem;
        }
      `}</style>
    </div>

  );
}

export default Input;