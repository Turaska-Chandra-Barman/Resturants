
import { useEffect } from 'react'
import { createContext, useState } from 'react'
import Data from '../lib/utils/Data'

export const theameContext = createContext('')

const useContext = ({children}) => {

    const [getValue,setValue] = useState(Data)


  

  return (
    <theameContext.Provider value={[getValue,setValue]}>
      {children}
    </theameContext.Provider>
  )
}

export default useContext
