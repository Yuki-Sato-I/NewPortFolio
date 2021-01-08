import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import SwiperCore, { Pagination, EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide, } from "swiper/react";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

interface Props {
  data: Array<any>;
  setSelectedItemID: Dispatch<SetStateAction<number>>;
}

const SwiperComponent: React.FC<Props> = ({data, setSelectedItemID}) => {
  return (
    <div>
      <Swiper
        effect="coverflow"
        pagination={{ clickable: true }}
        centeredSlides
        width={350}
        onSlideChange={(swiper) => setSelectedItemID(swiper.realIndex)}
        navigation
      >
        {data.map((item, i) => {
          return (
            <SwiperSlide key={`${item.image}${i}`} style={{background: 'white', width: 'auto'}} zoom={true}>
              <img key={`${item.image}`} src={item.image} width="350" height="350"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default SwiperComponent;