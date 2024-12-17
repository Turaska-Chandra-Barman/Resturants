import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import { path } from 'framer-motion/client'
import MainContainer from './components/ui/MainContainer.jsx'


const router = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
        path:'/',
        element:<MainContainer/>
      },
      
    ]
     
    }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
