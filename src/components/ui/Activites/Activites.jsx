import React, { useContext } from 'react';
import Container from '../common/Container';
import { img } from 'framer-motion/client';
import { theameContext } from '../../hooks/useContext';

const Activites = () => {


    const[getValue]=useContext(theameContext);
    const{activites}=getValue[0];
    console.log(activites)

  const array = new Array(5).fill();

  return (
    <Container className={'mt-[83px] py-1'}>
      <h1 className="font-lexend font-extrabold text-2xl md:text-3xl text-[#1E1E1E] mb-6">
        Recents avtivities
      </h1>

    <div className=' space-y-[30px] lg:space-y-0  lg:grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[30px]'>


        {
            activites.map(({id,country,discover,img,images,data,name,primaryText,secondaryText})=>{

                return(
                    <div key={id} className="Activites-section lg:max-w-[457px] bg-[#F8F8F8] px-[13px] py-6 rounded-lg  ">
                    {/* userDetails section */}
            
                    <div className="activites-card-section mb-6 ">
                      <div className="username-details-section flex items-center gap-3">
                        <img
                          className=" p-3 md:p-4 bg-white rounded-full max-w-[40px] md:max-w-fit"
                          src="/image/manicon.svg"
                          alt="sdfs"
                        />
                        <div>
                          <h1 className="font-font-roboto font-semibold text-[14px] md:text-[21px] text-[#232323]">
                            {name}
                          </h1>
                          <p className="font-font-roboto font-normal text-[10px] md:text-base text-[#8A8A8A]">
                            {country}
                          </p>
                        </div>
                      </div>
                    </div>
            
                    {/* Rating-section */}
            
                    <div className="Rating-section flex items-center gap-[6px] mb-5">
                      <div className="ratings flex items-center gap-[6px]">
                        {array.map((arr) => {
                          return (
                            <img className='max-w-[15px] md:max-w-fit'  src={img} alt={name}/>
                          );
                        })}
                      </div>
                      <span className="font-font-roboto text-[14px] text-[#343434]">
                       {data}
                      </span>
                    </div>
            
                    {/* text-section */}
            
                    <div className="text-section">
                      <p className="primary-text font-font-roboto  text-sm md:text-base  text-[#5E5E5E] max-w-[432px]">
                        {primaryText}
                      </p>
                      <p className="secondary-text font-font-roboto text-sm md:text-base mt-5 text-[#5E5E5E] max-w-[432px]">
                       {secondaryText}
                      </p>
                    </div>
            
                    {/* image-section */}
            
                    <div className="img-section flex items-center flex-wrap gap-3 mt-[40px] mb-5">
                        {
                            images.map((img) => {

                             return   <img className='max-w-[80px] md:max-w-fit' src={img} alt="name" />
                            })
                        }
                    
                    </div>
            
                    <span className="underline  font-lexend font-medium text-[17px] text-[#232323]">
                      Discover
                    </span>
                  </div>
                )
            })
        }

</div>
    </Container>
  );
};

export default Activites;
