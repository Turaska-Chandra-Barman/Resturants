import React, { useContext } from 'react'
import CardCarousel from '../Hero-section/CardCresoual'
import { theameContext } from '../../hooks/useContext'


const LatestCardsDetails = () => {

    const[getValue] = useContext(theameContext);
    const{latestTrands}=getValue[0];


  return (

    // grid section
    <div className=' mt-6 grid grid-cols-[repeat(auto-fit,minmax(255px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9'>
        

        {/* card section */}

        {
            latestTrands.map(({id,images,name,ratingnum,ratingimg,reviews,text}) => {
                return(
                    <div className=' bg-[#F8F8F8] rounded-lg '>
                    <CardCarousel image={[images,id]}/>
        
                    <div className='px-[14px] mt-3'>
                        <h1 className='font-font-roboto font-semibold text-[22px] text-[#232323]'>{name}</h1>
                        <p className=' max-w-[280px] mt-3  font-font-roboto font-normal text-[13px] sm:text-base text-[#8F8F8F]'>{text}</p>
                        
                        {/* rating section */}
        
                        <div className='flex items-center gap-1 '>
                            <div className='flex items-center gap-2'>
                            {
                                ratingimg.map((img) => {
                                    
                                  return  <img src={img} alt="" />
                                })
                            }
                            </div>     
        
                            <div className='flex items-center gap-1   m-5'>
                                <span className='font-font-roboto font-normal text-[10px] md:text-[15px] text-[#232323]'>{ratingnum}</span>
                                <span className='font-font-roboto font-normal text-[10px] md:text-[12px] text-[#7A7A7A]'>{reviews}</span>
                            </div>
                        </div>
        
                    </div>
                </div>
                )
            })
        }
  
    </div>
  )
}

export default LatestCardsDetails
