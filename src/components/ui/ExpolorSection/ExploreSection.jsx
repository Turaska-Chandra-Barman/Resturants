import React from 'react'
import Container from '../common/Container'
import { Button } from '@nextui-org/react'

const ExploreSection = () => {
  return (
    <div className={'w-full bg-[#F2F2F2] mt-[84px]'}>
        <div className='px-[40px] md:px-[182px] py-6  grid grid-cols-1 items-center lg:grid-cols-2 gap-5'>
            <div>
                <h1 className='font-lexend font-extrabold text-lg md:text-xl lg:text-3xl'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h1>
                <p className='font-font-roboto text-base mt-[28px] mb-[63px]'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                <Button className='px-[20px] md:px-[34px] rounded-full py-4 bg-[#1E1E1E] font-font-roboto text-[17px] text-white/90'>Explore MyFeedback business</Button>
            </div>
            <img src="/image/explore.svg" alt="" />
        </div>
    </div>
  )
}

export default ExploreSection
