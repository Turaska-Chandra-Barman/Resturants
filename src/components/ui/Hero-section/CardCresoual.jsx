import React, { memo } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardCarousel = memo(({image}) => {
  const [images,id] = image;
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true, }}
      loop = {true}
    
    >
    
      {
        images.map((img) => {
          console.log(img)
          return <SwiperSlide key={crypto.randomUUID()}><img className='w-full' src={img} alt="" /></SwiperSlide>
        })
      }
    </Swiper>
  );
});

export default CardCarousel;
