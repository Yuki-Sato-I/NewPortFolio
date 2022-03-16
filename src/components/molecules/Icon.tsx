import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// common
import CommonStyle from '../../common/CommonStyle';
// atoms
import Image, { ImageThemes } from '../atoms/Image';
import Text from '../atoms/Text';

interface IconProps {
  image: string;
  percentage?: number;
  name?: string;
}

const Icon: React.FC<IconProps> = ({ image, percentage, name }) => {
  const data = {
    datasets: [{
      data: [percentage, 100-percentage!],
      backgroundColor: [
        CommonStyle.AccentColor,
        CommonStyle.BorderColor,
      ]
    }]
  };

  var cicleSize = 100;

  return (
    <div className="icon-wrapper">
      <div className="image-wrapper">
        <div>
          <Doughnut
            data={data}
            height={150}
            width={150}
            options={{
              tooltips: {enabled: false},
              hover: {mode: null},
            }}
          />
        </div>
        <Image height={cicleSize} width={cicleSize} src={image} theme={[ImageThemes.SKILL]} propStyle={{borderRadius: '50%', height: `${cicleSize}px`, width: `${cicleSize}px`, position: 'absolute', zInedex: 122, top: '29px'}}/>
      </div>
      <Text propStyle={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px', padding: '5px'}}>{name}</Text>
      <style jsx>{`
        .icon-wrapper {
          display: inline-block;
          padding: 10px 5px;
        }
        .image-wrapper {
          display: inline-block;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
      `}</style>
    </div>
  );
}

export default Icon;