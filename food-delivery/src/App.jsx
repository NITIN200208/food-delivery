import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from  'react-router-dom'
import Home from './pages/Homes/Home'
import Cart from './pages/Carts/Cart'
import Placeorder from './pages/PlaceOrders/Placeorder'
import Footer from './Footer/footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App=()=>{

  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/> 
      </>

  )
}

export default App