import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'
// import AnimatedCursor from "react-animated-cursor"
function App() {

  return (
    <div className='bg-393E46' >
      {/* <AnimatedCursor 
      innerSize={8}
  outerSize={12}
      /> */}
   <Navbar/>
   <Outlet/>
   <Footer></Footer>
     
    </div>
  )
}

export default App
