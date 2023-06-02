import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar  from './components/Navbar/Navbar'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
   <Navbar/>
   <Outlet/>
     
    </div>
  )
}

export default App
