import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import { Toaster } from 'react-hot-toast'
import Footer from './component/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
      <Outlet/>
      <Footer/>
      <Toaster/>
    </div>
  )
}

export default App
