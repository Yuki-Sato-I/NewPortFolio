import React from 'react';
// atoms
import Text, { TextThemes } from '../atoms/Text';
import Image from '../atoms/Image';

interface CloudProps {
  text: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

var cloudSize = 300;

const Cloud: React.FC<CloudProps> = ({ text, onMouseOver, onMouseOut }) => {
  const onClick = (event: any) => {
    event.currentTarget.classList.add('active');
  }

  return (
    <div className="cloud-wrapper" onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
      <Text theme={[TextThemes.CLOUD]} propStyle={{ position: 'absolute', top: '45%', left: '50%', transform: 'translateY(-50%) translateX(-50%)' }}>{text}</Text>
      <Image src='./images/cloud.png' height={cloudSize} width={cloudSize}/>
      <style jsx>{`
        .cloud-wrapper {
          display: inline-block;
          width: ${cloudSize}px;
          height: ${cloudSize}px;
          position: relative;
          animation: img_box 4s linear infinite;
          cursor: pointer;
          z-index: 100;
        }

        @keyframes img_box {
          0% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
          100% { transform: translateY(0) }
        }

        .active {
          animation: out 1.5s ease forwards;
        }

        .active img {
          animation: out 4s ease;
        }

        @keyframes out {
          0% {
            transform: translateX(0px);
          }

          10% {
            transform: translateX(30px);
          }

          100% {
            transform: translateX(-2000px);
          }
        }

      `}</style>
    </div>
  );
}

export default Cloud;