import React from 'react'
import About from './Pages/About'
import Allergy from './Pages/Allergy'
import CartPage from './Pages/CartPage'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import ProductDescription from './Pages/ProductDescription'
import Service from './Pages/Service'
import { Route, Routes } from 'react-router-dom'
import Navigation from './NavBar/Navigation'


function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/allergy' element={<Allergy/>}/>
        <Route path='/cartpage' element={<CartPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/productdescription' element={<ProductDescription/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
      
    </div>
  )
}

export default App
