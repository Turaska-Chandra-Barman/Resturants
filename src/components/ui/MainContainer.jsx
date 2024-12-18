import React from 'react'
import Catagoerys from './Catagoerys'
import HotelCard from './Hero-section/HotelCard'
import LatestCardSection from './Latest Trands/LatestCardSection'
import ExploreSection from './ExpolorSection/ExploreSection'
import Activites from './Activites/Activites'


const MainContainer = () => {
  return (
    <>
   
        <Catagoerys/>
        <HotelCard/>
        <LatestCardSection/>
        <ExploreSection/>
        <Activites/>
  
    </>
  )
}

export default MainContainer
