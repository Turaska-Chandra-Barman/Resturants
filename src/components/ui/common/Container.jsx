import React from 'react'
import { cn } from '../../lib/utils/tailwindMarge'



const Container = ({children,className}) => {
  return (
    <div className={cn('container max-w-[1439px]  px-[47px]  mx-auto mt-10',className)}>{children}</div>
  )
}


export default Container