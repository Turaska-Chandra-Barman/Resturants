import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import Headers from './components/ui/common/Headers';
import { Outlet } from 'react-router-dom';
import Usecontext from './components/hooks/useContext';

function App() {


  return (
    <Usecontext>
    <NextUIProvider>
      <Headers/>
      <Outlet/>
    </NextUIProvider>
    </Usecontext>
  )
}

export default App
