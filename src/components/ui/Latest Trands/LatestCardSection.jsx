import React from 'react'
import Container from '../common/Container'
import LatestCardsDetails from './LatestCardsDetails'
import { Button } from '@nextui-org/react'

const LatestCardSection = () => {
  return (
    
      <Container className={'mt-[102px] mb-6'}>
        <div>
            <h1 className='font-extrabold font-lexend text-3xl'>The latest trends</h1>
        <LatestCardsDetails/>
        </div>

        <div className='Discover-section w-full text-center mt-[52px]'>
             <h1 className='font-lexend text-xl mb-5 text-[#1E1E1E]'>Discover more cool restaurants</h1>
             <Button className='bg-[#1677BD] px-10 py-3 rounded-full text-white'>Show more</Button>
        </div>
      </Container>
   
  )
}

export default LatestCardSection
