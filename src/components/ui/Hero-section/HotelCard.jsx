import React, { useContext, useMemo } from 'react';
import Container from '../common/Container';
import CardCarousel from './CardCresoual';
import { theameContext } from '../../hooks/useContext';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cardetails from './Cardetails';



const HotelCard = () => {

  const [getValue] = useContext(theameContext);
  const { bestRating } = getValue[0];
  const array = new Array(5).fill();



  return (
    <Container>
      <div className=" px-5 md:px-[52px] pt-5 bg-[#1677BD] rounded-lg relative">
        <h1 className="text-xl md:text-3xl font-normal font-lexend text-white">
          Find the best restaurant ratings below
        </h1>

        {/* Custom Navigation Buttons */}
        <button
          className="custom-prev absolute top-1/2 left-2 z-10 bg-white/80 drop-shadow-lg rounded-full w-[60px] h-[60px] text-2xl flex items-center justify-center shadow-md"
          style={{ transform: 'translateY(-50%) translateX(20%)' }}
        >
          <FaArrowLeft/> {/* Left Arrow */}
        </button>
        <button
          className="custom-next absolute top-1/2 right-2 z-10 bg-white rounded-full w-[60px] h-[60px] text-2xl flex items-center justify-center shadow-md"
          style={{ transform: 'translateY(-50%) translateX(-20%)' }}
        >
          <FaArrowRight/> {/* Right Arrow */}
        </button>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          breakpoints={{
            0:{
              slidesPerView:1,
              enabled:false,
            },
            1024:{
              slidesPerView:1,
              enabled:true,
            }
          }}
        >

{/* 
 maping card  */}


          {array.slice(0, 2).map((arry,i) => {
            return (
              <SwiperSlide key={i}  >
                <div  className="grid grid-cols-1   sm:grid-cols-2  lg:grid-cols-4 gap-2  xl:gap-8">
                  {bestRating.map(
                    (
                      { id, images, name, ratingimg, ratingnum, reviews, text },
                      i
                    ) => {


                      return (
                       <Cardetails id={id} images={images} ratingimg={ratingimg} ratingnum={ratingnum} reviews={reviews} text={text} name={name}/>
                      );
                    }
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

export default HotelCard;
