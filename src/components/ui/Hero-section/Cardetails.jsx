import React, { useMemo } from 'react';
import CardCarousel from './CardCresoual';

const Cardetails = ({ id, name,images, ratingnum, ratingimg, reviews, text }) => {

  
  const memoizedImage = useMemo(() => [images], [images]);
  const array = new Array(5).fill();

  return (
    <div>
      <div
        key={id}
        className="card mt-8 mb-[55px]  bg-[#F8F8F8] rounded-xl w-full xl:max-w-[285px]"
      >
        <CardCarousel image={memoizedImage} />
        <div className="card-box-text p-[14px]">
          <h1 className="font-font-roboto font-semibold text-[19px] text-[#232323]">
            {name}
          </h1>
          <p className="text-[10px] mt-2 mb-2 xl:text-sm font-normal font-font-roboto text-[#8F8F8F] xl:mb-6 xl:max-w-[234px]">
            {text}
          </p>
          <div className="rating-box flex items-center gap-4">
            <div className="flex items-center justify-center gap-[6px]">
              {array.map((_, idx) => {
                return (
                  <img
                    key={idx}
                    className="max-w-[10px]"
                    src={ratingimg}
                    alt={name}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-2 ">
              <span className="font-font-roboto text-[10px] xl:text-sm text-[#232323]">
                {ratingnum}
              </span>
              <p className="text-[8px]  xl:text-sm text-[#7A7A7A] font-normal">
                {reviews}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardetails;
