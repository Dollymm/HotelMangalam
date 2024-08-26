import React from 'react'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import RoomPage from './pages/RoomPage'
import Attraction from './pages/Attraction'
import RoomPagetwo from './pages/RoomPagetwo'
import ScrollToTop from './component/ScrollToTop'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'

const App = () => {
  return (
    <Router>
    <ScrollToTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room' element={<RoomPagetwo/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/service' element={<ServicesPage/>}
      />
      
      <Route path='/about' element={<AboutPage/>}/>
      <Route path ='/near' element={<Attraction/>}/>
    </Routes>
      <Footer/>
    </Router>
  )
}

export default App